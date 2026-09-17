import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "@/src/lib/constants";
import type { BlogCta } from "@/src/data/blogPosts";

export function ArticleCta({ cta }: { cta: BlogCta }) {
  const showPhone = Boolean(cta.phoneLine);

  return (
    <aside className="not-prose my-10 sm:my-12 rounded-[1.75rem] sm:rounded-[2rem] bg-[#0A1118] border border-white/10 p-5 sm:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/15 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="relative z-10 min-w-0">
        <h2 className="text-[1.35rem] sm:text-[1.75rem] font-bold leading-[1.25] text-white mb-4 normal-case break-words">
          {cta.heading}
        </h2>
        <p className="text-slate-300 text-[15px] sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl break-words">
          {cta.body}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 min-w-0">
          <Button
            size="lg"
            className="w-full sm:w-auto max-w-full h-auto min-h-14 py-3 px-5 sm:px-8 text-[15px] sm:text-base font-bold leading-snug whitespace-normal text-center shadow-xl shadow-brand-500/20"
            asChild
          >
            <Link to={cta.buttonHref} className="inline-flex items-center justify-center gap-2">
              <span className="min-w-0 text-balance">{cta.buttonLabel}</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
          </Button>
          {showPhone && (
            <a
              href={`tel:${PRIMARY_PHONE_RAW}`}
              className="inline-flex items-start gap-2 text-slate-300 hover:text-brand-400 font-medium transition-colors text-[15px] leading-snug"
            >
              <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span className="min-w-0 break-words">
                or call our local Darwin team today at{" "}
                <span className="text-white font-semibold">{PRIMARY_PHONE}</span>.
              </span>
            </a>
          )}
        </div>
        {cta.note && (
          <p className="mt-5 text-sm font-semibold text-brand-400">{cta.note}</p>
        )}
      </div>
    </aside>
  );
}
