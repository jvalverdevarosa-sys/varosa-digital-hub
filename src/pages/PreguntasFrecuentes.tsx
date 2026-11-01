import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { enlaceWhatsApp } from "@/lib/whatsapp";

// Preguntas frecuentes de compra. Todas las respuestas son datos confirmados por
// Gerencia (Jeank, 31 oct 2026) o ya publicados en el sitio. Si una condición
// comercial cambia, actualizarla aquí: el mismo texto alimenta la página y el
// FAQPage de Schema.org, que es lo que leen buscadores y asistentes de IA.
interface Pregunta {
  pregunta: string;
  respuesta: string;
}

const secciones: { titulo: string; preguntas: Pregunta[] }[] = [
  {
    titulo: "Sobre VAROSA",
    preguntas: [
      {
        pregunta: "¿Qué es VAROSA y a quién le vende?",
        respuesta:
          "VAROSA (Comercializadora VARO S.A.) es una empresa costarricense fundada en 2007, con sede en Venecia de San Carlos, Alajuela. Distribuimos productos de limpieza, higiene, sanitización y suministros de oficina para empresas: industria alimentaria, hoteles y restaurantes (HORECA), turismo, lecherías, manufactura, oficinas e instituciones.",
      },
      {
        pregunta: "¿Qué marcas distribuyen?",
        respuesta:
          "Diversey, TORK (Essity), 3M, Kemical, Solquisa y El Castor en limpieza e higiene, además de HP, Epson, Faber-Castell, Artline y Facela en suministros de oficina.",
      },
      {
        pregunta: "¿A qué zonas de Costa Rica entregan?",
        respuesta:
          "Entregamos con flota propia en la Zona Norte, el Caribe, Guanacaste y la Gran Área Metropolitana (GAM).",
      },
    ],
  },
  {
    titulo: "Cotizaciones y pedidos",
    preguntas: [
      {
        pregunta: "¿Cómo solicito una cotización?",
        respuesta:
          "Escríbanos por WhatsApp al +506 8501-2040, llámenos al 4002-9365 o complete el formulario de la página de Contacto. Los precios no se publican en este sitio porque dependen de los productos, las cantidades y la presentación; le enviamos la cotización directamente.",
      },
      {
        pregunta: "¿Hay una compra mínima?",
        respuesta: "Sí. La compra mínima es de ₡50.000.",
      },
      {
        pregunta: "¿Cuánto tarda la entrega?",
        respuesta:
          "Depende de la ruta. Tenemos un calendario establecido de entregas para cada ruta o zona; al hacer su pedido le confirmamos el día de entrega que corresponde a su ubicación.",
      },
      {
        pregunta: "¿Puedo comprar en línea?",
        respuesta:
          "Sí, en nuestra tienda en línea tienda.varosacr.com. También puede hacer su pedido por WhatsApp o con su asesor de ventas.",
      },
    ],
  },
  {
    titulo: "Pagos y crédito",
    preguntas: [
      {
        pregunta: "¿Qué formas de pago aceptan?",
        respuesta: "Aceptamos SINPE, transferencia bancaria y efectivo.",
      },
      {
        pregunta: "¿Cómo solicito crédito?",
        respuesta:
          "El crédito se solicita mediante un formulario que le entrega su asesor de ventas una vez que se inicia la relación comercial con VAROSA.",
      },
    ],
  },
  {
    titulo: "Servicio técnico",
    preguntas: [
      {
        pregunta: "¿Las visitas técnicas tienen costo?",
        respuesta:
          "No. Las visitas técnicas no tienen costo, incluidas las visitas de diagnóstico y las auditorías ATP para verificar la eficacia de la limpieza.",
      },
      {
        pregunta: "¿Qué servicios técnicos ofrecen?",
        respuesta:
          "Instalación de sistemas de dosificación y dispensadores, auditorías de limpieza por bioluminiscencia (ATP), capacitación del personal y acompañamiento para auditorías de inocuidad.",
      },
      {
        pregunta: "¿Entregan fichas técnicas y hojas de seguridad?",
        respuesta:
          "Sí. Entregamos la documentación técnica de los productos que distribuimos, incluidas las fichas técnicas y las hojas de seguridad.",
      },
    ],
  },
];

const PreguntasFrecuentes = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: secciones.flatMap((s) =>
      s.preguntas.map((p) => ({
        "@type": "Question",
        name: p.pregunta,
        acceptedAnswer: { "@type": "Answer", text: p.respuesta },
      }))
    ),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Preguntas Frecuentes"
        description="Cómo cotizar y comprar en VAROSA: zonas de entrega, compra mínima, formas de pago, crédito y servicio técnico sin costo. Distribuidor B2B de limpieza e higiene en Costa Rica."
        path="/preguntas-frecuentes"
      />
      <BreadcrumbSchema name="Preguntas Frecuentes" path="/preguntas-frecuentes" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navigation />

      <main id="main-content" className="flex-1">
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                Preguntas <span className="text-secondary">Frecuentes</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Todo lo que necesita saber para cotizar y comprar con VAROSA
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto space-y-12">
              {secciones.map((s) => (
                <div key={s.titulo}>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                    {s.titulo}
                  </h2>
                  <dl className="space-y-4">
                    {s.preguntas.map((p) => (
                      <div key={p.pregunta} className="rounded-xl border border-primary/10 bg-card p-5 sm:p-6">
                        <dt className="font-heading font-semibold text-lg text-foreground">{p.pregunta}</dt>
                        <dd className="mt-2 text-foreground/80 leading-relaxed">{p.respuesta}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                ¿No encontró su respuesta?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Escríbanos por WhatsApp y le respondemos a la brevedad.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
              >
                <a
                  href={enlaceWhatsApp("Hola, tengo una consulta sobre cómo comprar en VAROSA")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Consultar por WhatsApp
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

export default PreguntasFrecuentes;
