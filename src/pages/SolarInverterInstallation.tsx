import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown,
  CheckCircle2,
  Zap,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Compass
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";

import heroImage from "../assets/images/inverter_install_hero_1785312441730.jpg";
import switchboardImage from "../assets/images/inverter_switchboard_measure_1785312461587.jpg";
import rooftopsImage from "../assets/images/darwin_rooftops_aerial_1785312477139.jpg";

export function SolarInverterInstallation() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Solar Inverter Installation Darwin NT | Oneroof Solar",
    metaDescription: "CEC-accredited solar inverter installation in Darwin, Palmerston and rural NT. Cyclone-rated string, hybrid and off-grid inverters. Book a free assessment today.",
    canonicalUrl: "https://oneroofsolar.com.au/services/solar-inverters/installation",
    robots: "index, follow",
    openGraphTitle: "Solar Inverter Installation Darwin NT | Oneroof Solar",
    openGraphDescription: "CEC-accredited solar inverter installation in Darwin, Palmerston and rural NT. Cyclone-rated string, hybrid and off-grid inverters.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/inverter_install_hero_1785312441730.jpg",
    twitterTitle: "Solar Inverter Installation Darwin NT | Oneroof Solar",
    twitterDescription: "CEC-accredited solar inverter installation in Darwin, Palmerston and rural NT.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/inverter_install_hero_1785312441730.jpg",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Solar Inverter Installation Darwin",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "telephone": "0483 986 444",
        "email": "info@oneroofsolar.com.au"
      },
      "areaServed": "Darwin, Northern Territory",
      "description": "CEC-accredited solar inverter installation in Darwin, Palmerston and rural NT.",
      "url": "https://oneroofsolar.com.au/services/solar-inverters/installation"
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Installation",
          "item": "https://oneroofsolar.com.au/services/solar-inverters/installation"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does solar inverter installation cost in Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single-phase string inverter installation in Darwin typically costs between $1,500 and $3,500 supplied and fitted, depending on size and brand. Hybrid, battery-ready inverters usually run from $3,000 to $6,000. Your final price depends on system size, roof access and any switchboard upgrade needed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a solar inverter last in Darwin's climate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most inverters are rated for 10 to 15 years, but Darwin's heat and humidity can shorten that if a unit is not properly ventilated or cyclone rated. A tropical-rated inverter mounted in a shaded, ventilated spot is far more likely to reach its full lifespan."
          }
        },
        {
          "@type": "Question",
          "name": "Can I replace just the inverter without replacing my solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Panels usually outlast inverters, so replacing only the inverter is common. We check that your existing panels are compatible with the new inverter's voltage range before installation."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need council approval to install a solar inverter in Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard rooftop inverter installations do not need a planning permit under the Building Code of Australia. Heritage-listed properties or homes in special zoning areas, such as near Darwin Airport, may need a development application, which we check for you."
          }
        },
        {
          "@type": "Question",
          "name": "What size inverter do I need for a 6.6kW solar system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 6.6kW array in Darwin typically pairs with a 5kW inverter, since inverters are commonly sized slightly under the panel array to match real-world output. We confirm the exact ratio during your site assessment based on roof direction and shading."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get an off-grid inverter installed in rural Darwin or Litchfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We install off-grid and hybrid inverters with battery storage for rural properties across Litchfield, Humpty Doo and Berry Springs, giving you continuous power through Wet season outages where grid connection is unreliable or unavailable."
          }
        }
      ]
    }
  ];

  const whoNeedsInstallation = [
    {
      title: "Homeowners",
      desc: <>Many Darwin homeowners have panels on the roof but a power bill that never dropped the way it should have. Usually the inverter is the reason, either undersized for the array or old enough to be losing efficiency. Others want a hybrid inverter fitted now so a <Link to="/services/solar-battery-installation" className="text-[#5BC94D] underline hover:text-emerald-400">battery</Link> can be added later without rewiring, or a quiet, compact unit mounted away from bedroom windows to suit Darwin's open-plan, elevated home designs.</>,
      icon: Home
    },
    {
      title: "Businesses",
      desc: "For a business, an inverter fault is not an inconvenience, it is lost trading hours. Commercial properties in Darwin need three-phase inverters sized to real load, reliable performance during business hours, and monitoring that lets an owner check output across one site or several without a site visit. Reducing demand charges and getting a fast return on a larger system are the two questions we get asked most.",
      icon: Building2
    },
    {
      title: "Off-grid and rural properties",
      desc: <>Properties out along the Stuart Highway corridor, in Litchfield, Humpty Doo and Berry Springs, often sit on acreage with no reliable grid connection. The pain point here is simple: power that stays on through the Wet season. That means a hybrid or fully <Link to="/solar-systems/off-grid-solar-system" className="text-[#5BC94D] underline hover:text-emerald-400">off-grid</Link> inverter paired with <Link to="/services/solar-battery-installation" className="text-[#5BC94D] underline hover:text-emerald-400">battery storage</Link>, sized to carry the property through cloudy days and storm-season outages.</>,
      icon: Compass
    }
  ];

  const demandDrivers = [
    "New-build suburbs such as Zuccoli, Johnston, Muirhead and Berrimah are growing fast, and every new solar system going up needs a first-time inverter installation.",
    "Established suburbs including Nightcliff, Rapid Creek, Malak, Karama and Wagaman had a wave of solar installed during the STC rebate boom of the early 2010s. Those original inverters are now 10 to 15 years old, right at the point where Darwin's heat and humidity push ageing units toward failure.",
    <>Rural and semi-rural properties in Litchfield, Humpty Doo, Berry Springs and along the Adelaide River corridor sit further from the grid, driving steady demand for hybrid and off-grid inverter installations paired with <Link to="/services/solar-battery-installation" className="text-[#5BC94D] underline hover:text-emerald-400">battery storage</Link>.</>
  ];

  const installSteps = [
    {
      number: "1",
      title: "Site assessment",
      desc: "we check your roof, switchboard, shading and existing panels."
    },
    {
      number: "2",
      title: "System sizing",
      desc: "we match inverter kW and kVA rating to your array and household or business load."
    },
    {
      number: "3",
      title: "Inverter selection",
      desc: "string, hybrid, micro or off-grid, based on your goals and property type."
    },
    {
      number: "4",
      title: "Compliance and approval",
      desc: "paperwork handled with Power and Water Corporation and to AS/NZS 5033 standards."
    },
    {
      number: "5",
      title: "Installation and commissioning",
      desc: "fitted with cyclone-rated mounting and isolators, tested on-site."
    },
    {
      number: "6",
      title: "Monitoring setup",
      desc: "your inverter's app connected so you can track output from your phone."
    }
  ];

  const brands = [
    { name: "Elpha ESS" },
    { name: "Fox ESS" },
    { name: "GoodWe" },
    { name: "Sigenergy" },
    { name: "Sungrow" }
  ];

  const faqs = [
    {
      q: "How much does solar inverter installation cost in Darwin?",
      a: "A single-phase string inverter installation in Darwin typically costs between $1,500 and $3,500 supplied and fitted, depending on size and brand. Hybrid, battery-ready inverters usually run from $3,000 to $6,000. Your final price depends on system size, roof access and any switchboard upgrade needed."
    },
    {
      q: "How long does a solar inverter last in Darwin's climate?",
      a: "Most inverters are rated for 10 to 15 years, but Darwin's heat and humidity can shorten that if a unit is not properly ventilated or cyclone rated. A tropical-rated inverter mounted in a shaded, ventilated spot is far more likely to reach its full lifespan."
    },
    {
      q: "Can I replace just the inverter without replacing my solar panels?",
      a: "Yes. Panels usually outlast inverters, so replacing only the inverter is common. We check that your existing panels are compatible with the new inverter's voltage range before installation."
    },
    {
      q: "Do I need council approval to install a solar inverter in Darwin?",
      a: "Standard rooftop inverter installations do not need a planning permit under the Building Code of Australia. Heritage-listed properties or homes in special zoning areas, such as near Darwin Airport, may need a development application, which we check for you."
    },
    {
      q: "What size inverter do I need for a 6.6kW solar system?",
      a: "A 6.6kW array in Darwin typically pairs with a 5kW inverter, since inverters are commonly sized slightly under the panel array to match real-world output. We confirm the exact ratio during your site assessment based on roof direction and shading."
    },
    {
      q: "Can I get an off-grid inverter installed in rural Darwin or Litchfield?",
      a: "Yes. We install off-grid and hybrid inverters with battery storage for rural properties across Litchfield, Humpty Doo and Berry Springs, giving you continuous power through Wet season outages where grid connection is unreliable or unavailable."
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
                  <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-slate-400">Services</span>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/services/solar-inverters" className="hover:text-[#5BC94D] transition-colors">Solar Inverters</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">Installation</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Solar Inverter Installation Darwin
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  CEC-accredited installers fitting cyclone-rated inverters built for Darwin's heat, humidity and Wet season storms. From new homes to ageing systems and off-grid properties, we size every inverter to match your roof and your power bill.
                </p>

                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <Link to="/contact">
                    <span>Book Your Free Inverter Assessment</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                      alt="Technician fitting a new inverter to a Darwin home's exterior wall" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT DOES SOLAR INVERTER INSTALLATION INVOLVE IN DARWIN? (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={switchboardImage} 
                    alt="Installer measuring switchboard space for the new inverter" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Does Solar Inverter Installation Involve in Darwin?
                </h2>
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  <p>
                    Most solar systems in Darwin do not underperform because of bad panels. They underperform because the inverter was never matched to the roof, the switchboard or Darwin's tropical climate. An oversized inverter wastes money on equipment you do not need. An undersized one clips your output on the sunniest days of the year, which in Darwin is most days. And an inverter without proper heat and cyclone rating can fail years before it should once the humidity and Wet season storms set in.
                  </p>
                  <p>
                    Oneroof Solar installs and replaces CEC-accredited <Link to="/services/solar-inverters" className="text-brand-600 font-bold underline hover:text-brand-700">solar inverters</Link> across Darwin, Palmerston and rural NT. We size, supply and fit string, hybrid and off-grid inverters matched to your roof, your switchboard and Power and Water Corporation's network rules, installed to AS/NZS 5033 wiring standards with cyclone-rated mounting and isolators.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. WHO NEEDS SOLAR INVERTER INSTALLATION IN DARWIN (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Who Needs Solar Inverter Installation in Darwin
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {whoNeedsInstallation.map((item, idx) => {
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
                      <p className="text-slate-600 text-base leading-relaxed font-medium">
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

      {/* 4. WHERE THE INVERTER DEMAND IS COMING FROM ACROSS DARWIN (Deep Navy contrast section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Where the Inverter Demand Is Coming From Across Darwin
                </h2>

                <div className="space-y-4 mb-6">
                  {demandDrivers.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D]" />
                      </div>
                      <div className="text-slate-200 text-base leading-snug font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-[1.7] font-medium border-t border-white/10 pt-4">
                  This spread, new estates needing a first install, established suburbs needing a replacement, and rural NT needing off-grid capability, is why we serve the full Top End rather than one postcode.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={rooftopsImage} 
                    alt="Aerial view of Darwin suburb rooftops with solar panels" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. CTA BANNER 1 (Light off-white section with Deep Navy card) */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-wide">
                Your Inverter Is Either Making You Money or Costing You Money. There Is No In Between.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
                If your power bill still stings even with panels on the roof, your inverter is probably the problem, not your panels. Book a free on-site inverter assessment with our CEC-accredited team. We will show you exactly what your current setup is costing you, and what a properly sized inverter would save you every quarter.
              </p>
              <Button
                size="lg"
                className="rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 uppercase tracking-wider text-xs shadow-lg shadow-brand-500/20"
                asChild
              >
                <Link to="/contact">
                  <span>Book Your Free Inverter Assessment</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. HOW WE INSTALL YOUR SOLAR INVERTER (Light off-white section) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 uppercase tracking-wide [word-spacing:0.12em] leading-tight text-center">
              How We Install Your Solar Inverter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {installSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full relative"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-500 text-slate-900 font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-brand-500/20">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide capitalize">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. INVERTER BRANDS WE INSTALL (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Inverter Brands We Install
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              We fit string, hybrid and off-grid inverters from brands proven in tropical and cyclone-prone climates, chosen to suit your roof, your budget and your future battery plans. Every installation carries manufacturer warranty backed by our own workmanship guarantee.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {brands.map((brand, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center hover:border-brand-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {brand.name}
                  </h3>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (Light off-white section) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-10 text-center">
              Solar Inverter Installation Darwin: Frequently Asked Questions
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
                      aria-controls={`faq-panel-inst-${i}`}
                      id={`faq-button-inst-${i}`}
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
                      id={`faq-panel-inst-${i}`}
                      aria-labelledby={`faq-button-inst-${i}`}
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

      {/* 9. END CTA BANNER (Deep Navy section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-500/30 bg-slate-900/90 p-8 sm:p-14 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Book Your Solar Inverter Installation
                </h2>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
                  Whether you're installing a new system, replacing an ageing inverter, or setting up off-grid power in rural NT, our CEC-accredited team sizes and fits the right inverter for your property. Call 0483 986 444 or book your free on-site assessment today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 uppercase tracking-wider text-xs shadow-lg shadow-brand-500/30"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Book Free Assessment</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
