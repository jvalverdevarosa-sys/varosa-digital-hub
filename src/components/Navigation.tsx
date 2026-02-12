import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import varosaSogo from "@/assets/varosa-logo.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/soluciones", label: "Soluciones" },
    { to: "/productos", label: "Productos" },
    { to: "/servicios-tecnicos", label: "Servicios Técnicos" },
    { to: "/casos-exito", label: "Casos de Éxito" },
    { to: "/nosotros", label: "Nosotros" },
  ];

  return (
    <>
      {/* Skip to content — accesibilidad para navegación por teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Ir al contenido principal
      </a>

      <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-sm border-b border-primary/8 shadow-[0_1px_4px_rgba(0,60,113,0.06)]" aria-label="Navegación principal">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex h-20 sm:h-22 lg:h-24 items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center py-3 pl-4 sm:pl-6 pr-6 sm:pr-8">
              <img src={varosaSogo} alt="VAROSA — Ir al inicio" className="h-[65px] sm:h-[75px] lg:h-[85px] w-auto" />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="px-4 py-2.5 text-[15px] font-semibold text-foreground hover:text-highlight transition-all duration-200 relative group"
                  activeClassName="text-highlight"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300" aria-hidden="true" />
                </NavLink>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa hover:shadow-[0_6px_20px_hsl(var(--primary)/0.35)] rounded-md px-7 py-5 text-[15px] transition-all duration-300">
                <NavLink to="/contacto">Solicitar Cotización</NavLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div id="mobile-menu" className="lg:hidden py-5 space-y-2 border-t border-primary/8" role="navigation" aria-label="Menú móvil">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="block px-6 py-3 text-base font-semibold text-foreground hover:text-highlight hover:bg-highlight/5 rounded-md transition-all"
                  activeClassName="text-highlight bg-highlight/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="px-6 pt-3">
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa rounded-md py-6">
                  <NavLink to="/contacto" onClick={() => setIsOpen(false)}>
                    Solicitar Cotización
                  </NavLink>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
