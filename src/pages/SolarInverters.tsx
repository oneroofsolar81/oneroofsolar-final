import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  ChevronDown,
  CheckCircle2,
  Zap,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Compass,
  MapPin,
  Cpu,
  Wrench,
  ShieldCheck,
  Star,
  Sparkles
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";

import heroImage from "../assets/images/inverter_hero_install_1785339518164.jpg";
import closeUpImage from "../assets/images/inverter_macro_close_up_1785339540642.jpg";
import faultPanelImage from "../assets/images/inverter_fault_light_1785339561883.jpg";
import quoteTabletImage from "../assets/images/inverter_quote_tablet_1785339577877.jpg";
import repairCheckImage from "../assets/images/inverter_repair_check_1785339596956.jpg";

export function SolarInverters() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Solar Inverters Darwin, NT | Installation & Repair",
    metaDescription: "CEC accredited solar inverter experts in Darwin, NT. Hybrid, string and off-grid inverters built for the Top End climate. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/services/solar-inverters",
    robots: "index, follow",
    openGraphTitle: "Solar Inverters Darwin, NT | Installation & Repair",
    openGraphDescription: "CEC accredited solar inverter experts in Darwin, NT. Hybrid, string and off-grid inverters built for the Top End climate. Get a free quote.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
    twitterTitle: "Solar Inverters Darwin, NT | Installation & Repair",
    twitterDescription: "CEC accredited solar inverter experts in Darwin, NT. Hybrid, string and off-grid inverters built for the Top End climate.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Solar Inverters Darwin, NT",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "telephone": "0483 986 444",
        "email": "info@oneroofsolar.com.au"
      },
      "areaServed": "Darwin, Northern Territory",
      "description": "CEC accredited solar inverter experts in Darwin, NT. Hybrid, string and off-grid inverters built for the Top End climate.",
      "url": "https://oneroofsolar.com.au/services/solar-inverters"
    },
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
          "name": "Services",
          "item": "https://oneroofsolar.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Solar Inverters",
          "item": "https://oneroofsolar.com.au/services/solar-inverters"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the lifespan of a solar inverter in Darwin's climate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most quality inverters are built to last 10 to 15 years, but Darwin's heat and humidity can shorten that if the unit is not rated for tropical conditions or is mounted without airflow. Choosing an IP66-rated inverter and correct installation position is the biggest factor in reaching full lifespan here."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best solar inverter brand for Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your home, budget, and whether you plan to add a battery. We supply and fit top-rated tropical-ready brands including Sungrow, GoodWe, Sigenergy, Fox ESS, and AlphaESS. Our team will recommend the exact brand that fits your roof setup best."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a solar battery or inverter rebate in the NT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Northern Territory's own Home and Business Battery Scheme has reached its funding cap and is currently closed to new applications. Eligible batteries can still receive a discount through the federal Cheaper Home Batteries Program, which reduces the upfront cost through Small-scale Technology Certificates. Our team can confirm what applies to your system as part of your quote."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a solar inverter cost in Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost varies by system size, phase, and brand. A free quote from our team is the fastest way to get an accurate figure for your property."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a repair or a full inverter replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A fault light, error code, or sudden output drop usually means a repair is possible. If the inverter is past 10 years old or the fault is a failed main board, replacement is often more cost-effective. Our diagnosis will tell you which applies before any work starts."
          }
        }
      ]
    }
  ];

  const inverterTypes = [
    {
      title: "String Inverters",
      desc: "String inverters suit straightforward grid-tied homes with one main roof orientation. They are the most cost-effective option and simple to service.",
      icon: Zap
    },
    {
      title: "Hybrid Inverters",
      desc: <>Hybrid inverters manage solar generation and battery storage together, so you can add a <RouterLink to="/services/solar-battery-installation" className="text-[#5BC94D] underline hover:text-emerald-400">battery</RouterLink> later without replacing the inverter. Most Darwin homes planning ahead for storage choose hybrid.</>,
      icon: Cpu
    },
    {
      title: "Off-Grid Inverters",
      desc: "Off-grid inverters run independently of the main grid, built for rural NT properties, sheds, and remote sites where connection is not practical.",
      icon: Wrench
    }
  ];

  const signsList = [
    "A red or flashing fault light on the unit",
    "Solar output dropping without a change in weather",
    "The monitoring app showing the system offline",
    "A power bill that has crept back up",
    "Unusual clicking, buzzing, or fan noise from the unit"
  ];

  const propertyTypes = [
    {
      title: "Residential Solar Inverters",
      desc: <>Tailored for single-phase and three-phase Darwin homes. Positioned for maximum airflow and shaded protection, maximizing daily generation for <RouterLink to="/solar-systems/residential-solar-system" className="text-[#5BC94D] underline hover:text-emerald-400">residential solar power</RouterLink>.</>,
      icon: Home
    },
    {
      title: "Commercial Solar Inverters",
      desc: <>Multi-MPPT three-phase inverters engineered for Darwin commercial roofs. High-efficiency generation aligned with business operating hours for <RouterLink to="/solar-systems/commercial-solar-system" className="text-[#5BC94D] underline hover:text-emerald-400">commercial solar systems</RouterLink>.</>,
      icon: Building2
    },
    {
      title: "Off-Grid Solar Systems",
      desc: <>Heavy-duty inverter charger setups for Litchfield, Humpty Doo and remote NT properties. Continuous power independent of the main grid with <RouterLink to="/solar-systems/off-grid-solar-system" className="text-[#5BC94D] underline hover:text-emerald-400">off-grid solar systems</RouterLink>.</>,
      icon: Compass
    }
  ];

  const whyChooseUs = [
    {
      title: "We're True Locals",
      desc: "Our workshop is in Berrimah, just minutes from Darwin CBD. We aren't an interstate company that dispatches random sub-contractors. When you call, we show up fast.",
      icon: MapPin
    },
    {
      title: "Built for Darwin's Heat",
      desc: "We are CEC-certified experts who know how tropical humidity and heat ruin cheap inverters. We only install gear that actually lasts in Top End weather.",
      icon: ShieldCheck
    },
    {
      title: "120+ 4.9-Star Reviews",
      desc: "Local homeowners trust us because we give honest advice, fair prices, and fix problems right the first time.",
      icon: Star
    },
    {
      title: "We Cover the Whole Region",
      desc: "From Darwin and Palmerston to Litchfield and Katherine, we handle the install, repairs, and all your warranty paperwork.",
      icon: Sparkles
    }
  ];

  const locations = [
    {
      title: "Darwin Coastal & Suburbs",
      desc: "Nightcliff, Rapid Creek, Fannie Bay, Parap, Stuart Park, Larrakeyah, Brinkin, Casuarina, and surrounds."
    },
    {
      title: "Palmerston & Satellite Suburbs",
      desc: "Rosebery, Bakewell, Durack, Gunn, Zuccoli, Driver, Woodroffe, Johnston, and surrounding Palmerston neighborhoods."
    },
    {
      title: "Rural Darwin & Litchfield Shire",
      desc: "Humpty Doo, Howard Springs, Bees Creek, Berry Springs, Acacia Hills, and Coolalinga rural acreages."
    },
    {
      title: "Regional & Remote NT Hubs",
      desc: <><RouterLink to="/solar-alice-springs" className="text-[#5BC94D] underline hover:text-emerald-400">Alice Springs</RouterLink>, Katherine, Tennant Creek, and remote Top End residential and <RouterLink to="/solar-systems/commercial-solar-system" className="text-[#5BC94D] underline hover:text-emerald-400">commercial</RouterLink> sites.</>
    }
  ];

  const faqs = [
    {
      q: "What is the lifespan of a solar inverter in Darwin's climate?",
      a: "Most quality inverters are built to last 10 to 15 years, but Darwin's heat and humidity can shorten that if the unit is not rated for tropical conditions or is mounted without airflow. Choosing an IP66-rated inverter and correct installation position is the biggest factor in reaching full lifespan here."
    },
    {
      q: "What is the best solar inverter brand for Darwin?",
      a: "It depends on your home, budget, and whether you plan to add a battery. We supply and fit top-rated tropical-ready brands including Sungrow, GoodWe, Sigenergy, Fox ESS, and AlphaESS. Our team will recommend the exact brand that fits your roof setup best."
    },
    {
      q: "Is there a solar battery or inverter rebate in the NT?",
      a: "The Northern Territory's own Home and Business Battery Scheme has reached its funding cap and is currently closed to new applications. Eligible batteries can still receive a discount through the federal Cheaper Home Batteries Program, which reduces the upfront cost through Small-scale Technology Certificates. Our team can confirm what applies to your system as part of your quote."
    },
    {
      q: "How much does a solar inverter cost in Darwin?",
      a: "Cost varies by system size, phase, and brand. A free quote from our team is the fastest way to get an accurate figure for your property."
    },
    {
      q: "How do I know if I need a repair or a full inverter replacement?",
      a: "A fault light, error code, or sudden output drop usually means a repair is possible. If the inverter is past 10 years old or the fault is a failed main board, replacement is often more cost-effective. Our diagnosis will tell you which applies before any work starts."
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

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/60"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono flex-wrap">
                  <RouterLink to="/" className="hover:text-[#5BC94D] transition-colors">Home</RouterLink>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-slate-400">Services</span>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">Solar Inverters</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Solar Inverters Darwin, NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Darwin's heat and humidity put more strain on a solar inverter than almost anywhere else in Australia. The wrong inverter overheats, throttles output through the Wet season, and can fail years before its warranty runs out. Oneroof Solar supplies, installs and repairs inverters built for Top End conditions, backed by CEC accreditation and a local Darwin team.
                </p>

                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <RouterLink to="/contact">
                    Get My Free Quote
                  </RouterLink>
                </Button>
              </FadeIn>
            </div>

            {/* Right Side Visual Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] aspect-[16/10] sm:aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img 
                      referrerPolicy="no-referrer"
                      src={heroImage} 
                      alt="CEC-accredited technician installing a hybrid solar inverter on a Darwin home exterior wall" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT A SOLAR INVERTER DOES (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={closeUpImage} 
                    alt="Close-up macro shot of a modern hybrid inverter mounted on a wall" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What a Solar Inverter Does, and Why Darwin's Climate Changes the Choice
                </h2>
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  <p>
                    A solar inverter converts the DC electricity your <RouterLink to="/solar-panels-darwin" className="text-brand-600 font-bold underline hover:text-brand-700">panels</RouterLink> generate into the AC electricity your home or business actually runs on. It is the single component most likely to fail first in a solar system, and in Darwin it works harder than anywhere else in the country.
                  </p>
                  <p>
                    Extreme heat forces most inverters to derate, meaning they cut output to protect themselves once temperatures climb. Humidity through the Wet season attacks unsealed components over time. That is why we only fit inverters with a genuine IP66 rating and a warranty that reflects tropical conditions, not a generic Australia-wide average.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. TYPES OF SOLAR INVERTERS WE SUPPLY AND INSTALL (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Types of Solar Inverters We Supply and Install
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
              {inverterTypes.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                        {item.title}
                      </h3>
                      <div className="text-slate-600 text-base leading-relaxed font-medium">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
              We work with recognised brands including Elpha ESS, Fox ESS, Sigenergy, GoodWe and Sungrow, and recommend a brand based on your roof, your budget and your usage, not a single supplier we are tied to. See our solar inverter brands breakdown for a closer look at each option.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. SIGNS YOUR INVERTER NEEDS ATTENTION (Deep Navy section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Signs Your Inverter Needs Attention
                </h2>

                <div className="space-y-4 mb-8">
                  {signsList.map((sign, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D]" />
                      </div>
                      <p className="text-slate-200 text-base leading-snug font-medium">
                        {sign}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-[1.7] font-medium border-t border-white/10 pt-4">
                  Catching these early is the difference between a same-day repair and a full inverter replacement. See our <RouterLink to="/services/solar-panel-repair-darwin" className="text-[#5BC94D] font-bold underline hover:text-emerald-400">solar inverter repair Darwin</RouterLink> page for fault diagnosis and callout details.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={faultPanelImage} 
                    alt="Inverter digital display panel showing a fault warning light" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. SOLAR INVERTERS FOR EVERY PROPERTY TYPE (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Solar Inverters for Every Property Type
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              Every property draws power differently, and the right inverter setup follows from that. We provide residential solar inverters, commercial solar inverters for Darwin businesses, and off-grid solar systems built for rural NT properties.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {propertyTypes.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                        {item.title}
                      </h3>
                      <div className="text-slate-600 text-base leading-relaxed font-medium">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. OUR SOLAR INVERTER SERVICES (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Our Solar Inverter Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-3xl">
              We inspect, install and repair high-quality solar inverters in Darwin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 — Installation */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                    Solar Inverter Installation
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium mb-8">
                    We supply and install tropical-rated inverters custom-sized and strategically positioned for shaded airflow to prevent heat derating from day one. Fitted by our CEC-accredited local team, every system is built to handle Darwin's extreme climate with battery-ready flexibility for the future.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl bg-brand-500 text-slate-900 font-bold hover:bg-brand-400 transition-all justify-between"
                  asChild
                >
                  <RouterLink to="/services/solar-inverters/installation">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </RouterLink>
                </Button>
              </div>

              {/* Card 2 — Repair */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-6">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                    Solar Inverter Repair & Diagnostics
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium mb-8">
                    If your inverter is displaying a fault light or underperforming, our local technicians perform fast on-site testing across Darwin and Palmerston. We isolate the exact issue so you only pay for the component that failed, while handling direct warranty claims on your behalf.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl bg-brand-500 text-slate-900 font-bold hover:bg-brand-400 transition-all justify-between"
                  asChild
                >
                  <RouterLink to="/services/solar-panel-repair-darwin">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </RouterLink>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA BANNER 1 (Light off-white section with Deep Navy card) */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-wide">
                Ready for an Inverter Built for Darwin's Heat?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
                Get an honest, zero-obligation quote from our local CEC-accredited team.
              </p>
              <Button
                size="lg"
                className="rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 uppercase tracking-wider text-xs shadow-lg shadow-brand-500/20"
                asChild
              >
                <RouterLink to="/contact">
                  <span>Get My Free Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </RouterLink>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. WHY DARWIN AND NT CUSTOMERS CHOOSE ONEROOF SOLAR (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Why Darwin and NT Customers Choose Oneroof Solar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-200 p-7 rounded-2xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. NOT SURE WHICH INVERTER SERVICE YOU NEED? (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Not Sure Which Inverter Service You Need?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              If you are setting up a new solar system or adding a battery, start with installation. If your inverter has a red light, shows an error code, or your power bills are creeping back up, that's a repair job. If you're not sure, call 0483 986 444 and describe what you're seeing. We'll point you to the right service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 - Installation */}
              <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-700 font-black text-lg flex items-center justify-center mb-6">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                    Installation
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium mb-8">
                    If you don't have an inverter yet or need to upgrade to a hybrid/battery-ready unit, start with installation.
                  </p>
                </div>
                <Button
                  size="default"
                  className="w-full rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-300"
                  asChild
                >
                  <RouterLink to="/services/solar-inverters/installation">
                    Inverter Installation
                  </RouterLink>
                </Button>
              </div>

              {/* Card 2 - Repair */}
              <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-700 font-black text-lg flex items-center justify-center mb-6">
                    02
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                    Repair
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium mb-8">
                    If your unit shows a red fault light, an error code, or output has dropped, book a diagnostic repair check.
                  </p>
                </div>
                <Button
                  size="default"
                  className="w-full rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-300"
                  asChild
                >
                  <RouterLink to="/services/solar-panel-repair-darwin">
                    Inverter Repair
                  </RouterLink>
                </Button>
              </div>

              {/* Card 3 - Deep Navy Call Card */}
              <div className="bg-[#0A1118] border border-brand-500/40 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#5BC94D] text-[#19281D] flex items-center justify-center mb-6 shadow-md shadow-[#5BC94D]/20">
                    <Phone className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
                    Get Expert Advice
                  </h3>
                  <p className="text-slate-200 text-base leading-relaxed font-medium mb-8">
                    If you're not sure what's wrong, call 0483 986 444 and describe what you're seeing. We'll point you to the right service.
                  </p>
                </div>
                <a
                  href="tel:0483986444"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all shadow-lg text-sm uppercase tracking-wider"
                >
                  <span>Call 0483 986 444 Now &rarr;</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. WHAT DOES A SOLAR INVERTER COST IN DARWIN? (Deep Navy section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={quoteTabletImage} 
                    alt="Technician showing a homeowner a quote on a tablet on their front porch" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Does a Solar Inverter Cost in Darwin?
                </h2>
                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-[1.7] font-medium">
                  <p>
                    Inverter cost depends on system size, whether you need single or three phase, and whether you are choosing string, hybrid, or off-grid. As a guide, most Darwin homes fall in a hybrid inverter range once installation is included, though the exact figure depends on your roof and current setup. The most accurate way to know your number is a free on-site or remote quote.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 11. SOLAR INVERTER SERVICES ACROSS DARWIN: AREAS WE SERVE (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Solar Inverter Services Across Darwin: Areas We Serve
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              Oneroof Solar supplies, installs, repairs, and services solar inverters across greater Darwin and regional Northern Territory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-7 rounded-2xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-2 text-brand-600 mb-4">
                      <MapPin className="w-5 h-5" />
                      <span className="text-xs font-mono uppercase tracking-wider font-bold">NT Coverage</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                      {loc.title}
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed font-medium">
                      {loc.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (Light off-white section) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-10 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "bg-white shadow-md border-brand-500/50"
                        : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-invhub-${i}`}
                      id={`faq-button-invhub-${i}`}
                      className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 transition-all"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                            isOpen
                              ? "bg-brand-500 text-slate-900 shadow-md shadow-brand-500/20"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-bold leading-tight transition-colors ${
                            isOpen ? "text-brand-600" : "text-slate-900"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-brand-500 bg-brand-500/10 text-brand-600 rotate-180"
                            : "border-slate-200 text-slate-500 bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-invhub-${i}`}
                      aria-labelledby={`faq-button-invhub-${i}`}
                      role="region"
                      className={`overflow-hidden transition-all duration-500 px-6 sm:px-6 ${
                        isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-slate-600 leading-relaxed font-medium pl-12 sm:pl-14 text-base sm:text-lg border-t border-slate-100 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 13. END CTA BANNER (Deep Navy section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-500/30 bg-slate-900/90 p-8 sm:p-14 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Inverter Playing Up? Fix It Before the Wet Season
                </h2>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
                  Fast local diagnosis and repairs across Darwin, Palmerston, and rural NT.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 uppercase tracking-wider text-xs shadow-lg shadow-brand-500/30"
                    asChild
                  >
                    <RouterLink to="/contact">
                      <span>Book a Repairs Check</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </RouterLink>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href="tel:0483986444">
                      <Phone className="w-4 h-4 mr-2 text-[#5BC94D]" />
                      <span>Call 0483 986 444</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
