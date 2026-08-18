import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown,
  CheckCircle2,
  Zap,
  Phone,
  Mail,
  MapPin,
  Cpu,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";

import heroImage from "../assets/images/inverter_hero_install_1785339518164.jpg";
import closeUpImage from "../assets/images/inverter_macro_close_up_1785339540642.jpg";
import froniusImage from "../assets/images/fronius_nobg_1780552112004.png";

export function SolarInvertersProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Shop Solar Inverters | Sungrow Fronius GoodWe Darwin | Oneroof Solar",
    metaDescription: "Oneroof Solar supplies and installs Sungrow, Fronius, Sigenergy, GoodWe and Foxess inverters across Darwin and Alice Springs. String, hybrid and off-grid. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters",
    robots: "index, follow",
    openGraphTitle: "Shop Solar Inverters | Sungrow Fronius GoodWe Darwin | Oneroof Solar",
    openGraphDescription: "Oneroof Solar supplies and installs Sungrow, Fronius, Sigenergy, GoodWe and Foxess inverters across Darwin and Alice Springs. String, hybrid and off-grid. Get a free quote.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/inverter_hero_install_1785339518164.jpg",
    twitterTitle: "Shop Solar Inverters | Sungrow Fronius GoodWe Darwin | Oneroof Solar",
    twitterDescription: "Oneroof Solar supplies and installs Sungrow, Fronius, Sigenergy, GoodWe and Foxess inverters across Darwin and Alice Springs. String, hybrid and off-grid. Get a free quote.",
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
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Solar Inverter Brands",
      "description": "Solar inverter brands supplied and installed by Oneroof Solar across Darwin and Alice Springs.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Sungrow"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fronius"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sigenergy"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "GoodWe"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Foxess"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which solar inverter is best in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to the 2026 SolarQuotes Installers Choice Awards, Sungrow is the most installed inverter brand in Australia and Fronius has won the best solar inverter award five consecutive times. For most homeowners, Sungrow offers the best balance of price and performance. For those who want the highest-rated premium inverter, Fronius is the top choice."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a hybrid inverter for my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. If you do not have battery storage and do not plan to add it, a standard string inverter is sufficient and costs less. If you want to store solar energy for evening use, reduce your Jacana Energy grid import or have battery backup during power outages, a hybrid inverter is the better choice. Every Oneroof Solar system is designed after reviewing your actual electricity usage."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Sungrow and Fronius?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are excellent inverters widely installed across Australia. Sungrow is Chinese-manufactured and is the most cost-effective hybrid inverter option with strong Australian support. Fronius is Austrian-manufactured and is consistently rated by Australian solar installers as the most reliable inverter brand. Fronius costs more upfront. For homeowners on a budget, Sungrow. For those who want the best-rated brand regardless of cost, Fronius."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a solar inverter last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most quality solar inverters last 10 to 15 years. Fronius and Sungrow models typically come with 5 to 10-year product warranties, extendable to 15 years. Because inverters have a shorter lifespan than solar panels (which last 25 to 30 years), budget for one inverter replacement during the full life of your solar system. Oneroof Solar advises on the best warranty option for your installation at the time of quote."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a solar inverter cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A string inverter for a standard 6.6kW residential system costs approximately $1,000 to $1,800 installed. A hybrid inverter capable of adding battery storage costs approximately $1,500 to $3,000 installed, depending on brand and model. Inverter cost is typically included in the full system quote from Oneroof Solar. Contact us for a current price specific to your property."
          }
        },
        {
          "@type": "Question",
          "name": "Does my solar inverter need to be AS 4777 compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All solar inverters installed must be AS 4777 compliant before Power and Water Corporation approves grid connection. All five inverter brands Oneroof Solar installs are AS 4777 certified and CEC approved. Our installers handle all compliance documentation and Power and Water Corporation paperwork as part of every installation."
          }
        },
        {
          "@type": "Question",
          "name": "What does a hybrid inverter do that a standard inverter does not?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A hybrid inverter manages three power sources at once: your solar panels, your battery bank and the grid. During the day it powers your home from solar first, then charges your battery with any surplus. In the evening it draws from the battery before pulling from the Jacana Energy or Rimfire Energy grid. A standard string inverter does not manage batteries and any unused solar is simply exported to the grid."
          }
        }
      ]
    }
  ];

  const trustBadges = [
    "5 Brands Available",
    "CEC Approved",
    "Local Team",
    "AS 4777 Compliant",
    "Residential and Commercial"
  ];

  const brandCards = [
    {
      heading: "Sungrow - Industry-Leading Value",
      description: "The most installed solar inverter brand in Australia in 2026. Sungrow hybrid inverters handle solar panels, battery storage and grid connection in one unit, with strong local Australian support and competitive pricing.",
      bestFor: "Homes and businesses wanting reliable hybrid inverter performance at a competitive price",
      image: "https://i.postimg.cc/tg4ZN8sH/Chat-GPT-Image-Jun-6-2026-01-38-27-AM.png",
      alt: "Sungrow Solar Inverter",
      href: "/products/solar-inverters/sungrow-inverters",
      linkText: "EXPLORE SUNGROW"
    },
    {
      heading: "Fronius - Premium Austrian Engineering",
      description: "Fronius has won the SolarQuotes Installers Choice Award for best solar inverter five times. Their GEN24 series is built in Austria with advanced active cooling, smart grid management and exceptional long-term reliability.",
      bestFor: "Homeowners who want the highest-rated inverter brand in Australia",
      image: froniusImage,
      alt: "Fronius Solar Inverter",
      href: "/contact",
      linkText: "GET A FREE QUOTE"
    },
    {
      heading: "Sigenergy - Solar, Battery and EV in One",
      description: "Sigenergy integrates solar generation, battery storage and EV charging into a single intelligent platform. One system manages your property's full energy profile without the need for separate devices.",
      bestFor: "Homeowners adding EV charging or wanting full energy management in one platform",
      image: "https://i.postimg.cc/wB84tcMF/Chat-GPT-Image-Jun-6-2026-01-45-19-AM.png",
      alt: "Sigenergy Solar Inverter System",
      href: "/products/solar-inverters/sigenergy",
      linkText: "EXPLORE SIGENERGY"
    },
    {
      heading: "GoodWe - Flexible and Battery-Ready",
      description: "GoodWe offers one of the widest ranges of hybrid and battery-ready solar inverters available in Australia. Every GoodWe inverter is designed for easy battery addition now or in the future.",
      bestFor: "Homes and businesses planning to add battery storage now or later",
      image: "https://i.postimg.cc/SsVgtBrP/Chat-GPT-Image-Jun-6-2026-01-51-16-AM.png",
      alt: "GoodWe Solar Inverter",
      href: "/products/solar-inverters/goodwe",
      linkText: "EXPLORE GOODWE"
    },
    {
      heading: "Foxess - Smart Monitoring and Design",
      description: "Foxess inverters combine advanced solar conversion with cutting-edge monitoring and a smart, compact design. Strong grid stability features and detailed app-based monitoring make them a practical choice for installations.",
      bestFor: "Homeowners who want detailed real-time system monitoring and a compact unit design",
      image: "https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png",
      alt: "Foxess Solar Inverter",
      href: "/products/solar-inverters/fox-ess",
      linkText: "EXPLORE FOX ESS"
    },
    {
      heading: "Alpha ESS - Modular Battery & Hybrid Systems",
      description: "Alpha ESS hybrid inverters offer modular battery storage that grows as your power needs grow. Start with one battery module and add more later on your own terms.",
      bestFor: "Homeowners wanting modular battery storage and flexible expansion options",
      image: heroImage,
      alt: "Alpha ESS Solar Inverter System",
      href: "/products/solar-inverters/alpha-ess",
      linkText: "EXPLORE ALPHA ESS"
    }
  ];

  const faqs = [
    {
      q: "Which solar inverter is best in Australia?",
      a: "According to the 2026 SolarQuotes Installers Choice Awards, Sungrow is the most installed inverter brand in Australia and Fronius has won the best solar inverter award five consecutive times. For most homeowners, Sungrow offers the best balance of price and performance. For those who want the highest-rated premium inverter, Fronius is the top choice."
    },
    {
      q: "Do I need a hybrid inverter for my home?",
      a: "Not necessarily. If you do not have battery storage and do not plan to add it, a standard string inverter is sufficient and costs less. If you want to store solar energy for evening use, reduce your Jacana Energy grid import or have battery backup during power outages, a hybrid inverter is the better choice. Every Oneroof Solar system is designed after reviewing your actual electricity usage."
    },
    {
      q: "What is the difference between Sungrow and Fronius?",
      a: "Both are excellent inverters widely installed across Australia. Sungrow is Chinese-manufactured and is the most cost-effective hybrid inverter option with strong Australian support. Fronius is Austrian-manufactured and is consistently rated by Australian solar installers as the most reliable inverter brand. Fronius costs more upfront. For homeowners on a budget, Sungrow. For those who want the best-rated brand regardless of cost, Fronius."
    },
    {
      q: "How long does a solar inverter last?",
      a: "Most quality solar inverters last 10 to 15 years. Fronius and Sungrow models typically come with 5 to 10-year product warranties, extendable to 15 years. Because inverters have a shorter lifespan than solar panels (which last 25 to 30 years), budget for one inverter replacement during the full life of your solar system. Oneroof Solar advises on the best warranty option for your installation at the time of quote."
    },
    {
      q: "How much does a solar inverter cost?",
      a: "A string inverter for a standard 6.6kW residential system costs approximately $1,000 to $1,800 installed. A hybrid inverter capable of adding battery storage costs approximately $1,500 to $3,000 installed, depending on brand and model. Inverter cost is typically included in the full system quote from Oneroof Solar. Contact us for a current price specific to your property."
    },
    {
      q: "Does my solar inverter need to be AS 4777 compliant?",
      a: "Yes. All solar inverters installed must be AS 4777 compliant before Power and Water Corporation approves grid connection. All five inverter brands Oneroof Solar installs are AS 4777 certified and CEC approved. Our installers handle all compliance documentation and Power and Water Corporation paperwork as part of every installation."
    },
    {
      q: "What does a hybrid inverter do that a standard inverter does not?",
      a: "A hybrid inverter manages three power sources at once: your solar panels, your battery bank and the grid. During the day it powers your home from solar first, then charges your battery with any surplus. In the evening it draws from the battery before pulling from the Jacana Energy or Rimfire Energy grid. A standard string inverter does not manage batteries and any unused solar is simply exported to the grid."
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
                  <span className="text-[#5BC94D]" aria-current="page">Solar Inverters</span>
                </nav>

                <div className="inline-block px-3.5 py-1 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4">
                  Solar Inverters
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Solar Inverter Brands
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Your solar inverter is the brain of your solar system. It converts the electricity your panels generate into power your home or business can actually use. Oneroof Solar supplies and installs Sungrow, Fronius, Sigenergy, GoodWe and Foxess inverters across Darwin and Alice Springs.
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
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] aspect-[16/10] sm:aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img 
                      referrerPolicy="no-referrer"
                      src={heroImage} 
                      alt="Sungrow hybrid solar inverter installed by Oneroof Solar on residential property" 
                      className="w-full h-full object-cover"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS A SOLAR INVERTER */}
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
                    alt="Solar inverter installed on wall converting solar DC to AC power" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Does a Solar Inverter Do?
                </h2>
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  <p>
                    Solar panels generate direct current (DC) electricity. Your home runs on alternating current (AC). A solar inverter sits between the two, converting DC from your panels into AC that runs your appliances, air conditioning, lights and everything else.
                  </p>
                  <p>
                    Every solar system needs an inverter. The right inverter for your property depends on whether you want battery storage, how your roof is shaped, whether you are on the Power and Water Corporation grid and how much you want to spend. Oneroof Solar recommends the right inverter for your system after a free site assessment.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Bar */}
            <div className="mt-12 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <span className="text-white text-lg sm:text-xl font-bold text-center sm:text-left">
                Not sure which inverter suits your system?
              </span>
              <Button
                size="lg"
                className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs shrink-0"
                asChild
              >
                <Link to="/contact">
                  Get a Free Assessment
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: INVERTER TYPES */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Which Type of Solar Inverter Do You Need
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              There are three main inverter types. The right one depends on your property, roof layout and whether you want battery storage.
            </p>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-900 text-white">
                    <th className="p-4 sm:p-5 text-sm sm:text-base font-extrabold uppercase tracking-wider w-1/4">Inverter Type</th>
                    <th className="p-4 sm:p-5 text-sm sm:text-base font-extrabold uppercase tracking-wider w-2/5 border-l border-slate-800">How It Works</th>
                    <th className="p-4 sm:p-5 text-sm sm:text-base font-extrabold uppercase tracking-wider w-1/3 border-l border-slate-800">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-sm sm:text-base">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">String Inverter</td>
                    <td className="p-4 sm:p-5 border-l border-slate-200 align-top">Panels connect in a series (string) to one central inverter. Simple, reliable and cost-effective.</td>
                    <td className="p-4 sm:p-5 border-l border-slate-200 align-top">Homes with a clear north-facing roof and no shading. No battery required.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">Hybrid Inverter</td>
                    <td className="p-4 sm:p-5 border-l border-slate-200 align-top">Manages solar panels, battery storage and grid connection in one unit. Stores excess solar for evening use.</td>
                    <td className="p-4 sm:p-5 border-l border-slate-200 align-top">Homes and businesses that want battery backup and maximum self-consumption of solar power.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">Off-Grid Inverter</td>
                    <td className="p-4 sm:p-5 border-l border-slate-200 align-top">Operates completely independently from the Power and Water Corporation grid. Works with large battery banks and a backup generator.</td>
                    <td className="p-4 sm:p-5 border-l border-slate-200 align-top">Remote properties, stations and communities without grid connection.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Links below table */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-10">
              For off-grid system details see our <Link to="/services/off-grid-solar-system" className="text-[#5BC94D] font-bold underline hover:text-emerald-700">off-grid solar page</Link>. For battery storage options see our <Link to="/services/solar-battery-installation" className="text-[#5BC94D] font-bold underline hover:text-emerald-700">solar battery installation page</Link>.
            </p>

            {/* CTA Bar */}
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <span className="text-white text-lg sm:text-xl font-bold text-center sm:text-left">
                Not sure which inverter type suits your property?
              </span>
              <Button
                size="lg"
                className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs shrink-0"
                asChild
              >
                <Link to="/contact">
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: INVERTER BRAND GRID */}
      <section className="py-16 lg:py-24 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Solar Inverter Brands We Install
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-4xl">
              All five brands are CEC approved, AS 4777 compliant and supported by our Darwin and Alice Springs installation teams.
            </p>

            {/* Brand Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-[#0D1520] border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#5BC94D]/50 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Brand Image Area */}
                    <div className="h-52 mb-6 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative flex items-center justify-center p-4">
                      <img 
                        referrerPolicy="no-referrer"
                        src={card.image} 
                        alt={card.alt} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-slate-300 text-xs font-mono uppercase font-semibold">
                        INVERTER
                      </span>
                      <span className="px-3 py-1 bg-[#5BC94D]/10 border border-[#5BC94D]/30 rounded-md text-[#5BC94D] text-xs font-mono uppercase font-bold flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5" /> SMART SYNC
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-[#5BC94D] transition-colors">
                      {card.heading}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
                      {card.description}
                    </p>

                    {/* Best For */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-8">
                      <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-wider block mb-1 font-mono">Best For</span>
                      <p className="text-slate-200 text-sm font-medium leading-relaxed">{card.bestFor}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      size="lg"
                      className="w-full rounded-xl bg-[#5BC94D] text-[#19281D] border-none font-extrabold hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs justify-between"
                      asChild
                    >
                      <Link to={card.href || "/contact"}>
                        <span>{card.linkText || "GET A FREE QUOTE"}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: WHERE WE INSTALL */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="flex items-center gap-3 text-[#5BC94D] font-bold text-sm uppercase tracking-wider mb-4 font-mono">
                <MapPin className="w-5 h-5" />
                <span>Wide Coverage &amp; Service</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Serving Darwin to Alice Springs
              </h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium max-w-4xl">
                <p>
                  Oneroof Solar installs all five inverter brands across Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. We also cover rural Darwin, Humpty Doo, Litchfield, Kakadu region and remote properties requiring off-grid inverter solutions.
                </p>
                <p>
                  Contact our Darwin team on <a href="tel:0483986444" className="text-[#5BC94D] font-bold hover:underline">0483 986 444</a> or our Alice Springs team on <a href="tel:0483937004" className="text-[#5BC94D] font-bold hover:underline">0483 937 004</a> for a free site assessment.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
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
                        ? "bg-white shadow-md border-[#5BC94D]"
                        : "bg-white border-slate-200 hover:border-[#5BC94D]/40 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-prod-${i}`}
                      id={`faq-button-prod-${i}`}
                      className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 transition-all"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                            isOpen
                              ? "bg-[#5BC94D] text-[#19281D] shadow-md shadow-[#5BC94D]/20"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-bold leading-tight transition-colors ${
                            isOpen ? "text-emerald-700" : "text-slate-900"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-[#5BC94D] bg-[#5BC94D]/10 text-emerald-700 rotate-180"
                            : "border-slate-200 text-slate-500 bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-prod-${i}`}
                      aria-labelledby={`faq-button-prod-${i}`}
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

      {/* SECTION 7: FINAL CTA */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#5BC94D]/30 bg-slate-900/90 p-8 sm:p-14 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
                  Not sure which solar inverter is right for your property? Get a free quote from Oneroof Solar. Our Darwin and Alice Springs teams will recommend the right inverter brand, type and model for your system.
                </p>

                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-slate-300">
                  <a href="tel:0483986444" className="hover:text-[#5BC94D] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Darwin: 0483 986 444</span>
                  </a>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <a href="tel:0483937004" className="hover:text-[#5BC94D] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Alice Springs: 0483 937 004</span>
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
