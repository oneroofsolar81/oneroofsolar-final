import { useState, Fragment, type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  Sun,
  ChevronDown,
  Star,
  Award,
  Zap,
  BadgeCheck,
} from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { Button } from "./ui/Button";
import { PartnersMarquee } from "./PartnersMarquee";
import { SEO } from "./SEO";
import { QuoteForm } from "./QuoteForm";
import { LocationMapCard, OFFICE_LOCATIONS } from "./LocationMap";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

type IconType = ComponentType<{ className?: string }>;

export interface SuburbCard {
  title: string;
  href: string;
  icon: IconType;
  text: string;
}

export interface SuburbFaq {
  q: string;
  a: string;
}

/** A segment of the Nearby Solar Coverage paragraph: plain text or an inline link. */
export type NearbySegment =
  | string
  | { label: string; to?: string; href?: string };

export interface SuburbLocationData {
  /** Display name, e.g. "Wanguri". */
  suburb: string;
  /** URL slug, e.g. "wanguri" (used for element ids). */
  slug: string;
  /** Highlighted part of the H1, e.g. "Wanguri NT". */
  heroHighlight: string;
  heroParagraph: string;
  heroImage: string;
  heroImageAlt: string;
  /** Optional supporting image beside the intro; falls back to a Darwin aerial. */
  introImage?: string;
  introImageAlt?: string;
  rating: string;
  reviewCount: string;
  trustChips: string[];

  seo: {
    title: string;
    metaDescription: string;
    canonicalUrl: string;
  };

  introHeading: string;
  introParagraphs: string[];

  systemsHeading: string;
  systemTypes: SuburbCard[];

  midCta: { heading: string; text: string; button: string };

  relatedHeading: string;
  relatedIntro: string;
  relatedServices: SuburbCard[];

  whyHeading: string;
  whyPoints: string[];
  highlightCard: { heading: string; text: string; tag: string };

  repairCta: { heading: string; text: string; button: string };

  mapHeading: string;
  mapParagraph: string;

  nearbyHeading: string;
  nearbySegments: NearbySegment[];

  faqIntro: string;
  faqs: SuburbFaq[];

  quoteHeading: string;
  quoteParagraph: string;
  quoteFormTitle: string;
  quoteSource: string;

  finalCtaHeading: string;
  finalCtaText: string;
  finalCtaButton: string;

  geo: { latitude: number; longitude: number };
  serviceAreaNames: string[];
}

/** Section photos mapped by destination so every suburb card carries a relevant image. */
const SYSTEM_IMAGES: Record<string, string> = {
  "/solar-systems/residential-solar-system": "/assets/images/home/home-packages-house.webp",
  "/solar-systems/commercial-solar-system": "/assets/images/home/home-premium-aerial.webp",
  "/solar-systems/off-grid-solar-system": "/assets/images/hosted/offgrid.webp",
};

const SERVICE_IMAGES: Record<string, string> = {
  "/services/solar-inverters/installation": "/assets/images/hosted/products/inverter-hero.webp",
  "/services/solar-inverters/repair": "/assets/images/hosted/goodwe-saa-install.webp",
  "/services/solar-battery-installation": "/assets/images/hosted/goodwe-battery-hero.webp",
  "/services/ev-chargers/installation": "/assets/images/hosted/products/ev-charger.webp",
  "/services/ev-chargers/repair": "/assets/images/hosted/ev-charger-repair-diagnosis.webp",
};

const PROJECT_IMAGES = [
  { src: "/assets/images/home/home-project-bayview.webp", label: "Residential rooftop solar" },
  { src: "/assets/images/home/home-project-berrimah.webp", label: "Commercial solar install" },
  { src: "/assets/images/home/home-project-bellamack.webp", label: "Family home system" },
];

