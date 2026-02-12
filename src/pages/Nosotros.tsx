import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart, Shield, Zap } from "lucide-react";

const Nosotros = () => {
  const values = [
    {
      icon: Target,
      title: "Servicio",
      description: "Actuar siempre con disposición, cercanía y enfoque en el cliente, ofreciendo soluciones oportunas y un acompañamiento confiable."
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Cumplir lo prometido de forma consistente, generando confianza a través de procesos, respuestas claras y una gestión responsable."
    },
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Utilizar los recursos de manera ordenada e inteligente, asegurando agilidad, control y calidad en cada proceso y entrega."
    },
    {
      icon: Award,
      title: "Innovación",
      description: "Mejorar continuamente la forma en que trabajamos, incorporando nuevas ideas, procesos y tecnologías."
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Asumir cada responsabilidad con ética, dedicación y sentido de pertenencia, buscando siempre el mejor resultado para clientes y la empresa."
    },
    {
      icon: Users,
      title: "Consolidación 2026",
      description: "Crear valor tangible para clientes, colaboradores y la comunidad, marcando una diferencia significativa en el sector."
    }
  ];

  const timeline = [
    { year: "2007", event: "Fundación de VAROSA", description: "Inicio de operaciones como distribuidor de suministros profesionales" },
    { year: "2014", event: "Reenfoque Estratégico", description: "Incorporación de Jean Carlo y especialización en Industria Alimentaria y HORECA" },
    { year: "2016", event: "Alianzas Estratégicas", description: "Consolidación de asociaciones con Diversey, TORK, El Castor, Kemical y Solquisa" },
    { year: "2020", event: "Servicios Técnicos", description: "Implementación de acompañamiento técnico, auditorías y validaciones ATP" },
    { year: "2025", event: "500+ Clientes Activos", description: "Cobertura en Zona Norte, Caribe, Guanacaste y GAM con flota propia" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Nosotros"
        description="Desde 2007, Comercializadora VARO S.A. distribuye productos de limpieza e higiene en Costa Rica. 500+ clientes activos, 30 colaboradores y flota propia. Venecia de San Carlos."
        path="/nosotros"
        keywords="Comercializadora VARO, VAROSA historia, distribuidora limpieza Costa Rica, Venecia San Carlos empresa"
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
                Sobre <span className="text-accent">VAROSA</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Más de 18 años proporcionando soluciones profesionales de limpieza 
                e higiene en Costa Rica
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-accent shadow-accent bg-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-highlight">Nuestra Historia</h2>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    Fundada en 2007 con raíces en el sector agropecuario, VAROSA inició atendiendo lecherías y plantas de proceso. En 2014, con la incorporación de Jean Carlo, la empresa amplió su enfoque hacia industrias, hoteles, restaurantes y comercios especializados.
                  </p>
                  <p className="text-lg text-foreground/75 leading-relaxed mt-4">
                    Hoy sumamos más de 18 años de experiencia con presencia en Zona Norte, Caribe, Guanacaste y el Gran Área Metropolitana. Nos hemos consolidado como un proveedor integral de soluciones técnicas, productos especializados y acompañamiento profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent shadow-accent bg-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-accent">Nuestro Propósito</h2>
                  <p className="text-xl text-foreground/80 leading-relaxed font-semibold italic mb-4">
                    "Soluciones que inspiran confianza, transforman y crean impacto."
                  </p>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    Impulsar la eficiencia y seguridad de nuestros clientes mediante soluciones especializadas que generan valor real en sus operaciones diarias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background border-y border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Propósito, Visión y Valores</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                Los principios que guían cada decisión y acción en VAROSA
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group bg-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nuestra Historia</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                18 años de crecimiento y compromiso con nuestros clientes
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all border-2 border-accent/20">
                    <span className="text-highlight font-bold text-sm">{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-accent/20 my-2" />
                  )}
                </div>
                <Card className="flex-1 border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.event}</h3>
                    <p className="text-base text-foreground/70">{item.description}</p>
                  </CardContent>
                </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-10 text-center">Nuestras Fortalezas</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-highlight">Ahorro en Costo en Uso</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Productos concentrados y sistemas dosificadores que optimizan el rendimiento 
                    y reducen significativamente los costos operativos.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-highlight">Protocolos Estandarizados</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Metodologías probadas y personalizadas para cada industria que garantizan 
                    resultados consistentes y cumplimiento normativo.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-highlight">Capacitación y Acompañamiento Técnico</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Instalación de equipos, validaciones ATP, auditorías en sitio y 
                    capacitaciones continuas para su personal operativo.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-highlight">Entregas Confiables con Flota Propia</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Cobertura en Zona Norte, Caribe, Guanacaste y GAM. Entregas puntuales 
                    y seguimiento personalizado de cada pedido.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--accent)/0.8)] hover:from-[hsl(var(--accent)/0.8)] hover:to-accent text-white font-bold shadow-accent hover:shadow-[0_6px_20px_rgba(21,201,228,0.4)] transition-all duration-300">
                  <NavLink to="/contacto">Trabajemos Juntos</NavLink>
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

export default Nosotros;
