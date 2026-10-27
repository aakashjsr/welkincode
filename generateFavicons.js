/**
 * Generates apple-touch-icon.png, favicon.ico, and favicon.svg
 * Matching the exact geometric vector header logo mark.
 * Pure Node.js built-ins (zlib, fs) with 4x supersampled antialiasing.
 */

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// Helper to calculate CRC32 for PNG chunks
function makeCrcTable() {
  let c;
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }
  return crcTable;
}
const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function createPng(width, height, rgbaBuffer) {
  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth 8
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10); // compression
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // interlace

  const ihdrChunk = makeChunk("IHDR", ihdrData);

  // Scanlines with filter byte 0
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const rowOffset = y * (1 + width * 4);
    scanlines[rowOffset] = 0; // Filter None
    rgbaBuffer.copy(scanlines, rowOffset + 1, y * width * 4, (y + 1) * width * 4);
  }

  // IDAT
  const compressed = zlib.deflateSync(scanlines, { level: 9 });
  const idatChunk = makeChunk("IDAT", compressed);

  // IEND
  const iendChunk = makeChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4);
  data.copy(chunk, 8);
  const typeAndData = Buffer.concat([Buffer.from(type), data]);
  const crcVal = crc32(typeAndData);
  chunk.writeUInt32BE(crcVal, 8 + len);
  return chunk;
}

// 2D Geometry test on 34x34 grid
function pointInTriangle(px, py, x1, y1, x2, y2, x3, y3) {
  const d1 = (px - x2) * (y1 - y2) - (x1 - x2) * (py - y2);
  const d2 = (px - x3) * (y2 - y3) - (x2 - x3) * (py - y3);
  const d3 = (px - x1) * (y3 - y1) - (x3 - x1) * (py - y1);
  const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
  return !(hasNeg && hasPos);
}

function pointInRoundedRect(px, py, w, h, rx) {
  if (px < 0 || px > w || py < 0 || py > h) return false;
  // Corners
  if (px < rx && py < rx) {
    const dx = px - rx, dy = py - rx;
    return (dx * dx + dy * dy) <= (rx * rx);
  }
  if (px > w - rx && py < rx) {
    const dx = px - (w - rx), dy = py - rx;
    return (dx * dx + dy * dy) <= (rx * rx);
  }
  if (px < rx && py > h - rx) {
    const dx = px - rx, dy = py - (h - rx);
    return (dx * dx + dy * dy) <= (rx * rx);
  }
  if (px > w - rx && py > h - rx) {
    const dx = px - (w - rx), dy = py - (h - rx);
    return (dx * dx + dy * dy) <= (rx * rx);
  }
  return true;
}

function sampleLogoPixel(x34, y34) {
  // Check rounded rect background (34x34 with rx=8)
  if (!pointInRoundedRect(x34, y34, 34, 34, 7.5)) {
    return [0, 0, 0, 0]; // Transparent outside
  }

  // Base background: #0f172a
  let r = 15, g = 23, b = 42, a = 255;

  // Outer A triangle: (17, 6), (7, 24), (27, 24)
  const inOuter = pointInTriangle(x34, y34, 17, 6, 7, 24, 27, 24);
  // Inner cutout triangle: (17, 14.5), (12, 24), (22, 24)
  const inInner = pointInTriangle(x34, y34, 17, 14.5, 12, 24, 22, 24);

  if (inOuter && !inInner) {
    // White glyph
    r = 255; g = 255; b = 255;
  }

  // Crossbar stroke: from (13.5, 19.5) to (20.5, 19.5), stroke-width=2
  if (x34 >= 12.5 && x34 <= 21.5 && Math.abs(y34 - 19.5) <= 1.1) {
    r = 15; g = 23; b = 42;
  }

  // Apex circle at (17, 11), radius 2: #2563eb
  const cdx = x34 - 17, cdy = y34 - 11;
  if (cdx * cdx + cdy * cdy <= 4.2) {
    r = 37; g = 99; b = 235;
  }

  return [r, g, b, a];
}

