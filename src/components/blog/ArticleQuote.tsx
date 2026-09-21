import { Quote } from "lucide-react";

export function ArticleQuote({ text, cite }: { text: string; cite?: string }) {
  return (
    <blockquote className="my-10 relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#0A1118] px-6 py-8 sm:px-10 sm:py-9">
      <Quote className="absolute -top-2 right-4 w-16 h-16 text-brand-500/20" aria-hidden />
      <p className="relative z-10 text-lg sm:text-xl font-medium leading-relaxed text-white">
        {text}
      </p>
      {cite ? <cite className="relative z-10 mt-4 block text-sm text-brand-300 not-italic">{cite}</cite> : null}
    </blockquote>
  );
}
