import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Building2, TrendingUp, CheckCircle, Quote } from "lucide-react";

const CasosExito = () => {
  const cases = [
    {
      company: "HORECA",
      industry: "Hoteles, Restaurantes y Catering",
      challenge: "Mantenimiento de altos estándares de limpieza e higiene en áreas comunes, cocinas y habitaciones con alta rotación de huéspedes",
      solution: "Implementación de químicos Diversey y Solquisa, Sistemas TORK de dispensadores con ahorro en consumo, herramientas El Castor y accesorios 3M. Capacitación del personal y protocolos personalizados.",
      results: [
        "Estandarización de procesos de limpieza",
        "Reducción de costos operativos",
        "Mejora en satisfacción de huéspedes"
      ],
      testimonial: "Operaciones más eficientes y cumplimiento de estándares internacionales",
      clients: "Hotel El Establo, La Paz Waterfall Gardens, Arenal Springs, Magic Mountain, Santo Pecado, Raúl Castaño, Freddo Fresas"
    },
    {
      company: "Industria Alimentaria",
      industry: "Procesamiento y Manufactura de Alimentos",
      challenge: "Cumplimiento estricto de normativas de seguridad alimentaria, validaciones constantes y prevención de contaminación cruzada",
      solution: "Químicos especializados Diversey, Kemical y Solquisa. Herramientas grado alimentario El Castor (certificación FDA). Validaciones ATP, auditorías técnicas y capacitaciones en sitio.",
      results: [
        "Cumplimiento de auditorías internacionales",
        "Reducción de contaminación cruzada",
        "Estandarización con código de colores"
      ],
      testimonial: "Certificaciones mantenidas y cero rechazos por higiene",
      clients: "Coopelesca, Ticofrut, Grupo VISA, Frutera La Paz, Fyffes, Industrias Charo, Coopebrisas, Pollos Pako"
    },
    {
      company: "Lecherías y Derivados Lácteos",
      industry: "Producción Láctea",
      challenge: "Control estricto de bacterias y mantenimiento de inocuidad en todas las etapas de la producción láctea",
      solution: "Herramientas El Castor especializadas para lecherías, químicos Kemical y Solquisa, toallas especializadas para secado de ubres y validaciones ATP periódicas.",
      results: [
        "Reducción de conteo bacteriano",
        "Mayor vida útil de productos",
        "Cumplimiento de regulaciones lácteas"
      ],
      testimonial: "Mejora en calidad del producto y reducción de pérdidas",
      clients: "La Giralda, Rancho Tres Hermanos, Hacienda Pedregal, Hacienda La Paz"
    },
    {
      company: "Retail y Comercio",
      industry: "Supermercados y Comercio",
      challenge: "Limpieza constante de áreas de alto tráfico y gestión eficiente de suministros con reposición oportuna",
      solution: "Sistemas TORK en baños públicos, químicos para pisos y superficies, artículos de oficina y programas de reposición automática.",
      results: [
        "Reducción de costos de inventario",
        "Espacios siempre impecables",
        "Mayor satisfacción de clientes"
      ],
      testimonial: "Mejora en experiencia de compra y eficiencia operativa",
      clients: "Economás, Carnicerías Matoro"
    }
  ];

  const clientLogos = [
    "El Establo", "La Paz Waterfall Gardens", "Arenal Springs", 
    "Magic Mountain", "Santo Pecado", "Raúl Castaño", "Freddo Fresas",
    "Coopelesca", "Ticofrut", "Grupo VISA", "Frutera La Paz", "Fyffes",
    "Industrias Charo", "Coopebrisas", "Pollos Pako",
    "La Giralda", "Rancho Tres Hermanos", "Hacienda Pedregal", "Hacienda La Paz",
    "Economás", "Matoro"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Casos de <span className="text-accent">Éxito</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Descubra cómo nuestros clientes han transformado sus operaciones 
                con nuestras soluciones especializadas
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden border-y border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">500+</div>
                <div className="text-sm md:text-base text-white/90">Clientes Activos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">18+</div>
                <div className="text-sm md:text-base text-white/90">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">95%</div>
                <div className="text-sm md:text-base text-white/90">Satisfacción Cliente</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">3,000+</div>
                <div className="text-sm md:text-base text-white/90">Productos Disponibles</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="space-y-10">
              {cases.map((caseStudy, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 overflow-hidden bg-card">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <CardHeader className="bg-highlight/5 p-8 border-r border-primary/10">
                      <div className="inline-flex items-center gap-2 text-sm text-accent font-semibold mb-4">
                        <Building2 className="h-4 w-4" />
                        {caseStudy.industry}
                      </div>
                      <CardTitle className="text-2xl font-heading text-foreground mb-3">{caseStudy.company}</CardTitle>
                      <p className="text-sm text-foreground/60 leading-relaxed">{caseStudy.clients}</p>
                      
                      <div className="space-y-4 mt-6">
                        <div>
                          <h4 className="font-semibold text-sm text-foreground/60 mb-2">Desafío</h4>
                          <p className="text-foreground/80">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground/60 mb-2">Solución</h4>
                          <p className="text-foreground/80">{caseStudy.solution}</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 flex flex-col justify-between">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="h-5 w-5 text-accent" />
                            <h4 className="font-semibold text-foreground">Resultados</h4>
                          </div>
                          <ul className="space-y-3">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                <span className="text-foreground/80">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-highlight/5 border-l-4 border-highlight p-4 rounded">
                          <Quote className="h-6 w-6 text-accent mb-2" />
                          <p className="text-sm italic text-foreground/70">
                            "{caseStudy.testimonial}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-20 bg-background border-y border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Clientes que Confían en Nosotros</h2>
              <p className="text-lg text-foreground/75">
                Empresas líderes en sus industrias eligen VAROSA
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clientLogos.map((client, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-6 bg-card rounded-lg border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300"
                >
                  <span className="text-sm font-medium text-center text-foreground/70">
                    {client}
                  </span>
                </div>
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
                ¿Listo para ser nuestro próximo caso de éxito?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Permítanos ayudarle a alcanzar sus objetivos de higiene y eficiencia operativa.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <NavLink to="/contacto">Comenzar Ahora</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasosExito;
