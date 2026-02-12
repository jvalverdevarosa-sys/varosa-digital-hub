import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, MessageCircle } from "lucide-react";

const articles = [
  {
    title: "Código de Colores en Cepillos: Cómo Prevenir Contaminación Cruzada con El Castor",
    category: "Guía Técnica",
    excerpt: "El sistema de código de colores FDA separa herramientas por zona: azul para producción, rojo para pisos, verde para áreas externas y amarillo para superficies de contacto con alimentos. Aprenda cómo implementarlo correctamente con los cepillos El Castor que distribuimos.",
    date: "10 Feb 2026",
    readTime: "6 min",
    featured: true,
  },
  {
    title: "5 Formas de Reducir el Consumo de Papel en Baños de Alto Tráfico con TORK",
    category: "Ahorro y Eficiencia",
    excerpt: "Los dispensadores TORK SmartOne reducen el consumo de papel higiénico hasta un 40% gracias a su sistema de dispensado hoja por hoja. Compare el costo por uso vs. rollos convencionales y descubra cómo calcular el ahorro real para su operación.",
    date: "3 Feb 2026",
    readTime: "5 min",
    featured: true,
  },
  {
    title: "Dilución Correcta de Químicos Diversey: Errores Comunes que Cuestan Dinero",
    category: "Tips de Ahorro",
    excerpt: "Usar más producto del necesario no limpia mejor — solo desperdicia dinero. Conozca las diluciones correctas de los principales productos Diversey y cómo los sistemas de dosificación automática pueden ahorrarle hasta un 30% en químicos.",
    date: "27 Ene 2026",
    readTime: "7 min",
    featured: false,
  },
  {
    title: "¿Qué Exige el SENASA para Plantas de Alimentos en Costa Rica? Guía BPM 2026",
    category: "Normativas",
    excerpt: "Las Buenas Prácticas de Manufactura (BPM) reguladas por SENASA establecen requisitos específicos de limpieza y desinfección para plantas procesadoras de alimentos. Repasamos los puntos clave y qué productos cumplen con las especificaciones.",
    date: "20 Ene 2026",
    readTime: "8 min",
    featured: false,
  },
  {
    title: "Dispensadores de Jabón: TORK vs. Dispensadores Genéricos — ¿Vale la Diferencia?",
    category: "Comparativo",
    excerpt: "Analizamos durabilidad, costo por lavado, higiene y mantenimiento entre dispensadores TORK de Essity y opciones genéricas del mercado. Los datos muestran que la inversión inicial mayor se recupera en menos de 8 meses.",
    date: "13 Ene 2026",
    readTime: "6 min",
    featured: false,
  },
  {
    title: "Limpieza CIP en Lecherías: Protocolo Paso a Paso con Kemical y Solquisa",
    category: "Guía Técnica",
    excerpt: "La limpieza CIP (Clean-In-Place) es crítica en equipos de ordeño y tanques de enfriamiento. Detallamos el protocolo de 5 pasos con los productos Kemical y Solquisa que cumplen con los estándares del sector lácteo costarricense.",
    date: "6 Ene 2026",
    readTime: "9 min",
    featured: false,
  },
  {
    title: "Auditorías ATP: Qué Son, Por Qué Importan y Cómo VAROSA Puede Ayudarle",
    category: "Servicios",
    excerpt: "Las pruebas de bioluminiscencia ATP miden la contaminación en superficies en segundos. Ofrecemos este servicio como parte de nuestro acompañamiento técnico. Conozca cómo funciona y qué resultados hemos obtenido con clientes reales.",
    date: "16 Dic 2025",
    readTime: "5 min",
    featured: false,
  },
  {
    title: "Cómo Elegir las Fibras y Esponjas 3M Correctas para Cada Superficie",
    category: "Guía Técnica",
    excerpt: "No todas las fibras son iguales: la fibra verde raya el acero inoxidable y la blanca no limpia grasa pesada. Aprenda a seleccionar la fibra 3M correcta según el material y el tipo de suciedad para proteger sus superficies y equipos.",
    date: "9 Dic 2025",
    readTime: "4 min",
    featured: false,
  },
];

const categories = [
  "Todos",
  "Guía Técnica",
  "Ahorro y Eficiencia",
  "Tips de Ahorro",
  "Normativas",
  "Comparativo",
  "Servicios",
];

const Blog = () => {
  const featured = articles.filter((a) => a.featured);
  const all = articles;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog"
        description="Guías técnicas, tips de ahorro y normativas para limpieza industrial, higiene alimentaria y sector HORECA en Costa Rica. Contenido práctico por VAROSA."
        path="/blog"
        keywords="guía limpieza industrial, BPM Costa Rica, código colores cepillos FDA, ahorro papel TORK, dilución Diversey, auditoría ATP, limpieza CIP lecherías"
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
                Blog y <span className="text-accent">Recursos</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Guías técnicas, tips de ahorro y normativas para sacar el máximo
                provecho a sus productos de limpieza e higiene profesional
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-primary/10 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-accent"
                      : "border-primary/20 text-foreground hover:border-highlight hover:text-highlight hover:bg-highlight/5"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
              Artículos Destacados
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featured.map((article, index) => (
                <Card
                  key={index}
                  className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group overflow-hidden bg-card"
                >
                  <div className="h-48 bg-gradient-to-br from-highlight/15 via-accent/10 to-secondary/10" />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="bg-highlight/15 text-highlight border-highlight/20 font-medium"
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-sm text-foreground/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" aria-hidden="true" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-heading text-foreground group-hover:text-highlight transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-2 text-foreground/70 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-varosa transition-all duration-300">
                      Leer Artículo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Articles */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
              Todos los Artículos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {all.map((article, index) => (
                <Card
                  key={index}
                  className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group bg-card"
                >
                  <div className="h-40 bg-gradient-to-br from-accent/10 via-highlight/8 to-primary/5" />
                  <CardHeader className="pb-3">
                    <Badge
                      variant="secondary"
                      className="w-fit mb-2 text-xs bg-accent/10 text-accent border-accent/20"
                    >
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg font-heading text-foreground group-hover:text-highlight transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-foreground/70 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-highlight hover:text-highlight hover:bg-highlight/10 font-medium"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — Consultas técnicas */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                ¿Tiene una Consulta Técnica?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Nuestro equipo técnico puede asesorarle sobre productos, diluciones,
                protocolos de limpieza y normativas. Escríbanos por WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
                >
                  <a
                    href="https://wa.me/50686703251?text=Hola%2C%20tengo%20una%20consulta%20t%C3%A9cnica%20sobre%20productos%20de%20limpieza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Consulta por WhatsApp
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

export default Blog;
