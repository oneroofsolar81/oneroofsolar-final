import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  Phone, 
  Mail, 
  Shield, 
  Sun, 
  MapPin, 
  Zap, 
  FileText, 
  Award, 
  Clock, 
  CheckCircle,
  Star,
  Cpu,
  Battery,
  Radio,
  Sliders,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  CloudRain,
  Thermometer,
  Wrench,
  Wind,
  AlertTriangle,
  Layers,
  CheckCircle2,
  PackageCheck,
  DollarSign,
  Fuel,
  Lightbulb,
  PhoneCall,
  Truck,
  ClipboardCheck,
  Compass,
  Quote
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { GoogleReviews } from "../components/GoogleReviews";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function OffGridSolarSystemPage() {
  const ALICE_PHONE = "0483 937 004";
  const ALICE_PHONE_RAW = "0483937004";

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "Remote home",
    currentPowerSource: "Generator only",
    generatorFuelCost: "Under $200",
    propertySize: "Standard home"
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError("");

    try {
      if (db) {
        await addDoc(collection(db, "leads"), {
          ...formData,
          createdAt: new Date().toISOString(),
          source: "Off-Grid Solar System Page"
        });
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting off-grid form:", err);
      setFormError("There was an issue submitting your quote request. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const seoData = {
    title: "Off-Grid Solar Systems NT | Remote Darwin and Alice Springs | Oneroof Solar",
    metaDescription: "Oneroof Solar designs and installs off-grid solar systems across remote NT — Darwin, Alice Springs, Katherine, Tennant Creek and beyond. Battery storage, backup generators. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/services/off-grid-solar-system"
  };

  // Inject Combined JSON-LD Schema
  useEffect(() => {
    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Off-Grid Solar System Installation NT",
        "serviceType": "Off-Grid Standalone Power System Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Oneroof Solar",
          "telephone": "0483986444",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Level 1 48-50 Smith Street",
            "addressLocality": "Darwin",
            "addressRegion": "NT",
            "postalCode": "0800",
            "addressCountry": "AU"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
          },
          "openingHours": "Mo-Sa 08:00-18:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Darwin NT" },
          { "@type": "City", "name": "Alice Springs NT" },
          { "@type": "City", "name": "Katherine NT" },
          { "@type": "City", "name": "Tennant Creek NT" },
          { "@type": "AdministrativeArea", "name": "Kakadu NT" },
          { "@type": "AdministrativeArea", "name": "Litchfield NT" },
          { "@type": "AdministrativeArea", "name": "Northern Territory" }
        ],
        "description": "Custom engineered off-grid standalone solar systems with lithium battery storage and generator backup for remote properties, stations, and communities across the Northern Territory."
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an off-grid solar system cost in the NT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Off-grid solar systems in the NT cost between $25,000 and $50,000 for small remote homes (5kW to 10kW) and $45,000 to $90,000 for standard remote homes with air conditioning (10kW to 20kW). Large stations and communities requiring 50kW or more are priced on a custom basis. Remote NT installations include transport and site access costs. Contact Oneroof Solar for a site-specific quote based on your property's actual power needs."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best off-grid solar system for a remote NT property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best off-grid solar system for a remote NT property combines N-type solar panels for heat and wet season performance, a large battery bank sized for 3 to 5 days of autonomy, an off-grid inverter with sufficient surge capacity for motor loads, and a backup generator for Darwin's wet season overcast periods. Oneroof Solar sizes and designs every system to the specific requirements of your NT property."
            }
          },
          {
            "@type": "Question",
            "name": "Can I go off-grid with solar in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Off-grid solar is legal and widely used across Australia, particularly in remote areas without grid access. In the NT, remote properties more than 2 to 3km from existing Power and Water Corporation infrastructure almost always rely on off-grid power. Oneroof Solar designs and installs full off-grid systems including battery storage, generator backup and monitoring across the NT."
            }
          },
          {
            "@type": "Question",
            "name": "What are the problems with off-grid solar in the NT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The main off-grid challenges in the NT are wet season low generation, air conditioning load sizing, battery bank undersizing and generator backup planning. Darwin's wet season can reduce solar output by 70 to 90 per cent for days at a time. Oneroof Solar addresses all of these in system design — we size battery banks for real loads and include generator integration in every remote NT off-grid proposal."
            }
          },
          {
            "@type": "Question",
            "name": "How many solar panels do I need to go off-grid in the NT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most standard remote NT homes with air conditioning need 10kW to 20kW of solar panels (approximately 20 to 40 panels) to meet daily energy needs across the full year including the wet season. Smaller cabins and holiday homes can manage with 5kW to 10kW. Stations and communities with higher loads may require 40kW to 100kW or more. Oneroof Solar calculates your specific requirements during the free assessment."
            }
          },
          {
            "@type": "Question",
            "name": "What size battery do I need for off-grid solar in the NT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For most remote NT homes, a battery bank providing 3 to 5 days of autonomy is recommended to cover Darwin's wet season overcast periods and allow for generator backup planning. A standard remote home using 20 to 40 kWh per day needs a 60 to 200kWh battery bank depending on desired autonomy days. Oneroof Solar sizes battery banks to your actual daily consumption rather than industry averages."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a backup generator with off-grid solar in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a backup generator is strongly recommended for off-grid properties in Darwin and across the NT. The wet season produces extended periods of low solar generation that battery banks alone cannot sustain. A properly integrated generator provides automatic backup when battery charge drops below a set threshold, ensuring uninterrupted power during the worst wet season conditions."
            }
          },
          {
            "@type": "Question",
            "name": "Can Oneroof Solar install off-grid systems in remote NT locations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Oneroof Solar has installed off-grid systems across remote NT locations including Katherine, Tennant Creek, the Barkly Tablelands, Kakadu region, Litchfield and remote Central NT. We coordinate remote transport, site access and on-site accommodation for installation crews as part of the project. Contact us with your property GPS coordinates for a remote NT assessment."
            }
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
            "item": "https://oneroofsolar.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Off-Grid Solar Systems",
            "item": "https://oneroofsolar.com.au/services/off-grid-solar-system"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "telephone": "0483 986 444",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 1 48-50 Smith Street",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "postalCode": "0800",
          "addressCountry": "AU"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "124"
        },
        "openingHours": "Mo-Sa 08:00-18:00",
        "url": "https://oneroofsolar.com.au"
      }
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#121814] text-slate-100 font-sans min-h-screen">
      <SEO seo={seoData} />

      {/* 1. BREADCRUMB */}
      <div className="bg-[#0b100d] border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-medium">
          <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/services/solar-panel-installation" className="hover:text-[#5BC94D] transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">Off-Grid Solar Systems</span>
        </div>
      </div>

      {/* 2. HERO SECTION (Section 1) */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0b100d] via-[#121814] to-[#121814] border-b border-white/10">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
            alt="Oneroof Solar off-grid solar system installed on remote Northern Territory property with battery storage and backup generator"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121814] via-[#121814]/90 to-[#121814]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0b100d]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Top Pill */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-bold text-xs sm:text-sm uppercase tracking-wider mb-6 backdrop-blur-md">
                <Sun className="w-4 h-4 animate-spin-slow" />
                NT Standalone Remote Power Solutions
              </div>
            </FadeIn>

            {/* H1 Headline */}
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Off-Grid Solar Systems NT
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium mb-8 max-w-3xl">
                No power line to your NT property? Oneroof Solar designs and installs off-grid solar systems for remote properties, stations and communities across Darwin, Alice Springs and the Northern Territory. Complete energy independence with no ongoing electricity bills.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Button 
                  className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-xl text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] hover:-translate-y-0.5 border-none"
                  asChild
                >
                  <a href="#quote-form">
                    Get a Free Off-Grid Quote
                  </a>
                </Button>

                <a 
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-[#5BC94D]" />
                  Call Darwin: {PRIMARY_PHONE}
                </a>

                <a 
                  href={`tel:${ALICE_PHONE_RAW}`}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-[#5BC94D]" />
                  Alice Springs: {ALICE_PHONE}
                </a>
              </div>
            </FadeIn>

            {/* Trust Badges Display */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">4.9 Stars</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <Award className="w-4 h-4 text-[#5BC94D] shrink-0" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">CEC Accredited</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-[#5BC94D] shrink-0" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">NT Remote Specialists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Off-Grid & On-Grid</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm col-span-2 sm:col-span-1">
                  <CheckCircle className="w-4 h-4 text-[#5BC94D] shrink-0" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">STC Approved</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <PartnersMarquee />

      {/* 3. SECTION 2 — WHAT IS AN OFF-GRID SOLAR SYSTEM */}
      <section className="py-16 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-2">
                  <Shield className="w-3.5 h-3.5" />
                  Total Energy Independence
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                  What Is an Off-Grid Solar System
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  An off-grid solar system operates completely independently of the Power and Water Corporation electricity grid. There is no grid connection, no electricity retailer and no ongoing electricity bills. Your property generates, stores and uses its own solar power, 24 hours a day, 365 days a year.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Off-grid solar is the right solution for remote NT properties where connecting to the Power and Water Corporation grid is either impossible, impractical or prohibitively expensive due to distance. This includes remote stations, rural Darwin properties, Kakadu region homes, communities across the NT corridor and any property more than a few kilometres from an existing grid connection.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Off-grid is different from hybrid solar, which stays connected to the grid as a backup. Off-grid systems are completely self-sufficient — they rely entirely on solar generation, battery storage and where needed, a backup generator.
                </p>
              </FadeIn>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img referrerPolicy="no-referrer" 
                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"
                    alt="Oneroof Solar off-grid battery storage and solar inverter installation on remote NT property"
                    className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/20 text-[#5BC94D] flex items-center justify-center shrink-0">
                        <Battery className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider">100% Standalone Autonomy</h4>
                        <p className="text-slate-400 text-xs font-medium">Designed for Territory heat & cyclone endurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* SUBSECTION: HOW AN OFF-GRID SOLAR SYSTEM WORKS */}
          <div className="pt-12 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <FadeIn>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-4">
                  How an Off-Grid Solar System Works
                </h3>
                <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                  Your off-grid system has five core components that work together to power your property around the clock.
                </p>
              </FadeIn>
            </div>

            {/* 5 Component Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              
              {/* Component 1: Solar Panels */}
              <FadeIn delay={0.1}>
                <div className="bg-slate-900/70 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sun className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider mb-1">Component 01</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-wide mb-3">Solar Panels</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium flex-1">
                    Installed on your roof or as a ground mount, they generate DC electricity during daylight hours. The NT's high solar irradiance means exceptional daily generation, even accounting for wet season cloud cover.
                  </p>
                </div>
              </FadeIn>

              {/* Component 2: MPPT Charge Controller */}
              <FadeIn delay={0.2}>
                <div className="bg-slate-900/70 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider mb-1">Component 02</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-wide mb-3">MPPT Charge Controller</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium flex-1">
                    Regulates the flow of electricity from your panels to the battery bank. An MPPT (Maximum Power Point Tracking) controller maximises energy harvest from your panels in all light conditions.
                  </p>
                </div>
              </FadeIn>

              {/* Component 3: Battery Bank */}
              <FadeIn delay={0.3}>
                <div className="bg-slate-900/70 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Battery className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider mb-1">Component 03</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-wide mb-3">Battery Bank</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium flex-1">
                    Stores the electricity your panels generate during the day for use at night or during cloudy periods. Battery bank size determines how many days of autonomy your system provides without solar input.
                  </p>
                </div>
              </FadeIn>

              {/* Component 4: Off-Grid Inverter */}
              <FadeIn delay={0.4}>
                <div className="bg-slate-900/70 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider mb-1">Component 04</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-wide mb-3">Off-Grid Inverter</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium flex-1">
                    Converts DC battery power into AC electricity for your household appliances, air conditioning, pumps and all standard electrical equipment.
                  </p>
                </div>
              </FadeIn>

              {/* Component 5: Backup Generator */}
              <FadeIn delay={0.5} className="md:col-span-2 lg:col-span-2">
                <div className="bg-slate-900/70 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#5BC94D]/10 text-[#5BC94D] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl border-l border-b border-[#5BC94D]/30">
                    Recommended for NT Wet Season
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Radio className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider mb-1">Component 05</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-wide mb-3">Backup Generator (recommended for NT)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium flex-1">
                    Supplements solar during extended low-sun periods. Darwin's wet season can produce 5 to 10 consecutive days of heavy overcast. A backup generator ensures power security through these periods.
                  </p>
                </div>
              </FadeIn>

            </div>

            {/* CTA BAR */}
            <FadeIn delay={0.6}>
              <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                    Want to know if off-grid solar suits your NT property?
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base font-medium">
                    Our CEC-accredited engineers model your load profile and seasonal generation.
                  </p>
                </div>
                <Button 
                  className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                  asChild
                >
                  <a href="#quote-form">
                    Book a Free Assessment
                  </a>
                </Button>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* 4. SECTION 3 — OFF-GRID VS HYBRID VS GRID-CONNECTED */}
      <section className="py-16 lg:py-24 bg-[#0b100d] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5" />
                NT Power Configuration Comparison
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Off-Grid, Hybrid or Grid-Connected — Which Is Right for Your NT Property
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Compare grid dependency, operational characteristics and suitability across Northern Territory property types.
              </p>
            </FadeIn>
          </div>

          {/* Comparison Table */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-8 backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-xs font-mono text-[#5BC94D] uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold">System Type</th>
                      <th className="py-4 px-6 font-bold">Grid Connection</th>
                      <th className="py-4 px-6 font-bold">Best For NT</th>
                      <th className="py-4 px-6 font-bold">Key Difference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-slate-300 font-medium">
                    <tr className="hover:bg-white/[0.02] transition-colors bg-[#5BC94D]/5">
                      <td className="py-5 px-6 font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#5BC94D]"></div>
                        Off-Grid Solar
                      </td>
                      <td className="py-5 px-6 text-slate-200">None — fully independent</td>
                      <td className="py-5 px-6 text-slate-200">Remote properties more than 2 to 3km from grid, stations, Kakadu, Barkly region</td>
                      <td className="py-5 px-6 text-slate-200">No electricity bills. Completely self-sufficient. Backup generator recommended.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        Hybrid Solar and Battery
                      </td>
                      <td className="py-5 px-6">Connected to grid as backup</td>
                      <td className="py-5 px-6">Darwin and Alice Springs homes that want maximum self-sufficiency but grid security</td>
                      <td className="py-5 px-6">Uses solar and battery first. Draws from grid only when battery is depleted.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
                        Grid-Connected Solar
                      </td>
                      <td className="py-5 px-6">Connected to Jacana or Rimfire Energy</td>
                      <td className="py-5 px-6">Darwin City, Palmerston, Alice Springs urban areas</td>
                      <td className="py-5 px-6">Lowest upfront cost. Exports surplus to grid. No battery required.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Footnote Link Note */}
          <FadeIn delay={0.2}>
            <p className="text-center text-slate-400 text-xs sm:text-sm font-medium mb-10 max-w-3xl mx-auto">
              For hybrid solar systems, see our <Link to="/residential-solar-system" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">residential solar page</Link>. For grid-connected commercial systems, see our <Link to="/services/commercial-solar-system" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">commercial solar page</Link>.
            </p>
          </FadeIn>

          {/* CTA Bar */}
          <FadeIn delay={0.3}>
            <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Not sure which system type suits your NT property?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base font-medium">
                  Speak directly with an accredited NT off-grid solar specialist today.
                </p>
              </div>
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Talk to Our Team
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. SECTION 4 — OFF-GRID SOLAR PACKAGES */}
      <section className="py-16 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <PackageCheck className="w-3.5 h-3.5" />
                NT Engineered Standalone Packages
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Exclusive Off-Grid Solar and Battery Packages
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Complete off-grid solar systems designed for remote NT properties. Every package includes N-type panels, off-grid inverter, battery bank, cyclone-rated mounting, CEC-accredited installation and full system commissioning.
              </p>
            </FadeIn>
          </div>

          {/* 3 Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1: Starter Off-Grid Package */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col h-full hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl relative overflow-hidden">
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider block mb-2">Package 01</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Starter Off-Grid Package</h3>
                  <p className="text-slate-400 text-xs font-medium">Ideal for small remote homes, cabins, weekender properties or hunting shacks.</p>
                </div>

                <div className="py-4 border-y border-white/10 mb-6 space-y-3 flex-1">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>5.5kW N-Type</strong> High-Efficiency Solar Array</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>10.2kWh Modular</strong> Lithium Battery Storage</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>5kW Off-Grid</strong> Pure Sine Inverter</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>Cyclone-Rated C2/C3</strong> Framing & Mounting</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Generator Auto-Start Integration Ready</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Full CEC Installation & System Commissioning</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-white/10 hover:bg-[#5BC94D] hover:text-[#19281D] text-white font-black py-4 rounded-xl uppercase tracking-wider text-xs transition-all duration-300 border-none mt-auto"
                  asChild
                >
                  <a href="#quote-form">Get Starter Quote</a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 2: Remote Property Package [Most Popular] */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/95 border-2 border-[#5BC94D] rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow-[0_0_30px_rgba(91,201,77,0.2)] group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#5BC94D] text-[#19281D] font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-2xl">
                  Most Popular
                </div>
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider block mb-2">Package 02</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Remote Property Package</h3>
                  <p className="text-slate-300 text-xs font-medium">Tailored for standard remote homes, rural homesteads with AC & pumps.</p>
                </div>

                <div className="py-4 border-y border-white/10 mb-6 space-y-3 flex-1">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>10.8kW N-Type</strong> High-Output Solar Array</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>20.4kWh High-Capacity</strong> Lithium Storage</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>8kW Off-Grid</strong> Heavy-Duty Inverter</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>Heavy-Duty Cyclone</strong> Mounting + Surge Protection</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Smart Generator Auto-Transfer Switch</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Full On-Site CEC Commissioning & Training</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black py-4 rounded-xl uppercase tracking-wider text-xs transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none mt-auto"
                  asChild
                >
                  <a href="#quote-form">Choose Remote Package</a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 3: Ultimate Off-Grid Package */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col h-full hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white/10 text-slate-300 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-2xl">
                  Station & Commercial Grade
                </div>
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#5BC94D] font-bold uppercase tracking-wider block mb-2">Package 03</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Ultimate Off-Grid Package</h3>
                  <p className="text-slate-400 text-xs font-medium">Built for large cattle stations, remote lodges, communities and commercial setups.</p>
                </div>

                <div className="py-4 border-y border-white/10 mb-6 space-y-3 flex-1">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>20kW+ High-Capacity</strong> N-Type Solar Array</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>40kWh+ Modular</strong> Battery Storage Stack</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>15kW+ Industrial</strong> Off-Grid Inverter Cluster</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span><strong>Severe-Weather</strong> Cyclone Frame Structure</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Integrated Generator & Load-Shedding Controller</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#5BC94D] shrink-0 mt-0.5" />
                    <span>Remote Telemetry & Monitoring Access</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-white/10 hover:bg-[#5BC94D] hover:text-[#19281D] text-white font-black py-4 rounded-xl uppercase tracking-wider text-xs transition-all duration-300 border-none mt-auto"
                  asChild
                >
                  <a href="#quote-form">Request Commercial Quote</a>
                </Button>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.4}>
            <p className="text-center text-slate-400 text-xs sm:text-sm font-medium">
              Prices include STC rebate where applicable. All systems sized to your specific property after a free site assessment. Generator packages available on request.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. SECTION 5 — COMMON CHALLENGES AND NT SOLUTIONS */}
      <section className="py-16 lg:py-24 bg-[#0b100d] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                NT Environmental Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Common Off-Grid Solar Challenges and How We Address Them in the NT
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Off-grid solar requires careful design. These are the most common challenges and how Oneroof Solar addresses them for NT properties.
              </p>
            </FadeIn>
          </div>

          {/* 6 Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Challenge 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                    <CloudRain className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">Wet Season Low Generation</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">NT Context</span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Darwin's wet season (October to April) can produce 5 to 10 consecutive days of heavy overcast, reducing solar output by 70 to 90 per cent.
                    </p>
                  </div>
                  <div className="bg-[#5BC94D]/10 p-3.5 rounded-xl border border-[#5BC94D]/20">
                    <span className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider block mb-1">How We Address It</span>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      We size battery banks for 3 to 5 days autonomy and include a backup generator in every remote NT system design. Generator auto-start is recommended for unattended properties.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Challenge 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                    <Battery className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">Battery Bank Undersizing</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">NT Context</span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Remote NT properties often have higher than expected loads from air conditioning, water pumps and refrigeration.
                    </p>
                  </div>
                  <div className="bg-[#5BC94D]/10 p-3.5 rounded-xl border border-[#5BC94D]/20">
                    <span className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider block mb-1">How We Address It</span>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      We review your actual appliance list and daily usage profile, not generic estimates. Battery bank capacity is sized for your real load plus a safety buffer.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Challenge 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">High AC Loads in NT Heat</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">NT Context</span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      NT properties run air conditioning for 8 to 12 hours per day, far more than southern properties.
                    </p>
                  </div>
                  <div className="bg-[#5BC94D]/10 p-3.5 rounded-xl border border-[#5BC94D]/20">
                    <span className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider block mb-1">How We Address It</span>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      We factor full AC load into system design. Inverter capacity must handle simultaneous AC startup current, which is 3 to 5 times running current.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Challenge 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">Panel Soiling & Maintenance</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">NT Context</span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Remote NT properties accumulate dust and bird droppings rapidly, reducing output.
                    </p>
                  </div>
                  <div className="bg-[#5BC94D]/10 p-3.5 rounded-xl border border-[#5BC94D]/20">
                    <span className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider block mb-1">How We Address It</span>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      We advise on panel tilt angle for natural rain cleaning and provide a maintenance schedule. Our repairs team services remote NT systems. See our <Link to="/services/solar-panel-repair-darwin" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">repairs and maintenance page</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Challenge 5 */}
            <FadeIn delay={0.5}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                    <Wind className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">Cyclone Panel Ratings</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">NT Context</span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Darwin and Top End NT require cyclone-rated panel mounting for all installations.
                    </p>
                  </div>
                  <div className="bg-[#5BC94D]/10 p-3.5 rounded-xl border border-[#5BC94D]/20">
                    <span className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider block mb-1">How We Address It</span>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      Every off-grid Oneroof Solar installation uses cyclone-rated mounting regardless of location, as extreme weather events extend across the NT.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Challenge 6 */}
            <FadeIn delay={0.6}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">Inverter Overload from Motor Starts</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">NT Context</span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Water pumps, bore pumps and large compressors have high startup current demands.
                    </p>
                  </div>
                  <div className="bg-[#5BC94D]/10 p-3.5 rounded-xl border border-[#5BC94D]/20">
                    <span className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider block mb-1">How We Address It</span>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      We specify off-grid inverters with appropriate surge capacity for your specific motor loads. Bore pumps in particular need careful inverter matching.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* CTA Bar */}
          <FadeIn delay={0.7}>
            <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Not sure if your remote NT property has any of these challenges?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base font-medium">
                  Get a free site load assessment from our engineering team.
                </p>
              </div>
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Book a Free Off-Grid Assessment
                </a>
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 7. SECTION 6 — OFF-GRID SYSTEM SIZING GUIDE */}
      <section className="py-16 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <Cpu className="w-3.5 h-3.5" />
                NT Property Load Sizing Matrix
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                How to Size an Off-Grid Solar System for Your NT Property
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                The right off-grid system size depends on your daily electricity consumption, the number of days of battery autonomy you need and your location in the NT. Here is a general guide based on common NT property types.
              </p>
            </FadeIn>
          </div>

          {/* Sizing Table */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-8 backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[750px]">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-xs font-mono text-[#5BC94D] uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold">Property Type</th>
                      <th className="py-4 px-6 font-bold">Daily Power Use</th>
                      <th className="py-4 px-6 font-bold">Solar Array Size</th>
                      <th className="py-4 px-6 font-bold">Battery Bank Size</th>
                      <th className="py-4 px-6 font-bold">Generator</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-slate-300 font-medium">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-bold text-white">Small remote home or cabin</td>
                      <td className="py-5 px-6 text-slate-200">5 to 15 kWh/day</td>
                      <td className="py-5 px-6 text-slate-200">5kW to 10kW panels</td>
                      <td className="py-5 px-6 text-slate-200">10 to 20kWh battery</td>
                      <td className="py-5 px-6 text-slate-300">Optional — 3 to 5kVA</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
                      <td className="py-5 px-6 font-bold text-white">Standard remote home with AC</td>
                      <td className="py-5 px-6 text-slate-200">20 to 40 kWh/day</td>
                      <td className="py-5 px-6 text-slate-200">10kW to 20kW panels</td>
                      <td className="py-5 px-6 text-slate-200">20 to 40kWh battery</td>
                      <td className="py-5 px-6 text-emerald-400 font-semibold">Recommended — 6 to 10kVA</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-bold text-white">Large home or small station</td>
                      <td className="py-5 px-6 text-slate-200">40 to 80 kWh/day</td>
                      <td className="py-5 px-6 text-slate-200">20kW to 40kW panels</td>
                      <td className="py-5 px-6 text-slate-200">40 to 80kWh battery</td>
                      <td className="py-5 px-6 text-[#5BC94D] font-bold">Required — 10 to 20kVA</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
                      <td className="py-5 px-6 font-bold text-white">Large station or community</td>
                      <td className="py-5 px-6 text-slate-200">80 to 200+ kWh/day</td>
                      <td className="py-5 px-6 text-slate-200">40kW to 100kW+ panels</td>
                      <td className="py-5 px-6 text-slate-200">80 to 200kWh+ battery</td>
                      <td className="py-5 px-6 text-[#5BC94D] font-bold">Required — 20 to 50kVA+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-center text-slate-400 text-xs sm:text-sm font-medium mb-10 max-w-4xl mx-auto">
              These are indicative ranges only. Every Oneroof Solar off-grid system is sized after a detailed assessment of your property's actual appliance list, usage hours, roof or land area and access requirements. Remote NT installations also factor in transport and access costs to your site.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Want an accurate size recommendation for your NT off-grid property?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base font-medium">
                  Our off-grid engineering team will build a free tailored load analysis and system proposal.
                </p>
              </div>
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Get a Free Off-Grid Assessment
                </a>
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 8. SECTION 7 — OFF-GRID SYSTEM COST */}
      <section className="py-16 lg:py-24 bg-[#0b100d] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <DollarSign className="w-3.5 h-3.5" />
                NT Investment Guide
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                How Much Does an Off-Grid Solar System Cost in the NT
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Off-grid solar systems cost more than grid-connected systems of the same panel capacity because they require a battery bank, off-grid inverter, charge controller and backup generator. For NT remote properties, transport and access costs also add to the total installation price.
              </p>
            </FadeIn>
          </div>

          {/* Cost Table */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-8 backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-xs font-mono text-[#5BC94D] uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold">System Size</th>
                      <th className="py-4 px-6 font-bold">Indicative Cost Range</th>
                      <th className="py-4 px-6 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-slate-300 font-medium">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-bold text-white">5kW to 10kW (small remote home)</td>
                      <td className="py-5 px-6 text-[#5BC94D] font-black text-base">$25,000 to $50,000</td>
                      <td className="py-5 px-6 text-slate-300">Basic off-grid for small loads. Limited AC capacity.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
                      <td className="py-5 px-6 font-bold text-white">10kW to 20kW (standard remote home)</td>
                      <td className="py-5 px-6 text-[#5BC94D] font-black text-base">$45,000 to $90,000</td>
                      <td className="py-5 px-6 text-slate-300">Suitable for full household loads including AC. 3 to 5 day battery autonomy.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-bold text-white">20kW to 50kW (large home or small station)</td>
                      <td className="py-5 px-6 text-[#5BC94D] font-black text-base">$80,000 to $200,000</td>
                      <td className="py-5 px-6 text-slate-300">Large battery bank, generator integration, monitoring system.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
                      <td className="py-5 px-6 font-bold text-white">50kW+ (large station or community)</td>
                      <td className="py-5 px-6 text-[#5BC94D] font-black text-base">$200,000 to $1,000,000+</td>
                      <td className="py-5 px-6 text-slate-300">Custom design. Includes power station, fuel management, remote monitoring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-center text-slate-400 text-xs sm:text-sm font-medium mb-10 max-w-4xl mx-auto">
              The federal STC rebate applies to off-grid systems under 100kW and reduces upfront cost. Remote NT installations may also access additional state and territory energy support programs — contact Oneroof Solar to confirm current eligibility.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Want an accurate cost estimate for your NT off-grid system?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base font-medium">
                  Get a comprehensive quote tailored to your exact location, appliances and power requirements.
                </p>
              </div>
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. SECTION 8 — WHY CHOOSE ONEROOF SOLAR FOR OFF-GRID NT */}
      <section className="py-16 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                NT Standalone Power Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Why NT Properties Choose Oneroof Solar for Off-Grid
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                  NT Remote Specialists
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  We have designed and installed off-grid systems across Darwin, Alice Springs, Katherine, the Barkly, Kakadu and remote Central NT. We understand NT remote property challenges that interstate providers do not.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                  Cyclone-Rated All Installations
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  Every off-grid installation we carry out uses cyclone-rated mounting, regardless of location. Extreme weather events affect the full NT, not just coastal Darwin.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Battery className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                  Right-Sized Battery Banks
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  We size battery banks to your real load — not industry averages. An undersized battery bank is the single biggest cause of off-grid system failure. We get this right from the start.
                </p>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Fuel className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                  Generator Integration Specialists
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  We design generator backup into every remote NT off-grid system. Darwin's wet season makes generator backup non-negotiable for uninterrupted power at remote properties.
                </p>
              </div>
            </FadeIn>

            {/* Card 5 */}
            <FadeIn delay={0.5}>
              <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                  N-Type Panels Only
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  We supply AIKO, REC and Jinko N-type panels — the highest-performing technology in NT heat and wet season conditions. Maximum output means smaller battery banks and lower total system cost.
                </p>
              </div>
            </FadeIn>

            {/* Card 6 */}
            <FadeIn delay={0.6}>
              <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/50 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                  Remote NT Support
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  Off-grid systems need ongoing support. Our Darwin and Alice Springs teams service remote NT systems. See our <Link to="/services/solar-panel-maintenance-darwin" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">repairs and maintenance page</Link> for off-grid service details.
                </p>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.7}>
            <div className="text-center">
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-10 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Get a Free Off-Grid Quote
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. SECTION 9 — OUR OFF-GRID INSTALLATION PROCESS */}
      <section className="py-16 lg:py-24 bg-[#0b100d] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <ClipboardCheck className="w-3.5 h-3.5" />
                End-to-End Implementation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                How We Design and Install Your NT Off-Grid Solar System
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Off-grid system design requires more detailed planning than grid-connected installations. Here is how we approach it.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto mb-12">
            
            {/* Step 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[#5BC94D]/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#5BC94D] text-[#19281D] font-black text-xl flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(91,201,77,0.3)]">
                  01
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
                    Remote Property Assessment
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    We assess your property's daily electricity consumption by reviewing your appliance list, usage hours and any existing generator fuel costs. For remote sites, we request GPS coordinates, satellite roof imagery and access road information. This is done by phone and video call for properties Oneroof Solar has not visited previously.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[#5BC94D]/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#5BC94D] text-[#19281D] font-black text-xl flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(91,201,77,0.3)]">
                  02
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
                    System Design and Proposal
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Our engineers design your complete off-grid system including panel array size, battery bank capacity, inverter selection, charge controller, generator integration and monitoring setup. You receive a detailed proposal with full system specifications, STC rebate calculation and estimated fuel savings versus your current generator costs.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[#5BC94D]/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#5BC94D] text-[#19281D] font-black text-xl flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(91,201,77,0.3)]">
                  03
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
                    Equipment Procurement and Transport
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    We procure all system components and arrange transport to your NT property. Remote NT deliveries require advance planning — we coordinate transport logistics as part of the project management process at no additional administrative cost to you.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[#5BC94D]/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#5BC94D] text-[#19281D] font-black text-xl flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(91,201,77,0.3)]">
                  04
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
                    Installation
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Our CEC-accredited off-grid installation team travels to your NT property and completes full system installation including panel mounting, battery bank setup, inverter and charge controller wiring, generator integration and monitoring system configuration. Remote NT installations typically take 2 to 5 days on site.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 5 */}
            <FadeIn delay={0.5}>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[#5BC94D]/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#5BC94D] text-[#19281D] font-black text-xl flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(91,201,77,0.3)]">
                  05
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
                    Commissioning, Training and Handover
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    We commission every component, test full system operation under load and train your property manager or family on system monitoring, generator startup procedures and basic maintenance. See our <Link to="/services/solar-panel-maintenance-darwin" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">repairs and maintenance page</Link> for ongoing remote NT off-grid support.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.6}>
            <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Ready to get your remote NT property off the grid?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base font-medium">
                  Contact our CEC-accredited engineering team to discuss your project.
                </p>
              </div>
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Talk to Our Team
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 11. SECTION 10 — NT OFF-GRID LOCATIONS */}
      <section className="py-16 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5" />
                Territory Wide Coverage
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                Off-Grid Solar Installations Across the NT
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Oneroof Solar installs off-grid solar systems for remote properties across the entire Northern Territory.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Region 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl h-full hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Darwin and Greater Darwin
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Darwin CBD, Larrakeyah, Parap, Cullen Bay, Fannie Bay, Stuart Park, East Point, Nightcliff, Rapid Creek, Coconut Grove, Casuarina, Tiwi, Muirhead, Nakara, Leanyer, Winnellie, Berrimah, Marrara
                </p>
              </div>
            </FadeIn>

            {/* Region 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl h-full hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Palmerston and Rosebery
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Durack, Gray, Woodroffe, Farrar, Archer, Moulden, Driver, Bellamack, Bakewell, Gunn, Johnston, Rosebery, Zuccoli, Marlow Lagoon
                </p>
              </div>
            </FadeIn>

            {/* Region 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl h-full hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Rural Darwin and Litchfield
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Humpty Doo, Howard Springs, Berry Springs, Darwin River, Batchelor, Dundee Beach, Litchfield, Noonamah, Girraween, Acacia Hills, Dundee Forest, Coolalinga
                </p>
              </div>
            </FadeIn>

            {/* Region 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl h-full hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Kakadu and Top End remote
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Jabiru, Gunbalanya, Ramingining, Milingimbi, Warruwi, Maningrida — off-grid community and station installations
                </p>
              </div>
            </FadeIn>

            {/* Region 5 */}
            <FadeIn delay={0.5}>
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl h-full hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Katherine and corridor
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Katherine CBD, Tindal, Manbulloo, Adelaide River, Pine Creek, Mataranka, Daly Waters, Larrimah, Roper Bar — grid-edge and full off-grid
                </p>
              </div>
            </FadeIn>

            {/* Region 6 */}
            <FadeIn delay={0.6}>
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl h-full hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Tennant Creek and Barkly
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Tennant Creek, Elliott, Renner Springs, Three Ways, Ali Curung — remote station off-grid specialists across the Barkly Tablelands
                </p>
              </div>
            </FadeIn>

            {/* Region 7 */}
            <FadeIn delay={0.7} className="md:col-span-2 lg:col-span-3">
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl hover:border-[#5BC94D]/40 transition-colors">
                <h3 className="text-lg font-black text-[#5BC94D] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Alice Springs and Central NT
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Alice Springs CBD, Larapinta, Gillen, Braitling, Sadadeen, Desert Springs, Araluen, Ilparpa — plus Yulara, Ti Tree, Yuendumu, Hermannsburg, Finke, Mutitjulu
                </p>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.8}>
            <p className="text-center text-slate-400 text-xs sm:text-sm font-medium mb-10 max-w-3xl mx-auto">
              For Alice Springs specific solar, see our <Link to="/alice-springs" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">Alice Springs solar page</Link>. For residential grid-connected systems, see our <Link to="/residential-solar-system" className="text-[#5BC94D] font-bold underline hover:text-emerald-400 transition-colors">residential solar page</Link>.
            </p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className="bg-gradient-to-r from-slate-900 via-[#19281D] to-slate-900 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <p className="text-lg sm:text-xl font-bold text-white mb-1">
                  Oneroof Solar services off-grid properties across all NT postcodes including remote Central NT and Top End communities.
                </p>
              </div>
              <Button 
                className="bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                asChild
              >
                <a href="#quote-form">
                  Check Coverage
                </a>
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 12. SECTION 11 — CUSTOMER REVIEWS */}
      <section className="py-16 lg:py-24 bg-[#0b100d] relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5 fill-[#5BC94D]" />
                NT Customer Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-6">
                What NT Customers Say About Oneroof Solar
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3 text-slate-300 font-bold text-base mb-2">
                <span className="text-[#5BC94D] text-2xl font-black">4.9 / 5</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>Based on 124+ Google reviews</span>
              </div>
              <div className="mt-2">
                <Link to="/projects" className="text-xs font-mono text-[#5BC94D] uppercase tracking-wider font-bold underline hover:text-emerald-400 transition-colors">
                  See Our Projects →
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Review 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full hover:border-[#5BC94D]/40 transition-colors">
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#5BC94D]/30 mb-3" />
                  <p className="text-slate-300 text-sm leading-relaxed font-medium italic mb-6">
                    "I had a great experience with Oneroof Solar from start to finish for the installation of my Solar and Sungrow Battery System in Katherine, NT. A friend recommended them for their outstanding support, and they certainly did not disappoint. Aman was excellent to work with, the installation team arrived on time and worked efficiently. Highly recommend."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-bold text-sm">NT Customer</p>
                  <p className="text-slate-400 text-xs">Katherine NT</p>
                </div>
              </div>
            </FadeIn>

            {/* Review 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full hover:border-[#5BC94D]/40 transition-colors">
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#5BC94D]/30 mb-3" />
                  <p className="text-slate-300 text-sm leading-relaxed font-medium italic mb-6">
                    "I purchased a huge 80kW Sungrow battery along with 30kW AIKO 470W panels providing full backup power for my entire property. So far, everything is running smoothly and I am saving around $2,000 each quarter. Aman designed the right size system for my needs."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-bold text-sm">Remote Property Owner</p>
                  <p className="text-slate-400 text-xs">Darwin NT</p>
                </div>
              </div>
            </FadeIn>

            {/* Review 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full hover:border-[#5BC94D]/40 transition-colors">
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#5BC94D]/30 mb-3" />
                  <p className="text-slate-300 text-sm leading-relaxed font-medium italic mb-6">
                    "From start to finish, I cannot fault this company. The team is very informative and flexible. The install crew explained everything clearly and did a great job. Would recommend to anyone looking to get into the solar battery space."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-bold text-sm">NT Customer</p>
                  <p className="text-slate-400 text-xs">Northern Territory</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* 13. SECTION 12 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 lg:py-24 bg-[#121814] relative overflow-hidden border-t border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                NT Off-Grid FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Questions NT property owners ask before installing an off-grid solar system.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much does an off-grid solar system cost in the NT?",
                a: "Off-grid solar systems in the NT cost between $25,000 and $50,000 for small remote homes (5kW to 10kW) and $45,000 to $90,000 for standard remote homes with air conditioning (10kW to 20kW). Large stations and communities requiring 50kW or more are priced on a custom basis. Remote NT installations include transport and site access costs. Contact Oneroof Solar for a site-specific quote based on your property's actual power needs."
              },
              {
                q: "What is the best off-grid solar system for a remote NT property?",
                a: "The best off-grid solar system for a remote NT property combines N-type solar panels for heat and wet season performance, a large battery bank sized for 3 to 5 days of autonomy, an off-grid inverter with sufficient surge capacity for motor loads, and a backup generator for Darwin's wet season overcast periods. Oneroof Solar sizes and designs every system to the specific requirements of your NT property."
              },
              {
                q: "Can I go off-grid with solar in Australia?",
                a: "Yes. Off-grid solar is legal and widely used across Australia, particularly in remote areas without grid access. In the NT, remote properties more than 2 to 3km from existing Power and Water Corporation infrastructure almost always rely on off-grid power. Oneroof Solar designs and installs full off-grid systems including battery storage, generator backup and monitoring across the NT."
              },
              {
                q: "What are the problems with off-grid solar in the NT?",
                a: "The main off-grid challenges in the NT are wet season low generation, air conditioning load sizing, battery bank undersizing and generator backup planning. Darwin's wet season can reduce solar output by 70 to 90 per cent for days at a time. Oneroof Solar addresses all of these in system design — we size battery banks for real loads and include generator integration in every remote NT off-grid proposal."
              },
              {
                q: "How many solar panels do I need to go off-grid in the NT?",
                a: "Most standard remote NT homes with air conditioning need 10kW to 20kW of solar panels (approximately 20 to 40 panels) to meet daily energy needs across the full year including the wet season. Smaller cabins and holiday homes can manage with 5kW to 10kW. Stations and communities with higher loads may require 40kW to 100kW or more. Oneroof Solar calculates your specific requirements during the free assessment."
              },
              {
                q: "What size battery do I need for off-grid solar in the NT?",
                a: "For most remote NT homes, a battery bank providing 3 to 5 days of autonomy is recommended to cover Darwin's wet season overcast periods and allow for generator backup planning. A standard remote home using 20 to 40 kWh per day needs a 60 to 200kWh battery bank depending on desired autonomy days. Oneroof Solar sizes battery banks to your actual daily consumption rather than industry averages."
              },
              {
                q: "Do I need a backup generator with off-grid solar in Darwin?",
                a: "Yes, a backup generator is strongly recommended for off-grid properties in Darwin and across the NT. The wet season produces extended periods of low solar generation that battery banks alone cannot sustain. A properly integrated generator provides automatic backup when battery charge drops below a set threshold, ensuring uninterrupted power during the worst wet season conditions."
              },
              {
                q: "Can Oneroof Solar install off-grid systems in remote NT locations?",
                a: "Yes. Oneroof Solar has installed off-grid systems across remote NT locations including Katherine, Tennant Creek, the Barkly Tablelands, Kakadu region, Litchfield and remote Central NT. We coordinate remote transport, site access and on-site accommodation for installation crews as part of the project. Contact us with your property GPS coordinates for a remote NT assessment."
              }
            ].map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5BC94D] shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 14. SECTION 13 — FINAL CTA WITH FORM */}
      <section id="quote-form" className="py-16 sm:py-24 bg-[#0b100d] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] font-mono text-xs uppercase tracking-wider mb-3">
                  <FileText className="w-3.5 h-3.5" />
                  Free Remote Property Consultation
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                  Get a Free Off-Grid Solar Quote for Your NT Property
                </h2>
                <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                  Tell us about your remote NT property and we will design a complete off-grid solar system tailored to your location, power needs and budget.
                </p>
              </FadeIn>

              {/* Checkmarks */}
              <FadeIn delay={0.1}>
                <div className="space-y-3 pt-2">
                  {[
                    "Free remote property energy assessment",
                    "System sized to your actual appliance loads",
                    "Battery bank and generator recommendations included",
                    "STC rebate calculated and applied upfront",
                    "Transport and site access planning included",
                    "CEC-accredited off-grid installers"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span className="text-slate-200 text-sm sm:text-base font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn delay={0.2}>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Darwin Office</p>
                      <a href={`tel:${PRIMARY_PHONE_RAW}`} className="text-lg font-bold text-white hover:text-[#5BC94D] transition-colors">
                        0483 986 444
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Alice Springs Office</p>
                      <a href={`tel:${ALICE_PHONE_RAW}`} className="text-lg font-bold text-white hover:text-[#5BC94D] transition-colors">
                        0483 937 004
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 border border-[#5BC94D]/30 text-[#5BC94D] flex items-center justify-center shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</p>
                      <a href="mailto:info@oneroofsolar.com.au" className="text-base font-bold text-white hover:text-[#5BC94D] transition-colors">
                        info@oneroofsolar.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <div className="bg-slate-900/90 border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-[#5BC94D]/20 border border-[#5BC94D] text-[#5BC94D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-wide">Thank You for Reaching Out</h4>
                      <p className="text-slate-300 font-medium max-w-md mx-auto">
                        Your off-grid inquiry has been received. One of our NT off-grid specialists will contact you within 1 business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Name *</label>
                          <input 
                            type="text" 
                            required
                            placeholder="e.g. John Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone *</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="e.g. 0483 986 444"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email & Property Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="e.g. john@station.com.au"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Property Location *</label>
                          <input 
                            type="text" 
                            required
                            placeholder="suburb / GPS coordinates / town"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Property Type & Current Power Source */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Property Type</label>
                          <select 
                            value={formData.propertyType}
                            onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          >
                            <option value="Remote home">Remote home</option>
                            <option value="Station">Station</option>
                            <option value="Community">Community</option>
                            <option value="Cabin">Cabin</option>
                            <option value="Mining">Mining</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Current Power Source</label>
                          <select 
                            value={formData.currentPowerSource}
                            onChange={(e) => setFormData({...formData, currentPowerSource: e.target.value})}
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          >
                            <option value="Generator only">Generator only</option>
                            <option value="No power">No power</option>
                            <option value="Old solar system">Old solar system</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Generator Fuel Cost & Property Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Average Monthly Generator Fuel Cost</label>
                          <select 
                            value={formData.generatorFuelCost}
                            onChange={(e) => setFormData({...formData, generatorFuelCost: e.target.value})}
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          >
                            <option value="Under $200">Under $200</option>
                            <option value="$200-$500">$200-$500</option>
                            <option value="$500-$1,500">$500-$1,500</option>
                            <option value="Over $1,500">Over $1,500</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Property Size</label>
                          <select 
                            value={formData.propertySize}
                            onChange={(e) => setFormData({...formData, propertySize: e.target.value})}
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5BC94D] transition-colors"
                          >
                            <option value="Small home">Small home</option>
                            <option value="Standard home">Standard home</option>
                            <option value="Large home">Large home</option>
                            <option value="Station">Station</option>
                            <option value="Community">Community</option>
                          </select>
                        </div>
                      </div>

                      {formError && (
                        <p className="text-red-400 text-xs font-medium">{formError}</p>
                      )}

                      <Button 
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 font-black py-4 rounded-xl uppercase tracking-wider text-sm transition-all shadow-[0_4px_20px_rgba(91,201,77,0.3)] border-none"
                      >
                        {submitting ? "Submitting Request..." : "Get My Off-Grid Quote"}
                      </Button>

                      <p className="text-center text-xs text-slate-400 font-medium pt-2">
                        We will contact you within one business day. For urgent remote property enquiries call 0483 986 444.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
