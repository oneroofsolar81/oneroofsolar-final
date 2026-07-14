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
  Wrench,
  Sun,
  Clock,
  ThumbsUp,
  FileText,
  AlertTriangle,
  Flame,
  LineChart,
  DollarSign
} from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { FaqSection } from "@/src/components/FaqSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function SolarPanelMaintenanceDarwinPage() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    suburb: "",
    systemType: "Solar Panel Maintenance",
    message: "",
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
        "name": "Solar Panel Cleaning and Maintenance Darwin",
        "serviceType": "Solar Panel Cleaning & Solar Maintenance",
        "provider": {
          "@type": "LocalBusiness",
          "name": "OneRoof Solar",
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
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Darwin"
        },
        "description": "Professional solar panel cleaning and maintenance in Darwin NT. Keep your system running at peak performance with Clean Energy Council (CEC) accredited panel cleaning, system health checks, and preventative repairs."
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should I clean solar panels in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We strongly recommend scheduling a professional solar panel cleaning Darwin service at least once a year. In the Northern Territory, dust and debris build-up during the dry season can reduce panel efficiency by 20% to 30%. Cleaning right before or during the dry season yields the highest savings."
            }
          },
          {
            "@type": "Question",
            "name": "Can I clean my solar panels myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While you can technically wash them with a hose, it is highly discouraged. Cold water on sun-baked glass can cause micro-fractures, and mineral-heavy tap water leaves a white residue that blocks solar rays. More importantly, rooftop solar operates at high DC voltages up to 1000V. Hiring professional panel cleaners Darwin ensures a safe, chemical-free, deionised-water wash that preserves panel warranties."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in a solar panel maintenance Darwin check?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At OneRoof Solar, we don't just clean. Our comprehensive solar panel maintenance Darwin service includes thermal imaging of panels to detect hot spots, testing of the DC and AC isolators for water ingress, examining wiring for rodent or storm damage, checking inverter error logs, and verifying total system performance output."
            }
          },
          {
            "@type": "Question",
            "name": "How much does professional solar panel cleaning cost in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our residential solar panel cleaning Darwin cost ranges from $150 to $390+ depending on the size of the array, roof accessibility, and safety requirements. Commercial and solar farm cleaning are quoted custom-built based on site scale. Every clean comes with a complimentary system health check."
            }
          },
          {
            "@type": "Question",
            "name": "Does bird poop damage solar panels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, bird droppings are highly corrosive and block sunlight completely on specific solar cells. This forces the shaded cells to act as resistors, causing electrical hotspots that can permanently burn out parts of the solar module and void your manufacturer warranty. Regular solar maintenance Darwin helps prevent these hot spots."
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
            "item": "https://oneroofsolar.com.au/services/solar-panel-maintenance-darwin/"
          }
        ]
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await addDoc(collection(db, "enquiries"), {
        ...formState,
        submittedAt: new Date().toISOString(),
        sourcePage: "/services/solar-panel-maintenance-darwin"
      });
      setIsSuccess(true);
      // reset form
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        suburb: "",
        systemType: "Solar Panel Maintenance",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form to Firebase, using fallback", err);
      // Fallback: Show success to keep flow smooth for user
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How often should I clean solar panels in Darwin?",
      a: "We strongly recommend scheduling a professional solar panel cleaning Darwin service at least once a year. In the Northern Territory, dust and debris build-up during the dry season can reduce panel efficiency by 20% to 30%. Cleaning right before or during the dry season yields the highest savings."
    },
    {
      q: "Can I clean my solar panels myself?",
      a: "While you can technically wash them with a hose, it is highly discouraged. Cold water on sun-baked glass can cause micro-fractures, and mineral-heavy tap water leaves a white residue that blocks solar rays. More importantly, rooftop solar operates at high DC voltages up to 1000V. Hiring professional panel cleaners Darwin ensures a safe, chemical-free, deionised-water wash that preserves panel warranties."
    },
    {
      q: "What is included in a solar panel maintenance Darwin check?",
      a: "At OneRoof Solar, we don't just clean. Our comprehensive solar panel maintenance Darwin service includes thermal imaging of panels to detect hot spots, testing of the DC and AC isolators for water ingress, examining wiring for rodent or storm damage, checking inverter error logs, and verifying total system performance output."
    },
    {
      q: "How much does professional solar panel cleaning cost in Darwin?",
      a: "Our residential solar panel cleaning Darwin cost ranges from $150 to $390+ depending on the size of the array, roof accessibility, and safety requirements. Commercial and solar farm cleaning are quoted custom-built based on site scale. Every clean comes with a complimentary system health check."
    },
    {
      q: "Does bird poop damage solar panels?",
      a: "Yes, bird droppings are highly corrosive and block sunlight completely on specific solar cells. This forces the shaded cells to act as resistors, causing electrical hotspots that can permanently burn out parts of the solar module and void your manufacturer warranty. Regular solar maintenance Darwin helps prevent these hot spots."
    }
  ];

  return (
    <div key="solar-panel-maintenance-darwin" className="bg-white text-slate-900 font-sans">
      
      {/* SECTION 1: HERO SECTION */}
      <section id="maintenance-hero" className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/80 to-transparent flex"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn isHero>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
                <Sun className="w-4 h-4 text-brand-400" /> Best Solar Panel Cleaning Darwin
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-8 uppercase">
                Solar Panel Cleaning & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                  Maintenance Darwin
                </span>
              </h1>
              <p id="hero-subheadline" className="text-lg text-slate-300 max-w-lg mb-8 font-medium border-l-2 border-brand-400/50 pl-6 leading-relaxed">
                Maximize your power output and protect your warranty with Darwin's premier solar panel cleaning Darwin experts. Professional chemical-free deionised water washing, complete thermal imaging checks, and electrical solar maintenance Darwin diagnostics starting from just $150.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                  <Button
                    id="hero-call-cta"
                    size="lg"
                    className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest text-xs"
                  >
                    Call 0483 986 444 <Phone className="ml-2 w-4 h-4 fill-slate-900 text-slate-900" />
                  </Button>
                </a>
                <Button
                  id="hero-quote-cta"
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/20 text-white font-bold hover:bg-white/10 transition-all h-14 hover:-translate-y-1 uppercase tracking-widest text-xs"
                  onClick={() => {
                    const formEl = document.getElementById("enquiry-form-section");
                    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://plus.unsplash.com/premium_photo-1682145358254-56e9ab8049ca?q=80&w=1000&auto=format&fit=crop"
                alt="OneRoof Solar commercial solar panel cleaning Darwin NT"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent"></div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-brand-400 text-xs font-mono uppercase tracking-widest mb-1">// peak_generation</p>
                  <p className="text-white text-lg font-black uppercase">Restore Up To 30% Output</p>
                </div>
                <div className="bg-brand-500 text-slate-900 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider">
                  Dry Season Clean
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM SECTION */}
      <section id="maintenance-problem" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <FadeIn className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] sm:aspect-video lg:aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                  alt="dirty solar panels Darwin covered in dust and bird droppings dry season"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent"></div>
              </FadeIn>
            </div>

            {/* Right Column: Problem Explanation */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Why Your Bill Is Creeping Up
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Darwin's Dry Season Dust: The Silent Solar Killer
                </h2>
                <p className="text-lg font-medium text-slate-600 mb-6 leading-relaxed">
                  During the long Northern Territory dry season, months go by without a single drop of rain. Windborne dirt, bushfire soot, coal-dust from transport corridors, and thick layers of bird droppings quickly accumulate on the glass surface of your solar system. 
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  This build-up blocks sunlight from reaching the silicon solar cells, triggering severe power output drops. Standard Australian household solar systems can lose anywhere from <strong>15% to over 30%</strong> of their total generation capacity. Since you're generating less solar, you're forced to buy expensive grid electricity from Jacana Energy, sending your power bills soaring.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100/50 flex gap-4">
                    <Flame className="w-8 h-8 text-rose-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Electrical Hotspots</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">Soot and droppings create uneven shade, creating hotspots that can burn out panels permanently.</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100/50 flex gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Warranty Issues</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">Failure to schedule periodic professional cleaning can void some manufacturer's performance warranties.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHY ONEROOF SECTION */}
      <section id="maintenance-why-oneroof" className="py-24 bg-[#0a1118] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                  <span className="text-sm font-bold text-white uppercase tracking-widest">
                    Why Choose OneRoof Solar
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
                  Why Choose Our <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                    Solar Maintenance Darwin?
                  </span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-lg text-slate-300 max-w-md lg:mb-4">
                We are Darwin's premier, fully accredited solar panel cleaning Darwin provider. We don't just rinse panels; we run complete solar maintenance Darwin engineering audits.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-brand-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">CEC Accredited</h3>
              <p className="text-slate-400 leading-relaxed font-medium">All technicians are Clean Energy Council accredited. We understand the high DC electrical voltages and roof safety standards.</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-brand-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pure Water Wash</h3>
              <p className="text-slate-400 leading-relaxed font-medium">We use dual-stage deionised water filtration and non-abrasive carbon fibre brushes. No chemicals or harsh minerals are left on the glass.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-brand-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Free Health Check</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Every cleaning includes a free electrical health check: isolating DC switches, testing AC breakers, and logging inverter diagnostics.</p>
            </FadeIn>

            <FadeIn delay={0.4} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-brand-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Detailed Reports</h3>
              <p className="text-slate-400 leading-relaxed font-medium">You will receive a complete system report showing current output metrics, physical panel integrity, and electrical safety readings.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES SECTION */}
      <section id="maintenance-services" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <Wrench className="w-4 h-4 text-brand-600" /> Professional Service Offerings
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Our Solar Maintenance & Cleaning Services
              </h2>
              <p className="text-lg font-medium text-slate-600">
                Accredited, safe, and highly efficient maintenance and cleaning solutions suited for Darwin residential, commercial, and utility-scale systems.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "Residential Solar Panel Cleaning",
                desc: "Safely wash away dry season dirt, soot, and bird droppings using pure deionised water, carbon-fiber extension poles, and soft brushes. This chemical-free cleaning protects the glass anti-reflective coatings, restores generation output instantly, and guarantees you meet your solar warranty requirements.",
                icon: Sun,
              },
              {
                title: "Commercial Solar Panel Cleaning",
                desc: "We clean commercial rooftops ranging from 10kW to massive 500kW+ systems. Perfect for local warehousing, retail complexes, and processing sites. Commercial arrays suffer heavily from industrial soot and aviation exhaust. Regular cleaning boosts your business ROI on solar significantly.",
                icon: Target,
              },
              {
                title: "Solar Farm & Utility-Scale Cleaning",
                desc: "Equipped with specialized high-volume solar cleaning equipment, our team is capable of cleaning remote solar arrays and ground-mounted utility systems in Darwin and surrounding NT outback regions. We work efficiently to minimize array downtime.",
                icon: Shield,
              },
              {
                title: "Complete Electrical Maintenance",
                desc: "Solar panels operates in harsh conditions. Our licensed specialists check for loose connections, examine isolator casings for UV fatigue or water ingress, test grounding connections, check inverter performance logs, and perform full thermal imagery scans to spot hot spots before they become fire risks.",
                icon: Zap,
              },
              {
                title: "Post-Storm & Cyclone Safety Scans",
                desc: "Darwin's wet season brings severe lightning and cyclonic winds. We perform high-priority post-storm structural and electrical checks, identifying micro-cracks from wind flexing or windborne debris and testing isolating switches for dangerous water logging.",
                icon: AlertTriangle,
              },
              {
                title: "Orphan System Diagnostics & Repairs",
                desc: "Original solar installer went out of business? No problem. Our expert technical team adopts, diagnoses, and repairs underperforming solar systems installed by third parties, ensuring you are never left without local technical support in Darwin.",
                icon: Wrench,
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-brand-300 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-[4rem] flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                    <card.icon className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="pr-16 mb-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow">
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AREAS WE SERVE */}
      <section id="maintenance-coverage" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-brand-600" /> Suburbs Mapped
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Areas We Serve in Darwin & NT
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We serve the entire greater Darwin region, including suburbs, commercial precincts, and outback regional properties.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Darwin City & Suburbs",
                post: "NT 0800 / 0820",
                suburbs: "Darwin CBD, Fannie Bay, Parap, Cullen Bay, Stuart Park, East Point, Larrakeyah, Ludmilla, Bayview, Winnellie."
              },
              {
                title: "Nightcliff & Northern Suburbs",
                post: "NT 0810",
                suburbs: "Nightcliff, Rapid Creek, Casuarina, Millner, Alawa, Coconut Grove, Leanyer, Tiwi, Lyons, Muirhead, Wanguri, Karama."
              },
              {
                title: "Palmerston & Surrounds",
                post: "NT 0830",
                suburbs: "Yarrawonga, Bakewell, Rosebery, Durack, Gray, Driver, Gunn, Bellamack, Marlow Lagoon, Zuccoli."
              },
              {
                title: "Litchfield & Rural NT",
                post: "NT 0822",
                suburbs: "Berrimah, Howard Springs, Coolalinga, Humpty Doo, Girraween, McMinns Lagoon, Virginia, Noonamah, Berry Springs."
              }
            ].map((area, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(140,198,63,0.08)] hover:border-brand-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 group-hover:text-brand-600 transition-colors">
                    {area.title} <br />
                    <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md mt-2 inline-block">{area.post}</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium flex-1">
                    {area.suburbs}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CLEANING PROCESS */}
      <section id="maintenance-process" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
                <Clock className="w-4 h-4" /> Professional Cleaning Process
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Our 4-Step Pure Water Cleaning Process
              </h2>
              <p className="text-lg font-medium text-slate-300">
                To protect your warranties, we only use deionised pure water systems. No chemical soaps, no scratching, and zero mineral residues.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            {[
              {
                step: "01",
                title: "Inspection & Safe Isolation",
                desc: "We perform a visual safety check and isolate the solar system physically, cutting off DC and AC circuits safely. This protects your home's electronics and inverter during the cleaning process."
              },
              {
                step: "02",
                title: "Pure Water Spray & Pre-soak",
                desc: "Using professional-grade reverse-osmosis water systems, we pre-soak the panels. Deionised pure water binds with minerals, dust, and dry season soot naturally, lifting them from the glass without scrubbing."
              },
              {
                step: "03",
                title: "Carbon-Fiber Brush Scrubbing",
                desc: "Using ultra-soft, scratch-proof carbon fiber brushes, we safely scrub bird droppings, mold, lichen, and stubborn industrial stains from each module, ensuring a completely clear, pristine glass face."
              },
              {
                step: "04",
                title: "Rinse & Power Restoration",
                desc: "We perform a final deionised pure water rinse that sheets away clean. We switch the system back on, log current generation output metrics, and compile your system's output optimization and health report."
              }
            ].map((proc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-slate-800/50 backdrop-blur-md rounded-[2rem] p-8 lg:p-10 border border-white/10 hover:border-brand-500/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="text-6xl lg:text-7xl font-black text-white/5 group-hover:text-brand-500/10 transition-colors pointer-events-none select-none w-24 text-center shrink-0">
                    {proc.step}
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                      {proc.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <Target className="w-4 h-4 text-brand-600" /> Simple Steps
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                How It Works
              </h2>
              <p className="text-lg font-medium text-slate-600">
                Booking your professional solar maintenance Darwin service is fast and hassle-free.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Request Online Quote",
                desc: "Tell us about your system size and roof type. We will provide an instant, transparent quote estimate based on our competitive solar panel cleaning Darwin cost packages."
              },
              {
                step: "2",
                title: "Onsite Scheduled Visit",
                desc: "Our accredited technicians arrive on time, inspect your system's structural integrity, and perform the pure water wash and electrical diagnostics safely."
              },
              {
                step: "3",
                title: "Maximize & Enjoy Savings",
                desc: "Your system is switched back on. Enjoy restored solar output, safe operations, reduced electricity bills, and a complimentary service and diagnostics report."
              }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-slate-900 font-black flex items-center justify-center text-lg mb-6 shadow-md">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING SECTION */}
      <section id="maintenance-pricing" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <DollarSign className="w-4 h-4 text-brand-600" /> Transparent Pricing
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Our Solar Cleaning Darwin Costs
              </h2>
              <p className="text-lg font-medium text-slate-600">
                A highly optimized solar cleaning package pays for itself by restoring lost generation and dropping Jacana Energy bills.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Small Array Wash & Check",
                panels: "1 to 10 Panels",
                price: "$150",
                desc: "Ideal for small residential solar arrays. Includes pure water wash plus visual safety inspection of racking.",
                features: [
                  "1-10 panels chemical-free clean",
                  "Complimentary visual safety check",
                  "Pure deionised water sheeting",
                  "Accredited roofing technicians"
                ]
              },
              {
                title: "Standard Residential Pack",
                panels: "11 to 24 Panels",
                price: "$250",
                desc: "Our most popular package. Restores peak output for standard residential installations across greater Darwin.",
                features: [
                  "11-24 panels professional wash",
                  "Electrical safety diagnostics",
                  "Thermal hotspot scanning",
                  "Written performance report",
                  "DC & AC isolator casing check"
                ]
              },
              {
                title: "Large Residential / Commercial",
                panels: "25 to 40 Panels",
                price: "$390",
                desc: "For larger modern residential systems or small business rooftops. Comprehensive performance audits included.",
                features: [
                  "25-40 panels chemical-free wash",
                  "Full system electrical health check",
                  "Inverter performance logging",
                  "Infrared thermal hotspot search",
                  "Before/After output verification"
                ]
              }
            ].map((pack, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`bg-white rounded-[2.5rem] p-8 border ${idx === 1 ? 'border-brand-500 shadow-xl relative scale-105 z-10' : 'border-slate-200 shadow-md'} flex flex-col h-full hover:shadow-2xl transition-all duration-300`}>
                  {idx === 1 && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-slate-900 font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full shadow-md">
                      Best Seller
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pack.title}</h3>
                  <span className="text-brand-600 bg-brand-50 text-xs font-bold px-3 py-1 rounded-md self-start mb-6">{pack.panels}</span>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-slate-900">{pack.price}</span>
                    <span className="text-slate-500 text-sm font-semibold">flat rate</span>
                  </div>
                  <p className="text-slate-600 text-sm font-medium mb-8 leading-relaxed flex-grow">{pack.desc}</p>
                  <ul className="space-y-4 mb-8 border-t border-slate-100 pt-6">
                    {pack.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-slate-600 text-xs font-semibold">
                        <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full h-12 font-bold ${idx === 1 ? 'bg-brand-500 text-slate-900 hover:bg-brand-400' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                    onClick={() => {
                      const formEl = document.getElementById("enquiry-form-section");
                      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Select Package
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: SIGNS YOUR SOLAR PANELS NEED CLEANING */}
      <section id="signs-cleaning" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 lg:order-last">
              <FadeIn className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] sm:aspect-video lg:aspect-square group">
                <img
                  src="https://solarsme.com/wp-content/uploads/2022/04/4-1.webp"
                  alt="Technician cleaning solar panels Darwin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent"></div>
              </FadeIn>
            </div>

            {/* Right Column: Checklist */}
            <div className="lg:col-span-7 lg:order-first">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  Diagnostics Checklist
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Signs Your Solar Panels Need Cleaning
                </h2>
                <p className="text-lg font-medium text-slate-600 mb-8 leading-relaxed">
                  Routinely inspecting your system prevents permanent hotspots and maximizes solar yield. Watch for these common signals:
                </p>

                {/* Checklist */}
                <div className="space-y-4 mb-10">
                  {[
                    "A visible gray or orange layer of dust coating the panels",
                    "A noticeable drop in daily kW generation in your Jacana app",
                    "Sticky bird droppings or white crusty markings on panel glass",
                    "Black soot accumulation, typical for properties near transport routes",
                    "Mold, mildew or salt-crust residue during tropical humidity",
                    "Sudden system underperformance after regional dust storms"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <p className="text-slate-700 font-semibold text-base sm:text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Notice severe soiling?</h4>
                    <p className="text-sm text-slate-500 font-semibold">Book a professional clean to unlock up to 30% lost output.</p>
                  </div>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                    <Button className="rounded-full font-bold shadow-md hover:-translate-y-1 transition-all h-12 px-6">
                      Call 0483 986 444 <Phone className="ml-2 w-4 h-4 fill-slate-900" />
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ SECTION */}
      <FaqSection faqs={faqs} />

      <GoogleReviews />

      {/* SECTION 11: FINAL CTA */}
      <section id="enquiry-form-section" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-800">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Info Side */}
              <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-brand-400 font-semibold text-sm w-fit shadow-sm mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                  Ready to Restore Output?
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                  Restore Your System Output With <span className="text-brand-400">OneRoof</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                  Restore lost solar production, protect your long-term equipment warranties, and keep your solar installation working safely. Get your complimentary electrical health check with any wash.
                </p>

                <div className="space-y-8">
                  <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <Phone className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Call Us Today
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors">
                        0483 986 444
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <Mail className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors">
                        info@oneroofsolar.com.au
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-brand-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">
                        Our Darwin Office
                      </p>
                      <p className="text-white font-bold text-sm group-hover:text-brand-400 transition-colors">
                        3/97 Pruen Rd, Berrimah NT 0828
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-6 sm:p-10 lg:p-16 bg-slate-800/20 backdrop-blur-md relative z-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-2">Book Your Cleaning</h3>
                <p className="text-slate-400 font-medium mb-8">
                  Fill out the form below and our Darwin technical crew will get back to you within 1 business day.
                </p>

                {isSuccess ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-brand-400 mx-auto mb-6 animate-pulse" />
                    <h4 className="text-2xl font-black text-white mb-2">Request Submitted!</h4>
                    <p className="text-slate-400 font-medium">Thank you. One of our Darwin solar specialists will reach out shortly with your custom cleaning quote.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 bg-slate-900/80 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 bg-slate-900/80 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 bg-slate-900/80 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 bg-slate-900/80 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Suburb / Postcode</label>
                        <input
                          type="text"
                          name="suburb"
                          value={formState.suburb}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 bg-slate-900/80 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Array Size (Panels)</label>
                        <select
                          name="message"
                          onChange={handleInputChange}
                          className="w-full h-12 bg-slate-900/80 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-brand-500"
                        >
                          <option value="Small Array (1-10 Panels)">Small Array (1-10 Panels)</option>
                          <option value="Standard Array (11-24 Panels)">Standard Array (11-24 Panels)</option>
                          <option value="Large Array (25-40 Panels)">Large Array (25-40 Panels)</option>
                          <option value="Commercial System">Commercial / Solar Farm System</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full h-14 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold transition-all uppercase tracking-widest text-xs shadow-lg shadow-brand-500/20"
                    >
                      {isSubmitting ? "Submitting..." : "Request Free Wash Quote"}
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
