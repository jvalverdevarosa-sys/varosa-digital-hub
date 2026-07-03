import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import {
  Utensils,
  Building2,
  Factory,
  Droplets,
  ShoppingCart,
  Check,
  MessageCircle,
  Star,
} from "lucide-react";
import { aniosExperiencia } from "@/lib/utils";

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
import logoMagicMountain from "@/assets/logos/clientes/magic-mountain.jpeg";
import logoMisticoPark from "@/assets/logos/clientes/mistico-park.png";
import logoNammbu from "@/assets/logos/clientes/nammbu-beachfront-bungalows.png";
import logoHotelPocoAPoco from "@/assets/logos/clientes/hotel-poco-a-poco.png";
import logoSibu from "@/assets/logos/clientes/sibu-boutique-hotel.jpeg";
import logoSelvatura from "@/assets/logos/clientes/selvatura-park.jpeg";
import logoMonteverdeLodge from "@/assets/logos/clientes/monteverde-lodge.png";
import logoGrupoVisa from "@/assets/logos/clientes/grupo-visa.jpeg";
import logoFruteraLaPaz from "@/assets/logos/clientes/frutera-la-paz.png";
import logoFyffes from "@/assets/logos/clientes/fyffes.png";
import logoCoopebrisas from "@/assets/logos/clientes/coopebrisas.png";
import logoLaGiralda from "@/assets/logos/clientes/la-giralda.jpeg";
import logoCoopelecheros from "@/assets/logos/clientes/coopelecheros.png";
import logoLacteosHyR from "@/assets/logos/clientes/lacteos-h-y-r.jpeg";
import logoLacteosCeci from "@/assets/logos/clientes/lacteos-ceci.png";
import logoEconomas from "@/assets/logos/clientes/economas.jpeg";

const clientLogos: Record<string, string> = {
  "Hotel El Establo": logoHotelElEstablo,
  "El Establo": logoHotelElEstablo,
  "La Paz Waterfall Gardens": logoLaPazWaterfall,
  "Arenal Springs": logoArenalSprings,
  "Santo Pecado": logoSantoPecado,
  "Ticofrut": logoTicofrut,
  "Coopelesca": logoCoopelesca,
  "Industrias Charo": logoIndustriasCharo,
  "Pollos Pako": logoPollosPako,
  "Carnicerías Matoro": logoCarniceriasMatoro,
  "Matoro": logoCarniceriasMatoro,
  "Magic Mountain": logoMagicMountain,
  "Mistico Park": logoMisticoPark,
  "Nammbú Beachfront Bungalows": logoNammbu,
  "Nammbú": logoNammbu,
  "Hotel Poco a Poco": logoHotelPocoAPoco,
  "Sibú Boutique Hotel": logoSibu,
  "Sibú Hotel": logoSibu,
  "Selvatura Park": logoSelvatura,
  "Monteverde Lodge": logoMonteverdeLodge,
  "Grupo VISA": logoGrupoVisa,
  "Frutera La Paz": logoFruteraLaPaz,
  "Fyffes": logoFyffes,
  "Coopebrisas": logoCoopebrisas,
  "La Giralda": logoLaGiralda,
  "Coopelecheros": logoCoopelecheros,
  "Lácteos H y R": logoLacteosHyR,
  "Lácteos Ceci": logoLacteosCeci,
  "Economás": logoEconomas,
};

