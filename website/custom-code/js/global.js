/* Acuité Intelligence — Squarespace Custom JS
   Inject via: Settings → Advanced → Code Injection → Footer
   Last updated: 2026-05-19

   SETUP INSTRUCTIONS:
   1. Replace 'YOUR_PLAUSIBLE_DOMAIN' with your actual Plausible domain
   2. Or swap Plausible for Google Analytics / GTM (uncomment relevant lines)
   3. Uncomment the analytics call that matches your setup
*/

/* === Analytics Initialization === */
// Option A: Plausible Analytics (Recommended for GDPR/Quebec)
// <script defer data-domain="acuite-intelligence.com" src="https://plausible.io/js/script.js"></script>
// Add the above in Squarespace Header Code Injection

// Option B: Google Analytics 4 (GA4)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID

// Option C: Google Tag Manager (GTM)
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-XXXXXXXXX');</script>

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

/* === Page View Tracking (for client-side navigation) === */
// If using PJAX or client-side routing, trigger pageview event
function trackPageView(path) {
  if (typeof plausible === 'function') {
    plausible('pageview', { u: path });
  }
  if (typeof gtag === 'function') {
    gtag('pageview', { page_path: path });
  }
}
