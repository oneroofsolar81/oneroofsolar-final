import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  CloudRain,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sun,
  User,
  Wind,
  Battery,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "@/src/lib/constants";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/SEO";
import { QuoteForm } from "@/src/components/QuoteForm";
import { FaqItem } from "@/src/components/FaqSection";
import { ArticleMarkdown } from "@/src/components/blog/ArticleMarkdown";
import { ArticleCta } from "@/src/components/blog/ArticleCta";
import { ArticleFigure } from "@/src/components/blog/ArticleFigure";
import { ArticleStats } from "@/src/components/blog/ArticleStats";
import { ArticleCompare } from "@/src/components/blog/ArticleCompare";
import { ArticleSidebar } from "@/src/components/blog/ArticleSidebar";
import { ArticleTakeaways } from "@/src/components/blog/ArticleTakeaways";
import { ArticleQuote } from "@/src/components/blog/ArticleQuote";
import { getPostBySlug, getPostPath, getPostToc, relatedReads, type BlogStatIcon } from "@/src/data/blogPosts";
import { slugifyHeading } from "@/src/lib/blog";

const HERO_STAT_ICONS: Record<BlogStatIcon, LucideIcon> = {
  cloud: CloudRain,
  sun: Sun,
  wind: Wind,
  shield: Shield,
  battery: Battery,
  zap: Zap,
};

