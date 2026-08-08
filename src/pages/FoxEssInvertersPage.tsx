import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone,
  ArrowRight,
  ChevronDown,
  Download,
  Zap,
  ShieldCheck,
  Award,
  Battery
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import { PRIMARY_PHONE_RAW } from "../lib/constants";

// Fox ESS Datasheet PDF URLs (Placeholder constants for real PDF assets)
export const FOX_F_SERIES_PDF_URL = "#"; 
export const FOX_H1_SERIES_PDF_URL = "#"; 
export const FOX_H3_SERIES_PDF_URL = "#"; 

export function FoxEssInvertersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [pdfModalModel, setPdfModalModel] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handlePdfDownload = (e: React.MouseEvent, modelName: string, url: string) => {
    if (url === "#") {
      e.preventDefault();
      setPdfModalModel(modelName);
    }
  };

  const seoData = {
    title: "Fox ESS Solar Inverters Darwin NT | SAA Approved",
    metaDescription: "Compare SAA approved Fox ESS single-phase, three-phase, and hybrid solar inverters built for extreme Darwin heat. Upfront STC discounts applied directly to your local Oneroof Solar quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-inverters/fox-ess",
    robots: "index, follow",
    openGraphTitle: "Fox ESS Solar Inverters Darwin NT | SAA Approved",
    openGraphDescription: "Compare SAA approved Fox ESS single-phase, three-phase, and hybrid solar inverters built for extreme Darwin heat. Upfront STC discounts applied directly to your local Oneroof Solar quote.",
    openGraphImage: "https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png",
    twitterTitle: "Fox ESS Solar Inverters Darwin NT | SAA Approved",
    twitterDescription: "Compare SAA approved Fox ESS single-phase, three-phase, and hybrid solar inverters built for extreme Darwin heat. Upfront STC discounts applied directly to your local Oneroof Solar quote.",
    twitterImage: "https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png",
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
          "name": "Fox ESS Solar Inverters",
          "item": "https://oneroofsolar.com.au/products/solar-inverters/fox-ess"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Fox ESS Solar Inverters",
      "brand": {
        "@type": "Brand",
        "name": "Fox ESS"
      },
      "description": "Compare SAA approved Fox ESS single-phase, three-phase, and hybrid solar inverters built for extreme Darwin heat. Upfront STC discounts applied directly to your local Oneroof Solar quote.",
      "category": "Solar Inverters",
      "url": "https://oneroofsolar.com.au/products/solar-inverters/fox-ess",
      "image": "https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is authorized to install or replace a Fox ESS inverter in Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only SAA accredited installers are legally authorized to set up your system. Oneroof Solar provides complete, fully accredited installation, replacement, and system upgrade services across Darwin and the wider NT using SAA approved products."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any active NT government solar grants available right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All previous local NT Government state solar grants are officially closed. However, Oneroof Solar applies the Federal STC Grant directly as an upfront point-of-sale discount inside your quote, significantly lowering your initial system costs."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money on solar battery storage upgrades in the NT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can lower your total out-of-pocket storage costs by utilizing the Cheaper Home Batteries Program discount. Our team applies this active financial program incentive directly to eligible hybrid Fox ESS battery storage configurations."
          }
        },
        {
          "@type": "Question",
          "name": "Will a Fox ESS inverter survive high heat and wet season humidity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, these units feature heavy-duty IP65 and IP66 weatherproof casings and optimized heat dissipation profiles. This specific engineering protects internal circuitry from intense tropical humidity and minimizes early power throttling caused by extreme ambient heat."
          }
        },
        {
          "@type": "Question",
          "name": "Does Oneroof Solar manage utility approvals with Power and Water?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we take care of the entire grid connection and application process directly with the Power and Water Corporation. This ensures your home or commercial system remains fully compliant with Jacana Energy billing standards."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Who is authorized to install or replace a Fox ESS inverter in Darwin?",
      a: "Only SAA accredited installers are legally authorized to set up your system. Oneroof Solar provides complete, fully accredited installation, replacement, and system upgrade services across Darwin and the wider NT using SAA approved products."
    },
    {
      q: "Are there any active NT government solar grants available right now?",
      a: "All previous local NT Government state solar grants are officially closed. However, Oneroof Solar applies the Federal STC Grant directly as an upfront point-of-sale discount inside your quote, significantly lowering your initial system costs."
    },
    {
      q: "How can I save money on solar battery storage upgrades in the NT?",
      a: "You can lower your total out-of-pocket storage costs by utilizing the Cheaper Home Batteries Program discount. Our team applies this active financial program incentive directly to eligible hybrid Fox ESS battery storage configurations."
    },
    {
      q: "Will a Fox ESS inverter survive high heat and wet season humidity?",
      a: "Yes, these units feature heavy-duty IP65 and IP66 weatherproof casings and optimized heat dissipation profiles. This specific engineering protects internal circuitry from intense tropical humidity and minimizes early power throttling caused by extreme ambient heat."
    },
    {
      q: "Does Oneroof Solar manage utility approvals with Power and Water?",
      a: "Yes, we take care of the entire grid connection and application process directly with the Power and Water Corporation. This ensures your home or commercial system remains fully compliant with Jacana Energy billing standards."
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

      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/60"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column (55-60%) */}
            <div className="lg:col-span-7 text-left">
              <FadeIn isHero>
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono flex-wrap">
                  <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/products/solar-inverters" className="hover:text-[#5BC94D] transition-colors">Solar Inverters</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">Fox ESS</span>
                </nav>

                {/* H1 Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Fox ESS Inverters Darwin NT
                </h1>

                {/* Supporting text */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Choose an SAA approved, heat-proof solar inverter range explicitly engineered to survive the Top End climate without melting or dropping power output. Oneroof Solar provides complete local supply, accredited installation, and system upgrades across the Northern Territory.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Request a Custom Fox ESS Quote
                    </Link>
                  </Button>

                  <a
                    href={`tel:${PRIMARY_PHONE_RAW}`}
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20 text-xs uppercase tracking-wider gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call Now for Consultation</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Product Visual */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] p-6 text-left">
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] flex items-center justify-center p-4">
                    <img 
                      referrerPolicy="no-referrer"
                      src="https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png" 
                      alt="Fox ESS Solar Inverter Range installed by Oneroof Solar in Darwin" 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
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

      {/* SECTION 2 — HIGH-PERFORMANCE INVERTERS FOR NT CLIMATE */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              High-Performance Solar Inverters for the Northern Territory Climate
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Side Main Text */}
              <div className="lg:col-span-7 text-slate-600 text-base sm:text-lg leading-[1.75] font-medium space-y-6">
                <p>
                  The climate of Darwin and NT is brutal on standard solar electronics. Cheap components frequently degrade within a few short years due to excessive ambient heat and intense tropical moisture. When the surrounding air climbs past 35°C, standard systems experience severe ambient heat derating, meaning they automatically throttle back their power output to avoid melting.
                </p>
                <p>
                  Fox ESS hardware is designed specifically to tackle these regional challenges. These units utilize advanced internal heat management structures and large rear cooling sinks instead of cheap internal fans, allowing them to maintain peak power delivery far longer than lower-grade alternatives. Additionally, the robust IP65 and IP66 rated casings prevent high-humidity air from penetrating the internal circuitry, stopping internal rust and component shorts before they can start.
                </p>
                <p>
                  Every single hardware option we showcase on our{" "}
                  <Link 
                    to="/products/solar-inverters" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    solar inverter brands hub
                  </Link>{" "}
                  uses SAA approved products and is fully set up by our own team. This ensures your property stays completely compliant with local energy rules while maximizing your daily power generation.
                </p>
              </div>

              {/* Right Side Visual Illustration */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png" 
                    alt="Fox ESS Solar Inverter Heat Protection" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — SAA APPROVED FOX ESS RANGE */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              SAA Approved Fox ESS Inverter Range Available in the NT
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-4xl">
              We do not believe in a one-size-fits-all approach to solar. The Northern Territory grid requires robust hardware that can manage highly variable solar inputs and severe outdoor conditions. Below are the specific Fox ESS models we supply, maintain, and install, along with their official engineering sheets.
            </p>

            {/* 3-Column Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* CARD 1: F-SERIES */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#5BC94D]/60 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">
                    Fox ESS F-Series (Single-Phase Residential, 3.0kW to 6.0kW)
                  </h3>

                  <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#5BC94D] uppercase tracking-wider block mb-1 font-mono">Who it benefits</span>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      Ideal for standard Darwin families and everyday suburban homes looking to slash their residential electricity accounts without adding battery storage immediately. It offers a compact layout that fits neatly on exterior walls while maximizing small roof spaces.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1 font-mono">IP65 Casing</span>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Completely sealed against tropical wet season downpours and fine coastal salt vapor.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1 font-mono">Low Startup Voltage</span>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Kicks in early in the morning and keeps running later into the twilight hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={FOX_F_SERIES_PDF_URL}
                    onClick={(e) => handlePdfDownload(e, "Fox ESS F-Series", FOX_F_SERIES_PDF_URL)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition-colors uppercase tracking-wider border border-slate-200"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>Download F-Series PDF Datasheet</span>
                  </a>
                </div>
              </div>

              {/* CARD 2: H1 HYBRID SERIES */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#5BC94D]/60 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">
                    Fox ESS H1 Series (Single-Phase Hybrid, 3.0kW to 6.0kW)
                  </h3>

                  <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#5BC94D] uppercase tracking-wider block mb-1 font-mono">Who it benefits</span>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      The perfect choice for household financial managers who want to eliminate their reliance on the main electricity grid during peak evening hours. It allows you to lock in immediate solar savings now and expand your system as your family grows.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1 font-mono">Native Battery Integration</span>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Connects directly with high-voltage scalable battery storage systems.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1 font-mono">Smart App Monitoring</span>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Tracks your live production and battery levels over your local home Wi-Fi network.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={FOX_H1_SERIES_PDF_URL}
                    onClick={(e) => handlePdfDownload(e, "Fox ESS H1 Hybrid Series", FOX_H1_SERIES_PDF_URL)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition-colors uppercase tracking-wider border border-slate-200"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>Download H1 Hybrid Series PDF Datasheet</span>
                  </a>
                </div>
              </div>

              {/* CARD 3: H3 THREE-PHASE HYBRID SERIES */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#5BC94D]/60 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">
                    Fox ESS H3 Series (Three-Phase Hybrid, 5.0kW to 12.0kW)
                  </h3>

                  <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#5BC94D] uppercase tracking-wider block mb-1 font-mono">Who it benefits</span>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      Engineered specifically for larger multi-generational households, heavy domestic power users, and commercial setups in busy industrial zones like Berrimah.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1 font-mono">Balanced Three-Phase Output</span>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Manages larger electrical loads across commercial machinery, large pumps, and ducted air conditioning units.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1 font-mono">Dual MPPT Trackers</span>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Allows panels to be installed across completely different roof angles, optimizing generation during cloudy monsoonal days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={FOX_H3_SERIES_PDF_URL}
                    onClick={(e) => handlePdfDownload(e, "Fox ESS H3 Commercial Hybrid", FOX_H3_SERIES_PDF_URL)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition-colors uppercase tracking-wider border border-slate-200"
                  >
                    <Download className="w-4 h-4 text-[#5BC94D]" />
                    <span>Download H3 Commercial Hybrid PDF Datasheet</span>
                  </a>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 — OFF-GRID FOX ESS */}
      <section className="py-20 lg:py-24 bg-[#0A1118] border-b border-slate-800 text-left text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Which Fox ESS Inverter is Best for Off-Grid Applications?
                </h3>

                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-[1.75] font-medium">
                  <p>
                    For property owners in remote NT regions looking for complete energy independence, the Fox ESS Hybrid Series (H1 and H3 configurations) features advanced Emergency Power Supply (EPS) functionality. While these units operate seamlessly in standard grid-tied setups, they are uniquely engineered with high-power off-grid backup capabilities.
                  </p>
                  <p>
                    When paired with a matching Fox high-voltage battery bank, the hybrid inverter can transition to a standalone power source in the event of a grid outage, providing full off-grid parallel operation to run heavy household loads independently using stored solar energy.
                  </p>
                </div>
              </div>

              {/* Right Column Visual Graphic */}
              <div className="lg:col-span-5 bg-[#0D1520] border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://i.postimg.cc/tJYNvY7C/Chat-GPT-Image-Jun-6-2026-02-08-13-AM.png" 
                    alt="Fox ESS Off-Grid Solar Battery System" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 — INVERTER FAILURE CTA */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="max-w-4xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 uppercase tracking-wide leading-tight">
                  Is your current solar inverter failing, displaying error lights, or out of warranty?
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Do not risk total system downtime during the peak of summer. Our team can run a complete health check on your existing setup and guide you through a reliable upgrade using our dedicated{" "}
                  <Link 
                    to="/services/solar-panel-repair-darwin" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
                  >
                    solar inverter repair service
                  </Link>{" "}
                  workflows.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Book a Priority Inverter Diagnostic Call-Out
                    </Link>
                  </Button>

                  <a
                    href={`tel:${PRIMARY_PHONE_RAW}`}
                    className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all text-xs uppercase tracking-wider gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#5BC94D]" />
                    <span>Call ONEROOF</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 — UPFRONT FEDERAL STC DISCOUNTS & ACTIVE BATTERY INCENTIVES */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Upfront Federal STC Discounts &amp; Active Battery Program Incentives
            </h2>

            <div className="text-slate-600 text-base sm:text-lg leading-[1.75] font-medium space-y-4 mb-12 max-w-4xl">
              <p>
                Navigating solar pricing can be confusing, especially with changing local frameworks. We keep our financial structures completely transparent so you know exactly what you are paying for.
              </p>
              <p>
                Please note that all previous local NT Government state solar grants are now officially closed. No local state-level rebates remain active for new solar arrays. However, you can still save thousands of dollars upfront through the following active programs:
              </p>
            </div>

            {/* Two Large Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CARD 1: Federal STC Grant */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6">
                    <Award className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                    The Federal STC Grant
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                    This is a federal solar PV credit calculated based on your total system capacity. We take care of all the complex compliance paperwork and apply this value directly as an upfront point-of-sale discount inside your Oneroof Solar quote.
                  </p>
                </div>
              </div>

              {/* CARD 2: Cheaper Home Batteries Program */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6">
                    <Battery className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                    Cheaper Home Batteries Program
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                    If you choose one of the Fox ESS hybrid models listed above and couple it with eligible storage cells, you can tap into this specific discount program to lower your total out-of-pocket setup costs.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7 — POWER AND WATER CORPORATION GRID COMPLIANCE MANAGEMENT */}
      <section className="py-20 lg:py-24 bg-[#0A1118] border-b border-slate-800 text-left text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Complete Power and Water Corporation Grid Compliance Management
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Explanation */}
              <div className="lg:col-span-7 text-slate-300 text-base sm:text-lg leading-[1.75] font-medium space-y-6">
                <p>
                  When you decide to upgrade or install a new solar inverter, you cannot simply hook it up to the street line without permission. The local network operator, Power and Water Corporation, enforces strict rules regarding grid stability, solar input balancing, and export control limits.
                </p>
                <p>
                  We handle this entire administrative process on your behalf. Our team designs your system configuration, submits the network applications, and programs the inverter to match exact local utility rules. This ensures your billing system with Jacana Energy updates correctly from day one without any paperwork delays or unexpected fines.
                </p>
                <p>
                  Whether you need a brand-new setup from our professional{" "}
                  <Link 
                    to="/solar-panels-darwin/" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors"
                  >
                    solar inverter installation service
                  </Link>
                  , an immediate emergency replacement, or a long-term commercial upgrade, we manage the pipeline from start to finish. You can learn more about our team and our commitment to local property owners on our dedicated{" "}
                  <Link 
                    to="/about" 
                    className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors"
                  >
                    about page
                  </Link>
                  .
                </p>
              </div>

              {/* Right Column Visual Image */}
              <div className="lg:col-span-5 bg-[#0D1520] border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  <ShieldCheck className="w-16 h-16 text-[#5BC94D] opacity-80" />
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 uppercase tracking-wide [word-spacing:0.12em]">
              FAQ
            </h2>

            <div className="max-w-[880px] space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors"
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
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed font-medium border-t border-slate-200/60 mt-2">
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

      {/* SECTION 9 — FINAL CONVERSION SECTION */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Get Your Custom Fox ESS Solar Quotation Today
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-[1.75] font-medium max-w-4xl mb-12">
              Do not leave your energy savings to chance with cheap, unapproved components that cannot handle the Territory environment. Pair your premium Fox ESS hardware with top-tier engineering by reviewing our{" "}
              <Link 
                to="/solar-panels-darwin/" 
                className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
              >
                high-efficiency solar panels Darwin range
              </Link>
              . If you are dealing with an aging, hazardous system, you can also explore our fast local{" "}
              <Link 
                to="/services/solar-panel-repair-darwin" 
                className="text-[#5BC94D] font-bold underline hover:text-emerald-700 transition-colors"
              >
                solar panel repair Darwin services
              </Link>{" "}
              to restore safe production.
            </p>

            {/* FINAL CTA CARD */}
            <div className="bg-[#0A1118] border border-slate-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-wide leading-tight">
                  Ready to secure an affordable, heat-proof power supply for your property?
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Contact the Top End solar specialists today. Our team will build a clear, fixed-price quote with all federal point-of-sale discounts and battery incentives locked in.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Schedule Your On-Site Solar Consultation Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PDF Datasheet Modal Fallback */}
      {pdfModalModel && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-left shadow-2xl border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              {pdfModalModel} Datasheet
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              The official engineering PDF datasheet for the {pdfModalModel} is available upon request. Request a consultation or custom quote to receive the complete technical datasheet packet directly to your email.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setPdfModalModel(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase"
              >
                Close
              </button>
              <Button
                size="sm"
                className="rounded-xl bg-[#5BC94D] text-[#19281D] border-none font-extrabold hover:bg-emerald-400 text-xs uppercase"
                asChild
                onClick={() => setPdfModalModel(null)}
              >
                <Link to="/contact">Request Datasheet</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
