import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { 
  ArrowRight, MessageCircle, Search, Beaker, Shield, Sparkles, Building2, Package, ExternalLink, ShoppingBag
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Imágenes de productos — Químicos
import imgDesengrasante from "@/assets/products/desengrasante-diversey.webp";
import imgDesinfectante from "@/assets/products/desinfectante-diversey.webp";
import imgDetergenteLavanderia from "@/assets/products/detergente-lavanderia-diversey.webp";
import imgLimpiadorPisos from "@/assets/products/limpiador-pisos.webp";
import imgProductosLacteo from "@/assets/products/productos-lacteo-solquisa.webp";
import imgJabonSanitizante from "@/assets/products/jabon-sanitizante-diversey.webp";
// Imágenes de productos — Higiene y Papel
import imgDispToallas from "@/assets/products/dispensador-toallas-tork.webp";
import imgDispPapel from "@/assets/products/dispensador-papel-higienico-tork.webp";
import imgDispJabon from "@/assets/products/dispensador-jabon-tork.webp";
import imgPapelHigienico from "@/assets/products/papel-higienico-tork.webp";
import imgToallasPapel from "@/assets/products/toallas-papel-tork.webp";
import imgServilletas from "@/assets/products/servilletas-tork.webp";
// Imágenes de productos — Herramientas
import imgCepillosCodificados from "@/assets/products/cepillos-codificados.webp";
import imgCepillosIndustriales from "@/assets/products/cepillos-industriales.webp";
import imgEscobas from "@/assets/products/escobas-recogedores.webp";
import imgJaladores from "@/assets/products/jaladores-escurridores.webp";
import imgMopas from "@/assets/products/mopas-trapeadores.webp";
import imgFibras from "@/assets/products/fibras-esponjas-3m.webp";
// Imágenes de productos — Oficina
import imgPapeleria from "@/assets/products/papeleria-pritt.webp";
import imgTintas from "@/assets/products/impresora-epson.webp";
import imgOrganizacion from "@/assets/products/tijera-facela.webp";
import imgEscritura from "@/assets/products/articulos-escritura.webp";
import imgCalculadora from "@/assets/products/calculadora-casio.webp";
import imgBaterias from "@/assets/products/baterias-philips.webp";

const categories = [
  {
    id: "quimicos",
    name: "Productos Químicos",
    subtitle: "Limpieza, desinfección y desengrasantes",
    icon: Beaker,
    color: "primary",
    description: "Soluciones químicas especializadas para limpieza profunda, desinfección y desengrase industrial. Productos certificados para industria alimentaria, HORECA y manufactura.",
    brands: ["Diversey", "Kemical", "Solquisa"],
    products: [
      { name: "Desengrasantes Industriales", description: "Fórmulas concentradas para remoción de grasa en cocinas, plantas de proceso y equipos industriales.", brand: "Diversey / Kemical", applications: ["Cocinas industriales", "Plantas de proceso", "Equipos"], image: imgDesengrasante },
      { name: "Desinfectantes y Sanitizantes", description: "Productos virucidas y bactericidas certificados para superficies de contacto con alimentos y áreas críticas.", brand: "Diversey / Solquisa", applications: ["Superficies alimentarias", "Áreas de salud", "Sanitarios"], image: imgDesinfectante },
      { name: "Detergentes para Lavandería Industrial", description: "Detergentes, suavizantes y blanqueadores para lavandería de alto volumen en hoteles y hospitales.", brand: "Diversey", applications: ["Hoteles", "Hospitales", "Lavandería industrial"], image: imgDetergenteLavanderia },
      { name: "Limpiadores de Pisos", description: "Soluciones para todo tipo de superficies: cerámica, porcelanato, concreto, vinilo y pisos especializados.", brand: "Diversey / Kemical", applications: ["Pisos industriales", "Áreas comunes", "Comercios"], image: imgLimpiadorPisos },
      { name: "Productos para Sector Lácteo", description: "Químicos especializados para limpieza CIP, desinfección de equipos de ordeño y tanques de enfriamiento.", brand: "Kemical / Solquisa", applications: ["Lecherías", "Plantas de lácteos", "Equipos de ordeño"], image: imgProductosLacteo },
      { name: "Jabones y Sanitizantes de Manos", description: "Jabones líquidos, espuma y gel antibacterial para dispensadores automáticos y manuales.", brand: "Diversey", applications: ["Baños públicos", "Cocinas", "Áreas de proceso"], image: imgJabonSanitizante },
    ],
  },
  {
    id: "higiene",
    name: "Higiene y Papel",
    subtitle: "Dispensadores, toallas, jabón y papel higiénico",
    icon: Shield,
    color: "accent",
    description: "Sistemas completos de higiene con dispensadores TORK de Essity, líder mundial en papel profesional. Soluciones que reducen consumo y mejoran la imagen de sus instalaciones.",
    brands: ["TORK (Essity)", "Diversey"],
    products: [
      { name: "Dispensadores de Toallas de Mano", description: "Sistemas TORK Matic, Xpress y Universal. Dispensado controlado que reduce consumo hasta un 40%.", brand: "TORK", applications: ["Baños públicos", "Cocinas", "Áreas de proceso"], image: imgDispToallas },
      { name: "Dispensadores de Papel Higiénico", description: "Sistemas TORK SmartOne, Jumbo y Convencional. Diseño higiénico con dispensado hoja por hoja.", brand: "TORK", applications: ["Baños de alto tráfico", "Oficinas", "Comercios"], image: imgDispPapel },
      { name: "Dispensadores de Jabón", description: "Sistemas TORK para jabón líquido, espuma y spray. Compatible con productos Diversey.", brand: "TORK / Diversey", applications: ["Baños", "Cocinas industriales", "Áreas de salud"], image: imgDispJabon },
      { name: "Papel Higiénico Profesional", description: "Rollos jumbo, doble hoja y hojas intercaladas para todo tipo de instalación.", brand: "TORK", applications: ["Alto tráfico", "Oficinas", "HORECA"], image: imgPapelHigienico },
      { name: "Toallas de Papel", description: "Toallas de mano en rollo y dobladas. Absorción superior para secado rápido y eficiente.", brand: "TORK", applications: ["Baños", "Cocinas", "Áreas de proceso"], image: imgToallasPapel },
      { name: "Servilletas y Manteles", description: "Servilletas de papel de alta calidad para restaurantes, hoteles y servicios de catering.", brand: "TORK", applications: ["Restaurantes", "Hoteles", "Eventos"], image: imgServilletas },
    ],
  },
  {
    id: "herramientas",
    name: "Herramientas de Limpieza",
    subtitle: "Cepillos, escobas, mopas y jaladores",
    icon: Sparkles,
    color: "secondary",
    description: "Herramientas profesionales con certificación FDA de El Castor. Sistema de código de colores para prevenir contaminación cruzada. Complementadas con accesorios 3M.",
    brands: ["El Castor", "3M"],
    products: [
      { name: "Cepillos Codificados FDA", description: "Sistema de código de colores (azul, rojo, verde, amarillo, blanco) para separación de áreas y prevención de contaminación cruzada.", brand: "El Castor", applications: ["Industria alimentaria", "Plantas de proceso", "Lecherías"], image: imgCepillosCodificados },
      { name: "Cepillos Industriales Especializados", description: "Cepillos de mango largo, para tanques, bandas transportadoras y limpieza de tuberías.", brand: "El Castor", applications: ["Manufactura", "Plantas de proceso", "Equipos"], image: imgCepillosIndustriales },
      { name: "Escobas y Recogedores", description: "Escobas de cerdas duras y suaves, recogedores industriales. Materiales resistentes para uso intensivo.", brand: "El Castor", applications: ["Limpieza general", "Bodegas", "Áreas exteriores"], image: imgEscobas },
      { name: "Jaladores y Escurridores", description: "Jaladores de agua con hule natural, escurridores para áreas húmedas y pisos industriales.", brand: "El Castor", applications: ["Cocinas", "Áreas húmedas", "Plantas de proceso"], image: imgJaladores },
      { name: "Mopas y Trapeadores", description: "Sistemas de mopa húmeda y seca. Trapeadores industriales con cabezal intercambiable.", brand: "El Castor / 3M", applications: ["Pisos", "Oficinas", "Centros comerciales"], image: imgMopas },
      { name: "Fibras y Esponjas 3M", description: "Fibras abrasivas, esponjas profesionales y discos para limpieza de superficies delicadas e industriales.", brand: "3M", applications: ["Cocinas", "Superficies delicadas", "Limpieza industrial"], image: imgFibras },
    ],
  },
  {
    id: "oficina",
    name: "Suministros de Oficina",
    subtitle: "Papelería, escritura y tecnología",
    icon: Building2,
    color: "highlight",
    description: "Línea completa de artículos de oficina de marcas reconocidas. Desde papelería básica hasta suministros tecnológicos para mantener su operación funcionando.",
    brands: ["HP", "Epson", "Faber Castell", "Artline", "Facela", "Casio", "Philips"],
    products: [
      { name: "Papelería General", description: "Papel bond, folders, sobres, libretas, agendas, post-it y artículos básicos de oficina.", brand: "Varios", applications: ["Oficinas", "Recepción", "Administración"], image: imgPapeleria },
      { name: "Artículos de Escritura", description: "Bolígrafos, marcadores permanentes, resaltadores, lápices y portaminas de calidad profesional.", brand: "Faber Castell / Artline", applications: ["Oficinas", "Bodegas", "Producción"], image: imgEscritura },
      { name: "Tintas y Tóners", description: "Cartuchos de tinta y tóner originales y compatibles para impresoras HP, Epson y otras marcas.", brand: "HP / Epson", applications: ["Oficinas", "Centros de impresión"], image: imgTintas },
      { name: "Organización y Archivo", description: "Archivadores, carpetas, cajas de archivo, separadores y sistemas de organización documental.", brand: "Facela / Varios", applications: ["Oficinas", "Archivo", "Contabilidad"], image: imgOrganizacion },
      { name: "Calculadoras y Electrónica", description: "Calculadoras de escritorio y científicas, baterías alcalinas y accesorios electrónicos para oficina.", brand: "Casio / Philips", applications: ["Oficinas", "Contabilidad", "Administración"], image: imgCalculadora },
      { name: "Baterías y Pilas", description: "Pilas alcalinas AA, AAA, C, D y 9V de alta duración para equipos de oficina, controles y dispositivos.", brand: "Philips", applications: ["Oficinas", "Equipos", "Dispositivos"], image: imgBaterias },
    ],
  },
];

const bgLightMap: Record<string, string> = {
  primary: "bg-primary/8",
  secondary: "bg-secondary/8",
  accent: "bg-accent/8",
  highlight: "bg-[hsl(var(--highlight)/0.08)]",
};

const textColorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  highlight: "text-[hsl(var(--highlight))]",
};

