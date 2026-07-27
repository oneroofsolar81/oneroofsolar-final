import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  Phone, 
  Mail, 
  Shield, 
  Sun, 
  FileText,
  ChevronDown,
  Loader2,
  Thermometer,
  Sparkles,
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
        source: "ja_solar_product_page",
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
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const seoData = {
    title: "JA Solar Panels NT | Tier 1 Value Without the Premium",
    metaDescription: "Get Tier 1 solar panels in Darwin and the NT. High efficiency, salt resistant dual glass technology at an affordable price. Free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/ja-solar-panels",
    robots: "index, follow",
    openGraphTitle: "JA Solar Panels NT | Tier 1 Value Without the Premium",
    openGraphDescription: "Get Tier 1 solar panels in Darwin and the NT. High efficiency, salt resistant dual glass technology at an affordable price. Free quote.",
    openGraphImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    twitterTitle: "JA Solar Panels NT | Tier 1 Value Without the Premium",
    twitterDescription: "Get Tier 1 solar panels in Darwin and the NT. High efficiency, salt resistant dual glass technology at an affordable price. Free quote.",
    twitterImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "JA Solar Panels",
      "brand": {
        "@type": "Brand",
        "name": "JA Solar"
      },
      "description": "Get Tier 1 solar panels in Darwin and the NT. High efficiency, salt resistant dual glass technology at an affordable price. Free quote.",
      "category": "Solar Panels",
      "url": "https://oneroofsolar.com.au/products/ja-solar-panels",
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
          "name": "Products",
          "item": "https://oneroofsolar.com.au/product/solar-panels-brands"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "JA Solar Panels",
          "item": "https://oneroofsolar.com.au/products/ja-solar-panels"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are JA Solar panels any good?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. JA Solar is a Tier 1 manufacturer and the third-largest solar panel producer in the world, known for reliable performance and strong local warranty support in Australia."
          }
        },
        {
          "@type": "Question",
          "name": "What are JA Solar PV panels made of?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JA Solar's current panels use N-type silicon cells and, in most models, a dual glass construction rather than a plastic backsheet, which improves resistance to moisture and corrosion over the panel's lifetime."
          }
        },
        {
          "@type": "Question",
          "name": "Is JA Solar a good budget option without sacrificing quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. JA Solar offers Tier 1 reliability and a strong warranty at a lower price point than many premium brands, making it a popular choice for buyers who want proven quality at an affordable price."
          }
        },
        {
          "@type": "Question",
          "name": "How long do JA Solar panels last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JA Solar panels are designed to perform for 25 to 30 years, backed by manufacturer warranties covering both the panel itself and its long-term power output."
          }
        },
        {
          "@type": "Question",
          "name": "Do JA Solar panels handle humid, coastal climates like Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dual glass construction on most current models resists moisture and salt corrosion, which suits Darwin's humidity and coastal conditions well."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Are JA Solar panels any good?",
      a: "Yes. JA Solar is a Tier 1 manufacturer and the third-largest solar panel producer in the world, known for reliable performance and strong local warranty support in Australia."
    },
    {
      q: "What are JA Solar PV panels made of?",
      a: "JA Solar's current panels use N-type silicon cells and, in most models, a dual glass construction rather than a plastic backsheet, which improves resistance to moisture and corrosion over the panel's lifetime."
    },
    {
      q: "Is JA Solar a good budget option without sacrificing quality?",
      a: "Yes. JA Solar offers Tier 1 reliability and a strong warranty at a lower price point than many premium brands, making it a popular choice for buyers who want proven quality at an affordable price."
    },
    {
      q: "How long do JA Solar panels last?",
      a: "JA Solar panels are designed to perform for 25 to 30 years, backed by manufacturer warranties covering both the panel itself and its long-term power output."
    },
    {
      q: "Do JA Solar panels handle humid, coastal climates like Darwin?",
      a: "Yes. Dual glass construction on most current models resists moisture and salt corrosion, which suits Darwin's humidity and coastal conditions well."
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
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#141F17]">
        {/* Background image overlay */}
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
                  <Link to="/product/solar-panels-brands" className="hover:text-[#5BC94D] transition-colors">Products</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">JA Solar Panels</span>
                </nav>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] font-bold text-[10px] mb-5 border border-[#5BC94D]/20 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-[#5BC94D]" /> Tier 1 Solar Technology
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide [word-spacing:0.12em] leading-[1.05] mb-6 uppercase">
                  JA Solar Panels NT
                </h1>

                <p className="subheadline text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#5BC94D] pl-6">
                  Run your home on highly efficient Tier 1 solar panels engineered to handle extreme Darwin heat at a very reasonable upfront cost.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href="#quote-form">
                      Claim your free energy savings quote now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                      Call {PRIMARY_PHONE}
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Visual Image & Badges */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative group rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-slate-950/50 p-6 sm:p-8 aspect-auto sm:aspect-[4/5] h-auto flex flex-col justify-center items-center min-h-[350px] sm:min-h-[420px]">
                  
                  <div className="absolute inset-0 z-0">
                    <img 
                      referrerPolicy="no-referrer"
                      src="https://images.unsplash.com/photo-1620027133796-039cfa6b009f?auto=format&fit=crop&w=800&q=80" 
                      alt="Modern home roof solar panels" 
                      className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-[#121814]/80 to-slate-950/40"></div>
                  </div>

                  <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-700 pointer-events-none"></div>

                  <div className="relative z-10 w-full flex flex-col items-center justify-center p-4">
                    <Sun className="w-20 h-20 text-[#5BC94D] animate-spin-slow mb-4 filter drop-shadow-[0_0_15px_rgba(91,201,77,0.4)]" />
                    <span className="text-3xl font-black tracking-widest text-white uppercase text-center block mb-2">
                      JA SOLAR
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest border border-white/15 px-3 py-1 rounded-full bg-black/40">
                      Tier 1 Dual Glass
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl z-20 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-lg sm:text-2xl font-black text-[#5BC94D] leading-none">Tier 1</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Global Leader
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl z-20 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-lg sm:text-2xl font-black text-[#5BC94D] leading-none">25-30 YR</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Warranty
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Trust and Accreditation Strip */}
      <PartnersMarquee />

      {/* Intro Section */}
      <section className="intro py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
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
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-6 flex flex-col justify-center">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Smart Value Solar
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Why Choose Tier 1 Solar Without the Premium Price Tag
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Not every solar panel needs a premium price tag to perform well. JA Solar is one of the world's largest manufacturers, shipping to homes and businesses across the globe, yet it remains one of the more affordable Tier 1 brands on the market. Before deciding on a panel for your NT roof, here is what JA Solar actually offers, how it performs in tropical conditions, and why Oneroof Solar installs it.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION 1 */}
      <section className="py-12 bg-[#0A1118] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="cta-card bg-slate-900/60 border border-[#5BC94D]/30 p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-4">
                Lower your electricity bills this season
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-medium mb-8 max-w-2xl mx-auto">
                Request a free quote for a reliable Tier 1 solar system built for extreme NT weather
              </p>
              <Button
                size="lg"
                className="btn-solid-green rounded-xl px-8 py-4 bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs border-none shadow-[0_4px_20px_rgba(91,201,77,0.3)]"
                asChild
              >
                <Link to="/contact">
                  Claim your free energy savings quote now
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brand Info Section */}
      <section className="brand-info py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="md:col-span-6 flex flex-col justify-center order-2 md:order-1">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Global Leader
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Who Is JA Solar
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  JA Solar is the third-largest solar panel manufacturer in the world, producing around 10 per cent of global solar panel supply. Founded in 2005 and listed on a major stock exchange, the company is recognised globally as a Tier 1 manufacturer, meaning it has the financial scale and track record to back its warranties long term. JA Solar also maintains a local presence in Australia, so support and warranty claims do not need to go through an overseas middleman.
                </p>
              </FadeIn>
            </div>

            <div className="md:col-span-6 relative order-1 md:order-2">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80" 
                    alt="JA Solar manufacturing excellence" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Specs Section */}
      <section className="technology-specs py-12 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="md:col-span-6 relative">
              <FadeIn>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={cycloneSolarDarwinImg} 
                    alt="JA Solar N-Type Dual Glass Panel" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-6 flex flex-col justify-center">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Advanced Technology
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Makes JA Solar Panels Different
                </h2>
                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    JA Solar's modern panels use N-type cell technology, which loses less power in its first year than older panel types and keeps producing more consistently over time.
                  </p>
                  <p>
                    Most current models also use dual glass construction instead of a plastic backing, giving the panel better resistance to moisture, corrosion and salty air, which matters for homes near Darwin's coastline. This advanced dual glass technology makes JA Solar one of the absolute best value choices for high humidity and coastal environments.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION 2 */}
      <section className="py-12 bg-[#121814] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="cta-card-outline bg-slate-900/40 border border-white/20 p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-4">
                Get high performance panels at an affordable price
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-medium mb-8 max-w-2xl mx-auto">
                Download the technical specs or speak with our Darwin solar specialists today
              </p>
              <Button
                size="lg"
                variant="outline"
                className="btn-outline-green rounded-xl px-8 py-4 text-[#5BC94D] border-[#5BC94D] bg-[#5BC94D]/10 hover:bg-[#5BC94D] hover:text-[#19281D] font-black transition-all uppercase tracking-wider text-xs"
                asChild
              >
                <a href="#quote-form">
                  Download the official JA Solar datasheet
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="benefits-grid py-12 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Key Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Why NT Homes and Businesses Choose JA Solar
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="benefit-card bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Performance in heat and humidity
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  JA Solar panels are built to handle high temperatures without a steep drop in output, which suits Darwin's long dry season heat and the humidity through the build up.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="benefit-card bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Durability that holds up
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Dual glass construction and a reinforced frame help JA Solar panels resist moisture damage and coastal salt corrosion, both common issues for panels installed near the Top End coastline. The panels are backed by a strong product and performance warranty for long-term peace of mind.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="benefit-card bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Price range
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  JA Solar sits at the more affordable end of the Tier 1 category, without cutting corners on warranty or build quality. Cost depends on system size and roof type. Oneroof Solar provides a full itemised quote before any work begins.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="benefit-card bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide [word-spacing:0.1em]">
                  Everyday benefits
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Lower upfront cost than many premium brands, strong local support in Australia, and consistent output even during overcast wet season days.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Territory Wide
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-6">
                  JA Solar Across the NT
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Oneroof Solar installs JA Solar panels across the Northern Territory, including Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. Contact us for JA Solar installations anywhere in the NT.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn delay={0.2}>
                <div className="p-8 bg-slate-900/40 border border-white/10 rounded-3xl">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    {["Darwin", "Palmerston", "Alice Springs", "Katherine", "Tennant Creek", "Top End NT"].map((loc) => (
                      <div key={loc} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-xs font-bold text-white uppercase tracking-wider">
                        📍 {loc}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION 3 */}
      <section className="py-12 bg-[#0A1118] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="cta-card bg-slate-900/60 border border-[#5BC94D]/30 p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-4">
                Ready to start saving on your power bills
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-medium mb-8 max-w-2xl mx-auto">
                Our local NT solar team is ready to design your perfect value focused solar setup
              </p>
              <Button
                size="lg"
                className="btn-solid-green rounded-xl px-8 py-4 bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs border-none shadow-[0_4px_20px_rgba(91,201,77,0.3)]"
                asChild
              >
                <Link to="/contact">
                  Book your free NT energy assessment today
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-accordion py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs mb-6">
                  <span className="h-2 w-2 rounded-full bg-[#5BC94D] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Questions & Answers</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide [word-spacing:0.12em] text-white leading-[1.1] mb-6 uppercase">
                  Frequently Asked Questions
                </h2>
                
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                  Have questions about JA Solar panels? Here are answers to common questions about installing JA Solar in Northern Territory conditions.
                </p>

                <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 border-none uppercase tracking-wider text-xs" asChild>
                  <a href="#quote-form">
                    Book your free NT energy assessment today
                  </a>
                </Button>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div
                      className={`faq-item border rounded-2xl overflow-hidden transition-all duration-300 ${
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
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 focus-visible:ring-2 focus-visible:ring-[#5BC94D] transition-all"
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
                        <p className="text-slate-300 leading-relaxed font-medium pl-12 sm:pl-14 text-xs sm:text-sm">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (Large) */}
      <section className="py-16 lg:py-28 bg-[#0A1118] border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="cta-card-large bg-gradient-to-b from-slate-900/80 to-slate-950 border border-[#5BC94D]/40 p-10 sm:p-16 rounded-3xl text-center max-w-5xl mx-auto shadow-2xl backdrop-blur-xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-6 leading-tight">
                Secure your Darwin solar savings today
              </h3>
              <p className="text-slate-300 text-base sm:text-xl font-medium mb-10 max-w-2xl mx-auto">
                Get a complete itemized pricing proposal with no hidden fees and no obligations
              </p>
              <Button
                size="lg"
                className="btn-solid-green rounded-xl px-10 py-5 bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-sm border-none shadow-[0_4px_25px_rgba(91,201,77,0.4)]"
                asChild
              >
                <Link to="/contact">
                  Start saving on your power bills now
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 lg:py-28 relative overflow-hidden bg-slate-950">
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
            
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Get Started Today
                </span>
                
                <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-6 leading-[1.1]">
                  Start saving on your power bills now
                </h2>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8 lg:mb-10 max-w-xl">
                  Connect with our accredited Darwin technicians for a free fully customized solar panel assessment. Find out how JA Solar's high efficiency Tier 1 panels can lower your quarterly bills safely and sustainably.
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
                        Claim your free energy savings quote now
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill in your details for a customized system design and savings report.
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
                            Suburb or Postcode <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="text"
                            id="lead-suburb"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleInputChange}
                            placeholder="e.g. Berrimah 0828"
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
                          <option value="$500 - $1,000">$500 to $1,000</option>
                          <option value="$1,000 - $1,500">$1,000 to $1,500</option>
                          <option value="$1,500+">$1,500 plus</option>
                          <option value="Unsure">Unsure or Request Assessment</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="lead-message" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Message or Roof Material (Optional)
                        </label>
                        <textarea
                          id="lead-message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="e.g. tile or tin roof single story best time to call..."
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
                            Claim your free energy savings quote now <ArrowRight className="w-4 h-4" />
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
