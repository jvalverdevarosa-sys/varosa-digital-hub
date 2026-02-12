import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Wrench, ClipboardCheck, GraduationCap, FileText, Download, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

const ServiciosTecnicos = () => {
  const services = [
    {
      icon: Settings,
      title: "Instalación de Dispensadores TORK",
      description: "Instalación profesional de dispensadores de papel, toallas, jabón y sanitizantes en ubicaciones estratégicas.",
      benefits: ["Instalación en sitio", "Optimización de ubicaciones", "Capacitación de uso"]
    },
    {
      icon: Wrench,
      title: "Instalación y Calibración de Dosificadores",
      description: "Configuración precisa de equipos dosificadores para químicos, garantizando el uso correcto y ahorro en costo.",
      benefits: ["Calibración exacta", "Reducción de desperdicio", "Capacitación del personal"]
    },
    {
      icon: ClipboardCheck,
      title: "Auditorías Técnicas",
      description: "Evaluación completa de sus procesos de limpieza, higiene y uso de productos para identificar oportunidades de mejora.",
      benefits: ["Diagnóstico detallado", "Recomendaciones específicas", "Plan de acción"]
    },
    {
      icon: CheckCircle2,
      title: "Validaciones ATP",
      description: "Medición objetiva de niveles de limpieza mediante tecnología ATP, cumpliendo estándares de la industria alimentaria.",
      benefits: ["Resultados inmediatos", "Reportes técnicos", "Seguimiento continuo"]
    },
    {
      icon: GraduationCap,
      title: "Capacitaciones Especializadas",
      description: "Entrenamiento del personal en uso correcto de productos, técnicas de limpieza y protocolos de seguridad.",
      benefits: ["Sesiones en sitio", "Material didáctico", "Certificados de participación"]
    },
    {
      icon: FileText,
      title: "Estandarización de Procesos",
      description: "Desarrollo de protocolos personalizados por área, uso de código de colores y documentación de procedimientos.",
      benefits: ["Protocolos por área", "Código de colores", "Manuales personalizados"]
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Procedimientos por Área",
      description: "Guías paso a paso para limpieza y desinfección de áreas específicas"
    },
    {
      icon: ClipboardCheck,
      title: "Guías de Buenas Prácticas",
      description: "Manuales de buenas prácticas de manufactura e higiene industrial"
    },
    {
      icon: Download,
      title: "Protocolos de Auditoría",
      description: "Formatos y checklists para auditorías internas de limpieza"
    },
    {
      icon: FileText,
      title: "Catálogos y Fichas Técnicas",
      description: "Información detallada de productos químicos, herramientas y sistemas"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Servicios Técnicos"
        description="Instalación de dispensadores, auditorías de higiene ATP, capacitaciones técnicas y acompañamiento continuo. Servicio profesional en Zona Norte, Caribe, Guanacaste y GAM."
        path="/servicios-tecnicos"
        keywords="instalación dispensadores Costa Rica, auditoría ATP higiene, capacitaciones limpieza industrial, servicio técnico TORK Diversey"
      />
      <Navigation />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Servicios <span className="text-highlight">Técnicos Especializados</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Acompañamiento técnico continuo: instalaciones, auditorías, capacitaciones y validaciones ATP que generan valor real
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Nuestros Servicios</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Servicios que van más allá de la venta: acompañamos su operación con soluciones técnicas especializadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group bg-card">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-heading text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-base text-foreground/70">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/75">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Placeholder Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Galería de Instalaciones</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Proyectos realizados en diferentes industrias
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-muted rounded-xl border-2 border-border flex items-center justify-center group hover:border-highlight transition-all">
                  <span className="text-muted-foreground text-sm">Imagen {item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-foreground/60 italic">
                * Galería pendiente de carga por el usuario
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Recursos para Clientes</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Material técnico y herramientas para optimizar sus procesos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {resources.map((resource, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-lg transition-all duration-300 bg-card">
                  <CardHeader>
                    <resource.icon className="h-10 w-10 text-accent mb-3" />
                    <CardTitle className="text-lg font-heading text-foreground">{resource.title}</CardTitle>
                    <CardDescription className="text-sm text-foreground/70">{resource.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <NavLink to="/contacto">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Recursos
                </NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                ¿Necesita acompañamiento técnico especializado?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Nuestro equipo técnico está listo para ayudarle con instalaciones, auditorías, capacitaciones y validaciones ATP
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)] transition-all duration-300">
                  <NavLink to="/contacto">
                    Solicitar Asesoría Técnica
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                  <NavLink to="/contacto">Solicitar Visita Técnica</NavLink>
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

export default ServiciosTecnicos;
