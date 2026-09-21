import type { ReactNode } from "react";

export function slugifyHeading(label: string): string {
  return label
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return getNodeText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}
