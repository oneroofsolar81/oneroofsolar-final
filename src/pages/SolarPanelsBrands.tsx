import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { PartnersMarquee } from "@/src/components/PartnersMarquee";
import { FaqSection } from "@/src/components/FaqSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { SEO } from "@/src/components/SEO";
import { Button } from "@/src/components/ui/Button";
import {
  ArrowRight,
  Shield,
  Zap,
  Percent,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sun,
  Smartphone,
  Check,
  X,
} from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

type ProductBrand = {
  id: string;
  title: string;
  excerpt: string;
  remaining: string;
  bestFor: string;
  specLabel: string;
  productLink: string;
  image: string;
};

const BRAND_PRODUCTS: ProductBrand[] = [
  {
    id: "aiko",
    title: "AIKO Solar - Highest Efficiency",
    excerpt: "AIKO's All Back Contact (ABC) N-type technology removes all metal grid lines from the front of the photovoltaic cell. More sunlight reaches the active layer, pushing efficiency above 25 per cent, the highest of any panel we supply.",
    remaining: "AIKO won the 2025 SolarQuotes Installers Choice Award for best solar panel brand in Australia. Their Gen 3 panels carry a 30-year performance warranty guaranteeing 88.85 per cent output at Year 30.",
    bestFor: "NT rooftops with limited usable space. Maximum output per panel where cyclone strapping or rooftop equipment reduces available area.",
    specLabel: "Full specs and models: AIKO solar panels",
    productLink: "/solar-panels/aiko/",
    image: "https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png",
  },
  {
    id: "rec",
    title: "REC Group - Best Heat Performance",
    excerpt: "REC is a Norwegian manufacturer whose HJT (Heterojunction Technology) panels achieve a temperature coefficient of -0.24%/°C, the lowest of any brand we carry.",
    remaining: "On Darwin rooftops reaching 65°C to 75°C in the dry season, REC panels retain more rated output than any other panel in our range. Backed by a comprehensive 25-year ProTrust warranty and a strong long-term track record with Australian installers.",
    bestFor: "Darwin homes where heat performance is the top priority and the NT dry season runs your panels hard every day.",
    specLabel: "Full specs and models: REC solar panels",
    productLink: "/solar-panels/rec/",
    image: "https://i.postimg.cc/Th46LV0n/REC-Alpha-Series-removebg-preview.png",
  },
  {
    id: "jinko",
    title: "Jinko Solar - Proven Value and Track Record",
    excerpt: "Jinko is the world's largest solar panel manufacturer, holding 18 per cent global market share and having shipped over 260 gigawatts worldwide.",
    remaining: "Their Tiger Neo N-type TOPCon panels deliver above 22 per cent efficiency with a 25-year product warranty that includes labour cost coverage for warranty replacements. A Tier 1 brand with a strong Australian support network.",
    bestFor: "NT homeowners who want a proven global brand with a competitive price point and reliable long-term support.",
    specLabel: "Full specs and models: Jinko solar panels",
    productLink: "/solar-panels/jinko/",
    image: "https://i.postimg.cc/T58B094S/Jinko-Solar-Tiger-Neo-JKM585N-72HL4-BDV-585W-ver2-1-removebg-preview-(1).png",
  },
];

