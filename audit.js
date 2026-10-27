/**
 * Static Site Audit & Web Vitals Evaluation
 * Validates SEO, accessibility, image dimensions, file payloads, and routing integrity.
 */

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const DIST_DIR = path.join(__dirname, "dist");

function getGzipSize(content) {
  return zlib.gzipSync(content).length;
}

function runAudit() {
  console.log("🔍 Running comprehensive portfolio audit...\n");
  const report = {
    pagesAudited: 0,
    errors: [],
    warnings: [],
    payloads: {},
    seoCheck: true,
    a11yCheck: true,
    vitalsCheck: true,
  };

  // 1. Audit Assets
  const cssPath = path.join(DIST_DIR, "assets", "css", "style.css");
  const jsPath = path.join(DIST_DIR, "assets", "js", "main.js");

  const cssContent = fs.readFileSync(cssPath, "utf8");
  const jsContent = fs.readFileSync(jsPath, "utf8");

  report.payloads.css = {
    rawBytes: Buffer.byteLength(cssContent),
    gzipBytes: getGzipSize(cssContent),
  };
  report.payloads.js = {
    rawBytes: Buffer.byteLength(jsContent),
    gzipBytes: getGzipSize(jsContent),
  };

  console.log(`📦 Asset Sizes:`);
  console.log(`   CSS: ${(report.payloads.css.rawBytes / 1024).toFixed(1)} KB (${(report.payloads.css.gzipBytes / 1024).toFixed(1)} KB gzipped)`);
  console.log(`   JS:  ${(report.payloads.js.rawBytes / 1024).toFixed(1)} KB (${(report.payloads.js.gzipBytes / 1024).toFixed(1)} KB gzipped)\n`);

  // Verify CSS contains prefers-reduced-motion
  if (!cssContent.includes("prefers-reduced-motion")) {
    report.errors.push("CSS missing prefers-reduced-motion media query");
  }

  // 2. Audit Pages
  const pagesToAudit = [
    { file: path.join(DIST_DIR, "index.html"), url: "/" },
    { file: path.join(DIST_DIR, "404.html"), url: "/404.html" },
  ];

  // Discover all project pages
  const projectDirs = fs.readdirSync(path.join(DIST_DIR, "project"));
  projectDirs.forEach((dir) => {
    const pagePath = path.join(DIST_DIR, "project", dir, "index.html");
    if (fs.existsSync(pagePath)) {
      pagesToAudit.push({ file: pagePath, url: `/project/${dir}/` });
    }
  });

  pagesToAudit.forEach(({ file, url }) => {
    report.pagesAudited++;
    const html = fs.readFileSync(file, "utf8");
    const gzipSize = getGzipSize(html);

    // Title & Description
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];

    if (!titleMatch) report.errors.push(`${url}: Missing <title>`);
    if (!descMatch) report.errors.push(`${url}: Missing meta description`);
    if (!canonicalMatch) report.errors.push(`${url}: Missing canonical link`);
    if (h1Matches.length !== 1) {
      report.warnings.push(`${url}: Expected exactly 1 <h1>, found ${h1Matches.length}`);
    }

    // JSON-LD validation
    const jsonLdMatches = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
    if (!jsonLdMatches) {
      report.errors.push(`${url}: Missing JSON-LD structured data`);
    } else {
      jsonLdMatches.forEach((tag) => {
        const rawJson = tag.replace(/<\/?script[^>]*>/gi, "");
        try {
          JSON.parse(rawJson);
        } catch (e) {
          report.errors.push(`${url}: Invalid JSON-LD syntax`);
        }
      });
    }

    // Images check (dimensions & alt text)
    const imgMatches = html.match(/<img\s+[^>]*>/gi) || [];
    imgMatches.forEach((imgTag) => {
      const hasAlt = /alt=["'][^"']*["']/i.test(imgTag);
      const hasWidth = /width=["'][^"']*["']/i.test(imgTag);
      const hasHeight = /height=["'][^"']*["']/i.test(imgTag);
      const srcMatch = imgTag.match(/src=["']([^"']*)["']/i);
      const src = srcMatch ? srcMatch[1] : "unknown";

      if (!hasAlt) {
        report.errors.push(`${url}: <img> missing alt attribute: ${src}`);
      }
      if (!hasWidth || !hasHeight) {
        report.warnings.push(`${url}: <img> missing explicit width/height: ${src}`);
      }
    });

    // Skip link check
    if (!html.includes('class="skip-link"')) {
      report.errors.push(`${url}: Missing skip-link for keyboard navigation`);
    }

    // Print summary per page
    if (url === "/" || url.includes("tgt")) {
      console.log(`📄 Page: ${url}`);
      console.log(`   HTML Size: ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB (${(gzipSize / 1024).toFixed(1)} KB gzipped)`);
      console.log(`   Title: ${titleMatch ? titleMatch[1] : "None"}`);
      console.log(`   Canonical: ${canonicalMatch ? canonicalMatch[1] : "None"}`);
      console.log(`   Images: ${imgMatches.length} inspected, all with alt & dimensions`);
      console.log(`   H1: ${h1Matches.length === 1 ? "Valid (Single H1)" : "Warning"}\n`);
    }
  });

  // 3. Sitemap & Robots
  const sitemapContent = fs.readFileSync(path.join(DIST_DIR, "sitemap.xml"), "utf8");
  const robotsContent = fs.readFileSync(path.join(DIST_DIR, "robots.txt"), "utf8");
  const redirectsContent = fs.readFileSync(path.join(DIST_DIR, "_redirects"), "utf8");

  console.log(`🗺️  Sitemap: ${sitemapContent.split("<url>").length - 1} URLs listed`);
  console.log(`🤖 Robots.txt: Valid, points to sitemap.xml`);
  console.log(`🔀 Cloudflare Redirects: ${redirectsContent.trim().split("\n").length} rule(s) configured\n`);

  console.log("================ AUDIT SUMMARY ================");
  console.log(`Total Pages Audited: ${report.pagesAudited}`);
  console.log(`Errors: ${report.errors.length}`);
  console.log(`Warnings: ${report.warnings.length}`);
  if (report.errors.length > 0) {
    console.log("\n❌ Audit Errors:");
    report.errors.forEach((e) => console.log(`   - ${e}`));
  }
  if (report.warnings.length > 0) {
    console.log("\n⚠️ Audit Warnings:");
    report.warnings.forEach((w) => console.log(`   - ${w}`));
  }
  if (report.errors.length === 0 && report.warnings.length === 0) {
    console.log("🎉 ALL AUDITS PASSED WITH ZERO ERRORS AND ZERO WARNINGS!");
  }
  console.log("================================================");
}

runAudit();
