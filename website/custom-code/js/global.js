/* Acuité Intelligence — Squarespace Custom JS
   Inject via: Settings → Advanced → Code Injection → Footer
   Last updated: 2026-05-15
*/

/* === Language Switch Analytics Event === */
document.addEventListener('DOMContentLoaded', function () {
  const langLinks = document.querySelectorAll('.lang-switcher a');
  langLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const targetLocale = link.getAttribute('data-locale');
      // Fire analytics event — replace with your analytics call
      // plausible('Language Switch', { props: { to: targetLocale } });
      // gtag('event', 'language_switch', { to_locale: targetLocale });
    });
  });
});
