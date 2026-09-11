const FALLBACK = "/assets/images/home/home-hero-bayview.webp";

const HOST_MAP: Array<[RegExp, string]> = [
  [/postimg\.cc/i, "/assets/images/home/logo-oneroof.png"],
  [/unsplash\.com/i, FALLBACK],
  [/pixabay\.com/i, FALLBACK],
  [/solarjuice\.com/i, "/assets/images/hosted/products/ja-solar.webp"],
  [/goodwe\.com/i, "/assets/images/hosted/products/alpha-ess.webp"],
  [/solarquotes\.com/i, "/assets/images/hosted/products/fronius.webp"],
  [/aussiesolartech|squarespace-cdn/i, "/assets/images/hosted/products/ev-charger.webp"],
  [/orangesolarsystems/i, "/assets/images/home/home-battery-nightcliff.webp"],
  [/storyblok\.com/i, "/assets/images/hosted/aerial.webp"],
  [/encrypted-tbn|gstatic\.com/i, FALLBACK],
  [/esaenergy\.com/i, "/assets/images/hosted/about-team.webp"],
  [/sungrowpower\.com|solarshop\.pk|igrowatt/i, "/assets/images/hosted/products/inverter-hero.webp"],
  [/imimg\.com|solarsme\.com|sunrayspower|hachettebookgroup/i, FALLBACK],
  [/oneroofsolar\.com\.au\/wp-content/i, "/assets/images/home/home-premium-aerial.webp"],
];

export function toLocalImageSrc(src: string | null | undefined): string {
  if (!src) return FALLBACK;
  if (src.startsWith("data:") || src.startsWith("blob:")) return src;
  if (src.startsWith("/") && !src.startsWith("//")) return src;
  for (const [re, local] of HOST_MAP) {
    if (re.test(src)) return local;
  }
  return src;
}

export function installImageFallbacks() {
  const patch = (img: HTMLImageElement) => {
    const current = img.getAttribute("src") || img.src;
    const next = toLocalImageSrc(current);
    if (next && next !== current) img.src = next;
  };

  const scan = (root: ParentNode) => {
    root.querySelectorAll("img").forEach((el) => patch(el as HTMLImageElement));
  };

  scan(document);

  new MutationObserver((records) => {
    for (const rec of records) {
      if (rec.type === "attributes" && rec.target instanceof HTMLImageElement) {
        patch(rec.target);
      }
      rec.addedNodes.forEach((node) => {
        if (node instanceof HTMLImageElement) patch(node);
        else if (node instanceof Element) scan(node);
      });
    }
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["src"],
  });

  document.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement) || target.dataset.fallback === "1") return;
      target.dataset.fallback = "1";
      target.src = FALLBACK;
    },
    true
  );
}
