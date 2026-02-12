import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import {
  Building2,
  Utensils,
  Droplets,
  ShoppingCart,
  TrendingUp,
  CheckCircle,
  Quote,
  MessageCircle,
  MapPin,
} from "lucide-react";

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

const clientLogos: Record<string, string> = {
  "Hotel El Establo": logoHotelElEstablo,
  "La Paz Waterfall Gardens": logoLaPazWaterfall,
  "Arenal Springs": logoArenalSprings,
  "Santo Pecado": logoSantoPecado,
  "Ticofrut": logoTicofrut,
  "Coopelesca": logoCoopelesca,
  "Industrias Charo": logoIndustriasCharo,
  "Pollos Pako": logoPollosPako,
  "Carnicerías Matoro": logoCarniceriasMatoro,
  "Sweet Well": logoSweetWell,
};

const cases = [
  {
    sector: "HORECA y Turismo",
    icon: Utensils,
    description:
      "Hoteles, restaurantes, parques eco-turísticos y operadores de turismo con altos estándares de limpieza e higiene para huéspedes nacionales e internacionales.",
    challenge:
      "Mantener estándares de higiene internacionales en áreas de alta rotación: habitaciones, cocinas, áreas comunes, baños públicos y senderos — con personal rotativo y temporadas altas exigentes.",
    solution:
      "Sistemas TORK de dispensado en baños públicos y cocinas, químicos Diversey para pisos y superficies, productos Solquisa para cocinas, herramientas El Castor y accesorios 3M. Capacitación in situ del personal y protocolos personalizados por área.",
    results: [
      "Estandarización de limpieza en todas las áreas operativas",
      "Reducción de hasta 35% en consumo de papel con dispensadores TORK",
      "Personal capacitado en protocolos de higiene y manejo de químicos",
      "Reposición programada para evitar desabastecimiento en temporada alta",
    ],
    testimonial:
      "Con VAROSA logramos estandarizar la limpieza en todas las áreas del hotel. La capacitación del personal y el acompañamiento técnico marcaron la diferencia.",
    testimonialAuthor: "Gerencia de Operaciones — Sector Hotelero, Zona Norte",
    clients: [
      "Hotel El Establo",
      "La Paz Waterfall Gardens",
      "Arenal Springs",
      "Magic Mountain",
      "Mistico Park",
      "Nammbú Beachfront Bungalows",
      "Hotel Poco a Poco",
      "Sibú Boutique Hotel",
      "Selvatura Park",
      "Monteverde Lodge",
      "Santo Pecado",
      "Freddo Fresas",
    ],
    region: "Arenal, Monteverde, Guanacaste y Zona Norte",
  },
  {
    sector: "Industria Alimentaria",
    icon: Building2,
    description:
      "Plantas procesadoras, empacadoras de frutas, avícolas, cooperativas agroindustriales y operaciones de manufactura de alimentos que requieren cumplimiento estricto de BPM.",
    challenge:
      "Cumplir auditorías internacionales de seguridad alimentaria, prevenir contaminación cruzada en líneas de producción, y mantener trazabilidad de procesos de limpieza y desinfección.",
    solution:
      "Químicos especializados Diversey y Kemical para CIP y desinfección de superficies. Cepillos El Castor con certificación FDA y sistema de código de colores. Validaciones ATP periódicas, auditorías técnicas y capacitaciones BPM en sitio.",
    results: [
      "Aprobación de auditorías internacionales de inocuidad",
      "Implementación de código de colores FDA en toda la planta",
      "Reducción medible de contaminación cruzada entre zonas",
      "Trazabilidad de diluciones y procesos de limpieza documentados",
    ],
    testimonial:
      "Las validaciones ATP y la capacitación en código de colores nos ayudaron a pasar la auditoría internacional sin observaciones en el área de limpieza.",
    testimonialAuthor: "Aseguramiento de Calidad — Sector Alimentario",
    clients: [
      "Coopelesca",
      "Ticofrut",
      "Grupo VISA",
      "Frutera La Paz",
      "Fyffes",
      "Industrias Charo",
      "Coopebrisas",
      "Pollos Pako",
    ],
    region: "Zona Norte, Caribe y Valle Central",
  },
  {
    sector: "Lecherías y Lácteos",
    icon: Droplets,
    description:
      "Fincas lecheras, plantas de enfriamiento, cooperativas lácteas y procesadoras de derivados que requieren control estricto de bacterias e inocuidad en todas las etapas.",
    challenge:
      "Controlar el conteo bacteriano en equipos de ordeño, tanques de enfriamiento y superficies de contacto. Mantener la calidad del producto final y cumplir regulaciones del sector lácteo costarricense.",
    solution:
      "Protocolo CIP completo con químicos Kemical y Solquisa. Cepillos especializados El Castor para lecherías. Toallas de secado de ubres. Validaciones ATP periódicas para verificar efectividad de limpieza en puntos críticos.",
    results: [
      "Reducción significativa del conteo bacteriano en tanques",
      "Mayor vida útil del producto final (leche y derivados)",
      "Protocolos CIP documentados y replicables por el personal",
      "Cumplimiento de estándares del sector lácteo nacional",
    ],
    testimonial:
      "Desde que implementamos el protocolo CIP con los productos de VAROSA, el conteo bacteriano bajó consistentemente y la calidad de la leche mejoró.",
    testimonialAuthor: "Encargado de Planta — Sector Lácteo, San Carlos",
    clients: [
      "La Giralda",
      "Rancho Tres Hermanos",
      "Hacienda Pedregal",
      "Hacienda La Paz",
      "Coopelecheros",
      "Lácteos H y R",
      "Lácteos Ceci",
    ],
    region: "San Carlos, Zona Norte",
  },
  {
    sector: "Retail y Comercio",
    icon: ShoppingCart,
    description:
      "Supermercados, carnicerías especializadas y comercios con áreas de atención al público que necesitan limpieza constante y gestión eficiente de suministros.",
    challenge:
      "Mantener pisos, vitrinas y baños impecables en áreas de alto tráfico, con reposición oportuna de insumos y control de costos de inventario de limpieza.",
    solution:
      "Dispensadores TORK en baños de clientes, químicos para pisos y superficies, artículos de oficina, y programa de reposición con visitas periódicas del vendedor de ruta.",
    results: [
      "Espacios de atención siempre limpios e higiénicos",
      "Reducción de costos con programa de reposición planificada",
      "Mejor experiencia de compra para el cliente final",
    ],
    testimonial:
      "VAROSA nos atiende con visitas regulares y siempre tiene disponibilidad. No tenemos que preocuparnos por quedarnos sin insumos.",
    testimonialAuthor: "Administración — Sector Comercio, Zona Norte",
    clients: ["Economás", "Carnicerías Matoro", "Sweet Well"],
    region: "Zona Norte",
  },
];

