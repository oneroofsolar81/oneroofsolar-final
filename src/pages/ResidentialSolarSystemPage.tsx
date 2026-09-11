import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MapPin, 
  Grid, 
  Battery, 
  Power, 
  Sun,
  Shield,
  Zap,
  CheckCircle2,
  Loader2,
  ChevronRight
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { PackagesSection } from "@/src/components/PackagesSection";
import { FaqSection } from "@/src/components/FaqSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { PartnersMarquee } from "@/src/components/PartnersMarquee";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { QuoteForm } from "@/src/components/QuoteForm";

const serviceAreas = [
  {
    hub: "Darwin and Greater Darwin",
    postcodes: "0800, 0810, 0820",
    suburbs: [
      "Darwin CBD", "Larrakeyah", "Fannie Bay", "Stuart Park", "Nightcliff", 
      "Rapid Creek", "Coconut Grove", "Casuarina", "Tiwi", "Muirhead", 
      "Nakara", "Leanyer", "Winnellie", "Berrimah", "Marrara"
    ],
    linkText: "View Darwin Solar",
    status: "Primary Hub"
  },
  {
    hub: "Palmerston and Rosebery",
    postcodes: "0828-0839",
    suburbs: [
      "Durack", "Gray", "Woodroffe", "Farrar", "Archer", "Moulden", "Driver", 
      "Bellamack", "Bakewell", "Gunn", "Johnston", "Rosebery", "Zuccoli", "Marlow Lagoon"
    ],
    linkText: "View Palmerston Solar",
    status: "Active"
  },
  {
    hub: "Rural Darwin and Humpty Doo",
    postcodes: "0837-0841",
    suburbs: [
      "Humpty Doo", "Girraween", "Coolalinga", "Virginia", "Howard Springs", 
      "Berry Springs", "Darwin River", "Batchelor", "Wagait Beach", "Mandorah"
    ],
    linkText: "View Rural Darwin Solar",
    status: "Active"
  },
  {
    hub: "Litchfield region",
    postcodes: "0822, 0837-0841",
    suburbs: [
      "Litchfield Park", "Rum Jungle", "Acacia Hills", "Noonamah", "Hughes", 
      "Manton", "Freds Pass", "Dundee Beach", "Dundee Downs", "Lake Bennett"
    ],
    linkText: "View Litchfield Solar",
    status: "Active"
  },
  {
    hub: "Katherine",
    postcodes: "0845-0853",
    suburbs: [
      "Katherine CBD", "Tindal", "Manbulloo", "Binjari", "Adelaide River", 
      "Pine Creek", "Mataranka", "Daly Waters"
    ],
    linkText: "View Katherine Solar",
    status: "Regional"
  },
  {
    hub: "Kakadu region",
    postcodes: "0886",
    suburbs: [
      "Jabiru", "Gunbalanya", "Ramingining", "Milingimbi", "Warruwi", "Remote Specialists", "Off-Grid Specialists"
    ],
    linkText: "View Kakadu Solar",
    status: "Remote"
  },
  {
    hub: "Tennant Creek and Barkly",
    postcodes: "0861",
    suburbs: [
      "Tennant Creek", "Elliott", "Renner Springs", "Three Ways", "Ali Curung", "Darwin Corridor", "Alice Corridor"
    ],
    linkText: "View Tennant Creek Solar",
    status: "Regional"
  },
  {
    hub: "Alice Springs",
    postcodes: "0870-0872",
    suburbs: [
      "Alice Springs CBD", "Todd Mall", "Flynn", "Ross", "Sadadeen", "Araluen", 
      "Larapinta", "Gillen", "Braitling", "Ciccone", "Desert Springs", "Ilparpa"
    ],
    linkText: "View Alice Springs Solar",
    status: "2nd Hub"
  },
  {
    hub: "Yulara and Central NT",
    postcodes: "0872",
    suburbs: [
      "Yulara", "Mutitjulu", "Ti Tree", "Yuendumu", "Hermannsburg", "Finke", "Remote Systems", "Off-Grid Systems"
    ],
    linkText: "View Yulara Solar",
    status: "Remote"
  }
];

const allPostcodes = [
  "0800", "0810", "0812", "0820", "0822", "0828", "0829", "0830", "0832", 
  "0834", "0835", "0836", "0837", "0838", "0839", "0840", "0841", "0845", 
  "0846", "0847", "0850", "0852", "0853", "0861", "0870", "0872", "0886"
];

