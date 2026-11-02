// Páginas de marca ("Distribuidor <Marca> en Costa Rica"). Fuente única: lo usan
// la página /marcas/:slug y su FAQPage de Schema.org. Al agregar una marca, sumar
// también su slug en src/data/marca-slugs.json (lo lee vite.config.ts para el
// prerender) y en public/sitemap.xml.
//
// REGLA: todo el texto sale de datos ya publicados en el sitio (Inicio, Nosotros,
// Preguntas Frecuentes, Servicios Técnicos, artículos del blog). No agregar
// cifras, certificaciones ni condiciones comerciales nuevas sin confirmación de
// Gerencia. Nunca precios (regla de negocio #1).
import logoTork from "@/assets/logos/marcas/tork.png";
import logoDiversey from "@/assets/logos/marcas/diversey.png";

export interface Marca {
  slug: string;
  nombre: string;
  /** Fabricante, si aplica (ej. "Essity"). */
  fabricante?: string;
  logo: string;
  /** Título SEO (sin el sufijo " | VAROSA"). */
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  /** Párrafo de apertura bajo el H1. */
  intro: string;
  /** Líneas de producto que VAROSA distribuye de la marca. */
  lineas: { titulo: string; detalle: string }[];
  /** Servicio técnico asociado a la marca. */
  servicios: string[];
  /** Sectores donde más se usa (priorizar sectores 2026). */
  sectores: { nombre: string; detalle: string }[];
  /** Preguntas frecuentes específicas de la marca (alimentan el FAQPage). */
  preguntas: { pregunta: string; respuesta: string }[];
  /** Slugs de artículos del blog relacionados. */
  articulos: string[];
  /** Categoría equivalente en la tienda Zoho (verificada en Index.tsx). */
  enlaceTienda: string;
  mensajeWhatsApp: string;
}

const COBERTURA =
  "Entregamos con flota propia en la Zona Norte, el Caribe, Guanacaste y la Gran Área Metropolitana (GAM), desde nuestra sede en Venecia de San Carlos, Alajuela.";