function renderLogoRgba(size) {
  const buf = Buffer.alloc(size * size * 4);
  const SAMPLES = 4; // 4x4 subpixel supersampling for crisp antialiasing
  const invSamplesSq = 1 / (SAMPLES * SAMPLES);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let accumR = 0, accumG = 0, accumB = 0, accumA = 0;

      for (let sy = 0; sy < SAMPLES; sy++) {
        for (let sx = 0; sx < SAMPLES; sx++) {
          const subX = (x + (sx + 0.5) / SAMPLES) * (34 / size);
          const subY = (y + (sy + 0.5) / SAMPLES) * (34 / size);
          const [pr, pg, pb, pa] = sampleLogoPixel(subX, subY);
          accumR += pr * (pa / 255);
          accumG += pg * (pa / 255);
          accumB += pb * (pa / 255);
          accumA += pa;
        }
      }

      const finalA = Math.round(accumA * invSamplesSq);
      const idx = (y * size + x) * 4;
      if (finalA > 0) {
        buf[idx] = Math.round(accumR * invSamplesSq / (finalA / 255));
        buf[idx + 1] = Math.round(accumG * invSamplesSq / (finalA / 255));
        buf[idx + 2] = Math.round(accumB * invSamplesSq / (finalA / 255));
        buf[idx + 3] = finalA;
      } else {
        buf[idx] = 0; buf[idx + 1] = 0; buf[idx + 2] = 0; buf[idx + 3] = 0;
      }
    }
  }

  return buf;
}

// Wrap PNG into a standard ICO file
function createIco(png32, png64) {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(2, 4); // 2 images

  // Directory entries (16 bytes each)
  const dir32 = Buffer.alloc(16);
  dir32.writeUInt8(32, 0); // width
  dir32.writeUInt8(32, 1); // height
  dir32.writeUInt8(0, 2);  // color palette
  dir32.writeUInt8(0, 3);  // reserved
  dir32.writeUInt16LE(1, 4); // color planes
  dir32.writeUInt16LE(32, 6); // bits per pixel
  dir32.writeUInt32LE(png32.length, 8); // image size
  dir32.writeUInt32LE(6 + 32, 12); // image offset (header 6 + 2*16 = 38)

  const dir64 = Buffer.alloc(16);
  dir64.writeUInt8(64, 0);
  dir64.writeUInt8(64, 1);
  dir64.writeUInt8(0, 2);
  dir64.writeUInt8(0, 3);
  dir64.writeUInt16LE(1, 4);
  dir64.writeUInt16LE(32, 6);
  dir64.writeUInt32LE(png64.length, 8);
  dir64.writeUInt32LE(6 + 32 + png32.length, 12);

  return Buffer.concat([header, dir32, dir64, png32, png64]);
}

function generate() {
  console.log("🎨 Rendering brand vector logo into favicons...");

  // 1. Render 180x180 for apple-touch-icon
  const rgba180 = renderLogoRgba(180);
  const png180 = createPng(180, 180, rgba180);

  // 2. Render 32x32 and 64x64 for favicon.ico
  const rgba32 = renderLogoRgba(32);
  const png32 = createPng(32, 32, rgba32);

  const rgba64 = renderLogoRgba(64);
  const png64 = createPng(64, 64, rgba64);

  const icoBuf = createIco(png32, png64);

  // Save to public/
  fs.writeFileSync(path.join(__dirname, "public", "apple-touch-icon.png"), png180);
  fs.writeFileSync(path.join(__dirname, "public", "favicon.ico"), icoBuf);

  // Save to dist/
  const distDir = path.join(__dirname, "dist");
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, "apple-touch-icon.png"), png180);
    fs.writeFileSync(path.join(distDir, "favicon.ico"), icoBuf);
  }

  console.log("✅ Successfully generated apple-touch-icon.png (180x180) and favicon.ico (32x32, 64x64) matching header logo!");
}

generate();
