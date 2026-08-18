import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone,
  ArrowRight,
  ChevronDown,
  Download,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import { PRIMARY_PHONE_RAW } from "../lib/constants";

import heroInverterImg from "../assets/images/inverter_hero_install_1785339518164.jpg";
import inverterCloseUpImg from "../assets/images/inverter_close_up_1785310553663.jpg";
import stormRoofImg from "../assets/images/darwin_storm_roof_1785343440441.jpg";
import offgridImg from "../assets/images/offgrid_hero_1785224439961.jpg";

export function AlphaEssInvertersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [specModalModel, setSpecModalModel] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleSpecSheetClick = (modelName: string) => {
    setSpecModalModel(modelName);
  };

  const seoData = {
    title: "Alpha ESS Solar Inverter Darwin & NT | Oneroof Solar",
    metaDescription: "Heat-proof your power. Get premium SAA Approved Alpha ESS single & 3-phase hybrid solar inverters in Darwin, Palmerston & NT wide. Save with upfront STC discounts.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters/alpha-ess",
    robots: "index, follow",
    openGraphTitle: "Alpha ESS Solar Inverter Darwin & NT | Oneroof Solar",
    openGraphDescription: "Heat-proof your power. Get premium SAA Approved Alpha ESS single & 3-phase hybrid solar inverters in Darwin, Palmerston & NT wide. Save with upfront STC discounts.",
    openGraphImage: heroInverterImg,
    twitterTitle: "Alpha ESS Solar Inverter Darwin & NT | Oneroof Solar",
    twitterDescription: "Heat-proof your power. Get premium SAA Approved Alpha ESS single & 3-phase hybrid solar inverters in Darwin, Palmerston & NT wide. Save with upfront STC discounts.",
    twitterImage: heroInverterImg,
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
          "name": "Alpha ESS Inverters",
          "item": "https://oneroofsolar.com.au/products/solar-inverters/alpha-ess"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Alpha ESS Solar Inverters Darwin NT",
      "brand": {
        "@type": "Brand",
        "name": "Alpha ESS"
      },
      "description": "Heat-proof your power. Get premium SAA Approved Alpha ESS single & 3-phase hybrid solar inverters in Darwin, Palmerston & NT wide. Save with upfront STC discounts.",
      "category": "Solar Inverters",
      "url": "https://oneroofsolar.com.au/products/solar-inverters/alpha-ess",
      "image": heroInverterImg
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Alpha ESS an SAA Approved and Certified product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every Alpha ESS inverter we install is SAA Approved and Certified, tested to meet Australian electrical safety standards. Oneroof Solar is also an SAA Accredited Installer, so both the product and the installer are properly covered."
          }
        },
        {
          "@type": "Question",
          "name": "Is Alpha ESS a good brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alpha ESS is a well known modular battery brand with mixed opinions online, as with most big brands. What matters most is the install. We fit every Alpha ESS system properly, using SAA Approved parts, and stand behind our own workmanship."
          }
        },
        {
          "@type": "Question",
          "name": "Is the NT solar grant still available for an Alpha ESS install?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Northern Territory government's local solar grant is currently closed. We offer the Federal STC rebate, applied upfront in your quote, and the Cheaper Home Batteries Program discount for eligible battery installs."
          }
        },
        {
          "@type": "Question",
          "name": "How does the STC discount apply to my Alpha ESS quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The STC rebate is built straight into the price on your quote for an eligible Alpha ESS system. There's no separate claim process, the figure you're quoted already has the discount taken off."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add more batteries to my Alpha ESS system later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alpha ESS batteries are modular, so you can start with one module and add more later without replacing the inverter. Eligible upgrades may also qualify for the Cheaper Home Batteries Program discount."
          }
        },
        {
          "@type": "Question",
          "name": "Will an Alpha ESS hybrid inverter handle intense Darwin heat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alpha ESS inverters feature robust IP65 or IP66 weatherproof casings and smart thermal management systems. They are specifically engineered to handle intense NT summer temperatures up to 50°C without risking hardware damage or system failures."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a single-phase and a 3-phase Alpha ESS inverter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Single-phase units like the Smile5 fit standard homes perfectly. Three-phase systems like the Smile-T10-HV are built for large properties, off-grid setups, or commercial sites running heavy power loads, ensuring stable electricity delivery across all phases."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Is Alpha ESS an SAA Approved and Certified product?",
      a: "Yes. Every Alpha ESS inverter we install is SAA Approved and Certified, tested to meet Australian electrical safety standards. Oneroof Solar is also an SAA Accredited Installer, so both the product and the installer are properly covered."
    },
    {
      q: "Is Alpha ESS a good brand?",
      a: "Alpha ESS is a well known modular battery brand with mixed opinions online, as with most big brands. What matters most is the install. We fit every Alpha ESS system properly, using SAA Approved parts, and stand behind our own workmanship."
    },
    {
      q: "Is the NT solar grant still available for an Alpha ESS install?",
      a: "No. The Northern Territory government's local solar grant is currently closed. We offer the Federal STC rebate, applied upfront in your quote, and the Cheaper Home Batteries Program discount for eligible battery installs."
    },
    {
      q: "How does the STC discount apply to my Alpha ESS quote?",
      a: "The STC rebate is built straight into the price on your quote for an eligible Alpha ESS system. There's no separate claim process, the figure you're quoted already has the discount taken off."
    },
    {
      q: "Can I add more batteries to my Alpha ESS system later?",
      a: "Yes. Alpha ESS batteries are modular, so you can start with one module and add more later without replacing the inverter. Eligible upgrades may also qualify for the Cheaper Home Batteries Program discount."
    },
    {
      q: "Will an Alpha ESS hybrid inverter handle intense Darwin heat?",
      a: "Yes. Alpha ESS inverters feature robust IP65 or IP66 weatherproof casings and smart thermal management systems. They are specifically engineered to handle intense NT summer temperatures up to 50°C without risking hardware damage or system failures."
    },
    {
      q: "What is the difference between a single-phase and a 3-phase Alpha ESS inverter?",
      a: "Single-phase units like the Smile5 fit standard homes perfectly. Three-phase systems like the Smile-T10-HV are built for large properties, off-grid setups, or commercial sites running heavy power loads, ensuring stable electricity delivery across all phases."
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

      {/* SECTION 1 — HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/60"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column (Hero Content) */}
            <div className="lg:col-span-7 text-left">
              <FadeIn isHero>
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono flex-wrap">
                  <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/products/solar-inverters" className="hover:text-[#5BC94D] transition-colors">Solar Inverters</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">Alpha ESS</span>
                </nav>

                {/* H1 Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-[1.1] mb-6">
                  Alpha ESS Solar Inverters Darwin NT: SAA Approved
                </h1>

                {/* Hero Body Paragraphs */}
                <div className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl space-y-3">
                  <p>Start with one battery and add more later, on your terms, not the manufacturer's.</p>
                  <p>Alpha ESS gives you a hybrid system that grows as your power needs grow.</p>
                  <p>Supplied and installed locally, with your STC discount already worked into the price.</p>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Request My Free Quote
                    </Link>
                  </Button>

                  <a
                    href={`tel:${PRIMARY_PHONE_RAW}`}
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20 text-xs uppercase tracking-wider gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call Now →</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Visual Area */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] p-6 text-left">
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] flex items-center justify-center p-4">
                    <img 
                      referrerPolicy="no-referrer"
                      src={heroInverterImg} 
                      alt="Alpha ESS Hybrid Solar Inverter System installed in Darwin NT" 
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                      width={600}
                      height={450}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS AN ALPHA ESS HYBRID INVERTER? */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              What Is an Alpha ESS Hybrid Inverter?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 text-slate-600 text-base sm:text-lg leading-[1.75] font-medium space-y-6">
                <p>
                  Think of an Alpha ESS system as building blocks for your power supply. You start with one inverter and one battery box. If you need more storage down the track, you just add another box. No new inverter, no new wiring job, no starting from scratch. That's the whole idea behind Alpha ESS's SMILE range, and it's a genuinely useful option if you're not sure yet how much battery you'll want in five years.
                </p>
                <p>
                  You might have come across mixed chatter online about Alpha ESS. We're not going to pretend that doesn't exist. Like any big brand, opinions vary depending on who installed it and how well it was set up. What we can tell you is this: every Alpha ESS system we fit is SAA Approved, checked properly, and commissioned by our own accredited team, not just switched on and left. If you've read something that's put you off, ask us about it directly. We'd rather talk it through honestly than dodge the question.
                </p>
                <p>
                  You can see Alpha ESS alongside every other brand we install on our{" "}
                  <Link 
                    to="/products/solar-inverters" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    solar inverters page
                  </Link>.
                </p>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  <img 
                    referrerPolicy="no-referrer"
                    src={inverterCloseUpImg} 
                    alt="Alpha ESS Hybrid Inverter System close up" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — ALPHA ESS RANGE FOR DARWIN & NT HOMES */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide leading-tight">
              Alpha ESS Range for Darwin &amp; NT Homes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-4xl">
              Two ranges cover most Territory properties, one for standard homes and one for bigger homes or three phase power.
            </p>

            {/* 2-Column Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* CARD / PRODUCT 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#5BC94D]/60 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                    SMILE-G3-S5, Single Phase, 5kW
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold mb-6">
                    A solid starting point for most NT homes.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>5kW inverter</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Battery starts at 10.1kWh, expandable up to 60.5kWh</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Cobalt free battery chemistry</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Keeps your fridge, lights and essentials running if the power drops out</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Lets you use stored solar power at night instead of paying peak grid rates</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleSpecSheetClick("SMILE-G3-S5")}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition-colors uppercase tracking-wider border border-slate-200"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>View SMILE-G3-S5 Spec Sheet →</span>
                  </button>
                </div>
              </div>

              {/* CARD / PRODUCT 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#5BC94D]/60 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                    SMILE-G3-T4/T5/T6/T8/T10, Three Phase, 4 to 10kW
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold mb-6">
                    Built for bigger homes on three phase power, with more flexibility in how you size your battery.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>4, 5, 6, 8 or 10kW inverter options</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Battery from 3.65kWh up to 43.8kWh, depending on which module you choose</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Cobalt free battery chemistry</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Handles bigger daytime power use without straining the system</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#5BC94D] flex-shrink-0 mt-0.5" />
                      <span>Backup power ready if you want protection through a wet season outage</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleSpecSheetClick("SMILE-G3 Three Phase Series")}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition-colors uppercase tracking-wider border border-slate-200"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>View SMILE-G3-T4/T5/T6/T8/T10 Spec Sheet →</span>
                  </button>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 — BUILT FOR HOMES, BUSINESS AND OFF-GRID PROPERTIES */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              Built for Homes, Business and Off-Grid Properties
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 text-slate-600 text-base sm:text-lg leading-[1.75] font-medium space-y-6">
                <p>
                  Alpha ESS isn't just a homeowner thing. We fit these systems for everyday families, small businesses watching their power costs, and properties out bush with no reliable grid connection at all. The modular design actually suits off-grid properties well, since you can size the battery around what you actually use instead of guessing upfront and overpaying.
                </p>
                <p>
                  If you want to see what we recommend for your situation, have a look at our{" "}
                  <Link 
                    to="/solar-systems/residential-solar-system" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    residential solar systems
                  </Link>,{" "}
                  <Link 
                    to="/solar-systems/commercial-solar-system" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    commercial solar systems
                  </Link>, or{" "}
                  <Link 
                    to="/solar-systems/off-grid-solar-system" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    off-grid solar systems
                  </Link>{" "}
                  pages, or just give us a call and we'll point you the right way.
                </p>
              </div>

              {/* Visual Graphic */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  <img 
                    referrerPolicy="no-referrer"
                    src={offgridImg} 
                    alt="Off-grid and commercial solar installation in Northern Territory" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 — HOW ALPHA ESS HANDLES DARWIN'S WEATHER */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              How Alpha ESS Handles Darwin's Weather
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 text-slate-600 text-base sm:text-lg leading-[1.75] font-medium space-y-6">
                <p>
                  Darwin isn't gentle on solar gear. Heat, humidity, dust and storm season all take their toll on cheap equipment. One thing worth knowing about Alpha ESS is the battery chemistry itself, it's cobalt free, which generally means better thermal stability than older battery types, a genuine plus in a place that runs hot most of the year.
                </p>
                <p>
                  We'll be straight with you: we haven't confirmed the exact weatherproofing rating for every Alpha ESS model yet, so we're not going to make up a number. What we do instead is check the mounting, ventilation and placement of every inverter on-site, so it's set up properly for our conditions regardless of the sticker on the box.
                </p>
                <p>
                  Pairing the right inverter with a well angled panel array matters just as much. Our{" "}
                  <Link 
                    to="/solar-panels-darwin" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    Darwin solar panel installation page
                  </Link>{" "}
                  covers what that looks like for NT roofs.
                </p>
              </div>

              {/* Visual Graphic */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  <img 
                    referrerPolicy="no-referrer"
                    src={stormRoofImg} 
                    alt="Darwin storm weather resistant solar panel setup" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 — SAA APPROVED AND INSTALLED BY SAA ACCREDITED INSTALLERS */}
      <section className="py-20 lg:py-24 bg-[#0A1118] border-b border-slate-800 text-left text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 uppercase tracking-wide leading-tight">
              SAA Approved and Installed by SAA Accredited Installers
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 text-slate-300 text-base sm:text-lg leading-[1.75] font-medium space-y-6">
                <p>
                  Solar Accreditation Australia, or SAA, is the current body that handles both installer accreditation and product certification in Australia. Oneroof Solar is an SAA Accredited Installer, and every Alpha ESS unit we fit is an SAA Approved and Certified Product, tested to meet Australian electrical safety standards. We hold every brand we install to that same standard, Alpha ESS included.
                </p>
                <p>
                  We also sort out the paperwork with your local network operator as part of the install, so getting your system connected and approved isn't something you have to chase up yourself.
                </p>
              </div>

              {/* Visual Graphic Card */}
              <div className="lg:col-span-5 bg-[#0D1520] border border-slate-800 rounded-2xl sm:rounded-3xl p-8 shadow-2xl flex items-center justify-center text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-extrabold text-white uppercase tracking-wider font-mono">
                    SAA Accredited Installer &amp; Certified Product
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7 — YOUR STC DISCOUNT, SORTED UPFRONT */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              Your STC Discount, Sorted Upfront
            </h2>

            <div className="text-slate-600 text-base sm:text-lg leading-[1.75] font-medium space-y-6 max-w-4xl">
              <p>
                Straight up, the Northern Territory government's local solar grant is closed right now. If you've read somewhere that it's still running, that page is out of date.
              </p>
              <p>
                What's still available is the Federal STC rebate, which applies to eligible solar systems, Alpha ESS included, and it's already knocked off the price before you see your quote. No separate claim, no waiting around, the number you get quoted is the number after the discount.
              </p>
              <p>
                If you're adding or upgrading your Alpha ESS battery, eligible installs can also get a discount through the Cheaper Home Batteries Program. We check what applies to you as part of your quote, so you know the real number before you commit to anything.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 — INVERTER PLAYING UP? GET A FREE CHECK BEFORE IT DIES COMPLETELY. */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="max-w-4xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 uppercase tracking-wide leading-tight">
                  Inverter Playing Up? Get a Free Check Before It Dies Completely.
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">
                  Fault light on, power output down, or your system just doesn't seem right? Our SAA Accredited team runs a free diagnostic callout across Darwin and the NT before you spend anything on a replacement.
                </p>

                <div className="mb-8">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Book a Free Inverter Health Check →
                    </Link>
                  </Button>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  Already know your inverter's the problem? Our{" "}
                  <Link 
                    to="/services/solar-panel-repair-darwin" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    solar inverter repair team
                  </Link>{" "}
                  can take a look this week. If it's the panels playing up instead, our{" "}
                  <Link 
                    to="/services/solar-panel-repair-darwin" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    solar panel repair team in Darwin
                  </Link>{" "}
                  has you covered too.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9 — ALPHA ESS NEXT TO THE OTHER BRANDS WE INSTALL */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              Alpha ESS Next to the Other Brands We Install
            </h2>

            <div className="text-slate-600 text-base sm:text-lg leading-[1.75] font-medium max-w-4xl">
              <p>
                We also fit Sigenergy, Sungrow, GoodWe and Fox ESS, and none of them are a wrong choice. Alpha ESS earns its spot for one main reason, the modular battery design. If you like the idea of starting small and adding more storage whenever you're ready, rather than committing to a fixed size on day one, Alpha ESS is worth a proper look. If you already know you want a big battery from day one, one of the other brands might suit you better. We'll talk you through it honestly, not just push whatever's easiest for us.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10 — GROWING YOUR BATTERY LATER */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              Growing Your Battery Later
            </h2>

            <div className="text-slate-600 text-base sm:text-lg leading-[1.75] font-medium max-w-4xl">
              <p>
                This is the bit that makes Alpha ESS different. You don't need to decide your final battery size on day one. Start with one module, and if your power use grows, or you add an EV, or you just want more backup during the wet season, we bolt another battery module onto the same system. No new inverter needed, no full rewire, no starting again.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 11 — AREAS WE SERVE */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
              Areas We Serve
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-4xl">
              Darwin, Palmerston, Berrimah, Alice Springs and Katherine, plus the rural, remote and off-grid properties in between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 uppercase tracking-wide">
              FAQ
            </h2>

            <div className="max-w-[880px] space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left font-extrabold text-slate-900 text-base sm:text-lg hover:text-emerald-700 transition-colors gap-4"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#5BC94D] transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed font-medium border-t border-slate-100 mt-2">
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA */}
      <section className="py-20 lg:py-24 bg-[#0A1118] text-left text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0D1520] border border-slate-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-wide leading-tight">
                  Book Your Alpha ESS Installation or Upgrade
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Whether you're installing a new Alpha ESS system, growing your battery, or replacing an old inverter, our SAA Accredited installation team handles the supply, the install and the paperwork across Darwin and the NT.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`tel:${PRIMARY_PHONE_RAW}`}
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20 text-xs uppercase tracking-wider gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call Us Today</span>
                  </a>

                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Request your free quote today.
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Spec Sheet Modal Fallback */}
      {specModalModel && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-left shadow-2xl border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              {specModalModel} Spec Sheet
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              The official engineering datasheet for {specModalModel} is available upon request. Request a consultation or free quote to receive the complete technical packet directly.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSpecModalModel(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase"
              >
                Close
              </button>
              <Button
                size="sm"
                className="rounded-xl bg-[#5BC94D] text-[#19281D] border-none font-extrabold hover:bg-emerald-400 text-xs uppercase"
                asChild
                onClick={() => setSpecModalModel(null)}
              >
                <Link to="/contact">Request Spec Sheet</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
