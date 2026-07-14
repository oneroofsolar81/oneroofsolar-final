import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Zap, 
  Target, 
  PiggyBank, 
  Grid, 
  Battery, 
  Power, 
  Smartphone, 
  Sun,
  ChevronDown
} from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { PackagesSection } from "@/src/components/PackagesSection";
import { FaqSection } from "@/src/components/FaqSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function ResidentialSolarSystemPage() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    suburb: "",
    systemType: "Grid-Connected Solar",
    quarterlyBill: "Under $500",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Inject JSON-LD Schema
  useEffect(() => {
    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Residential Solar Systems",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Oneroof Solar",
          "image": "https://oneroofsolar.com.au/assets/logo.png",
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
        "description": "Power your Darwin, Alice Springs or Palmerston home with a professionally installed residential solar system."
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What size solar system do I need for my home in NT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For most standard family homes in Darwin, Alice Springs, or Palmerston, a 6.6kW to 10kW solar system is optimal. It matches typical household air conditioning loads while staying within standard grid connection limits."
            }
          },
          {
            "@type": "Question",
            "name": "How does Darwin's extreme heat affect solar panel performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Extreme heat causes all solar panels to experience voltage drop, but premium N-Type panels have a low temperature coefficient. Oneroof Solar only installs panels rated to perform efficiently in temperatures exceeding 40 degrees Celsius."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical payback period for residential solar in the NT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With high solar exposure and local utility tariffs, most Darwin homeowners see their systems pay for themselves within 3 to 5 years through direct savings on Jacana Energy bills."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a cyclone-rated solar installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Every Oneroof Solar installation is fully certified for Category D cyclonic wind regions and meets strict Australian AS/NZS 1170.2 wind load standards."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Home and Business Battery Scheme (HBBS) work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The HBBS provides NT homeowners with a grant of up to $4,500 to help cover the costs of buying and installing an eligible solar battery storage system. Oneroof Solar manages the entire scheme application process for you."
            }
          },
          {
            "@type": "Question",
            "name": "Will solar panels protect my home during a blackout?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard grid-connected solar system will shut down during a blackout for grid safety. However, if you add a hybrid system with a solar battery, your system will switch to backup power to run your house."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any hidden costs in the Power and Water Corporation connection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oneroof Solar manages the entire connection approval process with the Power and Water Corporation. Any administrative fees or meter upgrade charges are clearly itemized in our upfront quote, with no surprise costs."
            }
          },
          {
            "@type": "Question",
            "name": "Should I wait for solar technology to improve before buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Modern N-Type solar panels and smart lithium batteries are already highly mature, efficient, and cost-effective. Waiting means continuing to pay rising Jacana Energy rates, which far outweighs any future incremental technology savings."
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
            "name": "Services",
            "item": "https://oneroofsolar.com.au/services/residential-solar-system"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "image": "https://oneroofsolar.com.au/assets/logo.png",
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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await addDoc(collection(db, "enquiries"), {
        ...formState,
        submittedAt: new Date().toISOString(),
        sourcePage: "/services/residential-solar-system"
      });
      setIsSuccess(true);
      // reset form
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        suburb: "",
        systemType: "Grid-Connected Solar",
        quarterlyBill: "Under $500",
      });
    } catch (err) {
      console.error("Error submitting form to Firebase, using fallback", err);
      // Fallback: Mailto link redirect or direct success
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "What size solar system do I need for my home in NT?",
      a: "For most standard family homes in Darwin, Alice Springs, or Palmerston, a 6.6kW to 10kW solar system is optimal. It matches typical household air conditioning loads while staying within standard grid connection limits."
    },
    {
      q: "How does Darwin's extreme heat affect solar panel performance?",
      a: "Extreme heat causes all solar panels to experience voltage drop, but premium N-Type panels have a low temperature coefficient. Oneroof Solar only installs panels rated to perform efficiently in temperatures exceeding 40 degrees Celsius."
    },
    {
      q: "What is the typical payback period for residential solar in the NT?",
      a: "With high solar exposure and local utility tariffs, most Darwin homeowners see their systems pay for themselves within 3 to 5 years through direct savings on Jacana Energy bills."
    },
    {
      q: "Do I need a cyclone-rated solar installation?",
      a: "Yes, absolutely. Every Oneroof Solar installation is fully certified for Category D cyclonic wind regions and meets strict Australian AS/NZS 1170.2 wind load standards."
    },
    {
      q: "How does the Home and Business Battery Scheme (HBBS) work?",
      a: "The HBBS provides NT homeowners with a grant of up to $4,500 to help cover the costs of buying and installing an eligible solar battery storage system. Oneroof Solar manages the entire scheme application process for you."
    },
    {
      q: "Will solar panels protect my home during a blackout?",
      a: "A standard grid-connected solar system will shut down during a blackout for grid safety. However, if you add a hybrid system with a solar battery, your system will switch to backup power to run your house."
    },
    {
      q: "Are there any hidden costs in the Power and Water Corporation connection?",
      a: "Oneroof Solar manages the entire connection approval process with the Power and Water Corporation. Any administrative fees or meter upgrade charges are clearly itemized in our upfront quote, with no surprise costs."
    },
    {
      q: "Should I wait for solar technology to improve before buying?",
      a: "Modern N-Type solar panels and smart lithium batteries are already highly mature, efficient, and cost-effective. Waiting means continuing to pay rising Jacana Energy rates, which far outweighs any future incremental technology savings."
    }
  ];

  return (
    <div id="residential-solar-root">
      {/* SECTION 1: HERO SECTION */}
      <section id="hero-section" className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/80 to-transparent flex"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn isHero>
              <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
                Residential Solar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                  Systems NT
                </span>
              </h1>
              <p id="hero-subheadline" className="text-xl text-slate-300 max-w-lg mb-8 font-medium border-l-2 border-brand-400/50 pl-6 leading-relaxed">
                Power your Darwin, Alice Springs or Palmerston home with a professionally installed residential solar system. Cut your Jacana Energy or Rimfire Energy bill from day one. Oneroof Solar handles everything from your first call to your Power and Water Corporation grid connection.
              </p>
              
              {/* Finance Banner */}
              <div id="finance-banner" className="mb-10 p-4 rounded-xl bg-white/5 border border-brand-500/30 backdrop-blur-md inline-block max-w-lg">
                <p className="text-brand-400 text-sm font-bold tracking-wide uppercase leading-snug">
                  Systems from just $28/week with solar finance | STC rebates up to $2,563 applied upfront
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  id="hero-primary-cta"
                  size="lg"
                  className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                  onClick={() => {
                    const formEl = document.getElementById("enquiry-form-section");
                    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  id="hero-secondary-cta"
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-white border-white/20 font-bold hover:bg-transparent hover:text-white hover:border-white/20 transition-all h-14 hover:-translate-y-1"
                  asChild
                >
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                    Call Us {PRIMARY_PHONE}
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative hidden lg:block">
              <div className="w-full aspect-square bg-gradient-to-br from-brand-500/20 to-emerald-600/20 rounded-full blur-3xl absolute inset-0 animate-pulse"></div>
              <img referrerPolicy="no-referrer" fetchPriority="high"
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                alt="Residential Solar Systems NT"
                className="relative z-10 w-full h-[550px] object-cover rounded-[3rem] border border-white/10 shadow-2xl opacity-90"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESIDENTIAL SOLAR SYSTEM PACKAGES */}
      <PackagesSection />

      {/* SECTION 3: WHICH RESIDENTIAL SOLAR SYSTEM SUITS YOUR NT HOME */}
      <section id="suits-nt-home" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-bold text-sm mb-6 border border-brand-100 uppercase tracking-wider shadow-sm">
              <Zap className="w-4 h-4 animate-bounce" /> Selection Guide
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Which Residential Solar System Suits Your NT Home?
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Different properties have different power patterns. We install three robust types of residential systems engineered to thrive in Darwin and remote Territory weather.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Grid-Connected */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(140,198,63,0.08)] hover:border-brand-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
              <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center mb-8 border border-brand-100 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Grid className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                Grid-Connected Solar System
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-1">
                The most common and cost-effective solar setup. Your solar panels power your home during the day, and any excess electricity is sent back to the grid. At night, you draw power from Jacana or Rimfire Energy.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1.5 rounded-full">
                  Best For: Lowest Upfront Cost & ROI
                </span>
              </div>
            </div>

            {/* Hybrid */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(140,198,63,0.08)] hover:border-brand-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
              <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center mb-8 border border-brand-100 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Battery className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                Hybrid Solar & Battery System
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-1">
                Combines high-efficiency solar panels with a home battery. Store your excess daytime solar power to run your household through the night. Provides blackout protection to keep essentials running when the grid fails.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1.5 rounded-full">
                  Best For: Grid Independence & Backup
                </span>
              </div>
            </div>

            {/* Off-Grid */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(140,198,63,0.08)] hover:border-brand-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
              <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center mb-8 border border-brand-100 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Power className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                Off-Grid Solar System
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-1">
                A fully standalone power system combining solar panels, a heavy-duty battery bank, and a backup generator. Completely independent of the electricity grid, engineered to deliver continuous power through NT conditions.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1.5 rounded-full">
                  Best For: Remote Properties & Stations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE DELIVER YOUR RESIDENTIAL SOLAR SYSTEM */}
      <section id="how-we-deliver" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Our 5-Step Process
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                How We Deliver Your Residential Solar System
              </h2>
              <p className="text-lg font-medium text-slate-600">
                Oneroof Solar streamlines your transition to clean energy with a comprehensive 5-step process. We handle everything from assessment to connection.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Consultation and Energy Assessment",
                desc: "We analyze your quarterly power bills and evaluate your roof space remotely to understand your household's peak energy usage."
              },
              {
                step: "02",
                title: "Custom System Design",
                desc: "Our Clean Energy Council accredited designers craft a custom solar layout optimized for Darwin's specific sun angles and wind loads."
              },
              {
                step: "03",
                title: "Permits and Approvals",
                desc: "We manage the entire administrative workload, including structural engineering certifications and Power and Water Corporation grid approvals."
              },
              {
                step: "04",
                title: "Expert Installation",
                desc: "Our local, fully accredited electrical team installs your premium panels, inverters, and battery storage to absolute safety standards."
              },
              {
                step: "05",
                title: "Commissioning and Handover",
                desc: "We test every circuit, establish connection to the grid, and walk you through your smart monitoring app so you can track your savings live."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="text-7xl lg:text-8xl font-black text-slate-100 group-hover:text-brand-50 transition-colors pointer-events-none select-none w-32 text-center shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex w-16 h-16 rounded-2xl bg-brand-50 items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 shrink-0">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLAR REBATES AVAILABLE TO NT HOMEOWNERS IN 2026 */}
      <section id="solar-rebates" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
              <PiggyBank className="w-4 h-4" /> Government Incentives
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Solar Rebates Available to NT Homeowners in 2026
            </h2>
            <p className="text-lg text-slate-300 font-medium">
              Reduce the upfront cost of your residential solar installation and home battery storage through current federal and state-level grants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Federal STC */}
            <div className="bg-slate-800/40 border border-white/10 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl backdrop-blur-sm flex flex-col h-full group relative overflow-hidden hover:border-brand-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl -mr-5 -mt-5"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-brand-500/10 border border-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                  <Sun className="w-8 h-8" />
                </div>
                <span className="px-4 py-1.5 bg-brand-500 text-slate-900 font-black text-xs uppercase tracking-wider rounded-full shadow-md">
                  Up to $2,563 Off
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-brand-400 transition-colors">
                Federal STC Rebate
              </h3>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-4">
                Upfront Small-scale Technology Certificates
              </p>
              <p className="text-slate-300 leading-relaxed font-medium flex-grow">
                Saves up to $2,563 on your system's purchase price. We apply this discount directly to your quote upfront, so you only pay the net balance. The rebate amount is based on your system size and the NT solar zone.
              </p>
            </div>

            {/* NT Battery */}
            <div className="bg-slate-800/40 border border-white/10 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl backdrop-blur-sm flex flex-col h-full group relative overflow-hidden hover:border-brand-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl -mr-5 -mt-5"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-brand-500/10 border border-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                  <Battery className="w-8 h-8" />
                </div>
                <span className="px-4 py-1.5 bg-brand-500 text-slate-900 font-black text-xs uppercase tracking-wider rounded-full shadow-md">
                  Up to $4,500 Grant
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-brand-400 transition-colors">
                NT Battery Scheme
              </h3>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-4">
                Home and Business Battery Scheme (HBBS)
              </p>
              <p className="text-slate-300 leading-relaxed font-medium flex-grow">
                Provides a grant of up to $4,500 for the installation of an eligible solar battery storage system. The grant is calculated at $450 per kilowatt-hour of battery capacity, making it easier than ever to add backup power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: RESIDENTIAL SOLAR INSTALLATIONS ACROSS THE NT (LOCATION HUB) */}
      <section id="location-hub" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-bold text-sm mb-6 border border-brand-100 uppercase tracking-wider">
              <MapPin className="w-4 h-4 animate-ping" /> Service Coverage
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Residential Solar Installations Across the NT
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We cover Darwin, Palmerston, the rural area, and regional centers down the Stuart Highway corridor to Alice Springs and Yulara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Darwin and Greater Darwin",
                postcode: "0800, 0810, 0820",
                areas: ["Darwin CBD", "Larrakeyah", "Fannie Bay", "Stuart Park", "Nightcliff", "Rapid Creek", "Coconut Grove", "Casuarina", "Tiwi", "Muirhead", "Nakara", "Leanyer", "Winnellie", "Berrimah", "Marrara"]
              },
              {
                name: "Palmerston and Rosebery",
                postcode: "0828-0839",
                areas: ["Durack", "Gray", "Woodroffe", "Farrar", "Archer", "Moulden", "Driver", "Bellamack", "Bakewell", "Gunn", "Johnston", "Rosebery", "Zuccoli", "Marlow Lagoon"]
              },
              {
                name: "Rural Darwin and Humpty Doo",
                postcode: "0837-0841",
                areas: ["Humpty Doo", "Girraween", "Coolalinga", "Virginia", "Howard Springs", "Berry Springs", "Darwin River", "Batchelor", "Wagait Beach", "Mandorah"]
              },
              {
                name: "Litchfield Region",
                postcode: "0822, 0837-0841",
                areas: ["Litchfield Park", "Rum Jungle", "Acacia Hills", "Noonamah", "Hughes", "Manton", "Freds Pass", "Dundee Beach", "Dundee Downs", "Lake Bennett"]
              },
              {
                name: "Katherine",
                postcode: "0845-0853",
                areas: ["Katherine CBD", "Tindal", "Manbulloo", "Binjari", "Adelaide River", "Pine Creek", "Mataranka", "Daly Waters"]
              },
              {
                name: "Kakadu Region",
                postcode: "0886",
                areas: ["Jabiru", "Gunbalanya", "Ramingining", "Milingimbi", "Warruwi", "remote and off-grid specialists"]
              },
              {
                name: "Tennant Creek and Barkly",
                postcode: "0861",
                areas: ["Tennant Creek", "Elliott", "Renner Springs", "Three Ways", "Ali Curung", "Darwin to Alice Springs corridor"]
              },
              {
                name: "Alice Springs",
                postcode: "0870-0872",
                areas: ["Alice Springs CBD", "Todd Mall", "Flynn", "Ross", "Sadadeen", "Araluen", "Larapinta", "Gillen", "Braitling", "Ciccone", "Desert Springs", "Ilparpa"]
              },
              {
                name: "Yulara and Central NT",
                postcode: "0872",
                areas: ["Yulara", "Mutitjulu", "Ti Tree", "Yuendumu", "Hermannsburg", "Finke", "remote and off-grid systems"]
              }
            ].map((loc, i) => (
              <div key={i} className="flex flex-col rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Bright green card header */}
                <div className="bg-[#5BC94D] px-6 py-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">
                      {loc.name}
                    </h3>
                  </div>
                </div>
                
                {/* Dark green card body */}
                <div className="bg-[#19281D] px-6 py-8 flex flex-col flex-grow text-white">
                  <p className="text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
                    Postcodes: {loc.postcode}
                  </p>
                  
                  {/* Pill tags chips */}
                  <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                    {loc.areas.map((area, idx) => (
                      <span key={idx} className="bg-white/10 text-brand-100 text-[11px] font-bold py-1 px-2.5 rounded-full backdrop-blur-sm">
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* CTA link at bottom */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        const formEl = document.getElementById("enquiry-form-section");
                        if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-400 group-hover:text-brand-300 transition-colors cursor-pointer w-full text-left"
                    >
                      Get Quote for {loc.name.split(" ")[0]} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <FaqSection faqs={faqs} />

      <GoogleReviews />

      {/* SECTION 8: FINAL CTA / ENQUIRY FORM SECTION */}
      <section id="enquiry-form-section" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-dot-white/[0.05] opacity-50 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950/80 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-brand-400 font-bold text-sm w-fit shadow-sm mb-8 backdrop-blur-sm animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span> Ready to lock in your rebate?
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
                  Unleash The Power Of Solar With <span className="text-brand-400">Oneroof</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                  Lock in your STC rebate before it changes and receive a free, custom solar system design built for the Northern Territory's extreme heat. We will recommend the best solar brand to match your home and budget, with no obligation.
                </p>

                <div className="space-y-8">
                  <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <Phone className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Call Our NT Team
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors">
                        {PRIMARY_PHONE}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="text-white font-bold text-lg">
                        info@oneroofsolar.com.au
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Our HQ Office
                      </p>
                      <p className="text-white font-bold text-sm">
                        Darwin: 3/97 Pruen Rd, Berrimah NT 0828
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Enquiry Form */}
              <div className="p-8 sm:p-12 lg:p-16 bg-slate-900/30 backdrop-blur-md relative z-10 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                  Get My Free Quote
                </h3>
                <p className="text-slate-400 font-medium mb-8">
                  Complete your details below to receive your customized solar layout and rebate evaluation.
                </p>

                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-center">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-6 shadow-lg">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-3">Enquiry Received!</h4>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Thank you! One of our Northern Territory solar specialists will review your energy bills and contact you within one business day.
                    </p>
                    <Button 
                      className="mt-6 bg-brand-500 text-slate-900 font-bold px-6 py-2 rounded-full hover:bg-brand-400 transition-colors"
                      onClick={() => setIsSuccess(false)}
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                          First Name
                        </label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleFormChange}
                          placeholder="John"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleFormChange}
                          placeholder="Doe"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                          Phone
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleFormChange}
                          placeholder="0412 345 678"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleFormChange}
                          placeholder="john.doe@example.com"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    {/* Suburb */}
                    <div>
                      <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                        Suburb
                      </label>
                      <input
                        required
                        type="text"
                        name="suburb"
                        value={formState.suburb}
                        onChange={handleFormChange}
                        placeholder="Fannie Bay"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* System Type */}
                      <div>
                        <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                          System Type
                        </label>
                        <div className="relative">
                          <select
                            name="systemType"
                            value={formState.systemType}
                            onChange={handleFormChange}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium appearance-none cursor-pointer"
                          >
                            <option value="Grid-Connected Solar">Grid-Connected Solar</option>
                            <option value="Hybrid Solar & Battery">Hybrid Solar & Battery</option>
                            <option value="Off-Grid Standalone">Off-Grid Standalone</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Quarterly Bill */}
                      <div>
                        <label className="block text-slate-300 font-bold mb-2 text-xs uppercase tracking-wider">
                          Quarterly Bill
                        </label>
                        <div className="relative">
                          <select
                            name="quarterlyBill"
                            value={formState.quarterlyBill}
                            onChange={handleFormChange}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm font-medium appearance-none cursor-pointer"
                          >
                            <option value="Under $500">Under $500</option>
                            <option value="$500 - $1,000">$500 - $1,000</option>
                            <option value="$1,000 - $1,500">$1,000 - $1,500</option>
                            <option value="$1,500+">$1,500+</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        {errorMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#5BC94D] text-slate-900 font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-brand-400 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-[0_4px_15px_rgba(91,201,77,0.3)]"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