const prioritySectors = [
  {
    icon: Factory,
    title: "Industria Alimentaria",
    anchor: "industria-alimentaria",
    badge: "Prioridad 2026",
    tagline: "Inocuidad sin compromisos: cumpla auditorías con confianza",
    problem:
      "Las plantas procesadoras de alimentos enfrentan auditorías cada vez más exigentes. Un fallo en limpieza o desinfección puede significar un rechazo de lote, cierre temporal o pérdida de certificaciones internacionales.",
    solution:
      "Diseñamos protocolos de limpieza y desinfección con productos certificados, implementamos código de colores FDA para prevenir contaminación cruzada, y validamos resultados con pruebas ATP.",
    products: [
      { name: "Químicos Diversey", detail: "Desinfectantes y detergentes para CIP y superficies" },
      { name: "Kemical y Solquisa", detail: "Línea de limpieza para equipos de proceso" },
      { name: "Cepillos El Castor", detail: "Certificación FDA, sistema de código de colores" },
      { name: "Fibras y esponjas 3M", detail: "Por tipo de superficie y nivel de abrasión" },
    ],
    services: [
      "Auditorías de higiene con luminómetro ATP",
      "Capacitaciones BPM y HACCP in situ",
      "Protocolos de dilución documentados",
      "Programa de código de colores FDA",
    ],
    clients: ["Ticofrut", "Grupo VISA", "Fyffes", "Frutera La Paz", "Pollos Pako", "Industrias Charo"],
  },
  {
    icon: Utensils,
    title: "HORECA y Turismo",
    anchor: "horeca-turismo",
    badge: "Prioridad 2026",
    tagline: "Higiene impecable para la experiencia de sus huéspedes",
    problem:
      "Hoteles, restaurantes y parques turísticos operan con alta rotación de huéspedes y estándares internacionales. Un baño sin papel, una cocina mal desinfectada o un olor desagradable puede arruinar la reputación en una sola reseña.",
    solution:
      "Instalamos sistemas de dispensado TORK que reducen consumo y garantizan disponibilidad 24/7. Complementamos con químicos especializados por área (cocina, habitaciones, áreas comunes) y capacitación del personal operativo.",
    products: [
      { name: "Sistemas TORK (Essity)", detail: "Dispensadores de toallas, papel, jabón y sanitizantes" },
      { name: "Químicos Diversey y Solquisa", detail: "Por área: cocinas, pisos, baños, cristales" },
      { name: "Herramientas El Castor", detail: "Cepillos y escobas para cada zona operativa" },
      { name: "Accesorios 3M", detail: "Fibras, esponjas y paños de microfibra" },
    ],
    services: [
      "Instalación completa de dispensadores TORK",
      "Protocolos de limpieza por área operativa",
      "Capacitación de personal de housekeeping y cocina",
      "Reposición programada con visitas de ruta",
    ],
    clients: ["Hotel El Establo", "Mistico Park", "Selvatura Park", "Nammbú", "Sibú Hotel", "Monteverde Lodge"],
  },
  {
    icon: Building2,
    title: "Manufactura y Plantas de Proceso",
    anchor: "manufactura",
    badge: "Prioridad 2026",
    tagline: "Limpieza industrial que protege su inversión en equipos y personal",
    problem:
      "Las plantas de manufactura necesitan limpiar equipos pesados, pisos industriales y áreas de producción sin dañar maquinaria ni comprometer la seguridad del personal. Los costos de químicos se disparan cuando no hay control de dilución.",
    solution:
      "Proveemos químicos industriales con sistemas de dosificación que controlan el consumo exacto. Diseñamos kits de herramientas por zona y capacitamos al equipo de limpieza en manejo seguro de productos.",
    products: [
      { name: "Químicos Diversey", detail: "Desengrasantes, desinfectantes y limpiadores industriales" },
      { name: "Kemical y Solquisa", detail: "Línea industrial para pisos, equipos y superficies" },
      { name: "Kits El Castor", detail: "Herramientas especializadas por zona de planta" },
      { name: "Sistemas de dosificación", detail: "Control automático de dilución para ahorro en químicos" },
    ],
    services: [
      "Diagnóstico de necesidades por planta",
      "Implementación de sistemas de dosificación",
      "Capacitación en manejo seguro de químicos",
      "Auditorías periódicas de efectividad",
    ],
    clients: ["Coopelesca", "Coopebrisas"],
  },
];

const secondarySectors = [
  {
    icon: Droplets,
    title: "Lecherías y Lácteos",
    description:
      "Protocolos CIP con Kemical y Solquisa para equipos de ordeño y tanques de enfriamiento. Cepillos especializados El Castor, toallas de secado de ubres y validaciones ATP para control bacteriano.",
    clients: ["La Giralda", "Coopelecheros", "Lácteos H y R"],
  },
  {
    icon: ShoppingCart,
    title: "Retail y Comercio",
    description:
      "Dispensadores TORK para baños públicos, químicos para pisos y vitrinas, suministros de oficina y programa de reposición planificada con visitas de ruta.",
    clients: ["Economás", "Carnicerías Matoro"],
  },
];

