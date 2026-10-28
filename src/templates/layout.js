/**
 * Base Layout Template
 * Provides semantic HTML5 skeleton, technical SEO metadata, Schema.org JSON-LD,
 * accessible SVG logo, header, modal, and footer.
 */

function renderLogoSvg() {
  return `
    <svg class="brand-logo-svg" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="34" height="34" rx="8" fill="currentColor" fill-opacity="0.06"/>
      <path d="M17 6L7 24H12L17 14.5L22 24H27L17 6Z" fill="currentColor"/>
      <path d="M13.5 19.5H20.5" stroke="var(--bg-primary)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="17" cy="11" r="2" fill="var(--color-accent)"/>
    </svg>
  `.trim();
}

function layout({
  title,
  description,
  canonicalUrl,
  siteUrl = "https://aakashdas.com",
  ogImage = null,
  ogType = "website",
  jsonLd = null,
  noindex = false,
  content,
  currentPath = "/",
  services = [],
}) {
  const finalOgImage = ogImage || `${siteUrl}/assets/images/aakash-kumar-das.jpeg`;

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aakash Das",
    "alternateName": ["Aakash Kumar Das", "Aakash K. Das"],
    "givenName": "Aakash",
    "familyName": "Das",
    "url": siteUrl,
    "image": `${siteUrl}/assets/images/aakash-kumar-das.jpeg`,
    "jobTitle": "Software Architect",
    "description": "Independent software architect and senior engineer for hire, specializing in Python and Django backends, data pipelines, database performance, and AI integration.",
    "sameAs": [
      "https://www.linkedin.com/in/aakash94/",
      "https://www.toptal.com/developers/resume/aakash-kumar-das#qz8jnk",
      "https://www.codementor.io/@aakashkumardas"
    ],
    "knowsAbout": [
      "Software Architecture",
      "Backend Architecture",
      "Python",
      "Django",
      "Web Scraping",
      "Data Pipelines",
      "LLM Integration",
      "React",
      "PostgreSQL",
      "Distributed Crawlers",
      "Cloud Architecture",
      "Amazon Web Services (AWS)",
      "Database Optimization",
      "AI Engineering"
    ]
  };

  const extraJsonLd = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const finalJsonLd = [profileJsonLd, ...extraJsonLd];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
  <meta name="author" content="Aakash Kumar Das" />
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#0b0f19" media="(prefers-color-scheme: dark)" />
  <script>
    (function () {
      var t = null;
      try { t = localStorage.getItem('theme'); } catch (e) {}
      if (t !== 'light' && t !== 'dark') t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>

  <!-- Open Graph / Social Sharing -->
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${finalOgImage}" />
  <meta property="og:site_name" content="Aakash Das" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${canonicalUrl}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${finalOgImage}" />

  <!-- Favicon & Touch Icons -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />

  <!-- Preload critical CSS -->
  <link rel="stylesheet" href="/assets/css/style.css" />

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(finalJsonLd, null, 2)}
  </script>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- Header -->
  <header class="site-header" role="banner">
    <div class="container header-inner">
      <a href="/" class="brand" aria-label="Aakash Das — Home">
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          ${renderLogoSvg()}
          <div>
            <span class="brand-name">Aakash Das</span>
            <span class="brand-title">Software Architect</span>
          </div>
        </div>
      </a>

      <div class="header-actions">
      <button type="button" class="theme-toggle" aria-label="Toggle dark mode">
        <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>
        <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>
      </button>
          <button class="mobile-nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        </div>

      <nav id="primary-nav" class="nav-menu" role="navigation" aria-label="Primary navigation">
        <a href="/#work" class="nav-link">Work</a>
        <a href="/#testimonials" class="nav-link">Reviews</a>
        <a href="/#how-i-work" class="nav-link">Process</a>
        <a href="/#experience" class="nav-link">Experience</a>
        <a href="/#contact" class="nav-link">Contact</a>
        <div class="nav-cta">
          <a href="mailto:aakashjsr@gmail.com?subject=Project%20inquiry" class="btn btn-primary btn-sm">Discuss a project</a>
        </div>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main id="main" role="main">
    ${content}
  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          ${renderLogoSvg()}
          <div>
            <div style="font-weight: 700; color: var(--text-main);">Aakash Das</div>
            <div style="font-size: 0.8125rem; color: var(--text-subtle);">Software Architect &bull; Staff Engineer</div>
          </div>
        </div>
        <ul class="footer-links" aria-label="External professional links">
          <li><a href="https://www.linkedin.com/in/aakash94/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.toptal.com/developers/resume/aakash-kumar-das#qz8jnk" target="_blank" rel="noopener noreferrer">Toptal (Top 3%)</a></li>
          <li><a href="https://www.codementor.io/@aakashkumardas" target="_blank" rel="noopener noreferrer">Codementor (70 &#9733; reviews)</a></li>
          <li><a href="mailto:aakashjsr@gmail.com">aakashjsr@gmail.com</a></li>
        </ul>
      </div>
      ${
        services.length
          ? `<div class="footer-services">
        <span class="footer-services-label">Services</span>
        <ul class="footer-links" aria-label="Services">
          ${services.map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join("")}
        </ul>
      </div>`
          : ""
      }
      <div class="footer-bottom">
        <div>&copy; ${new Date().getFullYear()} Aakash Kumar Das. All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Client JavaScript -->
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = layout;
