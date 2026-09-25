import fs from "node:fs";
import path from "node:path";
const root = process.cwd();
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "content/demo.json"), "utf8"));
for (const marker of ['id="cmd"','id="sr-status"','id="visual-board"','id="history-log"','id="speak-btn"','id="ds-ai-toggle"','id="spectator-toggle"','processCommand','initGame']) {
  if (!html.includes(marker)) throw new Error("Playable missing required marker: " + marker);
}
for (const mechanic of manifest.mechanics) {
  if (!html.toLowerCase().includes(mechanic.replaceAll("-", " "))) throw new Error("Playable missing mechanic: " + mechanic);
}
console.log("Duet runtime smoke test OK");
