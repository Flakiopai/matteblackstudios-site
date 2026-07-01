# Security Policy

**MATTEBLACK STUDIOS Site**

This repository ships a static marketing and product catalog website. It does not run servers, collect telemetry, or store visitor data.

---

## Reporting a Vulnerability

If you discover a security issue in this repository (for example: accidental inclusion of secrets, credentials, unsafe inline scripts, or broken security headers), please report it responsibly.

**Preferred contact:** [https://matteblackstudios.com](https://matteblackstudios.com)

When reporting, include:

- A clear description of the issue
- The file path(s) affected
- Steps to reproduce (if applicable)
- Your recommended fix (if you have one)

**Please do not** open a public GitHub issue for sensitive security reports. We will acknowledge receipt and work to resolve confirmed issues promptly.

---

## Privacy Expectations

This site is designed with a **privacy-first, sovereign** doctrine:

| What this site does | What this site does **not** do |
|---|---|
| Serves static HTML, CSS, and local JS | Collect, log, or store visitor data |
| Links to external checkout (Gumroad) on user click | Embed third-party analytics or tracking scripts |
| Documents recommended headers in `_headers` | Enforce headers without a compatible host |

**Visitor responsibility:**

- Review Gumroad's privacy policy before purchasing
- Review GitHub's terms when following product repository links

See `privacy.html` on the live site for the full privacy policy.

---

## Safe Usage Guidelines

1. **No secrets in the repo** — never commit API keys, Netlify tokens, or private deploy credentials.
2. **Self-hosted assets only** — do not add CDN dependencies for fonts, scripts, or stylesheets.
3. **Validate external links** — product GitHub and Gumroad URLs must point to official MATTEBLACK STUDIOS destinations.
4. **Preserve accessibility** — security changes must not remove keyboard support or semantic structure.

---

## Scope

This security policy covers:

- Static files in this repository
- `_headers` configuration for Netlify
- Accidental inclusion of secrets or personal data in commits

This policy does **not** cover:

- Security of Gumroad, GitHub, or social platforms linked from the site
- Netlify account or DNS configuration outside this repository

---

*MATTEBLACK STUDIOS Site — no data collected. no cookies. no tracking.*
