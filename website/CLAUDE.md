# Acuité Intelligence — Website Project

## Overview
Company website for **Acuité Intelligence**, hosted on **Squarespace**.
Bilingual: **French (primary)** and **English**.

## Platform: Squarespace
- No git deployment — changes are made directly in the Squarespace editor or via API
- Custom code is injected via **Settings → Advanced → Code Injection** (global) or per-page code blocks
- CSS customizations go in **Design → Custom CSS**
- Squarespace's native multilingual support is limited — bilingual strategy documented in `seo/hreflang-plan.md`

## Project Structure

```
website/
├── content/
│   ├── en/          # English page copy (markdown drafts)
│   └── fr/          # French page copy (markdown drafts)
├── custom-code/
│   ├── css/         # Custom CSS injected into Squarespace
│   └── js/          # Custom JS injected into Squarespace
├── seo/
│   ├── metadata.md  # Per-page title/description for both locales
│   ├── hreflang-plan.md
│   └── schema/      # JSON-LD structured data snippets
└── design/
    ├── brand-guidelines.md
    └── assets/      # Logos, icons, exported images
```

## Skills to Use
- `/seo-optimization` — for all SEO work (metadata, hreflang, structured data)
- `/monitoring` — when setting up analytics and uptime checks
- `/frontend-design` — for custom CSS/JS component design

## Key Decisions
- Primary language: French (`fr`) — `x-default` hreflang points to FR
- Domain strategy: TBD (single domain with folder structure preferred)
- Analytics: TBD — Plausible recommended for GDPR/Quebec compliance
