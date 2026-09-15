import fs from "fs";
import path from "path";

const src = process.argv[2];
const outDir = process.argv[3] || "public/assets/images/hosted";
const raw = fs.readFileSync(src, "utf8");
const data = JSON.parse(raw);
const map = data.result?.value || data;

fs.mkdirSync(outDir, { recursive: true });

function safeName(url) {
  try {
    const base = path.basename(new URL(url).pathname);
    return base
      .replace(/[()]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();
  } catch {
    return `img-${Date.now()}.bin`;
  }
}

const mapping = {};
for (const [url, info] of Object.entries(map)) {
  if (!info?.ok || !info.b64) {
    console.log("SKIP", url, info);
    continue;
  }
  const name = safeName(url);
  const dest = path.join(outDir, name);
  fs.writeFileSync(dest, Buffer.from(info.b64, "base64"));
  const local = `/${outDir.replace(/^public/, "").replace(/\\/g, "/")}/${name}`.replace(/\/+/g, "/");
  mapping[url] = local;
  console.log("WROTE", dest, info.size, "->", local);
}

const mapPath = path.join(outDir, "_url-map.json");
let existing = {};
if (fs.existsSync(mapPath)) existing = JSON.parse(fs.readFileSync(mapPath, "utf8"));
Object.assign(existing, mapping);
fs.writeFileSync(mapPath, JSON.stringify(existing, null, 2));
console.log("map entries", Object.keys(existing).length);
