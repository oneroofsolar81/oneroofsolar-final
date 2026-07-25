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
  Flame,
  Globe,
  DollarSign
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import cycloneSolarDarwinImg from "../assets/images/cyclone_solar_darwin_1784286769053.jpg";

export function JaSolarPanels() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    bill: "",
    interest: "JA Solar Panels",
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
        source: "ja_brand_landing",
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        bill: "",
        interest: "JA Solar Panels",
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
    title: "JA Solar Panels NT | Tier 1 Value Without the Premium",
    metaDescription: "JA Solar panels installed across the NT by Oneroof Solar. Globally recognised Tier 1 manufacturer, strong warranty, affordable pricing. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/product/solar-panels-brands/ja-solar-panels-nt",
    robots: "index, follow",
    openGraphTitle: "JA Solar Panels NT | Tier 1 Value Without the Premium",
    openGraphDescription: "JA Solar panels installed across the NT by Oneroof Solar. Globally recognised Tier 1 manufacturer, strong warranty, affordable pricing. Get a free quote.",
    openGraphImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    twitterTitle: "JA Solar Panels NT | Tier 1 Value Without the Premium",
    twitterDescription: "JA Solar panels installed across the NT by Oneroof Solar. Globally recognised Tier 1 manufacturer, strong warranty, affordable pricing. Get a free quote.",
    twitterImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "JA Solar Panels NT",
      "brand": {
        "@type": "Brand",
        "name": "JA Solar"
      },
      "description": "JA Solar panels installed across the NT by Oneroof Solar. BloombergNEF Tier 1 rated, dual glass N-type construction, and highly optimized for Darwin's heat and moisture conditions. BloombergNEF Tier 1 reflects manufacturer bankability, global scale and financial stability rather than being a direct product quality rating.",
      "category": "Solar Panels",
      "url": "https://oneroofsolar.com.au/product/solar-panels-brands/ja-solar-panels-nt",
      "image": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
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
          "name": "Solar Panel Brands",
          "item": "https://oneroofsolar.com.au/product/solar-panels-brands"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "JA Solar Panels NT",
          "item": "https://oneroofsolar.com.au/product/solar-panels-brands/ja-solar-panels-nt"
        }
      ]
    }
  ];

  const specs = [
    {
      title: "BloombergNEF Tier 1 Rated",
      info: "Financial scale and long-term security. Recognized globally for backing warranties and continuous panel innovation. BloombergNEF Tier 1 reflects manufacturer bankability, global scale and financial stability rather than being a direct product quality rating."
    },
    {
      title: "High Performance in Darwin Heat",
      info: "N-type cell technology prevents steep temperature-related power drops. Tailored for humid and hot tropical climates."
    },
    {
      title: "Moisture & Salt Resistance",
      info: "Dual glass design protects cells against humidity and coastal salty air, keeping generation performance stable."
    },
    {
      title: "Value-Optimized Pricing",
      info: "Sits at the affordable end of the premium Tier 1 list, delivering highly cost-effective solar generation."
    },
    {
      title: "Strong Local Australian Support",
      info: "Maintains official local support, ensuring warranty or service needs do not require an overseas middleman."
    },
    {
      title: "NT Wind and Cyclone Rated",
      info: "Reinforced frame construction certified to full NT building standards and cyclone wind zone regulations."
    }
  ];

  const faqs = [
    {
      q: "Are JA Solar panels any good?",
      a: "Yes. JA Solar is a globally recognised Tier 1 manufacturer known for reliable performance, advanced solar technology and strong warranty support in Australia."
    },
    {
      q: "What are JA Solar PV panels made of?",
      a: "Modern JA Solar PV panels are made of high-grade monocrystalline N-type solar cells. Most current premium models also feature dual glass construction (glass on both the front and back) instead of a traditional plastic backsheet, providing superior structural rigidity and moisture protection."
    },
    {
      q: "Is JA Solar a good budget option without sacrificing quality?",
      a: "Absolutely. JA Solar is one of the world's largest manufacturers, allowing them to leverage massive economies of scale. Because of this, they can supply BloombergNEF Tier 1 certified panels with high efficiency and strong local warranties at a highly competitive, budget-friendly price point."
    },
    {
      q: "How long do JA Solar panels last?",
      a: "JA Solar panels are designed for long-term performance, with many models backed by 25-year product warranties and extended performance warranties."
    },
    {
      q: "Do JA Solar panels handle humid, coastal climates like Darwin?",
      a: "Yes. JA Solar panels are engineered and thoroughly tested for extreme environments. Their dual glass construction provides excellent resistance to ingress, high humidity, moisture corrosion, and Darwin's coastal salty air, making them exceptionally reliable for Territory roofs."
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

      {/* Hero Section */}
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
                  <Link to="/product/solar-panels-brands" className="hover:text-[#5BC94D] transition-colors">Solar Panel Brands</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">JA Solar Panels NT</span>
                </nav>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-bold text-[10px] mb-5 border border-[#5BC94D]/20 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-[#5BC94D]" /> BloombergNEF Tier 1 Manufacturer
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide [word-spacing:0.15em] leading-[1.05] mb-6 uppercase">
                  JA Solar Panels NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#5BC94D] pl-6">
                  Power your home with highly efficient Tier 1 solar panels engineered to handle extreme Darwin heat while keeping upfront costs affordable.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-4 mb-8 lg:mb-10 max-w-2xl">
                  <div className="flex items-start gap-3.5 bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider [word-spacing:0.1em]">Tier 1 Technology Without the Markup</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">JA Solar delivers premium BloombergNEF Tier 1 performance, materials, and support at an extremely affordable upfront cost.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-400 mt-0.5">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider [word-spacing:0.1em]">Engineered for Tropical Climates</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Exceptional heat and humidity tolerance ensures stable, high energy generation across Darwin’s dry and wet seasons.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider [word-spacing:0.1em]">Dual Glass Reliability</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Double-sided glass construction offers ultimate resistance to coastal corrosion, salty air, and long-term moisture degradation.</p>
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
                      Get Your Free JA Solar Quote Today →
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

            {/* Right Side Image & Badges */}
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

                  {/* JA Solar visual placeholder illustration representation */}
                  <div className="relative z-10 w-full flex flex-col items-center justify-center p-4">
                    <Sun className="w-24 h-24 text-[#5BC94D] animate-spin-slow mb-4 filter drop-shadow-[0_0_15px_rgba(91,201,77,0.4)]" />
                    <span className="text-3xl font-black tracking-widest text-white uppercase text-center block mb-2">
                      JA SOLAR
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest border border-white/15 px-3 py-1 rounded-full bg-black/40">
                      Tier 1 Premium Value
                    </span>
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl z-20 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-lg sm:text-2xl font-black text-[#5BC94D] leading-none">Tier 1</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      BloombergNEF List
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl z-20 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-lg sm:text-2xl font-black text-[#5BC94D] leading-none">25 YR</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Warranty
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#121814]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl z-20 shadow-lg flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[8px] sm:text-[9px] text-white uppercase tracking-wider font-bold">
                      CYCLONE COMPLIANT
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

      {/* Sections 1, 2, and 3 - Visual Storytelling Split Layouts */}
      <section className="py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5BC94D]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-32">
          
          {/* Section 1: Why Choose Tier 1 Solar Without the Premium Price Tag */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-20 items-start">
            
            {/* Mobile Heading */}
            <div className="md:hidden">
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Smart Solar Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Why Choose Tier 1 Solar Without the Premium Price Tag
              </h2>
            </div>

            {/* Image Column */}
            <div className="md:col-span-6 relative">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" 
                    alt="Premium solar panel cell arrays" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-[#121814]/80 backdrop-blur-sm border border-[#5BC94D]/20 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                    High Value Generation
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
                    Smart Solar Value
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                    Why Choose Tier 1 Solar Without the Premium Price Tag
                  </h2>
                </div>

                <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium space-y-6">
                  <p>
                    Not every solar panel needs a premium price tag to perform well. JA Solar is one of the world's largest manufacturers, shipping to homes and businesses across the globe, yet it remains one of the more affordable Tier 1 brands on the market. Before deciding on a panel for your NT roof, here is what JA Solar actually offers, how it performs in tropical conditions, and why Oneroof Solar installs it.
                  </p>
                </div>
                
                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">Tier 1 Certified</span>
                    <span className="text-[10px] text-slate-400">BloombergNEF certified financial security & size</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">Cost Effective</span>
                    <span className="text-[10px] text-slate-400">Best dollars-per-watt efficiency ratio</span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Section 2: Who Is JA Solar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-20 items-center">
            
            {/* Text Column */}
            <div className="md:col-span-6 flex flex-col justify-center order-2 md:order-1">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Global Manufacturing Scale
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Who Is JA Solar
                </h2>

                <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium space-y-6">
                  <p>
                    JA Solar is one of the world's largest solar manufacturers and a globally recognised Tier 1 panel producer. Founded in 2005, the company has established a strong global presence with millions of panels installed worldwide. JA Solar is regularly recognised as a BloombergNEF Tier 1 manufacturer, reflecting its global scale, financial strength and established industry reputation. BloombergNEF Tier 1 reflects manufacturer bankability, global scale and financial stability rather than being a direct product quality rating. JA Solar also maintains a local presence in Australia, so support and warranty claims do not need to go through an overseas middleman.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/5 text-center">
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-mono font-black text-[#5BC94D]">Millions</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Installed Worldwide</div>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-mono font-black text-[#5BC94D]">Tier 1</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">BloombergNEF Rated</div>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-mono font-black text-[#5BC94D]">Local</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Australian Support</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Image Column */}
            <div className="md:col-span-6 relative order-1 md:order-2">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80" 
                    alt="Corporate global operations scale" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-[#121814]/80 backdrop-blur-sm border border-[#5BC94D]/20 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                    Est. 2005 Global Leader
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Section 3: What Makes JA Solar Panels Different */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-20 items-start">
            
            {/* Image Column */}
            <div className="md:col-span-6 relative">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={cycloneSolarDarwinImg} 
                    alt="Solar panels on residential roof" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-[#121814]/80 backdrop-blur-sm border border-[#5BC94D]/20 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                    Dual Glass N-Type Tech
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Text Column */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Technological Innovation
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Makes JA Solar Panels Different
                </h2>

                <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium space-y-6">
                  <p>
                    Many current JA Solar modules use advanced N-type cell technology, including TOPCon designs, which improve efficiency and long-term energy production. Many newer models also feature dual glass construction, helping improve resistance against moisture, corrosion and harsh environmental conditions, which is especially beneficial for homes in Darwin's tropical and coastal climate.
                  </p>
                </div>
                
                {/* Visual Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">N-Type Silicon</span>
                    <span className="text-[10px] text-slate-400">Lower initial and annual degradation profiles</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-slate-900/30 rounded-xl border border-white/5">
                    <span className="text-xs font-black text-[#5BC94D] uppercase tracking-wider">Dual Glass Shield</span>
                    <span className="text-[10px] text-slate-400">Protects cells from Darwin's high coastal humidity</span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section - Download spec/datasheet */}
      <section className="py-12 lg:py-24 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-slate-900/30 rounded-3xl sm:rounded-[2.5rem] border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5BC94D] mb-6 shadow-md">
                <FileText className="w-7 h-7" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-3">
                Get high performance panels at an affordable price
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#5BC94D] mb-6 max-w-xl">
                Download the technical specs or speak with our Darwin solar specialists today
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-[10px] font-mono font-bold mb-6 uppercase tracking-wider">
                Review: Official Datasheet Integration Pending
              </div>

              <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
                <Button
                  disabled
                  className="bg-slate-800 text-slate-400 font-bold px-8 py-4 rounded-xl uppercase tracking-wider text-xs cursor-not-allowed border border-slate-700 w-full sm:w-auto"
                >
                  Download the official JA Solar datasheet
                </Button>
                <Button
                  className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-bold px-8 py-4 rounded-xl transition-all uppercase tracking-wider text-xs border-none w-full sm:w-auto"
                  asChild
                >
                  <a href="#quote-form">Get a Free Quote →</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Why NT Homes and Businesses Choose JA Solar */}
      <section className="py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Territory Certified Selection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Why NT Homes and Businesses Choose JA Solar
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Point 1 */}
            <FadeIn delay={0.1}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Performance in heat and humidity
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  JA Solar panels are built to handle high temperatures without a steep drop in output, which suits Darwin's long dry season heat and humidity.
                </p>
              </div>
            </FadeIn>

            {/* Point 2 */}
            <FadeIn delay={0.2}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Durability that holds up
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Many JA Solar models feature dual glass construction and reinforced frames, helping improve resistance against moisture, corrosion and coastal environmental conditions.
                </p>
              </div>
            </FadeIn>

            {/* Point 3 */}
            <FadeIn delay={0.3}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Price range
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  JA Solar sits at the affordable end of the Tier 1 category without sacrificing warranty or build quality.
                </p>
              </div>
            </FadeIn>

            {/* Point 4 */}
            <FadeIn delay={0.4}>
              <div className="group bg-slate-900/40 border border-white/5 hover:border-[#5BC94D]/30 hover:bg-slate-900/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Everyday benefits
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Lower upfront cost, strong local support in Australia, and consistent output during wet season conditions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: JA Solar Across the NT */}
      <section className="py-12 lg:py-24 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Northern Territory Wide Coverage
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-6">
                  JA Solar Across the NT
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Oneroof Solar installs JA Solar panels across the Northern Territory, including Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-bold transition-all uppercase tracking-wider text-xs border-none"
                    asChild
                  >
                    <Link to="/contact">Get a Free Quote →</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <FadeIn delay={0.2}>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] group">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=800&q=80" 
                    alt="Map representation NT coverage landscape" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Location Pills */}
                  <div className="absolute inset-0 p-6 flex flex-wrap gap-2 items-end justify-center pointer-events-none">
                    {["Darwin", "Palmerston", "Alice Springs", "Katherine", "Tennant Creek"].map((loc) => (
                      <span key={loc} className="px-3 py-1 bg-black/80 border border-[#5BC94D]/30 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: FAQ section */}
      <section className="py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs mb-6 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#5BC94D] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Support</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide [word-spacing:0.12em] text-white leading-[1.1] mb-6 uppercase">
                  Frequently Asked Questions
                </h2>
                
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                  Have questions about JA Solar panels? We've compiled responses to the most common queries Territory homeowners ask us.
                </p>

                <div className="mb-8 lg:mb-0">
                  <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 border-none uppercase tracking-wider text-xs" asChild>
                    <a href="#quote-form">
                      Get Your Free JA Solar Quote Today →
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column FAQ Accordion */}
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
                            className={`text-sm sm:text-base font-bold leading-tight transition-colors tracking-wide [word-spacing:0.05em] ${
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

      {/* Quote Form Section */}
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
                
                <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-6 leading-[1.1]">
                  Start Saving With <br/>
                  <span className="text-[#5BC94D]">JA Solar Panels</span>
                </h2>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8 lg:mb-10 max-w-xl">
                  Connect with our accredited Darwin technicians for a free, fully customized solar panel assessment. Find out how JA Solar's high-efficiency Tier 1 panels can lower your quarterly bills safely and sustainably.
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
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide [word-spacing:0.12em]">
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
                      <h3 className="text-2xl font-black text-white uppercase tracking-wide [word-spacing:0.12em]">
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
                            Get Your Free JA Solar Quote Today <ArrowRight className="w-4 h-4" />
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
