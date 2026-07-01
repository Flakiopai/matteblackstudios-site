# Contributing to MATTEBLACK STUDIOS Site

Thank you for helping improve the MATTEBLACK STUDIOS website. This is a **static, sovereign site** — HTML, CSS, one local JavaScript file, and self-hosted assets. No build step, no frameworks, no external dependencies.

---

## Before You Start

1. Read `README.md` for architecture, sovereign constraints, and deployment notes.
2. Review `SECURITY.md` before reporting issues or opening pull requests.
3. Check `LICENSE` — MIT applies to site source; product packs have separate licenses.

---

## Sovereign Constraints (Non-Negotiable)

All contributions must preserve these rules:

- **No tracking** — no analytics, pixels, session recording, or telemetry
- **No cookies** — no `document.cookie`, `localStorage` identifiers, or similar
- **No external dependencies** — no CDN fonts, scripts, or stylesheets
- **No device detection** — no user-agent sniffing or JavaScript viewport breakpoints
- **CSS-only responsiveness** — layout adapts using `@media (min-width: …)` only

Gumroad checkout links are user-initiated external navigations, not embedded third-party scripts.

---

## How to Open Issues

Use GitHub Issues for:

- Broken links, typos, or confusing copy
- Accessibility regressions (keyboard nav, heading order, alt text, ARIA)
- Layout or readability problems on mobile or in-app browsers
- Missing or incorrect product metadata on `/PRODUCTS/index.html`

**Good issue titles:**

- `a11y: product card missing aria-describedby on Gumroad link`
- `docs: README deploy section outdated`
- `fix: hero image missing width/height on mobile`

**Do not open public issues for:**

- Security vulnerabilities with sensitive details → see `SECURITY.md`

---

## Pull Requests

1. Fork the repository and create a feature branch from `main`.
2. Keep changes focused — one concern per PR when possible.
3. Test locally:

   ```bash
   python3 -m http.server 8080
   ```

   Open `http://localhost:8080`. Root-absolute paths require serving from the site root.

4. Verify:

   - Keyboard navigation through header, product cards, and footer links
   - Product images use `loading="lazy"`, `decoding="async"`, intrinsic dimensions, and `srcset`
   - No new external scripts, fonts, or tracking snippets
   - `_headers` unchanged unless you have a documented security reason

5. Update `README.md` if you add pages, products, or change folder structure.

---

## Product Catalog Changes

When adding or updating a product on `/PRODUCTS/index.html`:

- Match the structure, classes, and ARIA patterns of existing `product-card` articles
- Use self-hosted images under `/assets/`
- Include GitHub and Gumroad links with `rel="noopener noreferrer"` and `target="_blank"`
- Add visually hidden `(opens in new tab)` text inside external links
- Add a `product-note` with a unique `id` referenced by `aria-describedby` on the Gumroad button

---

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

*MATTEBLACK STUDIOS — minimal. modern. sovereign.*
