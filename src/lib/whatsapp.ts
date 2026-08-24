/**
 * Trazabilidad de origen para los enlaces de WhatsApp.
 *
 * Problema que resuelve: hasta ahora todos los enlaces `wa.me` del sitio
 * llevaban un mensaje fijo, sin ninguna marca de dónde venía la persona.
 * Por eso no se podía atribuir ningún prospecto a su fuente, y sin eso no
 * hay forma de calcular el retorno de la inversión publicitaria.
 *
 * Cómo funciona: se agrega una referencia corta al final del mensaje
 * prellenado, con la forma `[ref: pagina-fuente]`. Eso sirve por dos vías
 * independientes:
 *
 *   1. El vendedor la ve en el chat y sabe de dónde llegó la consulta.
 *   2. La referencia viaja dentro del parámetro `text`, que es parte de la
 *      URL. La etiqueta de GTM "GA4 — Evento clic_whatsapp" ya captura la
 *      URL del enlace en su parámetro `link_url`, así que GA4 registra el
 *      origen AUNQUE la persona borre el texto antes de enviarlo.
 *
 * La vía 2 es la importante: no depende de que el prospecto conserve el
 * mensaje. La vía 1 es un extra para el equipo comercial.
 *
 * Nota: solo se usa el parámetro `text`, que es el único que `wa.me`
 * documenta. No se agregan parámetros propios a la URL para no arriesgar
 * que WhatsApp rechace el enlace.
 */

const NUMERO_WHATSAPP = "50686703251";
const CLAVE_FUENTE = "varosa_fuente";

/** Deja solo minúsculas, números y guiones. Corta a 20 caracteres. */
const normalizar = (valor: string): string =>
  valor
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 20) || "sin-dato";

/**
 * Detecta de dónde llegó el visitante y lo guarda para toda la sesión.
 *
 * Se llama una sola vez al montar la aplicación. La PRIMERA visita de la
 * sesión es la que manda: si alguien llega por un anuncio y después navega
 * a otra página, sigue contando como "ads".
 */
export function capturarFuente(): void {
  try {
    if (sessionStorage.getItem(CLAVE_FUENTE)) return;

    const params = new URLSearchParams(window.location.search);
    let fuente = "directo";

    if (params.has("gclid") || params.has("gad_source") || params.has("gad_campaignid")) {
      fuente = "ads";
    } else if (params.has("fbclid")) {
      fuente = "meta";
    } else if (params.get("utm_source")) {
      fuente = normalizar(params.get("utm_source")!);
    } else if (document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (host === window.location.hostname.replace(/^www\./, "")) fuente = "directo";
      else if (host.includes("google")) fuente = "organico-google";
      else if (host.includes("bing")) fuente = "organico-bing";
      else if (host.includes("facebook") || host.includes("instagram")) fuente = "social";
      else if (host.includes("linkedin")) fuente = "linkedin";
      else if (host.includes("tienda.varosacr")) fuente = "tienda";
      else fuente = normalizar(host);
    }

    sessionStorage.setItem(CLAVE_FUENTE, fuente);
  } catch {
    // sessionStorage puede fallar en modo privado o con cookies bloqueadas.
    // La trazabilidad es deseable, no crítica: el enlace debe funcionar igual.
  }
}

/** Fuente guardada para esta sesión, o "directo" si no se pudo determinar. */
function fuenteActual(): string {
  try {
    return sessionStorage.getItem(CLAVE_FUENTE) || "directo";
  } catch {
    return "directo";
  }
}

/** Código corto de la página actual, derivado de la ruta. */
function paginaActual(): string {
  try {
    const ruta = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return ruta ? normalizar(ruta) : "inicio";
  } catch {
    return "inicio";
  }
}

/**
 * Construye un enlace de WhatsApp con el mensaje indicado y la referencia
 * de origen agregada al final.
 *
 * @param mensaje  Texto prellenado, en lenguaje natural y sin codificar.
 * @param pagina   Código de página. Si se omite, se deriva de la ruta actual.
 *
 * @example
 *   enlaceWhatsApp("Hola, me interesa cotizar: Papel Toalla TORK")
 *   // → https://wa.me/50686703251?text=Hola%2C%20me%20interesa...%5Bref%3A%20productos-ads%5D
 */
export function enlaceWhatsApp(mensaje: string, pagina?: string): string {
  const ref = `${pagina ?? paginaActual()}-${fuenteActual()}`;
  const texto = `${mensaje}\n\n[ref: ${ref}]`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
}
