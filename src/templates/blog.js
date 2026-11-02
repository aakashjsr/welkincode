/**
 * Blog templates: index page, post page, subscribe form, comments mount.
 */

const blogConfig = require("../data/blogConfig");

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function subscribeForm() {
  const url = blogConfig.brevoFormUrl;
  if (!url || !url.startsWith("https://")) return "";
  return `
    <section class="subscribe-card" aria-labelledby="subscribe-title">
      <h2 id="subscribe-title">Get new posts by email</h2>
      <p>Occasional writing on Python, Django, data pipelines and architecture. No spam, unsubscribe any time. Prefer a feed reader? Use the <a href="/rss.xml">RSS feed</a>.</p>
      <iframe class="subscribe-frame" src="${esc(url)}" title="Subscribe to the newsletter" loading="lazy" scrolling="no"></iframe>
    </section>`;
}

function commentsMount() {
  const g = blogConfig.giscus;
  if (!g.repo || !g.repoId || !g.categoryId) return "";
  return `
    <section class="comments" aria-label="Comments">
      <h2>Comments</h2>
      <div class="giscus-mount"
        data-repo="${esc(g.repo)}"
        data-repo-id="${esc(g.repoId)}"
        data-category="${esc(g.category)}"
        data-category-id="${esc(g.categoryId)}"></div>
      <noscript>Enable JavaScript to view and post comments (powered by GitHub Discussions).</noscript>
    </section>`;
}

function blogIndexTemplate(posts) {
  const items = posts
    .map(
      (p) => `
      <article class="blog-card">
        ${p.image ? `<a href="/blog/${p.slug}/" tabindex="-1" aria-hidden="true"><img class="blog-card-img" src="${esc(p.image)}" alt="" loading="lazy" /></a>` : ""}
        <div class="blog-meta"><time datetime="${p.dateIso}">${formatDate(p.date)}</time> &middot; ${p.readingMinutes} min read</div>
        <h2><a href="/blog/${p.slug}/">${esc(p.title)}</a></h2>
        <p>${esc(p.description)}</p>
        ${p.tags.length ? `<div class="blog-tags">${p.tags.map((t) => `<span class="badge badge-outline">${esc(t)}</span>`).join("")}</div>` : ""}
      </article>`
    )
    .join("");

  return `
    <section class="section">
      <div class="container blog-container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&rsaquo;</span><span style="color:var(--text-main);font-weight:600;">Blog</span>
        </nav>
        <h1>Blog</h1>
        <p class="blog-lead">Notes on Python, Django, data pipelines and software architecture.</p>
        <div class="blog-list">${items}</div>
        ${subscribeForm()}
      </div>
    </section>`;
}

function blogPostTemplate(post) {
  return `
    <article class="section">
      <div class="container blog-container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&rsaquo;</span><a href="/blog/">Blog</a><span>&rsaquo;</span>
          <span style="color:var(--text-main);font-weight:600;">${esc(post.title)}</span>
        </nav>
        <header class="post-header">
          <h1>${esc(post.title)}</h1>
          <div class="blog-meta">By Aakash Das &middot; <time datetime="${post.dateIso}">${formatDate(post.date)}</time> &middot; ${post.readingMinutes} min read</div>
        </header>
        ${post.image ? `<figure class="post-cover"><img src="${esc(post.image)}" alt="" fetchpriority="high" /></figure>` : ""}
        <div class="prose">${post.html}</div>
        ${subscribeForm()}
        ${commentsMount()}
      </div>
    </article>`;
}

module.exports = { blogIndexTemplate, blogPostTemplate, esc };
