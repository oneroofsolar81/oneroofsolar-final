import { Link } from "react-router-dom";
import { 
  CheckCircle2,
  Zap,
  Phone,
  Mail,
  MapPin,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Sun,
  Activity,
  CloudRain,
  Flame,
  Battery,
  SlidersHorizontal,
  Building2,
  Check
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import heroInverterImg from "../assets/images/inverter_hero_install_1785339518164.jpg";

export function SungrowInvertersPage() {
  const seoData = {
    title: "Sungrow Solar Inverters Darwin NT | Hybrid & String | Oneroof Solar",
    metaDescription: "Oneroof Solar supplies and installs the full range of Sungrow hybrid (SH series) and string (SG series) inverters across Darwin and the NT. Single and three phase.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters/sungrow-inverters",
    robots: "index, follow",
    openGraphTitle: "Sungrow Solar Inverters Darwin NT | Hybrid & String | Oneroof Solar",
    openGraphDescription: "Oneroof Solar supplies and installs the full range of Sungrow hybrid (SH series) and string (SG series) inverters across Darwin and the NT. Single and three phase.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
    twitterTitle: "Sungrow Solar Inverters Darwin NT | Hybrid & String | Oneroof Solar",
    twitterDescription: "Oneroof Solar supplies and installs the full range of Sungrow hybrid (SH series) and string (SG series) inverters across Darwin and the NT. Single and three phase.",
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
          "name": "Sungrow Inverters",
          "item": "https://oneroofsolar.com.au/products/solar-inverters/sungrow-inverters"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Sungrow Solar Inverters",
      "brand": {
        "@type": "Brand",
        "name": "Sungrow"
      },
      "description": "Sungrow hybrid and string inverters supplied and installed by Oneroof Solar across Darwin and the Northern Territory.",
      "category": "Solar Inverters",
      "url": "https://oneroofsolar.com.au/products/solar-inverters/sungrow-inverters",
      "image": "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg"
    }
  ];

  const trustBadges = [
    "CEC Approved",
    "IP66 & C5 Anti-Corrosion",
    "SH & SG Series",
    "Darwin & NT Installed"
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
                  <span className="text-[#5BC94D]" aria-current="page">Sungrow Inverters</span>
                </nav>

                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4">
                  Clean Energy Council Approved
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Sungrow Solar Inverters Darwin &amp; NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Oneroof Solar helps Darwin and Northern Territory homeowners and commercial clients choose, supply and install the full range of Sungrow hybrid and string inverters across single phase and three phase systems.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Get a Free Quote
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20 text-xs uppercase tracking-wider gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call Darwin: 0483 986 444</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                  {trustBadges.map((badge, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-200 text-xs font-semibold shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5BC94D]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Side Visual Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] flex items-center justify-center">
                  <img 
                    src={heroInverterImg} 
                    alt="Sungrow Solar Inverter system installed on wall" 
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SH vs SG SERIES EXPLANATION */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3">
                Model Naming Explained
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Understanding Sungrow SH vs. SG Series Inverters
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Sungrow organizes its solar inverter product range into two primary series: the SH Series and the SG Series.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SH Series Card */}
              <div className="bg-slate-50 border-2 border-emerald-500/30 rounded-2xl p-6 sm:p-8 relative shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                  <Battery className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  SH Series = Hybrid &amp; Battery Ready
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Sungrow SH Hybrid Series
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">
                  The Sungrow SH series is a hybrid, battery-ready solar inverter range designed for solar generation and battery integration.
                </p>
                <ul className="space-y-3 text-slate-700 text-sm font-semibold">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Hybrid solar inverter range</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Battery-ready system capabilities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Available in single phase and three phase models</span>
                  </li>
                </ul>
              </div>

              {/* SG Series Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center mb-6 border border-slate-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  SG Series = On-Grid String Inverters
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Sungrow SG String Series
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">
                  The Sungrow SG series is an on-grid string solar inverter range operating directly with the grid with no battery support.
                </p>
                <ul className="space-y-3 text-slate-700 text-sm font-semibold">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>On-grid string solar inverter range</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Direct grid-connected operation without battery support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Available in single phase, three phase residential and commercial models</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: SUNGROW PRODUCT RANGE CATALOGUE */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow Inverter Models Supplied &amp; Installed
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Oneroof Solar supplies and installs Clean Energy Council approved Sungrow inverter models across Darwin and the NT.
              </p>
            </div>

            {/* 1. Hybrid Single Phase */}
            <div className="bg-white border border-slate-200/80 rounded-2xl mb-10 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A1118] via-[#12202C] to-[#0A1118] border-b-2 border-[#5BC94D] px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-xl bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30">
                    <Battery className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase">
                      Hybrid Single Phase Inverters (SH Series)
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">Hybrid single phase battery-ready inverter range</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-[11px] font-mono font-bold uppercase tracking-wider self-start sm:self-auto">
                  Single Phase Hybrid
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                      <th className="py-4 px-5 w-1/3">Model Number</th>
                      <th className="py-4 px-5 border-l border-slate-800 w-1/3">Phase &amp; Type</th>
                      <th className="py-4 px-5 border-l border-slate-800">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SH5.0RS
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Single Phase Hybrid
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        Hybrid Single Phase Inverter
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SH6.0RS
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Single Phase Hybrid
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        Hybrid Single Phase Inverter
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SH8.0-10RS
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Single Phase Hybrid
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        Hybrid Single Phase Inverter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Hybrid Three Phase */}
            <div className="bg-white border border-slate-200/80 rounded-2xl mb-10 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A1118] via-[#12202C] to-[#0A1118] border-b-2 border-[#5BC94D] px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-xl bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30">
                    <SlidersHorizontal className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase">
                      Hybrid Three Phase Inverters (SH Series)
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">Hybrid three phase battery-ready inverter range</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-[11px] font-mono font-bold uppercase tracking-wider self-start sm:self-auto">
                  Three Phase Hybrid
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                      <th className="py-4 px-5 w-1/3">Model Number</th>
                      <th className="py-4 px-5 border-l border-slate-800 w-1/3">Phase &amp; Type</th>
                      <th className="py-4 px-5 border-l border-slate-800">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SH15T
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Three Phase Hybrid
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        Hybrid Three Phase Inverter
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SH20T
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Three Phase Hybrid
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        Hybrid Three Phase Inverter
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SH25T
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Three Phase Hybrid
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        Hybrid Three Phase Inverter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. On-Grid Single Phase */}
            <div className="bg-white border border-slate-200/80 rounded-2xl mb-10 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A1118] via-[#12202C] to-[#0A1118] border-b-2 border-[#5BC94D] px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-xl bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30">
                    <Sun className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase">
                      On-Grid Single Phase Inverters (SG Series)
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">Single phase on-grid solar string inverter range</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-[11px] font-mono font-bold uppercase tracking-wider self-start sm:self-auto">
                  Single Phase String
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                      <th className="py-4 px-5 w-1/3">Model Number</th>
                      <th className="py-4 px-5 border-l border-slate-800 w-1/3">Phase &amp; Type</th>
                      <th className="py-4 px-5 border-l border-slate-800">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG5.0RS-ADA
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Single Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Single Phase Inverter
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG8.0RS
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Single Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Single Phase Inverter
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG10RS
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Single Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Single Phase Inverter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. On-Grid Three Phase (Residential / Small Commercial) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl mb-10 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A1118] via-[#12202C] to-[#0A1118] border-b-2 border-[#5BC94D] px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-xl bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30">
                    <Activity className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase">
                      On-Grid Three Phase Inverters — Residential &amp; Small Commercial (SG Series)
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">Three phase residential &amp; small commercial string inverter range</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-[11px] font-mono font-bold uppercase tracking-wider self-start sm:self-auto">
                  Three Phase String
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                      <th className="py-4 px-5 w-1/3">Model Number</th>
                      <th className="py-4 px-5 border-l border-slate-800 w-1/3">Phase &amp; Type</th>
                      <th className="py-4 px-5 border-l border-slate-800">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG5.0RT
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Three Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Residential / Small Commercial
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG7.0RT
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Three Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Residential / Small Commercial
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG8.0RT
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Three Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Residential / Small Commercial
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG10RT
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Three Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Residential / Small Commercial
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG15RT
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Three Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Residential / Small Commercial
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG20RT
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          Three Phase String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Residential / Small Commercial
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. On-Grid Three Phase (Commercial & Utility) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A1118] via-[#12202C] to-[#0A1118] border-b-2 border-[#5BC94D] px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-xl bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase">
                      On-Grid Three Phase Commercial &amp; Utility Inverters (SG Series)
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">Three phase commercial &amp; utility string inverter range</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-[11px] font-mono font-bold uppercase tracking-wider self-start sm:self-auto">
                  Commercial Utility
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                      <th className="py-4 px-5 w-1/3">Model Number</th>
                      <th className="py-4 px-5 border-l border-slate-800 w-1/3">Phase &amp; Type</th>
                      <th className="py-4 px-5 border-l border-slate-800">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG30CX-P2
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5BC94D]/10 text-emerald-900 border border-[#5BC94D]/30">
                          Commercial String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Commercial / Utility
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG50CX-P2
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5BC94D]/10 text-emerald-900 border border-[#5BC94D]/30">
                          Commercial String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Commercial / Utility
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG100CX-P2
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5BC94D]/10 text-emerald-900 border border-[#5BC94D]/30">
                          Commercial String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Commercial / Utility
                      </td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-[#5BC94D] font-mono font-bold text-xs tracking-wider border border-slate-700 shadow-xs">
                          SG110CX-P2
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5BC94D]/10 text-emerald-900 border border-[#5BC94D]/30">
                          Commercial String
                        </span>
                      </td>
                      <td className="py-4 px-5 border-l border-slate-100 font-semibold text-slate-900">
                        On-Grid Three Phase Commercial / Utility
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: BUILT FOR DARWIN & NT TROPICAL CLIMATE */}
      <section className="py-16 lg:py-24 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3">
                Climate Protection Ratings &amp; Standards
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow Specifications &amp; Standards
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                Sungrow inverters carry Clean Energy Council approval, IP66, C5 anti-corrosion ratings, and surge protection for single phase and three phase solar power installations in Darwin and the NT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: IP66 & C5 Anti-Corrosion */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <CloudRain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    IP66 &amp; C5 Anti-Corrosion
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Sungrow inverters carry IP66 and C5 anti-corrosion ratings to withstand humidity and Wet season conditions in Darwin and the NT.
                  </p>
                </div>
              </div>

              {/* Feature 2: Integrated SPDs */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    DC &amp; AC Surge Protection (SPD)
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Includes built-in DC and AC surge protection devices (SPD) for electrical protection during NT Wet season conditions.
                  </p>
                </div>
              </div>

              {/* Feature 3: PID Recovery Function */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Flame className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    PID Recovery Function
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Integrated PID recovery function reverses heat-induced output loss across single phase and three phase solar panel systems.
                  </p>
                </div>
              </div>

              {/* Feature 4: Smart IV Curve Diagnosis */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    Smart IV Curve Diagnosis &amp; Monitoring
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Provides smart IV curve diagnosis and remote monitoring capabilities for operational tracking.
                  </p>
                </div>
              </div>

              {/* Feature 5: High Efficiency & Multi-MPPT */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    98.5% Efficiency &amp; Multi-MPPT
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Features multi-MPPT tracking with maximum efficiency reaching 98.5 percent.
                  </p>
                </div>
              </div>

              {/* Feature 6: CEC Approval & Compliance */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    CEC Approval &amp; Standards
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Holds Clean Energy Council approval and complies with AS/NZS 5033 standards for single phase and three phase installations with cyclone-rated mounting.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: IS SUNGROW A GOOD SOLAR INVERTER BRAND */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3">
                  Approved Specifications
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  Is Sungrow a Good Solar Inverter Brand?
                </h2>
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Sungrow produces Clean Energy Council (CEC) approved solar inverters available in hybrid and on-grid string ranges across single phase and three phase models.
                  </p>
                  <p>
                    Sungrow inverters carry IP66 and C5 anti-corrosion ratings, built-in DC and AC surge protection devices (SPD), PID recovery function, remote monitoring, and multi-MPPT tracking for solar installations in Darwin and the NT.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  Sungrow Specifications
                </h3>
                <ul className="space-y-4 text-slate-700 text-sm font-semibold">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Clean Energy Council (CEC) approved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>IP66 rating &amp; C5 anti-corrosion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>DC &amp; AC surge protection (SPD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>PID recovery function</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Remote monitoring &amp; smart IV diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Hybrid (SH) &amp; On-grid (SG) series available</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: SUNGROW COMPARED TO OTHER BRANDS */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow Compared to Other Brands We Install
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Oneroof Solar supplies and installs Clean Energy Council approved solar inverters across Darwin and the NT. Sungrow provides both hybrid (SH series) and on-grid string (SG series) inverter options for single phase and three phase solar power systems.
              </p>
            </div>

            <div className="bg-white border-2 border-[#5BC94D] rounded-2xl p-6 sm:p-8 shadow-sm max-w-2xl">
              <span className="text-xs font-bold text-[#5BC94D] uppercase font-mono block mb-1">Inverter Options</span>
              <h3 className="text-xl font-black text-slate-900 mb-2">Sungrow SH &amp; SG Series</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Available in hybrid battery-ready (SH series) and on-grid string (SG series) models for single phase and three phase installations. Supplied and installed by Oneroof Solar in Darwin and the NT.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: CHOOSE, SUPPLY & INSTALL WITH ONEROOF SOLAR */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="flex items-center gap-3 text-[#5BC94D] font-bold text-sm uppercase tracking-wider mb-4 font-mono">
                <MapPin className="w-5 h-5" />
                <span>Darwin &amp; NT Supply &amp; Installation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Choose, Supply &amp; Install Sungrow in the NT
              </h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium max-w-4xl">
                <p>
                  Oneroof Solar helps clients choose, supply and install Sungrow solar inverters across single phase and three phase systems.
                </p>
                <p>
                  We service Darwin and the Northern Territory.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs"
                  asChild
                >
                  <Link to="/contact">
                    Request a Sungrow Quote
                  </Link>
                </Button>

                <a
                  href="tel:0483986444"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-slate-900 text-white font-bold transition-all hover:bg-slate-800 text-xs uppercase tracking-wider gap-2"
                >
                  <Phone className="w-4 h-4 text-[#5BC94D]" />
                  <span>Darwin &amp; NT: 0483 986 444</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#5BC94D]/30 bg-slate-900/90 p-8 sm:p-14 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mb-6">
                  Ready to Install a Sungrow Inverter?
                </h2>
                <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
                  Contact Oneroof Solar today for advice on choosing, supplying and installing the right Sungrow solar inverter for your Darwin or Northern Territory property.
                </p>

                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-slate-300">
                  <a href="tel:0483986444" className="hover:text-[#5BC94D] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Darwin &amp; NT: 0483 986 444</span>
                  </a>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <a href="mailto:info@oneroofsolar.com.au" className="hover:text-[#5BC94D] transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#5BC94D]" />
                    <span>info@oneroofsolar.com.au</span>
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