/** Premium gradient icon badge used across the card sections. */
function IconBadge({ icon: Icon, className = "" }: { icon: IconType; className?: string }) {
  return (
    <div
      className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-[#4e8f27] flex items-center justify-center text-white shadow-lg shadow-[#8cc63f]/30 ring-1 ring-white/50 ${className}`}
    >
      <Icon className="w-7 h-7 drop-shadow-sm" />
    </div>
  );
}

export function SuburbLocationPage({ data }: { data: SuburbLocationData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const darwinOffice = OFFICE_LOCATIONS[0];

  const introImage = data.introImage || "/assets/images/hosted/aerial.webp";
  const introImageAlt =
    data.introImageAlt || `Rooftop solar across ${data.suburb} and Darwin's northern suburbs`;
  const whyImage = "/assets/images/home/home-about-stuart-park.webp";

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
      "@type": "Service",
      name: `Solar Installation and Repair ${data.suburb}`,
      provider: {
        "@type": "LocalBusiness",
        name: "Oneroof Solar",
        image: "/assets/images/home/logo-oneroof.png",
        telephone: PRIMARY_PHONE,
        email: "info@oneroofsolar.com.au",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3/97 Pruen Rd",
          addressLocality: "Berrimah",
          addressRegion: "NT",
          postalCode: "0828",
          addressCountry: "AU",
        },
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: data.suburb },
        { "@type": "AdministrativeArea", name: "Darwin" },
      ],
      description: `Solar panel installation, battery storage, inverter solutions and solar repairs for residential and commercial properties across ${data.suburb}.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://oneroofsolar.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://oneroofsolar.com.au/locations/northern-darwin/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.suburb,
          item: data.seo.canonicalUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Oneroof Solar ${data.suburb}`,
      image: "/assets/images/home/logo-oneroof.png",
      telephone: PRIMARY_PHONE,
      email: "info@oneroofsolar.com.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3/97 Pruen Rd",
        addressLocality: "Berrimah",
        addressRegion: "NT",
        postalCode: "0828",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.geo.latitude,
        longitude: data.geo.longitude,
      },
      url: data.seo.canonicalUrl,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.rating,
        reviewCount: data.reviewCount,
      },
      serviceArea: data.serviceAreaNames.map((name) => ({
        "@type": "Place",
        name,
      })),
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
                className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <a
                  href="https://oneroofsolar.com.au/"
                  className="hover:text-[#8cc63f] transition-colors"
                >
                  Home
                </a>
                <span className="text-slate-500" aria-hidden="true">
                  &gt;
                </span>
                <span className="text-slate-400">Locations</span>
                <span className="text-slate-500" aria-hidden="true">
                  &gt;
                </span>
                <span className="text-[#8cc63f]" aria-current="page">
                  {data.suburb}
                </span>
              </nav>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Solar Installation and Repair in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                  {data.heroHighlight}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                {data.heroParagraph}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get a Free {data.suburb} Solar Quote</a>
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
                {data.trustChips.map((chip) => (
                  <div
                    key={chip}
                    className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold"
                  >
                    <Check className="w-4 h-4 text-[#8cc63f] shrink-0" />
                    {chip}
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
                    {data.rating} <Star className="w-4 h-4 fill-[#8cc63f]" />
                  </div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">
                    {data.reviewCount} Reviews
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* Intro (image-led) */}
      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-[#8cc63f] text-xs font-bold uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4" /> Local {data.suburb} Solar Team
              </span>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                {data.introHeading}
              </h2>
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
                {data.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
                <img
                  src={introImage}
                  alt={introImageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-[#0A1118]/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-[#8cc63f] flex items-center justify-center text-[#19281D] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-black text-sm leading-tight">
                      SAA Accredited Installers
                    </div>
                    <div className="text-slate-300 text-xs font-medium">
                      Cyclone-rated systems for {data.suburb}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Residential / Commercial / Off-Grid */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                {data.systemsHeading}
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.systemTypes.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={0.1 * (i + 1)}
                className="group bg-white rounded-[2rem] border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={SYSTEM_IMAGES[item.href] || data.heroImage}
                    alt={`${item.title} in ${data.suburb}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/50 to-transparent" />
                  <IconBadge icon={item.icon} className="absolute -bottom-7 left-6" />
                </div>
                <div className="p-8 pt-10 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed flex-1 mb-6">
                    {item.text}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA 1 */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                {data.midCta.heading}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                {data.midCta.text}
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                {data.midCta.button} &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                {data.relatedHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.relatedIntro}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.relatedServices.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={Math.min(0.05 * i, 0.25)}
                className={`group bg-white rounded-[2rem] border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm overflow-hidden ${
                  i === data.relatedServices.length - 1 &&
                  data.relatedServices.length % 3 === 2
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={SERVICE_IMAGES[item.href] || data.heroImage}
                    alt={`${item.title} in ${data.suburb}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/50 to-transparent" />
                  <IconBadge icon={item.icon} className="absolute -bottom-7 left-6 w-12 h-12 rounded-xl" />
                </div>
                <div className="p-8 pt-9 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                    {item.text}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose (image-backed) */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case">
                {data.whyHeading}
              </h2>
              <ul className="space-y-5">
                {data.whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15} className="sticky top-28">
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={whyImage}
                  alt={`OneRoof Solar team installing solar near ${data.suburb}`}
                  loading="lazy"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <IconBadge icon={Shield} className="mb-4" />
                  <h3 className="text-xl font-black text-white tracking-tight mb-2 normal-case">
                    {data.highlightCard.heading}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-4">
                    {data.highlightCard.text}
                  </p>
                  <div className="flex items-center gap-3 text-white font-bold text-sm">
                    <Sun className="w-5 h-5 text-[#8cc63f]" />
                    {data.highlightCard.tag}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent projects strip */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Recent Solar Projects Across the NT
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A look at residential and commercial systems our Berrimah-based team has installed
                across Darwin and the Northern Territory, built for the same heat, humidity and wet
                season your {data.suburb} property faces.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROJECT_IMAGES.map((project, i) => (
              <FadeIn key={project.src} delay={0.1 * i}>
                <div className="group relative rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                  <img
                    src={project.src}
                    alt={project.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-[#0A1118]/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm">
                      <Sun className="w-4 h-4 text-[#8cc63f]" />
                      {project.label}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeIn>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
              >
                View all solar projects <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Repair CTA */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                {data.repairCta.heading}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                {data.repairCta.text}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#quote-form"
                  className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                >
                  {data.repairCta.button}
                </a>
                <a
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="inline-block bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                >
                  Call {PRIMARY_PHONE}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                {data.mapHeading}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">
                {data.mapParagraph}
              </p>
              <div className="flex items-start gap-3 text-slate-700 font-medium">
                <MapPin className="w-5 h-5 text-[#8cc63f] shrink-0 mt-0.5" />
                <span>{darwinOffice.address}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <LocationMapCard location={darwinOffice} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Nearby Solar Coverage */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              {data.nearbyHeading}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              {data.nearbySegments.map((seg, i) => {
                if (typeof seg === "string") {
                  return <Fragment key={i}>{seg}</Fragment>;
                }
                if (seg.to) {
                  return (
                    <Link
                      key={i}
                      to={seg.to}
                      className="text-[#8cc63f] font-semibold hover:underline"
                    >
                      {seg.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={i}
                    href={seg.href}
                    className="text-[#8cc63f] font-semibold hover:underline"
                  >
                    {seg.label}
                  </a>
                );
              })}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">
                  {data.faqIntro}
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
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
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
                  {data.quoteHeading}
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  {data.quoteParagraph}
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
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Call Our Team
                      </div>
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
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Email Inquiry
                      </div>
                      <div className="text-base sm:text-lg font-black">info@oneroofsolar.com.au</div>
                    </div>
                  </a>

                  <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                      <BadgeCheck className="w-5 h-5 text-[#8cc63f]" /> SAA Accredited
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                      <Zap className="w-5 h-5 text-[#8cc63f]" /> STC Discounts Upfront
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                      <Star className="w-5 h-5 text-[#8cc63f] fill-[#8cc63f]" /> {data.rating} /{" "}
                      {data.reviewCount} Reviews
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <QuoteForm
                title={data.quoteFormTitle}
                defaultInterest="Residential Solar Panels"
                source={data.quoteSource}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight normal-case">
              {data.finalCtaHeading}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              {data.finalCtaText}
            </p>
            <a
              href="#quote-form"
              className="inline-block bg-[#8cc63f] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
            >
              {data.finalCtaButton} &rarr;
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default SuburbLocationPage;
