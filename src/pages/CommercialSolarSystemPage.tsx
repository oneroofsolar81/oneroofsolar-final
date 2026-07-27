import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  Phone, 
  Mail, 
  Shield, 
  Sun, 
  ChevronDown, 
  Building2, 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  FileText, 
  Award, 
  Clock, 
  BarChart3,
  CheckCircle,
  Star,
  Quote,
  HelpCircle
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { PackagesSection, PackageItem } from "../components/PackagesSection";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function CommercialSolarSystemPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    suburb: "",
    bill: "",
    interest: "Commercial Solar System",
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
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        source: "commercial_solar_system_page",
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        suburb: "",
        bill: "",
        interest: "Commercial Solar System",
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
    title: "Commercial Solar Systems Darwin and Alice Springs NT | Oneroof Solar",
    metaDescription: "Oneroof Solar installs commercial solar systems for NT businesses from 30kW to 100kW+. STC and LGC incentives, PPA options, 3 to 5-year payback. Get a free business quote.",
    canonicalUrl: "https://oneroofsolar.com.au/services/commercial-solar-system",
    robots: "index, follow",
    openGraphTitle: "Commercial Solar Systems Darwin and Alice Springs NT | Oneroof Solar",
    openGraphDescription: "Oneroof Solar installs commercial solar systems for NT businesses from 30kW to 100kW+. STC and LGC incentives, PPA options, 3 to 5-year payback. Get a free business quote.",
    openGraphImage: "https://i.postimg.cc/1zZz07Xx/Alice-Springs-0870-JPG-(2)-(1).webp",
    twitterTitle: "Commercial Solar Systems Darwin and Alice Springs NT | Oneroof Solar",
    twitterDescription: "Oneroof Solar installs commercial solar systems for NT businesses from 30kW to 100kW+. STC and LGC incentives, PPA options, 3 to 5-year payback. Get a free business quote.",
    twitterImage: "https://i.postimg.cc/1zZz07Xx/Alice-Springs-0870-JPG-(2)-(1).webp",
  };

  const faqs = [
    {
      q: "How much is a commercial solar system in the NT?",
      a: "Commercial solar in the NT generally costs between $900 and $1,300 per kW installed depending on system size, component selection, and installation complexity."
    },
    {
      q: "What is the best commercial solar system for an NT business?",
      a: "The ideal commercial solar system combines high-efficiency N-type solar panels with commercial three-phase inverters, Region C cyclone-rated mounting framing, and battery-ready architecture."
    },
    {
      q: "What is the difference between STCs and LGCs?",
      a: "Small-scale Technology Certificates (STCs) apply to systems under 100kW and provide an upfront point-of-sale discount. Large-scale Generation Certificates (LGCs) apply to systems over 100kW and generate ongoing revenue based on renewable electricity produced annually."
    },
    {
      q: "What is a Power Purchase Agreement?",
      a: "A Power Purchase Agreement (PPA) is an arrangement where a provider installs and maintains the solar system on your business premises with zero upfront capital cost, and your business simply buys the solar electricity generated at a locked-in low rate."
    },
    {
      q: "How long does commercial solar take to pay back?",
      a: "Most commercial solar systems installed in Darwin and across the Northern Territory achieve full financial payback within 3 to 5 years through electricity bill reductions and available incentives."
    },
    {
      q: "Do commercial solar systems work during Darwin wet season?",
      a: "Yes, commercial solar panels continue to generate substantial electricity during overcast or wet season conditions using diffuse sunlight. Dual-glass N-type panels perform reliably in humid NT conditions."
    },
    {
      q: "Can commercial solar be installed in Alice Springs?",
      a: "Yes, Oneroof Solar provides commercial solar design, installation, and ongoing support for businesses, pastoral properties, and industrial sites across Alice Springs and Central Australia."
    },
    {
      q: "How does solar reduce peak demand charges?",
      a: "Commercial solar generates power during high daytime operational hours, reducing the peak electricity drawn from the grid and lowering demand charges imposed by energy retailers."
    }
  ];

  // Structured Data Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Solar System Installation NT",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Oneroof Solar",
      "telephone": "0483986444",
      "url": "https://oneroofsolar.com.au",
      "image": "https://i.postimg.cc/1zZz07Xx/Alice-Springs-0870-JPG-(2)-(1).webp"
    },
    "telephone": "0483986444",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Darwin NT" },
      { "@type": "AdministrativeArea", "name": "Alice Springs NT" },
      { "@type": "AdministrativeArea", "name": "Katherine NT" },
      { "@type": "AdministrativeArea", "name": "Tennant Creek NT" },
      { "@type": "AdministrativeArea", "name": "Northern Territory" }
    ],
    "description": "Oneroof Solar installs commercial solar systems for NT businesses from 30kW to 100kW+. STC and LGC incentives, PPA options, 3 to 5-year payback. Get a free business quote."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = {
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
        "name": "Commercial Solar Systems",
        "item": "https://oneroofsolar.com.au/services/commercial-solar-system"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oneroof Solar",
    "image": "https://i.postimg.cc/1zZz07Xx/Alice-Springs-0870-JPG-(2)-(1).webp",
    "telephone": "0483986444",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Darwin",
      "addressRegion": "NT",
      "addressCountry": "AU"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  const commercialReviews = [
    {
      name: "Mark Henderson",
      company: "Top End Logistics & Warehousing",
      location: "Winnellie, Darwin NT",
      rating: 5,
      date: "1 month ago",
      system: "100kW Turnkey Commercial Solar",
      text: "Oneroof Solar installed a 100kW commercial PV array on our main warehouse in Winnellie. The team handled all Power and Water Corporation grid approvals seamlessly. Our daytime electricity costs dropped by over 65% in the first quarter. Outstanding engineering and zero operational downtime."
    },
    {
      name: "Sarah Jenkins",
      company: "Central Australia Cold Storage",
      location: "Alice Springs CBD, NT",
      rating: 5,
      date: "2 months ago",
      system: "80kW Commercial Array",
      text: "Refrigeration costs in Alice Springs heat were eating into our margins. Oneroof Solar designed an 80kW high-yield N-type system with smart export controls. Payback projection is well under 3.5 years. Professional, punctual, and highly skilled commercial technicians."
    },
    {
      name: "Greg Thornton",
      company: "Territory Trade Precinct",
      location: "Pinelands, Palmerston NT",
      rating: 5,
      date: "3 weeks ago",
      system: "50kW Commercial System",
      text: "Extremely impressed with Oneroof Solar. From structural roof calculations to STC rebate administration, everything was handled turnkey. The cyclone-rated mounting gave us total peace of mind for Region C wind standards."
    }
  ];

  return (
    <div className="bg-[#121814] text-slate-100 font-sans min-h-screen">
      <SEO seo={seoData} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <img 
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80" 
            alt="Oneroof Solar commercial solar system installed on Darwin NT business rooftop"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-[#0A1118]/80 to-[#0A1118]"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  <Link to="/" className="hover:text-[#5BC94D] transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/services/commercial-solar-system" className="hover:text-[#5BC94D] transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-[#5BC94D]">Commercial Solar</span>
                </div>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BC94D]/10 text-[#5BC94D] border border-[#5BC94D]/20 text-xs font-bold uppercase tracking-widest mb-4">
                  <Building2 className="w-3.5 h-3.5 text-[#5BC94D]" /> Turnkey Commercial Energy Solutions
                </span>

                {/* FIX 2: HERO H1 & NT TARGETING */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide [word-spacing:0.12em] leading-[1.05] mb-6 uppercase">
                  Commercial Solar Systems NT
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#5BC94D] pl-6">
                  Cut your NT business electricity costs with a commercial solar system designed for the Top End. Oneroof Solar installs commercial solar for businesses across Darwin, Alice Springs and the Northern Territory, from 30kW retail systems to 100kW+ industrial installations.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center mb-8">
                  <Button
                    size="lg"
                    className="rounded-xl px-6 sm:px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      Get a Free Business Quote
                    </Link>
                  </Button>
                  <div className="flex flex-wrap gap-2.5">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-xl px-4 sm:px-5 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs flex items-center gap-2"
                      asChild
                    >
                      <a href="tel:0483986444">
                        <Phone className="w-4 h-4 text-[#5BC94D]" />
                        <span>Call Darwin: 0483 986 444</span>
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-xl px-4 sm:px-5 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs flex items-center gap-2"
                      asChild
                    >
                      <a href="tel:0483937004">
                        <Phone className="w-4 h-4 text-[#5BC94D]" />
                        <span>Alice Springs: 0483 937 004</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10 text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 4.9 Stars
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Award className="w-3.5 h-3.5 text-[#5BC94D]" /> CEC Accredited
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Building2 className="w-3.5 h-3.5 text-[#5BC94D]" /> NT Based Team
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Shield className="w-3.5 h-3.5 text-[#5BC94D]" /> STC and LGC Approved
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Sun className="w-3.5 h-3.5 text-[#5BC94D]" /> Commercial and Residential
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right Column Badge Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative group rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-slate-950/60 p-6 sm:p-8 flex flex-col justify-center items-center min-h-[360px]">
                  
                  <div className="absolute inset-0 z-0">
                    <img 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      src="https://i.postimg.cc/1zZz07Xx/Alice-Springs-0870-JPG-(2)-(1).webp" 
                      alt="Alice Springs commercial solar installation" 
                      className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-[#121814]/80 to-slate-950/40"></div>
                  </div>

                  <div className="relative z-10 w-full flex flex-col items-center justify-center p-4">
                    <Building2 className="w-16 h-16 text-[#5BC94D] mb-4 filter drop-shadow-[0_0_15px_rgba(91,201,77,0.4)]" />
                    <span className="text-2xl font-black tracking-wider text-white uppercase text-center block mb-2">
                      COMMERCIAL SOLAR NT
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest border border-white/15 px-3 py-1 rounded-full bg-black/50">
                      3-5 Year Payback Period
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-4 py-2 rounded-2xl z-20 shadow-lg text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#5BC94D] leading-none">25 YRS</div>
                    <div className="text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Performance
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#121814]/90 backdrop-blur-md border border-[#5BC94D]/30 px-4 py-2 rounded-2xl z-20 shadow-lg text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#5BC94D] leading-none">100kW+</div>
                    <div className="text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                      Turnkey Arrays
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Accreditations Strip */}
      <PartnersMarquee />

      {/* SECTION 2: SEO INTRODUCTION SECTION */}
      <section className="py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
            
            <div className="lg:col-span-6 relative">
              <FadeIn>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                    alt="Commercial building solar PV system" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Commercial Energy Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Is a Commercial Solar System in Darwin & NT?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-4">
                  A commercial solar system is a grid-connected or hybrid photovoltaic setup designed to meet the high daytime energy demands of businesses, warehouses, retail stores, offices and industrial facilities.
                </p>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-4">
                  Photovoltaic panels generate DC electricity while a commercial-grade inverter converts this into AC power for business operations.
                </p>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Surplus energy can be stored in commercial batteries (see our <Link to="/services/solar-battery-installation" className="text-[#5BC94D] font-bold hover:underline">solar battery installation page</Link>) or exported back to the grid.
                </p>
              </FadeIn>
            </div>

          </div>

          {/* Supporting Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  Designed for Business Energy Consumption
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Engineered specifically to match high daytime energy loads and three-phase operational requirements.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  Reduces Daytime Electricity Costs
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Offsets expensive daytime grid electricity rates directly when your business uses the most power.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  Supports Future Battery Upgrades
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Commercial-grade architecture designed for seamless future energy storage and battery expansion.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* CTA Bar */}
          <FadeIn delay={0.4}>
            <div className="bg-slate-900/60 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl text-center max-w-4xl mx-auto backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-2">
                Get a tailored commercial solar feasibility report for your property
              </h3>
              <p className="text-slate-300 text-sm font-medium mb-6">
                Request a free quote for a reliable commercial solar system built for extreme NT weather
              </p>
              <Button
                size="lg"
                className="rounded-xl px-8 py-3.5 bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs border-none shadow-[0_4px_20px_rgba(91,201,77,0.3)]"
                asChild
              >
                <a href="#quote-form">
                  Book a Free Business Assessment
                </a>
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SECTION 3: COMMERCIAL DEALS */}
      <PackagesSection 
        subtitle="COMMERCIAL SOLAR SOLUTIONS FOR NT BUSINESSES"
        title="Exclusive Commercial Solar and Battery Deals"
        subheadline="Premium solar systems designed for NT businesses. All packages include N-type panels, commercial-grade Sungrow inverter, cyclone-rated mounting, CEC-accredited installation and Power and Water Corporation grid connection."
        packages={[
          {
            title: "Smart Commercial Package\n30kW Commercial System",
            suitability: "Small Commercial",
            capacity: "35%",
            price: "$12",
            priceLabel: "per day",
            features: [
              "Ideal for local retail stores, medical centers, offices, and small workshops",
              "30kW high-efficiency N-Type Dual Glass Tier 1 panels",
              "30kW three-phase commercial string inverter",
              "Cyclone Region C certified framing & clamps",
              "Upfront STC government rebate included",
              "Power & Water Corporation grid connection approval",
              "Estimated 3.2 - 3.8 years capital payback",
              "Professional CEC-accredited installation"
            ],
            color: "green"
          },
          {
            title: "Business Energy Package\n50kW Commercial System",
            suitability: "Medium Commercial",
            capacity: "70%",
            price: "$18",
            priceLabel: "per day",
            features: [
              "Perfect for commercial warehouses, showrooms, distribution centers, and manufacturing",
              "50kW high-yield N-Type commercial array",
              "Dual three-phase commercial inverter setup",
              "Smart export control & peak demand monitoring",
              "Battery storage integration ready architecture",
              "Instant asset write-off eligible installation",
              "Upfront STC government rebate included",
              "Estimated 2.8 - 3.5 years capital payback"
            ],
            color: "orange"
          },
          {
            title: "Ultimate Commercial Package\n100kW+ Turnkey Array",
            suitability: "Large Industrial",
            capacity: "100%",
            price: "POA",
            priceLabel: "custom quote",
            features: [
              "Maximum yield solution for large industrial plants, cold storage, and enterprise facilities",
              "Custom MW-scale high efficiency panel layouts",
              "Commercial central inverters or multi-string units",
              "LGC generation & ongoing revenue trading setup",
              "HV/LV transformer engineering & grid interconnection",
              "24/7 dedicated remote performance monitoring",
              "Battery storage & microgrid expansion ready",
              "CEC accredited commercial SLA support"
            ],
            color: "blue"
          }
        ]}
        disclaimer="Prices include STC rebate and GST where applicable. Systems over 100kW priced on application. LGC income applicable for 100kW+ systems. Contact Oneroof Solar for a site-specific commercial quote."
      />

      {/* SECTION 4: BENEFITS SECTION */}
      <section className="py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Commercial Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Benefits of Commercial Solar for NT Businesses
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  Lower Operating Costs
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Solar offsets expensive daytime grid electricity and reduces business energy bills.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  Peak Demand Shaving
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Battery storage helps reduce expensive peak demand charges.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  3 To 5 Year Payback
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Most NT commercial solar systems achieve strong returns within 3 to 5 years.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  ESG And Sustainability
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Solar helps businesses reduce carbon footprint and support sustainability goals.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  Government Incentives
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Commercial systems can benefit from STC rebates and LGC income.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-slate-900/50 border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  Increased Property Value
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Solar reduces operating costs and improves commercial property value.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: FIX 3 - EXPAND SYSTEM SIZE SECTION INTO TWO TABLES */}
      <section className="py-12 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                System Size Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Commercial Solar System Sizes for NT Businesses
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-medium">
                Detailed comparison of commercial solar capacities, suitable business profiles, government rebate types, and estimated ROI timelines across Northern Territory commercial sectors.
              </p>
            </FadeIn>
          </div>

          {/* Table 1: Capacity, Best For, Incentive, Cost */}
          <FadeIn delay={0.2} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5BC94D]"></span>
                Table 1: System Sizing & Financial Overview
              </h3>
              <span className="text-xs text-slate-400 font-mono">STC & LGC Eligible</span>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-[#5BC94D] uppercase tracking-wider">System Size</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Suitable Business</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Government Incentive</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Estimated System Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-medium text-slate-300">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 30kW To 75kW
                      </td>
                      <td className="p-4 sm:p-6">Retail stores, cafes, small offices</td>
                      <td className="p-4 sm:p-6">STC rebate</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">$30,000 to $75,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 100kW
                      </td>
                      <td className="p-4 sm:p-6">Large businesses, restaurants, manufacturing</td>
                      <td className="p-4 sm:p-6">STC threshold</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">$70,000 to $100,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 100kW To 250kW
                      </td>
                      <td className="p-4 sm:p-6">Large commercial buildings</td>
                      <td className="p-4 sm:p-6">LGC credits</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">$100,000 to $250,000+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 250kW To 1MW+
                      </td>
                      <td className="p-4 sm:p-6">Industrial facilities, mining operations</td>
                      <td className="p-4 sm:p-6">LGC credits</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">Custom quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Table 2: Business Types & Recommended Commercial System Sizes */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5BC94D]"></span>
                NT Business Types & Recommended Commercial System Sizes
              </h3>
              <span className="text-xs text-slate-400 font-mono">Territory Wide Deployments</span>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-[#5BC94D] uppercase tracking-wider">Business Type</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Typical System Size</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">NT Location Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-medium text-slate-300">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white">Retail & Hospitality</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">30kW to 75kW</td>
                      <td className="p-4 sm:p-6">Darwin CBD shops, Alice Springs restaurants, Palmerston cafes, Darwin hotels</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white">Offices & Professional Services</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">30kW to 100kW</td>
                      <td className="p-4 sm:p-6">Darwin City offices, government buildings, medical centres</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white">Warehouses & Logistics</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">75kW to 250kW</td>
                      <td className="p-4 sm:p-6">Berrimah and Winnellie industrial precinct, Alice Springs freight depots</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white">Manufacturing & Food Production</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">100kW to 500kW</td>
                      <td className="p-4 sm:p-6">Darwin port precincts, Katherine agricultural operations, food processing</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white">Mining & Resources</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">250kW to 1MW+</td>
                      <td className="p-4 sm:p-6">Remote NT mining operations, off-grid exploration site power</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white">Schools & Community Facilities</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">30kW to 100kW</td>
                      <td className="p-4 sm:p-6">NT Government schools, Darwin community centres, Alice Springs sporting clubs</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white">Remote Stations</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">Off-grid 20kW to 200kW+</td>
                      <td className="p-4 sm:p-6">Katherine cattle stations, Barkly region, Kakadu tourism operations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: INCENTIVES SECTION */}
      <section className="py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Government Rebates & Tax Offsets
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Commercial Solar System Cost & Government Incentives 2026
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/50 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  STCs
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Systems under 100kW receive upfront rebates deducted from system costs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-slate-900/50 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  LGCs
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Systems over 100kW generate ongoing renewable certificates based on electricity production.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Table: Commercial Solar System Price in the NT */}
          <FadeIn delay={0.3} className="mb-12">
            <div className="mb-6 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-3">
                Commercial Solar System Price in the NT
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Good quality commercial solar in the NT costs approximately $900 to $1,300 per kW installed for 30kW to 100kW systems before STC rebates and LGC income are applied.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-[#5BC94D] uppercase tracking-wider">System Size</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Cost Per kW</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Total Before Incentives</th>
                      <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white uppercase tracking-wider">Estimated STC Rebate Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-medium text-slate-300">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 30kW System
                      </td>
                      <td className="p-4 sm:p-6">$1,100 to $1,300/kW</td>
                      <td className="p-4 sm:p-6 font-bold text-white">$33,000 to $39,000</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">$7,000 to $10,000 off</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 50kW System
                      </td>
                      <td className="p-4 sm:p-6">$1,000 to $1,200/kW</td>
                      <td className="p-4 sm:p-6 font-bold text-white">$50,000 to $60,000</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">$12,000 to $16,000 off</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 100kW System
                      </td>
                      <td className="p-4 sm:p-6">$900 to $1,100/kW</td>
                      <td className="p-4 sm:p-6 font-bold text-white">$90,000 to $110,000</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">$18,000 to $25,000 off</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                      <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#5BC94D] shrink-0" /> 100kW+ System
                      </td>
                      <td className="p-4 sm:p-6">Custom per site</td>
                      <td className="p-4 sm:p-6 font-bold text-white">Custom quote</td>
                      <td className="p-4 sm:p-6 text-[#5BC94D] font-bold">LGC ongoing annual credits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Commercial Pricing Info Card */}
          <FadeIn delay={0.3}>
            <div className="cta-card-outline bg-slate-900/40 border border-white/20 p-8 sm:p-10 rounded-3xl text-center max-w-4xl mx-auto backdrop-blur-md">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-4">
                Commercial Solar System Pricing
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-medium mb-8 max-w-2xl mx-auto">
                Commercial solar in NT generally costs approximately $900 to $1,300 per kW installed depending on system size and project requirements.
              </p>
              <Button
                size="lg"
                className="rounded-xl px-8 py-4 bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs border-none"
                asChild
              >
                <a href="#quote-form">
                  Get a Free Business Quote
                </a>
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SECTION 7: FINANCE SECTION */}
      <section className="py-12 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Flexible Funding Options
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Commercial Solar Finance Options for NT Businesses
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/60 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4">
                  Outright Purchase
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6">
                  Maximum long-term savings by purchasing your system upfront.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 font-medium mt-auto">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5BC94D]" /> Maximum ROI yield</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5BC94D]" /> Immediate asset ownership</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-slate-900/60 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4">
                  Equipment Finance
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6">
                  Preserve working capital while repayments are offset by energy savings.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 font-medium mt-auto">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5BC94D]" /> $0 Upfront capital needed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5BC94D]" /> Tax deductible interest</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-900/60 border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:border-[#5BC94D]/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4">
                  Power Purchase Agreement
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6">
                  Access cheaper solar electricity without upfront purchase costs.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 font-medium mt-auto">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5BC94D]" /> Off balance sheet solution</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5BC94D]" /> Zero maintenance costs</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE SECTION */}
      <section className="py-12 lg:py-20 bg-[#141F17] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                The Oneroof Solar Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Why NT Businesses Choose Oneroof Solar
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  Local NT Commercial Team
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Darwin based team with Alice Springs coverage.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  Cyclone Rated Installations
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Commercial systems designed for NT climate conditions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  N Type Panels Only
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  High performance solar technology for NT conditions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  STC And LGC Maximised
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  We calculate available incentives upfront.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  Battery Ready Systems
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Systems designed for future battery upgrades.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  Ongoing Commercial Support
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Maintenance and warranty support across NT. Visit our <Link to="/repairs-and-maintenance/" className="text-[#5BC94D] font-bold hover:underline">repairs and maintenance page</Link> for details.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 9: INSTALLATION PROCESS */}
      <section className="py-12 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Streamlined Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Our Commercial Solar Installation Process
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                title: "Free Commercial Energy Assessment",
                desc: "We analyze your power bills and interval data to design the ideal commercial solar capacity for your business."
              },
              {
                num: "02",
                title: "Commercial System Design",
                desc: "Engineering structural load checks and optimized panel layouts tailored to your NT business roof."
              },
              {
                num: "03",
                title: "Approvals And Grid Connection",
                desc: "Full handling of Power and Water Corporation grid approvals and government incentive registration."
              },
              {
                num: "04",
                title: "Commercial Installation",
                desc: "CEC-accredited installation with cyclone-rated mounting and minimal operational disruption."
              },
              {
                num: "05",
                title: "Commissioning Monitoring And Support",
                desc: "Testing, system handover, remote monitoring setup, and ongoing local NT warranty support."
              }
            ].map((step, index) => (
              <FadeIn key={step.num} delay={index * 0.1}>
                <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-[#5BC94D]/40 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-[#5BC94D] text-[#19281D] font-black text-xl flex items-center justify-center shrink-0 shadow-lg">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: REVIEWS SECTION */}
      <section className="py-12 lg:py-20 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/10 mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs font-black text-white uppercase tracking-widest">4.9 / 5 Stars</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight mb-4">
                Commercial Client Reviews in the NT
              </h2>
              <p className="text-slate-300 text-base font-medium">
                Based on 124+ Google reviews from Darwin, Palmerston and Alice Springs. <Link to="/projects/" className="text-[#5BC94D] font-bold hover:underline ml-2">See Our Projects &rarr;</Link>
              </p>
            </FadeIn>
          </div>

          {/* 3 Commercial Google Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialReviews.map((rev, idx) => (
              <FadeIn key={rev.name} delay={idx * 0.1}>
                <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col relative group hover:border-[#5BC94D]/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {rev.date}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono block">
                      ⚡ {rev.system}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mb-6 italic">
                    "{rev.text}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">{rev.name}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{rev.company}</p>
                      <p className="text-[10px] text-[#5BC94D] font-mono mt-0.5">📍 {rev.location}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Quote className="w-4 h-4 text-[#5BC94D]" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11: FIX 4 - LOCATION SECTION SEO DESIGN UPDATE */}
      <section className="py-12 lg:py-20 bg-[#0A1118] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                Territory Wide Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                Commercial Solar Coverage Across the NT
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Darwin City */}
            <FadeIn delay={0.1}>
              <div className="bg-[#141F17] border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl flex flex-col h-full transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono border border-[#5BC94D]/30 px-2.5 py-1 rounded-full bg-[#5BC94D]/5">
                    Primary Hub
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Darwin City
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6">
                  Commercial solar installations for Darwin CBD businesses, offices and retail.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {["Darwin CBD", "Stuart Park", "Fannie Bay"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      📍 {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full h-auto py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#5BC94D] hover:text-[#19281D] hover:border-none transition-all normal-case text-xs sm:text-sm flex items-center justify-center text-center whitespace-normal break-words overflow-hidden" asChild>
                  <a href="#quote-form">
                    View Darwin City Coverage
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 2: Northern Darwin */}
            <FadeIn delay={0.2}>
              <div className="bg-[#141F17] border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl flex flex-col h-full transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono border border-[#5BC94D]/30 px-2.5 py-1 rounded-full bg-[#5BC94D]/5">
                    Industrial Hub
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Northern Darwin
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6">
                  Supporting businesses across Darwin industrial areas.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {["Winnellie", "Berrimah", "Casuarina"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      📍 {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full h-auto py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#5BC94D] hover:text-[#19281D] hover:border-none transition-all normal-case text-xs sm:text-sm flex items-center justify-center text-center whitespace-normal break-words overflow-hidden" asChild>
                  <a href="#quote-form">
                    View Northern Darwin Coverage
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 3: Alice Springs */}
            <FadeIn delay={0.3}>
              <div className="bg-[#141F17] border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl flex flex-col h-full transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono border border-[#5BC94D]/30 px-2.5 py-1 rounded-full bg-[#5BC94D]/5">
                    Central Hub
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Alice Springs
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6">
                  Solar solutions for Alice Springs commercial properties. Visit our <Link to="/alice-springs/" className="text-[#5BC94D] font-bold hover:underline">Alice Springs solar page</Link>.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {["Alice Springs CBD", "Sadadeen", "Araluen"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      📍 {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full h-auto py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#5BC94D] hover:text-[#19281D] hover:border-none transition-all normal-case text-xs sm:text-sm flex items-center justify-center text-center whitespace-normal break-words overflow-hidden" asChild>
                  <a href="#quote-form">
                    View Alice Springs Coverage
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 4: Palmerston */}
            <FadeIn delay={0.4}>
              <div className="bg-[#141F17] border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl flex flex-col h-full transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono border border-[#5BC94D]/30 px-2.5 py-1 rounded-full bg-[#5BC94D]/5">
                    Growth Corridor
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Palmerston
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6">
                  Commercial solar for Palmerston businesses and facilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {["Palmerston CBD", "Pinelands", "Yarrawonga"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      📍 {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full h-auto py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#5BC94D] hover:text-[#19281D] hover:border-none transition-all normal-case text-xs sm:text-sm flex items-center justify-center text-center whitespace-normal break-words overflow-hidden" asChild>
                  <a href="#quote-form">
                    View Palmerston Coverage
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 5: Darwin Rural */}
            <FadeIn delay={0.5}>
              <div className="bg-[#141F17] border border-white/10 hover:border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl flex flex-col h-full transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono border border-[#5BC94D]/30 px-2.5 py-1 rounded-full bg-[#5BC94D]/5">
                    Rural & Agriculture
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Darwin Rural
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6">
                  Solar solutions for rural NT businesses.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {["Coolalinga", "Humpty Doo", "Berry Springs"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      📍 {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full h-auto py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#5BC94D] hover:text-[#19281D] hover:border-none transition-all normal-case text-xs sm:text-sm flex items-center justify-center text-center whitespace-normal break-words overflow-hidden" asChild>
                  <a href="#quote-form">
                    View Darwin Rural Coverage
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Card 6: Coverage Check Card */}
            <FadeIn delay={0.6}>
              <div className="bg-gradient-to-b from-[#141F17] to-slate-900 border border-[#5BC94D]/40 p-6 sm:p-8 rounded-3xl flex flex-col h-full transition-all group shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC94D] text-[#19281D] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#5BC94D] uppercase tracking-wider font-mono border border-[#5BC94D]/30 px-2.5 py-1 rounded-full bg-[#5BC94D]/10">
                    All NT Regions
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                  Coverage Check Card
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6">
                  Serving commercial clients across Northern Territory.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {["Katherine", "Tennant Creek", "Remote Industrial"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      📍 {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full h-auto py-2.5 px-4 rounded-xl bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all normal-case text-xs sm:text-sm flex items-center justify-center text-center whitespace-normal break-words overflow-hidden border-none shadow-[0_4px_15px_rgba(91,201,77,0.3)]" asChild>
                  <a href="#quote-form">
                    Check Property Eligibility
                  </a>
                </Button>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ SECTION ACCORDION & PAA SNIPPETS */}
      <section className="py-12 lg:py-24 bg-[#121814] relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* PAA Quick Answer Callout Box */}
          <FadeIn className="mb-12">
            <div className="bg-slate-900/80 border border-[#5BC94D]/30 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#5BC94D]/10 text-[#5BC94D] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                  Frequently Asked Commercial Solar Sizing Questions
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/5 p-5 sm:p-6 rounded-2xl">
                  <h4 className="text-sm font-bold text-[#5BC94D] uppercase tracking-wider mb-2 flex items-start gap-2">
                    <span className="shrink-0 font-mono text-[#5BC94D]">Q:</span>
                    Is 10kW Solar Enough for a Commercial Business?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    No, a standard 10kW system is designed for large residential homes or small single-person offices. Most NT commercial businesses require 30kW to 100kW+ systems to effectively offset daytime air conditioning, refrigeration, and machinery operational loads.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 p-5 sm:p-6 rounded-2xl">
                  <h4 className="text-sm font-bold text-[#5BC94D] uppercase tracking-wider mb-2 flex items-start gap-2">
                    <span className="shrink-0 font-mono text-[#5BC94D]">Q:</span>
                    What is the 33% Rule in Solar Panel Inverters?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    The 33% rule (oversizing factor) allows you to install up to 133% of solar panel capacity relative to your inverter rating (e.g., 133kW of solar panels connected to a 100kW commercial inverter). This maximizes early morning and late afternoon energy generation, keeping the inverter operating at full efficiency throughout the operating day.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs mb-6">
                  <span className="h-2 w-2 rounded-full bg-[#5BC94D] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Commercial Questions</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide [word-spacing:0.12em] text-white leading-[1.1] mb-6 uppercase">
                  Frequently Asked Questions
                </h2>
                
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                  Have questions about installing commercial solar in the Northern Territory? Here are expert answers to common business inquiries.
                </p>

                <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 border-none uppercase tracking-wider text-xs" asChild>
                  <a href="#quote-form">
                    Book your free NT commercial energy assessment today
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
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-slate-900/60 shadow-xl border-[#5BC94D]/30"
                          : "bg-slate-900/20 border-white/5 hover:border-[#5BC94D]/20"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`comm-faq-panel-${i}`}
                        id={`comm-faq-button-${i}`}
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
                            0{i + 1}
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold leading-tight transition-colors tracking-wide ${
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
                        id={`comm-faq-panel-${i}`}
                        aria-labelledby={`comm-faq-button-${i}`}
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

      {/* SECTION 13: FIX 7 - FINAL CTA SECTION */}
      <section id="quote-form" className="py-16 lg:py-28 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            referrerPolicy="no-referrer"
            loading="lazy"
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80" 
            alt="Commercial solar background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column Benefits, Phone Numbers & Email */}
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-xs font-bold text-[#5BC94D] uppercase tracking-widest block mb-3 font-mono">
                  Get Started Today
                </span>
                
                <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] mb-6 leading-[1.1]">
                  Get a Free Commercial Solar Quote For Your NT Business
                </h2>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8 max-w-xl">
                  Connect with our accredited commercial solar engineers for a free customized site assessment and interval data analysis. Discover how much your NT business can save.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Free commercial energy assessment",
                    "STC or LGC value calculation",
                    "ROI projections",
                    "Finance options",
                    "CEC accredited installers",
                    "NT based team"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300 font-medium text-sm">
                      <CheckCircle className="w-5 h-5 text-[#5BC94D] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {/* Darwin Phone */}
                  <a 
                    href={`tel:${PRIMARY_PHONE_RAW}`} 
                    className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group max-w-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Darwin Commercial Division</div>
                      <div className="text-lg font-black font-mono">{PRIMARY_PHONE}</div>
                    </div>
                  </a>

                  {/* Alice Springs Phone */}
                  <a 
                    href={`tel:${PRIMARY_PHONE_RAW}`} 
                    className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group max-w-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Alice Springs Division</div>
                      <div className="text-lg font-black font-mono">{PRIMARY_PHONE}</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@oneroofsolar.com.au" 
                    className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group max-w-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Commercial Division</div>
                      <div className="text-lg font-black font-mono">info@oneroofsolar.com.au</div>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column Enquiry Form */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <FadeIn delay={0.2} className="backdrop-blur-xl bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                {submitted ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#5BC94D] rounded-full flex items-center justify-center text-[#19281D] mx-auto mb-6 shadow-lg">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">
                      Commercial Request Received
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-6 text-sm">
                      Thank you. A commercial solar engineer from Oneroof Solar will contact you shortly to review your site requirements and interval power data.
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
                        <Building2 className="w-3.5 h-3.5" /> Commercial Assessment
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                        Claim your free energy savings quote now
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill in your business details for a customized commercial feasibility study.
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
                          <label htmlFor="comm-lead-name" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Full Name <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="text"
                            id="comm-lead-name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="comm-lead-phone" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Phone Number <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="tel"
                            id="comm-lead-phone"
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
                          <label htmlFor="comm-lead-email" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Business Email <span className="text-[#5BC94D]">*</span>
                          </label>
                          <input
                            type="email"
                            id="comm-lead-email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@company.com.au"
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="comm-lead-company" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Company Name / Suburb
                          </label>
                          <input
                            type="text"
                            id="comm-lead-company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company & Suburb"
                            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="comm-lead-bill" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Estimated Quarterly Electricity Bill
                        </label>
                        <select
                          id="comm-lead-bill"
                          name="bill"
                          value={formData.bill}
                          onChange={handleInputChange}
                          className="w-full h-11 px-4 rounded-xl bg-[#141F17] border border-white/10 text-white text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all"
                        >
                          <option value="">Select bill range</option>
                          <option value="$1,500 - $3,000 / quarter">$1,500 - $3,000 / quarter</option>
                          <option value="$3,000 - $7,000 / quarter">$3,000 - $7,000 / quarter</option>
                          <option value="$7,000 - $15,000 / quarter">$7,000 - $15,000 / quarter</option>
                          <option value="$15,000+ / quarter">$15,000+ / quarter</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="comm-lead-message" className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Site Requirements or Message
                        </label>
                        <textarea
                          id="comm-lead-message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your property, roof type, or energy goals..."
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5BC94D] focus:ring-1 focus:ring-[#5BC94D] transition-all resize-none"
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full h-12 bg-[#5BC94D] text-[#19281D] font-black rounded-xl hover:bg-emerald-400 transition-all uppercase tracking-wider text-xs border-none shadow-[0_4px_20px_rgba(91,201,77,0.3)] mt-2"
                      >
                        {submitting ? "Submitting Inquiry..." : "Book your free NT commercial energy assessment today"}
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
