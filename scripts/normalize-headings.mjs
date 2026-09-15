import fs from "fs";
import path from "path";

function walk(d, files = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory() && !["node_modules", "dist", ".git", "admin"].includes(e.name)) walk(p, files);
    else if (e.isFile() && /\.tsx$/.test(e.name)) files.push(p);
  }
  return files;
}

const SKIP_RESIZE = /(Navbar|LeadPopup|QuoteForm|ErrorBoundary|Footer)\.tsx$/i;

function transformClass(cls, tag, resize) {
  let c = cls;
  c = c.replace(/\buppercase\b/g, "");
  c = c.replace(/\[word-spacing:0\.12em\]/g, "");

  if (tag === "h1" && resize) {
    c = c.replace(/\b(?:sm:|md:|lg:|xl:)?text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\b/g, "");
    c = c.replace(/\btext-\[[^\]]+\]/g, "");
    c = c.replace(/\bfont-(?:thin|light|normal|medium|semibold|bold|extrabold|black)\b/g, "");
    c = c.replace(/\btracking-(?:tighter|tight|normal|wide|wider|widest)\b/g, "");
    c = c.replace(/\bleading-\[[^\]]+\]/g, "");
    c = c.replace(/\bleading-(?:none|tight|snug|normal|relaxed|loose)\b/g, "");
    if (!/\bhero-heading\b/.test(c)) c = "hero-heading " + c;
    if (!/\bbreak-words\b/.test(c)) c += " break-words";
  } else if (tag === "h2" && resize) {
    const isLarge =
      /(?:text-(?:3xl|4xl|5xl|6xl|7xl)|(?:sm|md|lg|xl):text-(?:3xl|4xl|5xl|6xl|7xl)|font-black|text-\[[3-9][0-9]+px\]|text-\[[0-9]{3,}px\])/.test(cls);
    if (isLarge) {
      c = c.replace(/\b(?:sm:|md:|lg:|xl:)?text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\b/g, "");
      c = c.replace(/\btext-\[[^\]]+\]/g, "");
      c = c.replace(/\bfont-(?:thin|light|normal|medium|semibold|bold|extrabold|black)\b/g, "");
      c = c.replace(/\btracking-(?:tighter|tight|normal|wide|wider|widest)\b/g, "");
      c = c.replace(/\bleading-\[[^\]]+\]/g, "");
      c = c.replace(/\bleading-(?:none|tight|snug|normal|relaxed|loose)\b/g, "");
      c = "text-[2rem] font-bold leading-[1.25] tracking-tight " + c;
    }
  } else {
    c = c.replace(/\btracking-wide\b/g, "tracking-tight");
  }

  if (!/\bnormal-case\b/.test(c)) c += " normal-case";
  return c.replace(/\s+/g, " ").trim();
}

function rewrite(text, file) {
  const resize = !SKIP_RESIZE.test(file);
  let next = text.replace(/<(h[1-4])(\s[^>]*?\bclassName=)(["'`])([\s\S]*?)\3/g, (full, tag, pre, quote, cls) => {
    if (cls.includes("${")) return full;
    const updated = transformClass(cls, tag, resize);
    if (updated === cls) return full;
    return `<${tag}${pre}${quote}${updated}${quote}`;
  });
  next = next.replace(/(<(h[1-4])\b[^>]*>)\s*FAQS\s*(<\/\2>)/g, "$1FAQs$3");
  return next;
}

const files = walk(path.join(process.cwd(), "src"));
let changed = 0;
for (const file of files) {
  if (file.includes(`${path.sep}admin${path.sep}`)) continue;
  const before = fs.readFileSync(file, "utf8");
  const after = rewrite(before, file);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log(path.relative(process.cwd(), file));
  }
}
console.log("files updated", changed);
