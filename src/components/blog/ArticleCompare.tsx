import { CloudRain, Sun } from "lucide-react";

export function ArticleCompare({
  left,
  right,
}: {
  left: { title: string; subtitle: string; items: string[] };
  right: { title: string; subtitle: string; items: string[] };
}) {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 sm:p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center">
            <CloudRain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold normal-case m-0">{left.title}</h3>
            <p className="text-sm text-slate-400 m-0">{left.subtitle}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {left.items.map((item) => (
            <li key={item} className="text-sm text-slate-200 leading-relaxed pl-4 border-l-2 border-sky-400/60">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-brand-500 text-slate-900 flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 normal-case m-0">{right.title}</h3>
            <p className="text-sm text-slate-600 m-0">{right.subtitle}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {right.items.map((item) => (
            <li key={item} className="text-sm text-slate-700 leading-relaxed pl-4 border-l-2 border-brand-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
