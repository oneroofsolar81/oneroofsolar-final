import { CloudRain, Sun, Wind, Shield, BatteryCharging, Zap } from "lucide-react";

const ICONS = {
  cloud: CloudRain,
  sun: Sun,
  wind: Wind,
  shield: Shield,
  battery: BatteryCharging,
  zap: Zap,
} as const;

export function ArticleStats({
  items,
}: {
  items: { value: string; label: string; icon: keyof typeof ICONS }[];
}) {
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm border-l-4 border-l-brand-500"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-[1.7rem] font-extrabold tracking-tight text-slate-900 leading-none mb-2">
              {item.value}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
