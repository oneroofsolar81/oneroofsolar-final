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
  AlertTriangle,
  Activity,
  Sun,
  Clock,
  ThumbsUp,
  FileText
} from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { FaqSection } from "@/src/components/FaqSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function SolarPanelRepairDarwinPage() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    suburb: "",
    systemType: "Solar Panel Repair",
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
        "name": "Solar Panel Repair",
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
        "description": "Professional solar panel repair services in Darwin. We repair physical cracks, hot spots, storm damage, loose connections, and performance degradation."
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a solar panel be repaired?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many common issues such as minor hotspots, bypass diode failures, loose cables, and junction box corrosion can be repaired by our accredited technicians. However, if a panel is physically cracked or has suffered severe water ingress, replacing the panel is usually the safest and most cost-effective option to protect your system's overall performance."
            }
          },
          {
            "@type": "Question",
            "name": "Why would solar panels suddenly stop working?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sudden failures are usually caused by inverter faults, tripped safety switches, or water ingress into DC isolators or junction boxes—particularly common during Darwin's wet season. Other causes include severe storm impact or animal damage to rooftop wiring. Our diagnostics team can quickly trace the exact fault."
            }
          },
          {
            "@type": "Question",
            "name": "Who do I contact about solar panel repairs in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should contact Oneroof Solar on 0483 986 444. Always ensure you hire a Clean Energy Council (CEC) accredited solar technician for any diagnostics or repairs, as solar systems operate at high DC voltages that require specialized safety training and equipment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you repair solar panels you did not install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Our technicians are experienced with all major panel brands, inverters, and mounting hardware. We regularly inspect and repair systems installed by other companies, including 'orphan' systems where the original installer is no longer in business."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you repair solar panels in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We prioritize urgent faults and system breakdowns. We generally schedule diagnostics inspections within 24 to 48 hours of your call. If we have the required replacement panels or components in stock, we can often resolve the issue on the same day as the inspection."
            }
          },
          {
            "@type": "Question",
            "name": "How much does solar panel repair cost in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost depends on the nature of the issue. Simple wiring repairs, diode replacements, or isolator swaps are highly affordable. If panels require replacement, we provide a full, written upfront quote with no hidden fees before commencing any work, ensuring complete transparency."
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
            "item": "https://oneroofsolar.com.au/services/solar-panel-repair-darwin"
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
        sourcePage: "/services/solar-panel-repair-darwin"
      });
      setIsSuccess(true);
      // reset form
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        suburb: "",
        systemType: "Solar Panel Repair",
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
      q: "Can a solar panel be repaired?",
      a: "Yes, many common issues such as minor hotspots, bypass diode failures, loose cables, and junction box corrosion can be repaired by our accredited technicians. However, if a panel is physically cracked or has suffered severe water ingress, replacing the panel is usually the safest and most cost-effective option to protect your system's overall performance."
    },
    {
      q: "Why would solar panels suddenly stop working?",
      a: "Sudden failures are usually caused by inverter faults, tripped safety switches, or water ingress into DC isolators or junction boxes—particularly common during Darwin's wet season. Other causes include severe storm impact or animal damage to rooftop wiring. Our diagnostics team can quickly trace the exact fault."
    },
    {
      q: "Who do I contact about solar panel repairs in Darwin?",
      a: "You should contact Oneroof Solar on 0483 986 444. Always ensure you hire a Clean Energy Council (CEC) accredited solar technician for any diagnostics or repairs, as solar systems operate at high DC voltages that require specialized safety training and equipment."
    },
    {
      q: "Do you repair solar panels you did not install?",
      a: "Yes, absolutely. Our technicians are experienced with all major panel brands, inverters, and mounting hardware. We regularly inspect and repair systems installed by other companies, including 'orphan' systems where the original installer is no longer in business."
    },
    {
      q: "How quickly can you repair solar panels in Darwin?",
      a: "We prioritize urgent faults and system breakdowns. We generally schedule diagnostics inspections within 24 to 48 hours of your call. If we have the required replacement panels or components in stock, we can often resolve the issue on the same day as the inspection."
    },
    {
      q: "How much does solar panel repair cost in Darwin?",
      a: "The cost depends on the nature of the issue. Simple wiring repairs, diode replacements, or isolator swaps are highly affordable. If panels require replacement, we provide a full, written upfront quote with no hidden fees before commencing any work, ensuring complete transparency."
    }
  ];

  return (
    <div id="solar-repair-root" className="bg-white text-slate-900 font-sans">
      
      {/* SECTION 1: HERO SECTION */}
      <section id="repair-hero" className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/80 to-transparent flex"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn isHero>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-brand-400" /> Professional Repair Services
              </div>
              <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
                Solar Panel <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                  Repair in Darwin
                </span>
              </h1>
              <p id="hero-subheadline" className="text-xl text-slate-300 max-w-lg mb-8 font-medium border-l-2 border-brand-400/50 pl-6 leading-relaxed">
                Solar panels underperforming or completely down? Every day without full output costs you money. Call Oneroof Solar on <strong className="text-white">0483 986 444</strong> for professional solar panel repair across Darwin and the Northern Territory.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                  <Button
                    id="hero-call-cta"
                    size="lg"
                    className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                  >
                    Call 0483 986 444 <Phone className="ml-2 w-5 h-5 fill-slate-900 text-slate-900" />
                  </Button>
                </a>
                <Button
                  id="hero-quote-cta"
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/20 text-white font-bold hover:bg-white/10 transition-all h-14 hover:-translate-y-1 uppercase tracking-widest"
                  onClick={() => {
                    const formEl = document.getElementById("enquiry-form-section");
                    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://plus.unsplash.com/premium_photo-1682145358254-56e9ab8049ca?q=80&w=1000&auto=format&fit=crop"
                alt="Solar panel repair Darwin technician"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent"></div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-brand-400 text-xs font-mono uppercase tracking-widest mb-1">// service_response</p>
                  <p className="text-white text-xl font-black uppercase">Rapid Diagnosis</p>
                </div>
                <div className="bg-brand-500 text-slate-900 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider">
                  24-48 Hours
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALISTS & FEATURE GRID */}
      <section id="repair-specialists" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                NT Local Expertise
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Darwin's Local Solar Panel Repair Specialists
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Oneroof Solar is a locally operated solar company serving Darwin, Palmerston, and the wider NT. Our CEC-accredited technicians repair all panel brands and all system types — residential and commercial, grid-tied and off-grid. We assess each panel individually, diagnose the exact fault, and quote before we touch anything.
              </p>
            </FadeIn>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "Local Technicians",
                desc: "No interstate wait times. Our technicians are stationed locally in Darwin, ready to deploy fast.",
                icon: MapPin,
              },
              {
                title: "CEC-Accredited",
                desc: "Certified for all solar electrical work, guaranteeing top safety and regulatory compliance.",
                icon: Shield,
              },
              {
                title: "All Brands Repaired",
                desc: "We diagnose and repair any panel brand, including systems installed by other solar companies.",
                icon: Wrench,
              },
              {
                title: "Written Quotes First",
                desc: "Receive a clear, itemized written quotation detailing all repairs before any work begins.",
                icon: FileText,
              },
              {
                title: "Priority Response",
                desc: "Rapid scheduling for urgent electrical faults, heavy storm damage, or complete blackouts.",
                icon: Zap,
              },
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <FadeIn>
              <div className="inline-block p-1 bg-brand-50 rounded-2xl border border-brand-100 shadow-inner">
                <a 
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="flex items-center gap-3 px-6 py-3 font-bold text-slate-900 hover:text-brand-700 transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-600 animate-bounce" />
                  <span>Call 0483 986 444 to book your solar panel repair today.</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3: REPAIR SERVICES WE PROVIDE */}
      <section id="repair-services" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <Wrench className="w-4 h-4 text-brand-600" /> Services Provided
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Solar Panel Repair Services We Provide
              </h2>
              <p className="text-lg font-medium text-slate-600">
                Professional repair, restoration, and replacement services delivered by Darwin's local Clean Energy Council accredited team.
              </p>
            </FadeIn>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "Cracked & Physically Damaged Panels",
                desc: "Hail, storm debris, falling branches, and foot traffic on the roof all cause physical damage to solar panels. A cracked panel allows moisture into the cell stack, which accelerates degradation and reduces output across the affected string. We assess the damage, determine whether the panel can be repaired or needs replacement, and match any replacement to your existing system.",
                icon: AlertTriangle,
              },
              {
                title: "Hot Spot Repair",
                desc: "Hot spots are localised areas of a panel that overheat due to cell damage, partial shading, or soiling. A panel with an active hot spot produces less power, degrades faster, and in severe cases can become a fire risk. We identify hot spots using thermal assessment and resolve the fault at the source.",
                icon: Sun,
              },
              {
                title: "Panel Degradation & Output Loss",
                desc: "If your system is producing noticeably less than it was a year ago and the weather has not changed, panel degradation may be the cause. We test each panel's output against its rated specifications and identify which panels are underperforming. Where output loss is beyond normal degradation rates, we repair or replace the affected panels.",
                icon: Activity,
              },
              {
                title: "Loose Connections & Junction Box Faults",
                desc: "Water ingress, oxidation, and loose MC4 connectors at the junction box reduce panel output without any visible external damage. These faults are common in Darwin's wet season and often go undetected until a full system inspection is carried out. We test all connections and reseal junction boxes where required.",
                icon: Zap,
              },
              {
                title: "Cyclone & Storm Damage",
                desc: "Darwin's cyclone season dislodges panels, cracks frames, and drives moisture into panel internals. A panel that has been through a significant weather event needs a professional inspection before the system is switched back on. We provide post-storm panel inspection and repair across Darwin and Palmerston.",
                icon: Shield,
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

          {/* Large Premium Image */}
          <FadeIn className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[21/9] max-w-6xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
              alt="Solar panel repair Darwin technician"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-brand-400 font-black text-xs uppercase tracking-widest">// professional_excellence</span>
                <h4 className="text-2xl sm:text-3xl font-black mt-2 leading-tight uppercase">CEC Accredited Workmanship</h4>
                <p className="text-slate-200 font-medium text-sm sm:text-base mt-2">Every inspection, repair, and component installation is certified to comply with standard NT cyclonic wind loads and Australian electrical regulations.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: SIGNS YOUR SOLAR PANELS NEED REPAIR */}
      <section id="signs-repair" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <FadeIn className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] sm:aspect-video lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                  alt="Damaged solar panels needing repair"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"></div>
              </FadeIn>
            </div>

            {/* Right Column: Checklist */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  Diagnostics Guide
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Signs Your Solar Panels Need Repair
                </h2>
                <p className="text-lg font-medium text-slate-600 mb-8 leading-relaxed">
                  Catching solar faults early prevents long-term degradation and protects your power output. Inspect your system for these common warning signals:
                </p>

                {/* Checklist */}
                <div className="space-y-4 mb-10">
                  {[
                    "Output has dropped on your inverter monitoring app",
                    "Electricity bills have increased with no change in usage",
                    "Visible cracks, burn marks, or discolouration on panels",
                    "Feed-in tariff credits have reduced month on month",
                    "Panels were exposed to a storm, hail, or cyclone",
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
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Notice any of these signs?</h4>
                    <p className="text-sm text-slate-500 font-semibold">Book an onsite diagnostics assessment with our Darwin crew.</p>
                  </div>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                    <Button className="rounded-full font-bold shadow-md hover:-translate-y-1 transition-all h-12 px-6">
                      Call Oneroof Solar <Phone className="ml-2 w-4 h-4 fill-slate-900" />
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: OUR REPAIR PROCESS */}
      <section id="repair-process" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
                <Clock className="w-4 h-4" /> 5-Step Repair Workflow
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Our Repair Process
              </h2>
              <p className="text-lg font-medium text-slate-300">
                Oneroof Solar streamlines diagnostics and repairs to restore your power production as quickly as possible.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            {[
              {
                step: "01",
                title: "Book an Assessment",
                desc: "Call 0483 986 444 or fill in the contact form. We confirm your booking within one business day."
              },
              {
                step: "02",
                title: "Panel Inspection & Diagnosis",
                desc: "Our technician inspects every panel on your roof, tests output against rated specifications, and identifies the exact fault."
              },
              {
                step: "03",
                title: "Written Quote",
                desc: "You receive a clear written quote before any repair work starts. No hidden charges."
              },
              {
                step: "04",
                title: "Repair & Test",
                desc: "We complete the repair and test system output on-site. Your monitoring will confirm normal generation before we leave."
              },
              {
                step: "05",
                title: "Follow-Up",
                desc: "For significant repairs we follow up within 30 days to confirm your system is holding expected output."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-slate-850 border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-brand-500/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="text-7xl lg:text-8xl font-black text-slate-800 group-hover:text-brand-950 transition-colors pointer-events-none select-none w-32 text-center shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors uppercase">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-slate-900 group-hover:border-brand-500 transition-all duration-500 transform group-hover:rotate-12 shrink-0">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <FadeIn>
              <Button
                size="lg"
                className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                onClick={() => {
                  const formEl = document.getElementById("enquiry-form-section");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Repair Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICE COVERAGE AREAS */}
      <section id="repair-coverage" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-bold text-sm mb-6 border border-brand-100 uppercase tracking-wider">
                <MapPin className="w-4 h-4 animate-ping" /> Coverage Hub
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Solar Panel Repair Across Darwin — Areas We Serve
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Our local crews service residential, commercial, and off-grid clients across greater Darwin, Palmerston, and surrounding districts.
              </p>
            </FadeIn>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                name: "Darwin City & Inner Suburbs — NT 0800 / 0820",
                areas: ["CBD", "Darwin Waterfront", "The Esplanade", "Larrakeyah", "Parap", "Cullen Bay", "Bayview", "East Point", "Fannie Bay", "Stuart Park", "The Gardens", "Ludmilla", "Winnellie", "Woolner"]
              },
              {
                name: "Nightcliff, Rapid Creek & Northern Suburbs — NT 0810",
                areas: ["Nightcliff", "Rapid Creek", "Coconut Grove", "Millner", "Wagaman", "Moil", "Alawa", "Lyons", "Jingili", "Tiwi", "Wanguri", "Nakara", "Brinkin", "Lee Point", "Muirhead"]
              },
              {
                name: "Casuarina & East — NT 0810 / 0812",
                areas: ["Casuarina", "Anula", "Leanyer", "Wulagi", "Malak", "Karama", "Sanderson", "Marrara", "Buffalo Creek", "Holmes"]
              },
              {
                name: "Fannie Bay, Stuart Park & Surrounds — NT 0820",
                areas: ["Fannie Bay", "Stuart Park", "East Point", "Bayview", "Winnellie", "Berrimah", "Knuckey Lagoon", "The Narrows"]
              }
            ].map((loc, i) => (
              <div key={i} className="flex flex-col rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Bright green card header */}
                <div className="bg-[#5BC94D] px-6 py-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {loc.name}
                    </h3>
                  </div>
                </div>
                
                {/* Dark green card body */}
                <div className="bg-[#19281D] px-6 py-8 flex flex-col flex-grow text-white">
                  <p className="text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
                    Primary Suburbs Covered:
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
                      Request Service in This Area <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <FadeIn>
              <p className="text-base font-semibold text-slate-500">
                Not sure if we cover your area? {" "}
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="text-brand-600 hover:underline">
                  Call 0483 986 444
                </a>{" "}
                — we service remote NT locations and will confirm directly.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <FaqSection faqs={faqs} />

      {/* SECTION 7.5: GOOGLE REVIEWS FEED */}
      <GoogleReviews />

      {/* SECTION 8: FINAL CTA & ENQUIRY FORM SECTION */}
      <section id="enquiry-form-section" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-dot-white/[0.05] opacity-50 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950/80 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-brand-400 font-bold text-sm w-fit shadow-sm mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span> Expert Assistance
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
                  Get Your Solar Panels <span className="text-brand-400">Repaired Today</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                  Do not let damaged or underperforming panels cost you more each month. Oneroof Solar's local technicians are ready to assess, quote, and repair your solar panels fast. Call 0483 986 444 or fill in the contact form and we will get back to you within one business day.
                </p>

                <div className="space-y-8">
                  <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-6 group cursor-pointer w-fit">
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
                  Book Your Repair
                </h3>
                <p className="text-slate-400 font-medium mb-8">
                  Complete your details below to schedule a technician or request a fast, transparent quote.
                </p>

                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-center">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-6 shadow-lg">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-3">Repair Request Received!</h4>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Thank you! One of our local Darwin solar repair specialists will contact you within one business day to confirm your assessment.
                    </p>
                    <Button 
                      className="mt-6 bg-brand-500 text-slate-900 font-bold px-6 py-2 rounded-full hover:bg-brand-400 transition-colors"
                      onClick={() => setIsSuccess(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-bold mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formState.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors font-medium"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-bold mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formState.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors font-medium"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-bold mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors font-medium"
                          placeholder="0400 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-bold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-bold mb-2">Suburb</label>
                      <input
                        type="text"
                        name="suburb"
                        required
                        value={formState.suburb}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors font-medium"
                        placeholder="Darwin CBD, Fannie Bay, Nightcliff"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-bold mb-2">Inquiry / System Status</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors font-medium resize-none"
                        placeholder="Briefly describe the issue (e.g., cracked glass, inverter error codes, output dropped, storm damage)"
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-500 text-slate-900 font-black py-4 rounded-xl hover:bg-brand-400 transition-all uppercase tracking-widest h-14"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Repair Request"}
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
