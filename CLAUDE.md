# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/catalog website for **VAROSA (Comercializadora VARO S.A.)**, a Costa Rican B2B distributor of cleaning products, industrial hygiene, office supplies, and technical services. It is a static single-page app (no backend); the transactional online store lives separately on **Zoho Commerce** (`https://tienda.varosacr.com`) and is linked out to. Content and UI copy are in **Spanish (es-CR)**.

The project was scaffolded/edited via [Lovable](https://lovable.dev); changes pushed to `main` sync back to Lovable and vice versa.

## Commands

```sh
npm run dev        # Vite dev server on http://localhost:8080
npm run build      # Production build to ./dist
npm run build:dev  # Build in development mode
npm run preview    # Serve the production build locally
npm run lint       # ESLint over the repo
```

There is **no test suite** and no test runner configured.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to **GitHub Pages**. Two consequences to keep in mind:

- `vite.config.ts` sets `base: "/varosa-digital-hub/"` — the Pages subpath. Static asset URLs in `index.html` and `public/` are hardcoded with this prefix.
- **The site currently lives ONLY on GitHub Pages at `https://<user>.github.io/varosa-digital-hub/`.** The custom domain `varosacr.com` is **not connected yet** — migration is planned but pending.
- SEO/canonical/OG URLs in components (`SEO.tsx`, `SchemaOrg.tsx`, `index.html`) already point at the future `https://varosacr.com`. This is intentional pre-wiring for the migration, but note those URLs do **not** resolve to the live site today. Don't "fix" them to the Pages URL — leave them pointing at the target domain.
- El workflow tiene además un **cron diario** (`schedule: "0 8 * * *"`, 02:00 CR) que reconstruye y redespliega para refrescar el catálogo dinámico desde Zoho (ver "Catálogo dinámico build-time" abajo).

## Architecture

Vite + React 18 + TypeScript, styled with Tailwind and shadcn/ui (Radix primitives under `src/components/ui/`). Path alias `@` → `src/` (`vite.config.ts` and `tsconfig`).

**Routing** (`src/App.tsx`): uses **`HashRouter`** (not BrowserRouter) — URLs are `/#/productos` etc. This is deliberate for GitHub Pages static hosting (no server-side route rewriting). The home page `Index` is eagerly imported; every other page in `src/pages/` is `lazy()`-loaded with a `Suspense` fallback spinner. When adding a page, add both the `lazy` import and a `<Route>`.

**Pages vs components**: `src/pages/` are route-level screens; `src/components/` are shared pieces (`Navigation`, `Footer`, `Hero`, `WhatsAppButton`, etc.). `WhatsAppButton` is rendered once globally in `App.tsx`, outside `<Routes>`.

**SEO is a first-class concern** and heavily invested in — treat it as load-bearing, not boilerplate:
- `src/components/SEO.tsx` — per-page `<title>`/meta/OpenGraph/Twitter via `react-helmet-async` (`HelmetProvider` wraps the app). Each page renders its own `<SEO>`.
- `src/components/SchemaOrg.tsx` — hardcoded Schema.org JSON-LD (Organization, LocalBusiness, WebSite) with the company's real NAP data, brands, and offers. Keep this in sync with actual business facts.
- `index.html` holds base/fallback meta that Helmet overrides at runtime, plus geo tags and `public/sitemap.xml`, `public/robots.txt`.

**Analytics**: Google Tag Manager (`GTM-T2VFDS36`) is injected in `index.html`. Because it's a hash-routed SPA, `GTMPageTracker` in `App.tsx` manually pushes a `page_view` to `dataLayer` on every route change — real navigations don't fire page loads.

**Theming**: light/dark via a `class` on `<html>`, toggled by `useTheme` (`src/hooks/useTheme.ts`) and `ThemeToggle`. Colors are CSS variables (`hsl(var(--...))`) defined in `src/index.css` and mapped to semantic Tailwind names in `tailwind.config.ts` (`primary`, `accent`, `highlight`, etc.). **Use the semantic tokens, not raw hex/colors**, so both themes stay correct. Brand fonts: `font-heading` (Bw Mitga) and `font-body` (Montserrat), self-hosted in `src/assets/fonts/`.

**Catálogo dinámico build-time** (página `Productos`): la vitrina **no** está hardcoded. Se genera en cada build desde la colección **"Destacados"** de Zoho Commerce (API pública de storefront, sin token):
- `scripts/generar-catalogo.mjs` — baja `collections/{id}` (header `domain-name: tienda.varosacr.com`, seguir 301), saca los productos de `payload.collection.products[]`, **sanea las descripciones HTML** con `sanitize-html` (lista blanca `p, br, strong, b, em, ul, ol, li, span`; sin atributos), absolutiza las URLs de imagen (`https://tienda.varosacr.com` + ruta relativa; descarta placeholders `no-preview-image`), decodifica entidades en el nombre, y escribe `src/data/destacados.json`. **Omite precios y stock a propósito** (regla de negocio). La descripción viene completa en el endpoint de colección, así que **no** hace falta pegarle al endpoint de detalle por producto.
- Corre en `prebuild` (antes de `npm run build`), así que `.github/workflows/deploy.yml` lo ejecuta en cada deploy. Un **cron diario** (08:00 UTC) en ese mismo workflow refresca la vitrina sin tocar código.
- **Fallback:** si la descarga falla, el script conserva el `destacados.json` ya commiteado (no rompe el build ni publica vacío). Por eso el JSON se commitea: es el respaldo.
- `src/data/destacados.json` está **generado** — no editarlo a mano; se administra desde el admin de Zoho (colección Destacados, más marca/tags por producto). `sanitize-html` es **devDependency** (solo build); no entra al bundle. `Productos.tsx` renderiza la descripción ya saneada con `dangerouslySetInnerHTML` y oculta marca/tags/descripción cuando vienen vacías. La tarjeta **nunca** muestra precio ni stock (se omiten en el JSON), y **no** filtra agotados: los 26 destacados se muestran siempre.
- **Shopify retirado:** ya no hay enlaces a `tiendavarosa.myshopify.com` (0 enlaces). Todos los "Tienda Online"/"Ver catálogo" apuntan a `https://tienda.varosacr.com` (home de la tienda Zoho). **Pendiente (requiere criterio de Jeank):** los deep-links por categoría del §8 del encargo — mapear los 4 buckets de la web a categorías Zoho — no se implementaron porque las categorías que referencian los productos son subcategorías que no calzan 1:1 con los buckets; por ahora todo va al home de la tienda.

**Assets** (`src/assets/`): client logos (`logos/clientes/`), brand logos (`logos/marcas/`), and product photos (`products/`, mostly `.webp`). Recent commit history is dominated by product-image fixes (white backgrounds, catalog photos) — image quality/consistency is an active, recurring workstream.

**Favicons** (`public/`): ✅ **Completado (2026-07-02)** — favicon.ico (16/32/48), favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png (180×180, fondo blanco), android-chrome-192/512.png usan el **isotipo oficial de VAROSA** (la "V" con gota de agua), recortado del logo vertical. Fondo transparente salvo apple-touch-icon (blanco). El `og-image.png` (1200×630) ya incluía el logo real, no requirió cambios.

## Reglas de negocio VAROSA

Restricciones no negociables — respetarlas en todo cambio:

1. **Nunca mostrar precios en la web.** La cotización es siempre por WhatsApp **+506 8670-3251** (`https://wa.me/50686703251`). Cualquier CTA de compra/consulta apunta ahí, no a un precio ni a un carrito.
2. **Colores de marca obligatorios** — Primary `#325895`, Secondary `#4672B1`, Accent `#15C9E4`, Highlight `#FFAD00`. Se usan vía los tokens semánticos de Tailwind (`primary`, `secondary`, `accent`, `highlight`), no como hex sueltos.
3. **Tipografías** — `font-heading` (**Bw Mitga**) para títulos, `font-body` (**Montserrat**) para cuerpo. No introducir otras fuentes.
4. **Menú principal**: exactamente **6 ítems + CTA**. **Blog va solo en el Footer**, nunca en la navegación principal.
5. **Logos de marcas**: usar únicamente los archivos **autorizados oficialmente** en `src/assets/logos/marcas/`. Prohibido descargar logos de internet.
6. **Dark mode**: usar `bg-background` y `bg-card` en lugar de `bg-white` (y equivalentes semánticos en vez de colores crudos) para no romper el modo oscuro.
7. **Sectores prioritarios 2026**: Industria Alimentaria, HORECA y Turismo, Manufactura. El contenido/mensajería debe favorecer estos sectores.
8. **Antes de cualquier push**: correr `npm run build` para verificar que compila sin errores.

## Conventions

- Comments and user-facing strings are in Spanish; match that when editing.
- Import shared UI from `@/components/ui/...`; compose pages from `src/components` building blocks rather than duplicating markup.
