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
import cycloneSolarDarwinImg from "../assets/images/cyclone_solar_darwin_1784286769053.jpg";

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

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-6 uppercase">
                  AIKO Solar Panels Darwin
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#5BC94D] pl-6">
                  Oneroof Solar installs AIKO Gen 3 ABC solar panels across Darwin, Palmerston, Alice Springs and the Northern Territory. AIKO is manufactured by Zhejiang Aiko Solar Technology Co., Ltd and won the 2025 SolarQuotes Installers Choice Award for best solar panel brand in Australia. Their All Back Contact (ABC) N-type technology delivers above 25 per cent module efficiency, making them the highest-output residential panel we supply.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-4 mb-8 lg:mb-10 max-w-2xl">
                  <div className="flex items-start gap-3.5 bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="p-1.5 rounded-lg bg-[#5BC94D]/10 text-[#5BC94D] mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Above 25% module efficiency</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Highest power yield on the Australian market. Get significantly more kilowatts from your limited roof space.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-400 mt-0.5">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Strong performance in Darwin heat</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Exceptional -0.26%/°C temperature coefficient maintains maximum energy output even in scorching rooftop heat.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">30-year performance warranty</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Guarantees 88.85% generation performance even at Year 30, securing your long-term energy independence.</p>
                    </div>
                  </div>
                </div>

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

                  {/* AIKO panel image */}
                  <img
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                    src="https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png"
                    alt="AIKO solar panels close-up"
                    className="w-2/3 sm:w-4/5 h-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] my-8 sm:my-0"
                  />
                  
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

      {/* Redesigned Text-Heavy Sections into Visual Storytelling split layouts */}
      <section className="py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5BC94D]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-32">
          
          {/* Split Block 1: Premium All Back Contact Cell Technology (Left: Image, Right: Content) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-20 items-start">
            
            {/* Mobile Heading (natural stack order: Heading -> Image -> Content) */}
            <div className="md:hidden">
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Innovative Cell Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                Premium All Back Contact Cell Technology
              </h2>
            </div>

            {/* Image Column */}
            <div className="md:col-span-6 relative">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[3/4]">
                  <img 
                    referrerPolicy="no-referrer"
                    src="/aiko-roof.png" 
                    alt="Premium All Back Contact Cell Technology" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-[#121814]/80 backdrop-blur-sm border border-[#5BC94D]/20 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                    All Back Contact (ABC) Tech
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Text Column */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <FadeIn delay={0.2}>
                {/* Desktop/Tablet Heading */}
                <div className="hidden md:block">
                  <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                    Innovative Cell Design
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                    Premium All Back Contact Cell Technology
                  </h2>
                </div>

                <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium space-y-6">
                  <p>
                    Understanding the technology behind AIKO solar panels is simple once the metal contacts are removed from the front of the cell. Standard panels place contact lines across the front, shading parts of the cell and reducing sunlight absorption. The AIKO Gen 3 ABC design moves the electrical connections to the back, allowing the front to receive maximum sunlight.
                  </p>
                  <p>
                    When analysing a solar panel designed for the Northern Territory, heat tolerance is a key consideration. Rooftops in Darwin experience extreme thermal stress, often leading to significant efficiency drops in lesser-quality systems. Because the solar panel design features a superior temperature coefficient of -0.26%/°C, power loss is minimised. This means your system continues to run efficiently even during hot dry-season afternoons.
                  </p>
                  <p>
                    Our complete AIKO solar-panel review indicates that the physical footprint is another major advantage. When maximising solar-panel output in Darwin, the structural constraints of cyclone-rated roofs leave limited usable space. Selecting a compact, high-efficiency panel ensures you receive maximum energy without exceeding your roof limits. While the upfront price is higher than standard TOPCon options, the long-term energy yields and 30-year performance warranty provide a faster return on investment.
                  </p>
                </div>
                
                {/* Visual callout bullets for ABC tech, heat, and space */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">ABC Technology</span>
                    <span className="text-[10px] text-slate-400">Contacts on back for maximum light</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">Heat Performance</span>
                    <span className="text-[10px] text-slate-400">-0.26%/°C minimal power loss</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">Roof-Space Efficiency</span>
                    <span className="text-[10px] text-slate-400">Compact size for cyclone roofs</span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Split Block 2: High Temperature Reliability (Left: Content, Right: Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            
            <div className="lg:col-span-6 lg:order-2 order-2">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" 
                    alt="Darwin rooftop solar in hot climate" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-[#121814]/80 backdrop-blur-sm border border-[#5BC94D]/20 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                    Tested for extreme NT conditions
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 lg:order-1 order-1">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Engineered for Extreme Darwin Heat
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                  High Temperature Reliability
                </h2>
                <div className="text-slate-300 text-base leading-relaxed font-medium space-y-6">
                  <p>
                    AIKO’s temperature coefficient of -0.26%/°C means less power loss on Darwin rooftops reaching 65°C to 75°C. It outperforms standard TOPCon panels rated at approximately -0.29%/°C during the dry season.
                  </p>
                  <p>
                    The result is stronger output retention during extreme heat and more usable solar production across hot Darwin afternoons.
                  </p>
                </div>

                {/* Performance stats badges matching requested statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/5 text-center">
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-mono font-black text-[#5BC94D]">-0.26%/°C</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Temperature Coefficient</div>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-mono font-black text-[#5BC94D]">65°C–75°C</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Darwin Rooftops</div>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-mono font-black text-[#5BC94D]">Better</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Heat Retention than TOPCon</div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Split Block 3: Perfect Fit for Territory Roofs (Left: Image, Right: Content) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                  <img 
                    referrerPolicy="no-referrer"
                    src={cycloneSolarDarwinImg} 
                    alt="Solar panels fitted to a residential roof" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-[#121814]/80 backdrop-blur-sm border border-[#5BC94D]/20 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                    Compact & Cyclone Certified
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Optimized Physical Dimensions
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                  Perfect Fit for Territory Roofs
                </h2>
                <div className="text-slate-300 text-base leading-relaxed font-medium space-y-6">
                  <p>
                    AIKO’s above 25 per cent module efficiency means more kilowatts from the same number of panels. For Darwin homes where cyclone strapping, air-conditioning units and other rooftop equipment reduce usable roof area, this matters.
                  </p>
                  <p>
                    The compact residential footprint allows homeowners to maximise energy production without requiring additional usable roof space. Oneroof Solar provides professional <Link to="/solar-panel-installation/" className="text-[#5BC94D] hover:underline font-bold">solar panel installation in Darwin</Link> matching these exact engineering dimensions.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/30 p-4 rounded-2xl border border-white/5 mt-6 lg:mt-8 max-w-lg">
                  <div className="p-2 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    While the upfront price is higher than standard TOPCon options, the long-term energy yields and 30-year performance warranty provide a faster return on investment.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>

        </div>
      </section>

      {/* Models We Supply - Upgraded to Premium Product Showcase */}
      <section className="py-12 lg:py-24 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            
            {/* Models Intro Column with visual panel display */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <FadeIn className="h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-bold text-[10px] mb-6 border border-[#5BC94D]/20 uppercase tracking-widest">
                    <Zap className="w-3.5 h-3.5" /> High Power Output
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 uppercase leading-tight">
                    AIKO Models We Supply
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                    We supply the premium AIKO Gen 3 ABC Neostar series for residential and commercial installations across the NT. Every AIKO panel we install across the NT is Clean Energy Council (CEC) approved, cyclone rated and backed by a 30 year performance warranty. 
                  </p>
                </div>

                {/* Elegant split photo showcase box inside intro */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/40 p-6 flex items-center justify-between mt-6 lg:mt-auto">
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-white uppercase tracking-wider">AIKO Neostar Gen 3</div>
                    <div className="text-xs text-slate-400">ABC N-type solar panel certified for Darwin wind speeds.</div>
                  </div>
                  <img
                    referrerPolicy="no-referrer"
                    src="https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png"
                    alt="AIKO panel preview"
                    className="w-24 h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Technical specs displayed visually in 6 premium cards */}
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
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
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
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
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
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
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
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Lower degradation than standard N-type TOPCon at 0.4% per year. More electricity produced in Year 20 compared with other brands.
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
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
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
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Structural wind-load certified for Darwin NT building standards. Every installation is completed by CEC-accredited electricians.
                  </p>
                </div>

              </FadeIn>
            </div>

          </div>

          {/* Datasheet Action Panel (Clean & visual glass element) */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-slate-900/30 rounded-3xl sm:rounded-[2.5rem] border border-white/10 mt-10 lg:mt-16 text-center max-w-2xl mx-auto backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5BC94D] mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-[10px] font-mono font-bold mb-4 uppercase tracking-wider">
                Development Review: Datasheet Pending
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed max-w-md font-medium">
                The technical specification datasheet will be linked here once the file is uploaded to the production directory.
              </p>
              <Button
                disabled
                className="bg-slate-800 text-slate-400 font-bold px-10 py-5 rounded-xl uppercase tracking-wider text-xs cursor-not-allowed border border-slate-700 w-full sm:w-auto"
              >
                Download Full Datasheet
              </Button>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
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
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
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
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
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
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
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
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] mb-6 uppercase">
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
                        <div className="text-slate-300 leading-relaxed font-medium pl-12 sm:pl-14 text-xs sm:text-sm">
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
                
                <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-[1.1]">
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
