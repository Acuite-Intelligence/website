# Bilingual Strategy & hreflang Plan

## Squarespace Limitations
Squarespace does **not** natively generate hreflang tags. Options to work around this:

### Option A — Code Injection (Recommended)
Inject hreflang `<link>` tags manually via **Settings → Advanced → Code Injection → Header**.
Use per-page code blocks for page-specific overrides.

```html
<!-- Inject in Squarespace Header Code Injection -->
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/[page]" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/[page]" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/[page]" />
```

> Note: x-default points to French (primary language).

### Option B — Third-Party Plugin
Use a Squarespace SEO plugin (e.g., SEOSpace) that auto-generates hreflang.

### Option C — Separate Squarespace Sites
Run two Squarespace sites (one per locale) and cross-link them.
- Pro: Full Squarespace feature parity per locale
- Con: Higher cost, harder to maintain brand consistency

**Decision: Option A** (code injection) until traffic justifies more investment.

---

## URL Structure Plan

| Page | English URL | French URL |
|---|---|---|
| Home | `/en` | `/fr` |
| About | `/en/about` | `/fr/a-propos` |
| Services | `/en/services` | `/fr/services` |
| Contact | `/en/contact` | `/fr/contact` |

> Squarespace uses folder-based structure. Set up two top-level folders: `en/` and `fr/`.

## Language Switcher
- Add a visible language toggle in the header (EN | FR)
- Each link points to the equivalent page in the other locale
- Track language switch events in analytics

## robots.txt & Sitemap
- Squarespace auto-generates `/sitemap.xml` — verify both locale URLs appear
- Submit both locale sitemaps to Google Search Console separately
- Monitor FR and EN indexing coverage independently
