import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "varosa-cookie-consent";

/**
 * Aviso de cookies informativo (NO bloqueante): banner inferior con un botón
 * "Aceptar" que lo cierra. Recuerda en localStorage que ya fue aceptado para no
 * volver a mostrarse. No condiciona la carga de scripts (analítica ya corre vía
 * GTM); solo informa, conforme a la Política de Privacidad §8.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "aceptado") {
        setVisible(true);
      }
    } catch {
      // Si localStorage no está disponible (modo privado/bloqueado), mostramos
      // el aviso igualmente; simplemente no se persistirá.
      setVisible(true);
    }
  }, []);

  const aceptar = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "aceptado");
    } catch {
      // Ignorar: si no se puede persistir, el aviso reaparecerá en la próxima visita.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-40 bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="container mx-auto px-6 lg:px-10 py-4 md:py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 max-w-5xl mx-auto md:pr-28 lg:pr-0">
          <div className="flex items-start gap-3 flex-1">
            <Cookie
              className="h-6 w-6 text-accent shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-foreground/80 font-body leading-relaxed">
              Usamos cookies propias y de terceros con fines de analítica para
              mejorar su experiencia en el sitio. Al continuar navegando, usted
              acepta su uso conforme a nuestra{" "}
              <Link
                to="/politica-de-privacidad"
                className="text-primary hover:text-accent underline underline-offset-2 font-medium transition-colors"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </div>
          <Button
            onClick={aceptar}
            className="bg-primary hover:bg-primary/90 text-white font-semibold shrink-0 w-full md:w-auto"
          >
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
