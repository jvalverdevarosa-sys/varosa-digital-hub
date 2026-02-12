import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
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
        <section className="py-8 bg-gradient-to-r from-[hsl(var(--primary)/0.03)] via-[hsl(var(--accent)/0.04)] to-[hsl(var(--primary)/0.03)] border-y border-[hsl(var(--primary)/0.08)]">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <span className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Socios comerciales:</span>
              {["Diversey", "TORK", "3M", "Kemical", "Solquisa", "El Castor", "HP", "Epson", "Faber Castell"].map((brand) => (
                <span key={brand} className="text-sm font-bold text-foreground/55 hover:text-primary transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Product Lines Section */}
        <section className="py-20" style={{ background: 'linear-gradient(180deg, #f5f8fd 0%, #f9fbfe 50%, #ffffff 100%)' }}>
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Líneas de Productos</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Socios comerciales: Diversey, TORK, 3M, Kemical, Solquisa, El Castor, HP, Epson, Faber Castell, Artline, Facela
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productLines.map((product, index) => (
                <Card key={index} className="border border-[hsl(var(--primary)/0.1)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-[0_4px_20px_hsl(var(--accent)/0.12)] group bg-white">
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
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.03)] via-transparent to-[hsl(var(--primary)/0.03)]" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Industrias que Servimos</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Soluciones especializadas adaptadas a las necesidades únicas de cada sector
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl border border-[hsl(var(--primary)/0.1)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] group"
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
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa">
                <NavLink to="/soluciones">Ver Todas las Industrias</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
