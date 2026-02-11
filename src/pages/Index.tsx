import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
      <Navigation />
      
      <main className="flex-1">
        <Hero />

        {/* Brand Partners Strip */}
        <section className="py-8 bg-muted/50 border-y border-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <span className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Socios comerciales:</span>
              {["Diversey", "TORK", "3M", "Kemical", "Solquisa", "El Castor", "HP", "Epson", "Faber Castell"].map((brand) => (
                <span key={brand} className="text-sm font-bold text-foreground/50 hover:text-primary transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Product Lines Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Líneas de Productos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Socios comerciales: Diversey, TORK, 3M, Kemical, Solquisa, El Castor, HP, Epson, Faber Castell, Artline, Facela
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productLines.map((product, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <product.icon className={`h-12 w-12 mb-4 ${product.color} group-hover:scale-110 transition-transform`} />
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NavLink to="/productos" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 group">
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
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 diagonal-section" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industrias que Servimos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluciones especializadas adaptadas a las necesidades únicas de cada sector
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-card p-8 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl group"
                >
                  <industry.icon className="h-16 w-16 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <NavLink to="/soluciones" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2">
                    Ver soluciones
                    <ArrowRight className="h-4 w-4" />
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <NavLink to="/soluciones">Ver Todas las Industrias</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
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
