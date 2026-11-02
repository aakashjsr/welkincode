/**
 * Loads Markdown posts from src/content/blog/*.md.
 *
 * Each file starts with a front matter block:
 *   ---
 *   title: Post title
 *   description: One or two sentences for search results.
 *   date: 2026-11-02
 *   tags: python, django
 *   image: /assets/images/blog/cover.svg   (optional cover, shown on the post, index and social cards)
 *   draft: true        (optional, hidden unless INCLUDE_DRAFTS=1)
 *   ---
 * The slug is the file name without .md.
 */

const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

// Images render as captioned figures: ![alt text](/assets/images/blog/x.png "Caption")
const renderer = new marked.Renderer();
const escAttr = (v) => String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
renderer.image = (href, title, text) =>
  `<figure><img src="${escAttr(href)}" alt="${escAttr(text)}" loading="lazy" decoding="async" />${
    title ? `<figcaption>${escAttr(title)}</figcaption>` : ""
  }</figure>`;
renderer.paragraph = (text) => (text.startsWith("<figure>") ? `${text}\n` : `<p>${text}</p>\n`);

const POSTS_DIR = path.join(__dirname, "..", "content", "blog");

function parseFrontMatter(raw, file) {
  const match = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing front matter block`);
  const meta = {};
  match[1].split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
  });
  return { meta, body: match[2] };
}

function loadPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const includeDrafts = process.env.INCLUDE_DRAFTS === "1";

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { meta, body } = parseFrontMatter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"), file);
      ["title", "description", "date"].forEach((key) => {
        if (!meta[key]) throw new Error(`${file}: front matter is missing "${key}"`);
      });
      const date = new Date(meta.date);
      if (Number.isNaN(date.getTime())) throw new Error(`${file}: invalid date "${meta.date}"`);
      const words = body.split(/\s+/).filter(Boolean).length;
      return {
        slug: file.replace(/\.md$/, ""),
        title: meta.title,
        description: meta.description,
        date,
        dateIso: date.toISOString().split("T")[0],
        image: meta.image || null,
        tags: meta.tags ? meta.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        draft: meta.draft === "true",
        readingMinutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(body, { renderer }),
      };
    })
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => b.date - a.date);
}

module.exports = { loadPosts };
