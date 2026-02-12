import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhatsAppButton from "./components/WhatsAppButton";

// Lazy load — páginas se descargan solo cuando el usuario navega a ellas
const Soluciones = lazy(() => import("./pages/Soluciones"));
const Productos = lazy(() => import("./pages/Productos"));
const CasosExito = lazy(() => import("./pages/CasosExito"));
const Blog = lazy(() => import("./pages/Blog"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Contacto = lazy(() => import("./pages/Contacto"));
const ServiciosTecnicos = lazy(() => import("./pages/ServiciosTecnicos"));
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

const App = () => (
  <TooltipProvider>
    <HashRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
    </HashRouter>
  </TooltipProvider>
);

export default App;
