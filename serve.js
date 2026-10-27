/**
 * Local Static File Server for Previewing dist/
 * Zero dependencies, built-in Node.js HTTP server.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "dist");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split("?")[0]);
  if (reqPath.endsWith("/")) {
    reqPath += "index.html";
  }

  let filePath = path.join(DIST_DIR, reqPath);

  // If path is a directory without trailing slash, check if index.html exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  // If file doesn't exist, check if adding .html helps (clean URLs)
  if (!fs.existsSync(filePath) && fs.existsSync(filePath + ".html")) {
    filePath += ".html";
  }

  if (!fs.existsSync(filePath)) {
    // 404 fallback
    const notFoundPath = path.join(DIST_DIR, "404.html");
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(notFoundPath).pipe(res);
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  fs.createReadStream(filePath).pipe(res);
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`🚀 Portfolio preview server running at http://localhost:${PORT}`);
  });
}

module.exports = server;
