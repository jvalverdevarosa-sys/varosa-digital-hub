import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { enlaceWhatsApp } from "@/lib/whatsapp";
import { articles, getArticle } from "@/data/blog";
import NotFound from "./NotFound";

const BASE_URL = "https://varosacr.com";

const absolutizar = (src: string) => (src.startsWith("http") ? src : `${BASE_URL}${src}`);

// Página individual de cada artículo del blog (/blog/:slug). Existe para que
// cada artículo tenga una URL propia que buscadores y asistentes de IA puedan
// indexar, citar y enlazar. El contenido sale de src/data/blog.ts.
const BlogArticulo = () => {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <NotFound />;

  const path = `/blog/${article.slug}`;
  const url = `${BASE_URL}${path}`;
  const imagenes = article.content
    .filter(
      (b): b is { type: "image"; src: string; alt: string; width?: number; height?: number } =>
        typeof b === "object" && b.type === "image"
    )
    .map((b) => absolutizar(b.src));

  // Schema.org: datos tomados tal cual del artículo; autor y editor = VAROSA
  // (mismo @id que SchemaOrg.tsx). No se inventan valores.
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.isoDate,
    inLanguage: "es",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.category,
    ...(imagenes.length > 0 ? { image: imagenes } : {}),
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Comercializadora VARO S.A.",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Comercializadora VARO S.A.",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
    },
    isPartOf: { "@id": `${BASE_URL}/blog#blog` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  // Otros artículos: primero los de la misma categoría, luego los más recientes.
  const relacionados = [
    ...articles.filter((a) => a.slug !== article.slug && a.category === article.category),
    ...articles.filter((a) => a.slug !== article.slug && a.category !== article.category),
  ].slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={article.title}
        description={article.excerpt.length > 160 ? `${article.excerpt.slice(0, 157).trimEnd()}…` : article.excerpt}
        path={path}
        type="article"
      />
      <Helmet>
        <meta property="article:published_time" content={article.isoDate} />
        <meta property="article:section" content={article.category} />
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Navigation />

      <main id="main-content" className="flex-1">
        <article className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
              {/* Migas de pan visibles */}
              <nav aria-label="Ruta de navegación" className="text-sm text-foreground/60 mb-8">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-highlight">Inicio</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link to="/blog" className="hover:text-highlight">Blog</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-foreground/80 line-clamp-1">{article.category}</li>
                </ol>
              </nav>

              <header className="space-y-5 mb-10">
                <Badge variant="secondary" className="bg-highlight/15 text-primary border-highlight/20 font-medium">
                  {article.category}
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                  {article.title}
                </h1>
                <p className="text-lg text-foreground/75 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-foreground/60 flex-wrap">
                  <span>Por VAROSA — Comercializadora VARO S.A.</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={article.isoDate}>{article.date}</time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {article.readTime} de lectura
                  </span>
                </div>
              </header>

              <div className="space-y-5 border-t border-primary/10 pt-8">
                {article.content.map((block, i) => {
                  if (typeof block === "string") {
                    return (
                      <p key={i} className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                        {block}
                      </p>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className="text-xl sm:text-2xl font-heading font-semibold text-foreground pt-4 leading-tight"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <img
                      key={i}
                      src={block.src}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      loading="lazy"
                      className="block mx-auto my-4 rounded-lg border border-primary/10 max-h-[520px] w-auto max-w-full"
                    />
                  );
                })}
              </div>

              {/* CTA del artículo */}
              <div className="mt-12 p-6 sm:p-8 rounded-xl border border-accent/20 bg-card space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                  ¿Preguntas sobre este tema?
                </h2>
                <p className="text-foreground/75 leading-relaxed">
                  Nuestro equipo le orienta sin compromiso. Atendemos Zona Norte, Caribe,
                  Guanacaste y GAM.
                </p>
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold shadow-lg transition-all duration-300"
                >
                  <a
                    href={enlaceWhatsApp(`Hola, leí el artículo "${article.title}" y me gustaría más información`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                    Escríbanos por WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-10">
                <Link to="/blog" className="inline-flex items-center text-highlight font-semibold hover:underline underline-offset-4">
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Volver al blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Artículos relacionados */}
        {relacionados.length > 0 && (
          <section className="py-16 bg-background border-t border-primary/10">
            <div className="container mx-auto px-6 lg:px-10">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
                  Otros artículos
                </h2>
                <ul className="grid md:grid-cols-3 gap-6">
                  {relacionados.map((a) => (
                    <li key={a.slug} className="rounded-xl border border-primary/10 bg-card p-5 hover:border-accent/40 transition-colors">
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-primary border-accent/20 mb-3">
                        {a.category}
                      </Badge>
                      <Link
                        to={`/blog/${a.slug}`}
                        className="block font-heading font-semibold text-foreground hover:text-highlight leading-snug"
                      >
                        {a.title}
                      </Link>
                      <Link
                        to={`/blog/${a.slug}`}
                        className="mt-3 inline-flex items-center text-sm text-highlight font-semibold"
                        aria-label={`Leer artículo: ${a.title}`}
                      >
                        Leer <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticulo;