const allClients = [
  "El Establo",
  "La Paz Waterfall Gardens",
  "Arenal Springs",
  "Magic Mountain",
  "Mistico Park",
  "Nammbú",
  "Hotel Poco a Poco",
  "Sibú Hotel",
  "Selvatura Park",
  "Monteverde Lodge",
  "Santo Pecado",
  "Freddo Fresas",
  "Coopelesca",
  "Ticofrut",
  "Grupo VISA",
  "Frutera La Paz",
  "Fyffes",
  "Industrias Charo",
  "Coopebrisas",
  "Pollos Pako",
  "La Giralda",
  "Rancho Tres Hermanos",
  "Coopelecheros",
  "Lácteos H y R",
  "Lácteos Ceci",
  "Economás",
  "Matoro",
  "Sweet Well",
];

const CasosExito = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Casos de Éxito"
        description="Más de 500 clientes en Costa Rica confían en VAROSA: hoteles, parques eco-turísticos, plantas alimentarias, lecherías y comercios. Conozca cómo transformamos sus operaciones de limpieza e higiene."
        path="/casos-exito"
        keywords="clientes VAROSA Costa Rica, casos éxito limpieza industrial, testimoniales higiene HORECA, Mistico Park, Selvatura, Ticofrut, Hotel El Establo"
      />
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Casos de <span className="text-accent">Éxito</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Desde hoteles boutique en Monteverde hasta plantas procesadoras en
                Zona Norte — conozca cómo nuestros clientes transforman sus
                operaciones con VAROSA
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden border-y border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">
                  500+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90">
                  Clientes Activos
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">
                  18+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90">
                  Años de Experiencia
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">
                  4
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90">
                  Regiones de Cobertura
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 text-accent">
                  3,000+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90">
                  Productos Disponibles
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="space-y-12">
              {cases.map((c, index) => {
                const Icon = c.icon;
                return (
                  <ScrollReveal key={index} delay={index * 150}>
                  <Card
                    className="border border-primary/10 hover:border-accent/40 transition-all duration-300 overflow-hidden bg-card"
                  >
                    {/* Sector header */}
                    <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-transparent px-6 sm:px-8 py-5 border-b border-primary/10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                          </div>
                          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                            {c.sector}
                          </h2>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-foreground/50">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {c.region}
                        </div>
                      </div>
                      <p className="text-sm text-foreground/70 mt-2 max-w-3xl">
                        {c.description}
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left: Desafío + Solución */}
                      <CardHeader className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-primary/10">
                        <div className="space-y-5">
                          <div>
                            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                              Desafío
                            </CardTitle>
                            <p className="text-foreground/80 leading-relaxed">
                              {c.challenge}
                            </p>
                          </div>
                          <div>
                            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                              Solución VAROSA
                            </CardTitle>
                            <p className="text-foreground/80 leading-relaxed">
                              {c.solution}
                            </p>
                          </div>

                          {/* Clientes */}
                          <div>
                            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
                              Clientes en este sector
                            </CardTitle>
                            <div className="flex flex-wrap gap-2">
                              {c.clients.map((client, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-primary/5 text-foreground/70 border-primary/10 text-xs font-medium flex items-center gap-1.5 py-1 px-2"
                                >
                                  {clientLogos[client] && (
                                    <img src={clientLogos[client]} alt="" className="h-4 w-4 object-contain rounded-sm" loading="lazy" />
                                  )}
                                  {client}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Right: Resultados + Testimonio */}
                      <CardContent className="p-6 sm:p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <TrendingUp
                                className="h-5 w-5 text-accent"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
                                Resultados
                              </span>
                            </div>
                            <ul className="space-y-3">
                              {c.results.map((result, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <CheckCircle
                                    className="h-5 w-5 text-accent shrink-0 mt-0.5"
                                    aria-hidden="true"
                                  />
                                  <span className="text-foreground/80 text-sm leading-relaxed">
                                    {result}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-primary/[0.03] border-l-4 border-accent p-5 rounded-r-lg">
                            <Quote
                              className="h-5 w-5 text-accent/60 mb-2"
                              aria-hidden="true"
                            />
                            <p className="text-sm italic text-foreground/70 leading-relaxed">
                              "{c.testimonial}"
                            </p>
                            <p className="text-xs text-foreground/45 mt-3 font-medium">
                              — {c.testimonialAuthor}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Clients */}
        <section className="py-20 bg-background border-y border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Clientes que Confían en Nosotros
              </h2>
              <p className="text-lg text-foreground/75">
                Empresas y operaciones de todas las industrias en Costa Rica
              </p>
            </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {allClients.map((client, index) => {
                const logo = clientLogos[client] || clientLogos[client === "El Establo" ? "Hotel El Establo" : ""] || clientLogos[client === "Matoro" ? "Carnicerías Matoro" : ""];
                return (
                <ScrollReveal key={index} delay={index * 40}>
                <div
                  className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 min-h-[90px]"
                >
                  {logo ? (
                    <img src={logo} alt={`Logo ${client}`} className="h-10 w-auto object-contain mb-1.5 rounded" loading="lazy" />
                  ) : null}
                  <span className="text-xs font-medium text-center text-foreground/70 leading-tight">
                    {client}
                  </span>
                </div>
                </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                ¿Listo para ser nuestro próximo caso de éxito?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Permítanos diseñar una solución de limpieza e higiene a la medida
                de su operación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
                >
                  <a
                    href="https://wa.me/50686703251?text=Hola%2C%20me%20interesa%20conocer%20las%20soluciones%20de%20VAROSA%20para%20mi%20operaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Cotizar por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-bold transition-all duration-300"
                >
                  <NavLink to="/contacto">Formulario de Contacto</NavLink>
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

export default CasosExito;
