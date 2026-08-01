import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown,
  FileText,
  Download,
  Phone,
  Mail
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import recSolarPanelImg from "../assets/images/cyclone_solar_darwin_1784286769053.jpg";

export function RecSolarPanels() {
  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "REC Solar Panels NT: Built for Darwin & Alice Springs Heat",
    metaDescription: "Get premium Singapore-made REC solar panels built to survive 25+ years in NT heat and cyclones across Darwin, Alice Springs and the NT. Get a free quote today from the local team at Oneroof Solar.",
    canonicalUrl: "https://oneroofsolar.com.au/solar-panels-brands/rec/",
    robots: "index, follow",
    openGraphTitle: "REC Solar Panels NT: Built for Darwin & Alice Springs Heat",
    openGraphDescription: "Get premium Singapore-made REC solar panels built to survive 25+ years in NT heat and cyclones across Darwin, Alice Springs and the NT. Get a free quote today from the local team at Oneroof Solar.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/cyclone_solar_darwin_1784286769053.jpg",
    twitterTitle: "REC Solar Panels NT: Built for Darwin & Alice Springs Heat",
    twitterDescription: "Get premium Singapore-made REC solar panels built to survive 25+ years in NT heat and cyclones across Darwin, Alice Springs and the NT. Get a free quote today from the local team at Oneroof Solar.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/cyclone_solar_darwin_1784286769053.jpg",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "REC Solar Panels NT",
      "brand": {
        "@type": "Brand",
        "name": "REC Solar"
      },
      "description": "Oneroof Solar installs REC solar panels across Darwin, Palmerston, Alice Springs and the broader Northern Territory.",
      "category": "Solar Panels",
      "url": "https://oneroofsolar.com.au/solar-panels-brands/rec/",
      "image": "https://oneroofsolar.com.au/assets/images/cyclone_solar_darwin_1784286769053.jpg"
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
          "item": "https://oneroofsolar.com.au/product/solar-panels-brands"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "REC Solar Panels",
          "item": "https://oneroofsolar.com.au/solar-panels-brands/rec/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are REC solar panels good?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. REC ranked 1st in the 2023 SolarQuotes Installers Choice Awards and 2nd in 2025, voted by Australian solar installers. Only 1 in 14,000 REC panels require a warranty claim. For NT homeowners who want reliable panels that hold up in heat, last 25 years and come with a strong warranty, REC is one of the best choices available in Australia."
          }
        },
        {
          "@type": "Question",
          "name": "Are REC solar panels made in China?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. REC panels are manufactured in Singapore using silicon produced in Norway. REC was founded in Norway in 1996 and is now owned by Reliance Industries. Singapore manufacture is a key reason many Australian homeowners and installers prefer REC — it provides a non-Chinese supply chain with European quality origins."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty do REC solar panels come with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "REC offers a 25-year product warranty, a 25-year performance warranty guaranteeing 92% output at Year 25, and 25-year labour coverage via the ProTrust programme when installed by a certified professional. For NT homeowners, the labour coverage is particularly valuable given the logistics costs involved in any call-out across the Territory."
          }
        },
        {
          "@type": "Question",
          "name": "Are REC panels worth the premium price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most NT homeowners who plan to stay in their property for 15 years or more, yes. The combination of low annual power loss (0.25% per year), strong heat performance and 25-year labour warranty makes REC the strongest long-term investment of the brands we install. If budget is the priority and you want a solid panel at a lower price, Jinko is a strong alternative."
          }
        },
        {
          "@type": "Question",
          "name": "How long do REC solar panels last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "REC Alpha Pure panels carry a 25-year product warranty and a 25-year performance warranty guaranteeing 92% of rated output at Year 25. With an annual power loss of 0.25%, a well-installed REC system in Darwin is designed to still be generating reliable electricity in 2051."
          }
        },
        {
          "@type": "Question",
          "name": "Are REC panels suitable for Darwin's cyclone season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. REC Alpha Pure panels are tested to high wind load ratings suitable for Darwin's cyclone zone. Every Oneroof Solar installation uses cyclone-rated mounting and is carried out by CEC-accredited electricians to full NT building standards before Power and Water Corporation grid connection is approved."
          }
        },
        {
          "@type": "Question",
          "name": "How do REC panels compare to Jinko or AIKO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "REC holds up better in heat than either Jinko or AIKO and has the lowest annual power loss and the strongest Year 25 output guarantee of the three brands we carry. AIKO delivers higher efficiency per panel, which suits rooftops with limited space. Jinko offers strong value at a lower price point. For a full side-by-side comparison of all three brands, see our solar panels page."
          }
        },
        {
          "@type": "Question",
          "name": "Do REC panels work in Darwin's wet season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. REC panels are designed to capture diffused light on overcast days effectively. During Darwin's wet season, when extended cloud cover is common, REC panels continue generating electricity rather than dropping off significantly. Every system Oneroof Solar installs is sized using full-year production averages across both wet and dry seasons."
          }
        }
      ]
    }
  ];

  const highlights = [
    {
      title: "Performs better in the heat",
      desc: "Most solar panels lose output as rooftops get hotter. REC panels are built to hold more of their power on hot NT days than the majority of panels available in Australia."
    },
    {
      title: "Works well on cloudy days",
      desc: "REC panels pick up diffused light on overcast days effectively. This matters during Darwin's wet season when cloud cover is consistent for weeks at a time."
    },
    {
      title: "One of the lowest annual power losses available",
      desc: "All solar panels gradually lose a small amount of output each year. REC Alpha Pure panels lose only 0.25% per year — among the lowest of any brand we carry."
    },
    {
      title: "92% output still guaranteed at Year 25",
      desc: "REC guarantees your panels will still be producing 92% of their original rated output after 25 years. That is a stronger long-term commitment than most brands offer."
    },
    {
      title: "Warranty covers the labour cost too",
      desc: "The REC ProTrust warranty covers product defects, performance output and the cost of a technician to replace a faulty panel for 25 years. In the NT where call-out costs are higher, this is a genuine practical advantage."
    },
    {
      title: "Built to handle NT weather",
      desc: "REC panels are rated to withstand hailstones up to 35mm and high wind loads suitable for Darwin's cyclone zone. Frames carry salt mist certification for coastal Darwin properties."
    }
  ];

  const faqs = [
    {
      q: "Are REC solar panels good?",
      a: (
        <>
          Yes. REC ranked 1st in the 2023 SolarQuotes Installers Choice Awards and 2nd in 2025, voted by Australian solar installers. Only 1 in 14,000 REC panels require a warranty claim. For NT homeowners who want reliable panels that hold up in heat, last 25 years and come with a strong warranty, REC is one of the best choices available in Australia.
        </>
      )
    },
    {
      q: "Are REC solar panels made in China?",
      a: (
        <>
          No. REC panels are manufactured in Singapore using silicon produced in Norway. REC was founded in Norway in 1996 and is now owned by Reliance Industries. Singapore manufacture is a key reason many Australian homeowners and installers prefer REC — it provides a non-Chinese supply chain with European quality origins.
        </>
      )
    },
    {
      q: "What warranty do REC solar panels come with?",
      a: (
        <>
          REC offers a 25-year product warranty, a 25-year performance warranty guaranteeing 92% output at Year 25, and 25-year labour coverage via the ProTrust programme when installed by a certified professional. For NT homeowners, the labour coverage is particularly valuable given the logistics costs involved in any call-out across the Territory.
        </>
      )
    },
    {
      q: "Are REC panels worth the premium price?",
      a: (
        <>
          For most NT homeowners who plan to stay in their property for 15 years or more, yes. The combination of low annual power loss (0.25% per year), strong heat performance and 25-year labour warranty makes REC the strongest long-term investment of the brands we install. If budget is the priority and you want a solid panel at a lower price, <Link to="/solar-panels-brands/jinko/" className="text-[#5BC94D] hover:underline font-bold">Jinko</Link> is a strong alternative.
        </>
      )
    },
    {
      q: "How long do REC solar panels last?",
      a: (
        <>
          REC Alpha Pure panels carry a 25-year product warranty and a 25-year performance warranty guaranteeing 92% of rated output at Year 25. With an annual power loss of 0.25%, a well-installed REC system in Darwin is designed to still be generating reliable electricity in 2051.
        </>
      )
    },
    {
      q: "Are REC panels suitable for Darwin's cyclone season?",
      a: (
        <>
          Yes. REC Alpha Pure panels are tested to high wind load ratings suitable for Darwin's cyclone zone. Every Oneroof Solar installation uses cyclone-rated mounting and is carried out by CEC-accredited electricians to full NT building standards before Power and Water Corporation grid connection is approved.
        </>
      )
    },
    {
      q: "How do REC panels compare to Jinko or AIKO?",
      a: (
        <>
          REC holds up better in heat than either <Link to="/solar-panels-brands/jinko/" className="text-[#5BC94D] hover:underline font-bold">Jinko</Link> or <Link to="/solar-panels-brands/aiko/" className="text-[#5BC94D] hover:underline font-bold">AIKO</Link> and has the lowest annual power loss and the strongest Year 25 output guarantee of the three brands we carry. AIKO delivers higher efficiency per panel, which suits rooftops with limited space. Jinko offers strong value at a lower price point. For a full side-by-side comparison of all three brands, see our <Link to="/solar-panels/" className="text-[#5BC94D] hover:underline font-bold">solar panels page</Link>.
        </>
      )
    },
    {
      q: "Do REC panels work in Darwin's wet season?",
      a: (
        <>
          Yes. REC panels are designed to capture diffused light on overcast days effectively. During Darwin's wet season, when extended cloud cover is common, REC panels continue generating electricity rather than dropping off significantly. Every system Oneroof Solar installs is sized using full-year production averages across both wet and dry seasons.
        </>
      )
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

      {/* 1. Hero Section (Deep Navy background #0A1118) */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/40"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content Column (~52%) */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                  <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/product/solar-panels-brands" className="hover:text-brand-400 transition-colors">Solar Panels</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-brand-400" aria-current="page">REC Solar Panels</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  REC Solar<br />Panels NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-brand-500 pl-6 mb-8 max-w-2xl">
                  Oneroof Solar installs REC solar panels across Darwin, Palmerston, Alice Springs and the broader Northern Territory. REC is a Norwegian-founded brand, manufacturing in Singapore, and is consistently rated by Australian solar installers as one of the most reliable panel brands available. If you want panels that hold up well in NT heat, last the distance and come backed by a warranty that actually covers you, REC is worth a close look.
                </p>
              </FadeIn>
            </div>

            {/* Right Side Visual Image (~42% with gap) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-slate-900 aspect-[4/3] w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img 
                      referrerPolicy="no-referrer"
                      src={recSolarPanelImg} 
                      alt="REC Alpha Pure solar panel installed on Darwin NT residential rooftop by Oneroof Solar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. About REC Solar */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              About REC Solar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  REC was founded in Norway in 1996 and has been manufacturing solar panels in Singapore since 2010. They are one of the few premium solar brands that does not manufacture in China, which is a key reason many Australian homeowners and installers choose them.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  In the SolarQuotes Installers Choice Awards, voted by Australian solar installers, REC ranked 1st in 2023 and 2nd in 2025. That is a consistent result that reflects real-world installer confidence, not marketing claims. Only 1 in 14,000 REC panels require a warranty claim, which is one of the best reliability records of any brand in the Australian market.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full">
                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  REC has a dedicated Australian office in Melbourne and an accredited installer network across the country including the NT, which means warranty support stays local if you ever need it.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. REC Solar Panel Highlights */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              REC Solar Panel Highlights
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-3xl">
              Here is what makes REC panels stand out in plain terms. For full technical specifications, download the datasheet below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="group bg-slate-50 border border-slate-100 hover:border-brand-500/40 p-7 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-sm flex flex-col h-full"
                >
                  <div className="w-8 h-1 rounded-full bg-brand-500 mb-5"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. REC Datasheet Download Section */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm text-center">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">
                Want the full technical specifications? Download the REC datasheet for all wattages, dimensions, efficiency ratings and certification details.
              </p>

              <div className="flex justify-center">
                <a
                  href="/downloads/rec-alpha-pure-rx-datasheet.pdf"
                  download="rec-alpha-pure-rx-datasheet.pdf"
                  aria-label="Download REC Alpha Pure-RX datasheet PDF"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-50 hover:bg-brand-500 text-brand-700 hover:text-slate-900 border border-brand-200 hover:border-brand-500 font-bold text-sm tracking-wide transition-all shadow-sm group"
                >
                  <FileText className="w-5 h-5 text-brand-600 group-hover:text-slate-900 group-hover:scale-110 transition-transform" />
                  <span>Download Models Sheet</span>
                  <Download className="w-4 h-4 text-brand-600 group-hover:text-slate-900 transition-colors ml-1" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. How REC Panels Perform in the NT */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              How REC Panels Perform in the NT
            </h2>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-brand-500 p-7 sm:p-9 rounded-2xl sm:rounded-3xl shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                  They stay strong in Darwin's heat
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  The NT dry season pushes rooftop temperatures well above 60 degrees Celsius. Most solar panels lose a noticeable amount of output at those temperatures. REC panels are designed to handle high heat better than most brands available in Australia — they lose less power on hot days, which means more electricity generated and more savings on your Jacana Energy bill during the hottest months of the year.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-brand-500 p-7 sm:p-9 rounded-2xl sm:rounded-3xl shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                  They keep working through the wet season
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  Darwin's wet season brings months of cloud cover. REC panels are designed to capture diffused light effectively, which means they continue generating electricity on overcast days rather than dropping off significantly. You will not lose as much output during the build-up and wet season as you would with a standard panel.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-brand-500 p-7 sm:p-9 rounded-2xl sm:rounded-3xl shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                  They are built to last
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  REC Alpha Pure panels are designed for 25 years of reliable operation with minimal power loss over time. The frames are reinforced for high wind loads and tested against hailstones. The all-black frame design includes salt mist corrosion certification, which matters for Darwin's coastal suburbs and year-round humidity. Oneroof Solar installs every REC system to full NT building standards with cyclone-rated mounting.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. First CTA Section (Deep Navy background #0A1118) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight max-w-[780px] mx-auto">
              Ready to Lock In Lower Power Bills?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-4 font-medium">
              Darwin heat is brutal on cheap solar panels. Switch to REC premium panels and protect your home for the next 25 years.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
              Get your free, personalized quote from Oneroof Solar today. Our local NT team will reply within 24 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-bold text-slate-200 mb-8">
              <a href="tel:0483986444" className="inline-flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Phone className="w-5 h-5 text-brand-400" />
                <span>Call Us: 0483 986 444</span>
              </a>
              <a href="mailto:info@oneroofsolar.com.au" className="inline-flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Mail className="w-5 h-5 text-brand-400" />
                <span>Email: info@oneroofsolar.com.au</span>
              </a>
            </div>

            <Button
              size="lg"
              className="rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-600 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(140,198,63,0.3)] uppercase tracking-wider text-xs"
              asChild
            >
              <Link to="/contact">
                Request My Free Quote
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 7. How Much Do REC Solar Panels Cost in the NT */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                How Much Do REC Solar Panels Cost in the NT
              </h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium max-w-4xl">
                <p>
                  REC panels are a premium brand and carry a higher price than standard panel options. For most NT homeowners, a system using REC Alpha Pure panels will cost $700 to $1,200 more than the same-sized system using a standard Tier 1 brand. The STC rebate applies to all REC installations in the NT and is deducted before you pay.
                </p>
                <p>
                  Because every NT roof is different in size, orientation, shading and access, we provide personalised quotes rather than fixed package pricing for REC systems. Contact Oneroof Solar for a free quote that reflects your actual energy bills and roof layout.
                </p>
                <p>
                  For a general sense of system pricing with and without battery storage, see our <Link to="/solar-panel-installation/" className="text-brand-600 hover:underline font-bold">solar panel installation page</Link>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Serving the NT */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Serving the NT - Darwin to Alice Springs
              </h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium max-w-4xl">
                <p>
                  Oneroof Solar installs REC panels across the Northern Territory. Our primary service hubs are Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. We also cover rural Darwin, Litchfield, Humpty Doo, Howard Springs and remote NT properties including off-grid installations.
                </p>
                <p>
                  Contact us to confirm coverage for your specific NT location and we will get back to you within 24 hours.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100 relative">
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
                        ? "bg-white shadow-md border-brand-500"
                        : "bg-white border-slate-200 hover:border-brand-500/40"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-rec-${i}`}
                      id={`faq-button-rec-${i}`}
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
                            ? "border-brand-500 bg-brand-50 text-brand-600 rotate-180"
                            : "border-slate-200 text-slate-400 bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-rec-${i}`}
                      aria-labelledby={`faq-button-rec-${i}`}
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

      {/* 10. Final CTA (Deep Navy background #0A1118) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="bg-slate-900/90 border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl max-w-4xl mx-auto backdrop-blur-md">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Stop Paying Too Much to Jacana Energy
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
                Do not let the NT wet season or summer heat drain your wallet. Get a free, custom solar layout design for your roof from Oneroof Solar.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-bold text-slate-200 mb-8">
                <a href="tel:0483986444" className="inline-flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <Phone className="w-5 h-5 text-brand-400" />
                  <span>Phone: 0483 986 444</span>
                </a>
                <a href="mailto:info@oneroofsolar.com.au" className="inline-flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <Mail className="w-5 h-5 text-brand-400" />
                  <span>Email: info@oneroofsolar.com.au</span>
                </a>
              </div>

              <Button
                size="lg"
                className="rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-600 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(140,198,63,0.3)] uppercase tracking-wider text-xs"
                asChild
              >
                <Link to="/contact">
                  Get A Custom Quote
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
