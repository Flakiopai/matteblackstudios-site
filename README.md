# MATTEBLACK STUDIOS Site

Static, sovereign website for MATTEBLACK STUDIOS digital products. HTML, CSS, and one local JavaScript file — no frameworks, no CDNs, no analytics, no cookies, no telemetry.

## Project purpose

A privacy-first marketing and product catalog site that showcases MATTEBLACK STUDIOS workflow packs. Every asset is self-hosted. The only optional JavaScript (`reveal.js`) adds scroll reveals and a mobile navigation toggle — it does not collect data or call external services.

## Sovereign constraints

These rules are non-negotiable across all site code:

- **No tracking** — no analytics, pixels, session recording, or telemetry
- **No cookies** — no `document.cookie`, `localStorage` identifiers, or similar
- **No external dependencies** — no CDN fonts, scripts, or stylesheets
- **No device detection** — no user-agent sniffing or JavaScript viewport breakpoints
- **CSS-only responsiveness** — layout adapts using `@media (min-width: …)` only

Checkout links (Gumroad) are user-initiated external navigations, not embedded third-party scripts.

## Mobile-first architecture

Base styles target mobile viewports. Desktop layout is layered on with two breakpoints only:

| Breakpoint | Purpose |
|------------|---------|
| Base (default) | Mobile layout, compact spacing, collapsible nav |
| `min-width: 768px` | Tablet/desktop — inline nav, two-column product grid, hero parallax |
| `min-width: 1024px` | Wide desktop — increased container padding |

Typography uses `clamp()` for fluid scaling between breakpoints. Spacing uses CSS custom properties (`--space-4` through `--space-64`) applied consistently across components.

### Viewport height

All full-height sections use `100dvh` with `min-height: -webkit-fill-available` as a fallback for in-app browsers (Instagram, iOS Safari) where `vh` units are unreliable.

## Image handling

- All images are self-hosted under `/assets/`
- Product images use `loading="lazy"`, `decoding="async"`, intrinsic `width`/`height`, and `srcset` with width descriptors
- `sizes` hints tell the browser layout width: `(min-width: 768px) 50vw, 100vw` for two-column cards
- Global CSS enforces `max-width: 100%`, `height: auto`, and `object-fit: cover` on images

## Instagram / in-app WebView considerations

- Viewport meta locks initial scale: `maximum-scale=1` prevents zoom-induced layout shift
- `html, body { overflow-x: hidden }` prevents horizontal scroll bleed
- `* { min-width: 0; min-height: 0 }` prevents flex/grid children from forcing overflow
- Navigation uses **root-absolute URLs** (`/index.html`, `/PRODUCTS/index.html`) so relative-path resolution does not break inside embedded WebViews

## Security headers (host-level)

Static HTML cannot enforce security headers — configure these on your host (Netlify `_headers`, Cloudflare, nginx, etc.). Recommended values are documented in the `styles.css` file header and in `_headers`.

## Local preview

From the project root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser. Root-absolute paths (`/styles.css`) require serving from the site root, not opening files directly via `file://`.

## Folder map

```
index.html              Home page
styles.css              Global design system and layout (mobile-first)
reveal.js               Optional scroll reveals and mobile nav
_headers                Netlify security headers
privacy.html            Privacy policy
terms.html              Terms of service
safety.html             Safety and compliance disclosures
PRODUCTS/
  index.html            Product catalog (two live products)
assets/
  hero-bg.png           Site background image
  products/             Gumroad product thumbnails
```

## Deploy

Deploy the project root as a static site (Netlify drag-and-drop or git-connected build with no build step). All assets are self-contained — no install or compile required. `_headers` applies recommended security headers on Netlify automatically.

This repo is kept in sync with `BUSINESS/00_PROJECTS/MATTEBLACKSTUDIOS_SITE/` — either folder can be deployed.

## Rules

All site work must align with `.cursor/rules/` when present in the repository.
