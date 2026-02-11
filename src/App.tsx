import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Soluciones from "./pages/Soluciones";
import Productos from "./pages/Productos";
import CasosExito from "./pages/CasosExito";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import ServiciosTecnicos from "./pages/ServiciosTecnicos";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/casos-exito" element={<CasosExito />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios-tecnicos" element={<ServiciosTecnicos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