export function BlogPost() {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeId, setActiveId] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const slugFromPath = location.pathname.replace(/^\/+|\/+$/g, "");
  const slug = paramSlug || slugFromPath.split("/").filter(Boolean).pop();
  const post = getPostBySlug(slug);
  const toc = useMemo(() => (post ? getPostToc(post) : []), [post]);

  useEffect(() => {
    if (!post) return;

    const origin = "https://oneroofsolar.com.au";
    const url = `${origin}${post.canonicalPath}`;
    const faqSection = post.sections.find((section) => section.type === "faqs");

    const schemas: object[] = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.seoDescription,
        image: `${origin}${post.image}`,
        datePublished: post.dateIso,
        dateModified: post.dateIso,
        author: {
          "@type": "Organization",
          name: post.author,
          url: origin,
        },
        publisher: {
          "@type": "Organization",
          name: "Oneroof Solar",
          url: origin,
          logo: {
            "@type": "ImageObject",
            url: `${origin}/assets/images/home/logo-oneroof-classic.png`,
          },
        },
        mainEntityOfPage: url,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${origin}/blogs` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ];

    if (faqSection && faqSection.type === "faqs") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSection.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-jsonld";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [post]);

  useEffect(() => {
    if (!toc.length) return;

    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [toc, post]);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("blog-article");
      if (!article) return;
      const start = article.offsetTop - 120;
      const height = article.offsetHeight - window.innerHeight * 0.45;
      const raw = (window.scrollY - start) / Math.max(height, 1);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="text-left max-w-lg">
          <h1 className="hero-heading text-slate-900 mb-4 break-words normal-case">Article not found</h1>
          <p className="text-xl text-slate-600 mb-8">This blog post does not exist or has been moved.</p>
          <Link to="/blogs" className="text-brand-600 font-bold hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (paramSlug && location.pathname.startsWith("/blogs/")) {
    return <Navigate to={getPostPath(post)} replace />;
  }

  return (
    <div className="overflow-x-clip bg-slate-50 min-h-screen">
      <SEO
        seo={{
          title: post.seoTitle,
          metaDescription: post.seoDescription,
          canonicalUrl: `https://oneroofsolar.com.au${post.canonicalPath}`,
          robots: "index, follow",
          openGraphType: "article",
          openGraphTitle: post.seoTitle,
          openGraphDescription: post.seoDescription,
          openGraphImage: `https://oneroofsolar.com.au${post.image}`,
          twitterTitle: post.seoTitle,
          twitterDescription: post.seoDescription,
          twitterImage: `https://oneroofsolar.com.au${post.image}`,
        }}
      />

      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-brand-500 origin-left transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <section className="relative pt-40 pb-12 lg:pt-52 lg:pb-16 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/90 to-[#0A1118]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            <FadeIn isHero className="lg:col-span-7 text-left">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-300">
                  <li>
                    <Link to="/" className="hover:text-brand-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </li>
                  <li>
                    <Link to="/blogs" className="hover:text-brand-400 transition-colors">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </li>
                  <li className="text-white" aria-current="page">
                    {post.category}
                  </li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 text-brand-300 font-semibold text-xs mb-5 border border-brand-500/30 bg-brand-500/10 rounded-full">
                {post.category}
              </div>
              <h1 className="hero-heading text-white mb-6 break-words normal-case text-left">
                {post.title}
              </h1>
              <p className="max-w-xl text-slate-200 text-lg leading-relaxed mb-8">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-200 mb-8">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-400" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-400" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-400" />
                  {post.author}
                </span>
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto max-w-full h-auto min-h-14 py-3 px-6 sm:px-8 text-base font-bold whitespace-normal shadow-xl shadow-brand-500/20"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                  Get a Darwin quote <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </Button>
            </FadeIn>

            <FadeIn isHero delay={0.12} className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 via-transparent to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {(post.heroStats ?? []).map((item) => {
                  const Icon = HERO_STAT_ICONS[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-3.5 text-center"
                    >
                      <Icon className="w-4 h-4 text-brand-400 mx-auto mb-1.5" />
                      <p className="text-white font-extrabold leading-none">{item.value}</p>
                      <p className="text-[11px] text-slate-300 mt-1.5 leading-tight">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:hidden mb-6">
          <button
            type="button"
            onClick={() => setTocOpen((open) => !open)}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-left font-semibold text-slate-900"
            aria-expanded={tocOpen}
          >
            On this page
            <ChevronDown className={`w-5 h-5 transition-transform ${tocOpen ? "rotate-180" : ""}`} />
          </button>
          {tocOpen && (
            <nav className="mt-2 rounded-2xl border border-slate-200 bg-white p-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setTocOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-700 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          <article
            id="blog-article"
            className="lg:col-span-8 min-w-0 text-left bg-white rounded-[2rem] border border-slate-200 shadow-sm px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          >
            {post.sections.map((section, index) => {
              if (section.type === "markdown") {
                return <ArticleMarkdown key={index} markdown={section.markdown} />;
              }
              if (section.type === "cta") {
                return <ArticleCta key={index} cta={section.cta} />;
              }
              if (section.type === "figure") {
                return (
                  <ArticleFigure key={index} src={section.src} alt={section.alt} />
                );
              }
              if (section.type === "stats") {
                return <ArticleStats key={index} items={section.items} />;
              }
              if (section.type === "compare") {
                return <ArticleCompare key={index} left={section.left} right={section.right} />;
              }
              if (section.type === "takeaways") {
                return <ArticleTakeaways key={index} heading={section.heading} items={section.items} />;
              }
              if (section.type === "quote") {
                return <ArticleQuote key={index} text={section.text} cite={section.cite} />;
              }
              return (
                <section key={index} className="mt-12 mb-6">
                  <h2
                    id={slugifyHeading(section.heading)}
                    className="scroll-mt-28 text-[1.6rem] sm:text-[1.85rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case border-l-4 border-brand-500 pl-4"
                  >
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((faq, faqIndex) => (
                      <FaqItem
                        key={faq.q}
                        q={faq.q}
                        a={faq.a}
                        index={faqIndex}
                        isOpen={openFaq === faqIndex}
                        onClick={() => setOpenFaq(openFaq === faqIndex ? null : faqIndex)}
                      />
                    ))}
                  </div>
                </section>
              );
            })}

            <div className="mt-10 pt-8 border-t border-slate-200">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
            </div>
          </article>

          <div className="hidden lg:block lg:col-span-4 self-stretch">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-none pr-1">
              <ArticleSidebar post={post} toc={toc} activeId={activeId} />
            </div>
          </div>
        </div>
      </div>

      <section className="pb-8 lg:pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-slate-900 normal-case">Related reading</h2>
            <Link to="/blogs" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
              All blogs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedReads.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-brand-300 transition-all"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="text-[11px] font-semibold text-brand-700 mb-1">{item.label}</p>
                  <p className="font-bold text-slate-900 leading-snug group-hover:text-brand-700">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-[#0A1118] border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              <FadeIn className="p-7 sm:p-10 lg:p-12 flex flex-col text-left">
                <div className="relative rounded-2xl overflow-hidden h-44 sm:h-52 mb-8 border border-white/10">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 to-transparent" />
                </div>
                <h2 className="text-[1.85rem] sm:text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-4 normal-case">
                  Get a Darwin-ready solar quote
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-7">
                  Tell us about your roof and we will size a cyclone-rated system around the wet season dip, not a sunny-day brochure number.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Sized for February output, not a clear-sky brochure",
                    "Cyclone wind region C/D racking for NT storms",
                    "Battery backup if you want lights on in a blackout",
                    "$0 deposit options and STC rebate applied upfront",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-slate-200 text-sm sm:text-[0.95rem] leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-4">
                  <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-4 group">
                    <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-slate-900 transition-colors">
                      <Phone className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">Call our Darwin team</span>
                      <span className="block text-white font-bold group-hover:text-brand-400">{PRIMARY_PHONE}</span>
                    </span>
                  </a>
                  <a href="mailto:info@oneroofsolar.com.au" className="flex items-center gap-4 group">
                    <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-slate-900 transition-colors">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">Email</span>
                      <span className="block text-white font-bold group-hover:text-brand-400">info@oneroofsolar.com.au</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">Visit us</span>
                      <span className="block text-white font-bold">3/97 Pruen Rd, Berrimah NT 0828</span>
                    </span>
                  </div>
                </div>
              </FadeIn>
              <div className="p-6 sm:p-8 lg:p-10 flex items-center justify-center bg-[#071016] border-t lg:border-t-0 lg:border-l border-white/10">
                <QuoteForm
                  title="Get Your Free Quote"
                  responseNote="Response within 2 business hours"
                  source="blog_wet_season"
                  className="w-full max-w-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
