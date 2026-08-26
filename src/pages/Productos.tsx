import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle, Search, Package, ExternalLink, ShoppingBag, Star
} from "lucide-react";
import { Input } from "@/components/ui/input";
import destacados from "@/data/destacados.json";
import { enlaceWhatsApp } from "@/lib/whatsapp";

// Catálogo generado en build-time desde la colección "Destacados" de Zoho Commerce
// (scripts/generar-catalogo.mjs → src/data/destacados.json). Regla de negocio:
// SIN precios; la cotización es siempre por WhatsApp.
type Producto = {
  id: string;
  name: string;
  brand: string | null;
  tags: string[];
  description: string | null; // HTML ya saneado en el build
  image: string | null;
  storeUrl: string | null;
};

const productos = destacados as unknown as Producto[];

const TIENDA_URL = "https://tienda.varosacr.com";

// Texto plano de la descripción (para el buscador) — quita etiquetas HTML.
const soloTexto = (html: string | null) =>
  (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const mensajeWhatsApp = (p: Producto) => {
  const detalle = p.brand ? `${p.name} (${p.brand})` : p.name;
  return enlaceWhatsApp(`Hola, me interesa cotizar: ${detalle}`, "productos");
};

function ProductCard({ product }: { product: Producto }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <Card className="border border-[hsl(var(--primary)/0.08)] hover:border-accent/30 hover:shadow-lg transition-all duration-300 group bg-card overflow-hidden flex flex-col">
      {/* Imagen del producto (fondo blanco; en dark, tratamiento cálido) */}
      <div className="h-44 bg-white dark:bg-[#e8e4d8] flex items-center justify-center relative overflow-hidden rounded-t-lg shrink-0">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            width={400}
            height={176}
            className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 dark:brightness-[0.88]"
            loading="lazy"
          />
        ) : (
          <div className="text-center" role="img" aria-label={`${product.name} — imagen próximamente`}>
            <Package className="h-10 w-10 text-primary opacity-40 mx-auto mb-2" aria-hidden="true" />
            <span className="text-xs text-foreground/50 font-medium">Imagen próximamente</span>
          </div>
        )}
      </div>

      <CardContent className="p-5 space-y-3 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Marca: se oculta si viene vacía (aún no enriquecida en el admin) */}
        {product.brand && (
          <p className="text-xs font-semibold text-secondary uppercase tracking-wide">{product.brand}</p>
        )}

        {/* Descripción HTML saneada. Se oculta por completo si viene vacía. */}
        {product.description && (
          <div>
            <div
              className={`text-sm text-foreground/90 leading-relaxed space-y-1.5 [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-foreground [&_b]:font-semibold [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-0.5 [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:space-y-0.5 ${expandido ? "" : "line-clamp-4"}`}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <button
              type="button"
              onClick={() => setExpandido((v) => !v)}
              className="text-secondary dark:text-accent font-semibold text-xs mt-0.5 -mx-1 px-1 min-h-[44px] inline-flex items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-expanded={expandido}
            >
              {expandido ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}

        {/* Aplicaciones (tags): chips. Se ocultan si no hay. */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-[hsl(var(--primary)/0.04)] text-[10px] font-medium text-foreground/50">{tag}</span>
            ))}
          </div>
        )}

        {/* Empuja el CTA al fondo para alinear tarjetas de distinto alto */}
        <div className="flex-1" />

        <Button asChild className="w-full min-h-11 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-sm hover:shadow-varosa transition-all duration-300">
          <a href={mensajeWhatsApp(product)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            Cotizar por WhatsApp
          </a>
        </Button>

        {product.storeUrl && (
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs font-medium text-secondary dark:text-accent hover:underline transition-colors inline-flex items-center justify-center gap-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Ver en tienda <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return productos;
    return productos.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      (p.brand || "").toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      soloTexto(p.description).toLowerCase().includes(q)
    );
  }, [searchTerm]);

  // GEO: JSON-LD ItemList. Regla de negocio: SIN offers, precios ni disponibilidad.
  const origin = typeof window !== "undefined" ? window.location.origin : "https://varosacr.com";
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Productos destacados VAROSA",
    itemListElement: productos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        ...(p.description ? { description: soloTexto(p.description) } : {}),
        ...(p.brand ? { brand: { "@type": "Brand", name: p.brand } } : {}),
        ...(p.image ? { image: p.image.startsWith("http") ? p.image : `${origin}${p.image}` } : {}),
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Catálogo de Productos"
        description="Catálogo de limpieza, higiene y sanitización profesional: químicos Diversey, sistemas TORK, herramientas y más. Cotice por WhatsApp con VAROSA en Costa Rica."
        path="/productos"
        keywords="Diversey Costa Rica, TORK dispensadores, El Castor FDA, 3M fibras, Kemical, Solquisa, suministros oficina, catálogo productos limpieza"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(productListSchema)}</script>
      </Helmet>
      <BreadcrumbSchema name="Productos" path="/productos" />
      <Navigation />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.04)] via-transparent to-[hsl(var(--primary)/0.03)]" />
          <div className="absolute top-[20%] right-[8%] w-[200px] h-[3px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-25 rounded-full" />
          <div className="absolute top-[30%] right-[5%] w-[130px] h-[3px] bg-[hsl(var(--highlight))] transform -rotate-[55deg] opacity-15 rounded-full" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-primary">
                Productos <span className="text-secondary">Destacados</span>
              </h1>
              <p className="text-lg text-foreground/65 leading-relaxed">
                Una selección de nuestras líneas líderes: Diversey, TORK, El Castor, 3M, Kemical, Solquisa y más. Manejamos más de 3,000 productos — solicite el catálogo completo por WhatsApp.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-accent to-[hsl(189,82%,39%)] hover:from-[hsl(189,82%,39%)] hover:to-accent text-white font-bold shadow-lg transition-all duration-300 whitespace-normal h-auto min-h-11 py-3">
                <a href={TIENDA_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Ver Catálogo Completo en Tienda Online
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 bg-[hsl(var(--primary)/0.02)]">
          <div className="container mx-auto px-6 lg:px-10">
            {/* Section header */}
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(var(--highlight)/0.1)] mb-4">
                  <Star className="h-8 w-8 text-[hsl(var(--highlight))]" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Nuestra vitrina</h2>
                <p className="text-foreground/60 leading-relaxed">
                  Productos destacados de nuestro catálogo. ¿Busca algo específico? Escríbanos y le cotizamos por WhatsApp.
                </p>
              </div>
            </ScrollReveal>

            {/* Search */}
            <div className="max-w-md mx-auto mb-10">
              <div className="relative">
                <label htmlFor="product-search" className="sr-only">Buscar producto, marca o aplicación</label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" aria-hidden="true" />
                <Input
                  id="product-search"
                  placeholder="Buscar producto, marca o aplicación..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-[hsl(var(--primary)/0.12)] focus:border-accent rounded-xl h-11"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredProducts.map((product, index) => (
                <ScrollReveal key={product.id} delay={Math.min(index, 5) * 80}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            {productos.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-foreground/20 mx-auto mb-4" />
                <p className="text-foreground/50 font-medium">Estamos actualizando nuestra vitrina. Escríbanos por WhatsApp y con gusto le cotizamos.</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-foreground/20 mx-auto mb-4" />
                <p className="text-foreground/50 font-medium">No se encontraron productos para &quot;{searchTerm}&quot;</p>
                <button onClick={() => setSearchTerm("")} className="text-secondary font-semibold text-sm mt-2 hover:underline">Limpiar búsqueda</button>
              </div>
            ) : null}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">¿No encontró lo que busca?</h2>
              <p className="text-lg text-white/80 leading-relaxed">Manejamos más de 3,000 productos. Solicite nuestro catálogo completo o contáctenos para encontrar la solución exacta para su operación.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg transition-all duration-300">
                  <a href={TIENDA_URL} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Explorar Tienda Online
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all duration-300">
                  <a href={enlaceWhatsApp("Hola, me interesa recibir el catálogo completo de productos", "productos-catalogo")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />WhatsApp Directo
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

export default Productos;
