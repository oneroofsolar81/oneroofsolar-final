import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  ChevronDown,
  Flame,
  SunDim,
  Wind,
  Wrench,
  ShieldCheck,
  FileText,
  Download
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { SEO } from "../components/SEO";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import jinkoTopconImg from "../assets/images/jinko_topcon_cell_1785232213323.jpg";

export function JinkoSolarPanels() {
  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Jinko Solar Panels NT | Installed by Oneroof Solar",
    metaDescription: "Oneroof Solar installs Jinko N-type solar panels across Darwin, Alice Springs, Palmerston and the NT. CEC approved, cyclone rated, 25-year warranty. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/solar-panels-brands/jinko/",
    robots: "index, follow",
    openGraphTitle: "Jinko Solar Panels NT | Installed by Oneroof Solar",
    openGraphDescription: "Oneroof Solar installs Jinko N-type solar panels across Darwin, Alice Springs, Palmerston and the NT. CEC approved, cyclone rated, 25-year warranty. Get a free quote.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/jinko_topcon_cell.jpg",
    twitterTitle: "Jinko Solar Panels NT | Installed by Oneroof Solar",
    twitterDescription: "Oneroof Solar installs Jinko N-type solar panels across Darwin, Alice Springs, Palmerston and the NT. CEC approved, cyclone rated, 25-year warranty. Get a free quote.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/jinko_topcon_cell.jpg",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Jinko N-Type TOPCon Solar Panels",
      "brand": {
        "@type": "Brand",
        "name": "Jinko Solar"
      },
      "description": "Oneroof Solar installs Jinko N-type TOPCon solar panels across Darwin, Palmerston, Alice Springs and the NT. Features high efficiency, cyclone rating, and 25-year product warranty with labor cost coverage.",
      "category": "Solar Panels",
      "url": "https://oneroofsolar.com.au/solar-panels-brands/jinko/",
      "image": "https://oneroofsolar.com.au/assets/images/jinko_topcon_cell.jpg",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Module Efficiency",
          "value": "Above 22% (up to 23.6%)"
        },
        {
          "@type": "PropertyValue",
          "name": "Temperature Coefficient",
          "value": "-0.26%/°C"
        },
        {
          "@type": "PropertyValue",
          "name": "Performance Warranty",
          "value": "30 Years"
        },
        {
          "@type": "PropertyValue",
          "name": "Product Warranty",
          "value": "25 Years (includes labour cost coverage)"
        }
      ]
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
          "name": "Solar Panels",
          "item": "https://oneroofsolar.com.au/solar-panels/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jinko Solar Panels",
          "item": "https://oneroofsolar.com.au/solar-panels-brands/jinko/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Jinko a good solar panel brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Jinko is a Tier 1 manufacturer rated by PV Evolution Labs (PVEL) as a top performer for module reliability. They hold 18 per cent global solar market share, have delivered over 260 gigawatts worldwide and have maintained a dedicated Australian presence for over a decade. Approximately 1 in 8 Australian solar installers include Jinko in their premium offerings."
          }
        },
        {
          "@type": "Question",
          "name": "Are Jinko solar panels worth it in the Northern Territory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For NT homeowners, Jinko delivers above 22 per cent efficiency with a -0.26%/degC temperature coefficient suited to Darwin heat, strong wet season low-light performance, salt mist resistance for coastal Darwin properties, and a 25-year product warranty with labour cost coverage. For buyers who want a proven global brand with competitive pricing and Australian warranty support, Jinko is a strong choice across the NT."
          }
        },
        {
          "@type": "Question",
          "name": "What are common problems with Jinko solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jinko panels do not have a known systematic fault specific to the NT. The most common issues reported across any solar brand in Australia relate to installation quality, not the panels themselves. This is why choosing a CEC-accredited installer matters as much as choosing the right panel brand. All Oneroof Solar installations are carried out to full NT building standards by our accredited team."
          }
        },
        {
          "@type": "Question",
          "name": "How long do Jinko solar panels last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jinko N-type panels carry a 25-year product warranty and a 30-year performance warranty guaranteeing 87.4 per cent output at Year 25. Annual degradation after Year 1 is 0.4 per cent. A properly installed Jinko system in Darwin is designed to still be generating reliable electricity in the 2050s."
          }
        },
        {
          "@type": "Question",
          "name": "Are Jinko solar panels made in China?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Jinko is a Chinese manufacturer listed on the New York Stock Exchange (NYSE: JKS). Being manufactured in China does not affect quality or reliability — Jinko controls the full production process including silicon ingot manufacturing, which gives them tighter quality oversight than many competitors. Independent PVEL testing consistently rates Jinko panels among the most reliable modules in the global market."
          }
        },
        {
          "@type": "Question",
          "name": "Are German solar panels better than Chinese for the NT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Panel quality is determined by cell technology, manufacturing quality control and warranty backing, not country of origin. Jinko's N-type TOPCon technology, PVEL top performer rating and 25-year product warranty with Australian labour coverage competes strongly against any European brand at a significantly better price point. REC, which Oneroof Solar also installs, is a Norwegian brand that performs strongly in NT heat conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if Jinko solar panels are genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All Jinko panels installed by Oneroof Solar are sourced through authorised Australian distributors and are CEC approved. Every panel carries a traceable serial number. If you are comparing quotes from other installers, ask for the exact model number and verify it against Jinko's official Australian product list at jinkosolar.com.au before signing any contract."
          }
        },
        {
          "@type": "Question",
          "name": "Is a 10kW solar system enough to run a Darwin home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most Darwin households with heavy air conditioning use, a 10kW system covers the majority of daytime energy needs. Larger families or homes with pool pumps, multiple AC units or EV chargers may benefit from 13kW or more. Our installation team sizes every system to your actual Jacana Energy bills, not a generic estimate. See our solar panel installation page for full system sizing details."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my electricity bill still high after installing solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common reason is that most energy consumption happens at night or early morning when panels are not generating. Solar savings come primarily from self-consumption during daylight hours. If your household uses most electricity in the evening, pairing your panels with a battery storage system allows you to use your own solar after dark. Oneroof Solar can assess whether battery storage is cost-effective for your NT usage pattern."
          }
        },
        {
          "@type": "Question",
          "name": "How do Jinko panels compare to LONGi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are Tier 1 Chinese manufacturers with strong Australian market presence. Jinko's advantage for NT installations is its Australian local support network and labour cost warranty coverage. LONGi's Hi-MO series is also N-type technology and performs comparably on efficiency and temperature coefficient. The practical difference for NT homeowners often comes down to which brand your installer stocks and their ability to support warranty claims locally."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best solar panels for Australia in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Northern Territory conditions specifically, the best panels are those with a low temperature coefficient, cyclone wind load certification, salt mist resistance and a strong long-term warranty backed by Australian support. Jinko N-type, REC HJT and AIKO ABC all meet these criteria and are the three brands Oneroof Solar installs across Darwin, Palmerston, Alice Springs and the NT."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Is Jinko a good solar panel brand?",
      a: "Yes. Jinko is a Tier 1 manufacturer rated by PV Evolution Labs (PVEL) as a top performer for module reliability. They hold 18 per cent global solar market share, have delivered over 260 gigawatts worldwide and have maintained a dedicated Australian presence for over a decade. Approximately 1 in 8 Australian solar installers include Jinko in their premium offerings."
    },
    {
      q: "Are Jinko solar panels worth it in the Northern Territory?",
      a: "Yes. For NT homeowners, Jinko delivers above 22 per cent efficiency with a -0.26%/degC temperature coefficient suited to Darwin heat, strong wet season low-light performance, salt mist resistance for coastal Darwin properties, and a 25-year product warranty with labour cost coverage. For buyers who want a proven global brand with competitive pricing and Australian warranty support, Jinko is a strong choice across the NT."
    },
    {
      q: "What are common problems with Jinko solar panels?",
      a: "Jinko panels do not have a known systematic fault specific to the NT. The most common issues reported across any solar brand in Australia relate to installation quality, not the panels themselves. This is why choosing a CEC-accredited installer matters as much as choosing the right panel brand. All Oneroof Solar installations are carried out to full NT building standards by our accredited team."
    },
    {
      q: "How long do Jinko solar panels last?",
      a: "Jinko N-type panels carry a 25-year product warranty and a 30-year performance warranty guaranteeing 87.4 per cent output at Year 25. Annual degradation after Year 1 is 0.4 per cent. A properly installed Jinko system in Darwin is designed to still be generating reliable electricity in the 2050s."
    },
    {
      q: "Are Jinko solar panels made in China?",
      a: "Yes. Jinko is a Chinese manufacturer listed on the New York Stock Exchange (NYSE: JKS). Being manufactured in China does not affect quality or reliability — Jinko controls the full production process including silicon ingot manufacturing, which gives them tighter quality oversight than many competitors. Independent PVEL testing consistently rates Jinko panels among the most reliable modules in the global market."
    },
    {
      q: "Are German solar panels better than Chinese for the NT?",
      a: "Not necessarily. Panel quality is determined by cell technology, manufacturing quality control and warranty backing, not country of origin. Jinko's N-type TOPCon technology, PVEL top performer rating and 25-year product warranty with Australian labour coverage competes strongly against any European brand at a significantly better price point. REC, which Oneroof Solar also installs, is a Norwegian brand that performs strongly in NT heat conditions."
    },
    {
      q: "How do I know if Jinko solar panels are genuine?",
      a: "All Jinko panels installed by Oneroof Solar are sourced through authorised Australian distributors and are CEC approved. Every panel carries a traceable serial number. If you are comparing quotes from other installers, ask for the exact model number and verify it against Jinko's official Australian product list at jinkosolar.com.au before signing any contract."
    },
    {
      q: "Is a 10kW solar system enough to run a Darwin home?",
      a: (
        <span>
          For most Darwin households with heavy air conditioning use, a 10kW system covers the majority of daytime energy needs. Larger families or homes with pool pumps, multiple AC units or EV chargers may benefit from 13kW or more. Our installation team sizes every system to your actual Jacana Energy bills, not a generic estimate. See our{" "}
          <RouterLink to="/services/solar-panel-installation" className="text-brand-600 hover:underline font-bold">
            solar panel installation page
          </RouterLink>{" "}
          for full system sizing details.
        </span>
      )
    },
    {
      q: "Why is my electricity bill still high after installing solar?",
      a: (
        <span>
          The most common reason is that most energy consumption happens at night or early morning when panels are not generating. Solar savings come primarily from self-consumption during daylight hours. If your household uses most electricity in the evening, pairing your panels with a{" "}
          <RouterLink to="/services/battery-storage" className="text-brand-600 hover:underline font-bold">
            battery storage system
          </RouterLink>{" "}
          allows you to use your own solar after dark. Oneroof Solar can assess whether battery storage is cost-effective for your NT usage pattern.
        </span>
      )
    },
    {
      q: "How do Jinko panels compare to LONGi?",
      a: "Both are Tier 1 Chinese manufacturers with strong Australian market presence. Jinko's advantage for NT installations is its Australian local support network and labour cost warranty coverage. LONGi's Hi-MO series is also N-type technology and performs comparably on efficiency and temperature coefficient. The practical difference for NT homeowners often comes down to which brand your installer stocks and their ability to support warranty claims locally."
    },
    {
      q: "What are the best solar panels for Australia in 2026?",
      a: "For Northern Territory conditions specifically, the best panels are those with a low temperature coefficient, cyclone wind load certification, salt mist resistance and a strong long-term warranty backed by Australian support. Jinko N-type, REC HJT and AIKO ABC all meet these criteria and are the three brands Oneroof Solar installs across Darwin, Palmerston, Alice Springs and the NT."
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <img 
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" 
            alt="Sunny solar backdrop"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/40"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Side Content */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                  <a href="https://oneroofsolar.com.au/" className="hover:text-brand-400 transition-colors">Home</a>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <RouterLink to="/product/solar-panels-brands" className="hover:text-brand-400 transition-colors">Solar Panels</RouterLink>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-brand-400" aria-current="page">Jinko Solar Panels</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
                  Jinko Solar Panels NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-brand-500 pl-6 mb-8">
                  Oneroof Solar installs Jinko N-type solar panels across Darwin, Palmerston, Alice Springs and the broader Northern Territory. Jinko Solar (NYSE: JKS) is the world's largest solar panel manufacturer by shipment volume, a Tier 1 brand with over 260 gigawatts delivered globally and a dedicated local presence in Australia. If you are comparing panel brands before committing to a solar installation in the NT, here is everything you need to know about Jinko.
                </p>

                {/* PDF Datasheet Button */}
                <div className="pt-2">
                  <a
                    href="/downloads/jinko-tiger-neo-440-470w-datasheet.pdf"
                    download="jinko-tiger-neo-440-470w-datasheet.pdf"
                    aria-label="Download Jinko Tiger Neo Datasheet PDF"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-50 hover:bg-brand-500 text-brand-700 hover:text-slate-900 border border-brand-200 hover:border-brand-500 font-bold text-sm tracking-wide transition-all shadow-sm group"
                  >
                    <FileText className="w-5 h-5 text-brand-600 group-hover:text-slate-900 group-hover:scale-110 transition-transform" />
                    <span>Download Jinko Tiger Neo Datasheet (PDF)</span>
                    <Download className="w-4 h-4 text-brand-600 group-hover:text-slate-900 transition-colors ml-1" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Clean Visual Image - No badges or claims */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative group rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-slate-900 aspect-[4/3] w-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center">
                  <img 
                    referrerPolicy="no-referrer"
                    src={jinkoTopconImg} 
                    alt="Jinko N-type TOPCon solar panel structure" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 2 — About Jinko Solar */}
      <section className="py-12 lg:py-20 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-8">
              About Jinko Solar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  JinkoSolar Holding Co. Ltd, listed on the New York Stock Exchange (NYSE: JKS), has been one of the top three solar manufacturers globally by shipment volume for most of the past decade. They control the entire production process from silicon ingot manufacturing through to finished photovoltaic (PV) module assembly, which gives them tighter quality control than manufacturers who outsource cell production.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  In Australia, Jinko operates through a dedicated local office in Sydney with distribution warehouses in Melbourne, Brisbane, Adelaide and Perth. That physical presence matters for NT homeowners. When you install Jinko panels in 2026, you are backed by a manufacturer that will still have Australian warranty support in 2051 when your performance warranty is still active.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  Independent testing by PV Evolution Labs (PVEL) has consistently rated Jinko as a top performer for module reliability across multiple annual testing cycles. According to Solar Choice data, approximately 1 in 8 Australian solar installers include Jinko in their premium offerings, making it one of the most trusted brands across the country.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. SECTION 3 — Jinko N-Type TOPCon Technology */}
      <section className="py-12 md:py-16 lg:py-[80px] bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
            {/* Text Column (~47% on desktop) */}
            <div className="w-full lg:w-[47%] shrink-0">
              <FadeIn>
                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6 max-w-[560px]">
                  Jinko N-Type TOPCon Technology
                </h2>
                <p className="text-slate-600 text-base lg:text-[17px] leading-[1.68] mb-6 max-w-[560px] font-medium">
                  Jinko's current residential range is built on N-type TOPCon (Tunnel Oxide Passivated Contact) cell technology. An ultra-thin tunnel oxide layer at the rear of each cell allows electrical current to pass through while actively blocking electrons from recombining inside the cell. This process, known as passivation, reduces internal energy loss and is why N-type panels produce significantly less light-induced degradation (LID) than older P-type PERC panels that dominated the Australian market through the early 2020s.
                </p>
                <p className="text-slate-600 text-base lg:text-[17px] leading-[1.68] max-w-[560px] font-medium">
                  The current flagship residential model features half-cut cell design and Multi-Busbar (MBB) technology. Half-cut cells divide each cell in two, reducing resistive losses and improving partial shade tolerance. Multi-Busbar technology shortens the path electrical current travels across each cell, reducing resistance and capturing more energy during low-light conditions including Darwin's wet season overcast days and early morning periods.
                </p>
              </FadeIn>
            </div>

            {/* Image Column (~53% on desktop) */}
            <div className="w-full lg:w-[53%] shrink-0 flex justify-center lg:justify-end">
              <FadeIn delay={0.2} className="w-full max-w-[620px]">
                <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm w-full">
                  <div className="w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                    <img 
                      referrerPolicy="no-referrer"
                      src={jinkoTopconImg} 
                      alt="Jinko N-type TOPCon solar panel cell structure"
                      className="w-full h-auto object-contain max-h-[460px] rounded-lg"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 4 — Jinko Solar Panel Models We Install */}
      <section className="py-12 lg:py-24 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
              Jinko Solar Panel Models We Install
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              We install Jinko's current N-type residential range across the NT.
            </p>

            {/* Responsive Specification Table - Confirmed specs only */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-white font-black text-sm uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Specification</th>
                    <th className="p-4 sm:p-5 text-brand-400">Jinko N-Type (Current Model)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Model Series</td>
                    <td className="p-4 text-brand-600 font-bold">Jinko Tiger Neo 48HL4M-DV Dual Glass</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Cell technology</td>
                    <td className="p-4">N-type TOPCon monocrystalline (HOT 3.0 Technology)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Peak wattage</td>
                    <td className="p-4">440W – 470W (in 5W steps)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Module efficiency</td>
                    <td className="p-4">22.02% to 23.52%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Temperature coefficient (Pmax)</td>
                    <td className="p-4">-0.29%/°C</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Panel dimensions</td>
                    <td className="p-4">1762 × 1134 × 30 mm</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Panel weight</td>
                    <td className="p-4">20.0 kg</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Annual degradation (Year 2+)</td>
                    <td className="p-4">0.40% per year (1% first-year degradation)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Year 30 output guarantee</td>
                    <td className="p-4">87.4% of rated power</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Product warranty</td>
                    <td className="p-4 text-brand-600 font-bold">25 years (includes labour cost coverage)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Performance warranty</td>
                    <td className="p-4">30 years linear power warranty</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Cell design & Glass</td>
                    <td className="p-4">96 cells (48×2), 1.6mm Dual Glass (Anti-reflection & Heat Strengthened)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Salt mist corrosion resistance</td>
                    <td className="p-4">Yes — certified</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">CEC approved</td>
                    <td className="p-4">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">STC rebate eligible</td>
                    <td className="p-4">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Cyclone rated</td>
                    <td className="p-4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. SECTION 5 — Why Jinko Performs Well Across the NT */}
      <section className="py-12 lg:py-24 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-10">
              Why Jinko Performs Well Across the NT
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Point 1 */}
              <div className="group bg-slate-50 border border-slate-100 hover:border-brand-500/40 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                  Heat performance in Darwin's dry season
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Darwin rooftops regularly reach 65 to 75 degC during the dry season. Every degree above 25 degC reduces panel output. Jinko's temperature coefficient of -0.26%/degC means panels lose less power as cell temperature rises. On a 70 degC rooftop, this performs meaningfully better than older P-type PERC panels rated at -0.34 to -0.35%/degC. Over a full NT dry season, that difference is real electricity produced and real savings on your Jacana Energy bill.
                </p>
              </div>

              {/* Point 2 */}
              <div className="group bg-slate-50 border border-slate-100 hover:border-brand-500/40 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SunDim className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                  Low-light performance during the wet season
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Darwin's wet season brings weeks of heavy overcast. Jinko's N-type TOPCon design is specifically engineered to harvest scattered and diffused sunlight. Panels wake up earlier in the morning, generate steadily through cloud cover and remain active later in the afternoon. This extended generation window is where N-type technology delivers a practical advantage over older panel architectures during the October to April wet season.
                </p>
              </div>

              {/* Point 3 */}
              <div className="group bg-slate-50 border border-slate-100 hover:border-brand-500/40 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wind className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                  Cyclone rating for NT installations
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Every Jinko panel we install meets the structural wind load certification required for Darwin's cyclone zone. Our Clean Energy Council (CEC) accredited electricians install every system to full NT building standards before Power and Water Corporation approves grid connection.
                </p>
              </div>

              {/* Point 4 */}
              <div className="group bg-slate-50 border border-slate-100 hover:border-brand-500/40 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                  Labour cost warranty coverage
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Jinko's 25-year product warranty includes labour cost coverage for warranty replacement. This is a practical advantage in the Northern Territory where the distances between Darwin, Alice Springs, remote stations and smaller communities make repair logistics expensive. Most other panel brands cover the panel replacement cost but leave labour to the homeowner.
                </p>
              </div>

              {/* Point 5 */}
              <div className="group bg-slate-50 border border-slate-100 hover:border-brand-500/40 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-sm flex flex-col h-full md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                  Salt mist and humidity resistance
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Darwin's coastal location and year-round humidity are hard on solar hardware. All Jinko panels we install carry certified salt mist corrosion resistance, which protects the panel frame, cell connections and junction box against the coastal NT environment over the full 25-year warranty period.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. SECTION 6 — Jinko vs AIKO vs REC — Which Is Right for Your NT Roof */}
      <section className="py-12 lg:py-24 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
              Jinko vs AIKO vs REC — Which Is Right for Your NT Roof
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              All three brands Oneroof Solar installs use N-type cell technology and are cyclone rated and CEC approved for NT installations. The right choice depends on your roof size, budget and priorities.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-white font-black text-sm uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Specification</th>
                    <th className="p-4 sm:p-5 text-brand-400">Jinko N-Type</th>
                    <th className="p-4 sm:p-5 text-emerald-400">AIKO ABC</th>
                    <th className="p-4 sm:p-5 text-blue-400">REC HJT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Cell technology</td>
                    <td className="p-4">TOPCon N-type</td>
                    <td className="p-4">All Back Contact N-type</td>
                    <td className="p-4">Heterojunction N-type</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Module efficiency</td>
                    <td className="p-4">Above 22% to 23.6%</td>
                    <td className="p-4">Above 25%</td>
                    <td className="p-4">22.3%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Temperature coefficient</td>
                    <td className="p-4">-0.26%/degC</td>
                    <td className="p-4">-0.26%/degC</td>
                    <td className="p-4">-0.24%/degC</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Performance warranty</td>
                    <td className="p-4">30 years</td>
                    <td className="p-4">30 years</td>
                    <td className="p-4">25 years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Year 25 output guarantee</td>
                    <td className="p-4">87.4%</td>
                    <td className="p-4">90.6%</td>
                    <td className="p-4">92%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Labour warranty coverage</td>
                    <td className="p-4 text-brand-600 font-bold">Yes</td>
                    <td className="p-4 text-slate-400">No</td>
                    <td className="p-4 text-slate-400">No</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Salt mist certified</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">In Australia since</td>
                    <td className="p-4">Long established</td>
                    <td className="p-4">2024</td>
                    <td className="p-4">Long established</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Best for NT</td>
                    <td className="p-4 font-bold text-brand-600">Proven value, low-light, local support</td>
                    <td className="p-4">Max output, limited roof space</td>
                    <td className="p-4">Lowest heat loss</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              For maximum output from limited Darwin roof space, see our{" "}
              <RouterLink to="/solar-panels-brands/aiko/" className="text-brand-600 hover:underline font-bold">
                AIKO solar panels page
              </RouterLink>
              . For the lowest temperature coefficient available, see our{" "}
              <RouterLink to="/product/solar-panels-brands" className="text-brand-600 hover:underline font-bold">
                REC solar panels page
              </RouterLink>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. SECTION 7 — Frequently Asked Questions */}
      <section className="py-12 lg:py-24 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
                        ? "bg-slate-50 shadow-md border-brand-500"
                        : "bg-white border-slate-200 hover:border-brand-500/40"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-jinko-${i}`}
                      id={`faq-button-jinko-${i}`}
                      className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 transition-all"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                            isOpen
                              ? "bg-brand-500 text-slate-900 shadow-sm"
                              : "bg-slate-100 text-slate-500 border border-slate-200"
                          }`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </div>
                        <h3
                          className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                            isOpen ? "text-brand-600" : "text-slate-900"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-brand-500 bg-brand-50 text-brand-600 rotate-180"
                            : "border-slate-200 text-slate-400 bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-jinko-${i}`}
                      aria-labelledby={`faq-button-jinko-${i}`}
                      role="region"
                      className={`overflow-hidden transition-all duration-500 px-6 sm:px-6 ${
                        isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-slate-600 leading-relaxed font-medium pl-12 sm:pl-14 text-base border-t border-slate-100 pt-4 mt-2">
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

      {/* 8. SECTION 8 — Final CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0A1118]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="bg-slate-900/90 border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl max-w-4xl mx-auto backdrop-blur-md">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-8">
                Ready to install Jinko solar panels on your NT property? Get a free quote from Oneroof Solar today.
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-lg sm:text-xl font-bold font-mono text-white">
                <a 
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="flex items-center gap-3 hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-6 h-6 text-brand-400" />
                  <span>Call: {PRIMARY_PHONE}</span>
                </a>

                <a 
                  href="mailto:info@oneroofsolar.com.au"
                  className="flex items-center gap-3 hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-6 h-6 text-brand-400" />
                  <span>Email: info@oneroofsolar.com.au</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
