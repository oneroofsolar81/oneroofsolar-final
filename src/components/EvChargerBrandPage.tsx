import { useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Phone,
  Mail,
  ChevronDown,
  Star,
  Zap,
  Sun,
  BatteryCharging,
  Cpu,
  ArrowRight,
  Shield,
  CircleCheck,
  MessageCircle,
} from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { Button } from "./ui/Button";
import { PartnersMarquee } from "./PartnersMarquee";
import { SEO } from "./SEO";
import { QuoteForm } from "./QuoteForm";
import { GoogleReviews } from "./GoogleReviews";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

export interface SpecTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface EvSection {
  heading: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface EvFaq {
  q: string;
  a: string;
}

export interface EvPairItem {
  label: string;
  text: string;
  href?: string;
}

export interface EvBrandData {
  brand: string;
  slug: string;
  h1: string;
  heroSubheadline: string;
  heroBadges: string[];
  heroImage: string;
  heroImageAlt: string;

  seo: { title: string; metaDescription: string; canonicalUrl: string };

  introHeading: string;
  introParagraphs: string[];
  introCta?: string;

  tablesHeading: string;
  tables: SpecTable[];

  featuresHeading: string;
  features: string[];

  /** Optional sections rendered after the feature list (e.g. a DC charger block). */
  postFeatureSections?: EvSection[];

  phaseHeading: string;
  phaseItems: { heading: string; text: string }[];

  /** Optional sections after the phase block (e.g. a pricing block). */
  postPhaseSections?: EvSection[];

  darwinHeading: string;
  darwinText: string;

  pairingHeading: string;
  pairingIntro: string;
  pairingItems: EvPairItem[];
  pairingCta?: string;

  whyHeading: string;
  whyPoints: string[];

  rightHeading: string;
  goodFit: string[];
  talkToUs: string[];

  faqs: EvFaq[];

