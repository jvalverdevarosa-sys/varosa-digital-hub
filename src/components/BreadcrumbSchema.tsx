import { Helmet } from "react-helmet-async";

/**
 * BreadcrumbList (Schema.org) para páginas internas.
 * Jerarquía real de dos niveles: Inicio > [Página actual].
 * Las URLs usan el dominio canónico (varosacr.com) para ser coherentes con el
 * <link rel="canonical"> que emite SEO.tsx (mismo patrón BASE_URL + path).
 */
const BASE_URL = "https://varosacr.com";

interface BreadcrumbSchemaProps {
  /** Nombre visible de la página actual (ej. "Productos"). */
  name: string;
  /** Ruta de la página actual (ej. "/productos"). */
  path: string;
}

const BreadcrumbSchema = ({ name, path }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${BASE_URL}${path}` },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
