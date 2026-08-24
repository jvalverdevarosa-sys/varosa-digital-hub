import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { ArrowRight, Phone, MessageCircle, Truck, ShieldCheck, Beaker, Award, Droplets } from "lucide-react";
import { aniosExperiencia } from "@/lib/utils";
// Foto de fondo del hero — bodega real de VAROSA (WebP optimizada, calidad 80).
import heroFondo from "@/assets/hero/hero-fondo.webp";
import { enlaceWhatsApp } from "@/lib/whatsapp";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[hsl(var(--varosa-blue-dark))]">
      {/* Foto de fondo + overlay azul de marca (garantiza contraste AA del texto blanco) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFondo}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay azul de marca — usa tokens --varosa-blue-* (constantes en claro/oscuro) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--varosa-blue-dark)/0.94)] via-[hsl(var(--varosa-blue-dark)/0.88)] to-[hsl(var(--varosa-blue-mid)/0.82)]" />
        {/* Refuerzo inferior para que las estadísticas mantengan legibilidad */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[hsl(var(--varosa-blue-dark)/0.6)] to-transparent" />

        {/* Líneas amarillas de marca — resaltan sobre el azul */}
        <div className="absolute top-[12%] right-[10%] w-[320px] h-[5px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-60 rounded-full" />
        <div className="absolute top-[20%] right-[7%] w-[200px] h-[4px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-40 rounded-full" />
        <div className="absolute bottom-[18%] right-[14%] w-[150px] h-[4px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-30 rounded-full" />

        {/* Halos de color suaves */}
        <div className="absolute top-[58%] left-[4%] w-[120px] h-[120px] rounded-full bg-[hsl(var(--accent)/0.18)] blur-2xl" />
        <div className="absolute bottom-[10%] right-[35%] w-[110px] h-[110px] rounded-full bg-[hsl(var(--highlight)/0.15)] blur-2xl" />

        {/* Retícula de puntos sutil */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content — 3 columns */}
          <div className="lg:col-span-3 space-y-7 animate-fade-in">
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-sm border border-white/25 shadow-sm">
                <Droplets className="w-4 h-4 text-[hsl(var(--accent))]" />
                Desde 2007 — Venecia de San Carlos
              </span>
            </div>

            {/* Headline gigante + línea de apoyo (jerarquía exagerada 2026) */}
            <div className="space-y-3">
              <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-black leading-[1.02] tracking-[-0.02em] text-white">
                Soluciones que inspiran{" "}
                <span className="relative inline-block">
                  <span className="text-[hsl(var(--highlight))]">
                    confianza
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent)/0.3)] rounded-full" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-heading font-bold text-white">
                Transforman y crean{" "}
                <span className="text-[hsl(var(--accent))]">
                  impacto
                </span>.
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
              Distribuimos marcas líderes como Diversey, TORK, El Castor, Kemical y Solquisa.
              Acompañamiento técnico, entregas con flota propia y cobertura en Zona Norte, Caribe, Guanacaste y GAM.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-lg px-6 sm:px-8 py-6 text-sm sm:text-base group transition-all duration-300 shadow-lg hover:shadow-[0_8px_28px_hsl(var(--varosa-blue-dark)/0.45)]">
                <NavLink to="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg px-8 py-6 text-base transition-all duration-300">
                <a href={enlaceWhatsApp("Hola, me interesa una cotización", "inicio-hero")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="font-semibold rounded-lg px-6 py-6 text-base text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
                <a href="tel:+50640029365">
                  <Phone className="mr-2 h-4 w-4" />
                  4002-9365
                </a>
              </Button>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading">500+</div>
                <div className="text-[10px] sm:text-xs font-semibold text-white/75 mt-1 uppercase tracking-wider">Clientes Activos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading">3,000+</div>
                <div className="text-[10px] sm:text-xs font-semibold text-white/75 mt-1 uppercase tracking-wider">Productos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[hsl(var(--highlight))]">{aniosExperiencia()}+</div>
                <div className="text-[10px] sm:text-xs font-semibold text-white/75 mt-1 uppercase tracking-wider">Años</div>
              </div>
            </div>
          </div>

          {/* Right side — Trust signal cards with MORE color */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="space-y-4">
              {/* Card 1: Marcas - blue tint */}
              <div className="bg-card/90 backdrop-blur-sm border border-[hsl(var(--primary)/0.15)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--primary)/0.08)] hover:shadow-[0_4px_20px_hsl(var(--primary)/0.15)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--primary)/0.12)] to-[hsl(var(--secondary)/0.08)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--primary)/0.18)] group-hover:to-[hsl(var(--secondary)/0.12)] transition-all">
                    <Beaker className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Marcas Líderes</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">Diversey, TORK, 3M, Kemical, Solquisa, El Castor — productos certificados para cada industria.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Acompañamiento - cyan tint */}
              <div className="bg-card/90 backdrop-blur-sm border border-[hsl(var(--accent)/0.2)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--accent)/0.06)] hover:shadow-[0_4px_20px_hsl(var(--accent)/0.15)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent)/0.15)] to-[hsl(var(--accent)/0.06)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--accent)/0.22)] transition-all">
                    <ShieldCheck className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Acompañamiento Técnico</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">Instalación de equipos, validaciones ATP, auditorías y capacitaciones en sitio.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Entregas - secondary blue tint */}
              <div className="bg-card/90 backdrop-blur-sm border border-[hsl(var(--secondary)/0.15)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--secondary)/0.06)] hover:shadow-[0_4px_20px_hsl(var(--secondary)/0.15)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--secondary)/0.12)] to-[hsl(var(--secondary)/0.05)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--secondary)/0.18)] transition-all">
                    <Truck className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Entregas con Flota Propia</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">Cobertura en Zona Norte, Caribe, Guanacaste y GAM con entregas puntuales.</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Ahorro - yellow accent */}
              <div className="bg-card/90 backdrop-blur-sm border border-[hsl(var(--highlight)/0.25)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--highlight)/0.06)] hover:shadow-[0_4px_20px_hsl(var(--highlight)/0.15)] hover:border-[hsl(var(--highlight)/0.5)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--highlight)/0.16)] to-[hsl(var(--highlight)/0.06)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--highlight)/0.24)] transition-all">
                    <Award className="h-6 w-6 text-highlight" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Ahorro en Costo en Uso</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">Productos concentrados y dosificadores que optimizan rendimiento y reducen costos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
