import { NavLink } from "./NavLink";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import varosaSogo from "@/assets/varosa-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-5">
            <img src={varosaSogo} alt="VAROSA" className="h-14 w-auto brightness-0 invert" />
            <p className="text-sm opacity-80 leading-relaxed">
              Soluciones que inspiran confianza, transforman y crean impacto.
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Productos especializados de limpieza, higiene y suministros para industria y HORECA en Costa Rica desde 2007.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/varosacr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/varosacr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/varosacr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/50686703251" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-5 text-xl tracking-tight">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/soluciones" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Soluciones por Industria
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Líneas de Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicios-tecnicos" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Servicios Técnicos
                </NavLink>
              </li>
              <li>
                <NavLink to="/casos-exito" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Casos de Éxito
                </NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h3 className="font-bold mb-5 text-xl tracking-tight">Productos Destacados</h3>
            <ul className="space-y-2 text-base opacity-95 font-medium">
              <li>Productos Químicos Diversey</li>
              <li>Sistemas de Higiene TORK</li>
              <li>Cepillería El Castor</li>
              <li>Químicos Kemical y Solquisa</li>
              <li>Artículos de Oficina y Suministros</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-5 text-xl tracking-tight">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Venecia de San Carlos, Alajuela, Costa Rica</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+50640029365" className="hover:text-accent transition-colors">
                  4002-9365
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <MessageCircle className="h-5 w-5 shrink-0" />
                <a href="https://wa.me/50686703251" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +506 8670-3251
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@varosacr.com" className="hover:text-accent transition-colors">
                  info@varosacr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Comercializadora VARO S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
