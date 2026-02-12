import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { ArrowRight, Phone, MessageCircle, Truck, ShieldCheck, Beaker, Award, Droplets } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(170deg, #f8fbff 0%, #eef6fc 35%, #f0f4fa 60%, #fafbfe 100%)' }}>
      {/* Background decorative elements - MORE VISIBLE */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient wash on right side */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[hsl(var(--accent)/0.12)] via-[hsl(var(--secondary)/0.08)] to-transparent" />
        
        {/* Diagonal blue block - brand guide style */}
        <div className="absolute top-[5%] right-[-5%] w-[45%] h-[90%] opacity-[0.04] transform -rotate-[12deg]"
          style={{ background: `linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))`, borderRadius: '24px' }}
        />

        {/* Diagonal yellow accent lines - STRONGER */}
        <div className="absolute top-[12%] right-[10%] w-[320px] h-[5px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-50 rounded-full" />
        <div className="absolute top-[20%] right-[7%] w-[200px] h-[4px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-35 rounded-full" />
        <div className="absolute bottom-[18%] right-[14%] w-[150px] h-[4px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-25 rounded-full" />
        
        {/* Water drop shape - MORE VISIBLE */}
        <div className="absolute top-[25%] right-[4%] w-[220px] h-[280px] opacity-[0.07]"
          style={{
            background: `linear-gradient(180deg, hsl(var(--secondary)), hsl(var(--accent)))`,
            borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%',
          }}
        />

        {/* Floating circles */}
        <div className="absolute top-[60%] left-[5%] w-[100px] h-[100px] rounded-full bg-[hsl(var(--accent)/0.06)] blur-sm" />
        <div className="absolute top-[15%] left-[15%] w-[60px] h-[60px] rounded-full bg-[hsl(var(--primary)/0.05)] blur-sm" />
        <div className="absolute bottom-[10%] right-[35%] w-[80px] h-[80px] rounded-full bg-[hsl(var(--highlight)/0.08)] blur-sm" />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
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
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-secondary font-semibold text-sm border border-[hsl(var(--accent)/0.25)] shadow-sm">
                <Droplets className="w-4 h-4 text-[hsl(var(--accent))]" />
                Desde 2007 — Venecia de San Carlos
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-bold leading-[1.12] tracking-tight text-primary">
              Soluciones que inspiran{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[hsl(var(--accent))]">
                  confianza
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--highlight))] to-[hsl(var(--highlight)/0.3)] rounded-full" />
              </span>
              , transforman y crean{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-secondary">
                impacto
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-foreground/65 leading-relaxed max-w-2xl">
              Distribuimos marcas líderes como Diversey, TORK, El Castor, Kemical y Solquisa. 
              Acompañamiento técnico, entregas con flota propia y cobertura en Zona Norte, Caribe, Guanacaste y GAM.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold rounded-lg px-8 py-6 text-base group transition-all duration-300 shadow-varosa hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)]">
                <NavLink to="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[hsl(var(--accent)/0.35)] hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.06)] bg-white/60 text-secondary font-semibold rounded-lg px-8 py-6 text-base transition-all duration-300">
                <a href="https://wa.me/50686703251?text=Hola%2C%20me%20interesa%20una%20cotización" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="font-semibold rounded-lg px-6 py-6 text-base text-foreground/60 hover:text-primary transition-all duration-300">
                <a href="tel:+50640029365">
                  <Phone className="mr-2 h-4 w-4" />
                  4002-9365
                </a>
              </Button>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[hsl(var(--primary)/0.1)]">
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary font-heading">500+</div>
                <div className="text-xs font-semibold text-foreground/45 mt-1 uppercase tracking-wider">Clientes Activos</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-secondary font-heading">3,000+</div>
                <div className="text-xs font-semibold text-foreground/45 mt-1 uppercase tracking-wider">Productos</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black font-heading text-accent">18+</div>
                <div className="text-xs font-semibold text-foreground/45 mt-1 uppercase tracking-wider">Años</div>
              </div>
            </div>
          </div>

          {/* Right side — Trust signal cards with MORE color */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="space-y-4">
              {/* Card 1: Marcas - blue tint */}
              <div className="bg-white/90 backdrop-blur-sm border border-[hsl(var(--primary)/0.15)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--primary)/0.08)] hover:shadow-[0_4px_20px_hsl(var(--primary)/0.15)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--primary)/0.12)] to-[hsl(var(--secondary)/0.08)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--primary)/0.18)] group-hover:to-[hsl(var(--secondary)/0.12)] transition-all">
                    <Beaker className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Marcas Líderes</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">Diversey, TORK, 3M, Kemical, Solquisa, El Castor — productos certificados para cada industria.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Acompañamiento - cyan tint */}
              <div className="bg-white/90 backdrop-blur-sm border border-[hsl(var(--accent)/0.2)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--accent)/0.06)] hover:shadow-[0_4px_20px_hsl(var(--accent)/0.15)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent)/0.15)] to-[hsl(var(--accent)/0.06)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--accent)/0.22)] transition-all">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Acompañamiento Técnico</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">Instalación de equipos, validaciones ATP, auditorías y capacitaciones en sitio.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Entregas - secondary blue tint */}
              <div className="bg-white/90 backdrop-blur-sm border border-[hsl(var(--secondary)/0.15)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--secondary)/0.06)] hover:shadow-[0_4px_20px_hsl(var(--secondary)/0.15)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--secondary)/0.12)] to-[hsl(var(--secondary)/0.05)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--secondary)/0.18)] transition-all">
                    <Truck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Entregas con Flota Propia</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">Cobertura en Zona Norte, Caribe, Guanacaste y GAM con entregas puntuales.</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Ahorro - yellow accent */}
              <div className="bg-white/90 backdrop-blur-sm border border-[hsl(var(--highlight)/0.25)] rounded-xl p-6 shadow-[0_2px_12px_hsl(var(--highlight)/0.06)] hover:shadow-[0_4px_20px_hsl(var(--highlight)/0.15)] hover:border-[hsl(var(--highlight)/0.5)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--highlight)/0.16)] to-[hsl(var(--highlight)/0.06)] flex items-center justify-center shrink-0 group-hover:from-[hsl(var(--highlight)/0.24)] transition-all">
                    <Award className="h-6 w-6 text-highlight" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">Ahorro en Costo en Uso</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">Productos concentrados y dosificadores que optimizan rendimiento y reducen costos.</p>
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
