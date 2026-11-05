/**
 * One-off image optimizer. Run: npm run optimize:images
 * - Profile photo -> 320w WebP (displayed at 160px, 2x)
 * - Portfolio screenshots -> *-640.webp / *-1280.webp responsive variants
 * Originals are untouched; outputs are committed alongside them.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES = path.join(__dirname, "..", "src", "assets", "images");

async function main() {
  await sharp(path.join(IMAGES, "aakash-kumar-das.jpeg"))
    .resize(320, 320, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(path.join(IMAGES, "aakash-kumar-das-320.webp"));

  const root = path.join(IMAGES, "portfolio");
  for (const dir of fs.readdirSync(root)) {
    const full = path.join(root, dir);
    if (!fs.statSync(full).isDirectory()) continue;
    for (const file of fs.readdirSync(full)) {
      if (!/^\d+\.webp$/.test(file)) continue;
      const src = path.join(full, file);
      for (const w of [640, 1280]) {
        const out = src.replace(/\.webp$/, `-${w}.webp`);
        await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 76 }).toFile(out);
      }
    }
  }
}
main();
