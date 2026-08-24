import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { enlaceWhatsApp } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  // useLocation fuerza el recálculo del enlace en cada cambio de ruta, para que
  // la referencia refleje la página donde la persona está parada al hacer clic.
  useLocation();

  return (
    <a
      href={enlaceWhatsApp(
        "Hola, me interesa conocer más sobre los productos y servicios de VAROSA"
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold text-sm hidden sm:inline group-hover:inline">¿Necesita ayuda?</span>
    </a>
  );
};

export default WhatsAppButton;
