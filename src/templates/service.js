/**
 * Service Landing Page Template
 * One page per service, targeting a single search intent and linking to proof.
 */

function serviceTemplate(service, allServices, caseStudies, profile) {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(service.name + " inquiry")}`;
  const projects = service.caseSlugs
    .map((slug) => caseStudies.find((p) => p.slug === slug))
    .filter(Boolean);
  const others = allServices.filter((s) => s.slug !== service.slug);

  return `
    <article class="case-study-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>&rsaquo;</span>
          <span>Services</span>
          <span>&rsaquo;</span>
          <span style="color:var(--text-main);font-weight:600;">${service.name}</span>
        </nav>
        <div style="max-width: 820px;">
          <h1 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem;">${service.h1}</h1>
          <p style="font-size: 1.2rem; color: var(--text-muted); line-height: 1.6;">${service.lead}</p>
          <div class="hero-actions" style="margin-top: 1.75rem;">
            <a href="${mailto}" class="btn btn-primary">Discuss your project</a>
            <a href="${profile.toptalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Toptal profile</a>
          </div>
        </div>
      </div>
    </article>

    <div class="container" style="max-width: 900px; padding: 3.5rem 1.5rem;">
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">What I deliver</h2>
        <ul class="highlights-list">
          ${service.deliver.map((d) => `<li>${d}</li>`).join("")}
        </ul>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">When to hire me</h2>
        <ul class="results-list">
          ${service.whenToHire.map((d) => `<li>${d}</li>`).join("")}
        </ul>
      </section>

      ${
        projects.length
          ? `<section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Relevant work</h2>
        <div class="projects-archive-grid">
          ${projects
            .map(
              (p) => `
          <div class="archive-card">
            <div>
              <div class="archive-card-header">
                <span class="badge badge-outline" style="font-size:0.7rem;margin-bottom:0.5rem;">${p.category}</span>
                <h3 class="archive-card-title"><a href="/project/${p.slug}/">${p.title}</a></h3>
                <div style="font-size:0.85rem;color:var(--text-subtle);">${p.subtitle}</div>
              </div>
              <p style="font-size:0.875rem;margin-bottom:1rem;">${p.verifiedResults[0]}</p>
            </div>
            <a href="/project/${p.slug}/" class="btn btn-secondary btn-sm" style="width:100%;">Read case study &rarr;</a>
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Frequently asked questions</h2>
        ${service.faqs
          .map(
            (f) => `
        <div style="margin-bottom: 1.25rem;">
          <h3 style="font-size: 1.05rem; margin-bottom: 0.35rem;">${f.q}</h3>
          <p style="color: var(--text-muted);">${f.a}</p>
        </div>`
          )
          .join("")}
      </section>

      <section style="padding: 2rem; border: 1px solid var(--border-light); border-radius: var(--radius-lg); background: var(--bg-secondary);">
        <h2 style="font-size: 1.35rem; margin-bottom: 0.5rem;">Let's talk about your project</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.25rem;">Email a few lines on your goals, stack, and timeline. I reply within 24 hours.</p>
        <a href="${mailto}" class="btn btn-primary">Email ${profile.email}</a>
      </section>

      <nav aria-label="Other services" style="margin-top: 3rem;">
        <h2 style="font-size: 1.1rem; margin-bottom: 0.75rem;">Other services</h2>
        <div class="service-grid service-grid-compact">
          ${others
            .map(
              (s) => `
            <a href="/services/${s.slug}/" class="service-card">
              <span class="service-card-title">${s.name}</span>
              <span class="service-card-desc">${s.summary}</span>
              <span class="service-card-link">Learn more &rarr;</span>
            </a>`
            )
            .join("")}
        </div>
      </nav>
    </div>
  `;
}

module.exports = serviceTemplate;