  finalHeading: string;
  finalText: string;
  quoteFormTitle: string;
  quoteSource: string;
}

type IconType = ComponentType<{ className?: string }>;
const pairIcons: IconType[] = [Sun, Cpu, BatteryCharging, Zap];

function SpecTableBlock({ table }: { table: SpecTable }) {
  return (
    <div className="mb-10 last:mb-0">
      {table.caption && (
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 normal-case">
          {table.caption}
        </h3>
      )}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#0A1118] text-white">
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 font-bold whitespace-nowrap ${
                    i === 0 ? "text-slate-300" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 align-top border-t border-slate-100 ${
                      ci === 0
                        ? "font-bold text-slate-900 whitespace-nowrap"
                        : "text-slate-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: EvSection }) {
  return (
    <FadeIn className="mb-10 last:mb-0">
      <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">
        {section.heading}
      </h3>
      {section.intro && (
        <p className="text-slate-600 text-base leading-relaxed font-medium mb-4">
          {section.intro}
        </p>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-slate-600 text-base leading-relaxed font-medium mb-4">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="space-y-3">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-[#8cc63f] shrink-0 mt-0.5" />
              <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </FadeIn>
  );
}

export function EvChargerBrandPage({ data }: { data: EvBrandData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: data.seo.title,
    metaDescription: data.seo.metaDescription,
    canonicalUrl: data.seo.canonicalUrl,
    robots: "index, follow",
    openGraphTitle: data.seo.title,
    openGraphDescription: data.seo.metaDescription,
    twitterTitle: data.seo.title,
    twitterDescription: data.seo.metaDescription,
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${data.brand} EV Charger`,
      category: "EV Charger",
      brand: { "@type": "Brand", name: data.brand },
      description: data.seo.metaDescription,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "AUD",
        seller: { "@type": "LocalBusiness", name: "Oneroof Solar" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oneroofsolar.com.au/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "EV Charger Brands",
          item: "https://oneroofsolar.com.au/products/ev-charger-brands",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.brand,
          item: data.seo.canonicalUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0A1118]/30" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn isHero>
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#8cc63f] transition-colors">
                  Home
                </a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <Link to="/products/ev-charger-brands" className="hover:text-[#8cc63f] transition-colors">
                  EV Charger Brands
                </Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">{data.brand}</span>
              </nav>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">{data.h1}</h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                {data.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get a Free Quote</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call {PRIMARY_PHONE}</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {data.heroBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                    <Check className="w-4 h-4 text-[#8cc63f] shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img
                  fetchPriority="high"
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#8cc63f] leading-none">
                    4.9 <Star className="w-4 h-4 fill-[#8cc63f]" />
                  </div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">
                    130 Reviews
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* Intro */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-center text-slate-900 mb-8 normal-case">
              {data.introHeading}
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              {data.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {data.introCta && (
              <div className="mt-10 bg-[#0A1118] border border-brand-500/30 p-6 sm:p-8 rounded-2xl text-center shadow-xl">
                <p className="text-white font-bold text-lg mb-5">{data.introCta}</p>
                <a
                  href="#quote-form"
                  className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                >
                  Get a Free Quote &rarr;
                </a>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Spec tables */}
      <section className="py-20 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              {data.tablesHeading}
            </h2>
          </FadeIn>
          {data.tables.map((t, i) => (
            <FadeIn key={i} delay={Math.min(i * 0.1, 0.3)}>
              <SpecTableBlock table={t} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              {data.featuresHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {data.features.map((f, i) => (
              <FadeIn key={f} delay={Math.min(i * 0.03, 0.3)} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{f}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Post-feature sections (e.g. DC charger) */}
      {data.postFeatureSections && data.postFeatureSections.length > 0 && (
        <section className="py-20 bg-slate-50 relative border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {data.postFeatureSections.map((s) => (
              <SectionBlock key={s.heading} section={s} />
            ))}
          </div>
        </section>
      )}

      {/* Phase guidance */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              {data.phaseHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.phaseItems.map((item, i) => (
              <FadeIn
                key={item.heading}
                delay={Math.min(i * 0.08, 0.3)}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight normal-case">
                  {item.heading}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Post-phase sections (e.g. pricing) */}
      {data.postPhaseSections && data.postPhaseSections.length > 0 && (
        <section className="py-20 bg-slate-50 relative border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {data.postPhaseSections.map((s) => (
              <SectionBlock key={s.heading} section={s} />
            ))}
          </div>
        </section>
      )}

      {/* Built for Darwin */}
      <section className="py-14 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/15 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                  {data.darwinHeading}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                  {data.darwinText}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pairing */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
              {data.pairingHeading}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-3xl">
              {data.pairingIntro}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.pairingItems.map((item, i) => {
              const Icon = pairIcons[i % pairIcons.length];
              return (
                <FadeIn
                  key={item.label}
                  delay={Math.min(i * 0.06, 0.3)}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-start gap-4 h-full shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 mb-1 tracking-tight normal-case">
                      {item.href ? (
                        <Link to={item.href} className="hover:text-[#5b9e2e] transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          {data.pairingCta && (
            <FadeIn delay={0.2}>
              <div className="mt-10 bg-[#0A1118] border border-brand-500/30 p-6 sm:p-8 rounded-2xl text-center shadow-xl">
                <p className="text-white font-bold text-base sm:text-lg mb-5">{data.pairingCta}</p>
                <a
                  href="#quote-form"
                  className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                >
                  Get a Free Quote &rarr;
                </a>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              {data.whyHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {data.whyPoints.map((point, i) => (
              <FadeIn key={point} delay={Math.min(i * 0.03, 0.3)} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{point}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Right for you */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              {data.rightHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn className="bg-[#8cc63f]/5 rounded-2xl p-8 border border-[#8cc63f]/20">
              <h3 className="text-lg font-black text-slate-900 mb-5 tracking-tight normal-case">
                It&apos;s a great fit if you:
              </h3>
              <ul className="space-y-3">
                {data.goodFit.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#8cc63f] shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-5 tracking-tight normal-case">
                Talk to us first if you:
              </h3>
              <ul className="space-y-3">
                {data.talkToUs.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviews />

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                  {data.brand} EV Charger FAQs
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">
                  Common questions about the {data.brand} EV charger and installation in Darwin.
                </p>
                <a href="#quote-form">
                  <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 border-none uppercase tracking-wider text-xs">
                    Get a Free Quote
                  </Button>
                </a>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {data.faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={faq.q} delay={i * 0.05}>
                    <div
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-white shadow-md border-brand-500/50"
                          : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`${data.slug}-faq-panel-${i}`}
                        id={`${data.slug}-faq-button-${i}`}
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4"
                      >
                        <div className="flex items-start sm:items-center gap-4">
                          <div
                            className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                              isOpen
                                ? "bg-[#8cc63f] text-[#19281D] shadow-md shadow-[#8cc63f]/20"
                                : "bg-slate-50 text-slate-500 border border-slate-200"
                            }`}
                          >
                            0{i + 1}
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                              isOpen ? "text-[#8cc63f]" : "text-slate-900"
                            }`}
                          >
                            {faq.q}
                          </h3>
                        </div>
                        <div
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180"
                              : "border-slate-200 text-slate-500 bg-slate-50"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                      <div
                        id={`${data.slug}-faq-panel-${i}`}
                        aria-labelledby={`${data.slug}-faq-button-${i}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 px-6 ${
                          isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-slate-600 leading-relaxed font-medium pl-12 sm:pl-14 text-xs sm:text-sm">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                  {data.finalHeading}
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  {data.finalText}
                </p>
                <div className="space-y-6">
                  <a
                    href={`tel:${PRIMARY_PHONE_RAW}`}
                    className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Our Team</div>
                      <div className="text-base sm:text-lg font-black">{PRIMARY_PHONE}</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@oneroofsolar.com.au"
                    className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</div>
                      <div className="text-base sm:text-lg font-black">info@oneroofsolar.com.au</div>
                    </div>
                  </a>
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                      <Shield className="w-5 h-5 text-[#8cc63f]" /> SAA Accredited
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                      <Star className="w-5 h-5 text-[#8cc63f] fill-[#8cc63f]" /> 4.9 / 130 Reviews
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <QuoteForm
                title={data.quoteFormTitle}
                defaultInterest="EV Charger Installation"
                source={data.quoteSource}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Back to brands */}
      <section className="py-14 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              to="/products/ev-charger-brands"
              className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to all EV charger brands
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default EvChargerBrandPage;
