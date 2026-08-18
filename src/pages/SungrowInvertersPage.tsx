import { useState } from "react";
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
  Check,
  ChevronDown,
  HelpCircle,
  Wrench,
  Download,
  X,
  FileText
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import heroInverterImg from "../assets/images/inverter_hero_install_1785339518164.jpg";

export function SungrowInvertersPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const seoData = {
    title: "Sungrow Inverters Darwin & NT | Compare Models",
    metaDescription: "Compare Sungrow hybrid and on-grid inverters for Darwin homes and businesses. Get the right model selected, supplied and installed by Oneroof Solar.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters/sungrow",
    robots: "index, follow",
    openGraphTitle: "Sungrow Inverters Darwin & NT | Compare Models",
    openGraphDescription: "Compare Sungrow hybrid and on-grid inverters for Darwin homes and businesses. Get the right model selected, supplied and installed by Oneroof Solar.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
    twitterTitle: "Sungrow Inverters Darwin & NT | Compare Models",
    twitterDescription: "Compare Sungrow hybrid and on-grid inverters for Darwin homes and businesses. Get the right model selected, supplied and installed by Oneroof Solar.",
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
          "item": "https://oneroofsolar.com.au/products/solar-inverters/sungrow"
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
      "description": "Compare Sungrow hybrid and on-grid inverters for Darwin homes and businesses. Get the right model selected, supplied and installed by Oneroof Solar.",
      "category": "Solar Inverters",
      "url": "https://oneroofsolar.com.au/products/solar-inverters/sungrow",
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
                  <span className="text-[#5BC94D]" aria-current="page">Sungrow Inverters</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Sungrow Solar Inverters
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Compare Sungrow hybrid and on-grid inverters for homes, businesses and larger commercial properties. We help you select the right model based on your power phase, solar-array size, battery plans and backup requirements.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Talk to the expert
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

      {/* SECTION 2: WHAT ARE SUNGROW SOLAR INVERTERS? */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Main Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  What Are Sungrow Solar Inverters?
                </h2>
                <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Sungrow is one of the world’s largest solar inverter manufacturers, with more than 870GW of power electronics installed globally. Its strong manufacturing scale, ongoing research and established Australian presence make it a popular option for Darwin homes and businesses.
                  </p>
                  <p>
                    Darwin’s heat, humidity, coastal air and Wet season storms place extra pressure on solar equipment. Depending on the model, Sungrow inverters offer features such as IP65 or IP66 protection, anti-corrosion coatings, surge protection and remote monitoring.
                  </p>
                  <p>
                    Oneroof Solar supplies and installs selected Sungrow residential and commercial inverter models across Darwin and the Northern Territory. Below, you can compare the available options and see which type of property each model suits.
                  </p>
                </div>
              </div>

              {/* Side Highlight Panel */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-white mb-1">Global Manufacturing Scale</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">Over 870GW installed globally with industry-leading R&D.</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0">
                      <CloudRain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-white mb-1">Engineered for Tropical Weather</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">Offers IP65/IP66 protection and anti-corrosion features depending on the model.</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-white mb-1">Local Darwin Installation</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">Selected residential and commercial models supplied and commissioned locally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: SUNGROW SOLAR INVERTERS FOR YOUR DARWIN HOME OR BUSINESS */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow Solar Inverters for Your Darwin Home or Business
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-3">
                Choosing a Sungrow inverter is not simply about selecting the highest kilowatt rating.
              </p>
              <p className="text-slate-900 font-extrabold text-lg sm:text-xl uppercase tracking-wide font-mono text-[#5BC94D]">
                The right model depends on:
              </p>
            </div>

            {/* 6 Decision Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#5BC94D]/50 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider font-mono mb-1 text-slate-500">Power Phase</h3>
                  <p className="text-slate-800 text-base font-semibold leading-snug">Whether your property has single-phase or three-phase power</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#5BC94D]/50 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-0.5">
                  <Battery className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider font-mono mb-1 text-slate-500">Battery Storage</h3>
                  <p className="text-slate-800 text-base font-semibold leading-snug">Whether you want battery storage now or later</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#5BC94D]/50 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider font-mono mb-1 text-slate-500">Blackout Backup</h3>
                  <p className="text-slate-800 text-base font-semibold leading-snug">Whether blackout backup is important</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#5BC94D]/50 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-0.5">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider font-mono mb-1 text-slate-500">Array Size &amp; Layout</h3>
                  <p className="text-slate-800 text-base font-semibold leading-snug">The size and layout of your solar array</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#5BC94D]/50 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-0.5">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider font-mono mb-1 text-slate-500">Daytime Consumption</h3>
                  <p className="text-slate-800 text-base font-semibold leading-snug">Your daytime electricity use</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#5BC94D]/50 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider font-mono mb-1 text-slate-500">Future Expansion</h3>
                  <p className="text-slate-800 text-base font-semibold leading-snug">Your future energy plans</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-xl text-center flex flex-col items-center justify-center gap-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  Oneroof Solar helps Darwin and Northern Territory customers compare the available Sungrow inverter options, select the appropriate model and arrange complete supply, installation, commissioning and monitoring setup.
                </p>
              </div>
              <div className="flex justify-center w-full sm:w-auto">
                <Button
                  size="lg"
                  className="rounded-xl px-10 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs whitespace-nowrap w-full sm:w-auto"
                  asChild
                >
                  <Link to="/contact">
                    Book a Free Sungrow Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: SUNGROW HYBRID VS ON-GRID INVERTERS */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow Hybrid vs On-Grid Inverters
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                The first decision is whether you need a hybrid inverter or a standard on-grid inverter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SH Section */}
              <div className="bg-slate-50 border-2 border-[#5BC94D]/40 rounded-2xl p-6 sm:p-8 relative shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Battery className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    Choose a Sungrow SH Hybrid Inverter If:
                  </h3>
                  <ul className="space-y-3.5 text-slate-700 text-base font-semibold mb-6">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>You want to install a compatible battery now</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>You may add battery storage later</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>Blackout backup is important</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>You want greater control over when stored solar energy is used</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-[#5BC94D] shrink-0 mt-0.5" />
                      <span>You want to avoid replacing the inverter when adding a compatible battery later</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Adding a battery later does not mean that no additional work will be required. Battery cabling, protection equipment, configuration and commissioning will still be needed. The advantage is that a compatible hybrid inverter may not need to be replaced.
                  </p>
                </div>
              </div>

              {/* SG Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center mb-6 border border-slate-300">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    Choose a Sungrow SG On-Grid Inverter If:
                  </h3>
                  <ul className="space-y-3.5 text-slate-700 text-base font-semibold mb-6">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                      <span>You do not plan to add a DC-coupled battery</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                      <span>Your priority is a straightforward solar-only system</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                      <span>You want to reduce the initial system cost</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                      <span>Your main goal is using solar during the day and exporting excess generation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                      <span>Blackout backup is not required</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    A standard SG string inverter does not directly connect to a solar battery. Battery storage may still be added through a separate AC-coupled battery system, but that requires additional equipment and a separate design.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: SUNGROW PRODUCT RANGE CATALOGUE */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          
          {/* SECTION 1 OF PART 2 — SUNGROW HYBRID INVERTERS */}
          <FadeIn>
            <div className="mb-14">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Battery Ready
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow Hybrid Inverters (Battery Ready)
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-4xl">
                Every card below is one physical product, with its own image and its own spec sheet. Each Spec Sheet button links to that exact PDF, not a generic brochure.
              </p>
            </div>

            {/* Subsection: Single-Phase Sungrow Hybrid Inverters */}
            <div className="mb-14">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide mb-6 border-b border-slate-200 pb-3 flex items-center gap-3">
                <Battery className="w-6 h-6 text-[#5BC94D]" />
                Single-Phase Sungrow Hybrid Inverters
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 1: SH5.0RS / SH6.0RS */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Image Header */}
                    <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                      <img 
                        referrerPolicy="no-referrer"
                        src="/assets/images/sungrow-sh5-6rs.jpg" 
                        alt="Sungrow SH5.0RS / SH6.0RS Hybrid Inverter" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        Single Phase Hybrid
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                        Single Phase, Residential Hybrid
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3">
                        SH5.0RS / SH6.0RS
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                        The entry point into Sungrow's hybrid range for a standard Darwin home. Battery ready from day one, so storage can be added later.
                      </p>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-6">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                          Best suited for:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-700 font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Standard single-phase Darwin homes</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>New solar and battery installations</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Homes planning to add a compatible battery later</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Households wanting backup for selected essential circuits</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Typical residential solar arrays</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <a
                      href="/downloads/Sungrow Single phase hybrid inverter 5-6Kw.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#5BC94D]" />
                      <span>Download Datasheet PDF →</span>
                    </a>
                  </div>
                </div>

                {/* Product 2: SH8.0-10RS */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Image Header */}
                    <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                      <img 
                        referrerPolicy="no-referrer"
                        src="/assets/images/sungrow-sh8-10rs.jpg" 
                        alt="Sungrow SH8.0-10RS Hybrid Inverter" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        Single Phase Hybrid
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                        Single Phase, Residential Hybrid
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3">
                        SH8.0-10RS
                      </h4>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-5">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                          Best suited for:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-700 font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Larger single-phase homes</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Properties with higher daytime electricity use</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Larger residential solar arrays</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Homes requiring greater hybrid-inverter capacity</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Battery-ready system designs</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic border-l-2 border-[#5BC94D] pl-3 py-1 mb-6">
                        These models provide a higher-capacity single-phase hybrid option for homes but the larger inverter should not be selected purely because it has a higher rating. Solar-array size, electricity supply limits, export restrictions and household loads must all be checked first.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <a
                      href="/downloads/Sungrow Single phase hybrid inverter 8-10Kw.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#5BC94D]" />
                      <span>Download Datasheet PDF →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsection: Three-Phase Sungrow Hybrid Inverters */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide mb-6 border-b border-slate-200 pb-3 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#5BC94D]" />
                Three-Phase Sungrow Hybrid Inverters
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product: SH15T / SH20T / SH25T */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                      <img 
                        referrerPolicy="no-referrer"
                        src="/assets/images/sungrow-sh15-20-25t.jpg" 
                        alt="Sungrow SH15T / SH20T / SH25T Hybrid Inverter" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        Three Phase Hybrid
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                        Three Phase, Hybrid
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3">
                        SH15T / SH20T / SH25T
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                        Built for larger homes and rural properties running three phase power, or a small business that wants hybrid, battery ready capability across a bigger load.
                      </p>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-6">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                          Best suited for:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-700 font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Large three-phase homes</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Rural properties</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Workshops and small businesses</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Properties with large solar arrays</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Higher electrical loads</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Compatible whole-property or essential-load backup designs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <a
                      href="/downloads/SH15-20-25T Hybrid Three Phase Inverter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#5BC94D]" />
                      <span>Download Datasheet PDF →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SECTION 2 OF PART 2 — SUNGROW ON GRID INVERTERS */}
          <FadeIn>
            <div className="mb-14 pt-8 border-t border-slate-200">
              <div className="inline-block px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Solar Only
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Sungrow On Grid Inverters
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-4xl">
                These are on-grid string inverters. They convert solar power for immediate use and export, but none of them support a battery on their own.
              </p>
            </div>

            {/* Subsection: Single-Phase String Inverters, No Battery */}
            <div className="mb-14">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide mb-6 border-b border-slate-200 pb-3 flex items-center gap-3">
                <Activity className="w-6 h-6 text-[#5BC94D]" />
                Single-Phase String Inverters, No Battery
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product: SG5.0RS-ADA / SG8.0RS / SG10RS */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                      <img 
                        referrerPolicy="no-referrer"
                        src="/assets/images/sungrow-sg5-8-10rs.jpg" 
                        alt="Sungrow SG5.0RS-ADA / SG8.0RS / SG10RS Inverter" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        Single Phase On Grid
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                        Single Phase, On Grid
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3">
                        SG5.0RS-ADA / SG8.0RS / SG10RS
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                        A straightforward, no-battery option for homes that just want maximum output from their panels at the lowest upfront cost. These models are designed to convert solar-panel DC electricity into usable AC electricity for the property and grid export.
                      </p>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-6">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                          Best suited for:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-700 font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Single-phase homes</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Solar-only systems</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Customers who do not require direct battery connection</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Properties seeking a lower initial system cost</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Roofs with panels facing more than one direction</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <a
                      href="/downloads/Single phase On Grid Inverter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#5BC94D]" />
                      <span>Download Datasheet PDF →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsection: Three-Phase Sungrow String Inverters */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide mb-6 border-b border-slate-200 pb-3 flex items-center gap-3">
                <SlidersHorizontal className="w-6 h-6 text-[#5BC94D]" />
                Three-Phase Sungrow String Inverters
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Group 1: SG5.0RT / SG7.0RT / SG8.0RT / SG10RT */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                      <img 
                        referrerPolicy="no-referrer"
                        src="/assets/images/sungrow-sg5-7-8-10rt.jpg" 
                        alt="Sungrow SG5.0RT - SG10RT Inverter" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        Three Phase On Grid
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                        Three Phase, On Grid, Residential/Small Commercial
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3">
                        SG5.0RT / SG7.0RT / SG8.0RT / SG10RT
                      </h4>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-5">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                          Best suited for:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-700 font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Three-phase homes</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Small offices</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Shops</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Smaller commercial properties</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Solar-only systems without direct battery connection</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic border-l-2 border-[#5BC94D] pl-3 py-1 mb-6">
                        These models provide a three-phase on-grid option for properties that do not require hybrid or battery functionality.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <a
                      href="/downloads/Sungrow three phase grid inverter 5-10Kw.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#5BC94D]" />
                      <span>Download Datasheet PDF →</span>
                    </a>
                  </div>
                </div>

                {/* Product Group 2: SG15RT / SG20RT */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                      <img 
                        referrerPolicy="no-referrer"
                        src="/assets/images/sungrow-sg15-20rt.jpg" 
                        alt="Sungrow SG15RT / SG20RT Inverter" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        Three Phase On Grid
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                        Three Phase, On Grid, Residential/Small Commercial
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3">
                        SG15RT / SG20RT
                      </h4>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-6">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                          Best suited for:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-700 font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Large three-phase homes</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Workshops</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Offices</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Retail properties</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Small commercial sites</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                            <span>Larger solar arrays without battery storage</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <a
                      href="/downloads/Sungrow three phase inverter 15&20Kw.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#5BC94D]" />
                      <span>Download Datasheet PDF →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SECTION 3 OF PART 2 — LARGE COMMERCIAL & INDUSTRIAL SUNGROW INVERTERS */}
          <FadeIn>
            <div className="mb-14 pt-8 border-t border-slate-200">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Commercial Scale
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Large Commercial and Industrial Sungrow Inverters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product 1: SG30CX-P2 / SG50CX-P2 */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                    <img 
                      referrerPolicy="no-referrer"
                      src="/assets/images/sungrow-sg30-50cx-p2.jpg" 
                      alt="Sungrow SG30CX-P2 / SG50CX-P2 Inverter" 
                      className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                      Commercial String
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                      Three Phase, Commercial and Industrial
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">
                      SG30CX-P2 / SG50CX-P2
                    </h4>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-5">
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                        Best suited for:
                      </span>
                      <ul className="space-y-2 text-sm text-slate-700 font-medium">
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Warehouses</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Commercial buildings</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Large workshops</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Agricultural facilities</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Multi-string rooftop solar systems</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Medium-sized commercial solar installations</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic border-l-2 border-[#5BC94D] pl-3 py-1 mb-6">
                      These three-phase commercial string inverters are designed for larger solar arrays where multiple panel strings, detailed monitoring and commercial-scale system management are required.
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href="/downloads/Sungrow threephase inverter 30Kw.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>Download Datasheet PDF →</span>
                  </a>
                </div>
              </div>

              {/* Product 2: SG100CX-P2 / SG110CX-P2 */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                    <img 
                      referrerPolicy="no-referrer"
                      src="/assets/images/sungrow-sg100-110cx-p2.jpg" 
                      alt="Sungrow SG100CX-P2 / SG110CX-P2 Inverter" 
                      className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                      Utility Scale
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="text-xs font-bold text-[#5BC94D] font-mono uppercase tracking-wider mb-1">
                      Three Phase, Commercial/Utility Scale
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">
                      SG100CX-P2 / SG110CX-P2
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                      The largest inverter in the range we install, with up to 12 MPPTs and efficiency rated at 98.5 percent, built for utility-scale and large commercial rooftop systems.
                    </p>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-6">
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
                        Best suited for:
                      </span>
                      <ul className="space-y-2 text-sm text-slate-700 font-medium">
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Large warehouses</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Industrial facilities</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Large commercial roofs</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>High-capacity multi-string solar arrays</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                          <span>Commercial installations requiring detailed string-level monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href="/downloads/Sungrow threephase inverter 100Kw.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all gap-2 border border-slate-800 shadow-xs group cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>Download Datasheet PDF →</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 OF PART 2 — DARWIN CLIMATE SUITABILITY */}
      <section className="py-16 lg:py-24 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Climate Protection Ratings &amp; Standards
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Are Sungrow Inverters Suitable for Darwin’s Climate?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: IP65 / IP66 Protection */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <CloudRain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    IP65 / IP66 Protection
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Depending on the selected model, Sungrow inverters may carry IP65 or IP66-rated enclosures that hold up against Wet season humidity and Dry season dust.
                  </p>
                </div>
              </div>

              {/* Feature 2: C5 Anti-Corrosion — Selected Models */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    C5 Anti-Corrosion — Selected Models
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Selected models also offer C5 anti-corrosion rating, which matters for coastal-facing Darwin suburbs dealing with salt air on top of heat and humidity.
                  </p>
                </div>
              </div>

              {/* Feature 3: DC & AC Surge Protection */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    DC &amp; AC Surge Protection
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Built-in surge protection on both DC and AC sides, relevant given how common lightning strikes are during Darwin's Wet season.
                  </p>
                </div>
              </div>

              {/* Feature 4: PID Recovery */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Flame className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    PID Recovery
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    PID recovery helps reduce or recover output losses associated with potential-induced degradation.
                  </p>
                </div>
              </div>

              {/* Feature 5: Smart IV Diagnosis & Remote Monitoring */}
              <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6 border border-[#5BC94D]/30">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    Smart IV Diagnosis &amp; Remote Monitoring
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Smart IV curve diagnosis and remote monitoring, so faults get found and fixed faster instead of sitting unnoticed for weeks.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 OF PART 3: OTHER INVERTER BRANDS WE INSTALL */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mb-10">
              <div className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Multi-Brand Installers
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Other Inverter Brands We Install
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                We also install Fox ESS, GoodWe, Elpha ESS and Sigenergy, and none of them are the wrong choice. The right inverter comes down to your property, your budget, whether you want battery storage now or later, and which brand's warranty and support structure suits you best. That's exactly what a free on-site assessment settles, rather than guessing from a spec sheet.
              </p>
            </div>

            {/* Brand Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-[#5BC94D]/50 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#5BC94D] flex items-center justify-center mx-auto mb-3 font-bold text-base font-mono shadow-xs">
                  FE
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Fox ESS</h3>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-[#5BC94D]/50 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#5BC94D] flex items-center justify-center mx-auto mb-3 font-bold text-base font-mono shadow-xs">
                  GW
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">GoodWe</h3>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-[#5BC94D]/50 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#5BC94D] flex items-center justify-center mx-auto mb-3 font-bold text-base font-mono shadow-xs">
                  EE
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Elpha ESS</h3>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-[#5BC94D]/50 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#5BC94D] flex items-center justify-center mx-auto mb-3 font-bold text-base font-mono shadow-xs">
                  SE
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Sigenergy</h3>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 OF PART 3: MID-PAGE SUNGROW ASSESSMENT CTA */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-slate-900 via-[#111C26] to-slate-900 border-2 border-[#5BC94D]/40 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl text-center relative overflow-hidden">
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>On-Site Darwin &amp; NT Assessment</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide leading-tight mb-6">
                  You Don't Need to Guess Which Sungrow Inverter Fits Your Roof. We'll Tell You.
                </h2>

                <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
                  Book a free on-site assessment with our team and they will match the right Sungrow model to your roof, your power needs and your battery plans, then supply and install it properly the first time.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs sm:text-sm shadow-md"
                    asChild
                  >
                    <Link to="/contact">
                      Book Your Free Sungrow Assessment →
                    </Link>
                  </Button>

                  <a
                    href="tel:0483986444"
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-slate-800/80 text-white font-bold transition-all hover:bg-slate-800 text-xs sm:text-sm uppercase tracking-wider gap-2 border border-slate-700"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call 0483 986 444</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 OF PART 3: HOW WE HELP YOU CHOOSE THE RIGHT SUNGROW INVERTER */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                End-To-End Installation Service
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                How We Help You Choose the Right Sungrow Inverter
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Point 1 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#5BC94D] font-mono font-extrabold text-sm flex items-center justify-center">
                      01
                    </span>
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Site assessment
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    roof layout, panel direction, shading and current or planned battery use.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#5BC94D] font-mono font-extrabold text-sm flex items-center justify-center">
                      02
                    </span>
                    <SlidersHorizontal className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Sizing and model match
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    hybrid or on-grid, single or three phase, matched to your array and load.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#5BC94D] font-mono font-extrabold text-sm flex items-center justify-center">
                      03
                    </span>
                    <Sun className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Supply
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    we source and supply the exact Sungrow model your system needs.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#5BC94D] font-mono font-extrabold text-sm flex items-center justify-center">
                      04
                    </span>
                    <Wrench className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Installation and compliance
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Installed in accordance with applicable Australian Standards, NT electrical requirements, network rules and manufacturer instructions.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#5BC94D] font-mono font-extrabold text-sm flex items-center justify-center">
                      05
                    </span>
                    <Activity className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Commissioning and monitoring setup
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    tested on-site with your app connected before we leave.
                  </p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#5BC94D]/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#5BC94D] font-mono font-extrabold text-sm flex items-center justify-center">
                      06
                    </span>
                    <ShieldCheck className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Warranty registration
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    your Sungrow warranty registered correctly from day one.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 OF PART 3: FAQS */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-extrabold text-xs uppercase tracking-wider mb-3 font-mono">
                Got Questions?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                FAQS
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "What does SH mean on a Sungrow inverter?",
                  answer: "SH marks Sungrow's hybrid, battery ready range. These inverters can run with a battery from day one or have one added later."
                },
                {
                  question: "What does SG mean on a Sungrow inverter?",
                  answer: "SG marks Sungrow's on-grid string inverter range. These do not support battery storage on their own and are built purely to convert solar power for use or export to the grid."
                },
                {
                  question: "What is the difference between Sungrow SH and SG inverters?",
                  answer: "SH inverters are hybrid and battery ready, while SG inverters are on-grid only with no battery support. Both convert DC power from your panels to usable AC power, but only the SH range can charge and manage a battery."
                },
                {
                  question: "Can I add a battery to a Sungrow SG inverter later?",
                  answer: "Not directly. An SG inverter has no battery input, so adding storage later means installing a separate battery-ready system alongside it. If battery storage is even a maybe for the future, an SH hybrid inverter is the simpler long-term choice."
                },
                {
                  question: "Is Sungrow a good brand for solar inverters?",
                  answer: "Yes. Sungrow is one of the world's largest solar inverter manufacturers by sales volume, Clean Energy Council approved for the Australian market, and has been supplying Australian installers for over a decade."
                },
                {
                  question: "How long is the warranty on a Sungrow inverter?",
                  answer: "Warranty length varies by model and series. We confirm the exact warranty term for your specific Sungrow inverter at the time of quote, and handle registration once it's installed."
                },
                {
                  question: "Does Sungrow work well in Darwin's climate?",
                  answer: "Yes. Sungrow's IP66-rated enclosures and C5 anti-corrosion coating are built for humidity, dust and coastal salt air, and the built-in surge protection helps the unit handle Wet season lightning activity better than inverters without it."
                }
              ].map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-hidden"
                    >
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug pr-2">
                        {faq.question}
                      </h3>
                      <span className={`p-2 rounded-xl bg-slate-100 text-slate-700 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#5BC94D]/20 text-emerald-900' : ''}`}>
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-700 text-base sm:text-lg leading-relaxed font-medium border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 OF PART 3: FINAL SUNGROW INVERTER CONSULTATION CTA */}
      <section className="py-16 lg:py-24 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-[#5BC94D]/30 bg-gradient-to-b from-slate-900 to-[#0B1520] p-8 sm:p-14 lg:p-16 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/15 text-[#5BC94D] border border-[#5BC94D]/30 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                  Expert Supply &amp; Installation
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-6">
                  Book Your Sungrow Inverter Consultation
                </h2>

                <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
                  Whether you need a compact hybrid unit for a Darwin home, commercial-scale or off grid setting string inverter for a larger site, our team will help you choose the right Sungrow model and handle the full supply and installation.
                </p>

                <p className="text-[#5BC94D] text-lg sm:text-xl font-black uppercase tracking-wider mb-8 font-mono">
                  Call 0483 986 444 or book your free assessment today.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-slate-800/80">
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
