import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart, Shield, Zap, Leaf } from "lucide-react";
import { aniosExperiencia } from "@/lib/utils";
// Fotos reales (WebP optimizadas). Fotos de ambiente: NO llevan el override
// de fondo cálido de dark mode (ese es solo para producto sobre blanco).
import fundadorJeank from "@/assets/nosotros/fundador-jeank.webp";
import fundadorArmando from "@/assets/nosotros/fundador-armando.webp";
import equipoVarosa from "@/assets/nosotros/equipo-varosa.webp";
import bodegaAereaLogo from "@/assets/nosotros/bodega-aerea-logo.webp";
import bodegaCostado from "@/assets/nosotros/bodega-costado.webp";
import bodegaVarosa from "@/assets/nosotros/bodega-varosa.webp";
import camionVarosa from "@/assets/nosotros/camion-varosa.webp";
import flotaComercial from "@/assets/nosotros/flota-comercial.webp";
import carroElectrico from "@/assets/nosotros/carro-electrico.webp";
import visitaMisticoPark from "@/assets/nosotros/visita-mistico-park.webp";

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
      <BreadcrumbSchema name="Nosotros" path="/nosotros" />
      <Navigation />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Sobre <span className="text-secondary">VAROSA</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Más de {aniosExperiencia()} años proporcionando soluciones profesionales de limpieza
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
                  <h2 className="text-3xl font-heading font-bold mb-4 text-secondary">Cómo Empezamos</h2>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    Fundada en 2007 con raíces en el sector agropecuario, VAROSA inició atendiendo lecherías y plantas de proceso. En 2014, con la incorporación de Jean Carlo, la empresa amplió su enfoque hacia industrias, hoteles, restaurantes y comercios especializados.
                  </p>
                  <p className="text-lg text-foreground/75 leading-relaxed mt-4">
                    Hoy sumamos más de {aniosExperiencia()} años de experiencia con presencia en Zona Norte, Caribe, Guanacaste y el Gran Área Metropolitana. Nos hemos consolidado como un proveedor integral de soluciones técnicas, productos especializados y acompañamiento profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent shadow-accent bg-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-secondary">Nuestro Propósito</h2>
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
                <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group bg-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
                </ScrollReveal>
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
                {aniosExperiencia()} años de crecimiento y compromiso con nuestros clientes
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 150}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all border-2 border-accent/20">
                    <span className="text-primary font-bold text-sm">{item.year}</span>
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
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fundadores */}
        <section className="py-20 bg-background border-t border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nuestros Fundadores</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                Las personas que dieron origen a VAROSA y hoy la dirigen
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  img: fundadorJeank,
                  w: 853,
                  h: 1280,
                  name: "Jean Carlo Valverde Rodríguez",
                  role: "Socio fundador · Gerente General",
                  alt: "Jean Carlo Valverde, socio fundador de VAROSA",
                },
                {
                  img: fundadorArmando,
                  w: 1021,
                  h: 1280,
                  name: "Luis Armando Valverde Rodríguez",
                  role: "Socio fundador · Gerente Comercial",
                  alt: "Luis Armando Valverde, socio fundador de VAROSA",
                },
              ].map((f) => (
                <ScrollReveal key={f.name}>
                <Card className="overflow-hidden border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 bg-card">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={f.img}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-heading font-bold text-foreground">{f.name}</h3>
                    <p className="text-sm font-semibold text-secondary mt-1">{f.role}</p>
                  </CardContent>
                </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Instalaciones */}
        <section className="py-20 bg-background border-t border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nuestras Instalaciones</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                Bodega y centro de distribución en Venecia de San Carlos
              </p>
            </div>

            <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-8">
              <img
                src={bodegaAereaLogo}
                alt="Vista aérea de las instalaciones de VAROSA"
                width={1149}
                height={1035}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl border border-primary/10 shadow-varosa"
              />
            </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ScrollReveal>
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-primary/10 shadow-varosa">
                <img
                  src={bodegaCostado}
                  alt="Vista lateral de la bodega de VAROSA"
                  width={1600}
                  height={902}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              </ScrollReveal>
              <ScrollReveal delay={120}>
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-primary/10 shadow-varosa">
                <img
                  src={bodegaVarosa}
                  alt="Instalaciones de VAROSA en Venecia de San Carlos"
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team & Numbers Section */}
        <section className="py-20 bg-background border-b border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nuestro Equipo</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                Un equipo comprometido que hace posible nuestra promesa de servicio
              </p>
            </div>

            <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border border-primary/10 shadow-varosa">
              <img
                src={equipoVarosa}
                alt="Equipo completo de VAROSA frente a la bodega en Venecia de San Carlos"
                width={1600}
                height={902}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "30", label: "Colaboradores", sublabel: "en todo el país" },
                { number: "4", label: "Vendedores de Campo", sublabel: "visitas en sitio" },
                { number: "4", label: "Vehículos Propios", sublabel: "flota de reparto" },
                { number: "4", label: "Regiones", sublabel: "de cobertura" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/3 border border-primary/8 hover:border-accent/30 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-primary font-heading mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-foreground/70">{stat.label}</div>
                  <div className="text-xs text-foreground/45 mt-0.5">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-10 text-center">
              <p className="text-base text-foreground/65 leading-relaxed">
                Nuestro equipo incluye personal administrativo, asesores comerciales de campo, técnicos de instalación y soporte, y un equipo de logística con flota propia que garantiza entregas puntuales en Zona Norte, Caribe, Guanacaste y el Gran Área Metropolitana.
              </p>
            </div>
          </div>
        </section>

        {/* Flota Propia */}
        <section className="py-20 bg-background border-t border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Flota Propia</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                Reparto directo a Zona Norte, Caribe, Guanacaste y GAM
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
              <ScrollReveal direction="left">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-primary/10 shadow-varosa max-w-[340px] mx-auto">
                <img
                  src={camionVarosa}
                  alt="Camión de reparto de VAROSA con rotulación TORK"
                  width={1400}
                  height={1867}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={120}>
              <div className="space-y-6">
                <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-primary/10 shadow-varosa">
                  <img
                    src={flotaComercial}
                    alt="Flota de vehículos rotulados del equipo comercial de VAROSA"
                    width={1400}
                    height={790}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  Contamos con flota propia para el reparto de nuestros productos a Zona Norte,
                  Caribe, Guanacaste y el Gran Área Metropolitana, garantizando entregas
                  puntuales y seguimiento de cada pedido.
                </p>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Compromiso Ambiental */}
        <section className="py-20 bg-background border-t border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
              <ScrollReveal direction="left">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-primary/10 shadow-varosa">
                <img
                  src={carroElectrico}
                  alt="Vehículo eléctrico rotulado de VAROSA"
                  width={1400}
                  height={790}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={120}>
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10">
                  <Leaf className="h-7 w-7 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Compromiso Ambiental</h2>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Contamos con una política de tratamiento y manejo de residuos y de gestión
                  ambiental. Desde 2023 incorporamos un vehículo eléctrico a nuestra flota,
                  reduciendo las emisiones de nuestra operación comercial.
                </p>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cultura y Equipo Humano */}
        <section className="py-20 bg-background border-t border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Cultura y Equipo Humano</h2>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                El compromiso de las personas detrás de VAROSA
              </p>
            </div>

            <ScrollReveal>
            <figure className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-varosa">
                <img
                  src={visitaMisticoPark}
                  alt="Equipo de VAROSA en actividad de integración en Místico Park"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-center text-sm text-foreground/60 mt-4">
                Actividad de integración del equipo VAROSA en Místico Park, cliente referente.
              </figcaption>
            </figure>
            </ScrollReveal>
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
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-white">Ahorro en Costo en Uso</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Productos concentrados y sistemas dosificadores que optimizan el rendimiento 
                    y reducen significativamente los costos operativos.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-white">Protocolos Estandarizados</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Metodologías probadas y personalizadas para cada industria que garantizan 
                    resultados consistentes y cumplimiento normativo.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-white">Capacitación y Acompañamiento Técnico</h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Instalación de equipos, validaciones ATP, auditorías en sitio y 
                    capacitaciones continuas para su personal operativo.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-white">Entregas Confiables con Flota Propia</h3>
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
