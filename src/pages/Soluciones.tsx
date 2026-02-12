import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Utensils, Building2, Factory, ShoppingBag, Hospital, School, ArrowRight, Check, Droplets } from "lucide-react";

const Soluciones = () => {
  const solutions = [
    {
      icon: Factory,
      title: "Industria Alimentaria",
      subtitle: "Prioridad 2026",
      description: "Proveedores: Diversey, Kemical y Solquisa. Herramientas grado alimentario El Castor con certificación FDA. Énfasis en protocolos, estandarización y líneas certificadas FDA.",
      features: [
        "Proveedores: Diversey, Kemical, Solquisa",
        "Herramientas grado alimentario El Castor (certificación FDA)",
        "Protocolos y estandarización",
        "Líneas certificadas FDA"
      ],
      color: "primary"
    },
    {
      icon: Building2,
      title: "Manufactura y Plantas de Proceso",
      subtitle: "Limpieza Industrial Profesional",
      description: "Químicos: Diversey, Kemical y Solquisa. Kits especializados El Castor. Auditorías, capacitaciones y protocolos personalizados para su operación.",
      features: [
        "Químicos: Diversey, Kemical, Solquisa",
        "Kits especializados El Castor",
        "Auditorías y capacitaciones",
        "Protocolos personalizados"
      ],
      color: "secondary"
    },
    {
      icon: Utensils,
      title: "HORECA",
      subtitle: "Hoteles, Restaurantes y Catering",
      description: "Químicos Diversey y Solquisa. Sistemas TORK de dispensadores con ahorro en consumo. Herramientas El Castor y accesorios 3M. Cobertura en cocinas, lavanderías, habitaciones y áreas comunes.",
      features: [
        "Químicos Diversey y Solquisa",
        "Sistemas TORK de dispensadores (ahorro en consumo)",
        "Herramientas El Castor y accesorios 3M",
        "Áreas: cocinas, lavanderías, habitaciones, áreas comunes"
      ],
      color: "accent"
    },
    {
      icon: Droplets,
      title: "Lecherías y Derivados",
      subtitle: "Especialización en Sector Lácteo",
      description: "Químicos: Kemical y Solquisa. Herramientas El Castor especializadas. Sistemas de dispensación y toallas especializadas para secado de ubres.",
      features: [
        "Químicos: Kemical y Solquisa",
        "Herramientas El Castor especializadas",
        "Sistemas de dispensación",
        "Toallas especializadas para secado de ubres"
      ],
      color: "highlight"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Soluciones por <span className="text-accent">Industria</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Soluciones orientadas a resultados: eficiencia, seguridad, estandarización y ahorro en costo en uso
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group bg-card">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <solution.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-heading text-foreground">{solution.title}</CardTitle>
                    <CardDescription className="text-base text-foreground/70">{solution.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground/75 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Características principales:</h4>
                      <ul className="space-y-2.5">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="h-5 w-5 text-highlight shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/75">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-varosa transition-all duration-300">
                      <NavLink to="/contacto">
                        Solicitar Información
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </NavLink>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                ¿Necesita asesoría técnica especializada?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Más de 18 años de experiencia. Flota propia con cobertura en Zona Norte, Caribe, Guanacaste y GAM.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <NavLink to="/contacto">Solicitar Asesoría Técnica</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Soluciones;
