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
import jaSolarImg from "../assets/images/ja_solar_panel_1784285635251.jpg";
import longiSolarImg from "../assets/images/longi_solar_panel_1784285655984.jpg";

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
    productLink: "/solar-panels-brands/aiko/",
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
  {
    id: "ja-solar",
    title: "JA Solar - Proven Value and Performance",
    excerpt: "JA Solar is one of the world’s largest solar manufacturers, with more than 346 gigawatts shipped globally.",
    remaining: "Its DeepBlue N-type TOPCon panels deliver over 22 per cent efficiency and include a 30-year performance warranty. As a Tier 1 brand, JA Solar offers proven reliability and strong value for NT homeowners.",
    bestFor: "NT homeowners seeking reliable, high-efficiency solar panels from a globally established brand at a competitive price point.",
    specLabel: "FULL SPECS AND MODELS: JA SOLAR PANELS",
    productLink: "/product/ja-solar/",
    image: jaSolarImg,
  },
  {
    id: "longi-solar",
    title: "LONGi Solar - High Efficiency and Anti-Dust Design",
    excerpt: "LONGi is the world’s largest solar panel manufacturer.",
    remaining: "Its Hi-MO X6 panels use advanced HPBC technology, delivering efficiency of up to 23.3 per cent. The anti-dust frame is well suited to Darwin’s dust, humidity, and coastal salt conditions.",
    bestFor: "Darwin homeowners seeking high-efficiency solar panels designed to perform reliably in hot, humid, dusty, and coastal environments.",
    specLabel: "FULL SPECS AND MODELS: LONGi SOLAR PANELS",
    productLink: "/product/longi-solar/",
    image: longiSolarImg,
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
                  Solar Panel Brands NT
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
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-xs mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  Selection Criteria
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 uppercase leading-tight">
                  How We Choose Which <span className="text-brand-600">Brands to Install</span>
                </h2>
                <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                  We do not add a panel to our inventory because it looks good in a brochure. Every brand we carry is evaluated against three things that matter for NT installations specifically.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0.1} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Temperature coefficient</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  This tells you how much power a panel loses for every degree above 25°C. Darwin rooftops regularly reach 65°C to 75°C in the dry season. A panel with a coefficient of -0.24%/°C retains noticeably more output on a 70°C roof than one rated at -0.34%/°C. Over a full dry season that difference is real money.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Cyclone wind load certification</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Every rooftop installation in Darwin requires panels to meet structural requirements set by the Northern Territory Government before Power and Water Corporation approves grid connection. All three brands we install meet these standards.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Long-term output guarantee</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  A panel that drops to 70 per cent output by Year 20 is not the same investment as one guaranteed to hold 90 per cent. We only carry brands with strong, verified performance warranties.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12 lg:mb-16">
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-semibold text-xs mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  BRANDS WE INSTALL
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 uppercase">
                  Solar Panel Brands <br />
                  <span className="text-brand-600">We Install Across the NT</span>
                </h2>
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                  Choosing the right solar panel brand matters more in the Northern Territory than almost anywhere else in Australia. Darwin's dry season pushes rooftop temperatures past 70°C. Cyclone season demands structural wind load certification. And your panels need to keep producing for 25 years in one of the harshest climates on the continent. At Oneroof Solar, we install five brands across Darwin, Palmerston, Alice Springs and the broader NT: AIKO, REC, Jinko, JA Solar and LONGi. Each one earns its place for a specific reason.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 aspect-[4/3] flex items-center justify-center">
                  <img
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    src="https://i.postimg.cc/ZqJnC3Sv/high-level-description-shot-on-iphone-a-Q9Cc-Iy-X7X-u10npe4Pfzlg-ngfs-MO-1Tw-CCPDb0e-Ibtc-A-cover-sd.jpg"
                    alt="AIKO ABC, REC HJT and Jinko TOPCon solar panel brands installed by Oneroof Solar across Darwin and the Northern Territory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BRAND_PRODUCTS.map((product, idx) => {
              const isExpanded = expandedBrands[product.id] || false;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:border-brand-500/50 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="h-64 sm:h-[280px] mb-6 rounded-xl overflow-hidden bg-slate-950 border border-slate-200 relative flex items-center justify-center p-2">
                        <img
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-600 text-xs font-mono uppercase shadow-xs">
                          Solar Panel
                        </span>
                        <span className="px-2.5 py-1 bg-brand-50 border border-brand-200 rounded-md text-brand-700 text-xs font-mono uppercase shadow-xs flex items-center gap-1 font-bold">
                          <Zap className="w-3 h-3 text-brand-500" /> High Yield
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-brand-600 transition-colors">
                        {product.title}
                      </h3>

                      <div className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-4 flex-grow">
                        <p>{product.excerpt}</p>
                        
                        {isExpanded && (
                          <div className="mt-4 space-y-4 pt-4 border-t border-slate-200">
                            <p className="text-slate-600">{product.remaining}</p>
                            <div className="p-4 rounded-xl bg-white border border-slate-200">
                              <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-1 font-mono">Best For</p>
                              <p className="text-slate-700 text-sm font-medium leading-relaxed">{product.bestFor}</p>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => setExpandedBrands(prev => ({ ...prev, [product.id]: !isExpanded }))}
                          className="text-brand-700 hover:text-brand-800 text-xs font-bold flex items-center gap-1 mt-3 focus:outline-none transition-colors border border-brand-200 px-3 py-1 rounded-full bg-white hover:bg-brand-50"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <Link
                          to={product.productLink}
                          className="text-brand-600 hover:text-brand-700 text-xs font-bold transition-colors block mb-3 underline hover:no-underline font-mono uppercase tracking-wider"
                        >
                          {product.specLabel} →
                        </Link>

                        <Link
                          to="/contact"
                          className="flex items-center justify-between group/link"
                        >
                          <span className="text-xs font-bold text-slate-900 tracking-wider uppercase group-hover/link:text-brand-600 transition-colors">
                            Get a Free Quote
                          </span>
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center group-hover/link:bg-brand-500 group-hover/link:text-slate-900 transition-all duration-300 text-slate-700 shadow-xs border border-slate-300">
                            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform duration-300" />
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
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 uppercase">
                Compare Our <span className="text-brand-600">Solar Panel Brands</span>
              </h2>
              <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                All five brands are CEC approved, STC eligible and cyclone rated for NT installations. The right choice depends on your roof size, budget and how long you plan to stay in the property.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70">
                    <th className="sticky left-0 bg-slate-100 z-20 p-5 text-xs font-bold uppercase tracking-wider text-slate-700 border-r border-slate-200">Specifications</th>
                    <th className="p-5 text-lg font-black text-slate-900 text-center border-l border-slate-200 bg-brand-50/50">
                      <span className="text-brand-700">AIKO ABC</span>
                    </th>
                    <th className="p-5 text-lg font-black text-slate-900 text-center border-l border-slate-200 bg-emerald-50/50">
                      <span className="text-emerald-700">REC HJT</span>
                    </th>
                    <th className="p-5 text-lg font-black text-slate-900 text-center border-l border-slate-200">
                      <span>Jinko TOPCon</span>
                    </th>
                    <th className="p-5 text-lg font-black text-slate-900 text-center border-l border-slate-200">
                      <span>JA Solar TOPCon</span>
                    </th>
                    <th className="p-5 text-lg font-black text-slate-900 text-center border-l border-slate-200">
                      <span>LONGi HPBC</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">Cell technology</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium bg-brand-50/30">All Back Contact N-type</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium bg-emerald-50/30">Heterojunction N-type</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium">TOPCon N-type</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium">TOPCon N-type</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium">HPBC N-type</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">Module efficiency</td>
                    <td className="p-5 text-center border-l border-slate-200 font-bold bg-brand-50/30 text-brand-700">Above 25%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium bg-emerald-50/30 text-slate-700">22.3%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">Above 22%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">Up to 22.7%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">Up to 23.3%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">Temperature coefficient</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium bg-brand-50/30 text-slate-700">-0.26%/°C</td>
                    <td className="p-5 text-center border-l border-slate-200 font-bold bg-emerald-50/30 text-brand-700">-0.24%/°C</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">-0.26%/°C</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">-0.35%/°C</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">-0.29%/°C</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">Performance warranty</td>
                    <td className="p-5 text-center border-l border-slate-200 font-bold bg-brand-50/30 text-brand-700">30 years</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium bg-emerald-50/30 text-slate-700">25 years</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">25 years</td>
                    <td className="p-5 text-center border-l border-slate-200 font-bold text-brand-700">30 years</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">25 years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">Year 25 output guarantee</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium bg-brand-50/30 text-slate-700">90.6%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-bold bg-emerald-50/30 text-brand-700">92%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">84.8%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">87.4%</td>
                    <td className="p-5 text-center border-l border-slate-200 font-medium text-slate-700">89.4%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">Cyclone rated</td>
                    <td className="p-5 text-center border-l border-slate-200 bg-brand-50/30 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 bg-emerald-50/30 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 text-emerald-700 font-bold">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="sticky left-0 bg-white z-10 p-5 font-bold text-slate-900 border-r border-slate-200">STC eligible NT</td>
                    <td className="p-5 text-center border-l border-slate-200 bg-brand-50/30 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 bg-emerald-50/30 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 text-emerald-700 font-bold">Yes</td>
                    <td className="p-5 text-center border-l border-slate-200 text-emerald-700 font-bold">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Brand focus badges */}
            <div className="mt-8 flex flex-wrap gap-2.5 justify-center">
              <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
                <span className="text-brand-600 font-extrabold">AIKO</span> — Limited Roof, Max Output
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
                <span className="text-emerald-700 font-extrabold">REC</span> — Lowest Heat Loss
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
                <span className="text-slate-800 font-extrabold">Jinko</span> — Proven Value
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
                <span className="text-brand-600 font-extrabold">JA Solar</span> — Best 30-Year Warranty at Budget Price
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
                <span className="text-blue-700 font-extrabold">LONGi</span> — World's Largest Manufacturer
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4.5 — PREMIUM SOLAR REBATE CTA */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/60 rounded-2xl sm:rounded-3xl p-8 md:p-14 border border-white/10 text-center shadow-2xl relative overflow-hidden">
            <FadeIn>
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6">
                <Sun className="w-8 h-8" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
                Save Up to <span className="text-brand-400">$3,000+</span> on Your Solar Installation in NT, Australia
              </h2>

              <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Lock in your STC rebate before it changes and receive a free, custom solar system design built for the Northern Territory's extreme heat. We'll recommend the best solar brand to match your home and budget, with no obligation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-md uppercase tracking-wider text-xs"
                  asChild
                >
                  <Link to="/contact">
                    Get My Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 transition-all h-14 uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="tel:0483986444">
                    CALL OUR TEAM
                  </a>
                </Button>
              </div>

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
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Why Choose Our Solar Panels
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
                Future-proof your NT home with panels selected for the Top End, not just the catalogue.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn
              delay={0.1}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 border border-brand-200">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                Maximum Yield
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                Every brand we carry uses next-generation N-type cell technology with anti-reflective glass. More sunlight captured throughout the day means more electricity from your roof and a faster payback on your Jacana Energy bill.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 border border-brand-200">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                Extreme Durability
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                Our panels are engineered to withstand the harshest NT conditions including dry season heat above 70°C, cyclonic winds and wet season humidity. Every brand is structurally certified for Darwin's cyclone zone before we add it to our range.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 border border-brand-200">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                Safe and Certified
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                Every installation is carried out exclusively by our Clean Energy Council (CEC) accredited electricians to meet strict Australian safety standards and Northern Territory building regulations. Your system is grid connected through Power and Water Corporation once all certifications are confirmed.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR PROVEN PROCESS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 uppercase">
                How We Deliver <span className="text-brand-600">Your Solar System</span>
              </h2>
              <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                A fully managed four-step process from your first call to switching on your new panels.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <FadeIn delay={0.1} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col h-full">
              <span className="text-4xl font-black text-brand-500 font-mono block mb-4">01</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">1. Consultation and Quote</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                We review your last three Jacana Energy bills and survey your roof to understand your exact usage pattern and available space. You receive a transparent, custom quote with the STC rebate already applied.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col h-full">
              <span className="text-4xl font-black text-brand-500 font-mono block mb-4">02</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">2. System Design</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Our engineers design a custom layout to maximise sunlight capture across your specific roof orientation. We confirm which panel brand suits your space, select the right inverter and size the system to your actual daytime consumption.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col h-full">
              <span className="text-4xl font-black text-brand-500 font-mono block mb-4">03</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">3. Expert Installation</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Our CEC accredited installers fit your system safely and neatly to NT building standards. The installation is swift and causes minimal disruption to your household. All cyclone-rated mounting requirements are handled by our team.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col h-full">
              <span className="text-4xl font-black text-brand-500 font-mono block mb-4">04</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">4. Commissioning & Handover</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
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
