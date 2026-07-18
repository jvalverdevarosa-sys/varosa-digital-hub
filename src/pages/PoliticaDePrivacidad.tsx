import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const PoliticaDePrivacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Política de Privacidad"
        description="Política de Privacidad de Comercializadora VARO S.A. (VAROSA): cómo tratamos y protegemos sus datos personales conforme a la Ley N.° 8968 de Costa Rica."
        path="/politica-de-privacidad"
        type="article"
      />
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Encabezado */}
        <section className="w-full py-16 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                  Política de Privacidad
                </h1>
                <p className="text-base md:text-lg text-foreground/70 font-body">
                  Comercializadora VARO S.A. (VAROSA)
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Última actualización: 18 de julio de 2026
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contenido */}
        <section className="w-full pb-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto font-body text-foreground/80 leading-relaxed space-y-10">
              <p className="text-base md:text-lg">
                En VAROSA respetamos su privacidad y protegemos sus datos
                personales de conformidad con la Ley N.° 8968,{" "}
                <em>
                  Ley de Protección de la Persona frente al Tratamiento de sus
                  Datos Personales
                </em>
                , de Costa Rica.
              </p>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  1. Responsable del tratamiento
                </h2>
                <p>
                  El responsable del tratamiento de sus datos personales es{" "}
                  <strong className="text-foreground">
                    Comercializadora VARO S.A.
                  </strong>{" "}
                  ("VAROSA"), con domicilio en Venecia de San Carlos, Alajuela,
                  Costa Rica.
                </p>
                <p>
                  Para cualquier asunto relacionado con sus datos personales
                  puede contactarnos en{" "}
                  <a
                    href="mailto:soporte@varosacr.com"
                    className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    soporte@varosacr.com
                  </a>{" "}
                  o al teléfono{" "}
                  <a
                    href="tel:+50640029365"
                    className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    4002-9365
                  </a>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  2. Datos que recopilamos
                </h2>
                <p>
                  A través del formulario de contacto y cotización de este sitio
                  recopilamos los datos que usted nos proporciona
                  voluntariamente:{" "}
                  <strong className="text-foreground">
                    nombre, empresa, correo electrónico, teléfono, sector de
                    actividad y el mensaje
                  </strong>{" "}
                  que decida incluir.
                </p>
                <p>
                  Adicionalmente, cuando navega en el sitio se recopilan datos
                  técnicos y de uso mediante cookies de analítica (ver la
                  sección 8).
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  3. Finalidad del tratamiento
                </h2>
                <p>Utilizamos sus datos personales para:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                  <li>Atender sus solicitudes de cotización o de información.</li>
                  <li>
                    Dar seguimiento comercial y gestionar la relación con
                    clientes y prospectos.
                  </li>
                  <li>
                    Mejorar nuestros productos, servicios y este sitio web.
                  </li>
                </ul>
                <p>
                  No utilizamos sus datos para finalidades distintas a las aquí
                  indicadas sin su consentimiento.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  4. Consentimiento
                </h2>
                <p>
                  Al enviar el formulario, usted otorga su consentimiento
                  informado para el tratamiento de sus datos con las finalidades
                  descritas en esta política. El suministro de los datos es
                  voluntario; sin embargo, si no proporciona los datos
                  solicitados es posible que no podamos atender su solicitud.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  5. Proveedores y terceros
                </h2>
                <p>
                  Para operar el sitio y gestionar la información utilizamos
                  proveedores que actúan como encargados del tratamiento por
                  cuenta de VAROSA:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                  <li>
                    <strong className="text-foreground">
                      Zoho Corporation
                    </strong>{" "}
                    — formularios y gestión de la relación con clientes (CRM).
                  </li>
                  <li>
                    <strong className="text-foreground">Google</strong> — Google
                    Analytics y Google Tag Manager, para la medición de uso del
                    sitio.
                  </li>
                </ul>
                <p>
                  Estos proveedores pueden procesar datos en servidores ubicados
                  fuera de Costa Rica, bajo sus propias medidas de seguridad y
                  condiciones contractuales.{" "}
                  <strong className="text-foreground">
                    No vendemos ni cedemos sus datos personales
                  </strong>{" "}
                  a terceros para los fines comerciales propios de dichos
                  terceros.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  6. Conservación de los datos
                </h2>
                <p>
                  Conservamos sus datos durante el tiempo necesario para cumplir
                  las finalidades descritas y mientras dure la relación
                  comercial, así como durante los plazos que exijan las
                  obligaciones legales aplicables. Cumplidos esos plazos, los
                  datos se eliminan o se anonimizan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  7. Sus derechos (ARCO)
                </h2>
                <p>
                  De conformidad con la Ley N.° 8968, usted tiene derecho a{" "}
                  <strong className="text-foreground">
                    acceder, rectificar, cancelar y oponerse
                  </strong>{" "}
                  (derechos ARCO) al tratamiento de sus datos personales.
                </p>
                <p>
                  Para ejercer estos derechos, escríbanos a{" "}
                  <a
                    href="mailto:soporte@varosacr.com"
                    className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    soporte@varosacr.com
                  </a>{" "}
                  indicando su solicitud. La atenderemos dentro de los plazos que
                  establece la ley (cinco días hábiles).
                </p>
                <p>
                  Si considera que sus derechos no fueron atendidos, puede acudir
                  a la{" "}
                  <strong className="text-foreground">
                    Agencia de Protección de Datos de los Habitantes (PRODHAB)
                  </strong>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  8. Cookies
                </h2>
                <p>
                  Este sitio utiliza cookies propias y de terceros con fines de{" "}
                  <strong className="text-foreground">analítica</strong> (Google
                  Analytics y Google Tag Manager), que nos permiten entender cómo
                  se usa el sitio para mejorarlo. Por sí solas, estas cookies no
                  lo identifican personalmente.
                </p>
                <p>
                  Usted puede configurar su navegador para bloquear o eliminar
                  las cookies; tenga en cuenta que algunas funciones del sitio
                  podrían verse afectadas. Al continuar navegando, usted acepta
                  el uso de cookies conforme a esta política.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  9. Seguridad
                </h2>
                <p>
                  Aplicamos medidas técnicas y organizativas razonables para
                  proteger sus datos personales frente a acceso no autorizado,
                  pérdida, alteración o divulgación indebida, de conformidad con
                  el artículo 10 de la Ley N.° 8968.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  10. Tienda en línea
                </h2>
                <p>
                  Nuestra tienda en línea (tienda.varosacr.com) opera en una
                  plataforma separada (Zoho Commerce) y puede contar con
                  condiciones propias para el tratamiento de datos.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  11. Cambios a esta política
                </h2>
                <p>
                  Podemos actualizar esta política cuando sea necesario.
                  Publicaremos la versión vigente en esta misma página, indicando
                  la fecha de última actualización.
                </p>
              </div>

              <p className="text-sm text-muted-foreground border-t border-border pt-8">
                Para consultas sobre esta política o sobre el tratamiento de sus
                datos personales:{" "}
                <a
                  href="mailto:soporte@varosacr.com"
                  className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                >
                  soporte@varosacr.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidad;
