import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";
import { parse } from "node-html-parser";

// Rutas indexables a prerenderizar. El router no tiene rutas dinámicas
// (ver App.tsx), así que la lista es finita y explícita. Se excluyen /gracias
// (noindex) y * (NotFound).
const PRERENDER_ROUTES = [
  "/",
  "/productos",
  "/nosotros",
  "/soluciones",
  "/servicios-tecnicos",
  "/casos-exito",
  "/blog",
  "/contacto",
  "/politica-de-privacidad",
];

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Solo en build: renderiza el HTML de cada ruta con Puppeteer y lo escribe
    // en dist/<ruta>/index.html (con <head> completo de react-helmet-async).
    ...(command === "build"
      ? [
          prerender({
            routes: PRERENDER_ROUTES,
            renderer: "@prerenderer/renderer-puppeteer",
            rendererOptions: {
              // Esperar el evento que dispara el root cuando el contenido real
              // de la ruta ya está en el DOM (ver src/App.tsx).
              renderAfterDocumentEvent: "app-rendered",
              // No saturar: 2 rutas en paralelo.
              maxConcurrentRoutes: 2,
              // Ignorar requests a terceros (GTM/GA/Zoho) durante el prerender.
              skipThirdPartyRequests: true,
            },
            postProcess(renderedRoute) {
              // 1) El prerender corre contra un server local (localhost:PUERTO);
              //    reescribir cualquier URL absoluta a localhost hacia producción.
              renderedRoute.html = renderedRoute.html.replace(
                /(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?/gi,
                "https://varosacr.com"
              );

              // 2) Dedupe DIRIGIDO de og:* / twitter:*.
              //    index.html trae etiquetas og/twitter ESTÁTICAS (sin data-rh)
              //    como respaldo; react-helmet-async inyecta las suyas por página
              //    (data-rh="true"). En el HTML prerenderizado quedan ambas.
              //    Regla: para cada clave que aparezca con AMBAS variantes, borrar
              //    solo la estática (sin data-rh) y conservar la de Helmet. Las que
              //    aparecen una sola vez (Helmet no las define) NO se tocan.
              //    Se usa parser de HTML (no regex) para no malformar el <head>.
              const root = parse(renderedRoute.html);
              const socialMetas = root
                .querySelectorAll("meta")
                .filter((m) => {
                  const key =
                    m.getAttribute("property") || m.getAttribute("name") || "";
                  return key.startsWith("og:") || key.startsWith("twitter:");
                });

              const byKey = new Map();
              for (const m of socialMetas) {
                const key =
                  m.getAttribute("property") || m.getAttribute("name");
                if (!byKey.has(key)) byKey.set(key, []);
                byKey.get(key).push(m);
              }

              for (const group of byKey.values()) {
                const hasHelmet = group.some(
                  (m) => m.getAttribute("data-rh") === "true"
                );
                if (group.length > 1 && hasHelmet) {
                  for (const m of group) {
                    if (m.getAttribute("data-rh") !== "true") m.remove();
                  }
                }
              }

              renderedRoute.html = root.toString();
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React core (se cachea por separado)
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Separar componentes UI de Radix (se cachea independiente)
          "vendor-ui": [
            "@radix-ui/react-tooltip",
            "@radix-ui/react-select",
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
          ],
        },
      },
    },
    // Reportar tamaño de chunks grandes
    chunkSizeWarningLimit: 150,
  },
}));
