# Squarespace Deployment Checklist

Complete this checklist step-by-step to publish Acuité Intelligence website to Squarespace.

## Phase 1: Squarespace Account & Domain Setup

- [ ] Log into Squarespace account (or create one at squarespace.com)
- [ ] Domain registered and pointed to Squarespace
  - [ ] DNS records updated to point to Squarespace nameservers
  - [ ] SSL certificate auto-generated (should be automatic)
- [ ] Site created with desired template/design
- [ ] Site name/title updated to "Acuité Intelligence"

---

## Phase 2: Create Site Structure & Pages

### Create Folder Structure
- [ ] Create top-level folder named `en` (English)
- [ ] Create top-level folder named `fr` (French)

### Create English Pages (under `/en`)
- [ ] **Home** (`/en/` or `/en/home`)
  - [ ] Add hero section with tagline: "Health Analytics & Stakeholder Engagement"
  - [ ] Add key benefits section
  - [ ] Add CTA button(s)
- [ ] **About** (`/en/about`)
  - [ ] Add mission statement
  - [ ] Add team section (with placeholder for photos)
  - [ ] Add company background
- [ ] **Services** (`/en/services`)
  - [ ] Add service offerings (Health Analytics, Stakeholder Engagement, Strategic Advisory)
  - [ ] Add process/workflow section
  - [ ] Add case studies or testimonials placeholder
- [ ] **Contact** (`/en/contact`)
  - [ ] Add contact form (use Squarespace Forms)
  - [ ] Add contact information (email, phone, address)

### Create French Pages (under `/fr`)
- [ ] **Accueil** (`/fr/` or `/fr/accueil`)
  - [ ] French translation of Home page
- [ ] **À propos** (`/fr/a-propos`)
  - [ ] French translation of About page
- [ ] **Services** (`/fr/services`)
  - [ ] French translation of Services page
- [ ] **Nous Contacter** (`/fr/contact`)
  - [ ] French translation of Contact page

### Add Language Switcher
- [ ] Add navigation element (header or footer) with language toggle
  - [ ] Link text: `EN | FR` or similar
  - [ ] EN link points to equivalent `/en/[page]` URL
  - [ ] FR link points to equivalent `/fr/[page]` URL
  - [ ] Add CSS class `lang-switcher` to the container
  - [ ] Add `data-locale="en"` and `data-locale="fr"` to links

---

## Phase 3: Inject Custom Code

