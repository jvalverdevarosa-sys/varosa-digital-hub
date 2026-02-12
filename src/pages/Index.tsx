import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Droplets, Shield, Sparkles, Building2, Utensils, Factory, ArrowRight } from "lucide-react";

// Logos de marcas
import logo3m from "@/assets/logos/marcas/3m.png";
import logoArtline from "@/assets/logos/marcas/artline.png";
import logoDiversey from "@/assets/logos/marcas/diversey.png";
import logoElCastor from "@/assets/logos/marcas/el-castor.png";
import logoEpson from "@/assets/logos/marcas/epson.png";
import logoFaberCastell from "@/assets/logos/marcas/faber-castell.png";
import logoHp from "@/assets/logos/marcas/hp.png";
import logoKemical from "@/assets/logos/marcas/kemical.png";
import logoSolquisa from "@/assets/logos/marcas/solquisa.png";
import logoTork from "@/assets/logos/marcas/tork.png";
import logoFacela from "@/assets/logos/marcas/facela.jpeg";

// Logos de clientes
import logoHotelElEstablo from "@/assets/logos/clientes/hotel-el-establo.jpeg";
import logoLaPazWaterfall from "@/assets/logos/clientes/la-paz-waterfall-gardens.jpeg";
import logoArenalSprings from "@/assets/logos/clientes/arenal-springs.jpeg";
import logoSantoPecado from "@/assets/logos/clientes/santo-pecado.jpeg";
import logoTicofrut from "@/assets/logos/clientes/ticofrut.jpeg";
import logoCoopelesca from "@/assets/logos/clientes/coopelesca.png";
import logoIndustriasCharo from "@/assets/logos/clientes/industrias-charo.png";
import logoPollosPako from "@/assets/logos/clientes/pollos-pako.png";
import logoCarniceriasMatoro from "@/assets/logos/clientes/carnicerias-matoro.jpeg";
import logoSweetWell from "@/assets/logos/clientes/sweet-well.png";

