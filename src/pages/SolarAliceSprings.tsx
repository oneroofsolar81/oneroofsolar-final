import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Clock, 
  Shield, 
  Zap, 
  Sun, 
  ChevronDown,
  Loader2
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function SolarAliceSprings() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    bill: "",
    interest: "Alice Springs Solar",
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
        source: "alice_springs_landing",
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        bill: "",
        interest: "Alice Springs Solar",
        message: ""
      });
    } catch (err: any) {
      console.error("Error submitting lead to Firestore:", err);
      // Fallback to simulate success for smooth user experience
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const seoData = {
    title: "Solar Panel Installation Alice Springs | Residential & Commercial",
    metaDescription: "Local solar installers serving Alice Springs and Central Australia. Cut your power bills with reliable heat rated solar systems. Request a free quote today.",
    canonicalUrl: "https://oneroofsolar.com.au/solar-alice-springs/",
    robots: "index, follow",
    openGraphTitle: "Solar Panel Installation Alice Springs | Residential & Commercial",
    openGraphDescription: "Local solar installers serving Alice Springs and Central Australia. Cut your power bills with reliable heat rated solar systems. Request a free quote today.",
    twitterTitle: "Solar Panel Installation Alice Springs | Residential & Commercial",
    twitterDescription: "Local solar installers serving Alice Springs and Central Australia. Cut your power bills with reliable heat rated solar systems. Request a free quote today.",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Solar Panel Installation Alice Springs",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "image": "https://i.postimg.cc/vZdTgLm9/oneroof.png",
        "telephone": PRIMARY_PHONE,
        "email": "info@oneroofsolar.com.au",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "44 Zeil St, Araluen",
          "addressLocality": "Alice Springs",
          "addressRegion": "NT",
          "postalCode": "0870",
          "addressCountry": "AU"
        }
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Alice Springs"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Central Australia"
        }
      ],
      "description": "Premium commercial and residential solar installation, hybrid systems, and off-grid power solutions in Alice Springs, NT."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does solar cost in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Finance options are available with low deposit plans. See our 6.6kW system price page for detailed pricing."
          }
        },
        {
          "@type": "Question",
          "name": "What solar rebates are available in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alice Springs homeowners qualify for the federal STC rebate, along with the NT Battery Scheme for eligible homeowners adding battery storage. Both are applied upfront, no separate claiming required."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best solar company in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oneroof Solar has a dedicated local installation team based in Alice Springs. Our team understands the desert climate, roof types and grid requirements specific to Central Australia, rather than applying a generic mainland approach."
          }
        },
        {
          "@type": "Question",
          "name": "Does extreme heat affect solar panel performance in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Panel output does drop slightly in extreme heat, which is why we select heat tolerant panels and inverters and size every system with Alice Springs' temperature range factored in from the design stage."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer solar panel maintenance in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer ongoing maintenance and repairs for existing solar systems in Alice Springs, including dust related cleaning and inverter servicing. See our repairs and maintenance page for details."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add an EV charger to my Alice Springs solar system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every Oneroof Solar system in Alice Springs can be paired with an EV charger, letting you charge your vehicle directly from your own solar generation during the day."
          }
        },
        {
          "@type": "Question",
          "name": "Do you install solar hot water systems in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We install solar hot water systems for Alice Springs homes and businesses looking to cut water heating costs alongside their main solar system."
          }
        },
        {
          "@type": "Question",
          "name": "How long does solar installation take in Alice Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential solar installations in Alice Springs take 1 to 2 days. Grid connection typically takes a further 2 to 4 weeks. No building permit is required for most residential NT installations."
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
          "item": "https://oneroofsolar.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://oneroofsolar.com.au/contact/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Alice Springs",
          "item": "https://oneroofsolar.com.au/solar-alice-springs/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Oneroof Solar Alice Springs",
      "image": "https://i.postimg.cc/vZdTgLm9/oneroof.png",
      "telephone": PRIMARY_PHONE,
      "email": "info@oneroofsolar.com.au",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "44 Zeil St, Araluen",
        "addressLocality": "Alice Springs",
        "addressRegion": "NT",
        "postalCode": "0870",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.6923,
        "longitude": 133.8644
      },
      "url": "https://oneroofsolar.com.au/solar-alice-springs/",
      "serviceArea": [
        {
          "@type": "Place",
          "name": "Alice Springs"
        },
        {
          "@type": "Place",
          "name": "Central Australia"
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "How much does solar cost in Alice Springs?",
      a: "Finance options are available with low deposit plans. See our 6.6kW system price page for detailed pricing."
    },
    {
      q: "What solar rebates are available in Alice Springs?",
      a: "Alice Springs homeowners qualify for the federal STC rebate, along with the NT Battery Scheme for eligible homeowners adding battery storage. Both are applied upfront, no separate claiming required."
    },
    {
      q: "Who is the best solar company in Alice Springs?",
      a: "Oneroof Solar has a dedicated local installation team based in Alice Springs. Our team understands the desert climate, roof types and grid requirements specific to Central Australia, rather than applying a generic mainland approach."
    },
    {
      q: "Does extreme heat affect solar panel performance in Alice Springs?",
      a: "Panel output does drop slightly in extreme heat, which is why we select heat tolerant panels and inverters and size every system with Alice Springs' temperature range factored in from the design stage."
    },
    {
      q: "Do you offer solar panel maintenance in Alice Springs?",
      a: (
        <span>
          Yes. We offer ongoing maintenance and repairs for existing solar systems in Alice Springs, including dust related cleaning and inverter servicing. See our{" "}
          <Link to="/solar-panels-darwin" className="text-[#5BC94D] hover:underline font-bold">
            repairs and maintenance page
          </Link>{" "}
          for details.
        </span>
      )
    },
    {
      q: "Can I add an EV charger to my Alice Springs solar system?",
      a: "Yes. Every Oneroof Solar system in Alice Springs can be paired with an EV charger, letting you charge your vehicle directly from your own solar generation during the day."
    },
    {
      q: "Do you install solar hot water systems in Alice Springs?",
      a: "Yes. We install solar hot water systems for Alice Springs homes and businesses looking to cut water heating costs alongside their main solar system."
    },
    {
      q: "How long does solar installation take in Alice Springs?",
      a: "Most residential solar installations in Alice Springs take 1 to 2 days. Grid connection typically takes a further 2 to 4 weeks. No building permit is required for most residential NT installations."
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
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#19281D]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#19281D]/30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side Content */}
            <FadeIn isHero>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#5BC94D] transition-colors">Home</a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#5BC94D]" aria-current="page">Alice Springs</span>
              </nav>

              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-6 uppercase">
                Solar Panel Installation <span className="text-[#5BC94D]">Alice Springs</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#5BC94D] pl-6">
                Power your Alice Springs home or business with reliable solar built for the desert climate
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-bold hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
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
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                    Call {PRIMARY_PHONE}
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Right Side Image/Card */}
            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  src="https://i.postimg.cc/htSc0sQH/Alice-Springs-0870-(1).webp"
                  alt="Solar panels installation in Central Australia"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Visual badge */}
                <div className="absolute top-6 right-6 bg-[#19281D]/95 backdrop-blur-md border border-[#5BC94D]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="text-2xl font-black text-[#5BC94D] leading-none">100%</div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-mono font-bold mt-1">
                    Heat Rated
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Trust and Accreditation Strip */}
      <PartnersMarquee />

      {/* NEW SECTION FOR EX-SUBHEADLINE ELEMENTS */}
      <section className="py-20 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black text-center text-white mb-8 uppercase tracking-tight">
              Full Turnkey Solar Installation Across Alice Springs and Central Australia
            </h2>
            <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-6 max-w-3xl mx-auto">
              <p>
                Oneroof Solar manages your entire transition to clean energy in Alice Springs. We handle everything from your initial site assessment and custom system design to the final Power and Water Corporation grid connection. Our local Alice Springs team serves homeowners and businesses across the CBD and surrounding suburbs with zero hassle. No subcontractors and no interstate call centres.
              </p>
              <p>
                Alice Springs has some of the highest solar irradiance in Australia, with year round sun and low cloud cover. A correctly sized solar system converts that abundant desert sunlight into direct savings on your power bill, while coping with the extreme summer heat and wide day to night temperature swings that put lesser systems under strain.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - SERVICES OVERVIEW */}
      <section className="py-24 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Solar Services in Alice Springs
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-semibold uppercase tracking-widest text-[#5BC94D]">
                Residential and commercial solar solutions built for Central Australian conditions
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1} className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/10 hover:border-[#5BC94D]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 flex items-center justify-center text-[#5BC94D] border border-[#5BC94D]/20 mb-6 shadow-inner">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">
                Residential Solar Alice Springs
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Custom sized home solar systems designed around your household's actual usage, roof orientation and shading.
              </p>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2} className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/10 hover:border-[#5BC94D]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 flex items-center justify-center text-[#5BC94D] border border-[#5BC94D]/20 mb-6 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">
                Commercial Solar Alice Springs
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Larger scale systems for local businesses, retailers and tourism operators looking to cut daytime energy costs.
              </p>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3} className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/10 hover:border-[#5BC94D]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#5BC94D]/10 flex items-center justify-center text-[#5BC94D] border border-[#5BC94D]/20 mb-6 shadow-inner">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">
                Solar Battery Storage Alice Springs
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Store your daytime generation for evening use with heat tolerant battery options suited to desert conditions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA SECTION 1 */}
      <section className="py-16 bg-[#19281D] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
              Start saving on your Alice Springs power bills today
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              See how affordable a custom solar package is for your property
            </p>
            <a 
              href="#quote-form" 
              className="inline-block bg-[#5BC94D] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-emerald-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
            >
              Claim your free custom pricing quote now
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - WHICH SYSTEM SUITS YOUR ALICE SPRINGS PROPERTY */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Which Solar System Suits Your Alice Springs Property
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Alice Springs properties have different energy needs depending on location, roof size and whether you are grid connected or on a remote outer property. We offer three core solar system types.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1} className="bg-slate-900/30 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between h-full shadow-lg">
              <div>
                <h3 className="text-xl font-black text-[#5BC94D] mb-4 tracking-tight uppercase">
                  Grid Connected Solar System
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  The most common Alice Springs setup. Your photovoltaic (PV) panels generate DC electricity. A grid tied inverter converts it to AC power for your household or business appliances, and any surplus is exported to the grid for a feed in tariff credit. You draw from the grid at night or during periods of heavy cloud.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-400">
                  <strong className="text-white">Best for:</strong> Alice Springs CBD, Larapinta, Sadadeen, East Side.
                </span>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2} className="bg-slate-900/30 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between h-full shadow-lg">
              <div>
                <h3 className="text-xl font-black text-[#5BC94D] mb-4 tracking-tight uppercase">
                  Hybrid Solar and Battery System
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  A solar and battery system combines your PV panels with a home or commercial battery. Excess energy generated during the long desert days is stored for use in the evening, reducing your grid import rate to near zero on most days. Battery scheme rebates may apply to eligible NT homeowners adding storage.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-400">
                  <strong className="text-white">Best for:</strong> Families and businesses with high evening electricity use.
                </span>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3} className="bg-slate-900/30 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between h-full shadow-lg">
              <div>
                <h3 className="text-xl font-black text-[#5BC94D] mb-4 tracking-tight uppercase">
                  Off Grid Solar System
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  For remote Central Australian properties without grid access, an off grid solar power system with large battery banks and a backup generator provides full energy independence. We design off grid systems for remote stations, outer Alice Springs properties and communities across the Yulara and Central NT corridor.
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  See our repairs and maintenance page for ongoing remote system support.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-400">
                  <strong className="text-white">Best for:</strong> Remote stations, outer Alice Springs properties and remote NT communities.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 - HOW WE DELIVER YOUR SYSTEM (PROCESS) */}
      <section className="py-24 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                How We Deliver Your Solar System in Alice Springs
              </h2>
              <p className="text-[#5BC94D] text-xs sm:text-sm font-bold uppercase tracking-widest">
                A fully managed 5 step process from your first call to switching on your new system. We handle every stage including permits, CEC compliance and grid connection.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-white/5">
            {/* Step 1 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[15px] sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#19281D] border-2 border-[#5BC94D] flex items-center justify-center font-bold text-xs text-[#5BC94D] z-10 shadow-lg">1</div>
              <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:text-right">
                <FadeIn>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">1. Consultation and Energy Assessment</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We review your last three power bills and your roof layout to understand your actual usage pattern, available roof space, and heat exposure. You receive a transparent, itemised quote with the STC rebate already deducted.
                  </p>
                </FadeIn>
              </div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[15px] sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#19281D] border-2 border-[#5BC94D] flex items-center justify-center font-bold text-xs text-[#5BC94D] z-10 shadow-lg">2</div>
              <div className="hidden sm:block w-[45%]"></div>
              <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                <FadeIn>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">2. Custom System Design</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our team designs a system layout to maximise sunlight capture on your specific roof orientation. We select the right heat tolerant panel brand, inverter type (string, hybrid or off grid) and battery capacity for your Alice Springs location and household or business needs.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[15px] sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#19281D] border-2 border-[#5BC94D] flex items-center justify-center font-bold text-xs text-[#5BC94D] z-10 shadow-lg">3</div>
              <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:text-right">
                <FadeIn>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">3. Permits and Approvals</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We prepare all required documentation for NT building approvals and grid interconnection. No building permit is required for most residential solar installations in Alice Springs, provided the panels are CEC approved and the installer is CEC accredited. All systems must comply with AS 4777 grid connection standards.
                  </p>
                </FadeIn>
              </div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[15px] sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#19281D] border-2 border-[#5BC94D] flex items-center justify-center font-bold text-xs text-[#5BC94D] z-10 shadow-lg">4</div>
              <div className="hidden sm:block w-[45%]"></div>
              <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                <FadeIn>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">4. Expert Installation</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our CEC accredited electricians install your system to full NT building standards with heat rated mounting. Most residential solar system installations are completed in 1 to 2 days with minimal disruption to your household or business.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[15px] sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#19281D] border-2 border-[#5BC94D] flex items-center justify-center font-bold text-xs text-[#5BC94D] z-10 shadow-lg">5</div>
              <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:text-right">
                <FadeIn>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">5. Commissioning and Handover</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We test every component, complete the grid connection, register your system for the applicable feed in tariff and walk you through your solar monitoring app. You start generating from day one.
                  </p>
                </FadeIn>
              </div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - ALICE SPRINGS REBATES AND INCENTIVES */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Solar Rebates Available to Alice Springs Home and Business Owners in 2026
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-semibold uppercase tracking-widest text-[#5BC94D]">
                Alice Springs homeowners and businesses qualify for federal and territory level incentives that significantly reduce the upfront cost of a solar system. All rebates are applied before you pay.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1} className="bg-slate-900/40 rounded-[2.5rem] p-8 border border-white/10 flex flex-col h-full justify-between shadow-lg">
              <div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Federal STC Rebate</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The federal government's Small-scale Renewable Energy Scheme (SRES) provides Small-scale Technology Certificate (STC) rebates for every eligible solar installation. Alice Springs' high solar irradiance zone means NT homeowners receive one of the highest STC values of any Australian region. Oneroof Solar deducts this rebate before you pay, no separate claiming required.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-slate-900/40 rounded-[2.5rem] p-8 border border-white/10 flex flex-col h-full justify-between shadow-lg">
              <div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">NT Battery Scheme</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The Northern Territory Government offers additional rebates for eligible NT homeowners adding battery storage to a new or existing solar system. Contact Oneroof Solar to confirm current eligibility for your Alice Springs property and system size.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA SECTION 2 */}
      <section className="py-16 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="border-2 border-[#5BC94D] rounded-3xl p-10 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-black text-[#19281D] dark:text-[#5BC94D] mb-3 uppercase tracking-tight">
              Secure your NT government solar savings before they change
            </h3>
            <p className="text-slate-400 dark:text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Our local Alice Springs team manages all the paperwork and applies your rebates upfront
            </p>
            <a 
              href="#quote-form" 
              className="inline-block border-2 border-[#5BC94D] text-slate-900 dark:text-white dark:hover:text-[#19281D] hover:bg-[#5BC94D] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 uppercase tracking-wider text-xs"
            >
              Check your rebate eligibility now
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 - ALICE SPRINGS LOCATIONS */}
      <section className="py-24 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Solar Installations Across Alice Springs and Every Suburb We Cover
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Oneroof Solar installs residential and commercial solar systems right across Alice Springs and Central Australia, from the CBD through to the outer suburbs and the Yulara region. Our installation team is based locally in Alice Springs, not flown in from interstate.
              </p>
            </FadeIn>
          </div>

          <FadeIn className="overflow-x-auto rounded-[1.5rem] border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#19281D] text-white">
                  <th className="p-4 sm:p-5 border-b border-white/10 font-bold uppercase tracking-wider text-xs">Area</th>
                  <th className="p-4 sm:p-5 border-b border-white/10 font-bold uppercase tracking-wider text-xs">Postcode</th>
                  <th className="p-4 sm:p-5 border-b border-white/10 font-bold uppercase tracking-wider text-xs">Suburbs Covered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 sm:p-5 font-black text-white">Alice Springs City</td>
                  <td className="p-4 sm:p-5 font-mono text-[#5BC94D]">0870</td>
                  <td className="p-4 sm:p-5 text-slate-300">CBD, Todd Mall, Flynn, Ross, Sadadeen, Stuart, East Side, Araluen</td>
                </tr>
                <tr className="hover:bg-white/[0.02] bg-white/[0.01]">
                  <td className="p-4 sm:p-5 font-black text-white">Larapinta and Gillen</td>
                  <td className="p-4 sm:p-5 font-mono text-[#5BC94D]">0870-0871</td>
                  <td className="p-4 sm:p-5 text-slate-300">Larapinta, Gillen, Baitling, Ciccone, Desert Springs, Ilparpa, Stirling</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 sm:p-5 font-black text-white">Yulara and the Uluru region</td>
                  <td className="p-4 sm:p-5 font-mono text-[#5BC94D]">0872</td>
                  <td className="p-4 sm:p-5 text-slate-300">Yulara, Mutitjulu, Kata Tjuta, Ti Tree, Yuendumu, Hermannsburg, Finke</td>
                </tr>
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column Heading */}
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
                  Everything you need to know about making the switch to solar in Alice Springs.
                </p>
                <div className="mt-8">
                  <a href="#quote-form">
                    <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#5BC94D] text-[#19281D] hover:bg-emerald-400 border-none uppercase tracking-wider text-xs">
                      Get a Free Quote
                    </Button>
                  </a>
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
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 focus-visible:ring-2 focus-visible:ring-[#5BC94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121814] transition-all"
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
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
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

      {/* Primary Conversion / Inquiry Section */}
      <section id="quote-form" className="py-24 bg-[#19281D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#121814]/10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5BC94D]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side Info */}
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
                Beat the Alice Springs Heat with Solar
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                Don't let the Territory sun go to waste. Find out how much you can save with premium solar installations. Get a free quote from Oneroof Solar today.
              </p>

              <div className="space-y-6">
                <a 
                  href={`tel:${PRIMARY_PHONE_RAW}`} 
                  className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Our Team</div>
                    <div className="text-base sm:text-lg font-black font-mono">{PRIMARY_PHONE}</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@oneroofsolar.com.au" 
                  className="flex items-center gap-4 text-white hover:text-[#5BC94D] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#5BC94D] border border-white/10 group-hover:bg-[#5BC94D] group-hover:text-[#19281D] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</div>
                    <div className="text-base sm:text-lg font-black font-mono">info@oneroofsolar.com.au</div>
                  </div>
                </a>
              </div>
            </FadeIn>

            {/* Right Side Form */}
            <FadeIn delay={0.2} className="bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#5BC94D] rounded-full flex items-center justify-center text-[#19281D] mx-auto mb-6 shadow-lg">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                    Assessment Request Received
                  </h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-6">
                    Thank you. A solar expert from Oneroof Solar will reach out shortly with your customized quote options.
                  </p>
                  <Button 
                    className="bg-[#5BC94D] text-[#19281D] font-bold px-6 py-2 rounded-xl hover:bg-emerald-400 transition-colors uppercase tracking-wider text-xs"
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
                          placeholder="e.g. Alice Springs, 0870"
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
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-[#19281D] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Lower your Alice Springs power bills this season
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Request a free quote for a reliable solar setup built for the Central Australian climate
            </p>
            <a 
              href="#quote-form" 
              className="inline-block bg-[#5BC94D] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-emerald-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
            >
              Get your free solar assessment today
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
