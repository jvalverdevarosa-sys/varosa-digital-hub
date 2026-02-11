import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/50686703251?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20productos%20y%20servicios%20de%20VAROSA"
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