export function ResidentialSolarSystemPage() {
  // Inject JSON-LD Schema
  useEffect(() => {
    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Residential Solar Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Oneroof Solar",
          "image": "https://oneroofsolar.com.au/assets/images/home/logo-oneroof.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3/97 Pruen Rd",
            "addressLocality": "Berrimah",
            "addressRegion": "NT",
            "postalCode": "0828",
            "addressCountry": "AU"
          },
          "telephone": "0483 986 444",
          "url": "https://oneroofsolar.com.au/"
        },
        "description": "Get high efficiency home solar systems in Darwin and the NT. Cut your energy bills with reliable cyclone rated solar setups."
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a residential solar system cost in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 6.6kW residential solar system in Darwin costs between $9,320 and $10,200 after the federal STC rebate in 2026. A 10kW system with battery storage starts from around $18,500. Finance options start from $28 per week with $0 deposit. See our 6.6kW system price page for detailed pricing."
            }
          },
          {
            "@type": "Question",
            "name": "What solar rebates are available in the Northern Territory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NT homeowners qualify for the federal STC rebate worth up to $2,563 off a 6.6kW system in 2026. All eligible federal rebates are applied upfront on your quote, no separate claiming required."
            }
          },
          {
            "@type": "Question",
            "name": "Is 10kW solar enough to run a house in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For most Darwin homes with heavy air conditioning use, a 10kW system covers the majority of daytime energy needs. Larger households running pool pumps, multiple AC units or EV chargers may benefit from 13kW or more. Our team sizes every system to your actual Jacana Energy bills."
            }
          },
          {
            "@type": "Question",
            "name": "How long does solar installation take in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential solar installations in Darwin take 1 to 2 days for systems between 6.6kW and 13kW. Grid connection with Power and Water Corporation typically takes 2 to 4 additional weeks. No building permit is required for most residential NT installations."
            }
          },
          {
            "@type": "Question",
            "name": "Do solar panels work during Darwin's wet season?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Solar panels continue to generate electricity on overcast and rainy days, typically producing 10 to 25 per cent of rated output. We size every system using full-year averages across both wet and dry seasons. N-type panels are particularly effective in low-light wet season conditions."
            }
          },
          {
            "@type": "Question",
            "name": "What is the solar rebate in Alice Springs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Alice Springs homeowners qualify for the same federal STC rebate as Darwin, worth around $2,563 off a 6.6kW system in 2026. Alice Springs' high solar irradiance means excellent panel performance and fast payback periods. See our Alice Springs solar page."
            }
          },
          {
            "@type": "Question",
            "name": "Can I add battery storage to my residential solar system later?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every Oneroof Solar residential system is installed with a hybrid-ready inverter so battery storage can be added at any time. See our solar battery installation page."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose the best residential solar system for my NT home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best system depends on your quarterly energy bill, roof size and orientation, household size and whether you want battery storage. Our team reviews your last three Jacana Energy or Rimfire Energy bills and designs a system to your actual usage. Contact us for a free no-obligation assessment."
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
            "name": "Solar Systems",
            "item": "https://oneroofsolar.com.au/solar-systems"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Residential Solar Systems",
            "item": "https://oneroofsolar.com.au/solar-systems/residential-solar-system"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "image": "https://oneroofsolar.com.au/assets/images/home/logo-oneroof.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3/97 Pruen Rd",
          "addressLocality": "Berrimah",
          "addressRegion": "NT",
          "postalCode": "0828",
          "addressCountry": "AU"
        },
        "telephone": "0483 986 444",
        "url": "https://oneroofsolar.com.au/",
        "priceRange": "$$"
      }
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "residential-solar-schema";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("residential-solar-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const faqs = [
    {
      q: "How much does a residential solar system cost in Darwin?",
      a: "A 6.6kW residential solar system in Darwin costs between $9,320 and $10,200 after the federal STC rebate in 2026. A 10kW system with battery storage starts from around $18,500. Finance options start from $28 per week with $0 deposit. See our 6.6kW system price page for detailed pricing."
    },
    {
      q: "What solar rebates are available in the Northern Territory?",
      a: "NT homeowners qualify for the federal STC rebate worth up to $2,563 off a 6.6kW system in 2026. All eligible federal rebates are applied upfront on your quote, no separate claiming required."
    },
    {
      q: "Is 10kW solar enough to run a house in Darwin?",
      a: "Yes. For most Darwin homes with heavy air conditioning use, a 10kW system covers the majority of daytime energy needs. Larger households running pool pumps, multiple AC units or EV chargers may benefit from 13kW or more. Our team sizes every system to your actual Jacana Energy bills."
    },
    {
      q: "How long does solar installation take in Darwin?",
      a: "Most residential solar installations in Darwin take 1 to 2 days for systems between 6.6kW and 13kW. Grid connection with Power and Water Corporation typically takes 2 to 4 additional weeks. No building permit is required for most residential NT installations."
    },
    {
      q: "Do solar panels work during Darwin's wet season?",
      a: "Yes. Solar panels continue to generate electricity on overcast and rainy days, typically producing 10 to 25 per cent of rated output. We size every system using full-year averages across both wet and dry seasons. N-type panels are particularly effective in low-light wet season conditions."
    },
    {
      q: "What is the solar rebate in Alice Springs?",
      a: "Alice Springs homeowners qualify for the same federal STC rebate as Darwin, worth around $2,563 off a 6.6kW system in 2026. Alice Springs' high solar irradiance means excellent panel performance and fast payback periods. See our Alice Springs solar page."
    },
    {
      q: "Can I add battery storage to my residential solar system later?",
      a: "Yes. Every Oneroof Solar residential system is installed with a hybrid-ready inverter so battery storage can be added at any time. See our solar battery installation page."
    },
    {
      q: "How do I choose the best residential solar system for my NT home?",
      a: "The best system depends on your quarterly energy bill, roof size and orientation, household size and whether you want battery storage. Our team reviews your last three Jacana Energy or Rimfire Energy bills and designs a system to your actual usage. Contact us for a free no-obligation assessment."
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    bill: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
        source: "residential_solar_hero",
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        bill: "",
        message: ""
      });
    } catch (e: any) {
      console.error("Error submitting lead:", e);
      setErrorMsg("Failed to submit. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="residential-solar-root" className="relative overflow-x-clip bg-white text-slate-900">
      
      {/* SECTION 1: HERO SECTION */}
      <section id="hero-section" className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 bg-[#0A1118]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/80 to-transparent flex"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn isHero className="lg:sticky lg:top-28 lg:self-start">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-8">
                Residential Solar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                  Systems NT
                </span>
              </h1>
              <p id="hero-subheadline" className="text-xl text-slate-300 max-w-lg mb-8 font-medium border-l-4 border-[#8cc63f] pl-6 leading-relaxed">
                Power your home with high quality solar and cut your electricity bills from day one
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  id="hero-primary-cta"
                  size="lg"
                  className="rounded-full px-8 bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 border-none font-bold transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(91,201,77,0.3)] uppercase tracking-wider"
                  asChild
                >
                  <Link to="/contact">
                    Request Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  id="hero-secondary-cta"
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-white border-white/20 font-bold hover:bg-white/10 hover:text-white transition-all h-14 hover:-translate-y-1"
                  asChild
                >
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                    Call {PRIMARY_PHONE}
                  </a>
                </Button>
              </div>

              {/* Social Proof Badge / Customer Rating */}
              <div className="mt-10 flex flex-wrap items-center gap-4 bg-slate-950/40 backdrop-blur-md border border-white/10 py-3 px-4 rounded-2xl w-fit">
                <div className="flex -space-x-2.5">
                  <img className="w-8 h-8 rounded-full border-2 border-[#0A1118] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Darwin Homeowner 1" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#0A1118] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Darwin Homeowner 2" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#0A1118] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Darwin Homeowner 3" referrerPolicy="no-referrer" />
                  <div className="w-8 h-8 rounded-full border-2 border-[#0A1118] bg-[#8cc63f] text-[#19281D] text-[10px] font-black flex items-center justify-center">
                    +500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-wider mt-0.5 uppercase">
                    Loved by Darwin homeowners
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative w-full max-w-xl mx-auto lg:ml-auto">
              <div className="w-full aspect-square bg-gradient-to-br from-[#8cc63f]/10 to-brand-600/10 rounded-full blur-3xl absolute inset-0 animate-pulse pointer-events-none"></div>
              
              <QuoteForm 
                title="Get Your Free Quote" 
                defaultInterest="Residential Solar Panels" 
                source="residential_solar_page"
              />
            </FadeIn>
          </div>

          {/* Trust Benefits Bar (Spans full-width nicely under the two main grid columns) */}
          <FadeIn delay={0.4} className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white">
              <div className="bg-slate-950/50 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-slate-950/80 hover:border-[#8cc63f]/30 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(91,201,77,0.1)] group">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/10 border border-[#8cc63f]/30 flex items-center justify-center text-[#8cc63f] shrink-0 group-hover:bg-[#8cc63f]/20 transition-all">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8cc63f]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-wide uppercase leading-tight">
                  $0 Deposit Available
                </span>
              </div>

              <div className="bg-slate-950/50 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-slate-950/80 hover:border-[#8cc63f]/30 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(91,201,77,0.1)] group">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/10 border border-[#8cc63f]/30 flex items-center justify-center text-[#8cc63f] shrink-0 group-hover:bg-[#8cc63f]/20 transition-all">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8cc63f]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-wide uppercase leading-tight">
                  Battery Storage Specialists
                </span>
              </div>

              <div className="bg-slate-950/50 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-slate-950/80 hover:border-[#8cc63f]/30 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(91,201,77,0.1)] group">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/10 border border-[#8cc63f]/30 flex items-center justify-center text-[#8cc63f] shrink-0 group-hover:bg-[#8cc63f]/20 transition-all">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8cc63f]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-wide uppercase leading-tight">
                  Cyclone-Rated Systems
                </span>
              </div>

              <div className="bg-slate-950/50 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-slate-950/80 hover:border-[#8cc63f]/30 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(91,201,77,0.1)] group">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/10 border border-[#8cc63f]/30 flex items-center justify-center text-[#8cc63f] shrink-0 group-hover:bg-[#8cc63f]/20 transition-all">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8cc63f]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-wide uppercase leading-tight">
                  10yr Workmanship Warranty
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certification/Logo Strip Section */}
      <PartnersMarquee />

      {/* SECTION 2: TURNKEY SERVICE SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8 uppercase tracking-tight">
              Full Turnkey Residential Solar System Installation Across the NT
            </h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
              <p>
                Oneroof Solar manages your entire transition to clean energy. We handle everything from your initial site assessment and custom system design to the final Power and Water Corporation grid connection. Our local Darwin and Alice Springs teams serve homeowners across Palmerston and remote communities with zero hassle. No subcontractors and no interstate call centres.
              </p>
              <p>
                NT homes are among the highest electricity users in Australia due to year-round air conditioning. A correctly sized residential solar panel system converts Darwin's abundant peak sun hours into direct savings on your Jacana Energy or Rimfire Energy bill, typically paying for itself within 4 to 7 years.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: SYSTEM PACKAGES */}
      <PackagesSection 
        title="Residential Solar System Packages" 
        subheadline="Select a custom sized package built to deliver maximum savings for your NT home" 
        subtitle="Custom Packages"
      />

      {/* CTA SECTION 1 */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] p-12 text-center rounded-[2.5rem] border border-emerald-950 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8cc63f]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                Start saving on your home electricity bills today
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto font-medium">
                See how affordable a custom home solar package is for your property
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_15px_rgba(91,201,77,0.25)] uppercase tracking-wider"
              >
                Claim your free custom pricing quote now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: WHICH SYSTEM SUITS YOUR NT HOME */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-[#19281D] font-bold text-xs mb-6 border border-brand-100 uppercase tracking-widest shadow-sm">
                <Zap className="w-4 h-4 text-[#8cc63f]" /> System Selector
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Which Residential Solar System Suits Your NT Home
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                NT homes have different energy needs depending on location, household size and whether you are grid-connected or remote. We offer three core residential solar system types.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Grid-Connected */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/80 hover:border-[#8cc63f]/30 transition-all duration-300 h-full flex flex-col hover:shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-[#19281D] mb-6 border border-brand-100">
                  <Grid className="w-6 h-6 text-[#8cc63f]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-[#19281D] transition-colors">
                  Grid-Connected Solar System
                </h3>
                <div className="text-slate-600 leading-relaxed font-medium space-y-4 flex-grow mb-8">
                  <p>
                    The most common residential solar setup. Your photovoltaic (PV) panels generate DC electricity. A grid-tied inverter converts it to AC power for your household appliances, and any surplus is exported to the Jacana Energy or Rimfire Energy grid for a feed-in tariff credit. You draw from the grid at night or during extended cloud cover in the wet season.
                  </p>
                  <p className="text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 text-[#19281D] font-bold">
                    Best for: Darwin City, Palmerston, Alice Springs residential areas.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Hybrid */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/80 hover:border-[#8cc63f]/30 transition-all duration-300 h-full flex flex-col hover:shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-[#19281D] mb-6 border border-brand-100">
                  <Battery className="w-6 h-6 text-[#8cc63f]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-[#19281D] transition-colors">
                  Hybrid Residential Solar and Battery System
                </h3>
                <div className="text-slate-600 leading-relaxed font-medium space-y-4 flex-grow mb-8">
                  <p>
                    A residential solar and battery system combines your PV panels with a home battery such as Sungrow or Tesla Powerwall. Excess energy generated during the day is stored for use in the evening, reducing your grid import rate to near zero on most days.
                  </p>
                  <p className="text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 text-[#19281D] font-bold">
                    Best for: Families with high evening electricity use.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Off-Grid */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/80 hover:border-[#8cc63f]/30 transition-all duration-300 h-full flex flex-col hover:shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-[#19281D] mb-6 border border-brand-100">
                  <Power className="w-6 h-6 text-[#8cc63f]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-[#19281D] transition-colors">
                  Off-Grid Residential Solar System
                </h3>
                <div className="text-slate-600 leading-relaxed font-medium space-y-4 flex-grow mb-8">
                  <p>
                    For remote NT properties without Power and Water Corporation grid access, an off-grid residential solar power system with large battery banks and a backup generator provides full energy independence. We design off-grid systems for remote stations, rural Darwin River properties, Kakadu region homes and communities across the NT corridor including Katherine, Tennant Creek and the Barkly region.
                  </p>
                  <p className="text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 text-[#19281D] font-bold">
                    See our repairs and maintenance page for ongoing remote system support.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE DELIVER YOUR SYSTEM (PROCESS) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                How We Deliver Your Residential Solar System
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                A fully managed 5-step process from your first call to switching on your new system. We handle every stage including permits, safety compliance and Power and Water Corporation grid connection.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "1. Consultation and Energy Assessment",
                desc: "We review your last three Jacana Energy or Rimfire Energy bills and your roof layout to understand your actual usage pattern, available roof space, and any cyclone-strapping constraints. You receive a transparent, itemised quote with the STC rebate already deducted."
              },
              {
                num: "2",
                title: "2. Custom System Design",
                desc: "Our engineers design a system layout to maximise sunlight capture on your specific roof orientation. We select the right N-type panel brand (AIKO, REC or Jinko), inverter type (string, hybrid or off-grid) and battery capacity for your NT location and household needs."
              },
              {
                num: "3",
                title: "3. Permits and Approvals",
                desc: "We prepare all required documentation for NT building approvals and Power and Water Corporation interconnection. No building permit is required for most residential solar installations in Darwin or Alice Springs, provided standard compliance conditions are met. All systems must comply with AS 4777 grid-connection standards."
              },
              {
                num: "4",
                title: "4. Expert Installation",
                desc: "Our licensed NT electricians install your system to full NT building standards with cyclone-rated mounting. Most 6.6kW to 13kW residential solar system installations are completed in 1 to 2 days with minimal disruption to your household."
              },
              {
                num: "5",
                title: "5. Commissioning and Handover",
                desc: "We test every component, complete the Power and Water Corporation grid connection, register your system for the Jacana Energy feed-in tariff and walk you through your solar monitoring app. You start generating from day one."
              }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex gap-6 sm:gap-8 bg-slate-50/50 p-8 rounded-3xl border border-slate-150 relative overflow-hidden group hover:bg-white hover:shadow-xl hover:border-[#8cc63f]/20 transition-all duration-300">
                  <div className="text-5xl sm:text-6xl font-black text-slate-200 select-none w-16 text-center shrink-0 leading-none group-hover:text-[#8cc63f]/10 transition-colors">
                    0{step.num}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#19281D] mb-3 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: NT REBATES AND INCENTIVES */}
      <section className="py-24 bg-[#0A1118] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                Solar Rebates Available to NT Homeowners in 2026
              </h2>
              <p className="text-lg text-slate-300 font-medium">
                NT homeowners qualify for federal incentives that significantly reduce the upfront cost of a residential solar system. All rebates are applied before you pay.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Federal STC */}
            <FadeIn delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#8cc63f]/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] flex items-center justify-center mb-6 border border-[#8cc63f]/20">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                  Federal STC Rebate (Up to $2,563)
                </h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  The federal government's Small-scale Renewable Energy Scheme (SRES) provides Small-scale Technology Certificate (STC) rebates for every eligible residential solar installation. Darwin's high solar irradiance zone means NT homeowners receive one of the highest STC values of any Australian capital. A 6.6kW system in Darwin qualifies for around $1,800 to $2,563 off the upfront cost in 2026. Oneroof Solar deducts this rebate before you pay, no separate claiming required.
                </p>
              </div>
            </FadeIn>

            {/* Feed-in Tariff Benefits */}
            <FadeIn delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#8cc63f]/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] flex items-center justify-center mb-6 border border-[#8cc63f]/20">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                  Jacana Energy Feed-in Tariffs
                </h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  Export your excess clean solar power back to the NT electricity grid and earn credits on your power bills. We handle full interconnection and registration with Power and Water Corporation and Jacana Energy so you start benefiting immediately.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA SECTION 2 */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="border-4 border-[#8cc63f] p-12 text-center rounded-[2.5rem] bg-slate-50/50 shadow-lg relative overflow-hidden group">
              <h3 className="text-2xl sm:text-3xl font-black text-[#19281D] mb-4 uppercase tracking-tight">
                Secure your NT government solar savings before they change
              </h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto font-medium">
                Our local team manages all the paperwork and applies your rebates upfront
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#0A1118] text-white hover:bg-[#0A1118]/95 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg uppercase tracking-wider"
              >
                Check your rebate eligibility now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: NT LOCATIONS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="text-xs font-bold tracking-widest text-[#8cc63f] uppercase mb-3 block">WHERE WE SERVE</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">
                Solar Installations Across <span className="text-[#8cc63f]">Darwin & the NT</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Oneroof Solar installs residential solar systems across Greater Darwin, Palmerston, Alice Springs, Katherine, and surrounding Northern Territory communities. We are the only NT-based solar company with dedicated installation teams in both Darwin and Alice Springs.
              </p>
            </FadeIn>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {serviceAreas.map((area, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-[#8cc63f]/30 transition-all duration-300 min-h-[380px]">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-11 h-11 bg-[#8cc63f]/10 rounded-xl flex items-center justify-center border border-[#8cc63f]/20 text-[#8cc63f]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/25 uppercase tracking-widest">
                      {area.status}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">{area.hub}</h3>
                    <span className="text-[10px] font-bold text-[#8cc63f] uppercase tracking-wider block mb-4">
                      Postcode: {area.postcodes}
                    </span>
                    
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {area.suburbs.map((suburb, i) => (
                        <span key={i} className="text-[11px] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full hover:bg-white/10 transition-colors">
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={area.hub === "Alice Springs" ? "/solar-alice-springs/" : "/contact"}
                    className="text-sm font-bold text-[#8cc63f] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all mt-auto"
                  >
                    {area.linkText} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}

            {/* Card 10: Not Sure We Cover Your Area? */}
            <FadeIn delay={0.5} className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-r from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl group hover:border-[#8cc63f]/30 transition-all duration-300 min-h-[160px] w-full">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#8cc63f]/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex-grow max-w-2xl mb-6 md:mb-0">
                  <h3 className="text-2xl font-black text-white mb-3">Not Sure We Cover Your Area?</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    If you are in the Northern Territory, we almost certainly do. Call us and we will confirm within one business day.
                  </p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <Button size="lg" className="rounded-xl w-full md:w-auto px-8 h-12 text-xs font-bold bg-[#8cc63f] hover:bg-brand-400 text-slate-900 uppercase tracking-wider shadow-[0_0_15px_rgba(91,201,77,0.2)] group-hover:scale-[1.02] transition-transform duration-300" asChild>
                    <Link to="/contact">Check My Area</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Postcode Display Section */}
          <FadeIn delay={0.6}>
            <div className="bg-slate-50/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl py-5 px-6 sm:px-8 border border-slate-200/60 shadow-sm max-w-5xl mx-auto mt-16">
              <div className="flex flex-col gap-3.5 items-start text-left">
                <span className="text-[10px] font-extrabold text-[#8cc63f] uppercase tracking-widest">
                  ALL NT POSTCODES:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-slate-800 text-[11px] font-bold">
                  {allPostcodes.map((p, idx) => (
                    <span key={idx} className="bg-white border border-[#8cc63f]/20 hover:border-[#8cc63f]/40 hover:shadow-sm transition-all duration-300 px-2.5 py-1 rounded-full text-slate-800 shadow-sm">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <FaqSection faqs={faqs} heading="Frequently Asked Questions" />

      <GoogleReviews />

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] p-16 text-center rounded-[3rem] border border-emerald-950 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                Lower your home electricity bills this season
              </h3>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Request a free quote for a reliable home solar setup built for the NT climate
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-sm"
              >
                Get your free solar assessment today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
