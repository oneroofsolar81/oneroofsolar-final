import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2,
  Zap,
  Phone,
  ShieldCheck,
  Building2,
  FileText,
  Battery,
  Award,
  AlertTriangle,
  ChevronDown,
  MapPin,
  X,
  SlidersHorizontal,
  ArrowRight,
  Gauge,
  Thermometer,
  CloudRain,
  Activity,
  Cpu,
  Star,
  HelpCircle,
  ShieldAlert,
  Wrench,
  Check
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";

import heroInverterImg from "../assets/images/inverter_hero_install_1785339518164.jpg";
import inverterCloseUpImg from "../assets/images/inverter_close_up_1785310553663.jpg";
import stormRoofImg from "../assets/images/darwin_storm_roof_1785343440441.jpg";
import offgridImg from "../assets/images/offgrid_hero_1785224439961.jpg";

export function SigenergyInvertersPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);
  const [selectedPhase, setSelectedPhase] = useState<"single" | "three">("single");
  const [showSpecModal, setShowSpecModal] = useState<boolean>(false);
  const [selectedSystemKw, setSelectedSystemKw] = useState<number>(6.6);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // STC Rebate estimation calculation based on system kW for Darwin zone
  const calculateSTCEstimate = (kw: number) => {
    const stcCount = Math.round(kw * 1.15 * 5); // Approximate STC certificates
    const stcValue = 38; // Average $38 per STC
    return Math.round(stcCount * stcValue);
  };

  const seoData = {
    title: "Sigenergy Solar Inverters Darwin NT | SAA Approved | Oneroof Solar",
    metaDescription: "Sigenergy hybrid inverters supplied and installed across Darwin, Palmerston and NT. SAA Approved, IP66 rated, battery ready. STC discount applied upfront in your quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters/sigenergy",
    robots: "index, follow",
    openGraphTitle: "Sigenergy Solar Inverters Darwin NT | SAA Approved | Oneroof Solar",
    openGraphDescription: "Sigenergy hybrid inverters supplied and installed across Darwin, Palmerston and NT. SAA Approved, IP66 rated, battery ready. STC discount applied upfront in your quote.",
    openGraphImage: "https://i.postimg.cc/wB84tcMF/Chat-GPT-Image-Jun-6-2026-01-45-19-AM.png",
    twitterTitle: "Sigenergy Solar Inverters Darwin NT | SAA Approved | Oneroof Solar",
    twitterDescription: "Sigenergy hybrid inverters supplied and installed across Darwin, Palmerston and NT. SAA Approved, IP66 rated, battery ready. STC discount applied upfront in your quote.",
    twitterImage: "https://i.postimg.cc/wB84tcMF/Chat-GPT-Image-Jun-6-2026-01-45-19-AM.png",
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
          "name": "Products",
          "item": "https://oneroofsolar.com.au/products/solar-inverters"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sigenergy Inverters",
          "item": "https://oneroofsolar.com.au/products/solar-inverters/sigenergy"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Sigenergy Solar Inverters Darwin NT",
      "description": "Sigenergy hybrid inverters supplied and installed across Darwin, Palmerston and NT. SAA Approved, IP66 rated, battery ready.",
      "brand": {
        "@type": "Brand",
        "name": "Sigenergy"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen selection:bg-[#5BC94D]/30 selection:text-slate-900">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION (2-COLUMN 55/45, DARK NAVY)       */}
      {/* ========================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#070C12] text-white overflow-hidden border-b border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#5BC94D]/10 rounded-full blur-[140px] pointer-events-none -mt-32"></div>
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -mb-20"></div>

        {/* Tech Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#5BC94D 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn isHero>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono flex-wrap">
              <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
              <span className="text-slate-600" aria-hidden="true">&gt;</span>
              <Link to="/products/solar-inverters" className="hover:text-[#5BC94D] transition-colors">Solar Inverters</Link>
              <span className="text-slate-600" aria-hidden="true">&gt;</span>
              <span className="text-[#5BC94D]" aria-current="page">Sigenergy Inverters</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column (55-60% width) */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4 text-[#5BC94D]" />
                  <span>SAA Approved &amp; Battery Ready • Darwin NT</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white uppercase tracking-wide leading-[1.08] mb-6">
                  Sigenergy Solar Inverters <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#5BC94D]">Darwin NT</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-5 mb-8 max-w-2xl">
                  Battery ready hybrid inverters built for Darwin's heat, humidity and wet season storms. Supplied and installed locally, with your STC discount already applied upfront.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-0.5 uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-[#5BC94D]/20"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Request Free Quote or Call Now →</span>
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-7 rounded-xl bg-slate-900/90 text-white font-bold transition-all hover:bg-slate-800 text-xs sm:text-sm uppercase tracking-wider gap-2.5 border border-slate-700 hover:border-slate-600"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>0483 986 444</span>
                  </a>
                </div>

                {/* Core Specs Grid Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/90">
                  <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-0.5">Efficiency</span>
                    <span className="text-sm font-extrabold text-[#5BC94D]">Up to 98.4%</span>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-0.5">Ingress Rating</span>
                    <span className="text-sm font-extrabold text-white">IP66 Waterproof</span>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-0.5">Storage Ready</span>
                    <span className="text-sm font-extrabold text-[#5BC94D]">100% Plug &amp; Play</span>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-0.5">Certification</span>
                    <span className="text-sm font-extrabold text-white">SAA Certified</span>
                  </div>
                </div>

              </div>

              {/* Right Column (40-45% width): Product Visual Showcase */}
              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                  <img
                    src="https://i.postimg.cc/wB84tcMF/Chat-GPT-Image-Jun-6-2026-01-45-19-AM.png"
                    alt="Sigenergy Solar Inverter System Darwin NT"
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070C12] via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5BC94D] animate-pulse"></div>
                    <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">Darwin Wet Season Shield</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md shadow-2xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5BC94D] font-extrabold">
                        NT Climate Engineered
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#5BC94D]/20 text-[#5BC94D] text-[10px] font-mono font-bold">
                        SAA Approved
                      </span>
                    </div>
                    <h3 className="text-white text-sm sm:text-base font-bold">
                      IP66 Protection &amp; Modular Stacking
                    </h3>
                    <p className="text-xs text-slate-300 font-medium leading-normal">
                      Guaranteed protection against humidity condensation &amp; tropical downpours.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SYSTEM OVERVIEW - WHAT IS A SIGENERGY INVERTER */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              
              {/* Left Column (55-60% width): Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] font-mono text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#5BC94D]/20 w-fit">
                  <Zap className="w-3.5 h-3.5" />
                  <span>System Overview</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-6">
                  What Is a Sigenergy Hybrid Inverter?
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Sigenergy makes battery ready hybrid inverters, which means the inverter and a home battery are designed to work together from the start. You don't need to buy a battery straight away. The system is built so one can be added later without rewiring your switchboard.
                  </p>
                  <p>
                    Sigenergy is a newer name in the Australian market than some of the bigger brands, but the engineering behind it is solid. Oneroof Solar supplies and installs the full Sigenergy range across Darwin, Palmerston, Berrimah and the wider Northern Territory, alongside other SAA Approved and Certified brands we install, such as Sungrow and GoodWe.
                  </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-[#5BC94D]/20 text-[#2f8323] flex items-center justify-center shrink-0 mt-0.5">
                      <Battery className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-0.5">Battery Ready Architecture</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Seamlessly expand into battery storage anytime without main switchboard alterations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-[#5BC94D]/20 text-[#2f8323] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-0.5">Local NT Accreditation</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Installed directly by SAA Accredited local technicians familiar with Top End rules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (40-45% width): Architecture Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 text-white shadow-xl relative overflow-hidden space-y-6">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#5BC94D]/15 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex items-center gap-3.5 pb-5 border-b border-slate-800">
                    <div className="w-11 h-11 rounded-xl bg-[#5BC94D]/15 border border-[#5BC94D]/30 flex items-center justify-center text-[#5BC94D] shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#5BC94D] font-extrabold block tracking-wider">
                        Sigenergy Core Architecture
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        Hybrid Advantage
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">Modular Stacking System</h4>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed mt-0.5">
                          Inverter mounts directly on top of battery modules for a sleek, compact footprint.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">Zero Extra Switchboard Rewiring</h4>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed mt-0.5">
                          Save thousands on future electrical upgrades when you choose to add battery storage.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">Territory Wide Supply &amp; Install</h4>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed mt-0.5">
                          Covering Greater Darwin, Palmerston, Berrimah, Katherine, Alice Springs &amp; remote NT.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      size="sm"
                      className="w-full rounded-xl bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-extrabold uppercase tracking-wider text-xs h-11"
                      asChild
                    >
                      <Link to="/contact">
                        Get Sigenergy System Advice
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: INVERTER RANGE (2-COLUMN CARDS GRID)          */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl text-left mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Product Options</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide leading-tight mb-4">
                Sigenergy Inverter Range for Darwin and NT Homes
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                Two ranges cover most homes and small businesses in the Territory. Both are battery ready and future proof, so your choice today doesn't lock you out of a battery down the track.
              </p>
            </div>

            {/* Range Selection Bar */}
            <div className="flex items-center gap-3 mb-10 p-1.5 rounded-xl bg-slate-950 border border-slate-800 max-w-md">
              <button
                type="button"
                onClick={() => setSelectedPhase("single")}
                className={`flex-1 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedPhase === "single"
                    ? "bg-[#5BC94D] text-[#19281D] shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Single Phase (3-12kW)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPhase("three")}
                className={`flex-1 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedPhase === "three"
                    ? "bg-[#5BC94D] text-[#19281D] shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Three Phase (5-25kW)</span>
              </button>
            </div>

            {/* 2-COLUMN DESKTOP PRODUCT CARDS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* CARD 1: SINGLE PHASE */}
              <div 
                className={`bg-slate-950 border-2 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  selectedPhase === "single" ? "border-[#5BC94D] shadow-xl shadow-[#5BC94D]/10" : "border-slate-800 hover:border-slate-700 opacity-90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                    <span className="px-3 py-1 rounded-md bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider">
                      Single Phase
                    </span>
                    <span className="text-xs font-mono text-slate-400">Residential NT Standard</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-3">
                    Single Phase, 3.0 to 12.0kW
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base font-bold mb-6 italic border-l-3 border-[#5BC94D] pl-3.5 py-1">
                    The right fit for a standard NT home on single phase power.
                  </p>

                  <ul className="space-y-3.5 mb-8 text-slate-300 text-sm font-medium">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>Battery ready and future proof architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>DC to AC ratio up to 2.0 (maximize panel array generation throughout the day)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>Up to 4 MPP trackers for multi-roof orientation handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>IP66 waterproof rating against tropical Wet season humidity</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="flex-1 rounded-xl bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-extrabold transition-all uppercase tracking-wider text-xs justify-between h-12"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Get Single Phase Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPhase("single");
                      setShowSpecModal(true);
                    }}
                    className="px-4 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold transition-all uppercase tracking-wider text-xs flex items-center justify-center gap-2 border border-slate-700 h-12"
                  >
                    <FileText className="w-4 h-4 text-[#5BC94D]" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>

              {/* CARD 2: THREE PHASE */}
              <div 
                className={`bg-slate-950 border-2 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  selectedPhase === "three" ? "border-[#5BC94D] shadow-xl shadow-[#5BC94D]/10" : "border-slate-800 hover:border-slate-700 opacity-90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                    <span className="px-3 py-1 rounded-md bg-blue-500/15 text-blue-400 border border-blue-500/30 font-mono text-xs font-bold uppercase tracking-wider">
                      Three Phase
                    </span>
                    <span className="text-xs font-mono text-slate-400">Large Estate &amp; Commercial</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-3">
                    Three Phase, 5.0 to 25.0kW
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base font-bold mb-6 italic border-l-3 border-blue-400 pl-3.5 py-1">
                    Built for larger homes on three phase power and small to mid-size commercial sites.
                  </p>

                  <ul className="space-y-3.5 mb-8 text-slate-300 text-sm font-medium">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>Battery ready and future proof architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>Up to 4 MPP trackers for maximum array flexibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>IP66 waterproof rating for high durability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>Sizes from 5.0kW up to 25.0kW covering large estates to warehouses</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="flex-1 rounded-xl bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-extrabold transition-all uppercase tracking-wider text-xs justify-between h-12"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Get Three Phase Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPhase("three");
                      setShowSpecModal(true);
                    }}
                    className="px-4 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold transition-all uppercase tracking-wider text-xs flex items-center justify-center gap-2 border border-slate-700 h-12"
                  >
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: HOW SIGENERGY HANDLES DARWIN'S CLIMATE        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              
              {/* Left Column (55-60% width): Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] font-mono text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#5BC94D]/20 w-fit">
                  <CloudRain className="w-3.5 h-3.5" />
                  <span>Top End Durability</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-6">
                  How Sigenergy Handles Darwin's Climate
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    An IP66 rating means the casing is sealed against dust and low pressure water jets, which matters through the wet season when humidity sits high for months at a time. It's a rating for moisture and dust ingress, not for wind or structural load, so cyclone rated mounting hardware is fitted separately as part of every install, not assumed to come from the inverter casing alone.
                  </p>
                  <p>
                    Voltage stability is another reason Sigenergy suits the Territory. The NT grid can see voltage fluctuation during storm season, and a hybrid inverter with solid internal regulation handles that swing without nuisance shutdowns, which is the fault we get called out for most often on ageing or budget units.
                  </p>
                  <p>
                    Pairing the right inverter with a correctly angled panel array matters just as much as the inverter itself. If you're still planning your panel layout, our{" "}
                    <Link 
                      to="/solar-panels-darwin" 
                      className="text-[#19281D] font-extrabold underline decoration-[#5BC94D] decoration-2 underline-offset-4 hover:text-[#5BC94D] transition-colors"
                    >
                      Darwin solar panel installation guide
                    </Link>
                    {" "}covers roof orientation and shading for NT roofs.
                  </p>
                </div>
              </div>

              {/* Right Column (40-45% width): Spec Feature Cards */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                        Climate Resilience Specs
                      </span>
                      <h3 className="text-base font-black text-slate-900">
                        Top End Environment Rules
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-bold text-[#2f8323] uppercase">
                          IP66 Waterproof &amp; Dustproof
                        </span>
                        <span className="text-[10px] font-mono bg-[#5BC94D]/15 text-[#2f8323] px-2 py-0.5 rounded font-bold">HERMETIC SEAL</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Protects sensitive internal power electronics during months of 90%+ wet season humidity.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                          Separate Cyclone Racking
                        </span>
                        <span className="text-[10px] font-mono bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-bold">NT C2/C3 RATED</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Wind &amp; structural load rating is handled by certified array mounting hardware fitted by our team.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                          Grid Voltage Regulation
                        </span>
                        <span className="text-[10px] font-mono bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded font-bold">STORM PROOF</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Internal regulation prevents nuisance trips and shut-offs during tropical storm mains voltage swings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: SAA ACCREDITED COMPLIANCE & CERTIFICATIONS     */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              
              {/* Left Column (55-60% width): Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                  <Award className="w-4 h-4 text-[#5BC94D]" />
                  <span>Certified Quality</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide leading-tight mb-6">
                  SAA Approved and Installed by SAA Accredited Installers
                </h2>

                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Solar Accreditation Australia (SAA) is the current body for both installer accreditation and product certification in Australia. Oneroof Solar is an SAA Accredited Installer, and every Sigenergy unit we fit is an SAA Approved/Certified Product, tested to meet Australian electrical safety standards.
                  </p>
                  <p>
                    As part of every install, we also handle compliance with your local network operator's connection requirements, so the paperwork side of getting your system approved and switched on is taken care of, not left for you to chase.
                  </p>
                </div>
              </div>

              {/* Right Column (40-45% width): Compliance Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                  <div className="text-left pb-5 border-b border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Full Compliance Guarantee
                    </span>
                    <h3 className="text-lg font-black text-white">
                      Product &amp; Installer Approved
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm font-bold bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0" />
                      <span>SAA Approved Product Certification</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm font-bold bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0" />
                      <span>SAA Accredited Local Installer</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm font-bold bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0" />
                      <span>Network Connection Approvals Handled</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: STC DISCOUNT & REBATE ESTIMATOR WIDGET        */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-left max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] font-mono text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#5BC94D]/20 w-fit">
                <Gauge className="w-3.5 h-3.5" />
                <span>Incentives &amp; Savings</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
                Upfront STC Discount and Cheaper Home Batteries Program
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Federal incentives make your solar and battery installation significantly lower cost upfront. Select your planned capacity below to estimate your upfront STC rebate:
              </p>
            </div>

            {/* Interactive STC Estimator Widget */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BC94D]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-3xl text-left">
                <span className="text-[11px] font-mono font-bold uppercase text-[#5BC94D] tracking-wider block mb-2">
                  Upfront STC Discount Estimator (Darwin Zone)
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Estimate Your Upfront System Rebate
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-medium mb-6">
                  Select your planned solar system capacity to view your estimated Federal STC rebate built directly into your quote:
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[5.0, 6.6, 10.0, 13.2, 15.0, 20.0].map((kw) => (
                    <button
                      key={kw}
                      type="button"
                      onClick={() => setSelectedSystemKw(kw)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                        selectedSystemKw === kw
                          ? "bg-[#5BC94D] text-[#19281D] font-extrabold shadow-md"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {kw} kW System
                    </button>
                  ))}
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase mb-1">
                      Estimated Upfront STC Discount ({selectedSystemKw} kW)
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#5BC94D]">
                      ~${calculateSTCEstimate(selectedSystemKw).toLocaleString()} AUD
                    </span>
                  </div>

                  <Button
                    size="sm"
                    className="rounded-xl bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-extrabold uppercase tracking-wider text-xs h-11 px-6 shrink-0"
                    asChild
                  >
                    <Link to="/contact">
                      Apply to My Quote →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Information Cards Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
                <div className="flex items-center gap-2 text-amber-600 font-extrabold text-base mb-2">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <h3>NT Solar Grant Status</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  The Northern Territory government's local solar grant is currently closed. Federal rebates still apply directly to your quote.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
                <div className="flex items-center gap-2 text-[#2f8323] font-extrabold text-base mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3>Upfront STC Discount</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  The Federal STC rebate applies automatically as an upfront point-of-sale discount on your quote. No waiting for refunds.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
                <div className="flex items-center gap-2 text-[#2f8323] font-extrabold text-base mb-2">
                  <Battery className="w-5 h-5 shrink-0" />
                  <h3>Cheaper Home Batteries</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Adding or upgrading to a Sigenergy battery can qualify for discounts under the Cheaper Home Batteries Program.
                </p>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: EMERGENCY INVERTER HEALTH CHECK CTA           */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20 bg-[#080E14] text-white border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden text-left">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldAlert className="w-4 h-4 text-[#5BC94D]" />
                  <span>Free Diagnostic Callout</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide leading-tight mb-4">
                  Inverter Acting Up? Get a Free Health Check Before It Fails Completely.
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Fault light on, output dropping, or your system just doesn't feel right? Our SAA Accredited team runs a free diagnostic callout across Darwin and the NT before you spend a cent on a replacement.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-[#5BC94D]/20"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Book Free Health Check →</span>
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-7 rounded-xl bg-slate-950 text-white font-bold transition-all hover:bg-slate-800 text-xs sm:text-sm uppercase tracking-wider gap-2.5 border border-slate-800"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>0483 986 444</span>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-medium pt-4 border-t border-slate-800">
                  Already know your current inverter needs attention? Our{" "}
                  <Link 
                    to="/services/solar-panel-repair-darwin" 
                    className="text-[#5BC94D] font-extrabold underline decoration-[#5BC94D] decoration-2 underline-offset-4 hover:text-emerald-300 transition-colors"
                  >
                    solar panel repair team in Darwin
                  </Link>
                  {" "}can diagnose the fault the same week.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: BRAND COMPARISON MATRIX                       */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-left mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <Activity className="w-3.5 h-3.5" />
                <span>Brand Comparison</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide leading-tight mb-4">
                Sigenergy Compared to Other Brands We Install
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium max-w-3xl">
                We also install Sungrow, GoodWe, Fox ESS and Elpha ESS. Sigenergy stands out for its battery ready design and MPP tracker count, but the right brand for you depends on your roof, budget and energy plans.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                      <th className="pb-3.5 font-bold">Feature</th>
                      <th className="pb-3.5 font-extrabold text-[#5BC94D] bg-[#5BC94D]/10 px-3 py-1 rounded-t-lg">Sigenergy</th>
                      <th className="pb-3.5 font-bold text-slate-300 px-3">Sungrow</th>
                      <th className="pb-3.5 font-bold text-slate-300 px-3">GoodWe</th>
                      <th className="pb-3.5 font-bold text-slate-300 px-3">Fox ESS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-sans text-xs sm:text-sm">
                    <tr>
                      <td className="py-3.5 font-bold text-slate-300">Battery Architecture</td>
                      <td className="py-3.5 font-extrabold text-[#5BC94D] bg-[#5BC94D]/5 px-3">Native Plug &amp; Play</td>
                      <td className="py-3.5 text-slate-400 px-3">Hybrid / Modular</td>
                      <td className="py-3.5 text-slate-400 px-3">Hybrid Available</td>
                      <td className="py-3.5 text-slate-400 px-3">Hybrid Available</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-slate-300">MPPT Trackers</td>
                      <td className="py-3.5 font-extrabold text-[#5BC94D] bg-[#5BC94D]/5 px-3">Up to 4 MPPT</td>
                      <td className="py-3.5 text-slate-400 px-3">2 – 3 MPPT</td>
                      <td className="py-3.5 text-slate-400 px-3">2 MPPT</td>
                      <td className="py-3.5 text-slate-400 px-3">2 MPPT</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-slate-300">Ingress Rating</td>
                      <td className="py-3.5 font-extrabold text-[#5BC94D] bg-[#5BC94D]/5 px-3">IP66 Sealed</td>
                      <td className="py-3.5 text-slate-400 px-3">IP65 / IP66</td>
                      <td className="py-3.5 text-slate-400 px-3">IP65</td>
                      <td className="py-3.5 text-slate-400 px-3">IP65</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-slate-300">DC/AC Oversizing Ratio</td>
                      <td className="py-3.5 font-extrabold text-[#5BC94D] bg-[#5BC94D]/5 px-3">Up to 2.0 Ratio</td>
                      <td className="py-3.5 text-slate-400 px-3">Up to 1.5 Ratio</td>
                      <td className="py-3.5 text-slate-400 px-3">Up to 1.3 Ratio</td>
                      <td className="py-3.5 text-slate-400 px-3">Up to 1.5 Ratio</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Brand Pills Ribbon */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono uppercase text-slate-400 font-extrabold mr-2">
                  Brands Installed:
                </span>
                {["Sigenergy", "Sungrow", "GoodWe", "Fox ESS", "Elpha ESS"].map((brand) => (
                  <span 
                    key={brand}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider ${
                      brand === "Sigenergy" 
                        ? "bg-[#5BC94D] text-[#19281D]" 
                        : "bg-slate-800 text-slate-300 border border-slate-700"
                    }`}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: UPGRADING TO A SIGENERGY BATTERY SYSTEM       */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              
              {/* Left Column (55-60% width): Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] font-mono text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#5BC94D]/20 w-fit">
                  <Battery className="w-3.5 h-3.5" />
                  <span>Future Storage</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-6">
                  Upgrading to a Sigenergy Battery System
                </h2>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  Because every Sigenergy inverter we install is already battery ready, adding storage later doesn't mean pulling your switchboard apart again. If your power bill has you thinking about backup power or reducing what you draw from the grid at night, a battery upgrade is a straightforward next step, not a full system replacement.
                </p>
              </div>

              {/* Right Column (40-45% width): Image Showcase Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                  <img
                    src={inverterCloseUpImg}
                    alt="Sigenergy Battery Storage Upgrade Readiness"
                    className="w-full h-[260px] sm:h-[300px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                    <span className="px-2.5 py-0.5 rounded bg-[#5BC94D] text-[#19281D] font-mono text-[10px] font-extrabold uppercase tracking-widest inline-block mb-1">
                      Modular Expansion
                    </span>
                    <h3 className="text-white text-sm font-bold">
                      Add Storage Seamlessly When Ready
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: SIGENERGY FOR OFF-GRID & REMOTE NT            */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              
              {/* Left Column (55-60% width): Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-[#2f8323]" />
                  <span>Remote &amp; Off-Grid</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-6">
                  Sigenergy for Off-Grid and Remote NT Properties
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Plenty of properties across the Territory, out along Litchfield, Humpty Doo, Berry Springs, and rural blocks around Katherine and Alice Springs, either have no reliable grid connection or want to rely on one less. Because every Sigenergy inverter we install is battery ready, it can be set up to keep essential circuits running through an outage, and with the right battery capacity, some properties can run fully off-grid.
                  </p>
                  <p>
                    Whether a Sigenergy hybrid setup suits full off-grid operation, or your property needs a dedicated off-grid inverter instead, comes down to your power use and battery sizing. That's exactly what a site assessment settles, rather than assuming one setup fits every rural block.
                  </p>
                </div>
              </div>

              {/* Right Column (40-45% width): Remote NT Coverage Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                    <MapPin className="w-5 h-5 text-[#5BC94D]" />
                    <h3 className="text-base font-extrabold text-white">
                      NT Rural &amp; Remote Coverage
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 font-medium">
                    Servicing rural blocks and remote properties across regional Territory areas:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Litchfield", "Humpty Doo", "Berry Springs", "Katherine", "Alice Springs"].map((loc) => (
                      <span key={loc} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 font-bold">
                        {loc}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-medium leading-relaxed">
                    Essential circuits • Outage resilience • Tailored site power sizing
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: AREAS WE SERVE                                */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-left mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] font-mono text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#5BC94D]/20">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Coverage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
                Areas We Serve
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium max-w-3xl">
                Darwin, Palmerston, Berrimah, Alice Springs and Katherine, plus the surrounding rural and remote NT properties in between.
              </p>
            </div>

            {/* Service Areas Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Darwin", region: "Greater Darwin" },
                { name: "Palmerston", region: "Urban & Suburbs" },
                { name: "Berrimah", region: "Commercial Zone" },
                { name: "Katherine", region: "Big Rivers Region" },
                { name: "Alice Springs", region: "Red Centre Hub" },
                { name: "Rural & Remote NT", region: "Litchfield & Beyond" },
              ].map((area) => (
                <div key={area.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left shadow-2xs hover:border-[#5BC94D]/50 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#5BC94D]/15 text-[#2f8323] flex items-center justify-center shrink-0 mb-2.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-0.5">{area.name}</h3>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">{area.region}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: ABOUT ONEROOF SOLAR                           */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Local Expertise</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide leading-tight mb-6">
                About Oneroof Solar
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium max-w-3xl">
                Oneroof Solar is a locally based, SAA Accredited team supplying and installing solar panels, inverters and battery storage across the Territory. Read more about{" "}
                <Link 
                  to="/about" 
                  className="text-[#5BC94D] font-extrabold underline decoration-[#5BC94D] decoration-2 underline-offset-4 hover:text-emerald-300 transition-colors"
                >
                  who we are and how we work
                </Link>
                {" "}on our About page.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 13: CONSOLIDATED FAQS (CENTERED 880PX CONTAINER)   */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#2f8323] font-mono text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#5BC94D]/20">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Got Questions?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight">
                Sigenergy Solar Inverters Darwin NT: Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5 text-left">
              {[
                {
                  question: "Is Sigenergy an SAA Approved/Certified product?",
                  answer: "Yes. Every Sigenergy inverter we install is an SAA Approved/Certified Product, tested to meet Australian electrical safety standards. Oneroof Solar is also an SAA Accredited Installer, covering both product and installer compliance."
                },
                {
                  question: "What size Sigenergy inverter do I need for my home or business?",
                  answer: "Most standard NT homes suit the single phase range, 3.0 to 12.0kW. Larger homes on three phase power, or small to mid-size commercial sites, typically need the three phase range, 5.0 to 25.0kW. A free assessment confirms the exact size for your property."
                },
                {
                  question: "Is the NT government solar grant still available?",
                  answer: "No. The Northern Territory government's local solar grant is currently closed. We offer the Federal STC rebate, applied upfront in your quote, and the Cheaper Home Batteries Program discount for eligible battery installations."
                },
                {
                  question: "How does the STC discount apply to my Sigenergy quote?",
                  answer: "The STC rebate is built directly into the price on your quote for an eligible Sigenergy system. There's no separate claim process. The figure you're quoted already reflects the discount."
                },
                {
                  question: "Can I add a Sigenergy battery to my system later?",
                  answer: "Yes. Every Sigenergy inverter we install is battery ready by design, so adding storage later doesn't require rewiring your switchboard. Eligible battery upgrades may also qualify for the Cheaper Home Batteries Program discount."
                }
              ].map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                      <div className={`shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#5BC94D]/10 border-[#5BC94D]/40 text-[#2f8323]" : "text-slate-500"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-200/60 bg-white">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
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

      {/* ========================================================= */}
      {/* SECTION 14: HIGH IMPACT FINAL CALL TO ACTION              */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#060A0E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080E14] via-[#060A0E] to-[#030508] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5BC94D]/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden border border-[#5BC94D]/30 bg-slate-950 p-8 sm:p-12 lg:p-14 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                  <Award className="w-4 h-4 text-[#5BC94D]" />
                  <span>SAA Accredited Supply &amp; Installation</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-6">
                  Book Your Sigenergy Inverter Installation or Upgrade
                </h2>

                <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
                  Whether you're installing a new Sigenergy system, replacing an ageing inverter, or planning a battery upgrade, our SAA Accredited team handles supply, installation and compliance across Darwin and the NT. Call 0483 986 444 or request your free quote today.
                </p>

                {/* Rating Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-200">
                    4.9 Stars (127 Local NT Reviews)
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-slate-800">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-[#5BC94D]/20"
                    asChild
                  >
                    <Link to="/contact">
                      Request Your Free Quote →
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-slate-900 text-white font-bold transition-all hover:bg-slate-800 text-xs sm:text-sm uppercase tracking-wider gap-2.5 border border-slate-800"
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

      {/* ========================================================= */}
      {/* TECHNICAL SPECIFICATION MODAL                             */}
      {/* ========================================================= */}
      {showSpecModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowSpecModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#5BC94D]" />
              <h3 className="text-xl font-extrabold text-white">
                Sigenergy {selectedPhase === "single" ? "Single Phase" : "Three Phase"} Spec Overview
              </h3>
            </div>

            <p className="text-xs text-slate-300 font-medium mb-6">
              Official SAA Approved technical parameters for Darwin and NT solar installations:
            </p>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Power Range:</span>
                <span className="text-white font-bold">{selectedPhase === "single" ? "3.0kW – 12.0kW" : "5.0kW – 25.0kW"}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Max Efficiency:</span>
                <span className="text-[#5BC94D] font-bold">98.4%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">MPP Trackers:</span>
                <span className="text-white font-bold">Up to 4 MPPTs</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Protection Rating:</span>
                <span className="text-white font-bold">IP66 Sealed Ingress</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Ambient Operating Temp:</span>
                <span className="text-[#5BC94D] font-bold">-30°C to +60°C (Derating &gt;45°C)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Battery Interface:</span>
                <span className="text-white font-bold">Built-in High Voltage DC</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Certifications:</span>
                <span className="text-white font-bold">SAA Approved / AS/NZS 4777.2</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <Button
                size="sm"
                className="rounded-xl bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-extrabold uppercase text-xs h-10 px-6"
                asChild
              >
                <Link to="/contact">
                  Request Full Datasheet Quote →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
