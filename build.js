/**
 * Static Site Builder for Aakash Kumar Das's Portfolio
 * Compiles semantic HTML pages, sitemap, redirects, and assets into dist/
 */

const fs = require("fs");
const path = require("path");

const portfolioData = require("./src/data/portfolioData");
const layout = require("./src/templates/layout");
const homeTemplate = require("./src/templates/home");
const caseStudyTemplate = require("./src/templates/caseStudy");
const notFoundTemplate = require("./src/templates/notFound");
const serviceTemplate = require("./src/templates/service");
const services = require("./src/data/services");
const { loadPosts } = require("./src/blog/posts");
const { blogIndexTemplate, blogPostTemplate, esc } = require("./src/templates/blog");

// Trim text to a search-snippet length at a word boundary
function trimDescription(text, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

function breadcrumbJsonLd(siteUrl, crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteUrl}${c.path}`,
    })),
  };
}

const DIST_DIR = path.join(__dirname, "dist");

// Recursive copy helper
function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function build() {
  console.log("⚡ Starting static site compilation...");

  // 1. Ensure dist/ exists and clean old build
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 2. Generate Homepage
  console.log("📄 Generating Homepage (dist/index.html)...");
  const siteUrl = portfolioData.profile.siteUrl;
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Aakash Das",
      alternateName: "Aakash Kumar Das",
      url: siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Aakash Das — Independent Software Architect",
      url: siteUrl,
      image: `${siteUrl}/assets/images/aakash-kumar-das.jpeg`,
      areaServed: "Worldwide",
      email: portfolioData.profile.email,
      founder: { "@type": "Person", name: "Aakash Das" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, url: `${siteUrl}/services/${s.slug}/` },
        })),
      },
    },
  ];
  const homeHtml = layout({
    title: "Aakash Das (Aakash Kumar Das) | Python & Django Software Architect",
    description:
      "Aakash Kumar Das: independent software architect for hire. Python, Django, React, AWS, data pipelines, database tuning and AI integration. Toptal top 3%.",
    canonicalUrl: `${siteUrl}/`,
    siteUrl,
    jsonLd: homeJsonLd,
    services,
    content: homeTemplate(portfolioData, services),
    currentPath: "/",
  });
  fs.writeFileSync(path.join(DIST_DIR, "index.html"), homeHtml, "utf8");

  // 3. Generate Case Study Pages
  console.log("📄 Generating Case Study detail pages...");
  portfolioData.caseStudies.forEach((project) => {
    const projectDir = path.join(DIST_DIR, "project", project.slug);
    fs.mkdirSync(projectDir, { recursive: true });

    const caseStudyJsonLd = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: `${project.title} — ${project.subtitle}`,
      description: project.problem,
      author: {
        "@type": "Person",
        name: portfolioData.profile.name,
      },
      image: `${portfolioData.profile.siteUrl}${project.heroImage}`,
      keywords: project.stack.join(", "),
    };

    const caseStudyHtml = layout({
      title: `${project.title}: ${project.subtitle} | Case Study`,
      description: trimDescription(`${project.subtitle}. ${project.verifiedResults[0]} Built with ${project.stack.slice(0, 4).join(", ")}.`),
      services,
      canonicalUrl: `${portfolioData.profile.siteUrl}/project/${project.slug}/`,
      siteUrl: portfolioData.profile.siteUrl,
      ogImage: `${portfolioData.profile.siteUrl}${project.heroImage}`,
      ogType: "article",
      jsonLd: [
        caseStudyJsonLd,
        breadcrumbJsonLd(portfolioData.profile.siteUrl, [
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/#work" },
          { name: project.title, path: `/project/${project.slug}/` },
        ]),
      ],
      content: caseStudyTemplate(project, portfolioData.caseStudies),
      currentPath: `/project/${project.slug}/`,
    });

    fs.writeFileSync(path.join(projectDir, "index.html"), caseStudyHtml, "utf8");
    console.log(`   ✓ /project/${project.slug}/`);
  });

  // 3b. Generate Service Landing Pages
  console.log("📄 Generating Service pages...");
  services.forEach((service) => {
    const dir = path.join(DIST_DIR, "services", service.slug);
    fs.mkdirSync(dir, { recursive: true });
    const url = `${siteUrl}/services/${service.slug}/`;
    const html = layout({
      title: service.title,
      description: service.description,
      canonicalUrl: url,
      siteUrl,
      services,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          url,
          areaServed: "Worldwide",
          provider: { "@type": "Person", name: portfolioData.profile.name, url: siteUrl },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        breadcrumbJsonLd(siteUrl, [
          { name: "Home", path: "/" },
          { name: service.name, path: `/services/${service.slug}/` },
        ]),
      ],
      content: serviceTemplate(service, services, portfolioData.caseStudies, portfolioData.profile),
      currentPath: `/services/${service.slug}/`,
    });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
    console.log(`   ✓ /services/${service.slug}/`);
  });

  // 3c. Generate Blog (index, posts, RSS)
  const posts = loadPosts();
  if (posts.length) {
    console.log("📝 Generating Blog pages...");
    const blogDir = path.join(DIST_DIR, "blog");
    fs.mkdirSync(blogDir, { recursive: true });

    fs.writeFileSync(
      path.join(blogDir, "index.html"),
      layout({
        title: "Blog | Aakash Das",
        description: "Notes on Python, Django, data pipelines and software architecture by Aakash Das.",
        canonicalUrl: `${siteUrl}/blog/`,
        siteUrl,
        services,
        jsonLd: [
          { "@context": "https://schema.org", "@type": "Blog", name: "Aakash Das — Blog", url: `${siteUrl}/blog/` },
          breadcrumbJsonLd(siteUrl, [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
          ]),
        ],
        content: blogIndexTemplate(posts),
        currentPath: "/blog/",
      }),
      "utf8"
    );
    console.log("   ✓ /blog/");

    posts.forEach((post) => {
      const dir = path.join(blogDir, post.slug);
      fs.mkdirSync(dir, { recursive: true });
      const url = `${siteUrl}/blog/${post.slug}/`;
      fs.writeFileSync(
        path.join(dir, "index.html"),
        layout({
          title: esc(`${post.title} | Aakash Das`),
          description: esc(trimDescription(post.description)),
          canonicalUrl: url,
          siteUrl,
          ogType: "article",
          ogImage: post.image ? `${siteUrl}${post.image}` : null,
          noindex: post.draft,
          services,
          jsonLd: [
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.dateIso,
              dateModified: post.dateIso,
              mainEntityOfPage: url,
              keywords: post.tags.join(", "),
              ...(post.image ? { image: `${siteUrl}${post.image}` } : {}),
              author: { "@type": "Person", name: portfolioData.profile.name, url: siteUrl },
            },
            breadcrumbJsonLd(siteUrl, [
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog/" },
              { name: post.title, path: `/blog/${post.slug}/` },
            ]),
          ],
          content: blogPostTemplate(post),
          currentPath: `/blog/${post.slug}/`,
        }),
        "utf8"
      );
      console.log(`   ✓ /blog/${post.slug}/`);
    });

    const xml = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aakash Das — Blog</title>
    <link>${siteUrl}/blog/</link>
    <description>Notes on Python, Django, data pipelines and software architecture.</description>
    <language>en</language>
    <lastBuildDate>${posts[0].date.toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${posts
  .map(
    (p) => `    <item>
      <title>${xml(p.title)}</title>
      <link>${siteUrl}/blog/${p.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/blog/${p.slug}/</guid>
      <pubDate>${p.date.toUTCString()}</pubDate>
      <description>${xml(p.description)}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;
    fs.writeFileSync(path.join(DIST_DIR, "rss.xml"), rss, "utf8");
  }

  // Legacy route compatibility: /project/source_box -> /project/sourcebox
  const legacySourceBoxDir = path.join(DIST_DIR, "project", "source_box");
  fs.mkdirSync(legacySourceBoxDir, { recursive: true });
  const sourceboxProject = portfolioData.caseStudies.find((p) => p.slug === "sourcebox");
  if (sourceboxProject) {
    const legacyHtml = layout({
      title: `${sourceboxProject.title} — Architecture Case Study | ${portfolioData.profile.name}`,
      description: `${sourceboxProject.subtitle}. Problem: ${sourceboxProject.problem}`,
      canonicalUrl: `${portfolioData.profile.siteUrl}/project/sourcebox/`,
      siteUrl: portfolioData.profile.siteUrl,
      noindex: true,
      services,
      content: caseStudyTemplate(sourceboxProject, portfolioData.caseStudies),
      currentPath: `/project/sourcebox/`,
    });
    fs.writeFileSync(path.join(legacySourceBoxDir, "index.html"), legacyHtml, "utf8");
  }

  // 4. Generate 404 Page
  console.log("📄 Generating Custom 404 Page (dist/404.html)...");
  const notFoundHtml = layout({
    title: `Page Not Found (404) | ${portfolioData.profile.name}`,
    description: "The page you are looking for does not exist.",
    canonicalUrl: `${portfolioData.profile.siteUrl}/404.html`,
    siteUrl: portfolioData.profile.siteUrl,
    noindex: true,
    services,
    content: notFoundTemplate(),
    currentPath: "/404.html",
  });
  fs.writeFileSync(path.join(DIST_DIR, "404.html"), notFoundHtml, "utf8");

  // 5. Generate XML Sitemap
  console.log("🗺️  Generating Sitemap (dist/sitemap.xml)...");
  const currentDate = new Date().toISOString().split("T")[0];
  const sitemapUrls = [
    `  <url>\n    <loc>${portfolioData.profile.siteUrl}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
    ...services.map(
      (s) =>
        `  <url>\n    <loc>${portfolioData.profile.siteUrl}/services/${s.slug}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>`
    ),
    ...portfolioData.caseStudies.map(
      (p) =>
        `  <url>\n    <loc>${portfolioData.profile.siteUrl}/project/${p.slug}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    ),
    ...(posts.length
      ? [
          `  <url>\n    <loc>${siteUrl}/blog/</loc>\n    <lastmod>${posts[0].dateIso}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
          ...posts
            .filter((p) => !p.draft)
            .map(
              (p) =>
                `  <url>\n    <loc>${siteUrl}/blog/${p.slug}/</loc>\n    <lastmod>${p.dateIso}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
            ),
        ]
      : []),
  ];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf8");

  // 6. Generate robots.txt
  console.log("🤖 Generating robots.txt (dist/robots.txt)...");
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${portfolioData.profile.siteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robotsTxt, "utf8");

  // 7. Generate Cloudflare Pages _redirects file
  console.log("🔀 Generating Cloudflare Pages redirects (dist/_redirects)...");
  const redirects = `/project/source_box /project/sourcebox 301
/project/source_box/ /project/sourcebox/ 301
`;
  fs.writeFileSync(path.join(DIST_DIR, "_redirects"), redirects, "utf8");

  // 8. Copy Assets
  console.log("📦 Copying CSS, JS, and image assets...");
  const assetsDir = path.join(DIST_DIR, "assets");
  fs.mkdirSync(path.join(assetsDir, "css"), { recursive: true });
  fs.mkdirSync(path.join(assetsDir, "js"), { recursive: true });
  fs.mkdirSync(path.join(assetsDir, "images"), { recursive: true });

  // CSS & JS
  fs.copyFileSync(
    path.join(__dirname, "src", "styles", "main.css"),
    path.join(assetsDir, "css", "style.css")
  );
  fs.copyFileSync(
    path.join(__dirname, "src", "scripts", "main.js"),
    path.join(assetsDir, "js", "main.js")
  );

  // Favicon SVG & Profile Photo
  fs.copyFileSync(
    path.join(__dirname, "src", "assets", "images", "favicon.svg"),
    path.join(assetsDir, "images", "favicon.svg")
  );
  fs.copyFileSync(
    path.join(__dirname, "src", "assets", "images", "aakash-kumar-das.jpeg"),
    path.join(assetsDir, "images", "aakash-kumar-das.jpeg")
  );

  // Favicon & manifest from public/
  if (fs.existsSync(path.join(__dirname, "public", "favicon.svg"))) {
    fs.copyFileSync(
      path.join(__dirname, "public", "favicon.svg"),
      path.join(DIST_DIR, "favicon.svg")
    );
  }
  if (fs.existsSync(path.join(__dirname, "public", "favicon.ico"))) {
    fs.copyFileSync(
      path.join(__dirname, "public", "favicon.ico"),
      path.join(DIST_DIR, "favicon.ico")
    );
  }
  if (fs.existsSync(path.join(__dirname, "public", "apple-touch-icon.png"))) {
    fs.copyFileSync(
      path.join(__dirname, "public", "apple-touch-icon.png"),
      path.join(DIST_DIR, "apple-touch-icon.png")
    );
  }
  if (fs.existsSync(path.join(__dirname, "public", "manifest.json"))) {
    fs.copyFileSync(
      path.join(__dirname, "public", "manifest.json"),
      path.join(DIST_DIR, "manifest.json")
    );
  }

  // Portfolio Images
  copyRecursiveSync(
    path.join(__dirname, "src", "assets", "images", "portfolio"),
    path.join(assetsDir, "images", "portfolio")
  );

  // Blog images (referenced from posts as /assets/images/blog/<file>)
  copyRecursiveSync(
    path.join(__dirname, "src", "content", "blog", "images"),
    path.join(assetsDir, "images", "blog")
  );

  // Company Logos
  copyRecursiveSync(
    path.join(__dirname, "src", "assets", "images", "company"),
    path.join(assetsDir, "images", "company")
  );

  console.log("✅ Static site successfully built in dist/ directory!");
}

build();
