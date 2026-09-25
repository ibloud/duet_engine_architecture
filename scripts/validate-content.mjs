import fs from "node:fs";
import path from "node:path";
const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content/demo.json"), "utf8"));
for (const key of ["id","title","status","playable","source","architecture","mechanics"]) {
  if (!(key in data)) throw new Error("Missing content field: " + key);
}
if (!data.playable.itchUrl.startsWith("https://ibloud.itch.io/")) throw new Error("Invalid itch URL");
if (!data.playable.githubPagesUrl.startsWith("https://ibloud.github.io/")) throw new Error("Invalid Pages URL");
for (const stage of ["m1","m2","m3"]) if (!data.architecture[stage]?.length) throw new Error("Missing stage " + stage);
console.log("Duet content contract OK");
