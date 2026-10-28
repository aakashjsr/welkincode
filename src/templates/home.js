/**
 * Homepage Template
 */

function homeTemplate(data) {
  const mailto = `mailto:${data.profile.email}?subject=${encodeURIComponent("Project inquiry")}`;
  const { profile, trustBadges, proofPoints, methodology, caseStudies, experience, testimonials, skills } = data;

  const featuredProjects = caseStudies.filter((p) => p.featured);
  const archiveProjects = caseStudies.filter((p) => !p.featured);

  return `
    <!-- Hero Section -->
    <section class="hero-section" id="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="status-dot" style="display:inline-block;width:8px;height:8px;background:#059669;border-radius:50%;"></span>
              Staff Software Engineer &bull; Systems Architect
            </div>
            <h1 class="hero-headline">${profile.hero.headline}</h1>
            <p class="hero-subheadline">${profile.hero.subheadline}</p>

            <div class="hero-actions">
              <a href="${mailto}" class="btn btn-primary">${profile.hero.primaryCta}</a>
              <a href="#work" class="btn btn-secondary">${profile.hero.secondaryCta}</a>
            </div>
          </div>

          <aside class="hero-aside">
            <div class="profile-card">
              <div class="profile-img-wrap">
                <img
                  src="/assets/images/aakash-kumar-das.jpeg"
                  alt="Aakash Das — Software Architect"
                  class="profile-img"
                  width="160"
                  height="160"
                  fetchpriority="high"
                />
                <span class="status-indicator" title="Available for select consulting"></span>
              </div>
              <div class="profile-name">Aakash Das</div>
              <div class="profile-title">Software Architect</div>
              <div class="profile-company">ServiceNow &bull; Toptal Top 3%</div>
              <div class="profile-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Available for Remote Client Work
              </div>
            </div>

          </aside>
        </div>

        <!-- Trust Badges Strip -->
        <div class="trust-strip">
          ${trustBadges
            .map(
              (badge) => `
            <div class="trust-item">
              <span class="trust-item-label">${badge.label}</span>
              <span class="trust-item-detail">${badge.detail}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Selected Work / Featured Case Studies -->
    <section class="section" id="work">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">Proven Results</div>
          <h2 class="section-title">Selected Case Studies</h2>
          <p class="section-desc">
            Deep-dive examples of client consulting partnerships where business problems were solved with pragmatic architecture, resilient data pipelines, and clean execution.
          </p>
        </div>

        <div class="case-studies-grid">
          ${featuredProjects
            .map(
              (project) => `
            <article class="case-card">
              <div class="case-card-img-wrap">
                <a href="/project/${project.slug}/" style="display:block;width:100%;height:100%;" tabindex="-1" aria-hidden="true">
                  <img
                    src="${project.heroImage}"
                    alt="Platform screenshot of ${project.title}"
                    class="case-card-img"
                    width="600"
                    height="350"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="case-card-body">
                <div>
                  <div class="case-meta">
                    <span class="badge badge-outline">${project.projectType}</span>
                    <span class="badge badge-metric">${project.verifiedResults[0].split(",")[0]}</span>
                  </div>
                  <h3 class="case-title">
                    <a href="/project/${project.slug}/">${project.title}</a>
                  </h3>
                  <div class="case-subtitle">${project.subtitle}</div>

                  <div class="case-sections">
                  <div class="case-section-item">
                    <div class="case-label">Problem &amp; Context</div>
                    <p style="font-size:0.9375rem;">${project.problem}</p>
                  </div>

                  <div class="case-section-item">
                    <div class="case-label">My Role &amp; Approach</div>
                    <p style="font-size:0.9375rem;">${project.approach}</p>
                  </div>
                  </div>

                  ${
                    project.testimonial
                      ? `
                    <div class="case-quote-box">
                      &ldquo;${project.testimonial.quote}&rdquo;
                      <span class="case-quote-author">&mdash; ${project.testimonial.author}, ${project.testimonial.title}, ${project.testimonial.company}</span>
                    </div>
                  `
                      : ""
                  }
                </div>

                <div>
                  <div class="case-tech-stack">
                    ${project.stack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
                  </div>
                  <a href="/project/${project.slug}/" class="btn btn-secondary btn-sm" aria-label="Read full case study for ${project.title}">
                    Read full case study &rarr;
                  </a>
                </div>
              </div>

            </article>
          `
            )
            .join("")}
        </div>

        <!-- Additional Projects Archive Grid -->
        <div style="margin-top: 4.5rem;">
          <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">Other Production Systems</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
            Additional systems, portals, and data architectures built across real estate, developer tooling, academic NLP, and recommerce.
          </p>
          <div class="projects-archive-grid">
            ${archiveProjects
              .map(
                (item) => `
              <div class="archive-card">
                <div>
                  <div class="archive-card-header">
                    <span class="badge badge-outline" style="font-size:0.7rem;margin-bottom:0.5rem;">${item.category}</span>
                    <h4 class="archive-card-title">
                      <a href="/project/${item.slug}/">${item.title}</a>
                    </h4>
                    <div style="font-size:0.85rem;color:var(--text-subtle);">${item.subtitle}</div>
                  </div>
                  <p style="font-size:0.875rem;margin-bottom:1rem;">${item.problem}</p>
                </div>
                <div>
                  <div class="case-tech-stack" style="margin-bottom:1rem;">
                    ${item.stack.slice(0, 4).map((t) => `<span class="tech-tag">${t}</span>`).join("")}
                  </div>
                  <a href="/project/${item.slug}/" class="btn btn-secondary btn-sm" style="width:100%;">
                    View Details &rarr;
                  </a>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- How I Work -->
    <section class="section section-alt" id="how-i-work">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">Engagement Process</div>
          <h2 class="section-title">How I Work With Clients</h2>
          <p class="section-desc">
            Senior engineering consulting is not just about writing code—it is about reducing uncertainty, choosing sustainable architectures, and ensuring your internal team can operate smoothly long after delivery.
          </p>
        </div>

        <div class="methodology-grid">
          ${methodology
            .map(
              (step) => `
            <div class="methodology-card">
              <div class="methodology-step">${step.step}</div>
              <h3 class="methodology-title">${step.title}</h3>
              <p class="methodology-desc">${step.description}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Architectural Proof Points & Selected Metrics -->
    <section class="section" id="impact">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">By the Numbers</div>
          <h2 class="section-title">Measured Impact</h2>
          <p class="section-desc">
            Achievements and metrics across venture delivery, distributed data systems, query tuning, and pragmatic AI implementations.
          </p>
        </div>

        <div class="proof-grid">
          ${proofPoints
            .map(
              (pt) => `
            <div class="proof-card">
              <div class="proof-category">${pt.category}</div>
              <div class="proof-metric">${pt.metric}</div>
              <h3 class="proof-title">${pt.title}</h3>
              <p class="proof-desc">${pt.description}</p>
              ${pt.note ? `<div class="proof-note">${pt.note}</div>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Experience Section (Enterprise vs. Consulting Clearly Separated) -->
    <section class="section section-alt" id="experience">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">Career &amp; Practice</div>
          <h2 class="section-title">Experience &amp; Track Record</h2>
          <p class="section-desc">
            A career combining enterprise engineering rigor at ServiceNow with independent startup consulting speed.
          </p>
        </div>

        <div class="experience-list">
          ${experience
            .map(
              (exp) => `
            <div class="experience-item">
              <img
                src="${exp.logo}"
                alt="${exp.company} logo"
                class="experience-logo"
                width="48"
                height="48"
                loading="lazy"
              />
              <div class="experience-details">
                <div class="experience-role-row">
                  <span class="experience-role">${exp.role}</span>
                  <span class="experience-company">@ ${exp.company}</span>
                  <span class="experience-tag">${exp.type}</span>
                </div>
                <p class="experience-desc">${exp.description}</p>
                ${
                  exp.confidentialityNote
                    ? `<div class="experience-confidentiality">&bull; ${exp.confidentialityNote}</div>`
                    : ""
                }
              </div>
              <div class="experience-tenure">${exp.tenure}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Pragmatic Technology & Stack -->
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">Technical Capabilities</div>
          <h2 class="section-title">Pragmatic Technology Stack</h2>
          <p class="section-desc">
            I select battle-tested, maintainable tools directly aligned with system reliability, developer velocity, and long-term maintainability.
          </p>
        </div>

        <div class="skills-grid">
          ${skills
            .map(
              (group) => `
            <div class="skill-category-card">
              <h3 class="skill-category-title">${group.category}</h3>
              <div class="skill-pills">
                ${group.items.map((skill) => `<span class="skill-pill">${skill}</span>`).join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="section section-alt" id="testimonials">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">Client Feedback</div>
          <h2 class="section-title">Endorsements from Founders &amp; Leaders</h2>
          <p class="section-desc">
            Direct feedback from CEOs, founders, and research partners who have worked with me on production systems.
          </p>
        </div>

        <div class="testimonials-grid${testimonials.length > 6 ? " is-collapsed" : ""}" id="testimonials-grid">
          ${testimonials
            .map(
              (item, i) => `
            <div class="testimonial-card${i >= 6 ? " is-extra" : ""}">
              <p class="testimonial-quote">&ldquo;${item.quote}&rdquo;</p>
              <div class="testimonial-author-row">
                <div class="author-avatar">${item.avatarInitials}</div>
                <div class="author-meta">
                  <span class="author-name">${item.author}</span>
                  <span class="author-title">${item.title}, ${item.company}</span>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        ${
          testimonials.length > 6
            ? `<noscript><style>.testimonials-grid .is-extra{display:flex !important}.js-toggle-testimonials{display:none}</style></noscript>
        <div style="text-align:center;margin-top:2rem;">
          <button type="button" class="btn btn-secondary js-toggle-testimonials" aria-expanded="false" aria-controls="testimonials-grid">
            Show ${testimonials.length - 6} more reviews
          </button>
        </div>`
            : ""
        }
      </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
      <div class="container" style="max-width: 860px;">
        <div class="section-header">
          <div class="section-eyebrow">Background</div>
          <h2 class="section-title">About Me</h2>
        </div>

        <div style="font-size: 1.05rem; line-height: 1.75; color: var(--text-muted);">
          ${profile.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
        </div>

        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="${profile.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74V9.92H5.06v8.58h2.8Z"/>
            </svg>
            Connect on LinkedIn
          </a>
          <a href="${profile.toptalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            Verified Toptal Profile
          </a>
          ${
            profile.upworkUrl
              ? `<a href="${profile.upworkUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            Upwork &middot; ${profile.upworkReviews} reviews
          </a>`
              : ""
          }
          <a href="${mailto}" class="btn btn-primary">
            Discuss a Project
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div>
              <div class="section-eyebrow">Get In Touch</div>
              <h2 class="section-title">Let's Discuss Your Project</h2>
              <p class="section-desc" style="font-size: 1rem;">
                Whether you need technical architecture for a greenfield venture, an audit and optimization of an existing system, or senior full-stack execution, I am happy to connect.
              </p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1rem;">
              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="contact-method-text">
                  <span class="contact-method-label">Direct Email</span>
                  <a href="mailto:${profile.email}" class="contact-method-val">${profile.email}</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div class="contact-method-text">
                  <span class="contact-method-label">LinkedIn</span>
                  <a href="${profile.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="contact-method-val">linkedin.com/in/aakash94</a>
                </div>
              </div>

              ${
                profile.upworkUrl
                  ? `<div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21 7.5 13.5 2 9h7z"></path>
                  </svg>
                </div>
                <div class="contact-method-text">
                  <span class="contact-method-label">Upwork</span>
                  <a href="${profile.upworkUrl}" target="_blank" rel="noopener noreferrer" class="contact-method-val">${profile.upworkReviews} reviews</a>
                </div>
              </div>`
                  : ""
              }

              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div class="contact-method-text">
                  <span class="contact-method-label">Typical Response Time</span>
                  <span class="contact-method-val">Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-card">
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Send a Direct Note</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem;">
              Email me a few lines on your project, current stack, and timeline. I will reply within 24 hours.
            </p>
            <a href="${mailto}" class="btn btn-primary" style="width: 100%; padding: 0.85rem;">
              Email ${profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

module.exports = homeTemplate;
