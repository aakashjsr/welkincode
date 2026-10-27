/**
 * 404 Page Template
 */

function notFoundTemplate() {
  return `
    <div class="container" style="padding: 6rem 1.5rem; text-align: center; max-width: 640px;">
      <div style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-accent); margin-bottom: 0.75rem;">
        404 &bull; Page Not Found
      </div>
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Looking for Something Specific?</h1>
      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem;">
        The page or project URL you requested does not exist or may have been reorganized. Explore selected architectural case studies or head back to the homepage.
      </p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/" class="btn btn-primary">Return to Homepage</a>
        <a href="/#work" class="btn btn-secondary">Browse Case Studies</a>
      </div>
    </div>
  `;
}

module.exports = notFoundTemplate;