### Step 1: CSS Injection
- [ ] Go to **Settings → Design → Custom CSS**
- [ ] Paste the CSS from [SQUARESPACE-SETUP.md - Header CSS](SQUARESPACE-SETUP.md#step-1-css-injection)
- [ ] Click "Save"
- [ ] Verify fonts and colors apply to your site

### Step 2: Global Code Injection
- [ ] Go to **Settings → Advanced → Code Injection**
- [ ] **Header section:**
  - [ ] Paste the hreflang tags for home page
  - [ ] Save
- [ ] **Footer section:**
  - [ ] Choose your analytics platform (Plausible, GA4, or GTM)
  - [ ] Paste analytics script to Header if using Plausible or GA4
  - [ ] Paste JavaScript from [SQUARESPACE-SETUP.md - Footer JS](SQUARESPACE-SETUP.md#footer-code-injection-global)
  - [ ] Save

### Step 3: Per-Page Hreflang Tags
For EACH page, add hreflang tags to the page's code block:
- [ ] `/en/about` — Paste hreflang snippet for English About page
- [ ] `/fr/a-propos` — Paste hreflang snippet for French About page
- [ ] `/en/services` — Paste hreflang snippet for English Services page
- [ ] `/fr/services` — Paste hreflang snippet for French Services page
- [ ] `/en/contact` — Paste hreflang snippet for English Contact page
- [ ] `/fr/contact` — Paste hreflang snippet for French Contact page

**How to add per-page code:**
1. Edit the page
2. Click "Advanced" at bottom-left
3. In the Code Block panel, paste the hreflang snippet
4. Save page

---

## Phase 4: Configure Analytics

### Choose Analytics Platform
- [ ] **Plausible** (GDPR-friendly option)
  - [ ] Create account at plausible.io
  - [ ] Add your domain to Plausible
  - [ ] Add Plausible script to Squarespace Header Code Injection
  - [ ] Reference: `<script defer data-domain="acuite-intelligence.com" src="https://plausible.io/js/script.js"></script>`
  
OR

- [x] **Google Analytics 4 (GA4)** (Selected)
  - [x] Create GA4 property in Google Analytics console
  - [x] Copy your Measurement ID (G-XXXXXXXXXX)
  - [x] Add GA4 script to Squarespace Header Code Injection (see snippet below)
  
OR

- [ ] **Google Tag Manager (GTM)**
  - [ ] Create GTM container at tagmanager.google.com
  - [ ] Copy Container ID (GTM-XXXXXXXXX)
  - [ ] Add GTM script to Squarespace Header Code Injection

- [ ] Test analytics by visiting site and checking real-time view in your analytics dashboard
- [ ] Test language switch tracking by clicking language switcher and checking event in analytics
- [ ] Test form submission tracking by submitting test contact form


#### GA4 Header Snippet (paste into Header Code Injection)

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Replace with your Measurement ID
</script>
```

---

## Phase 5: Configure SEO

### Page Metadata
For EACH page, add title and meta description:
- [ ] **English Pages:**
  - [ ] `/en/` (Home) — Title: `Acuité Intelligence | Health Analytics & Stakeholder Engagement`
  - [ ] `/en/about` — Title: `About Us | Acuité Intelligence`
  - [ ] `/en/services` — Title: `Services | Acuité Intelligence`
  - [ ] `/en/contact` — Title: `Contact Us | Acuité Intelligence`

- [ ] **French Pages:**
  - [ ] `/fr/` (Accueil) — Title: `Acuité Intelligence | Analytique Santé et Engagement des Parties Prenantes`
  - [ ] `/fr/a-propos` — Title: `À propos | Acuité Intelligence`
  - [ ] `/fr/services` — Title: `Services | Acuité Intelligence`
  - [ ] `/fr/contact` — Title: `Nous Contacter | Acuité Intelligence`

**How to add metadata in Squarespace:**
1. Edit the page
2. Click "Settings" (gear icon, top-right)
3. Under "SEO," add Title and Meta Description
4. Save page

### Sitemap & Search Console
- [ ] Verify Squarespace auto-generated `/sitemap.xml`
- [ ] Go to Google Search Console (search.google.com)
- [ ] Add your domain property
- [ ] Submit both locale sitemaps:
  - [ ] English: `/sitemap.xml?locale=en`
  - [ ] French: `/sitemap.xml?locale=fr`
- [ ] Request indexing for all pages
- [ ] Monitor "Coverage" tab for crawl errors

### Robots.txt
- [ ] Verify `/robots.txt` allows Googlebot access
- [ ] Disallow any admin paths (Squarespace handles this automatically)

---

## Phase 6: Contact Form Setup

### Squarespace Forms
- [ ] Go to Contact page
- [ ] Add contact form via Squarespace's Form Block
- [ ] Configure form fields:
  - [ ] Name (required)
  - [ ] Email (required)
  - [ ] Subject (optional)
  - [ ] Message (required)
- [ ] Set form notification email address (where submissions are sent)
- [ ] Test form submission (send test message to yourself)

OR

### Third-Party Form Handler (Formspree, Netlify Forms, etc.)
- [ ] Create account at formspree.io (or similar service)
- [ ] Generate form endpoint
- [ ] Add form to Contact page with custom HTML/code block
- [ ] Test form submission

---

## Phase 7: Testing & QA

### Desktop Testing
- [ ] View all English pages on desktop browser
- [ ] View all French pages on desktop browser
- [ ] Check all links work (internal and external)
- [ ] Verify language switcher works from each page

### Mobile Testing
- [ ] View all pages on mobile (iPhone, Android)
- [ ] Verify responsive layout (no horizontal scroll, readable text)
- [ ] Test language switcher on mobile
- [ ] Test form submission on mobile

### SEO Verification
- [ ] Inspect page source (Ctrl+U / Cmd+U) for each page
  - [ ] Verify `<title>` tag matches expected value
  - [ ] Verify hreflang tags present for all locales
  - [ ] Verify meta description present
- [ ] Use Google's Rich Results Test: https://search.google.com/test/rich-results
  - [ ] Check for any structured data issues

### Analytics Testing
- [ ] Visit site and confirm session recorded in analytics dashboard
- [ ] Click language switcher
  - [ ] Check analytics dashboard for "Language Switch" or "language_switch" event
  - [ ] Verify locale tracked correctly
- [ ] Submit test contact form
  - [ ] Check analytics for "Form Submission" or "form_submission" event
  - [ ] Check email for form submission notification

### Performance Testing
- [ ] Run Squarespace Insights (built into Squarespace)
- [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev/
  - [ ] Desktop score
  - [ ] Mobile score
- [ ] Check Core Web Vitals (LCP, FID, CLS)
- [ ] Address any critical issues

---

## Phase 8: Go Live & Monitoring

### Pre-Launch Final Check
- [ ] All pages accessible and loading
- [ ] All links working (internal and external)
- [ ] Form submissions working
- [ ] Analytics tracking events
- [ ] Mobile responsive
- [ ] Hreflang tags present in page source
- [ ] No console errors in browser DevTools

### Launch
- [ ] Announce site launch on social media / email
- [ ] Update any external links (business listings, LinkedIn, etc.) to point to new site

### Post-Launch Monitoring
- [ ] Monitor Google Search Console for crawl errors (first 24-48 hours)
- [ ] Check analytics for unusual traffic patterns
- [ ] Verify both EN and FR pages are being indexed
- [ ] Monitor form submissions for 48 hours
- [ ] Check email notifications from contact form are working

---

## Reference Files

- **Code Injection Snippets**: [SQUARESPACE-SETUP.md](SQUARESPACE-SETUP.md)
- **SEO Metadata**: [seo/metadata.md](seo/metadata.md)
- **Bilingual Strategy**: [seo/hreflang-plan.md](seo/hreflang-plan.md)
- **Brand Guidelines**: [design/brand-guidelines.md](design/brand-guidelines.md)
- **Content Templates**: [content/en/](content/en/), [content/fr/](content/fr/)

---

## Support & Troubleshooting

### Common Issues

**Issue: Hreflang tags not showing in page source**
- Solution: Verify you pasted them in the correct page's Code Block (not global injection)
- Check: View page source (Ctrl+U) and search for "hreflang"

**Issue: Language switch events not tracking**
- Solution: Verify `.lang-switcher a` elements have `data-locale` attributes
- Check: Browser console (F12) for any JavaScript errors

**Issue: Form submissions not going through**
- Solution: Check email address configured in form settings
- Test: Submit test form and check spam folder for notifications

**Issue: Mobile layout broken**
- Solution: Check Squarespace's responsive settings for each page
- Use: Mobile preview in Squarespace editor before publishing

**Issue: Pages not indexed by Google**
- Solution: Submit sitemap to Google Search Console
- Allow: 1-2 weeks for initial crawl and indexing

---

## Contact & Support

For issues with Squarespace setup:
- Squarespace Help: https://support.squarespace.com
- Google Search Console Help: https://support.google.com/webmasters
- Plausible Analytics Help: https://plausible.io/docs (if using Plausible)

---

**Last Updated**: 2026-05-19
**Status**: Ready for deployment
