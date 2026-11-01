import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { enlaceWhatsApp } from "@/lib/whatsapp";
import { articles, type Article } from "@/data/blog";

const BASE_URL = "https://varosacr.com";

const categories = ["Todos", "Inocuidad alimentaria", "Guía Técnica", "Ahorro y Eficiencia", "Tips de Ahorro", "Normativas", "Comparativo", "Servicios"];

// Listado del blog. Cada artículo vive en su propia página (/blog/:slug, ver
// BlogArticulo.tsx) para que buscadores y asistentes de IA puedan encontrarlo,
// citarlo y enlazarlo de forma individual.
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredArticles =
    activeCategory === "Todos"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filteredArticles.filter((a) => a.featured);

  // Schema.org Blog con la lista de artículos (cada uno con su URL propia).
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog#blog`,
    name: "Blog y Recursos — VAROSA",
    url: `${BASE_URL}/blog`,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Comercializadora VARO S.A.",
    },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${BASE_URL}/blog/${a.slug}`,
      datePublished: a.isoDate,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog"
        description="Blog de VAROSA: guías y recursos sobre limpieza, higiene, sanitización e inocuidad para industria alimentaria, HORECA y lecherías en Costa Rica."
        path="/blog"
        keywords="guía limpieza industrial, BPM Costa Rica, código de colores cepillos, ahorro papel TORK, dilución Diversey, auditoría ATP, limpieza CIP lecherías"
      />
      <BreadcrumbSchema name="Blog" path="/blog" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Blog y <span className="text-secondary">Recursos</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Guías técnicas, tips de ahorro y normativas para sacar el máximo
                provecho a sus productos de limpieza e higiene profesional
              </p>
            </div>
          </div>
        </section>

        {/* Categories — functional filter */}
        <section className="py-8 border-b border-primary/10 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            {/* Featured */}
            {featured.length > 0 && (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
                  Artículos Destacados
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {featured.map((article, index) => (
                    <ScrollReveal key={article.slug} delay={index * 150}>
                      <ArticleCard article={article} variant="featured" />
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}

            {/* All / filtered */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
              {activeCategory === "Todos" ? "Todos los Artículos" : activeCategory}
            </h2>
            {filteredArticles.length === 0 ? (
              <p className="text-foreground/60 text-center py-12">
                No hay artículos en esta categoría todavía.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <ScrollReveal key={article.slug + "-grid"} delay={index * 80}>
                    <ArticleCard article={article} variant="grid" />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
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
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
              >
                <a
                  href={enlaceWhatsApp("Hola, tengo una consulta técnica sobre productos de limpieza")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Consulta por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

/* ——————————————————————————————— Article Card ——————————————————————————————— */

function ArticleCard({ article, variant }: { article: Article; variant: "featured" | "grid" }) {
  const isFeatured = variant === "featured";
  const href = `/blog/${article.slug}`;

  return (
    <Card className="border border-primary/10 hover:border-accent/40 transition-all duration-300 group overflow-hidden bg-card h-full flex flex-col">
      {/* Color banner */}
      <div
        className={`${
          isFeatured ? "h-48" : "h-40"
        } bg-gradient-to-br from-highlight/15 via-accent/10 to-secondary/10`}
      />

      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <Badge
            variant="secondary"
            className={
              isFeatured
                ? "bg-highlight/15 text-primary border-highlight/20 font-medium"
                : "text-xs bg-accent/10 text-primary border-accent/20"
            }
          >
            {article.category}
          </Badge>
          <div
            className={`flex items-center gap-3 ${
              isFeatured ? "text-sm" : "text-xs"
            } text-foreground/60`}
          >
            <span className="flex items-center gap-1">
              <Calendar className={isFeatured ? "h-4 w-4" : "h-3 w-3"} aria-hidden="true" />
              <time dateTime={article.isoDate}>{article.date}</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className={isFeatured ? "h-4 w-4" : "h-3 w-3"} aria-hidden="true" />
              {article.readTime}
            </span>
          </div>
        </div>

        <CardTitle
          className={`${
            isFeatured ? "text-xl sm:text-2xl" : "text-lg"
          } font-heading text-foreground group-hover:text-highlight transition-colors leading-tight`}
        >
          <Link to={href} className="hover:underline underline-offset-4">
            {article.title}
          </Link>
        </CardTitle>

        <CardDescription
          className={`${
            isFeatured ? "text-sm sm:text-base" : "text-sm"
          } mt-2 text-foreground/70 leading-relaxed`}
        >
          {article.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <Button
          asChild
          className={`w-full mt-2 font-semibold transition-all duration-300 ${
            isFeatured
              ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-varosa"
              : "bg-transparent text-highlight hover:text-highlight hover:bg-highlight/10 border border-highlight/20"
          }`}
          variant={isFeatured ? "default" : "outline"}
          size={isFeatured ? "default" : "sm"}
        >
          <Link to={href} aria-label={`Leer artículo: ${article.title}`}>
            Leer Artículo
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default Blog;
