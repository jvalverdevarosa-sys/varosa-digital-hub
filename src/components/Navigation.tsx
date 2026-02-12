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
    <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-sm border-b border-primary/8 shadow-[0_1px_4px_rgba(0,60,113,0.06)]">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between">
          {/* Logo with Reserved Area */}
          <NavLink to="/" className="flex items-center py-3 pl-6 pr-8">
            <img src={varosaSogo} alt="VAROSA" className="h-[85px] w-auto" />
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300" />
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
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-5 space-y-2 border-t border-primary/8">
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
  );
};

export default Navigation;
