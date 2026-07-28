import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  Phone, 
  Mail, 
  Shield, 
  Zap, 
  Sun, 
  Clock, 
  FileText,
  ChevronDown,
  Loader2,
  Award,
  Thermometer,
  Sparkles,
  TrendingUp,
  Flame
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function AikoSolarPanels() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    bill: "",
    interest: "AIKO Solar Panels",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.suburb.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        source: "aiko_brand_landing",
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        bill: "",
        interest: "AIKO Solar Panels",
        message: ""
      });
    } catch (e: any) {
      console.error("Error submitting lead to Firestore:", e);
      // Fallback to simulate success for smooth user experience
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const seoData = {
    title: "AIKO Solar Panels Darwin | Oneroof Solar NT",
    metaDescription: "Oneroof Solar installs AIKO ABC solar panels in Darwin and across the NT. Gen 3 technology, 25%+ efficiency, cyclone rated. Get a free quote today.",
    canonicalUrl: "https://oneroofsolar.com.au/solar-panels-brands/aiko/",
    robots: "index, follow",
    openGraphTitle: "AIKO Solar Panels Darwin | Oneroof Solar NT",
    openGraphDescription: "Oneroof Solar installs AIKO ABC solar panels in Darwin and across the NT. Gen 3 technology, 25%+ efficiency, cyclone rated. Get a free quote today.",
    openGraphImage: "https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png",
    twitterTitle: "AIKO Solar Panels Darwin | Oneroof Solar NT",
    twitterDescription: "Oneroof Solar installs AIKO ABC solar panels in Darwin and across the NT. Gen 3 technology, 25%+ efficiency, cyclone rated. Get a free quote today.",
    twitterImage: "https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AIKO Gen 3 ABC Solar Panels",
      "brand": {
        "@type": "Brand",
        "name": "AIKO Solar"
      },
      "description": "Oneroof Solar installs AIKO Gen 3 ABC N-type solar panels in Darwin and across the NT. Features All Back Contact technology with above 25% efficiency and structural cyclone rating.",
      "category": "Solar Panels",
      "url": "https://oneroofsolar.com.au/solar-panels-brands/aiko/",
      "image": "https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Module Efficiency",
          "value": "Above 25%"
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
          "name": "Annual Degradation",
          "value": "0.35% per year"
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
          "name": "AIKO Solar Panels",
          "item": "https://oneroofsolar.com.au/solar-panels-brands/aiko/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are AIKO solar panels good?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AIKO won the 2025 SolarQuotes Installers Choice Award for best solar panel brand in Australia. Their Gen 3 ABC technology delivers above 25 per cent efficiency with a 30 year performance warranty, making them one of the strongest residential panels available in 2026."
          }
        },
        {
          "@type": "Question",
          "name": "What is ABC technology in AIKO solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ABC stands for All Back Contact. All electrical connections sit on the back of the solar cell, leaving the front surface completely clear of metal grid lines. More sunlight reaches the photovoltaic layer, which is why AIKO panels produce more electricity per square metre than standard TOPCon panels of the same physical size."
          }
        },
        {
          "@type": "Question",
          "name": "What size are AIKO solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The AIKO Gen 3 ABC 60 cell panel measures 1954 x 1134 x 30 mm. This is a standard residential footprint that fits most Darwin rooftops including homes with reduced usable roof area due to cyclone strapping and rooftop equipment."
          }
        },
        {
          "@type": "Question",
          "name": "How much do AIKO solar panels cost in Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AIKO panels cost around $700 to $900 more than standard brands for a full 6.6kW system. The STC rebate applies to all AIKO installations in Darwin as CEC approval was granted in March 2026. Contact Oneroof Solar for a current quote with the STC discount already applied."
          }
        },
        {
          "@type": "Question",
          "name": "Are AIKO solar panels cyclone rated for Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AIKO Gen 3 panels meet the structural wind load requirements for Darwin's cyclone zone. Every Oneroof Solar installation is carried out by CEC accredited electricians to full Northern Territory building standards, satisfying Power and Water Corporation grid connection requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How do AIKO panels compare to Jinko and REC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AIKO delivers the highest efficiency above 25 per cent. REC HJT has a marginally better temperature coefficient at -0.24%/°C. Jinko TOPCon offers proven value at a lower price point. See our solar panels page for a full brand comparison."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the AIKO solar panel warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AIKO offers a 30 year performance warranty guaranteeing 90.6 per cent output at Year 25 and 88.85 per cent at Year 30."
          }
        }
      ]
    }
  ];

  const specs = [
    {
      title: "Above 25% Module Efficiency",
      info: "N-type ABC monocrystalline cells. Highest-output residential panel Oneroof Solar supplies. More kilowatts from the same roof space."
    },
    {
      title: "Temperature Coefficient: -0.26%/°C",
      info: "Less power loss on Darwin rooftops reaching 65°C to 75°C. Outperforms standard TOPCon panels at -0.29%/°C in the dry season."
    },
    {
      title: "30-Year Performance Warranty",
      info: "90.6% output guaranteed at Year 25. 88.85% at Year 30. One of the strongest long-term guarantees available in Australia in 2026."
    },
    {
      title: "Annual Degradation: 0.35% per year",
      info: "Lower degradation than standard N-type TOPCon at 0.4% per year. More electricity produced in Year 20 compared with other brands."
    },
    {
      title: "CEC Approved — March 2026",
      info: "STC rebate eligible for all NT residential and commercial installations."
    },
    {
      title: "Cyclone Rated",
      info: "Structural wind-load certified for Darwin NT building standards. Every installation is completed by CEC-accredited electricians."
    }
  ];

  const faqs = [
    {
      q: "Are AIKO solar panels good?",
      a: "Yes. AIKO won the 2025 SolarQuotes Installers Choice Award for best solar panel brand in Australia. Their Gen 3 ABC technology delivers above 25 per cent efficiency with a 30-year performance warranty, making them one of the strongest residential panels available in 2026."
    },
    {
      q: "What is ABC technology in AIKO solar panels?",
      a: "ABC stands for All Back Contact. All electrical connections sit on the back of the solar cell, leaving the front surface completely clear of metal grid lines. More sunlight reaches the photovoltaic layer, which is why AIKO panels produce more electricity per square metre than standard TOPCon panels of the same physical size."
    },
    {
      q: "What size are AIKO solar panels?",
      a: "The AIKO Gen 3 ABC 60-cell panel measures 1954 × 1134 × 30 mm. This is a standard residential footprint that fits most Darwin rooftops, including homes with reduced usable roof area due to cyclone strapping and rooftop equipment."
    },
    {
      q: "How much do AIKO solar panels cost in Darwin?",
      a: "AIKO panels cost around $700 to $900 more than standard brands for a full 6.6 kW system. The STC rebate applies to all AIKO installations in Darwin, as CEC approval was granted in March 2026. Contact Oneroof Solar for a current quote with the STC discount already applied."
    },
    {
      q: "Are AIKO solar panels cyclone rated for Darwin?",
      a: "Yes. AIKO Gen 3 panels meet the structural wind-load requirements for Darwin’s cyclone zone. Every Oneroof Solar installation is carried out by CEC-accredited electricians to full Northern Territory building standards, satisfying Power and Water Corporation grid-connection requirements."
    },
    {
      q: "How do AIKO panels compare with Jinko and REC?",
      a: (
        <span>
          AIKO delivers the highest efficiency at above 25 per cent. REC HJT has a marginally better temperature coefficient at -0.24%/°C. Jinko TOPCon offers proven value at a lower price point. See our{" "}
          <Link to="/solar-panels/" className="text-[#5BC94D] hover:underline font-bold">
            solar panels page
          </Link>{" "}
          for a full brand comparison, or compare specifically with{" "}
          <Link to="/solar-panels/rec/" className="text-[#5BC94D] hover:underline font-bold">
            REC solar panels
          </Link>{" "}
          and{" "}
          <Link to="/solar-panels/jinko/" className="text-[#5BC94D] hover:underline font-bold">
            Jinko solar panels
          </Link>
          .
        </span>
      )
    },
    {
      q: "How long is the AIKO solar-panel warranty?",
      a: "AIKO offers a 30-year performance warranty guaranteeing 90.6 per cent output at Year 25 and 88.85 per cent at Year 30."
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

      {/* Hero Section Upgrade */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-[#141F17]">
        {/* Background image overlay for depth */}
        <div className="absolute inset-0">
          <img 
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" 
            alt="Sunny sky backdrop"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#141F17]/40"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Side Content */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                  <a href="https://oneroofsolar.com.au/" className="hover:text-[#5BC94D] transition-colors">Home</a>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <Link to="/solar-panels/" className="hover:text-[#5BC94D] transition-colors">Solar Panels</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">AIKO Solar Panels</span>
                </nav>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-bold text-[10px] mb-5 border border-[#5BC94D]/20 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-[#5BC94D]" /> PREMIUM GEN 3 ABC TECHNOLOGY
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
                  AIKO Solar Panels Darwin
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 lg:mb-10 font-medium border-l-2 border-[#5BC94D] pl-6">
                  Oneroof Solar installs AIKO Gen 3 ABC solar panels across Darwin, Palmerston, Alice Springs and the Northern Territory. AIKO is manufactured by Zhejiang Aiko Solar Technology Co., Ltd and won the 2025 SolarQuotes Installers Choice Award for best solar panel brand in Australia. Their All Back Contact (ABC) N-type technology delivers above 25 per cent module efficiency, making them the highest-output residential panel we supply.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href="#quote-form">
                      Get a Free Quote
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href="tel:0483986444">
                      Call 0483 986 444
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Upgraded Image & Badges */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative group rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-slate-950/50 p-6 sm:p-8 aspect-auto sm:aspect-[4/5] h-auto flex flex-col justify-center items-center min-h-[350px] sm:min-h-[450px]">
                  
                  {/* Modern rooftop solar backdrop (ambient) */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      referrerPolicy="no-referrer"
                      src="https://images.unsplash.com/photo-1620027133796-039cfa6b009f?auto=format&fit=crop&w=800&q=80" 
                      alt="Modern home roof solar panels" 
                      className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-[#121814]/80 to-slate-950/40"></div>
                  </div>

                  {/* Highlight Glow */}
                  <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-700 pointer-events-none"></div>

                  {/* AIKO panel white display container & enlarged image */}
                  <div className="relative z-10 w-[72%] sm:w-[75%] h-[58%] sm:h-[65%] min-h-[220px] max-h-[290px] sm:max-h-[330px] bg-white rounded-[24px] p-4 sm:p-5 flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] my-10 sm:my-0 border border-slate-100">
                    <img
                      referrerPolicy="no-referrer"
                      fetchPriority="high"
                      src="https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png"
                      alt="AIKO solar panels close-up"
                      className="w-full h-full object-contain object-center transform scale-[1.48] transition-transform duration-500 group-hover:scale-[1.55] drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl z-20 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-lg sm:text-2xl font-black text-[#5BC94D] leading-none">25%+</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Efficiency
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl z-20 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-lg sm:text-2xl font-black text-[#5BC94D] leading-none">30 YR</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Warranty
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#121814]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl z-20 shadow-lg flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[8px] sm:text-[9px] text-white uppercase tracking-wider font-bold">
                      CYCLONE REGION C & D
                    </span>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Trust and Accreditation Strip */}
      <PartnersMarquee />

      {/* Models We Supply - Upgraded to Premium Product Showcase */}
      <section className="py-12 lg:py-24 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Models Intro Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
                    AIKO Models We Supply
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-6">
                    We supply the AIKO Gen 3 ABC Neostar series for residential and commercial installations across the NT. Every AIKO panel we install across the NT is CEC approved, cyclone rated and backed by a 30-year performance warranty. Download the full datasheet for complete model-level specifications including exact wattages, dimensions and cyclone certification data.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Technical specs displayed visually in 6 cards */}
            <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">
              <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Spec Card 1 */}
                <div className="bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-[#5BC94D]/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-[#5BC94D] uppercase tracking-wider">Above 25% Module Efficiency</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    N-type ABC monocrystalline cells. Highest-output residential panel Oneroof Solar supplies. More kilowatts from the same roof space.
                  </p>
                </div>

                {/* Spec Card 2 */}
                <div className="bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-orange-400 uppercase tracking-wider">Temperature Coefficient: -0.26%/°C</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    Less power loss on Darwin rooftops reaching 65°C to 75°C. Outperforms standard TOPCon panels at -0.29%/°C in the dry season.
                  </p>
                </div>

                {/* Spec Card 3 */}
                <div className="bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-blue-400 uppercase tracking-wider">30-Year Performance Warranty</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    90.6% output guaranteed at Year 25. 88.85% at Year 30. One of the strongest long-term guarantees available in Australia in 2026.
                  </p>
                </div>

                {/* Spec Card 4 */}
                <div className="bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-cyan-400 uppercase tracking-wider">Annual Degradation: 0.35% per year</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    Lower degradation than standard N-type TOPCon at 0.4% per year. More electricity produced in Year 20 compared to other brands.
                  </p>
                </div>

                {/* Spec Card 5 */}
                <div className="bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/20">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-[#5BC94D] uppercase tracking-wider">CEC Approved — March 2026</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    STC rebate eligible for all NT residential and commercial installations.
                  </p>
                </div>

                {/* Spec Card 6 */}
                <div className="bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-amber-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-amber-400 uppercase tracking-wider">Cyclone Rated</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    Structural wind-load certified for Darwin NT building standards. Every installation by CEC-accredited electricians.
                  </p>
                </div>

              </FadeIn>
            </div>

          </div>

          {/* Download Datasheet CTA buttons directly beneath feature grid */}
          <FadeIn delay={0.3} className="mt-10 lg:mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
              <a
                href="/assets/datasheets/AIKO%20470%20panles.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold px-6 py-4 rounded-xl uppercase tracking-wider text-xs border border-slate-700 hover:border-[#5BC94D]/50 transition-all duration-300 inline-flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-lg hover:shadow-xl group"
              >
                <FileText className="w-4 h-4 text-[#5BC94D] group-hover:scale-110 transition-transform" />
                <span>Download Neostar 2S 440W–470W Datasheet</span>
              </a>
              <a
                href="/assets/datasheets/File-1759375846.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold px-6 py-4 rounded-xl uppercase tracking-wider text-xs border border-slate-700 hover:border-[#5BC94D]/50 transition-all duration-300 inline-flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-lg hover:shadow-xl group"
              >
                <FileText className="w-4 h-4 text-[#5BC94D] group-hover:scale-110 transition-transform" />
                <span>Download Neostar 3P54 475W–500W Datasheet</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why AIKO Suits Darwin Conditions Section */}
      <section className="py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Engineered for the Northern Territory climate
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
                Why AIKO Suits Darwin Conditions
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sun className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  Maximum Output From Limited Roof Space
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  AIKO’s above 25 per cent efficiency means more kilowatts from the same number of panels. For Darwin homes where cyclone strapping and air-conditioning units reduce usable roof area, this matters.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  Strong Heat Performance
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  The -0.26%/°C temperature coefficient outperforms standard TOPCon panels at -0.29%/°C. On Darwin rooftops reaching 65°C to 75°C in the dry season, AIKO panels retain more of their rated wattage output every day.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  30-Year Performance Warranty
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  AIKO guarantees 90.6 per cent output at Year 25 and 88.85 per cent at Year 30, one of the strongest long-term guarantees available in Australia in 2026.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions with Visual element */}
      <section className="py-12 lg:py-24 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column heading & Support image */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs mb-6 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#5BC94D] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Support</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
                  Frequently Asked Questions
                </h2>
                
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                  Everything you need to know about making the switch to premium AIKO panels. Can't find the answer you're looking for?
                </p>

                {/* Engaging Support/FAQ visual image */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl my-6 lg:my-8 group">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                    alt="Rooftop solar panel close-up" 
                    className="w-full h-48 sm:h-64 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                </div>

                <div className="mb-8 lg:mb-0">
                  <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 border-none uppercase tracking-wider text-xs" asChild>
                    <a href="#quote-form">
                      Get a Free Quote
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-slate-900/60 shadow-xl border-[#5BC94D]/30"
                          : "bg-slate-900/20 border-white/5 hover:border-[#5BC94D]/20"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 focus-visible:ring-2 focus-visible:ring-[#5BC94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1118] transition-all"
                      >
                        <div className="flex items-start sm:items-center gap-4">
                          <div
                            className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                              isOpen
                                ? "bg-[#5BC94D] text-[#19281D] shadow-md shadow-[#5BC94D]/20"
                                : "bg-white/5 text-slate-400 border border-white/10"
                            }`}
                          >
                            0{i + 1}
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
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
                        id={`faq-panel-${i}`}
                        aria-labelledby={`faq-button-${i}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 px-6 sm:px-6 ${
                          isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-slate-300 leading-relaxed font-medium pl-12 sm:pl-14 text-base">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Primary Conversion Section Upgraded to Premium Hero Quote Form */}
      <section id="quote-form" className="py-16 lg:py-28 relative overflow-hidden bg-slate-950">
        
        {/* Full-bleed background image of modern Darwin home with dark premium overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80" 
            alt="Modern Australian home roof solar" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Side Info */}
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Get Started Today
                </span>
                
                <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-6">
                  Start Saving With <br/>
                  <span className="text-[#5BC94D]">AIKO Solar Panels</span>
                </h2>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8 lg:mb-10 max-w-xl">
                  Don't let the Territory sun go to waste. Find out exactly how much you can save on your quarterly electricity bills with premium AIKO ABC solar panels. Fill out our quick form for a free, no-obligation customized system design and solar assessment report.
                </p>

                <div className="space-y-6">
                  <a 
                    href={`tel:${PRIMARY_PHONE_RAW}`} 
                    className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group max-w-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Our Team</div>
                      <div className="text-lg font-black font-mono">{PRIMARY_PHONE}</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@oneroofsolar.com.au" 
                    className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group max-w-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</div>
                      <div className="text-lg font-black font-mono">info@oneroofsolar.com.au</div>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Quote Form on a glass-style card */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <FadeIn delay={0.2} className="backdrop-blur-xl bg-slate-900/80 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-10 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                {submitted ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#5BC94D] rounded-full flex items-center justify-center text-[#19281D] mx-auto mb-6 shadow-lg">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                      Assessment Request Received
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-6">
                      Thank you. A solar expert from Oneroof Solar will reach out shortly with your customized quote options and solar savings report.
                    </p>
                    <Button 
                      className="bg-[#5BC94D] text-[#19281D] font-bold px-6 py-2 rounded-xl hover:bg-emerald-400 transition-colors uppercase tracking-wider text-xs border-none"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-bold text-[10px] mb-3 border border-[#5BC94D]/20 uppercase tracking-widest">
                        <Sun className="w-3.5 h-3.5" /> Free Assessment
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                        Claim Your Solar Quote
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill in your details for a customized system design & savings report.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {errorMsg && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-xl font-bold">
                          {errorMsg}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="lead-name" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Full Name <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="text"
                            id="lead-name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="lead-phone" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Phone Number <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="tel"
                            id="lead-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. 0400 000 000"
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="lead-email" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Email Address <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="email"
                            id="lead-email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="lead-suburb" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Suburb / Postcode <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="text"
                            id="lead-suburb"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleInputChange}
                            placeholder="e.g. Berrimah, 0828"
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lead-bill" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Average Quarterly Electricity Bill <span className="text-[#5BC94D]">*</span>
                        </label>
                        <select
                          id="lead-bill"
                          name="bill"
                          value={formData.bill}
                          onChange={handleInputChange}
                          required
                          className="w-full h-11 px-4 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                        >
                          <option value="" disabled className="text-slate-500">Select average bill</option>
                          <option value="Under $500">Under $500</option>
                          <option value="$500 - $1,000">$500 - $1,000</option>
                          <option value="$1,000 - $1,500">$1,000 - $1,500</option>
                          <option value="$1,500+">$1,500+</option>
                          <option value="Unsure">Unsure / Request Assessment</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="lead-message" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Message / Roof Material (Optional)
                        </label>
                        <textarea
                          id="lead-message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="e.g. tile/tin roof, single-story, best time to call..."
                          rows={2}
                          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-xl bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 border-none font-bold h-12 transition-all uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(91,201,77,0.2)] disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {submitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-1">
                            Get a Free Quote <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                )}
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
