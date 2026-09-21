import fs from "fs";
import path from "path";

const files = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory() && !["node_modules", "dist", ".git"].includes(e.name)) walk(p);
    else if (e.isFile() && /\.(tsx?|jsx?)$/.test(e.name)) files.push(p);
  }
}
walk("src");

const set = new Set();
for (const f of files) {
  const t = fs.readFileSync(f, "utf8");
  // Capture full postimg URLs including parentheses in filenames
  for (const m of t.matchAll(/https:\/\/i\.postimg\.cc\/[A-Za-z0-9]+\/[^\s"'`<>]+/g)) {
    let url = m[0];
    // Trim trailing punctuation that isn't part of the URL
    url = url.replace(/[),.;]+$/, "");
    // If URL ended mid-paren filename, keep going wasn't possible; fix common truncation
    set.add(url);
  }
}
const urls = [...set].sort();
console.log("unique", urls.length);
fs.writeFileSync("postimg-urls.txt", urls.join("\n"));
for (const u of urls) console.log(u);
