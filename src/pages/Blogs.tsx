import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { SEO } from "@/src/components/SEO";
import { getAllPosts, getPostPath } from "@/src/data/blogPosts";

export function Blogs() {
  const posts = getAllPosts();

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

      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 bg-[#0A1118] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn isHero>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-brand-400 font-bold text-xs mb-6 border border-brand-500/30 bg-brand-500/10 rounded-full uppercase tracking-widest">
              Oneroof Insights
            </div>
            <h1 className="hero-heading text-white mb-6 break-words normal-case max-w-4xl">
              Solar guides for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                Darwin weather.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              Straight answers on solar, batteries and NT conditions — written for homes across Darwin, Palmerston and Alice Springs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 && (
            <FadeIn>
              <article className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-500 group mb-10">
                <Link to={getPostPath(posts[0])} className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 sm:h-80 lg:h-auto min-h-[280px] overflow-hidden">
                    <img
                      referrerPolicy="no-referrer"
                      fetchPriority="high"
                      src={posts[0].image}
                      alt={posts[0].imageAlt}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/10" />
                    <span className="absolute top-4 left-4 bg-white/95 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full">
                      {posts[0].category}
                    </span>
                  </div>
                  <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-brand-500" />
                        {posts[0].date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-500" />
                        {posts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold leading-[1.3] tracking-tight text-slate-900 mb-4 group-hover:text-brand-600 transition-colors normal-case">
                      {posts[0].title}
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">{posts[0].excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-brand-700 font-bold">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </article>
            </FadeIn>
          )}

          {posts.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.08}>
                  <article className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-500 group flex flex-col h-full">
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