const Productos = () => {
  const [activeCategory, setActiveCategory] = useState("quimicos");
  const [searchTerm, setSearchTerm] = useState("");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const filteredProducts = currentCategory.products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Catálogo de Productos"
        description="Más de 3,000 productos profesionales: químicos Diversey, dispensadores TORK, cepillos El Castor, fibras 3M, y suministros de oficina. Solicite cotización por WhatsApp."
        path="/productos"
        keywords="Diversey Costa Rica, TORK dispensadores, El Castor FDA, 3M fibras, Kemical, Solquisa, suministros oficina, catálogo productos limpieza"
      />
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
                Catálogo de <span className="text-accent">Productos</span>
              </h1>
              <p className="text-lg text-foreground/65 leading-relaxed">
                Más de 3,000 productos organizados por categoría de uso. Marcas líderes: Diversey, TORK, El Castor, 3M, Kemical, Solquisa y más.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-accent to-[hsl(189,82%,39%)] hover:from-[hsl(189,82%,39%)] hover:to-accent text-white font-bold shadow-lg transition-all duration-300">
                <a href="https://tiendavarosa.myshopify.com/" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Ver Catálogo Completo en Tienda Online
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Category Tabs + Products */}
        <section className="py-12 bg-[hsl(var(--primary)/0.02)]">
          <div className="container mx-auto px-6 lg:px-10">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setSearchTerm(""); }}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border-2 ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-varosa"
                        : "bg-card text-foreground/70 border-[hsl(var(--primary)/0.1)] hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Category Header */}
            <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${bgLightMap[currentCategory.color]} mb-4`}>
                <currentCategory.icon className={`h-8 w-8 ${textColorMap[currentCategory.color]}`} />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{currentCategory.name}</h2>
              <p className="text-foreground/60 leading-relaxed mb-3">{currentCategory.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {currentCategory.brands.map((brand) => (
                  <span key={brand} className="px-3 py-1 rounded-full bg-card border border-[hsl(var(--primary)/0.1)] text-xs font-semibold text-foreground/60">{brand}</span>
                ))}
              </div>
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
                <ScrollReveal key={`${currentCategory.name}-${index}`} delay={index * 80}>
                <Card className="border border-[hsl(var(--primary)/0.08)] hover:border-accent/30 hover:shadow-lg transition-all duration-300 group bg-card overflow-hidden">
                  {/* Product image or placeholder */}
                  <div className="h-44 bg-white flex items-center justify-center relative overflow-hidden rounded-t-lg">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-center">
                        <Package className={`h-10 w-10 ${textColorMap[currentCategory.color]} opacity-40 mx-auto mb-2`} />
                        <span className="text-xs text-foreground/30 font-medium">Imagen próximamente</span>
                      </div>
                    )}
                    {/* Badge de marca removido por decisión de diseño */}
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-heading font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.map((app) => (
                        <span key={app} className="px-2 py-0.5 rounded-md bg-[hsl(var(--primary)/0.04)] text-[10px] font-medium text-foreground/50">{app}</span>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-sm hover:shadow-varosa transition-all duration-300 mt-2">
                      <a href={`https://wa.me/50686703251?text=${encodeURIComponent(`Hola, me interesa cotizar: ${product.name} (${product.brand})`)}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Cotizar por WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                </ScrollReveal>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-foreground/20 mx-auto mb-4" />
                <p className="text-foreground/50 font-medium">No se encontraron productos para &quot;{searchTerm}&quot;</p>
                <button onClick={() => setSearchTerm("")} className="text-accent font-semibold text-sm mt-2 hover:underline">Limpiar búsqueda</button>
              </div>
            )}
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
                  <a href="https://tiendavarosa.myshopify.com/" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Explorar Tienda Online
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all duration-300">
                  <a href="https://wa.me/50686703251?text=Hola%2C%20me%20interesa%20recibir%20el%20cat%C3%A1logo%20completo%20de%20productos" target="_blank" rel="noopener noreferrer">
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
