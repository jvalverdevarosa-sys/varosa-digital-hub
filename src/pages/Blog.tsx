import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Guía Completa de Seguridad Alimentaria 2024",
      category: "Industria Alimentaria",
      excerpt: "Todo lo que necesita saber sobre las nuevas regulaciones de seguridad alimentaria y cómo implementarlas en su operación.",
      date: "15 Ene 2024",
      readTime: "8 min",
      featured: true
    },
    {
      title: "Sistema de Código de Colores en Limpieza",
      category: "Mejores Prácticas",
      excerpt: "Cómo implementar un sistema efectivo de código de colores para prevenir contaminación cruzada.",
      date: "10 Ene 2024",
      readTime: "5 min",
      featured: true
    },
    {
      title: "Optimización de Costos en Limpieza Hospitalaria",
      category: "Sector Salud",
      excerpt: "Estrategias probadas para reducir costos sin comprometer la calidad de la limpieza en entornos de salud.",
      date: "5 Ene 2024",
      readTime: "7 min",
      featured: false
    },
    {
      title: "Tendencias en Sostenibilidad para HORECA",
      category: "HORECA",
      excerpt: "Productos y prácticas eco-amigables que están transformando la industria de hospitalidad.",
      date: "28 Dic 2023",
      readTime: "6 min",
      featured: false
    },
    {
      title: "Protocolos de Desinfección Post-Pandemia",
      category: "Desinfección",
      excerpt: "Los nuevos estándares de desinfección que llegaron para quedarse y cómo cumplir con ellos.",
      date: "20 Dic 2023",
      readTime: "9 min",
      featured: false
    },
    {
      title: "Maximizando la Eficiencia en Cocinas Industriales",
      category: "Industria Alimentaria",
      excerpt: "Técnicas y productos para mantener cocinas comerciales limpias y operativas.",
      date: "15 Dic 2023",
      readTime: "7 min",
      featured: false
    }
  ];

  const categories = [
    "Todos",
    "Industria Alimentaria",
    "HORECA",
    "Sector Salud",
    "Mejores Prácticas",
    "Sostenibilidad",
    "Desinfección"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Blog y <span className="text-accent">Recursos</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Conocimiento técnico, mejores prácticas y las últimas tendencias 
                en limpieza e higiene profesional
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
                  className={index === 0 
                    ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-accent" 
                    : "border-primary/20 text-foreground hover:border-highlight hover:text-highlight hover:bg-highlight/5"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Artículos Destacados</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {articles.filter(article => article.featured).map((article, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group overflow-hidden bg-card">
                  <div className="h-48 bg-gradient-to-br from-highlight/15 via-accent/10 to-secondary/10" />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-highlight/15 text-highlight border-highlight/20 font-medium">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-sm text-foreground/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-heading text-foreground group-hover:text-highlight transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-foreground/70">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-varosa transition-all duration-300">
                      Leer Artículo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Articles */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Todos los Artículos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="border border-primary/10 hover:border-accent hover:shadow-accent transition-all duration-300 group bg-card">
                  <div className="h-40 bg-gradient-to-br from-accent/10 via-highlight/8 to-primary/5" />
                  <CardHeader className="pb-3">
                    <Badge variant="secondary" className="w-fit mb-2 text-xs bg-accent/10 text-accent border-accent/20">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg font-heading text-foreground group-hover:text-highlight transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-foreground/70">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full text-highlight hover:text-highlight hover:bg-highlight/10 font-medium">
                      Leer más
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">Suscríbase a Nuestro Newsletter</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Reciba contenido exclusivo, guías técnicas y las últimas novedades 
                de la industria directamente en su correo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                <label htmlFor="newsletter-email" className="sr-only">Correo electrónico para suscripción</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Su correo electrónico"
                  autoComplete="email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground border border-primary/20 focus:outline-none focus:ring-2 focus:ring-highlight"
                />
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold shadow-varosa hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)] transition-all duration-300">
                  Suscribirse
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
