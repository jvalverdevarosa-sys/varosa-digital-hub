import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, CheckCircle2, MapPin, Truck, Wrench, ArrowRight } from "lucide-react";
import { enlaceWhatsApp } from "@/lib/whatsapp";
import { getMarca } from "@/data/marcas";
import { getArticle } from "@/data/blog";
import NotFound from "./NotFound";

const BASE_URL = "https://varosacr.com";

// Página "Distribuidor <Marca> en Costa Rica" (/marcas/:slug). Existe para que
// buscadores y asistentes de IA tengan una página concreta que citar cuando
// alguien pregunta por un distribuidor de la marca en Costa Rica, en vez de
// mandar al inicio. El contenido sale de src/data/marcas.ts.
const MarcaDistribuidor = () => {
  const { slug } = useParams();
  const marca = getMarca(slug);

  if (!marca) return <NotFound />;

  const path = `/marcas/${marca.slug}`;
  const url = `${BASE_URL}${path}`;
  const nombreCompleto = marca.fabricante ? `${marca.nombre} (${marca.fabricante})` : marca.nombre;
  const articulos = marca.articulos.map((s) => getArticle(s)).filter((a) => a !== undefined);

  // Schema.org: página sobre la marca, publicada por VAROSA (mismo @id que
  // SchemaOrg.tsx) + FAQPage con las mismas preguntas que se ven en pantalla.
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: `${marca.seoTitle} | VAROSA`,
    description: marca.seoDescription,
    inLanguage: "es",
    about: {
      "@type": "Brand",
      name: marca.nombre,
      ...(marca.fabricante ? { manufacturer: { "@type": "Organization", name: marca.fabricante } } : {}),
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: marca.preguntas.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: { "@type": "Answer", text: p.respuesta },
    })),
  };

  const ctaWhatsApp = (
    <Button
      asChild
      size="lg"
      className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
    >
      <a href={enlaceWhatsApp(marca.mensajeWhatsApp)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
        Cotizar {marca.nombre} por WhatsApp
      </a>
    </Button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={marca.seoTitle} description={marca.seoDescription} path={path} keywords={marca.keywords} />
      <BreadcrumbSchema name={marca.seoTitle} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Encabezado */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center rounded-xl bg-card dark:bg-white/10 px-6 py-4 shadow-sm border border-primary/10">
                <img src={marca.logo} alt={`Logo de ${marca.nombre}`} className="h-10 sm:h-12 w-auto object-contain" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                Distribuidor <span className="text-secondary">{marca.nombre}</span> en Costa Rica
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">{marca.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                {ctaWhatsApp}
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <a href={marca.enlaceTienda} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" aria-hidden="true" />
                    Ver en la tienda en línea
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Datos clave */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, titulo: "Desde 2007", detalle: "Empresa costarricense con sede en Venecia de San Carlos, Alajuela." },
                { icon: Truck, titulo: "Flota propia", detalle: "Zona Norte, Caribe, Guanacaste y GAM." },
                { icon: Wrench, titulo: "Visitas técnicas sin costo", detalle: "Diagnóstico, instalación, auditorías ATP y capacitación." },
              ].map((d) => (
                <div key={d.titulo} className="rounded-xl border border-primary/10 bg-card p-5 flex gap-3">
                  <d.icon className="h-6 w-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">{d.titulo}</p>
                    <p className="text-sm text-foreground/75 mt-1">{d.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Líneas de producto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
                Productos {nombreCompleto} que distribuimos
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {marca.lineas.map((l) => (
                  <div key={l.titulo} className="rounded-xl border border-primary/10 bg-card p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground">{l.titulo}</h3>
                    <p className="mt-2 text-foreground/80 leading-relaxed">{l.detalle}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-foreground/70">
                No publicamos precios: dependen de los productos, las cantidades y la presentación. Le enviamos la cotización por WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Servicio técnico + sectores */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                  Más que el producto: servicio técnico
                </h2>
                <ul className="space-y-3">
                  {marca.servicios.map((s) => (
                    <li key={s} className="flex gap-3 text-foreground/85 leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/servicios-tecnicos" className="inline-flex items-center gap-1.5 mt-6 font-semibold text-secondary hover:underline underline-offset-4">
                  Ver servicios técnicos <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                  Sectores que atendemos con {marca.nombre}
                </h2>
                <dl className="space-y-4">
                  {marca.sectores.map((s) => (
                    <div key={s.nombre} className="rounded-xl border border-primary/10 bg-card p-5">
                      <dt className="font-heading font-semibold text-foreground">{s.nombre}</dt>
                      <dd className="mt-1 text-foreground/80 leading-relaxed">{s.detalle}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/soluciones" className="inline-flex items-center gap-1.5 mt-6 font-semibold text-secondary hover:underline underline-offset-4">
                  Ver soluciones por industria <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes de la marca */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                Preguntas frecuentes sobre {marca.nombre}
              </h2>
              <dl className="space-y-4">
                {marca.preguntas.map((p) => (
                  <div key={p.pregunta} className="rounded-xl border border-primary/10 bg-card p-5 sm:p-6">
                    <dt className="font-heading font-semibold text-lg text-foreground">{p.pregunta}</dt>
                    <dd className="mt-2 text-foreground/80 leading-relaxed">{p.respuesta}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/preguntas-frecuentes" className="inline-flex items-center gap-1.5 mt-6 font-semibold text-secondary hover:underline underline-offset-4">
                Más preguntas sobre cómo comprar <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Artículos relacionados */}
        {articulos.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6 lg:px-10">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                  Guías sobre {marca.nombre}
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {articulos.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/blog/${a.slug}`}
                      className="group rounded-xl border border-primary/10 bg-card p-5 hover:border-accent/50 transition-colors"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">{a.category}</p>
                      <p className="mt-2 font-heading font-semibold text-foreground group-hover:underline underline-offset-4">{a.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                Cotice {marca.nombre} con VAROSA
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Escríbanos por WhatsApp al +506 8501-2040 o llámenos al 4002-9365. Compra mínima de ₡50.000.
              </p>
              {ctaWhatsApp}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarcaDistribuidor;
