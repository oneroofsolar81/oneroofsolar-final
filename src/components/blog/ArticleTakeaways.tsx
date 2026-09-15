import { CheckCircle2, ListChecks } from "lucide-react";

export function ArticleTakeaways({
  heading = "What to remember",
  items,
}: {
  heading?: string;
  items: string[];
}) {
  return (
    <section className="my-10 rounded-[1.75rem] border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-11 h-11 rounded-xl bg-brand-500 text-slate-900 flex items-center justify-center shrink-0">
          <ListChecks className="w-5 h-5" />
        </span>
        <h3 className="text-[1.25rem] font-bold text-slate-900 normal-case m-0">{heading}</h3>
      </div>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
