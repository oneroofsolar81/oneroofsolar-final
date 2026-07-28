import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown,
  FileText,
  Download
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import longiSolarPanelImg from "../assets/images/longi_solar_panel_1784285655984.jpg";

export function LongiSolarPanels() {
  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "LONGi Solar Panels NT | Installed by Oneroof Solar",
    metaDescription: "Oneroof Solar installs LONGi solar panels across Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. Get a free quote for LONGi solar in the NT.",
    canonicalUrl: "https://oneroofsolar.com.au/solar-panels-brands/longi/",
    robots: "index, follow",
    openGraphTitle: "LONGi Solar Panels NT | Installed by Oneroof Solar",
    openGraphDescription: "Oneroof Solar installs LONGi solar panels across Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. Get a free quote for LONGi solar in the NT.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/longi_solar_panel_1784285655984.jpg",
    twitterTitle: "LONGi Solar Panels NT | Installed by Oneroof Solar",
    twitterDescription: "Oneroof Solar installs LONGi solar panels across Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. Get a free quote for LONGi solar in the NT.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/longi_solar_panel_1784285655984.jpg",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LONGi Solar Panels NT",
      "brand": {
        "@type": "Brand",
        "name": "LONGi Solar"
      },
      "description": "Oneroof Solar installs LONGi solar panels across Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek.",
      "category": "Solar Panels",
      "url": "https://oneroofsolar.com.au/solar-panels-brands/longi/",
      "image": "https://oneroofsolar.com.au/assets/images/longi_solar_panel_1784285655984.jpg"
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
          "name": "LONGi Solar Panels",
          "item": "https://oneroofsolar.com.au/solar-panels-brands/longi/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are LONGi solar panels good quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. LONGi is the world's largest solar panel manufacturer and controls its own silicon wafer production, which gives it tighter quality control than brands that buy wafers from third parties."
          }
        },
        {
          "@type": "Question",
          "name": "Are LONGi panels worth it in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LONGi panels are a Tier 1 brand with a strong warranty and proven performance in hot, humid climates like the NT, making them a solid long-term investment for most homes and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How long do LONGi panels last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LONGi panels are designed to keep producing power for 25 years or more, backed by manufacturer warranties covering both the product and its performance over time."
          }
        },
        {
          "@type": "Question",
          "name": "Do LONGi panels perform well in hot climates like Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. LONGi panels are engineered to maintain output as temperatures rise, which suits Darwin's build up season and year round heat."
          }
        },
        {
          "@type": "Question",
          "name": "What makes LONGi different from other solar brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LONGi manufactures its own silicon ingots and wafers rather than sourcing them externally, giving it more control over consistency and quality across every panel it produces."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Are LONGi solar panels good quality?",
      a: "Yes. LONGi is the world's largest solar panel manufacturer and controls its own silicon wafer production, which gives it tighter quality control than brands that buy wafers from third parties."
    },
    {
      q: "Are LONGi panels worth it in Australia?",
      a: "LONGi panels are a Tier 1 brand with a strong warranty and proven performance in hot, humid climates like the NT, making them a solid long-term investment for most homes and businesses."
    },
    {
      q: "How long do LONGi panels last?",
      a: "LONGi panels are designed to keep producing power for 25 years or more, backed by manufacturer warranties covering both the product and its performance over time."
    },
    {
      q: "Do LONGi panels perform well in hot climates like Darwin?",
      a: "Yes. LONGi panels are engineered to maintain output as temperatures rise, which suits Darwin's build up season and year round heat."
    },
    {
      q: "What makes LONGi different from other solar brands?",
      a: "LONGi manufactures its own silicon ingots and wafers rather than sourcing them externally, giving it more control over consistency and quality across every panel it produces."
    }
  ];

  return (
    <div className="bg-[#121814] text-slate-100 font-sans min-h-screen">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 1. Hero Section (Deep Green background #141F17) */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#141F17]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#141F17]/40"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Side Content (~52%) */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                  <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/product/solar-panels-brands" className="hover:text-[#5BC94D] transition-colors">Solar Panels</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">LONGi Solar Panels</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  LONGi Solar<br />Panels NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Stop wasting money on cheap solar panels that degrade in the Darwin heat and leave you with high power bills. Get the world's leading tier one panels built to survive extreme NT weather and deliver maximum savings for decades.
                </p>

                <div>
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Get a Free Quote
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Visual Image (~42% with gap) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] aspect-[4/3] w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img 
                      referrerPolicy="no-referrer"
                      src={longiSolarPanelImg} 
                      alt="LONGi Solar Panel installation" 
                      className="w-full h-full object-contain max-h-[380px]"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Cheap Solar Panels Cost You More in the NT (Dark Navy background #0A1118) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-white/5 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0D1520] border border-white/10 border-l-4 border-l-[#5BC94D] p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Why Cheap Solar Panels Cost You More in the NT
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-[1.7] font-medium max-w-4xl">
                Picking the wrong solar panel brand means paying more for less power over the panel's lifetime. LONGi is one of the most trusted names in solar because it manufactures its own silicon wafers instead of buying from third parties, giving it tighter quality control than most competitors. Here is what LONGi panels bring to homes and businesses across the Northern Territory, and why Oneroof Solar installs them.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Who Is LONGi (Deep Green background #121814) */}
      <section className="py-16 lg:py-20 bg-[#121814] border-b border-white/5 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column (~52%) */}
            <div className="w-full lg:w-[52%] shrink-0">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Who Is LONGi
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-[1.7] font-medium">
                  LONGi is the world's largest solar panel manufacturer by shipment volume. The company builds its own silicon ingots and wafers in house, which is rare in the industry and gives it more control over panel quality and consistency. LONGi holds multiple world records for solar cell efficiency and supplies panels to installers across Australia, including here in the NT.
                </p>
              </FadeIn>
            </div>

            {/* Right Panel Image Column (~48%) */}
            <div className="w-full lg:w-[48%] shrink-0">
              <FadeIn delay={0.2}>
                <div className="bg-[#0D1520] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl w-full">
                  <div className="w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                    <img 
                      referrerPolicy="no-referrer"
                      src={longiSolarPanelImg} 
                      alt="LONGi Solar Panel technology and manufacturing" 
                      className="w-full h-auto object-contain max-h-[380px] rounded-lg"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why NT Homes and Businesses Choose LONGi (Dark Navy background #0A1118) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-white/5 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Why NT Homes and Businesses Choose LONGi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Item 1 */}
              <div className="group bg-[#0D1520] border border-white/5 hover:border-[#5BC94D]/30 hover:bg-[#111B28] p-7 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div className="w-8 h-1 rounded-full bg-[#5BC94D] mb-5"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
                  Performance in heat and humidity
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  LONGi panels are built to keep producing power even as temperatures climb, which matters through Darwin's build up season and the long dry season heat. Their anti-dust frame design also helps in areas with red dust and coastal salt air, common across the Top End.
                </p>
              </div>

              {/* Item 2 */}
              <div className="group bg-[#0D1520] border border-white/5 hover:border-[#5BC94D]/30 hover:bg-[#111B28] p-7 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div className="w-8 h-1 rounded-full bg-[#5BC94D] mb-5"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
                  Durability that holds up
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  LONGi backs its panels with a strong product and performance warranty, so output is protected for decades, not just a few years. That means fewer surprises and a panel that keeps earning its keep long after installation.
                </p>
              </div>

              {/* Item 3 */}
              <div className="group bg-[#0D1520] border border-white/5 hover:border-[#5BC94D]/30 hover:bg-[#111B28] p-7 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div className="w-8 h-1 rounded-full bg-[#5BC94D] mb-5"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
                  Price range
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  Cost depends on system size, roof type and how many panels you need. Oneroof Solar provides a full itemised quote before any work begins, so you know exactly what you are paying for.
                </p>
              </div>

              {/* Item 4 */}
              <div className="group bg-[#0D1520] border border-white/5 hover:border-[#5BC94D]/30 hover:bg-[#111B28] p-7 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div className="w-8 h-1 rounded-full bg-[#5BC94D] mb-5"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
                  Everyday benefits
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  Lower power bills, strong output even on overcast wet season days, and a brand backed by a global manufacturer rather than a smaller, less established name.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Datasheet Section (Deep Green background #141F17) */}
      <section className="py-12 lg:py-16 bg-[#141F17] border-b border-white/5 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0D1520] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl text-center">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium mb-6">
                For full technical specifications and model details, download the LONGi product datasheet:
              </p>

              <div className="flex justify-center">
                <a
                  href="/downloads/longi-hi-mo-x10-lr7-54hvh-datasheet.pdf"
                  download="longi-hi-mo-x10-lr7-54hvh-datasheet.pdf"
                  aria-label="Download LONGi Hi-MO X10 product datasheet PDF"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 hover:border-[#5BC94D]/50 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-[#5BC94D]/10 hover:-translate-y-0.5 group"
                >
                  <FileText className="w-5 h-5 text-[#5BC94D] group-hover:scale-110 transition-transform" />
                  <span>Download LONGi Product Datasheet (PDF)</span>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#5BC94D] transition-colors ml-1" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Main CTA (Darker Green Gradient #182c1e to #121814) */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#182c1e] via-[#0A1118] to-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight max-w-[780px] mx-auto">
              Tired of sky high electricity bills
            </h2>
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
              See how much you can save with a customized high efficiency solar system built for the NT
            </p>
            <Button
              size="lg"
              className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
              asChild
            >
              <Link to="/contact">
                Claim your free energy savings quote now
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 7. LONGi Across the NT (Dark Navy background #0A1118) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-white/5 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0D1520] border border-white/10 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  LONGi Across the NT
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Oneroof Solar installs LONGi panels across the Northern Territory, including Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. Contact us for LONGi installations anywhere in the NT.
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs w-full sm:w-auto"
                  asChild
                >
                  <Link to="/contact">
                    Book Your LONGi Installation
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. FAQ Section (Deep Green background #121814) */}
      <section className="py-16 lg:py-24 bg-[#121814] border-b border-white/5 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-10 text-center">
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
                        ? "bg-slate-900/60 shadow-xl border-[#5BC94D]/30"
                        : "bg-slate-900/20 border-white/5 hover:border-[#5BC94D]/20"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-longi-${i}`}
                      id={`faq-button-longi-${i}`}
                      className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 transition-all"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                            isOpen
                              ? "bg-[#5BC94D] text-[#19281D] shadow-md shadow-[#5BC94D]/20"
                              : "bg-white/5 text-slate-400 border border-white/10"
                          }`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-bold leading-tight transition-colors ${
                            isOpen ? "text-[#5BC94D]" : "text-white"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-[#5BC94D] bg-[#5BC94D]/10 text-[#5BC94D] rotate-180"
                            : "border-white/10 text-slate-400 bg-white/5"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-longi-${i}`}
                      aria-labelledby={`faq-button-longi-${i}`}
                      role="region"
                      className={`overflow-hidden transition-all duration-500 px-6 sm:px-6 ${
                        isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-slate-300 leading-relaxed font-medium pl-12 sm:pl-14 text-base sm:text-lg border-t border-white/5 pt-4 mt-2">
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

      {/* 9. Final CTA Panel (Dark Navy background #0A1118) */}
      <section className="py-12 lg:py-16 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <Button
              size="lg"
              className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
              asChild
            >
              <Link to="/contact">
                Get Your Free LONGi Quote Today
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