export function SolarPanelsBrands() {
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>({});

  const seoData = {
    title: "Premium Solar Panel Brands NT | Oneroof Solar Darwin",
    metaDescription: "Oneroof Solar installs AIKO, REC and Jinko solar panels across Darwin, Palmerston, Alice Springs and the NT. STC approved, cyclone rated, 25-year warranty minimum. Get a free quote.",
    canonicalUrl: "/product/solar-panels-brands/",
  };

  const BRAND_FAQS = [
    {
      q: "Which solar panel brand is best for Darwin and the NT?",
      a: "It depends on your roof. AIKO suits homes with limited usable space where maximum output per panel matters most. REC suits buyers who want the best heat performance in Darwin's dry season. Jinko suits buyers who want a proven Tier 1 brand at a competitive price. All three are cyclone rated and STC eligible for NT installations.",
    },
    {
      q: "Do solar panels work during Darwin's wet season?",
      a: "Yes. All three brands continue to generate electricity on overcast and rainy days, typically producing 10 to 25 per cent of rated output. Every system we design uses full-year production averages across both wet and dry seasons so your expected savings are realistic from the start.",
    },
    {
      q: "Are these panels covered by the STC rebate in the NT?",
      a: "Yes. AIKO received Clean Energy Council approval in March 2026. REC and Jinko have been CEC approved for years. All three qualify for the federal STC rebate on NT installations, which is deducted from your system price before you pay.",
    },
    {
      q: "Which solar panel has the best warranty?",
      a: "AIKO offers the longest performance warranty at 30 years, guaranteeing 88.85 per cent output at Year 30. REC guarantees 92 per cent at Year 25 with a 25-year ProTrust warranty. Jinko's 25-year warranty includes labour cost coverage for warranty replacements, which is a practical advantage given NT logistics.",
    },
    {
      q: "How do you choose which panels suit my NT roof?",
      a: (
        <span>
          We review your last three Jacana Energy bills, assess your roof space and factor in your daytime usage pattern. See our{" "}
          <Link to="/services/solar-panel-installation" className="text-brand-500 hover:underline font-bold">
            solar panel installation page
          </Link>{" "}
          for full system details, or contact us directly for a free quote.
        </span>
      ),
    },
    {
      q: "What does temperature coefficient mean for Darwin homes?",
      a: "The temperature coefficient measures how much panel output drops for every degree Celsius above 25°C. Darwin rooftops regularly reach 65°C to 75°C in the dry season. A panel rated at -0.24%/°C retains noticeably more power on those days than one rated at -0.34%/°C. Over a full dry season that difference translates directly into electricity generated and money saved.",
    },
    {
      q: "How do I know what size system I need?",
      a: (
        <span>
          Our team reviews your last three Jacana Energy bills and sizes your system to your actual usage pattern. See our{" "}
          <Link to="/services/solar-panel-installation" className="text-brand-500 hover:underline font-bold">
            solar panel installation page
          </Link>{" "}
          for full details, or contact us directly for a free quote.
        </span>
      ),
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://oneroofsolar.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://oneroofsolar.com.au/product/solar-panels-brands/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Solar Panel Brands",
          "item": "https://oneroofsolar.com.au/product/solar-panels-brands/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Premium Solar Panel Brands NT We Install",
      "description": "Premium solar panel brands installed by Oneroof Solar in Darwin, Palmerston, Alice Springs and the NT.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AIKO Solar",
          "description": "High-efficiency, premium N-type ABC solar panels delivering maximum power output and stunning aesthetics."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "REC Group",
          "description": "Norwegian manufacturer of highly efficient HJT solar panels with outstanding temperature coefficient performance."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jinko Solar",
          "description": "The world's largest solar panel manufacturer, producing ultra-reliable Tiger Neo TOPCon panels."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which solar panel brand is best for Darwin and the NT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your roof. AIKO suits homes with limited usable space where maximum output per panel matters most. REC suits buyers who want the best heat performance in Darwin's dry season. Jinko suits buyers who want a proven Tier 1 brand at a competitive price. All three are cyclone rated and STC eligible for NT installations."
          }
        },
        {
          "@type": "Question",
          "name": "Do solar panels work during Darwin's wet season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All three brands continue to generate electricity on overcast and rainy days, typically producing 10 to 25 per cent of rated output. Every system we design uses full-year production averages across both wet and dry seasons so your expected savings are realistic from the start."
          }
        },
        {
          "@type": "Question",
          "name": "Are these panels covered by the STC rebate in the NT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AIKO received Clean Energy Council approval in March 2026. REC and Jinko have been CEC approved for years. All three qualify for the federal STC rebate on NT installations, which is deducted from your system price before you pay."
          }
        },
        {
          "@type": "Question",
          "name": "Which solar panel has the best warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AIKO offers the longest performance warranty at 30 years, guaranteeing 88.85 per cent output at Year 30. REC guarantees 92 per cent at Year 25 with a 25-year ProTrust warranty. Jinko's 25-year warranty includes labour cost coverage for warranty replacements, which is a practical advantage given NT logistics."
          }
        },
        {
          "@type": "Question",
          "name": "How do you choose which panels suit my NT roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We review your last three Jacana Energy bills, assess your roof space and factor in your daytime usage pattern. See our solar panel installation page for full system details, or contact us directly for a free quote."
          }
        },
        {
          "@type": "Question",
          "name": "What does temperature coefficient mean for Darwin homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The temperature coefficient measures how much panel output drops for every degree Celsius above 25°C. Darwin rooftops regularly reach 65°C to 75°C in the dry season. A panel rated at -0.24%/°C retains noticeably more power on those days than one rated at -0.34%/°C. Over a full dry season that difference translates directly into electricity generated and money saved."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know what size system I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team reviews your last three Jacana Energy bills and sizes your system to your actual usage pattern. See our solar panel installation page for full details, or contact us directly for a free quote."
          }
        }
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale-[50%]"
          >
            <source
              src="https://cdn.pixabay.com/video/2021/11/14/96813-644781744_tiny.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/80 to-transparent flex"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn isHero>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6 font-mono">
                <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
                <span>&gt;</span>
                <span className="text-slate-300">Solar Panels</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-8 uppercase">
                Premium <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                  Solar Panel Brands NT.
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-6 font-medium border-l-2 border-brand-400/50 pl-6">
                We supply high-efficiency solar panels chosen for Darwin's heat, cyclone conditions and the NT climate. Every panel we install is STC approved, cyclone rated and backed by a minimum 25-year warranty.
              </p>

              <p className="text-md text-brand-400 font-bold mb-8 uppercase tracking-wider">
                Explore our range of industry-leading solar panels.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                  asChild
                >
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-white border-white/20 font-bold hover:bg-transparent hover:text-white hover:border-white/20 transition-all h-14 hover:-translate-y-1 uppercase tracking-widest"
                  asChild
                >
                  <a href="tel:0483986444">
                    Call Us 0483986444
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative hidden lg:block">
              <div className="w-full aspect-square bg-gradient-to-br from-brand-500/20 to-emerald-600/20 rounded-full blur-3xl absolute inset-0 animate-pulse"></div>
              <img
                referrerPolicy="no-referrer"
                fetchPriority="high"
                src="https://i.postimg.cc/ZqJnC3Sv/high-level-description-shot-on-iphone-a-Q9Cc-Iy-X7X-u10npe4Pfzlg-ngfs-MO-1Tw-CCPDb0e-Ibtc-A-cover-sd.jpg"
                alt="Premium Solar Panel Brands NT"
                className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] border border-white/10 shadow-2xl opacity-90"
              />

              <div className="absolute top-10 right-10 bg-[#0A1118]/80 backdrop-blur-md border border-brand-500/30 p-6 rounded-2xl z-20">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-white">25</span>
                  <span className="text-brand-400 font-bold mb-1">Yrs</span>
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-widest font-mono">
                  Minimum Warranty
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* SECTION 2 — HOW WE CHOOSE WHICH BRANDS TO INSTALL */}
      <section className="py-24 lg:py-32 bg-[#0A1118] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-slate-300 font-semibold text-sm mb-6 shadow-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_rgba(140,198,63,0.8)]"></span>
                  Selection Criteria
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.95]">
                  How We Choose Which <span className="text-brand-500">Brands to Install.</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  We do not add a panel to our inventory because it looks good in a brochure. Every brand we carry is evaluated against three things that matter for NT installations specifically.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Temperature coefficient</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  This tells you how much power a panel loses for every degree above 25°C. Darwin rooftops regularly reach 65°C to 75°C in the dry season. A panel with a coefficient of -0.24%/°C retains noticeably more output on a 70°C roof than one rated at -0.34%/°C. Over a full dry season that difference is real money.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Cyclone wind load certification</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Every rooftop installation in Darwin requires panels to meet structural requirements set by the Northern Territory Government before Power and Water Corporation approves grid connection. All three brands we install meet these standards.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Long-term output guarantee</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  A panel that drops to 70 per cent output by Year 20 is not the same investment as one guaranteed to hold 90 per cent. We only carry brands with strong, verified performance warranties.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-24 lg:py-32 bg-[#0A1118] relative">
        <div className="absolute inset-0 bg-dot-white/[0.05] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 lg:mb-24">
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-slate-300 font-semibold text-sm mb-6 shadow-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_rgba(140,198,63,0.8)]"></span>
                  BRANDS WE INSTALL
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
                  Solar Panel Brands <br />
                  <span className="text-brand-400">We Install Across the NT</span>
                </h2>
                <p className="text-slate-400 font-medium text-lg leading-relaxed">
                  Choosing the right solar panel brand matters more in the Northern Territory than almost anywhere else in Australia. Darwin's dry season pushes rooftop temperatures past 70°C. Cyclone season demands structural wind load certification. And your panels need to keep producing for 25 years in one of the harshest climates on the continent. At Oneroof Solar, we install three brands across Darwin, Palmerston, Alice Springs and the broader NT: AIKO, REC and Jinko. Each one earns its place for a specific reason.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[4/3] flex items-center justify-center">
                  <img
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    src="https://i.postimg.cc/ZqJnC3Sv/high-level-description-shot-on-iphone-a-Q9Cc-Iy-X7X-u10npe4Pfzlg-ngfs-MO-1Tw-CCPDb0e-Ibtc-A-cover-sd.jpg"
                    alt="AIKO ABC, REC HJT and Jinko TOPCon solar panel brands installed by Oneroof Solar across Darwin and the Northern Territory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {BRAND_PRODUCTS.map((product, idx) => {
              const isExpanded = expandedBrands[product.id] || false;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-900/40 rounded-[2rem] p-6 lg:p-8 border border-white/10 shadow-2xl hover:border-brand-500/40 transition-all duration-500 h-full flex flex-col group relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 group-hover:bg-brand-500/20 z-0"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="h-64 sm:h-[320px] mb-8 rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group-hover:border-white/20 transition-colors duration-500 flex items-center justify-center p-2">
                        <img
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-100 z-0 drop-shadow-2xl"
                        />
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300 text-xs font-mono tracking-widest uppercase shadow-sm">
                          Solar Panel
                        </span>
                        <span className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-md text-brand-400 text-xs font-mono tracking-widest uppercase shadow-sm flex items-center gap-1">
                          <Zap className="w-3 h-3" /> High Yield
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-brand-400 transition-colors">
                        {product.title}
                      </h3>

                      <div className="text-slate-400 text-base leading-relaxed font-medium mb-4 flex-grow">
                        <p>{product.excerpt}</p>
                        
                        {isExpanded && (
                          <div className="mt-4 space-y-4 pt-4 border-t border-white/5">
                            <p className="text-slate-300">{product.remaining}</p>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-1 font-mono">Best For</p>
                              <p className="text-slate-300 text-sm font-medium leading-relaxed">{product.bestFor}</p>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => setExpandedBrands(prev => ({ ...prev, [product.id]: !isExpanded }))}
                          className="text-brand-400 hover:text-brand-300 text-sm font-bold flex items-center gap-1 mt-4 focus:outline-none transition-colors border border-brand-500/20 px-3 py-1.5 rounded-full hover:bg-brand-500/10"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/10">
                        <Link
                          to={product.productLink}
                          className="text-brand-400 hover:text-brand-300 text-sm font-bold transition-colors block mb-4 underline hover:no-underline font-mono uppercase tracking-wider"
                        >
                          {product.specLabel} →
                        </Link>

                        <Link
                          to="/contact"
                          className="flex items-center justify-between group/link"
                        >
                          <span className="text-sm font-bold text-white tracking-widest uppercase group-hover/link:text-brand-400 transition-colors">
                            Get a Free Quote
                          </span>
                          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-brand-500 group-hover/link:text-slate-900 transition-all duration-300 text-white shadow-sm border border-white/10 group-hover/link:border-brand-400">
                            <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-rotate-45 transition-transform duration-300" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — BRAND COMPARISON TABLE */}
      <section className="py-24 lg:py-32 bg-[#0A1118] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                Compare Our <span className="text-brand-400">Solar Panel Brands</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                All three brands are CEC approved, STC eligible and cyclone rated for NT installations. The right choice depends on your roof size, budget and how long you plan to stay in the property.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-900/60">
                    <th className="p-6 text-sm font-semibold uppercase tracking-wider font-mono text-slate-400">Specifications</th>
                    <th className="p-6 text-xl font-black text-white text-center border-l border-white/5 bg-brand-500/5">
                      <span className="text-brand-400">AIKO ABC</span>
                    </th>
                    <th className="p-6 text-xl font-black text-white text-center border-l border-white/5 bg-emerald-500/5">
                      <span className="text-emerald-400">REC HJT</span>
                    </th>
                    <th className="p-6 text-xl font-black text-white text-center border-l border-white/5">
                      <span>Jinko TOPCon</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Cell technology</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-brand-500/5">All Back Contact N-type</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-emerald-500/5">Heterojunction N-type</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium">TOPCon N-type</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Module efficiency</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-brand-500/5 text-brand-400 font-bold">Above 25%</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-emerald-500/5 text-emerald-400 font-bold">22.3%</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium font-bold">Above 22%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Temperature coefficient</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-brand-500/5">-0.26%/°C</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-emerald-500/5 text-emerald-400 font-bold">-0.24%/°C</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium">-0.26%/°C</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Performance warranty</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-brand-500/5 text-brand-400 font-bold">30 years</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-emerald-500/5 font-bold">25 years</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium font-bold">25 years</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Year 25 output guarantee</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-brand-500/5">90.6%</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium bg-emerald-500/5 text-emerald-400 font-bold">92%</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium">84.8%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Cyclone rated</td>
                    <td className="p-6 text-center border-l border-white/5 bg-brand-500/5 text-emerald-400 font-bold">Yes</td>
                    <td className="p-6 text-center border-l border-white/5 bg-emerald-500/5 text-emerald-400 font-bold">Yes</td>
                    <td className="p-6 text-center border-l border-white/5 text-emerald-400 font-bold">Yes</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">STC eligible NT</td>
                    <td className="p-6 text-center border-l border-white/5 bg-brand-500/5 text-emerald-400 font-bold">Yes</td>
                    <td className="p-6 text-center border-l border-white/5 bg-emerald-500/5 text-emerald-400 font-bold">Yes</td>
                    <td className="p-6 text-center border-l border-white/5 text-emerald-400 font-bold">Yes</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">Best for NT</td>
                    <td className="p-6 text-center border-l border-white/5 bg-brand-500/5 font-medium text-brand-400">Limited roof, max output</td>
                    <td className="p-6 text-center border-l border-white/5 bg-emerald-500/5 font-medium text-emerald-400">Lowest heat loss</td>
                    <td className="p-6 text-center border-l border-white/5 font-medium text-slate-200">Proven value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4.5 — PREMIUM SOLAR REBATE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0A1118] via-[#0D2115] to-[#0A1118] relative overflow-hidden border-t border-b border-white/5">
        {/* Subtle decorative background pattern/illustration - solar grid / glowing sun */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
        
        {/* Glowing solar sun background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white/10 text-center shadow-2xl relative overflow-hidden">
            {/* Inner background radial lighting */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <FadeIn>
              {/* Icon beside/above headline */}
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6 shadow-inner">
                <Sun className="w-8 h-8 animate-spin-slow" style={{ animationDuration: '20s' }} />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
                Save Up to <span className="text-brand-400">$3,000+</span> on Your Solar Installation in NT, Australia
              </h2>

              {/* Subheadline */}
              <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
                Lock in your STC rebate before it changes and receive a free, custom solar system design built for the Northern Territory's extreme heat. We'll recommend the best solar brand to match your home and budget, with no obligation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-10 bg-brand-500 text-white border-none font-bold hover:bg-brand-600 transition-all h-14 hover:-translate-y-1 shadow-[0_0_25px_rgba(140,198,63,0.35)] uppercase tracking-widest text-sm"
                  asChild
                >
                  <Link to="/contact">
                    Get My Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-10 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-widest text-sm"
                  asChild
                >
                  <a href="tel:0483986444">
                    CALL OUR TEAM
                  </a>
                </Button>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
                <span className="flex items-center gap-1.5 text-brand-400">
                  <Check className="w-4 h-4 text-brand-500" /> Free Quote
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-brand-400">
                  <Check className="w-4 h-4 text-brand-500" /> No Obligation
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-brand-400">
                  <Check className="w-4 h-4 text-brand-500" /> STC Rebate Assistance
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE OUR SOLAR PANELS */}
      <section className="py-24 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Why Choose Our Solar Panels
              </h2>
              <p className="text-brand-900 text-lg font-bold max-w-2xl mx-auto">
                Future-proof your NT home with panels selected for the Top End, not just the catalogue.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn
              delay={0.1}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-lg">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                Maximum Yield
              </h3>
              <p className="text-white/90 font-medium leading-relaxed text-[15px]">
                Every brand we carry uses next-generation N-type cell technology with anti-reflective glass. More sunlight captured throughout the day means more electricity from your roof and a faster payback on your Jacana Energy bill.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-lg">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                Extreme Durability
              </h3>
              <p className="text-white/90 font-medium leading-relaxed text-[15px]">
                Our panels are engineered to withstand the harshest NT conditions including dry season heat above 70°C, cyclonic winds and wet season humidity. Every brand is structurally certified for Darwin's cyclone zone before we add it to our range.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-lg">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                Safe and Certified
              </h3>
              <p className="text-white/90 font-medium leading-relaxed text-[15px]">
                Every installation is carried out exclusively by our Clean Energy Council (CEC) accredited electricians to meet strict Australian safety standards and Northern Territory building regulations. Your system is grid connected through Power and Water Corporation once all certifications are confirmed.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR PROVEN PROCESS */}
      <section className="py-24 lg:py-32 bg-[#0A1118] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-dot-white/[0.03] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                How We Deliver <span className="text-brand-400">Your Solar System</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                A fully managed four-step process from your first call to switching on your new panels.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1} className="bg-slate-900/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm group hover:border-brand-500/30 transition-all duration-300">
              <span className="text-5xl font-black text-brand-500/20 group-hover:text-brand-500/40 transition-colors font-mono block mb-6">01</span>
              <h3 className="text-xl font-bold text-white mb-4">1. Consultation and Quote</h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
                We review your last three Jacana Energy bills and survey your roof to understand your exact usage pattern and available space. You receive a transparent, custom quote with the STC rebate already applied.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-slate-900/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm group hover:border-brand-500/30 transition-all duration-300">
              <span className="text-5xl font-black text-brand-500/20 group-hover:text-brand-500/40 transition-colors font-mono block mb-6">02</span>
              <h3 className="text-xl font-bold text-white mb-4">2. System Design</h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
                Our engineers design a custom layout to maximise sunlight capture across your specific roof orientation. We confirm which panel brand suits your space, select the right inverter and size the system to your actual daytime consumption.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-slate-900/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm group hover:border-brand-500/30 transition-all duration-300">
              <span className="text-5xl font-black text-brand-500/20 group-hover:text-brand-500/40 transition-colors font-mono block mb-6">03</span>
              <h3 className="text-xl font-bold text-white mb-4">3. Expert Installation</h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
                Our CEC accredited installers fit your system safely and neatly to NT building standards. The installation is swift and causes minimal disruption to your household. All cyclone-rated mounting requirements are handled by our team.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-slate-900/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm group hover:border-brand-500/30 transition-all duration-300">
              <span className="text-5xl font-black text-brand-500/20 group-hover:text-brand-500/40 transition-colors font-mono block mb-6">04</span>
              <h3 className="text-xl font-bold text-white mb-4">4. Commissioning and Handover</h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
                We test every component, complete the grid connection paperwork with Power and Water Corporation and walk you through your monitoring app so you can track savings from day one.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqSection faqs={BRAND_FAQS} />

      {/* Reviews Section */}
      <GoogleReviews />

      {/* CTA section */}
      <section className="relative py-24 sm:py-32 bg-[#0A1118] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/50 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
                <FadeIn>
                  <span className="text-brand-400 font-mono tracking-widest uppercase text-xs mb-4 block">
                    Contact Our Team
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6 uppercase">
                    Ready to Switch <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                      To Premium Solar?
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10 max-w-md">
                    Not sure which brand suits your NT roof? We will assess your space, your Jacana bill and your budget and recommend the right panel for your situation.
                  </p>
                </FadeIn>

                <div className="space-y-8">
                  <a
                    href="tel:0483986444"
                    className="flex items-center gap-6 group cursor-pointer lg:hidden xl:flex"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <Phone className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Call Us (Darwin)
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors">
                        0483 986 444
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:0483986444"
                    className="flex items-center gap-6 group cursor-pointer lg:hidden xl:flex"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <Phone className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Call Us (Alice Springs)
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors">
                        0483 986 444
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@oneroofsolar.com.au"
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <Mail className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors font-mono">
                        info@oneroofsolar.com.au
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Visit Us
                      </p>
                      <p className="text-white font-bold text-sm group-hover:text-brand-400 transition-colors">
                        Darwin: 3/97 Pruen Rd, Berrimah NT 0828
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-6 sm:p-10 lg:p-16 bg-slate-800/30 backdrop-blur-md relative z-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Book Your Consultation
                </h3>
                <p className="text-slate-400 font-medium mb-8">
                  We will get back to you within one business day.
                </p>

                <div
                  className="w-full relative bg-transparent rounded-xl overflow-hidden"
                  style={{ minHeight: "720px" }}
                >
                  <iframe
                    src="https://api.oneroofsolar.com.au/widget/form/3uXInokjWftJSJgePj2x"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "8px",
                      minHeight: "720px",
                      overflow: "hidden",
                    }}
                    scrolling="no"
                    title="Book Consultation Form"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
