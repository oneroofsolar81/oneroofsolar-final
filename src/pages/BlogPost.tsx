import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { SEO } from "@/src/components/SEO";
import { QuoteForm } from "@/src/components/QuoteForm";
import { FaqItem } from "@/src/components/FaqSection";
import { ArticleMarkdown } from "@/src/components/blog/ArticleMarkdown";
import { ArticleCta } from "@/src/components/blog/ArticleCta";
import { getPostBySlug, getPostPath } from "@/src/data/blogPosts";

export function BlogPost() {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const slugFromPath = location.pathname.replace(/^\/+|\/+$/g, "");
  const slug = paramSlug || slugFromPath;
  const post = getPostBySlug(slug);

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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="text-center max-w-lg">
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

      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#0A1118] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn isHero>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
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
                <li className="text-slate-300 line-clamp-1" aria-current="page">
                  {post.category}
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-brand-400 font-bold text-xs mb-6 border border-brand-500/30 bg-brand-500/10 rounded-full uppercase tracking-widest">
              {post.category}
            </div>
            <h1 className="hero-heading text-white mb-8 break-words normal-case">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-400" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-400" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <FadeIn>
          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-200">
            <img
              referrerPolicy="no-referrer"
              fetchPriority="high"
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-[240px] sm:h-[380px] object-cover"
            />
          </div>
        </FadeIn>
      </div>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {post.sections.map((section, index) => {
          if (section.type === "markdown") {
            return <ArticleMarkdown key={index} markdown={section.markdown} />;
          }

          if (section.type === "cta") {
            return <ArticleCta key={index} cta={section.cta} />;
          }

          return (
            <section key={index} className="mt-14 mb-6">
              <h2 className="text-[1.75rem] sm:text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case">
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

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Get a Darwin-ready solar quote
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Tell us about your roof and we will size a cyclone-rated system around the wet season dip, not a sunny-day brochure number.
              </p>
            </FadeIn>
            <QuoteForm title="Get Your Free Quote" responseNote="Response within 2 business hours" />
          </div>
        </div>
      </section>
    </div>
  );
}
