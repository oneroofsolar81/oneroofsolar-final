import { FadeIn } from "@/src/components/ui/FadeIn";
import { Mail, MapPin, Phone, Zap, ArrowRight, MessageSquare } from "lucide-react";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { ensureDatabaseSeeded } from "../lib/autoSeed";
import { DEFAULT_PAGES } from "../lib/defaultData";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { SEO } from "@/src/components/SEO";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialContactData = DEFAULT_PAGES.find(p => p.id === 'contact')?.data || null;
  const [pageData, setPageData] = useState<any>(initialContactData);

  useEffect(() => {
    async function loadData() {
      try {
        await ensureDatabaseSeeded();
        const docRef = doc(db, 'pages', 'contact');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPageData(docSnap.data());
        } else {
          const fallbackContact = DEFAULT_PAGES.find(p => p.id === 'contact')?.data;
          if (fallbackContact) setPageData(fallbackContact);
        }
      } catch (e) {
        console.warn("Using offline fallback data for CMS", e);
        const fallbackContact = DEFAULT_PAGES.find(p => p.id === 'contact')?.data;
        if (fallbackContact) setPageData(fallbackContact);
      }
    }
    loadData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      window.location.href = `mailto:info@oneroofsolar.com.au?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
      setErrors({});
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <SEO seo={pageData?.seo} />
      
      {/* Dark Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 bg-[#0A1118] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-slate-900/50 block"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn isHero>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-brand-400 font-bold text-xs mb-6 border border-brand-500/30 bg-brand-500/10 rounded-full uppercase tracking-widest shadow-sm">
              <Zap className="w-3.5 h-3.5" />
              {pageData?.title || 'Support Online'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 uppercase">
              {pageData?.heroTitle ? (
                <span dangerouslySetInnerHTML={{ __html: pageData.heroTitle }} />
              ) : (
                <>Let's Get In <span className="text-brand-500">Touch.</span></>
              )}
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-6 whitespace-pre-line">
              {pageData?.content || 'Ready to start saving on your energy bills? Our Darwin-based solar experts are here to answer your questions and provide a free, no-obligation quote.\n\nReady to harness the power of the sun? Our team of experts is here to help you design the perfect solar ecosystem for your home.'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100 relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side info */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-xs mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                Send a <span className="text-brand-600">Message</span>.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mb-10 font-medium leading-relaxed">
                Whether you have a question about solar panels, inverters, batteries, or pricing, our local team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 border border-brand-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-1">Expert Advice</h4>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">Speak directly with CEC-accredited solar experts, not salespeople. We size systems that make sense for your roof and power bill.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 border border-brand-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-1">Fast Response</h4>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">We aim to respond to all inquiries within 24 hours. Emergency callouts available for system breakdowns.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form Side */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="w-full relative bg-transparent rounded-xl overflow-hidden" style={{ minHeight: "720px" }}>
                  <iframe
                    src="https://api.oneroofsolar.com.au/widget/form/3uXInokjWftJSJgePj2x"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px", minHeight: "720px", overflow: "hidden" }}
                    scrolling="no"
                    title="Contact Us Form"
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all duration-300 h-full group text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 mb-5 border border-slate-200 shadow-xs group-hover:bg-brand-500 group-hover:text-slate-900 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono">Email Us</h3>
                <div className="text-base sm:text-lg font-bold text-slate-900">info@oneroofsolar.com.au</div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all duration-300 h-full group text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 mb-5 border border-slate-200 shadow-xs group-hover:bg-brand-500 group-hover:text-slate-900 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono">Call Us</h3>
                <div className="text-base font-bold text-slate-900">Darwin: <a href={`tel:${PRIMARY_PHONE_RAW}`} className="hover:text-brand-600 transition-colors">{PRIMARY_PHONE}</a></div>
                <div className="text-base font-bold text-slate-900 mt-1">Alice Springs: <a href={`tel:${PRIMARY_PHONE_RAW}`} className="hover:text-brand-600 transition-colors">{PRIMARY_PHONE}</a></div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all duration-300 h-full group text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 mb-5 border border-slate-200 shadow-xs group-hover:bg-brand-500 group-hover:text-slate-900 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono">Visit Us</h3>
                <div className="text-sm font-bold text-slate-900">Darwin: 3/97 Pruen Rd, Berrimah NT 0828</div>
                <div className="text-sm font-bold text-slate-900 mt-2 pt-2 border-t border-slate-200 w-full">Alice Springs: 44 Zeil St, Araluen NT 0870</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.3}>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Our <span className="text-brand-600">Locations</span>.</h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">Serving Darwin, Palmerston, Alice Springs and rural NT communities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Darwin Map */}
              <div className="h-[400px] sm:h-[450px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative group flex flex-col bg-white">
                <div className="p-4 sm:p-5 flex justify-center items-center gap-2 border-b border-slate-100 font-bold text-sm sm:text-base text-slate-900 shrink-0 text-center">
                  <MapPin className="text-brand-600 w-4 h-4 sm:w-5 sm:h-5" />
                  Darwin: 3/97 Pruen Rd, Berrimah NT 0828
                </div>
                <div className="flex-grow w-full h-full relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=3/97%20Pruen%20Rd,%20Berrimah%20NT%200828&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Darwin Office Map"
                    className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05] opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 bg-slate-100"
                  ></iframe>
                </div>
              </div>

              {/* Alice Springs Map */}
              <div className="h-[400px] sm:h-[450px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative group flex flex-col bg-white">
                <div className="p-4 sm:p-5 flex justify-center items-center gap-2 border-b border-slate-100 font-bold text-sm sm:text-base text-slate-900 shrink-0 text-center">
                  <MapPin className="text-brand-600 w-4 h-4 sm:w-5 sm:h-5" />
                  Alice Springs: 44 Zeil St, Araluen NT 0870
                </div>
                <div className="flex-grow w-full h-full relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=44%20Zeil%20St,%20Araluen%20NT%200870&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Alice Springs Office Map"
                    className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05] opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 bg-slate-100"
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoogleReviews />

    </div>
  );
}
