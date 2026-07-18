import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieConsent from "./components/CookieConsent";

// Lazy load — páginas se descargan solo cuando el usuario navega a ellas
const Soluciones = lazy(() => import("./pages/Soluciones"));
const Productos = lazy(() => import("./pages/Productos"));
const CasosExito = lazy(() => import("./pages/CasosExito"));
const Blog = lazy(() => import("./pages/Blog"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Contacto = lazy(() => import("./pages/Contacto"));
const ServiciosTecnicos = lazy(() => import("./pages/ServiciosTecnicos"));
const Gracias = lazy(() => import("./pages/Gracias"));
const PoliticaDePrivacidad = lazy(() => import("./pages/PoliticaDePrivacidad"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading spinner con colores de marca
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground font-body">Cargando...</p>
    </div>
  </div>
);

// Envía page_view a GTM/GA4 en cada cambio de ruta (necesario para SPA: las
// navegaciones de cliente no disparan carga de página)
const GTMPageTracker = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "page_view",
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);
  return null;
};

// Con BrowserRouter la navegación de cliente NO reposiciona el scroll; al cambiar
// de ruta volvemos al inicio (no afecta el scroll suave in-page de Soluciones,
// que usa scrollIntoView y no cambia el pathname).
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  // Señal para @prerenderer/rollup-plugin (renderAfterDocumentEvent: 'app-rendered').
  // Las páginas son lazy: esperamos a que #main-content exista en el DOM (el
  // fallback <Suspense> no lo renderiza) y disparamos un frame después, para que
  // react-helmet-async ya haya volcado <title>/description/OG al <head>.
  // En uso normal es un evento inocuo que nadie escucha.
  useEffect(() => {
    let frame: number;
    const signalWhenReady = () => {
      if (document.getElementById("main-content")) {
        frame = requestAnimationFrame(() =>
          document.dispatchEvent(new Event("app-rendered"))
        );
      } else {
        frame = requestAnimationFrame(signalWhenReady);
      }
    };
    frame = requestAnimationFrame(signalWhenReady);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
  <HelmetProvider>
    <TooltipProvider>
      <BrowserRouter>
        <GTMPageTracker />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios-tecnicos" element={<ServiciosTecnicos />} />
            <Route path="/gracias" element={<Gracias />} />
            <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
  );
};

export default App;
