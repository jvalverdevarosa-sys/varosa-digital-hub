import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, MessageCircle } from "lucide-react";
import { enlaceWhatsApp } from "@/lib/whatsapp";

const Gracias = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* noindex: es la página de confirmación tras enviar el formulario, no debe
          indexarse ni figurar en el sitemap. */}
      <SEO
        title="Gracias por contactarnos"
        description="Hemos recibido su mensaje. Nuestro equipo de VAROSA le responderá pronto."
        path="/gracias"
        noindex
      />
      <Navigation />

      <main id="main-content" className="flex-1 flex items-center">
        <section className="w-full py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-11 w-11 text-accent" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                    ¡Gracias por contactarnos!
                  </h1>
                  <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed">
                    Nuestro equipo le responderá pronto.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300"
                  >
                    <Link to="/">
                      <Home className="h-5 w-5" aria-hidden="true" />
                      Volver al inicio
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-all duration-300"
                  >
                    <a
                      href={enlaceWhatsApp("Hola, acabo de enviar el formulario en el sitio web")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      Escríbanos por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gracias;
