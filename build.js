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
  const homeHtml = layout({
    title: `${portfolioData.profile.name} — Software Architect`,
    description: `${portfolioData.profile.name} is a Software Architect and Staff Engineer at ServiceNow with close to a decade of experience designing scalable backend architectures and pragmatic full-stack systems.`,
    canonicalUrl: `${portfolioData.profile.siteUrl}/`,
    siteUrl: portfolioData.profile.siteUrl,
    content: homeTemplate(portfolioData),
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
      title: `${project.title} — Architecture Case Study | ${portfolioData.profile.name}`,
      description: `${project.subtitle}. Problem: ${project.problem} Stack: ${project.stack.join(", ")}.`,
      canonicalUrl: `${portfolioData.profile.siteUrl}/project/${project.slug}/`,
      siteUrl: portfolioData.profile.siteUrl,
      ogImage: `${portfolioData.profile.siteUrl}${project.heroImage}`,
      ogType: "article",
      jsonLd: caseStudyJsonLd,
      content: caseStudyTemplate(project, portfolioData.caseStudies),
      currentPath: `/project/${project.slug}/`,
    });

    fs.writeFileSync(path.join(projectDir, "index.html"), caseStudyHtml, "utf8");
    console.log(`   ✓ /project/${project.slug}/`);
  });

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
    content: notFoundTemplate(),
    currentPath: "/404.html",
  });
  fs.writeFileSync(path.join(DIST_DIR, "404.html"), notFoundHtml, "utf8");

  // 5. Generate XML Sitemap
  console.log("🗺️  Generating Sitemap (dist/sitemap.xml)...");
  const currentDate = new Date().toISOString().split("T")[0];
  const sitemapUrls = [
    `  <url>\n    <loc>${portfolioData.profile.siteUrl}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
    ...portfolioData.caseStudies.map(
      (p) =>
        `  <url>\n    <loc>${portfolioData.profile.siteUrl}/project/${p.slug}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    ),
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

  // Company Logos
  copyRecursiveSync(
    path.join(__dirname, "src", "assets", "images", "company"),
    path.join(assetsDir, "images", "company")
  );

  console.log("✅ Static site successfully built in dist/ directory!");
}

build();
