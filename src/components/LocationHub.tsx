import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Sun,
  Cpu,
  BatteryCharging,
} from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { Button } from "./ui/Button";
import { PartnersMarquee } from "./PartnersMarquee";
import { SEO, SeoData } from "./SEO";
import { QuoteForm } from "./QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

export interface LocationSuburb {
  name: string;
  descriptor: string;
}

export interface LocationData {
  slug: string;
  canonicalUrl: string;
  seoTitle: string;
  metaDescription: string;
  breadcrumbName: string;
  h1Lead: string;
  h1Highlight: string;
  heroSubheadline: string;
  heroImage: string;
  heroImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  introHeading: string;
  introParagraphs: string[];
  whyHeading: string;
  whyParagraphs: string[];
  suburbsHeading: string;
  suburbsIntro: string;
  suburbs: LocationSuburb[];
  whyChooseHeading: string;
  whyChoosePoints: string[];
  quoteInfoHeading: string;
  quoteInfoText: string;
  midCtaHeading: string;
  midCtaSubtext: string;
  midCtaButton: string;
  finalCtaHeading: string;
  finalCtaSubtext: string;
  finalCtaButton: string;
  areaServed: string[];
  serviceDescription: string;
}

const siloServices = [
  { label: "Solar Panel Installation", href: "/services/solar-panel-installation", icon: Sun },
  { label: "Solar Inverters", href: "/services/solar-inverters", icon: Cpu },
  { label: "Solar Battery Storage", href: "/services/solar-battery-installation", icon: BatteryCharging },
];

const trustChips = ["Berrimah based", "4.9 star rated", "120+ reviews", "SAA Accredited"];

export function LocationHub({ data }: { data: LocationData }) {
  const seoData: SeoData = {
    title: data.seoTitle,
    metaDescription: data.metaDescription,
    canonicalUrl: data.canonicalUrl,
    robots: "index, follow",
    openGraphTitle: data.seoTitle,
    openGraphDescription: data.metaDescription,
    twitterTitle: data.seoTitle,
    twitterDescription: data.metaDescription,
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Solar Panel Installation ${data.breadcrumbName}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "image": "/assets/images/home/logo-oneroof.png",
        "telephone": PRIMARY_PHONE,
        "email": "info@oneroofsolar.com.au",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3/97 Pruen Rd",
          "addressLocality": "Berrimah",
          "addressRegion": "NT",
          "postalCode": "0828",
          "addressCountry": "AU",
        },
      },
      "areaServed": data.areaServed.map((name) => ({ "@type": "AdministrativeArea", "name": name })),
      "description": data.serviceDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://oneroofsolar.com.au/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://oneroofsolar.com.au/contact/" },
        { "@type": "ListItem", "position": 3, "name": data.breadcrumbName, "item": data.canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Oneroof Solar ${data.breadcrumbName}`,
      "image": "/assets/images/home/logo-oneroof.png",
      "telephone": PRIMARY_PHONE,
      "email": "info@oneroofsolar.com.au",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3/97 Pruen Rd",
        "addressLocality": "Berrimah",
        "addressRegion": "NT",
        "postalCode": "0828",
        "addressCountry": "AU",
      },
      "geo": { "@type": "GeoCoordinates", "latitude": -12.4386, "longitude": 130.9256 },
      "url": data.canonicalUrl,
      "serviceArea": data.areaServed.map((name) => ({ "@type": "Place", "name": name })),
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

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0A1118]/30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <FadeIn isHero>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#8cc63f] transition-colors">Home</a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-slate-400">Locations</span>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">{data.breadcrumbName}</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-6 uppercase">
                {data.h1Lead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                  {data.h1Highlight}
                </span>
              </h1>

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

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {trustChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                    <Check className="w-4 h-4 text-[#8cc63f]" />
                    {chip}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right Side Image */}
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
                    120+ Reviews
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust and Accreditation Strip */}
      <PartnersMarquee />

      {/* Intro Section */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black text-center text-slate-900 mb-8 uppercase tracking-tight">
              {data.introHeading}
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              {data.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why solar makes sense (2-col with image) */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                {data.whyHeading}
              </h2>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium space-y-5">
                {data.whyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
                <img
                  src={data.secondaryImage}
                  alt={data.secondaryImageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                {data.midCtaHeading}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                {data.midCtaSubtext}
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                {data.midCtaButton}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Suburbs We Cover */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                {data.suburbsHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.suburbsIntro}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.suburbs.map((s, i) => (
              <FadeIn
                key={s.name}
                delay={Math.min(i * 0.05, 0.3)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 h-full shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight uppercase mb-1">
                    {s.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.descriptor}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Oneroof + silo service links */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8">
                {data.whyChooseHeading}
              </h2>
              <ul className="space-y-5">
                {data.whyChoosePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
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

            <FadeIn delay={0.15}>
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
                  Explore Our Solar Services
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Every {data.breadcrumbName} install is backed by our full range of solar services.
                </p>
                <div className="space-y-3">
                  {siloServices.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-500/40 hover:shadow-sm transition-all"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="flex-1 text-slate-900 font-bold text-sm sm:text-base">{svc.label}</span>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#8cc63f] group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Primary Conversion / Inquiry Section */}
      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[#121814]/10 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
                {data.quoteInfoHeading}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                {data.quoteInfoText}
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
              </div>
            </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <QuoteForm
                title="Get Your Free Quote"
                defaultInterest="Residential Solar Panels"
                source={`location_${data.slug}`}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              {data.finalCtaHeading}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              {data.finalCtaSubtext}
            </p>
            <a
              href="#quote-form"
              className="inline-block bg-[#8cc63f] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
            >
              {data.finalCtaButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
