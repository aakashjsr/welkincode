/**
 * Case Study Detail Page Template
 */

function caseStudyTemplate(project, allProjects) {
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return `
    <article class="case-study-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>&rsaquo;</span>
          <a href="/#work">Case Studies</a>
          <span>&rsaquo;</span>
          <span style="color:var(--text-main);font-weight:600;">${project.title}</span>
        </nav>

        <div style="max-width: 820px;">
          <div class="case-meta" style="margin-bottom: 1rem;">
            <span class="badge badge-outline">${project.projectType}</span>
            <span class="badge badge-outline">${project.category}</span>
            <span class="badge badge-metric">${project.verifiedResults[0].split(",")[0]}</span>
          </div>
          <h1 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 0.75rem;">${project.title}</h1>
          <p style="font-size: 1.2rem; color: var(--text-muted); line-height: 1.5;">${project.subtitle}</p>
        </div>
      </div>
    </article>

    <div class="container">
      <div class="case-study-grid">
        <!-- Main Column -->
        <div class="case-study-main">
          <!-- Hero Image -->
          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); aspect-ratio: 16/9; background-color: var(--bg-secondary);">
            <img
              src="${project.heroImage}"
              alt="Hero screenshot for ${project.title}"
              style="width: 100%; height: 100%; object-fit: cover;"
              width="800"
              height="450"
              fetchpriority="high"
            />
          </div>

          <!-- Section: Client Context -->
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.75rem;">Client Context &amp; Objectives</h2>
            <p style="font-size: 1.05rem;">${project.clientContext}</p>
          </div>

          <!-- Section: The Problem -->
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.75rem;">The Core Technical Challenge</h2>
            <p style="font-size: 1.05rem;">${project.problem}</p>
          </div>

          <!-- Section: Approach & Role -->
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.75rem;">My Role &amp; Architectural Approach</h2>
            <p style="font-size: 1.05rem; margin-bottom: 1rem;"><strong>Role:</strong> ${project.role}</p>
            <p style="font-size: 1.05rem;">${project.approach}</p>
          </div>

          <!-- Section: Verified Results -->
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Verified Results &amp; Business Impact</h2>
            <ul class="results-list">
              ${project.verifiedResults.map((r) => `<li>${r}</li>`).join("")}
            </ul>
          </div>

          <!-- Section: Key Engineering Highlights -->
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Engineering Highlights</h2>
            <ul class="highlights-list">
              ${project.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
          </div>

          <!-- Gallery Section -->
          ${
            project.gallery && project.gallery.length > 1
              ? `
            <div class="gallery-section">
              <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">System Interface &amp; Workflow Gallery</h2>
              <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1rem;">Click any screenshot to expand.</p>
              <div class="gallery-grid">
                ${project.gallery
                  .slice(1)
                  .map(
                    (img, idx) => `
                  <div class="gallery-item">
                    <img
                      src="${img}"
                      alt="${project.title} screenshot ${idx + 2}"
                      class="gallery-img"
                      width="400"
                      height="225"
                      loading="lazy"
                    />
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }

          <!-- Pagination between projects -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 2.5rem; margin-top: 2rem; border-top: 1px solid var(--border-light); flex-wrap: wrap; gap: 1rem;">
            <a href="/project/${prevProject.slug}/" class="btn btn-secondary btn-sm">
              &larr; Previous: ${prevProject.title}
            </a>
            <a href="/#work" class="btn btn-secondary btn-sm">
              All Case Studies
            </a>
            <a href="/project/${nextProject.slug}/" class="btn btn-secondary btn-sm">
              Next: ${nextProject.title} &rarr;
            </a>
          </div>
        </div>

        <!-- Sidebar Column -->
        <aside class="case-study-sidebar">
          <!-- Stack Card -->
          <div class="sidebar-card">
            <h3 class="sidebar-title">Technology Stack</h3>
            <div class="skill-pills">
              ${project.stack.map((t) => `<span class="skill-pill">${t}</span>`).join("")}
            </div>
          </div>

          <!-- Testimonial Card (if exists) -->
          ${
            project.testimonial
              ? `
            <div class="sidebar-card" style="border-left: 3px solid var(--color-accent);">
              <h3 class="sidebar-title">Client Endorsement</h3>
              <blockquote style="font-style: italic; font-size: 0.9375rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
                &ldquo;${project.testimonial.quote}&rdquo;
              </blockquote>
              <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-main);">
                ${project.testimonial.author}
              </div>
              <div style="font-size: 0.8125rem; color: var(--text-subtle);">
                ${project.testimonial.title}, ${project.testimonial.company}
              </div>
            </div>
          `
              : ""
          }

          <!-- Contact CTA Card -->
          <div class="sidebar-card" style="background-color: var(--color-accent-subtle); border-color: var(--color-accent-border);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">
              Facing a Similar Challenge?
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem;">
              Whether you need architecture design, a performance overhaul, or full-stack delivery, let's talk about your project goals.
            </p>
            <a href="mailto:aakashjsr@gmail.com?subject=Project%20inquiry" class="btn btn-primary btn-sm" style="width: 100%;">
              Discuss Your Project
            </a>
          </div>
        </aside>
      </div>
    </div>
  `;
}

module.exports = caseStudyTemplate;
