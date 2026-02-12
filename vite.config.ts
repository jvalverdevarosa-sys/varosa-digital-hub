import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/varosa-digital-hub/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
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
