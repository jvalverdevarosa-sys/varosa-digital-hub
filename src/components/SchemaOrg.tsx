import { Helmet } from "react-helmet-async";

/**
 * Datos estructurados Schema.org para VAROSA
 * Esto le dice a Google (y a IAs) exactamente qué es VAROSA:
 * - Tipo de empresa (distribuidora B2B)
 * - Ubicación, teléfono, horario
 * - Área de cobertura
 * - Productos y servicios
 */
const SchemaOrg = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://varosacr.com/#organization",
    name: "Comercializadora VARO S.A.",
    alternateName: "VAROSA",
    url: "https://varosacr.com",
    logo: "https://varosacr.com/og-image.png",
    image: "https://varosacr.com/og-image.png",
    description:
      "Distribuidora costarricense B2B de productos profesionales de limpieza, higiene industrial, suministros de oficina y herramientas. Representantes de Diversey, TORK (Essity), El Castor, 3M, Kemical y Solquisa desde 2007.",
    foundingDate: "2007",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 30,
    },
    slogan: "Soluciones que inspiran confianza, transforman y crean impacto",
    telephone: "+506-4002-9365",
    email: "info@varosacr.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Venecia de San Carlos",
      addressLocality: "San Carlos",
      addressRegion: "Alajuela",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.335,
      longitude: -84.286,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Zona Norte, Costa Rica" },
      { "@type": "AdministrativeArea", name: "Región Caribe, Costa Rica" },
      { "@type": "AdministrativeArea", name: "Guanacaste, Costa Rica" },
      { "@type": "AdministrativeArea", name: "Gran Área Metropolitana, Costa Rica" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+506-4002-9365",
        contactType: "sales",
        availableLanguage: "Spanish",
      },
      {
        "@type": "ContactPoint",
        telephone: "+506-8670-3251",
        contactType: "customer service",
        availableLanguage: "Spanish",
        contactOption: "https://wa.me/50686703251",
      },
    ],
    sameAs: [
      "https://www.facebook.com/varosacr",
      "https://www.instagram.com/varosacr",
      "https://www.linkedin.com/company/varosacr",
    ],
    brand: [
      { "@type": "Brand", name: "Diversey" },
      { "@type": "Brand", name: "TORK" },
      { "@type": "Brand", name: "El Castor" },
      { "@type": "Brand", name: "3M" },
      { "@type": "Brand", name: "Kemical" },
      { "@type": "Brand", name: "Solquisa" },
      { "@type": "Brand", name: "HP" },
      { "@type": "Brand", name: "Epson" },
      { "@type": "Brand", name: "Faber Castell" },
      { "@type": "Brand", name: "Artline" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Distribución de productos de limpieza industrial",
          description: "Químicos especializados, desinfectantes, desengrasantes y detergentes industriales de Diversey, Kemical y Solquisa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemas de higiene TORK (Essity)",
          description: "Dispensadores de toallas, papel higiénico, jabón y sanitizantes TORK con servicio de instalación.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servicios técnicos especializados",
          description: "Instalación de dispensadores, auditorías de higiene ATP, capacitaciones técnicas en BPM y acompañamiento continuo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Suministros de oficina",
          description: "Papelería, artículos de escritura, tintas, tóners y organización de archivo de marcas HP, Epson, Faber Castell y Artline.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://varosacr.com/#localbusiness",
    name: "VAROSA — Comercializadora VARO S.A.",
    url: "https://varosacr.com",
    telephone: "+506-4002-9365",
    email: "info@varosacr.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Venecia de San Carlos",
      addressLocality: "San Carlos",
      addressRegion: "Alajuela",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.335,
      longitude: -84.286,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://varosacr.com/#website",
    name: "VAROSA",
    url: "https://varosacr.com",
    publisher: { "@id": "https://varosacr.com/#organization" },
    inLanguage: "es",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
