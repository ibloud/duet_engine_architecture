import fs from "node:fs";
import path from "node:path";
const root = process.cwd();
const dist = path.join(root, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "content"), { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));
fs.copyFileSync(path.join(root, "content/demo.json"), path.join(dist, "content/demo.json"));
console.log("Built Duet browser artifact");
