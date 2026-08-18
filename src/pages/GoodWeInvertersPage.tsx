import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2,
  Zap,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
  Building2,
  Check,
  HelpCircle,
  FileText,
  Battery,
  Award,
  Sun,
  ChevronDown
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";

import heroInverterImg from "../assets/images/inverter_hero_install_1785339518164.jpg";
import closeUpImg from "../assets/images/inverter_macro_close_up_1785339540642.jpg";
import quoteTabletImg from "../assets/images/inverter_quote_tablet_1785339577877.jpg";

export function GoodWeInvertersPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const seoData = {
    title: "GoodWe Inverters Darwin & NT | Oneroof Solar",
    metaDescription: "Compare GoodWe ESA and ET G2 inverter systems for homes, businesses and off-grid projects across Darwin and the NT. Supply and installation.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters/goodwe",
    robots: "index, follow",
    openGraphTitle: "GoodWe Inverters Darwin & NT | Oneroof Solar",
    openGraphDescription: "Compare GoodWe ESA and ET G2 inverter systems for homes, businesses and off-grid projects across Darwin and the NT. Supply and installation.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
    twitterTitle: "GoodWe Inverters Darwin & NT | Oneroof Solar",
    twitterDescription: "Compare GoodWe ESA and ET G2 inverter systems for homes, businesses and off-grid projects across Darwin and the NT. Supply and installation.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
  };

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
          "name": "Solar Inverters",
          "item": "https://oneroofsolar.com.au/products/solar-inverters"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "GoodWe Inverters",
          "item": "https://oneroofsolar.com.au/products/solar-inverters/goodwe"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "GoodWe Solar Inverters",
      "brand": {
        "@type": "Brand",
        "name": "GoodWe"
      },
      "description": "Compare GoodWe ESA and ET G2 inverter systems for homes, businesses and off-grid projects across Darwin and the NT. Supply and installation.",
      "category": "Solar Inverters",
      "url": "https://oneroofsolar.com.au/products/solar-inverters/goodwe",
      "image": "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/60"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono flex-wrap">
                  <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/products/solar-inverters" className="hover:text-[#5BC94D] transition-colors">Solar Inverters</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">GoodWe Inverters</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  GoodWe Solar Inverters Darwin &amp; NT
                </h1>

                <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  <p>
                    Oneroof Solar supplies and installs GoodWe solar and hybrid energy-storage inverters across Darwin and the Northern Territory.
                  </p>
                  <p>
                    Whether you need a compact single-phase system for a home or a high-voltage three-phase hybrid setup for a larger property, we help you choose the right model, supply the equipment, and complete the installation to Australian Standards.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Get a GoodWe Recommendation
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20 text-xs uppercase tracking-wider gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call 0483 986 444</span>
                  </a>
                </div>

                {/* Micro Badges */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-semibold font-mono">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#5BC94D]" />
                    CEC Approved Inverters
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#5BC94D]" />
                    Darwin &amp; NT Local Installation
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2} isHero>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/80">
                  <img
                    src={heroInverterImg}
                    alt="GoodWe Solar Inverter Installation Darwin"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5BC94D] font-bold block mb-1">Top End Certified</span>
                      <p className="text-white text-xs font-bold">GoodWe ESA &amp; ET G2 Series Available</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#5BC94D]/20 text-[#5BC94D] font-mono text-[11px] font-bold border border-[#5BC94D]/30">
                      Single &amp; 3-Phase
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS A GOODWE SOLAR INVERTER? */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                  <img
                    src={closeUpImg}
                    alt="GoodWe solar inverter engineering and build detail"
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">Global Tier 1 Manufacturer</div>
                        <div className="text-[11px] text-slate-600 font-medium">Ranked Top Solar Supplier</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                  Global Solar Manufacturer
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  What Is a GoodWe Solar Inverter?
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  <p>
                    GoodWe is a global solar inverter and energy storage manufacturer established in 2010. Ranked among the top solar inverter suppliers globally by Wood Mackenzie (H1 2025) and recognized as a Tier 1 supplier by S&amp;P Global Commodity Insights, GoodWe produces single-phase and three-phase inverters, hybrid energy-storage systems, and commercial solar solutions.
                  </p>
                  <p>
                    In Darwin and the Northern Territory, GoodWe inverters are widely installed for their reliable performance in high heat and humidity, multi-MPPT tracking, smart energy management, and compatibility with leading solar battery brands.
                  </p>
                </div>

                {/* Key Specification Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Wood Mackenzie Top Supplier</h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">Global leader in inverter supply volume (H1 2025).</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">S&amp;P Tier 1 Supplier</h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">Proven quality and financial stability.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Built for NT Climate</h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">Reliable performance in Darwin heat &amp; humidity.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Multi-MPPT Tracking</h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">Optimized yield across varied roof orientations.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: FIND THE RIGHT GOODWE SYSTEM */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                System Comparison
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Find the Right GoodWe System
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Compare GoodWe's single phase and three phase inverter series below to find the right configuration for your property:
              </p>
            </div>

            {/* Side-by-side comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
              {/* GOODWE ESA SERIES CARD */}
              <div className="bg-white border-2 border-slate-200 hover:border-[#5BC94D] rounded-2xl p-6 sm:p-8 shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
                    <span className="px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider font-mono">
                      Single Phase
                    </span>
                    <span className="text-xs font-extrabold text-slate-500 font-mono">3–10kW Capacity</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    GoodWe ESA Series
                  </h3>
                  <p className="text-slate-600 text-sm font-medium mb-6">
                    All-in-one energy-storage system for standard residential properties.
                  </p>

                  <ul className="space-y-3.5 text-slate-700 text-base font-medium mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5BC94D] shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Power phase:</strong> Single phase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5BC94D] shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Capacity:</strong> 3–10kW</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5BC94D] shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">System type:</strong> All-in-one energy-storage system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5BC94D] shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Best for:</strong> Standard homes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5BC94D] shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Battery setup:</strong> Coordinated modular system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5BC94D] shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Off-grid projects:</strong> Subject to site assessment</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    Residential Solution
                  </span>
                </div>
              </div>

              {/* GOODWE ET G2 SERIES CARD */}
              <div className="bg-white border-2 border-slate-200 hover:border-[#5BC94D] rounded-2xl p-6 sm:p-8 shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider font-mono">
                      Three Phase
                    </span>
                    <span className="text-xs font-extrabold text-slate-500 font-mono">6–15kW Capacity</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    GoodWe ET G2 Series
                  </h3>
                  <p className="text-slate-600 text-sm font-medium mb-6">
                    High-voltage hybrid inverter for larger homes and commercial properties.
                  </p>

                  <ul className="space-y-3.5 text-slate-700 text-base font-medium mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Power phase:</strong> Three phase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Capacity:</strong> 6–15kW</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">System type:</strong> High-voltage hybrid inverter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Best for:</strong> Larger homes and businesses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Battery setup:</strong> Separate compatible battery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span><strong className="text-slate-900 font-extrabold">Off-grid projects:</strong> Subject to site assessment</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    High-Voltage Commercial &amp; Residential
                  </span>
                </div>
              </div>

            </div>

            {/* Paragraph + CTA */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
                Not sure which column applies to your property? Our team assesses your electrical setup, daily energy use, and battery plans to match you with the right GoodWe series.
              </p>

              <Button
                size="lg"
                className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs shrink-0 w-full md:w-auto"
                asChild
              >
                <Link to="/contact">
                  Compare GoodWe Systems
                </Link>
              </Button>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: GOODWE SYSTEMS WE INSTALL */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Product Lineup
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                GoodWe Systems We Install
              </h2>
            </div>

            {/* Product Cards Grid: 2 Main Product Cards + 1 Advisory Selection Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              
              {/* GOODWE ESA SERIES PRODUCT CARD */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/60 transition-all shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-mono text-xs font-extrabold uppercase tracking-wider">
                      Single Phase · 3–10kW
                    </span>
                    <Battery className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 uppercase tracking-wide">
                    GoodWe ESA Series
                  </h3>
                  <p className="text-sm font-bold text-slate-600 mb-6 font-mono">
                    Single Phase · 3–10kW · All-in-One Energy Storage
                  </p>

                  <div className="space-y-4 text-slate-700 text-base leading-relaxed font-medium mb-6">
                    <p>
                      The GoodWe ESA Series is an all-in-one single-phase energy storage system that integrates a hybrid inverter and modular battery storage into a single compact unit. Designed for residential properties, the ESA series simplifies installation, reduces space requirements, and provides reliable backup power during grid outages.
                    </p>
                    <p>
                      With built-in smart power management and fast UPS-level switching, the ESA series allows homeowners to maximize self-consumption and protect essential household circuits.
                    </p>
                  </div>

                  {/* Models Covered */}
                  <div className="mb-6 p-4 rounded-xl bg-white border border-slate-200/80">
                    <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5 font-mono">
                      Supported Model Configurations:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs text-slate-800 font-semibold mb-3">
                      <span className="px-2.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-center">GW5.1-BAT-D-G20</span>
                      <span className="px-2.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-center">GW8.3-BAT-D-G20</span>
                      <span className="px-2.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-center">GW5.1-BAT-D-G21</span>
                      <span className="px-2.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-center">GW8.3-BAT-D-G21</span>
                      <span className="px-2.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-center">GW6.0-BAT-D-G20</span>
                      <span className="px-2.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-center">GW9.0-BAT-D-G20</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">
                      The client's ESA document covers these six model configurations.
                    </p>
                  </div>

                  {/* Best for */}
                  <div className="mb-8 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                    <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block mb-1 font-mono">
                      Best for:
                    </span>
                    <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                      Standard residential homes looking for an all-in-one solar and battery storage solution with clean aesthetics and reliable backup power.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Button
                    size="lg"
                    className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs uppercase tracking-wider h-12 flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/contact">
                      <FileText className="w-4 h-4 text-[#5BC94D]" />
                      <span>View GoodWe ESA 3–10kW Spec Sheet</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* GOODWE ET G2 SERIES PRODUCT CARD */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/60 transition-all shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-slate-900 text-white font-mono text-xs font-extrabold uppercase tracking-wider">
                      Three Phase · 6–15kW
                    </span>
                    <Zap className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 uppercase tracking-wide">
                    GoodWe ET G2 Series
                  </h3>
                  <p className="text-sm font-bold text-slate-600 mb-6 font-mono">
                    Three Phase · 6–15kW · Hybrid Inverter
                  </p>

                  <div className="space-y-4 text-slate-700 text-base leading-relaxed font-medium mb-6">
                    <p>
                      The GoodWe ET G2 Series is a high-voltage three-phase hybrid inverter engineered for larger residential homes and commercial properties. Featuring high charge and discharge efficiency, robust overload capability, and smart load control, the ET G2 series seamlessly integrates solar panels and high-voltage batteries.
                    </p>
                    <p>
                      Built for demanding tropical conditions, the ET G2 series provides reliable three-phase backup power, ensuring critical equipment and commercial loads remain powered during outages.
                    </p>
                  </div>

                  {/* MPPT Specification Note */}
                  <div className="mb-6 p-4 rounded-xl bg-white border border-slate-200/80">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1 font-mono">
                          MPPT &amp; High-Voltage Battery Flexibility:
                        </h4>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          The range supports 2 or 3 MPPTs, depending on the selected model.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="mb-8 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                    <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block mb-1 font-mono">
                      Best for:
                    </span>
                    <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                      Three-phase homes, commercial buildings, and properties requiring high-capacity hybrid solar and battery storage with robust backup capability.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Button
                    size="lg"
                    className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs uppercase tracking-wider h-12 flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/contact">
                      <FileText className="w-4 h-4 text-[#5BC94D]" />
                      <span>View GoodWe ET G2 Spec Sheet</span>
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: ESA OR ET G2? */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-mono text-xs font-extrabold uppercase tracking-wider mb-4">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Selection Guidance</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  ESA or ET G2?
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  <p>
                    Choosing between the GoodWe ESA and ET G2 series comes down primarily to your property's electrical phase setup. If your property has single-phase power, the ESA Series offers a streamlined, all-in-one solar and battery solution. If your property operates on three-phase power, has higher electricity demand, or requires a larger solar array, the ET G2 Series is the ideal choice.
                  </p>
                  <p>
                    However, inverter rating alone does not determine the correct system. Our team reviews your daily energy usage profile, existing or planned solar capacity, battery backup requirements, and site electrical infrastructure before recommending a specific model.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Help Me Choose
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-all text-xs uppercase tracking-wider gap-2 border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>0483 986 444</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: GOODWE OFF-GRID SOLAR SYSTEMS */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                  Standalone &amp; Remote Power
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  GoodWe Off-Grid Solar Systems
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  <p>
                    Oneroof Solar designs GoodWe-based solar and battery solutions for rural, remote and off-grid properties across the Northern Territory.
                  </p>
                  <p>
                    An off-grid system requires more than simply adding a battery to a standard solar installation. Standalone power systems must be carefully engineered to handle daily electricity use, peak load demand, and expected periods of low solar generation without relying on grid supply.
                  </p>
                </div>

                {/* Complete List */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 mb-8">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 font-mono">
                    A Complete Off-Grid System Includes:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-slate-800 text-base font-semibold">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span>A suitable GoodWe inverter</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span>Solar panels and battery storage</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span>Essential-load circuits</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span>Generator integration</span>
                    </li>
                    <li className="flex items-center gap-3 sm:col-span-2">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span>Monitoring and load management</span>
                    </li>
                  </ul>
                </div>

                {/* Final suitability qualifier */}
                <p className="text-slate-600 text-base font-semibold italic mb-8 border-l-4 border-slate-300 pl-4">
                  “The suitability of an ESA or ET G2 system is confirmed after reviewing the property and its electrical loads.”
                </p>

                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs"
                  asChild
                >
                  <Link to="/contact">
                    Discuss an Off-Grid System
                  </Link>
                </Button>
              </div>

              {/* Right Column: Visual Feature */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                  <img
                    src={quoteTabletImg}
                    alt="Off-Grid Solar System Planning GoodWe Darwin"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-transparent opacity-85"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5BC94D] font-bold block mb-1">
                      Remote &amp; Rural NT
                    </span>
                    <h4 className="text-white text-sm font-bold mb-1">
                      Custom Off-Grid Engineering
                    </h4>
                    <p className="text-slate-300 text-xs font-medium leading-relaxed">
                      Designed to withstand Northern Territory extreme weather conditions and maintain continuous power autonomy.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8: HOW WE SELECT THE RIGHT GOODWE SYSTEM */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                System Recommendation Process
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                How We Select the Right GoodWe System
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
                “Choosing the right system isn't just picking a box off a shelf. Here's what actually goes into the decision.”
              </p>
            </div>

            {/* SIX PROCESS STEPS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
              
              {/* STEP 1 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#5BC94D] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center">
                      01
                    </span>
                    <Building2 className="w-5 h-5 text-[#5BC94D]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">
                    Confirm the Property Type
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    We start by confirming your property type—whether it's a single-phase home, three-phase property, small business, commercial site, or an off-grid location requiring standalone power.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#5BC94D] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center">
                      02
                    </span>
                    <Zap className="w-5 h-5 text-[#5BC94D]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">
                    Confirm the Power Phase and Grid Connection
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    We verify your power phase (single phase or three phase), grid connection type, grid reliability in your area, and whether you have existing solar or battery equipment. Single-phase properties align with the ESA series, while three-phase properties suit the ET G2 series.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#5BC94D] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center">
                      03
                    </span>
                    <Sun className="w-5 h-5 text-[#5BC94D]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">
                    Review Electricity Use
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    We review how much electricity you use and when you use it—day versus night. By examining your current power bills, daily usage patterns, and expected future needs, we calculate your daytime solar generation requirements and overnight battery storage capacity.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#5BC94D] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center">
                      04
                    </span>
                    <SlidersHorizontal className="w-5 h-5 text-[#5BC94D]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">
                    Check High-Demand Equipment
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    We assess heavy electrical loads that impact inverter and battery selection, such as air conditioning, pool pumps, bore pumps, hot water systems, workshop machinery, and EV chargers to ensure peak demand is handled reliably.
                  </p>
                </div>
              </div>

              {/* STEP 5 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#5BC94D] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center">
                      05
                    </span>
                    <Battery className="w-5 h-5 text-[#5BC94D]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">
                    Select the Battery Capacity
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    We match battery capacity to your overnight usage, blackout backup goals, and budget. Whether you want immediate storage or a battery-ready inverter for future expansion, we align solar array sizing, inverter rating, and battery capacity.
                  </p>
                </div>
              </div>

              {/* STEP 6 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#5BC94D] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center">
                      06
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#5BC94D]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">
                    Plan Backup or Off-Grid Operation
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    We evaluate whether you require basic essential-load backup during outages or full off-grid operation. Battery storage and blackout backup are not the same thing. We plan correct switchboard wiring, essential-load circuits, generator integration, and realistic backup scope, as full-property backup is not always realistic or necessary on high-demand sites.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9: WHY WE INSTALL GOODWE IN DARWIN & NT */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Proven Local Performance
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Why We Install GoodWe in Darwin &amp; NT
              </h2>
            </div>

            {/* FOUR BENEFIT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* POINT 1 */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-start gap-5 hover:border-[#5BC94D] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1 font-bold">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    Built for Top End Climate
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    Built to handle extreme heat and humidity, including Darwin's demanding build-up and Wet season weather conditions.
                  </p>
                </div>
              </div>

              {/* POINT 2 */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-start gap-5 hover:border-[#5BC94D] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1 font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    Global Track Record
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    A genuine global track record as a Tier 1 solar inverter manufacturer recognized by international solar market research analysts.
                  </p>
                </div>
              </div>

              {/* POINT 3 */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-start gap-5 hover:border-[#5BC94D] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1 font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    User-Friendly App Monitoring
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    A phone app allowing customers to monitor real-time system performance, power generation, and energy consumption anytime.
                  </p>
                </div>
              </div>

              {/* POINT 4 */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-start gap-5 hover:border-[#5BC94D] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    Straightforward Warranty Support
                  </h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">
                    Straightforward warranty support backed by a global renewable energy manufacturer with a strong, established Australian presence.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10: WHY CHOOSE ONEROOF SOLAR? */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-mono text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>Local Expertise</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  Why Choose Oneroof Solar?
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  <p>
                    Oneroof Solar manages the complete GoodWe system process across Darwin and the Northern Territory.
                  </p>

                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 my-6">
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 font-mono">
                      Our Complete Service Scope Includes:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800 text-base font-semibold">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>System Assessment</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>Equipment Selection</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>Supply</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>Installation</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>Commissioning</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>Monitoring Setup</span>
                      </div>
                      <div className="flex items-center gap-2.5 sm:col-span-2">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                        <span>Warranty Documentation</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-900 font-extrabold text-base sm:text-lg">
                    You receive a recommendation based on your property—not simply the largest inverter available.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Book a Free GoodWe Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 11: CONSOLIDATED FAQS */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Got Questions?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                FAQs
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "Is GoodWe a good brand for solar inverters?",
                  answer: "Yes. GoodWe ranks among the world's top six solar inverter manufacturers according to Wood Mackenzie's 2025 global report, and was named a Tier 1 supplier by S&P Global Commodity Insights the same year."
                },
                {
                  question: "What is the difference between GoodWe's single phase and three phase systems?",
                  answer: "The single phase ESA series is an all-in-one unit for standard homes, with the battery built right into the same box. The three phase ET G2 series is a larger hybrid inverter for bigger homes or small business running three phase power, handling more electricity at once."
                },
                {
                  question: "Does the GoodWe system come with a battery already built in?",
                  answer: "The ESA series does. It's an all-in-one design, so the battery and inverter are combined in one unit. The ET G2 series is a hybrid inverter that works with a battery, but the battery itself is a separate component."
                },
                {
                  question: "How do I connect my GoodWe inverter to WiFi?",
                  answer: "Most GoodWe systems connect through the GoodWe monitoring app, using the WiFi dongle fitted to the unit during installation. We set this up as part of every install, so your system is already connected and showing data on your phone before we leave. If you're ever having trouble reconnecting after a router change or outage, give us a call and we'll sort it over the phone."
                },
                {
                  question: "Is GoodWe reliable in hot and humid climates like Darwin?",
                  answer: "Yes. GoodWe systems are installed across more than 100 countries, including plenty of hot, humid regions similar to the Top End, and we've been installing them across Darwin properties without issue."
                },
                {
                  question: "What size GoodWe system do I need for my home?",
                  answer: "It depends on your roof space, your power bill and how your household uses electricity through the day. A free on-site assessment is the fastest way to get an exact answer rather than guessing from a size chart."
                },
                {
                  question: "What Is the Difference Between the ESA and ET G2?",
                  answer: "The ESA is a single-phase all-in-one energy-storage system primarily designed for homes. The ET G2 is a three-phase hybrid inverter for larger homes and businesses. It connects to a separate compatible battery."
                },
                {
                  question: "Can GoodWe Be Used for an Off-Grid Property?",
                  answer: "A GoodWe-based solution may suit some off-grid properties. Suitability depends on the property’s loads, battery capacity, solar generation and generator requirements."
                },
                {
                  question: "Will a GoodWe System Work During a Blackout?",
                  answer: "Backup is possible when the system includes a compatible battery, sufficient output capacity and correctly designed backup circuits. The number of appliances that remain powered depends on the final system design."
                },
                {
                  question: "How Is GoodWe Monitoring Set Up?",
                  answer: "Oneroof Solar configures the compatible monitoring equipment during commissioning and checks that system performance data is available before handover."
                }
              ].map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug pr-2">
                        {faq.question}
                      </h3>
                      <div className={`shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#5BC94D]/10 border-[#5BC94D]/40 text-[#5BC94D]" : "text-slate-500"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-slate-200/60 bg-white">
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 12: BOOK YOUR GOODWE SOLAR CONSULTATION */}
      <section className="py-16 lg:py-24 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-[#5BC94D]/30 bg-gradient-to-b from-slate-900 to-[#0B1520] p-8 sm:p-14 lg:p-16 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                  CEC Accredited Supply &amp; Installation
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-6">
                  Book Your GoodWe Solar Consultation
                </h2>

                <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
                  Whether it's a compact single phase system for a standard Darwin home or a larger three phase hybrid for a bigger property or business, our CEC-accredited team will help you choose the right GoodWe system and handle the full supply and installation. Call 0483 986 444 or book your free assessment today.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800/80">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs sm:text-sm"
                    asChild
                  >
                    <Link to="/contact">
                      Book Your Free Assessment →
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-slate-800 text-white font-bold transition-all hover:bg-slate-700 text-xs sm:text-sm uppercase tracking-wider gap-2 border border-slate-700"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>0483 986 444</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