export const marcas: Marca[] = [
  {
    slug: "tork",
    nombre: "TORK",
    fabricante: "Essity",
    logo: logoTork,
    seoTitle: "Distribuidor TORK en Costa Rica",
    seoDescription:
      "VAROSA es distribuidor de TORK (Essity) en Costa Rica: dispensadores, papel higiénico, toallas, jabón y sanitizantes con instalación incluida. Entrega propia en Zona Norte, Caribe, Guanacaste y GAM.",
    keywords:
      "distribuidor TORK Costa Rica, TORK Essity Costa Rica, dispensadores TORK, papel higiénico TORK, toallas TORK, jabón TORK, TORK San Carlos, TORK Guanacaste",
    intro:
      "VAROSA (Comercializadora VARO S.A.) distribuye los sistemas de higiene profesional TORK, la marca de Essity, a empresas de toda Costa Rica desde Venecia de San Carlos. No solo vendemos el insumo: instalamos los dispensadores, capacitamos al personal y dimensionamos el consumo de cada baño.",
    lineas: [
      { titulo: "Dispensadores", detalle: "Dispensadores cerrados con llave para papel, toallas y jabón, con ventana de nivel visible para el personal de limpieza." },
      { titulo: "Papel higiénico", detalle: "Sistemas como TORK SmartOne, que entregan hoja por hoja para controlar el consumo en baños de alto tráfico." },
      { titulo: "Toallas de manos", detalle: "Toallas dobladas TORK Xpress que se dispensan una a una, para cocinas, áreas de servicio y baños." },
      { titulo: "Jabón y sanitizantes", detalle: "Cartuchos sellados que dispensan una dosis medida por activación; el jabón nunca queda expuesto al ambiente." },
    ],
    servicios: [
      "Instalación física de los dispensadores TORK.",
      "Capacitación del personal de limpieza.",
      "Cálculo inicial de consumo para dimensionar cuántos dispensadores lleva cada baño.",
      "Programación de la reposición según el consumo real de su operación.",
    ],
    sectores: [
      { nombre: "HORECA y Turismo", detalle: "Baños de huéspedes y clientes en hoteles, restaurantes y catering, donde el baño es parte de la experiencia." },
      { nombre: "Industria Alimentaria", detalle: "Lavado de manos en accesos a planta y áreas de proceso, con jabón en cartucho sellado." },
      { nombre: "Manufactura", detalle: "Baños y vestidores de alto tráfico en plantas con varios turnos." },
      { nombre: "Oficinas e instituciones", detalle: "Higiene de baños en oficinas, comercios e instituciones." },
    ],
    preguntas: [
      {
        pregunta: "¿VAROSA distribuye TORK en Costa Rica?",
        respuesta:
          "Sí. VAROSA distribuye los productos de higiene profesional TORK (Essity): dispensadores, papel higiénico, toallas de manos, jabón y sanitizantes, para empresas de toda Costa Rica.",
      },
      {
        pregunta: "¿A qué zonas entregan productos TORK?",
        respuesta: COBERTURA,
      },
      {
        pregunta: "¿Instalan los dispensadores TORK?",
        respuesta:
          "Sí. La instalación de dispensadores TORK es parte de nuestro servicio técnico: incluye la instalación física, la capacitación del personal de limpieza y un primer cálculo de consumo. Las visitas técnicas no tienen costo.",
      },
      {
        pregunta: "¿Cómo cotizo productos TORK?",
        respuesta:
          "Escríbanos por WhatsApp al +506 8501-2040 o llámenos al 4002-9365. No publicamos precios porque dependen de los productos, las cantidades y la presentación. La compra mínima es de ₡50.000.",
      },
    ],
    articulos: ["reducir-consumo-papel-tork", "tork-vs-genericos"],
    enlaceTienda: "https://tienda.varosacr.com/categories/dispensadores/6074712000051707564",
    mensajeWhatsApp: "Hola, quiero cotizar productos TORK",
  },
  {
    slug: "diversey",
    nombre: "Diversey",
    logo: logoDiversey,
    seoTitle: "Distribuidor Diversey en Costa Rica",
    seoDescription:
      "VAROSA es distribuidor de químicos Diversey en Costa Rica: detergentes, desengrasantes y desinfectantes con sistemas de dosificación, auditorías ATP y capacitación. Entrega propia en Zona Norte, Caribe, Guanacaste y GAM.",
    keywords:
      "distribuidor Diversey Costa Rica, químicos Diversey, Diversey industria alimentaria, dosificación Diversey, desinfectantes Diversey, Diversey HORECA, Diversey San Carlos",
    intro:
      "VAROSA (Comercializadora VARO S.A.) distribuye los químicos de limpieza y desinfección profesional Diversey a empresas de toda Costa Rica desde Venecia de San Carlos. Los acompañamos con sistemas de dosificación, auditorías ATP y capacitación para que cada producto se use a la dilución correcta.",
    lineas: [
      { titulo: "Detergentes y desengrasantes", detalle: "Limpiadores industriales para cocinas, pisos y superficies de proceso." },
      { titulo: "Desinfectantes", detalle: "Desinfección de superficies previamente limpias, en planta, cocina y áreas comunes." },
      { titulo: "Químicos para CIP", detalle: "Desinfectantes y detergentes para limpieza en sitio (CIP) en lecherías y plantas de alimentos." },
      { titulo: "Limpieza por área", detalle: "Productos para cocinas, pisos, baños y cristales en hoteles y restaurantes." },
    ],
    servicios: [
      "Instalación de sistemas de dosificación automática que dispensan la cantidad exacta de químico por litro.",
      "Visita de diagnóstico para medir el consumo actual y encontrar oportunidades de ahorro.",
      "Auditorías de limpieza por bioluminiscencia (ATP), sin costo.",
      "Capacitación del personal y entrega de fichas técnicas y hojas de seguridad.",
    ],
    sectores: [
      { nombre: "Industria Alimentaria", detalle: "Programas de limpieza y desinfección para BPM, con documentación técnica para auditorías." },
      { nombre: "HORECA y Turismo", detalle: "Químicos por área para cocinas, pisos, baños y cristales en hoteles y restaurantes." },
      { nombre: "Manufactura", detalle: "Desengrasantes, desinfectantes y limpiadores industriales." },
      { nombre: "Lecherías", detalle: "Desinfectantes y detergentes para CIP y superficies." },
    ],
    preguntas: [
      {
        pregunta: "¿VAROSA distribuye Diversey en Costa Rica?",
        respuesta:
          "Sí. VAROSA distribuye químicos de limpieza y desinfección profesional Diversey para empresas de toda Costa Rica, en especial industria alimentaria, hoteles y restaurantes, manufactura y lecherías.",
      },
      {
        pregunta: "¿A qué zonas entregan productos Diversey?",
        respuesta: COBERTURA,
      },
      {
        pregunta: "¿Instalan sistemas de dosificación para químicos Diversey?",
        respuesta:
          "Sí. Instalamos sistemas de dosificación automática que se conectan a la línea de agua y dispensan la cantidad exacta de químico por litro. También hacemos auditorías ATP y capacitaciones. Las visitas técnicas no tienen costo.",
      },
      {
        pregunta: "¿Entregan fichas técnicas y hojas de seguridad de Diversey?",
        respuesta:
          "Sí. Entregamos la documentación técnica de los productos que distribuimos, incluidas las fichas técnicas y las hojas de seguridad (SDS), útiles para inspecciones de SENASA o del Ministerio de Salud.",
      },
      {
        pregunta: "¿Cómo cotizo productos Diversey?",
        respuesta:
          "Escríbanos por WhatsApp al +506 8501-2040 o llámenos al 4002-9365. No publicamos precios porque dependen de los productos, las cantidades y la presentación. La compra mínima es de ₡50.000.",
      },
    ],
    articulos: ["dilucion-quimicos-diversey", "dosificacion-quimicos-industria-alimentaria", "senasa-bpm-2026"],
    enlaceTienda: "https://tienda.varosacr.com/categories/limpieza-e-higiene/6074712000051708163",
    mensajeWhatsApp: "Hola, quiero cotizar productos Diversey",
  },
];

export const getMarca = (slug: string | undefined) =>
  marcas.find((m) => m.slug === slug);
