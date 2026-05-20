# Squarespace Code Injection Snippets

## Instructions
1. Log into your Squarespace site
2. Go to **Settings → Advanced → Code Injection**
3. Copy the relevant snippets below into the appropriate sections
4. **Header** = Global CSS and hreflang tags
5. **Footer** = Global JavaScript and analytics
6. For page-specific code, edit each page and add code in the page's Code Block

---

## HEADER CODE INJECTION (Global)

### Step 1: CSS Injection
Paste this in **Settings → Advanced → Code Injection → Header**:

```html
<!-- Acuité Intelligence — Global CSS -->
<style>
/* === Brand Variables === */
:root {
  --color-primary: #0d1b2e;        /* Navy Deep */
  --color-secondary: #1a3054;      /* Navy Mid */
  --color-accent: #b8922e;         /* Gold */
  --color-bg: #ffffff;             /* White */
  --color-text: #0d1b2e;           /* Navy Deep (text) */

  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'DM Sans', sans-serif;

  /* Extended palette */
  --navy-light: #2a4a7a;
  --slate: #3d5a80;
  --steel: #6b8cae;
  --mist: #b8cfe4;
  --cloud: #e8f0f8;
  --pearl: #f5f8fc;
  --gold-light: #d4a93a;
  --gold-muted: #e8d8a8;
  --text-mid: #2a4060;
  --text-muted: #5a7a9a;
}

/* Ensure fonts are loaded */
body {
  font-family: var(--font-body);
  color: var(--color-text);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--color-primary);
}

/* Language switcher styling */
.lang-switcher {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.lang-switcher a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.lang-switcher a:hover,
.lang-switcher a.active {
  color: var(--gold-light);
}

.lang-switcher a.active {
  text-decoration: underline;
}
</style>
```

### Step 2: Hreflang Tags (Global)
Paste this ALSO in **Settings → Advanced → Code Injection → Header**:

```html
<!-- Hreflang Alternate Links — HOME -->
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/" />
```

**Note:** Update the domain from `acuite-intelligence.com` to your actual domain.

### Step 3: Hreflang Tags (Per Page)
For EACH page, add this in the page's **Code Block** (Advanced Panel):

#### English /about Page
```html
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/a-propos" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/about" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/a-propos" />
```

#### French /a-propos Page
```html
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/a-propos" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/about" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/a-propos" />
```

#### English /services Page
```html
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/services" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/services" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/services" />
```

#### French /services Page
```html
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/services" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/services" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/services" />
```

#### English /contact Page
```html
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/contact" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/contact" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/contact" />
```

#### French /contact Page
```html
<link rel="alternate" hreflang="fr" href="https://acuite-intelligence.com/fr/contact" />
<link rel="alternate" hreflang="en" href="https://acuite-intelligence.com/en/contact" />
<link rel="alternate" hreflang="x-default" href="https://acuite-intelligence.com/fr/contact" />
```

---

## FOOTER CODE INJECTION (Global)

Paste this in **Settings → Advanced → Code Injection → Footer**:

```html
<!-- Acuité Intelligence — Global JavaScript -->
<script>
/* === Analytics Setup ===
   Choose ONE of these options below and uncomment:
   - Option A: Plausible (GDPR-friendly, recommended for Quebec)
   - Option B: Google Analytics 4 (GA4)
   - Option C: Google Tag Manager (GTM)
*/

// STEP 1: Add one of these scripts to your Header Code Injection (not here):

// Option A: Plausible — Add this to Header:
// <script defer data-domain="acuite-intelligence.com" src="https://plausible.io/js/script.js"></script>

// Option B: Google Analytics 4 (GA4) — Add this to Header:
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-XXXXXXXXXX');
// </script>

/* Recommended for this site: Google Analytics 4 (GA4). */

<!-- GA4 Header Snippet (copy into Header Code Injection, replace with your Measurement ID) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Replace with your Measurement ID (G-...)
</script>

// Option C: Google Tag Manager — Add this to Header:
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXXXX');</script>

/* === Language Switch Analytics Event === */
document.addEventListener('DOMContentLoaded', function () {
  const langLinks = document.querySelectorAll('.lang-switcher a');
  langLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetLocale = link.getAttribute('data-locale');
      
      // Plausible event
      if (typeof plausible === 'function') {
        plausible('Language Switch', { props: { to: targetLocale } });
      }
      
      // Google Analytics 4 event
      if (typeof gtag === 'function') {
        gtag('event', 'language_switch', { to_locale: targetLocale });
      }
      
      // Google Tag Manager event
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
          event: 'language_switch',
          language: targetLocale
        });
      }
    });
  });
});

/* === Form Submission Tracking === */
document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function () {
      const formName = form.getAttribute('name') || form.getAttribute('id') || 'contact-form';
      
      if (typeof plausible === 'function') {
        plausible('Form Submission', { props: { form: formName } });
      }
      if (typeof gtag === 'function') {
        gtag('event', 'form_submission', { form_name: formName });
      }
    });
  });
});
</script>
```

---

## Next Steps

1. **Choose your analytics platform** (Plausible, GA4, or GTM)
2. **Get your tracking IDs** (if applicable)
3. **Paste the relevant code snippets** into Squarespace Code Injection
4. **Test on live site** by triggering language switches and form submissions
5. **Verify in browser DevTools** that hreflang tags appear in page source

---

## Troubleshooting

**Q: Hreflang tags not appearing in page source?**
- Ensure they're pasted in the correct page's Code Block (not global injection)
- Check that you're viewing the page source, not inspector elements

**Q: Language switch analytics not firing?**
- Ensure your `.lang-switcher a` elements have `data-locale` attributes (e.g., `data-locale="en"`)
- Check browser console for JavaScript errors

**Q: Forms not tracking?**
- Ensure forms have `name` or `id` attributes
- Verify analytics script is loaded before form submission

---

## Reference Files

- Complete CSS: `custom-code/css/global.css`
- Complete JS: `custom-code/js/global.js`
- Brand Guidelines: `design/brand-guidelines.md`
- SEO Metadata: `seo/metadata.md`
- Bilingual Strategy: `seo/hreflang-plan.md`