const Soluciones = () => {
  // HashRouter usa el hash como ruta, por eso NO usamos href="#ancla" (rompería el router).
  // Desplazamiento suave manual al anclaje.
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Soluciones por Industria"
        description="Soluciones especializadas de limpieza e higiene para industria alimentaria, HORECA, manufactura y lecherías en Costa Rica. Productos Diversey, TORK, El Castor, 3M con acompañamiento técnico."
        path="/soluciones"
        keywords="soluciones limpieza industria alimentaria Costa Rica, higiene HORECA hoteles restaurantes, manufactura limpieza industrial, lecherías CIP, Diversey TORK El Castor"
      />
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Soluciones por <span className="text-accent">Industria</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                No vendemos productos sueltos — diseñamos soluciones completas de
                limpieza e higiene adaptadas a su operación, con productos
                certificados, capacitación y acompañamiento técnico
              </p>
            </div>
          </div>
        </section>

        {/* Bento — índice visual de soluciones */}
        <section className="py-12 border-b border-primary/10 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(96px,auto)] gap-4">

              {/* Celda destacada — Industria Alimentaria */}
              <ScrollReveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2" delay={0}>
                <button
                  type="button"
                  onClick={() => scrollToSection("industria-alimentaria")}
                  className="group flex h-full w-full flex-col justify-between rounded-2xl border-2 border-highlight bg-gradient-to-br from-primary to-secondary p-6 text-left text-white shadow-varosa transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.4)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                        <Factory className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-[hsl(217_50%_14%)]">
                        <Star className="h-3 w-3" aria-hidden="true" />
                        Sector prioritario 2026
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-black">Industria Alimentaria</h3>
                      <p className="mt-2 text-sm md:text-base text-white/85 leading-relaxed">
                        Inocuidad sin compromisos: cumpla auditorías con confianza.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Diversey", "Kemical", "El Castor", "8 clientes de referencia"].map((chip) => (
                      <span key={chip} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                        {chip}
                      </span>
                    ))}
                  </div>
                </button>
              </ScrollReveal>

              {/* HORECA y Turismo — celda ancha */}
              <ScrollReveal className="sm:col-span-2 lg:col-span-2" delay={75}>
                <button
                  type="button"
                  onClick={() => scrollToSection("horeca-turismo")}
                  className="group flex h-full w-full items-center gap-4 rounded-2xl border border-primary/10 bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_30px_hsl(var(--accent)/0.15)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Utensils className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">HORECA y Turismo</h3>
                    <p className="text-sm text-foreground/60">Hoteles, restaurantes y parques · 11 clientes de referencia</p>
                  </div>
                </button>
              </ScrollReveal>

              {/* Manufactura — celda ancha */}
              <ScrollReveal className="sm:col-span-2 lg:col-span-2" delay={150}>
                <button
                  type="button"
                  onClick={() => scrollToSection("manufactura")}
                  className="group flex h-full w-full items-center gap-4 rounded-2xl border border-primary/10 bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_30px_hsl(var(--accent)/0.15)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Building2 className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">Manufactura y Plantas de Proceso</h3>
                    <p className="text-sm text-foreground/60">Limpieza industrial con control de dilución</p>
                  </div>
                </button>
              </ScrollReveal>

              {/* Métricas */}
              {[
                { num: "500+", label: "Clientes activos" },
                { num: "3,000+", label: "Productos" },
                { num: "4", label: "Regiones" },
                { num: `${aniosExperiencia()}+`, label: "Años" },
              ].map((m, i) => (
                <ScrollReveal key={m.label} className="lg:col-span-1" delay={i * 75}>
                  <div className="flex h-full flex-col justify-center rounded-2xl border border-primary/10 bg-card p-5 text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/45">{m.label}</span>
                    <span className="mt-1 font-heading text-3xl md:text-4xl font-black text-primary dark:text-[hsl(216_60%_70%)]">{m.num}</span>
                  </div>
                </ScrollReveal>
              ))}

              {/* Lecherías — celda pequeña */}
              <ScrollReveal className="lg:col-span-1" delay={0}>
                <button
                  type="button"
                  onClick={() => scrollToSection("otros-sectores")}
                  className="group flex h-full w-full flex-col justify-center gap-2 rounded-2xl border border-primary/10 bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_30px_hsl(var(--accent)/0.15)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Droplets className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-sm font-bold text-foreground">Lecherías y Lácteos</span>
                </button>
              </ScrollReveal>

              {/* Retail — celda pequeña */}
              <ScrollReveal className="lg:col-span-1" delay={75}>
                <button
                  type="button"
                  onClick={() => scrollToSection("otros-sectores")}
                  className="group flex h-full w-full flex-col justify-center gap-2 rounded-2xl border border-primary/10 bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_30px_hsl(var(--accent)/0.15)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <ShoppingCart className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-sm font-bold text-foreground">Retail y Comercio</span>
                </button>
              </ScrollReveal>

              {/* CTA — celda ancha */}
              <ScrollReveal className="sm:col-span-2 lg:col-span-2" delay={150}>
                <a
                  href={`https://wa.me/50686703251?text=${encodeURIComponent("Hola, mi industria no aparece en el sitio y me gustaría conversar sobre una solución de limpieza e higiene para mi operación.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/15 hover:shadow-[0_10px_30px_hsl(var(--accent)/0.2)]"
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">¿Su industria no está aquí?</h3>
                    <p className="text-sm text-foreground/60">Conversemos y diseñamos una solución a su medida.</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-110">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Priority Sectors */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="space-y-12">
              {prioritySectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <ScrollReveal key={index} delay={index * 150}>
                  <Card
                    id={sector.anchor}
                    className="scroll-mt-24 border border-primary/10 hover:border-accent/40 transition-all duration-300 overflow-hidden bg-card"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary/[0.06] via-accent/[0.04] to-transparent px-6 sm:px-8 py-6 border-b border-primary/10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                          </div>
                          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                            {sector.title}
                          </h2>
                        </div>
                        <Badge className="w-fit bg-highlight/15 text-highlight border-highlight/20 font-semibold">
                          <Star className="h-3 w-3 mr-1" aria-hidden="true" />
                          {sector.badge}
                        </Badge>
                      </div>
                      <p className="text-base sm:text-lg text-foreground/70 mt-2 font-medium">
                        {sector.tagline}
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left: Problema + Productos */}
                      <CardHeader className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-primary/10 space-y-6">
                        <div>
                          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                            El desafío
                          </CardTitle>
                          <p className="text-foreground/80 leading-relaxed">
                            {sector.problem}
                          </p>
                        </div>

                        <div>
                          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                            Nuestra solución
                          </CardTitle>
                          <p className="text-foreground/80 leading-relaxed">
                            {sector.solution}
                          </p>
                        </div>

                        <div>
                          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
                            Productos clave
                          </CardTitle>
                          <div className="space-y-3">
                            {sector.products.map((p, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                                <div>
                                  <span className="text-sm font-semibold text-foreground/85">
                                    {p.name}
                                  </span>
                                  <span className="text-sm text-foreground/60">
                                    {" — "}{p.detail}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardHeader>

                      {/* Right: Servicios + Clientes + CTA */}
                      <CardContent className="p-6 sm:p-8 flex flex-col justify-between gap-6">
                        <div>
                          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
                            Servicios incluidos
                          </CardTitle>
                          <ul className="space-y-2.5">
                            {sector.services.map((s, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 text-highlight shrink-0 mt-1" aria-hidden="true" />
                                <span className="text-sm text-foreground/80">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
                            Clientes de referencia
                          </CardTitle>
                          <div className="flex flex-wrap gap-2">
                            {sector.clients.map((c, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-primary/5 text-foreground/70 border-primary/10 text-xs font-medium flex items-center gap-1.5 py-1 px-2"
                              >
                                {clientLogos[c] && (
                                  <img src={clientLogos[c]} alt="" className="h-4 w-4 object-contain rounded-sm" loading="lazy" />
                                )}
                                {c}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          asChild
                          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold shadow-lg transition-all duration-300"
                        >
                          <a
                            href={`https://wa.me/50686703251?text=Hola%2C%20me%20interesa%20la%20soluci%C3%B3n%20para%20${encodeURIComponent(sector.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                            Cotizar para {sector.title}
                          </a>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Secondary Sectors */}
        <section id="otros-sectores" className="scroll-mt-24 py-16 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-6 lg:px-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              También servimos
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {secondarySectors.map((s, i) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={i} delay={i * 150}>
                  <Card
                    className="border border-primary/10 hover:border-accent/40 transition-all duration-300 bg-card"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg font-heading text-foreground">
                          {s.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground/75 leading-relaxed">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.clients.map((c, j) => (
                          <Badge
                            key={j}
                            variant="secondary"
                            className="bg-primary/5 text-foreground/60 border-primary/10 text-xs flex items-center gap-1.5 py-1 px-2"
                          >
                            {clientLogos[c] && (
                              <img src={clientLogos[c]} alt="" className="h-4 w-4 object-contain rounded-sm" loading="lazy" />
                            )}
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
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
                ¿Su industria no aparece aquí?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Atendemos cualquier operación que requiera limpieza profesional.
                Cuéntenos su necesidad y diseñamos una solución a la medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
                >
                  <a
                    href="https://wa.me/50686703251?text=Hola%2C%20necesito%20una%20soluci%C3%B3n%20de%20limpieza%20para%20mi%20operaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Hablar con un Asesor
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-bold transition-all duration-300"
                >
                  <NavLink to="/productos">Ver Catálogo de Productos</NavLink>
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

export default Soluciones;
