// Generador de catálogo build-time — colección "Destacados" de Zoho Commerce.
//
// Baja la colección pública de storefront de Zoho, sanea las descripciones HTML
// y escribe src/data/destacados.json (arreglo limpio que consume Productos.tsx).
// Corre en `prebuild` (antes de `npm run build`). Sin tokens ni llaves: API pública.
//
// Fallback robusto: si la descarga falla, se conserva el último destacados.json
// commiteado (no se rompe el build ni se publica vacío).

import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sanitizeHtml from "sanitize-html";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAIZ = resolve(__dirname, "..");
const SALIDA = resolve(RAIZ, "src/data/destacados.json");

// --- Fuente de datos (verificada, sin token) ---------------------------------
const TIENDA_BASE = "https://tienda.varosacr.com";
const DOMAIN_NAME = "tienda.varosacr.com";
const COLECCION_ID = "6074712000051758045"; // "Destacados"
const COLECCION_URL = `https://commerce.zoho.com/storefront/api/v1/collections/${COLECCION_ID}?format=json&per_page=100`;

// Etiquetas permitidas en la descripción (lista blanca — §7-bis del encargo).
const SANITIZE_OPTS = {
  allowedTags: ["p", "br", "strong", "b", "em", "ul", "ol", "li", "span"],
  allowedAttributes: {}, // sin atributos: fuera on*, style, class, href, etc.
  disallowedTagsMode: "discard",
};

// Decodifica entidades HTML en campos de texto plano (ej. el nombre trae 1&quot;).
function decodeEntidades(texto) {
  return String(texto || "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();
}

// Convierte una URL de imagen relativa de Zoho en absoluta; descarta placeholders.
function resolverImagen(imagenes) {
  const img = Array.isArray(imagenes) ? imagenes[0] : null;
  if (!img || !img.url) return null;
  if (img.is_placeholder_image || img.url.includes("no-preview-image")) return null;
  return img.url.startsWith("http") ? img.url : `${TIENDA_BASE}${img.url}`;
}

// Sanea la descripción HTML; devuelve null si queda vacía (varios productos aún
// sin enriquecer — se oculta la sección en la tarjeta, no se deja hueco).
function limpiarDescripcion(html) {
  if (!html) return null;
  const limpio = sanitizeHtml(html, SANITIZE_OPTS).trim();
  // Si tras sanear no queda texto visible (solo etiquetas vacías), tratar como vacío.
  const soloTexto = limpio.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return soloTexto.length > 0 ? limpio : null;
}

function transformar(producto) {
  const brand = decodeEntidades(producto.brand);
  const tags = Array.isArray(producto.tags)
    ? producto.tags.map((t) => decodeEntidades(t)).filter(Boolean)
    : [];
  return {
    id: String(producto.product_id),
    name: decodeEntidades(producto.name),
    brand: brand || null, // vacío hasta enriquecer en el admin → se oculta
    tags,
    description: limpiarDescripcion(producto.description),
    image: resolverImagen(producto.images),
    // Enlace opcional "ver en tienda" (Zoho, no la web sin precios).
    storeUrl: producto.url ? `${TIENDA_BASE}${producto.url}` : null,
    // OMITIDOS a propósito: selling_price / label_price (regla: sin precios),
    // is_out_of_stock (la web es de leads, no transaccional).
  };
}

function conservarExistente(motivo) {
  if (existsSync(SALIDA)) {
    const previo = JSON.parse(readFileSync(SALIDA, "utf8"));
    console.warn(
      `[generar-catalogo] ${motivo}. Se conserva destacados.json existente (${previo.length} productos).`
    );
    return true;
  }
  // No hay respaldo: escribir arreglo vacío para no romper el build.
  mkdirSync(dirname(SALIDA), { recursive: true });
  writeFileSync(SALIDA, "[]\n", "utf8");
  console.warn(`[generar-catalogo] ${motivo}. No había respaldo; se escribió [].`);
  return false;
}

async function main() {
  console.log("[generar-catalogo] Bajando colección Destacados de Zoho…");
  let productos;
  try {
    const res = await fetch(COLECCION_URL, {
      headers: { "domain-name": DOMAIN_NAME },
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    productos = data?.payload?.collection?.products;
    if (!Array.isArray(productos)) throw new Error("payload.collection.products ausente");
  } catch (err) {
    conservarExistente(`Fallo al bajar la colección (${err.message})`);
    return; // exit 0 — build continúa con el respaldo
  }

  if (productos.length === 0) {
    conservarExistente("La colección volvió vacía");
    return;
  }

  const catalogo = productos.map(transformar);
  mkdirSync(dirname(SALIDA), { recursive: true });
  writeFileSync(SALIDA, JSON.stringify(catalogo, null, 2) + "\n", "utf8");

  const conDesc = catalogo.filter((p) => p.description).length;
  const conImg = catalogo.filter((p) => p.image).length;
  console.log(
    `[generar-catalogo] OK: ${catalogo.length} productos → src/data/destacados.json ` +
      `(${conImg} con imagen, ${conDesc} con descripción).`
  );
}

main();
