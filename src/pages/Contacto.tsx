import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contacto"
        description="Solicite cotización o agende una visita técnica. Teléfono: 4002-9365, WhatsApp: +506 8670-3251. Cobertura en Zona Norte, Caribe, Guanacaste y GAM."
        path="/contacto"
        keywords="contacto VAROSA, cotización productos limpieza, teléfono VAROSA, WhatsApp VAROSA Costa Rica"
      />
      <Navigation />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                <span className="text-accent">Contáctenos</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Solicite cotización o agende una visita técnica. Cobertura: Zona Norte, Caribe, Guanacaste y GAM.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ScrollReveal direction="left">
                <Card className="border border-primary/10 shadow-varosa bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-foreground">Solicitar Cotización</CardTitle>
                    <CardDescription className="text-foreground/70">
                      Complete el formulario y nuestro equipo se pondrá en contacto a la brevedad
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <iframe 
                      title="Formulario de cotización VAROSA"
                      aria-label="Formulario de cotización VAROSA" 
                      frameBorder="0" 
                      allow="geolocation;" 
                      className="w-full border-0 min-h-[400px] sm:min-h-[500px]"
                      src='https://forms.zohopublic.com/varosa1/form/FORMULARIOPGINAWEB/formperma/NwGu-0qmpwBNPJvOjXGJdaQsVOluFrz5_E81zWbbeX0'
                    />
                  </CardContent>
                </Card>
                </ScrollReveal>
              </div>

              {/* Contact Info */}
              <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                <Card className="border-2 border-accent shadow-accent bg-card">
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-highlight" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                          <p className="text-sm text-foreground/70">
                            Venecia de San Carlos, Alajuela<br />
                            Costa Rica
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                          <a href="tel:+50640029365" className="text-sm text-highlight hover:underline">
                            4002-9365
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a href="mailto:info@varosacr.com" className="text-sm text-highlight hover:underline">
                            info@varosacr.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                          <Clock className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                          <p className="text-sm text-foreground/70">
                            Lunes a Viernes<br />
                            8:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-primary/10 bg-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-foreground">¿Necesita Atención Rápida?</CardTitle>
                    <CardDescription className="text-foreground/70">
                      Escríbanos por WhatsApp para cotizaciones, consultas o agendar una visita técnica.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-all duration-300">
                      <a href="https://wa.me/50686703251" target="_blank" rel="noopener noreferrer">WhatsApp: +506 8670-3251</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-300">
                      <a href="tel:+50640029365">Llamar: 4002-9365</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-background border-t border-primary/8">
          <div className="container mx-auto px-6 lg:px-10">
            <ScrollReveal>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-foreground">Nuestra Ubicación</h2>
              <p className="text-sm text-foreground/60 mt-2">Venecia de San Carlos, Alajuela, Costa Rica</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-varosa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-84.29388441767271!3d10.350939902357094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIxJzAzLjQiTiA4NMKwMTcnMzguMCJX!5e0!3m2!1ses!2scr!4v1707000000000!5m2!1ses!2scr"
                width="100%"
                className="h-[300px] sm:h-[400px] lg:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación VAROSA - Venecia de San Carlos"
              />
            </div>
            <p className="text-xs text-foreground/40 mt-3 text-center">
              📍 Si necesita indicaciones exactas, contáctenos al 4002-9365 o por WhatsApp al +506 8670-3251
            </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
