import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { SEO } from "@/src/components/SEO";
import { getAllPosts, getPostPath, relatedReads } from "@/src/data/blogPosts";

export function Blogs() {
  const posts = getAllPosts();
  const featured = posts[0];

  return (
    <div className="overflow-x-clip bg-slate-50 min-h-screen">
      <SEO
        seo={{
          title: "Solar Blogs Darwin NT | Oneroof Solar",
          metaDescription:
            "Practical solar guides from Darwin's local installers. Wet season output, batteries, rebates and cyclone-rated systems for NT homes.",
          canonicalUrl: "https://oneroofsolar.com.au/blogs",
          robots: "index, follow",
          openGraphTitle: "Solar Blogs Darwin NT | Oneroof Solar",
          openGraphDescription:
            "Practical solar guides from Darwin's local installers. Wet season output, batteries, rebates and cyclone-rated systems for NT homes.",
          openGraphImage: "https://oneroofsolar.com.au/assets/images/hosted/aerial.webp",
          twitterTitle: "Solar Blogs Darwin NT | Oneroof Solar",
          twitterDescription:
            "Practical solar guides from Darwin's local installers across Darwin, Palmerston and Alice Springs.",
          twitterImage: "https://oneroofsolar.com.au/assets/images/hosted/aerial.webp",
        }}
      />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#0A1118] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/hosted/aerial.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/88 to-[#0A1118]/60" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <FadeIn isHero className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-brand-400 font-bold text-xs mb-6 border border-brand-500/30 bg-brand-500/10 rounded-full">
                <Newspaper className="w-3.5 h-3.5" />
                Oneroof Insights
              </div>
              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Solar guides for Darwin weather.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                Straight answers on solar, batteries and NT conditions — written for homes across Darwin, Palmerston and Alice Springs.
              </p>
            </FadeIn>
            <FadeIn isHero delay={0.1} className="lg:col-span-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: `${posts.length}`, label: "Guides" },
                  { value: "NT", label: "Local advice" },
                  { value: "2026", label: "Updated" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                    <p className="text-white text-xl font-extrabold">{item.value}</p>
                    <p className="text-[11px] text-slate-300 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {featured && (
              <FadeIn className="lg:col-span-8">
                <article className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-500 group">
                  <Link to={getPostPath(featured)} className="block">
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <img
                        referrerPolicy="no-referrer"
                        fetchPriority="high"
                        src={featured.image}
                        alt={featured.imageAlt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-white/95 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full">
                        {featured.category}
                      </span>
                    </div>
                    <div className="p-7 sm:p-10 text-left">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-brand-500" />
                          {featured.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-brand-500" />
                          {featured.readTime}
                        </span>
                      </div>
                      <h2 className="text-[1.5rem] sm:text-[1.85rem] font-bold leading-[1.3] tracking-tight text-slate-900 mb-4 group-hover:text-brand-600 transition-colors normal-case">
                        {featured.title}
                      </h2>
                      <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">{featured.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-brand-700 font-bold">
                        Read article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </article>
              </FadeIn>
            )}

            <aside className="lg:col-span-4 space-y-5">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm text-left">
                <p className="text-sm font-bold text-slate-900 mb-4">Keep exploring</p>
                <div className="space-y-4">
                  {relatedReads.map((item) => (
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
              <div className="rounded-[1.75rem] bg-[#0A1118] text-white p-6">
                <p className="text-lg font-bold mb-2">Want a system sized for the wet season?</p>
                <p className="text-sm text-slate-300 mb-5">Local Darwin quotes, cyclone-rated racking, batteries included if you need backup.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 text-slate-900 font-bold px-5 py-2.5 text-sm hover:bg-brand-400"
                >
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>

          {posts.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {posts.slice(1).map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.08}>
                  <article className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-500 group flex flex-col h-full text-left">
                    <Link to={getPostPath(post)} className="relative h-56 overflow-hidden block">
                      <img
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                      <span className="absolute top-4 left-4 bg-white/95 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </Link>

                    <div className="p-7 sm:p-8 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-brand-500" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-brand-500" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-[1.35rem] sm:text-[1.5rem] font-bold leading-[1.3] tracking-tight text-slate-900 mb-3 group-hover:text-brand-600 transition-colors normal-case">
                        <Link to={getPostPath(post)}>{post.title}</Link>
                      </h2>
                      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                      <Link
                        to={getPostPath(post)}
                        className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-600 transition-colors"
                      >
                        Read article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