const Index = () => {
  const productLines = [
    {
      icon: Droplets,
      title: "Químicos Especializados",
      description: "Diversey, Kemical y Solquisa: soluciones de limpieza y desinfección profesional.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Sistemas de Higiene TORK",
      description: "Dispensadores, papel, toallas, jabón y sanitizantes para mantener los más altos estándares.",
      color: "text-secondary"
    },
    {
      icon: Sparkles,
      title: "Herramientas Grado Alimentario",
      description: "El Castor: cepillos, escobas, jaladores y bastones con certificación FDA.",
      color: "text-primary"
    },
    {
      icon: Building2,
      title: "Accesorios y Oficina",
      description: "3M, HP, Epson, Faber Castell, Facela, Artline: todo para su operación.",
      color: "text-highlight"
    }
  ];

  const industries = [
    {
      icon: Factory,
      title: "Industria Alimentaria",
      description: "Químicos especializados, herramientas FDA, protocolos y auditorías"
    },
    {
      icon: Utensils,
      title: "HORECA",
      description: "Soluciones integrales para hoteles, restaurantes y catering"
    },
    {
      icon: Building2,
      title: "Manufactura y Lecherías",
      description: "Programas de limpieza industrial y validaciones ATP"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Soluciones que inspiran confianza, transforman y crean impacto"
        description="Comercializadora VARO S.A. — Distribuidores de Diversey, TORK, El Castor, Kemical y más. Productos de limpieza, higiene industrial, suministros de oficina y acompañamiento técnico en Costa Rica. Zona Norte, Caribe, Guanacaste y GAM."
        path="/"
        keywords="limpieza industrial Costa Rica, higiene HORECA, Diversey Costa Rica, TORK dispensadores, El Castor cepillos FDA, productos químicos industriales, suministros de oficina, Venecia San Carlos"
      />
      <SchemaOrg />
      <Navigation />
      
      <main id="main-content" className="flex-1">
        <Hero />

        {/* Brand Partners Strip */}
        <section className="py-8 sm:py-10 bg-background border-y border-[hsl(var(--primary)/0.08)]">
          <div className="container mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold text-foreground/35 uppercase tracking-[0.2em] text-center mb-5">Distribuidor autorizado</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-4">
              {[
                { name: "Diversey", logo: logoDiversey, height: "h-7 sm:h-8" },
                { name: "TORK", logo: logoTork, height: "h-7 sm:h-8" },
                { name: "3M", logo: logo3m, height: "h-7 sm:h-8" },
                { name: "Kemical", logo: logoKemical, height: "h-6 sm:h-7" },
                { name: "Solquisa", logo: logoSolquisa, height: "h-6 sm:h-7" },
                { name: "El Castor", logo: logoElCastor, height: "h-6 sm:h-7" },
                { name: "HP", logo: logoHp, height: "h-7 sm:h-8" },
                { name: "Epson", logo: logoEpson, height: "h-6 sm:h-7" },
                { name: "Faber Castell", logo: logoFaberCastell, height: "h-6 sm:h-7" },
                { name: "Artline", logo: logoArtline, height: "h-6 sm:h-7" },
                { name: "Facela", logo: logoFacela, height: "h-7 sm:h-8 rounded" },
              ].map((brand) => (
                <img
                  key={brand.name}
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className={`${brand.height} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                    brand.name === "Facela" 
                      ? "dark:opacity-80 dark:hover:opacity-100" 
                      : "dark:brightness-0 dark:invert dark:opacity-50 dark:hover:opacity-80"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product Lines Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-10">
            <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Líneas de Productos</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Soluciones especializadas para cada necesidad operativa de su negocio
              </p>
            </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productLines.map((product, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-[hsl(var(--primary)/0.1)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-[0_4px_20px_hsl(var(--accent)/0.12)] group bg-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--accent)/0.1)] to-[hsl(var(--primary)/0.06)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className={`h-7 w-7 ${product.color}`} />
                    </div>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NavLink to="/productos" className="text-accent hover:text-primary font-semibold inline-flex items-center gap-2 text-sm group">
                      Ver más
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </CardContent>
                </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.03)] via-transparent to-[hsl(var(--primary)/0.03)]" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Industrias que Servimos</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Soluciones especializadas adaptadas a las necesidades únicas de cada sector
              </p>
            </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {industries.map((industry, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                <div 
                  className="bg-card p-8 rounded-2xl border border-[hsl(var(--primary)/0.1)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[hsl(var(--accent)/0.12)] to-[hsl(var(--primary)/0.06)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <industry.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{industry.title}</h3>
                  <p className="text-foreground/60 mb-4">{industry.description}</p>
                  <NavLink to="/soluciones" className="text-accent hover:text-primary font-semibold inline-flex items-center gap-2 text-sm">
                    Ver soluciones
                    <ArrowRight className="h-4 w-4" />
                  </NavLink>
                </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa">
                <NavLink to="/soluciones">Ver Todas las Industrias</NavLink>
              </Button>
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Social Proof / Clients Section */}
        <section className="py-20 bg-background border-t border-[hsl(var(--primary)/0.08)]">
          <div className="container mx-auto px-6 lg:px-10">
            <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Confían en VAROSA</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Más de 500 clientes activos en 4 regiones de Costa Rica
              </p>
            </div>
            </ScrollReveal>

            {/* Client logos carousel */}
            <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 mb-12">
              {[
                { name: "Hotel El Establo", logo: logoHotelElEstablo },
                { name: "La Paz Waterfall Gardens", logo: logoLaPazWaterfall },
                { name: "Arenal Springs", logo: logoArenalSprings },
                { name: "Santo Pecado", logo: logoSantoPecado },
                { name: "Ticofrut", logo: logoTicofrut },
                { name: "Coopelesca", logo: logoCoopelesca },
                { name: "Industrias Charo", logo: logoIndustriasCharo },
                { name: "Pollos Pako", logo: logoPollosPako },
                { name: "Carnicerías Matoro", logo: logoCarniceriasMatoro },
                { name: "Sweet Well", logo: logoSweetWell },
              ].map((client) => (
                <div key={client.name} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-card border border-[hsl(var(--primary)/0.1)] flex items-center justify-center p-2 hover:border-[hsl(var(--accent)/0.4)] hover:shadow-[0_4px_15px_hsl(var(--accent)/0.1)] transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="w-full h-full object-contain rounded"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-foreground/50 text-center max-w-[80px] leading-tight">{client.name}</span>
                </div>
              ))}
            </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                {
                  sector: "HORECA y Turismo",
                  count: "12+",
                  clients: ["Hotel El Establo", "La Paz Waterfall Gardens", "Arenal Springs", "Mistico Park", "Selvatura Park"],
                  color: "accent"
                },
                {
                  sector: "Industria Alimentaria",
                  count: "8+",
                  clients: ["Ticofrut", "Grupo VISA", "Fyffes", "Coopelesca", "Frutera La Paz"],
                  color: "primary"
                },
                {
                  sector: "Lecherías y Lácteos",
                  count: "7+",
                  clients: ["La Giralda", "Rancho Tres Hermanos", "Hacienda Pedregal", "Coopelecheros", "Lácteos H y R"],
                  color: "secondary"
                },
                {
                  sector: "Retail y Comercio",
                  count: "3+",
                  clients: ["Economás", "Carnicerías Matoro", "Sweet Well"],
                  color: "highlight"
                }
              ].map((group, index) => (
                <ScrollReveal key={index} delay={index * 120}>
                <div className="bg-card rounded-xl border border-[hsl(var(--primary)/0.1)] p-6 hover:border-[hsl(var(--accent)/0.4)] hover:shadow-[0_4px_20px_hsl(var(--accent)/0.1)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-2xl font-black font-heading text-${group.color}`}>{group.count}</span>
                    <span className="text-sm font-semibold text-foreground/70">{group.sector}</span>
                  </div>
                  <div className="space-y-1.5">
                    {group.clients.map((client, idx) => (
                      <p key={idx} className="text-sm text-foreground/55">{client}</p>
                    ))}
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary text-primary hover:bg-primary/5 font-bold transition-all duration-300">
                <NavLink to="/casos-exito">
                  Ver Todos los Casos de Éxito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                ¿Listo para impulsar la eficiencia de su operación?
              </h2>
              <p className="text-xl opacity-90">
                Acompañamiento técnico especializado: instalación de dosificadores y dispensadores, validaciones ATP, capacitaciones y auditorías.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg">
                  <NavLink to="/contacto">Solicitar Cotización</NavLink>
                </Button>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg">
                  <a href="https://wa.me/50686703251?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20productos%20y%20servicios%20de%20VAROSA" target="_blank" rel="noopener noreferrer">
                    WhatsApp: +506 8670-3251
                  </a>
                </Button>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
