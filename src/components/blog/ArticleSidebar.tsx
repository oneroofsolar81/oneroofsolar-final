import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "@/src/lib/constants";
import { getAllPosts, getPostPath, relatedReads, type BlogPost } from "@/src/data/blogPosts";

export function ArticleSidebar({
  post,
  toc,
  activeId,
}: {
  post: BlogPost;
  toc: { id: string; label: string }[];
  activeId: string;
}) {
  const recent = getAllPosts().filter((item) => item.slug !== post.slug).slice(0, 3);
  const reading = relatedReads.slice(0, 4);

  return (
    <aside className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-900 mb-4">On this page</p>
        <nav aria-label="Table of contents">
          <ol className="space-y-0.5">
            {toc.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex gap-2.5 text-sm leading-snug rounded-lg px-2.5 py-2 transition-colors ${
                    activeId === item.id
                      ? "bg-brand-50 text-brand-800 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`mt-0.5 w-5 shrink-0 text-[11px] font-bold ${
                      activeId === item.id ? "text-brand-600" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-900 mb-4">
          {recent.length > 0 ? "Recent posts" : "Keep exploring"}
        </p>
        <div className="space-y-4">
          {recent.length > 0
            ? recent.map((item) => (
                <Link key={item.slug} to={getPostPath(item)} className="group flex gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold text-brand-700 mb-0.5">{item.category}</span>
                    <span className="block text-sm font-semibold text-slate-800 leading-snug group-hover:text-brand-700">
                      {item.title}
                    </span>
                  </span>
                </Link>
              ))
            : reading.map((item) => (
                <Link key={item.href} to={item.href} className="group flex gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold text-brand-700 mb-0.5">{item.label}</span>
                    <span className="block text-sm font-semibold text-slate-800 leading-snug group-hover:text-brand-700">
                      {item.title}
                    </span>
                  </span>
                </Link>
              ))}
        </div>
      </div>

      {recent.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-900 mb-4">Related reading</p>
          <div className="space-y-4">
            {reading.slice(0, 3).map((item) => (
              <Link key={item.href} to={item.href} className="group flex gap-3">
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold text-brand-700 mb-0.5">{item.label}</span>
                  <span className="block text-sm font-semibold text-slate-800 leading-snug group-hover:text-brand-700">
                    {item.title}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-2xl bg-[#0A1118] text-white p-6 overflow-hidden relative">
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-brand-500/20 blur-2xl pointer-events-none" />
        <p className="text-lg font-bold mb-2 relative z-10">Need a Darwin-ready quote?</p>
        <p className="text-sm text-slate-300 mb-5 relative z-10">
          Cyclone-rated solar and battery, sized for the wet season dip.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 text-slate-900 font-bold px-5 py-2.5 text-sm hover:bg-brand-400 transition-colors relative z-10"
        >
          Get a free quote <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href={`tel:${PRIMARY_PHONE_RAW}`}
          className="mt-4 flex items-center gap-2 text-sm text-slate-300 hover:text-brand-400 relative z-10"
        >
          <Phone className="w-4 h-4 text-brand-400" />
          {PRIMARY_PHONE}
        </a>
      </div>
    </aside>
  );
}
