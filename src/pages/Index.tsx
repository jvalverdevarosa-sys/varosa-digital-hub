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
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4">
              {[
                { name: "Diversey", size: "text-base sm:text-lg", weight: "font-extrabold" },
                { name: "TORK", size: "text-base sm:text-lg", weight: "font-extrabold" },
                { name: "3M", size: "text-lg sm:text-xl", weight: "font-black" },
                { name: "Kemical", size: "text-base sm:text-lg", weight: "font-extrabold" },
                { name: "Solquisa", size: "text-base sm:text-lg", weight: "font-extrabold" },
                { name: "El Castor", size: "text-base sm:text-lg", weight: "font-extrabold" },
                { name: "HP", size: "text-base sm:text-lg", weight: "font-black" },
                { name: "Epson", size: "text-sm sm:text-base", weight: "font-bold" },
                { name: "Faber Castell", size: "text-sm sm:text-base", weight: "font-bold" },
              ].map((brand, index, arr) => (
                <span key={brand.name} className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                  <span 
                    className={`${brand.size} ${brand.weight} text-foreground/40 hover:text-primary tracking-wide transition-colors duration-300 cursor-default select-none`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {brand.name}
                  </span>
                  {index < arr.length - 1 && (
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/15" aria-hidden="true" />
                  )}
                </span>
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
                  count: "2+",
                  clients: ["Economás", "Carnicerías Matoro"],
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
