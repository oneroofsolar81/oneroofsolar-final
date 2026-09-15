import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import {
  Sun,
  CloudSun,
  CloudRain,
  Wind,
  Droplets,
  BatteryCharging,
  type LucideIcon,
} from "lucide-react";
import { getNodeText, slugifyHeading } from "@/src/lib/blog";

const H3_ICONS: Record<string, LucideIcon> = {
  "solar panels run on light, not heat": Sun,
  "solar output when the sky is overcast": CloudSun,
  "rain doesnt stop the system, it just slows it down": CloudRain,
  "wind region c/d racking": Wind,
  "humidity, sealed connectors and preventing corrosion": Droplets,
  "why grid-tied solar alone cant back you up in a blackout": BatteryCharging,
};

function headingKey(label: string) {
  return label.toLowerCase().replace(/['’]/g, "");
}

export function ArticleMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="blog-article-body text-left">
      <Markdown
        components={{
          p: ({ children }) => {
            const text = getNodeText(children);
            if (text.startsWith("Short answer:")) {
              return (
                <p className="text-[1.0625rem] sm:text-[1.125rem] text-slate-800 font-medium leading-[1.75] mb-8 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
                  {children}
                </p>
              );
            }
            return (
              <p className="text-[1.0625rem] sm:text-[1.125rem] text-slate-600 font-normal leading-[1.75] mb-6">
                {children}
              </p>
            );
          },
          h2: ({ children }) => {
            const label = getNodeText(children);
            return (
              <h2
                id={slugifyHeading(label)}
                className="scroll-mt-28 text-[1.6rem] sm:text-[1.85rem] font-bold leading-[1.25] tracking-tight text-slate-900 mt-12 mb-5 first:mt-0 normal-case border-l-4 border-brand-500 pl-4"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const label = getNodeText(children);
            const Icon = H3_ICONS[headingKey(label)];
            return (
              <h3 className="text-[1.2rem] sm:text-[1.35rem] font-semibold leading-[1.3] text-slate-900 mt-9 mb-3 normal-case flex items-start gap-3">
                {Icon ? (
                  <span className="mt-0.5 w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                ) : null}
                <span className="pt-1.5">{children}</span>
              </h3>
            );
          },
          a: ({ href, children }) => {
            if (!href) return <span>{children}</span>;
            const isInternal = href.startsWith("/");
            if (isInternal) {
              return (
                <Link
                  to={href}
                  className="text-brand-700 font-semibold underline decoration-brand-300 underline-offset-4 hover:text-brand-600 hover:decoration-brand-500 transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 font-semibold underline decoration-brand-300 underline-offset-4 hover:text-brand-600"
              >
                {children}
              </a>
            );
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-800">{children}</strong>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75]">{children}</li>
          ),
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
