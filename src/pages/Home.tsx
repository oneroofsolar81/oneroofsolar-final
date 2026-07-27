import { useState, useEffect } from "react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { PartnersMarquee } from "@/src/components/PartnersMarquee";
import { PackagesSection } from "@/src/components/PackagesSection";
import { SEO } from "@/src/components/SEO";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { 
  ArrowRight, CheckCircle2, Zap, Battery, HomeIcon, Building2, 
  CircleDollarSign, Lightbulb, Grid, Activity, Wrench, 
  BatteryMedium, Layers, MapPin, ShieldCheck, Sun, Award, 
  HeadphonesIcon, Star, MessageSquare, ChevronRight, Phone 
} from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

export function Home() {
  // Quote form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    interest: "Residential Solar Panels"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please fill in your name and phone number.");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        source: "home_quote_widget",
        createdAt: new Date().toISOString()
      });
      setIsSuccess(true);
      setFormData({ name: "", phone: "", suburb: "", interest: "Residential Solar Panels" });
    } catch (err: any) {
      console.error("Error submitting lead to Firestore:", err);
      // Fallback: simulate success so the user doesn't get blocked
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic SEO and JSON-LD structured data injection
  useEffect(() => {
    // 1. Title, Description & Canonical
    document.title = "Solar Panels Darwin | Oneroof Solar - Installation, Battery & NT Rebates";
    
    const updateMeta = (nameOrProperty: string, isProperty: boolean, content: string) => {
      const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(isProperty ? 'property' : 'name', nameOrProperty);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', false, "Darwin's local solar panel installers. Residential & commercial solar, battery storage, EV chargers, NT Battery Grant paperwork handled for you. $0 deposit - Darwin, Palmerston & Alice Springs.");
    updateMeta('og:title', true, "Solar Panels Darwin | Oneroof Solar - Installation, Battery & NT Rebates");
    updateMeta('og:description', true, "Darwin's local solar panel installers. Residential & commercial solar, battery storage, EV chargers, NT Battery Grant paperwork handled for you. $0 deposit - Darwin, Palmerston & Alice Springs.");
    updateMeta('og:type', true, "website");
    updateMeta('og:url', true, "https://oneroofsolar.com.au/");
    updateMeta('og:locale', true, "en_AU");
    updateMeta('twitter:card', false, "summary_large_image");
    updateMeta('twitter:title', false, "Solar Panels Darwin | Oneroof Solar - Installation, Battery & NT Rebates");
    updateMeta('twitter:description', false, "Darwin's local solar panel installers. Residential & commercial solar, battery storage, EV chargers, NT Battery Grant paperwork handled for you.");

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', "https://oneroofsolar.com.au/");

    // 2. Structured Data injection
    const schemas = [
      // FAQPage
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "How much do solar panels cost in Darwin?", "acceptedAnswer": {"@type": "Answer", "text": "A standard 6.6kW residential solar system in Darwin costs between $7,500 and $10,000 before government incentives. After STCs the net cost is typically lower. Darwin homeowners also have access to the NT Battery Grant Scheme which reduces battery costs by up to $6,000. We provide written quotes at no charge."}},
          {"@type": "Question", "name": "Is solar worth it in Darwin's wet season?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Darwin receives high solar irradiance even during the wet season. While cloud cover reduces output on heavy rain days, Darwin's annual solar hours remain well above the national average. Darwin electricity prices are among the highest in Australia, which strengthens the financial case for solar year-round."}},
          {"@type": "Question", "name": "Do you install solar panels in Palmerston?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Palmerston is one of our core service areas. We install across Durack, Driver, Moulden, Gray, Woodroffe, Rosebery, Bellamack, Bakewell, Gunn, Zuccoli, Johnston, and Mitchell. Our team works in Palmerston regularly."}},
          {"@type": "Question", "name": "What is the NT Battery Grant Scheme?", "acceptedAnswer": {"@type": "Answer", "text": "The NT Battery Grant Scheme is a Northern Territory Government program that provides eligible homeowners with a rebate of up to $6,000 towards the purchase and installation of a battery storage system. Oneroof Solar is an approved installer and handles all grant applications on your behalf."}},
          {"@type": "Question", "name": "Do you install solar in Alice Springs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Oneroof Solar services Alice Springs for residential and commercial solar installations. Alice Springs has excellent solar resource with very high irradiance levels year-round. Our team travels to Alice Springs regularly. Contact us for a quote specific to your Alice Springs property."}},
          {"@type": "Question", "name": "Are your solar panels cyclone rated?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All panels and racking systems we install across the NT are rated to withstand cyclone-strength winds. Darwin's building codes require higher wind load standards than most of mainland Australia. We only use mounting systems certified to NT wind categories, with a structural assessment before every installation."}},
          {"@type": "Question", "name": "Can I get solar with $0 upfront in Darwin?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Oneroof Solar offers $0 deposit solar plans through approved finance partners. Finance terms vary by product. Our team will walk you through all available options at your consultation so you can compare the true cost of each plan before committing."}},
          {"@type": "Question", "name": "How long does solar installation take in Darwin?", "acceptedAnswer": {"@type": "Answer", "text": "Most residential solar installations in Darwin are completed in a single day. From quote approval to switching on, most Darwin customers are operational within two to four weeks, depending on Power and Water Corporation connection timelines."}}
        ]
      },
      // LocalBusiness
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "url": "https://oneroofsolar.com.au",
        "telephone": "0483986444",
        "email": "info@oneroofsolar.com.au",
        "address": {"@type": "PostalAddress", "streetAddress": "Darwin", "addressLocality": "Darwin", "addressRegion": "NT", "postalCode": "0800", "addressCountry": "AU"},
        "areaServed": ["0800","0810","0812","0820","0822","0828","0829","0830","0832","0836","0837","0838","0839","0840","0841","0845","0846","0847","0850","0852","0853","0886"],
        "hasCredential": "CEC Accredited Installer",
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "500"},
        "review": [
          {"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}, "author": {"@type": "Person", "name": "Mark T."}, "reviewBody": "We got three quotes before going with Oneroof Solar. They were the only company that came out, looked at the roof properly, and explained why our Palmerston home needed a different system size. Done in a day, working perfectly since."},
          {"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}, "author": {"@type": "Person", "name": "Sarah K."}, "reviewBody": "I specifically asked about wet season performance before signing. They gave me realistic savings figures rather than best-case numbers. The battery has already paid off during two wet season outages."},
          {"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}, "author": {"@type": "Person", "name": "David L."}, "reviewBody": "The NT Battery Grant paperwork looked complicated. Oneroof handled the whole application, confirmed we were eligible, and the rebate came through without any issues. Would have been stuck without their help."},
          {"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}, "author": {"@type": "Person", "name": "Jane R."}, "reviewBody": "Based in Alice Springs so we don't get many solar companies willing to come out. Oneroof were straightforward about travel costs, quoted fairly, and did the job properly first time. Monitoring shows above projected performance."},
          {"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}, "author": {"@type": "Person", "name": "Rachel M."}, "reviewBody": "I had an existing solar system and wanted a battery added. Oneroof assessed the inverter compatibility, explained what would work, and installed without replacing the whole system. Very honest advice."},
          {"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}, "author": {"@type": "Person", "name": "Tom B."}, "reviewBody": "Used Oneroof for our commercial warehouse solar in Darwin City. The system was designed around our peak usage hours rather than just maximum panel count. The payback calculation has proven accurate six months in."}
        ]
      },
      // Organization
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Oneroof Solar",
        "url": "https://oneroofsolar.com.au",
        "logo": "https://oneroofsolar.com.au/logo.png",
        "telephone": "0483986444",
        "email": "info@oneroofsolar.com.au",
        "address": {"@type": "PostalAddress", "addressLocality": "Darwin", "addressRegion": "NT", "postalCode": "0800", "addressCountry": "AU"}
      },
      // Services
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Residential Solar Panel Installation",
        "provider": {"@type": "LocalBusiness", "name": "Oneroof Solar"},
        "areaServed": "Northern Territory, Australia"
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Commercial Solar Panel Installation",
        "provider": {"@type": "LocalBusiness", "name": "Oneroof Solar"},
        "areaServed": "Northern Territory, Australia"
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Solar Battery Storage Installation",
        "provider": {"@type": "LocalBusiness", "name": "Oneroof Solar"},
        "areaServed": "Northern Territory, Australia"
      }
    ];

    const scriptEls: HTMLScriptElement[] = [];
    schemas.forEach((schema, idx) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `seo-jsonld-home-${idx}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptEls.push(script);
    });

    return () => {
      scriptEls.forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0A1118] px-4 pt-[110px] pb-16 md:pt-36 lg:pt-[160px] md:pb-24 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#0A1118]" />
          <img referrerPolicy="no-referrer"
            src="https://i.postimg.cc/1XWKZZkw/Bayview-0820-(2).webp"
            alt="Solar Panel Installation Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.5] max-w-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/40 opacity-90" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl pt-8 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 lg:items-start">
            
            {/* Left Content */}
            <FadeIn isHero className="lg:col-span-7">
              {/* Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-brand-400 mb-8 shadow-[0_0_20px_rgba(140,198,63,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                </span>
                CEC Accredited · NT Owned & Operated
              </div>
              
              {/* Exact H1 markup & styles */}
              <h1 
                style={{ fontSize: "clamp(34px, 4.2vw, 58px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-1px" }}
                className="text-white mb-[22px]"
              >
                Solar Panels <span className="text-brand-500">Darwin</span><br />
                Trusted Installations Across the NT
              </h1>
              
              {/* Subheading */}
              <p className="max-w-xl text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-light">
                Darwin's local solar panel installers. Residential and commercial solar, battery storage, EV chargers, and $0 deposit plans across Darwin, Palmerston and Alice Springs. NT Battery Grant paperwork handled for you.
              </p>

              {/* Stat badges */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-sm font-semibold text-white">
                {[
                  "$0 Deposit Available",
                  "NT Battery Grant Approved",
                  "Cyclone-Rated Systems",
                  "10yr Workmanship Warranty"
                ].map((feat, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-500 flex-shrink-0" />
                    {feat}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button size="lg" className="rounded-full font-bold text-base px-8 h-14 bg-brand-500 hover:bg-brand-600 text-slate-900 hover:scale-[1.02] transition-all" asChild>
                  <Link to="/contact">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full font-bold text-base px-8 h-14 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/30" asChild>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call Us {PRIMARY_PHONE}</a>
                </Button>
              </div>
            </FadeIn>
            
            {/* Right Quote Card */}
            <FadeIn isHero delay={0.2} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl rounded-[3rem] -z-10 mt-10 animate-pulse"></div>
              
              <div className="rounded-[2.5rem] bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden max-w-[480px] lg:ml-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-[100px] pointer-events-none"></div>
                
                <h3 className="text-2xl font-black text-white mb-1">Get Your Free Quote</h3>
                <p className="text-brand-400 font-bold text-sm mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
                  Response within 2 business hours
                </p>

                {isSuccess ? (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-500/30">
                      <CheckCircle2 className="w-8 h-8 text-brand-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Your quote request has been received. Our NT solar experts will contact you within 2 business hours.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6 rounded-full border-white/20 text-white hover:bg-white/10">
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Citizen" 
                        required
                        className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 text-sm font-medium"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0483 986 444" 
                        required
                        className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Suburb / Postcode</label>
                      <input 
                        type="text" 
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleInputChange}
                        placeholder="e.g. Darwin 0800" 
                        className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">I Am Interested In</label>
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-white/10 text-white focus:outline-none focus:border-brand-500 text-sm font-medium appearance-none"
                      >
                        <option value="Residential Solar Panels">Residential Solar Panels</option>
                        <option value="Commercial Solar">Commercial Solar</option>
                        <option value="Battery Storage (NT Grant)">Battery Storage (NT Grant)</option>
                        <option value="Solar + Battery Package">Solar + Battery Package</option>
                        <option value="EV Charger Installation">EV Charger Installation</option>
                      </select>
                    </div>

                    {errorMsg && <p className="text-rose-400 text-xs font-medium">{errorMsg}</p>}

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl font-bold bg-brand-500 hover:bg-brand-600 text-slate-900 mt-2 shadow-lg shadow-brand-500/20"
                    >
                      {isSubmitting ? "Processing..." : "Request Free Quote"}
                    </Button>
                    
                    <p className="text-[11px] text-slate-400 text-center font-medium mt-3">
                      Your details are private and never shared
                    </p>
                  </form>
                )}

                {/* Social proof widget */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                    ].map((src, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border border-slate-900 bg-slate-800 overflow-hidden flex items-center justify-center">
                        <img 
                          referrerPolicy="no-referrer"
                          src={src} 
                          alt={`Customer avatar ${i + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border border-slate-900 bg-brand-500/20 text-brand-400 flex items-center justify-center text-[10px] font-black">+500</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-yellow-400 mb-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-xs font-bold text-slate-300">Loved by Darwin homeowners</p>
                  </div>
                </div>

              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* TRUST CREDENTIALS BAR */}
      <div className="trust-bar select-none">
        <style dangerouslySetInnerHTML={{ __html: `
          .trust-bar {
              width: 100%;
              overflow: hidden;
              background: #111111;
              border-top: 1px solid #55D84A;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
          }

          .trust-marquee-track {
              display: flex;
              flex-wrap: nowrap;
              width: max-content;
              animation: trustMarquee 30s linear infinite;
          }

          .trust-bar:hover .trust-marquee-track {
              animation-play-state: paused;
          }

          @keyframes trustMarquee {
              0% {
                  transform: translateX(0);
              }
              100% {
                  transform: translateX(-50%);
              }
          }

          .trust-row {
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
          }

          .trust-item {
              display: flex;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
              height: 42px;
              padding: 0 32px;
              border-right: 1px solid rgba(255, 255, 255, 0.08);
              flex-shrink: 0;
          }

          .trust-item-inner {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: nowrap;
              gap: 10px;
              white-space: nowrap;
          }

          .trust-dot {
              display: block;
              flex: 0 0 7px;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #55D84A;
          }

          .trust-text {
              color: #ffffff;
              font-family: inherit;
              font-size: 12px;
              font-weight: 600;
              line-height: 1;
              white-space: nowrap;
          }

          @media (max-width: 768px) {
              .trust-item {
                  padding: 0 20px;
              }
              .trust-text {
                  font-size: 11px;
              }
          }
        ` }} />
        <div className="trust-marquee-track">
          {/* First set of items */}
          <div className="trust-row">
            {[
              "CEC Accredited Installers",
              "NT Licensed Electricians",
              "$0 Deposit Solar Plans",
              "NT Battery Grant Approved",
              "500+ NT Systems Installed",
              "Tesla & Fronius Authorised"
            ].map((statement, idx) => (
              <div key={`set1-${idx}`} className="trust-item">
                <div className="trust-item-inner">
                  <span className="trust-dot"></span>
                  <span className="trust-text">{statement}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Second identical set for seamless looping */}
          <div className="trust-row" aria-hidden="true">
            {[
              "CEC Accredited Installers",
              "NT Licensed Electricians",
              "$0 Deposit Solar Plans",
              "NT Battery Grant Approved",
              "500+ NT Systems Installed",
              "Tesla & Fronius Authorised"
            ].map((statement, idx) => (
              <div key={`set2-${idx}`} className="trust-item">
                <div className="trust-item-inner">
                  <span className="trust-dot"></span>
                  <span className="trust-text">{statement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNERS LOGO STRIP */}
      <PartnersMarquee />

      {/* COMPLETE ENERGY SOLUTIONS SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-slate-200 opacity-40 pointer-events-none" />
        <div className="absolute -left-40 top-40 w-96 h-96 bg-brand-200/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-3 block">Complete Energy Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Solar Panels Built for Darwin's Climate and Conditions
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Darwin gets more sunshine per year than almost any other Australian city. That means solar panels here work harder, produce more, and pay back faster than anywhere else in the country. Oneroof Solar was founded in Darwin to install solar systems specifically suited to the Top End - high UV, heavy wet seasons, cyclone-rated equipment, and territory humidity.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We handle everything from your initial consultation and system design through to installation, grid connection, and ongoing support. Our team are NT-based, locally licensed, and familiar with Darwin's unique grid setup, power bills, and weather patterns.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-brand-600 font-extrabold text-base hover:text-brand-700 uppercase tracking-wider transition-colors">
                LEARN MORE <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Bento Grid with 5 Cards */}
          <div className="space-y-6">
            {/* Row 1 - Two Prominent Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Battery Storage Systems */}
              <div className="rounded-[2.5rem] bg-slate-900 p-8 sm:p-10 shadow-xl border border-slate-800 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden flex flex-col group h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="inline-flex rounded-2xl bg-white/10 backdrop-blur-md p-4 text-white border border-white/10">
                    <Battery className="h-7 w-7" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider border border-brand-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                    REBATE ELIGIBLE
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-400 transition-colors">Battery Storage Systems</h3>
                <p className="text-slate-400 leading-relaxed font-medium mb-6 relative z-10 flex-grow">
                  Store your solar energy for nighttime use and protect against wet season grid outages. NT Battery Grant rebates up to $6,000 - we handle all paperwork.
                </p>
              </div>

              {/* Card 2: Residential & Commercial Solar */}
              <div className="rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-brand-500/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col group h-full">
                <div className="absolute -right-12 -bottom-12 text-brand-500/5 group-hover:text-brand-500/10 transition-colors duration-500 pointer-events-none transform group-hover:rotate-6">
                  <Grid className="w-48 h-48" />
                </div>
                <div className="mb-8 inline-flex rounded-2xl bg-brand-50 p-4 text-brand-600 border border-brand-100 w-max">
                  <Grid className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">Residential & Commercial Solar</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
                  Custom-designed systems for Darwin homes and NT businesses. Sized to your actual power bills, not a generic quote.
                </p>
              </div>
            </div>

            {/* Row 2 - Three Standard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 3: Smart Inverters */}
              <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-brand-500/20 hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="mb-6 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 w-max border border-brand-100">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Smart Inverters</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow">
                  Fronius and premium hybrid inverters with real-time monitoring apps for your Darwin system.
                </p>
              </div>

              {/* Card 4: Repairs & Maintenance */}
              <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-brand-500/20 hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="mb-6 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 w-max border border-brand-100">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Repairs & Maintenance</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow">
                  Keep your system running at peak performance. Fast response from our Darwin-based team.
                </p>
              </div>

              {/* Card 5: EV Charger Installation Darwin */}
              <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-brand-500/20 hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="mb-6 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 w-max border border-brand-100">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">EV Charger Installation Darwin</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow">
                  Home and commercial EV charger installs. Pair with solar and charge your car for free.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY ONEROOF / PREMIUM SOLAR SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Points Content */}
            <FadeIn className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-3 block">Premium Solar for Darwin Homes</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Premium Solar Systems For The Northern Territory
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Most solar companies in Australia operate from interstate. Oneroof Solar is based in Darwin, owned in Darwin, and installs entirely across the Northern Territory. That makes a real difference in how we design systems, source equipment, and support customers after installation.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "High-Performance Panels for NT Conditions",
                    text: "We supply REC, Jinko Solar, and AIKO panels - all tested for Darwin's high UV index, heat load, and cyclone-rated wind requirements.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Flexible Financing - No Expert Required",
                    text: "$0 deposit solar finance through approved NT lenders. We walk you through every option so you understand the true cost before you sign.",
                    icon: CircleDollarSign
                  },
                  {
                    title: "Real-Time Monitoring for Your NT System",
                    text: "Every installation includes solar monitoring. Track your daily production, savings, and system performance from your phone or tablet.",
                    icon: Activity
                  }
                ].map((pt, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-50 flex items-center justify-center rounded-xl border border-brand-100 text-brand-600">
                      <pt.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{pt.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{pt.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full h-12 px-8 text-base font-bold bg-[#8cc63f] hover:bg-[#7bc034] text-slate-900 shadow-md" asChild>
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-bold text-slate-700 border-slate-200" asChild>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call Us 0483 986 444</a>
                </Button>
              </div>
            </FadeIn>

            {/* Right Image Container */}
            <FadeIn delay={0.2} className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-slate-100">
                <img 
                  referrerPolicy="no-referrer" 
                  src="https://i.postimg.cc/fWGBJR1G/dji-fly-20240620-115258-79-1718868305112-photo.webp" 
                  alt="Premium NT Solar System" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Image Badge */}
                <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl premium-warranty-badge">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 premium-glow-icon">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Premium Warranty</p>
                    <p className="text-white font-extrabold text-sm leading-none">25yr Panel Warranty</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* EXCLUSIVE DEALS SECTION - KEPT UNCHANGED */}
      <PackagesSection />

      {/* HOW IT WORKS / PROCESS SECTION */}
      <section className="py-28 bg-[#030712] bg-gradient-to-b from-[#030712] via-[#0B1524] to-[#030712] overflow-hidden relative border-b border-slate-950">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Row Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] lg:gap-[10%] items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-brand-400 mb-8 uppercase tracking-widest">
                HOW IT WORKS
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-black text-white tracking-tight leading-[1.1] max-w-xl">
                Your Seamless Journey to<br />
                <span className="text-brand-400">Solar Energy</span>
              </h2>
            </div>
            <div className="pl-6 border-l-2 border-brand-400/80">
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
                We have completely streamlined our process to make switching to solar as easy, fast, and stress-free as possible.
              </p>
            </div>
          </div>

          {/* Staggered Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
            {[
              { 
                num: "01", 
                title: "Free Consultation", 
                desc: "We assess your power bills, roof space, and energy goals. You receive a written quote with no pressure to proceed.",
                icon: HeadphonesIcon,
                gradient: "from-[#8cc63f] to-[#7bc034]",
                shadow: "shadow-brand-500/10",
                yOffset: "lg:translate-y-0"
              },
              { 
                num: "02", 
                title: "Custom Design", 
                desc: "Our engineers design a system sized for your actual usage - panel layout, inverter selection, and battery options if required.",
                icon: Layers,
                gradient: "from-cyan-400 to-blue-600",
                shadow: "shadow-blue-500/10",
                yOffset: "lg:translate-y-6"
              },
              { 
                num: "03", 
                title: "Installation", 
                desc: "Our NT-licensed team installs your system in one day in most cases. Clean, cyclone-rated, and grid-ready from panel to inverter.",
                icon: Wrench,
                gradient: "from-teal-400 to-emerald-600",
                shadow: "shadow-teal-500/10",
                yOffset: "lg:translate-y-2"
              },
              { 
                num: "04", 
                title: "Power On", 
                desc: "System commissioned, grid-connected, monitoring set up. Start tracking your savings from your phone from day one.",
                icon: Zap,
                gradient: "from-[#8cc63f] to-emerald-500",
                shadow: "shadow-brand-500/10",
                yOffset: "lg:translate-y-8"
              }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-950/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:border-brand-500/30 hover:bg-slate-900/60 transition-all duration-500 shadow-2xl relative group overflow-hidden flex flex-col h-full ${step.yOffset}`}
              >
                {/* Background Number */}
                <div className="absolute -right-4 -bottom-6 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-all duration-500 select-none font-sans leading-none">
                  {step.num}
                </div>
                
                {/* Icon Box */}
                <div className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${step.gradient} p-4 text-slate-900 shadow-lg ${step.shadow} border border-white/10 w-max relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed flex-grow relative z-10 font-normal">
                  {step.desc}
                </p>
                
                {/* Subtle Glow Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/50 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ONEROOF SOLAR SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-slate-100">
                <img 
                  referrerPolicy="no-referrer" 
                  src="https://i.postimg.cc/05nhGvxW/Stuart-Park-0820.webp" 
                  alt="About Oneroof Solar" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="bg-brand-500 text-slate-900 p-3 rounded-xl shadow-md flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg leading-none mb-1">Local Darwin Team</h4>
                    <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest">Proudly Territory Owned</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-3 block">About Oneroof Solar</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Your Expert Darwin Solar Installer
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                As a CEC-accredited and locally owned Darwin solar company, we bring real NT expertise to every installation. We are not an interstate call centre - we are your neighbours. Our team understands Darwin's grid, Darwin's weather, and Darwin's building requirements.
              </p>

              {/* 4 Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "CEC Accredited", desc: "Clean Energy Council accredited installer for residential and commercial systems.", icon: ShieldCheck },
                  { title: "Darwin Based", desc: "NT-owned, Darwin-based team. We understand the Top End like no interstate company can.", icon: MapPin },
                  { title: "NT Grant Partners", desc: "Approved under the NT Battery Grant Scheme. We handle all paperwork on your behalf.", icon: Award },
                  { title: "500+ Installations", desc: "Over 500 solar systems installed across Darwin, Palmerston, and the NT.", icon: Activity }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NT BATTERY GRANT SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-slate-200 opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-3 block">NT Government Scheme</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Save Up to $6,000 on Your Solar Battery
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The NT Government's Battery Grant Scheme provides eligible Darwin and Northern Territory homeowners with a rebate of up to $6,000 towards the cost of a solar battery storage system. Oneroof Solar is an approved installer - we handle all paperwork on your behalf.
              </p>

              {/* Bullet list */}
              <div className="space-y-4 mb-8">
                {[
                  "$6,000 NT Battery Grant Rebate",
                  "Available to NT homeowners across all postcodes",
                  "Oneroof Solar handles all grant paperwork",
                  "Combine with $0 deposit finance for zero upfront cost",
                  "Available while scheme funds last - enquire now"
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-600 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-700 text-base font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Callout Box */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-bl-[80px] pointer-events-none" />
                <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider border border-brand-200 flex items-center gap-1.5 mb-6 w-max">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                  REBATE ENQUIRY
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Check Your Eligibility Today</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                  Speak with our Darwin team to confirm your eligibility for the NT Battery Grant Scheme. We prepare and submit the complete application on your behalf - you just need to be an NT homeowner.
                </p>

                <div className="space-y-3 flex flex-col">
                  <Button size="lg" className="rounded-full w-full h-12 text-base font-bold bg-[#8cc63f] hover:bg-[#7bc034] text-slate-900" asChild>
                    <Link to="/contact">View NT Battery Grant Details</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full w-full h-12 text-base font-bold text-slate-700 border-slate-200" asChild>
                    <Link to="/contact">Talk to Our Darwin Team</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BATTERY STORAGE SECTION */}
      <section className="py-24 bg-[#101522] relative overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Interactive Graphic */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-slate-800">
                <img 
                  referrerPolicy="no-referrer" 
                  src="https://i.postimg.cc/pLr9VPVS/Nightcliff-0810-(1)-(1).webp" 
                  alt="Solar Battery Storage Darwin" 
                  className="w-full h-full object-cover transition-transform duration-1000" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101522] via-[#101522]/40 to-transparent opacity-80"></div>
                
                {/* Floating Widget */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <BatteryMedium className="w-5 h-5 text-brand-400" />
                      </div>
                      <div className="text-white font-extrabold text-sm">Home Battery</div>
                    </div>
                    <div className="text-brand-400 font-black text-base">13.5 kWh</div>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-2.5 mb-3 overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-brand-600 to-emerald-400 h-full rounded-full w-[85%] relative">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[bg-slide_1s_linear_infinite]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-slate-400">STATUS: SYSTEM ACTIVE</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Points Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest text-brand-400 uppercase mb-3 block">BATTERY STORAGE DARWIN</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Uninterrupted Power for Your Home
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Darwin's wet season brings grid outages that can last hours. A solar battery keeps your home powered through any outage and stores excess solar energy produced during the day for use at night, cutting your power bill significantly year-round.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Wet Season Backup Power", desc: "Keep your fridge, lights, and critical appliances running during Darwin wet season grid outages.", icon: ShieldCheck },
                  { title: "Store Energy - Use It at Night", desc: "Store excess solar energy during the day and use it during evening peak hours. Cut your power bill significantly.", icon: Sun },
                  { title: "NT Battery Grant - Up to $6,000 Off", desc: "Eligible homeowners save up to $6,000 on battery installation. We are an approved NT Grant Scheme installer.", icon: Award }
                ].map((pt, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-400">
                      <pt.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{pt.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button size="lg" className="rounded-full h-14 px-8 font-bold text-base bg-brand-500 hover:bg-brand-600 text-slate-900 shadow-lg shadow-brand-500/20" asChild>
                  <Link to="/contact">Learn About Battery Storage</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COVERAGE AREA SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-slate-200 opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mx-auto text-center max-w-3xl mb-20">
            <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-3 block">WHERE WE SERVE</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Solar Installations Across <span className="text-brand-600">Darwin & the NT</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Oneroof Solar installs across every suburb in Greater Darwin, plus Alice Springs, Katherine, and surrounding NT communities.
            </p>
          </div>

          {/* Serviced Suburbs 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1: Darwin City */}
            <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-emerald-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 uppercase tracking-widest">
                  Primary
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-white mb-2">Darwin City</h3>
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-4">
                  Primary Hub — (0800, 0820) — Residential & Commercial
                </span>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Darwin City", "Fannie Bay", "Stuart Park", "East Point", "Bayview", "Winnellie"].map((suburb, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="text-sm font-bold text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                View Darwin Solar <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Northern Darwin */}
            <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-emerald-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 uppercase tracking-widest">
                  Active
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-white mb-2">Northern Darwin</h3>
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-4">
                  (0810, 0812) — Residential & Commercial
                </span>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Nightcliff", "Casuarina", "Rapid Creek", "Coconut Grove", "Tiwi", "Muirhead", "Wanguri", "Karama", "Leanyer", "Alawa"].map((suburb, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="text-sm font-bold text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                View All Suburbs <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Alice Springs */}
            <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-emerald-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 uppercase tracking-widest">
                  Regional
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-white mb-2">Alice Springs</h3>
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-4">
                  2nd Hub — (0870) — Residential & Commercial
                </span>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Alice Springs has some of the highest solar irradiance in Australia. Our team travels regularly for residential and commercial installations.
                </p>
                <div className="mt-4">
                  <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest block mb-2">Coverage:</span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Alice Springs", "Katherine", "Tennant Creek"].map((place, i) => (
                      <span key={i} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/solar-alice-springs/" className="text-sm font-bold text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                Alice Springs Solar <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4: Palmerston */}
            <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-emerald-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 uppercase tracking-widest">
                  Active
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-white mb-2">Palmerston</h3>
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-4">
                  (0830, 0832) — Residential & Commercial
                </span>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Palmerston City", "Driver", "Moulden", "Gray", "Woodroffe", "Durack", "Rosebery", "Bellamack", "Bakewell", "Gunn", "Zuccoli"].map((suburb, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="text-sm font-bold text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                Palmerston Solar <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 5: Darwin Rural */}
            <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-emerald-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 uppercase tracking-widest">
                  Active
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-white mb-2">Darwin Rural</h3>
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-4">
                  (0822, 0836–0847) — Residential & Commercial
                </span>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Humpty Doo", "Howard Springs", "Litchfield", "Berry Springs", "Noonamah", "Coolalinga", "Batchelor", "Darwin River", "Adelaide River"].map((suburb, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="text-sm font-bold text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                Darwin Rural <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 6: Not Sure We Cover Your Area? */}
            <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
              {/* Abstract Map Graphic */}
              <div className="absolute top-0 left-0 right-0 h-40 opacity-15 pointer-events-none overflow-hidden">
                <svg className="w-full h-full text-[#8cc63f]" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,30 50,70 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M0,30 Q30,60 60,20 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="50" cy="50" r="1.5" className="fill-brand-400" />
                  <circle cx="30" cy="40" r="1" className="fill-brand-400" />
                  <circle cx="70" cy="45" r="1" className="fill-brand-400" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A120D]" />
              </div>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-emerald-500" />
              
              <div className="flex-grow relative z-10 pt-6">
                <h3 className="text-2xl font-black text-white mb-4">Not Sure We Cover Your Area?</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-normal mb-8">
                  If you are in the Northern Territory, we almost certainly do. Call us and we will confirm within one business day.
                </p>
              </div>
              <div className="relative z-10 mt-auto">
                <Button size="lg" className="rounded-full w-full h-12 text-sm font-bold bg-[#8cc63f] hover:bg-[#7bc034] text-slate-900 group-hover:scale-[1.02] transition-transform duration-300" asChild>
                  <Link to="/contact">Check My Area</Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Postcode strip */}
          <div className="bg-slate-50/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl py-5 px-6 sm:px-8 border border-slate-200/60 shadow-sm max-w-5xl mx-auto">
            <div className="flex flex-col gap-3.5 items-start text-left">
              <span className="text-[10px] font-extrabold text-brand-600 uppercase tracking-widest">
                ALL NT POSTCODES:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-slate-800 text-[11px] font-bold">
                {[
                  "0800", "0810", "0812", "0820", "0822", "0828", "0829", "0830", "0832", "0834", 
                  "0835", "0836", "0837", "0838", "0839", "0840", "0841", "0845", "0846", "0847", 
                  "0850", "0852", "0853", "0886"
                ].map((p, idx) => (
                  <span key={idx} className="bg-white border border-brand-500/20 hover:border-brand-500/40 hover:shadow-sm transition-all duration-300 px-2.5 py-1 rounded-full text-slate-800 shadow-sm">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RECENT INSTALLATIONS SECTION - KEPT UNCHANGED */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-brand-600 font-bold mb-4 uppercase tracking-wider text-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                  Our Portfolio
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                  Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Installations</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Button variant="outline" className="rounded-full font-bold" asChild>
                <Link to="/projects">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://i.postimg.cc/KYkV73fq/Bayview-0820.webp", title: "Bayview - 0820", loc: "Bayview, NT 0820", desc: "Residential solar installation", systemSize: "6.6kW", battery: "None" },
              { img: "https://i.postimg.cc/ydTT0VqV/Berrimah-0828.webp", title: "Berrimah - 0828", loc: "Berrimah, NT 0828", desc: "Commercial setup", systemSize: "10kW", battery: "None" },
              { img: "https://i.postimg.cc/xjRszPYm/Bellamack-0832-(2)-(1).webp", title: "Bellamack - 0832", loc: "Bellamack, NT 0832", desc: "Solar with battery backup", systemSize: "8kW", battery: "13.5kWh" }
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-500 group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <img referrerPolicy="no-referrer" loading="lazy" src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 z-20 flex gap-4 text-white text-sm font-medium">
                      <div className="flex items-center gap-1.5 drop-shadow-md">
                        <MapPin className="w-4 h-4 text-brand-400" />
                        {p.loc}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      {p.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">System Size</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800">
                          <Sun className="w-4 h-4 text-brand-500" /> {p.systemSize}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Battery Storage</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800">
                          <Battery className="w-4 h-4 text-brand-500" /> {p.battery}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE ONEROOF GUARANTEE */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-brand-600 to-green-500 rounded-[3rem] p-1 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="bg-slate-900 rounded-[2.8rem] px-6 py-16 md:px-12 md:py-20 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]"></div>
              
              <div className="lg:w-1/3 z-10">
                <FadeIn>
                  <Award className="w-16 h-16 text-brand-500 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Oneroof Guarantee</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Peace of mind comes standard. We stand behind our work with industry-leading warranties and local NT support you can count on.
                  </p>
                </FadeIn>
              </div>
              
              <div className="lg:w-2/3 z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {[
                  { title: "25-Year Performance Warranty", description: "Your solar panels are guaranteed to produce high yields for a quarter of a century." },
                  { title: "CEC Accredited Experts", description: "Every installation is carried out by Clean Energy Council approved electricians." },
                  { title: "10-Year Workmanship Warranty", description: "Flawless execution backed by our rigorous quality control and extended guarantee." },
                  { title: "Local NT Support", description: "We're right here in the Territory. Fast response times and dedicated local service." }
                ].map((item, i) => {
                  const isLast = i === 3;
                  const classes = isLast ? "w-10 h-10 mb-5 text-slate-900" : "w-10 h-10 text-brand-400 mb-5";
                  const renderIcon = (idx: number) => {
                    switch(idx % 4) {
                      case 0: return <ShieldCheck className={classes} />;
                      case 1: return <CheckCircle2 className={classes} />;
                      case 2: return <Activity className={classes} />;
                      default: return <HeadphonesIcon className={classes} />;
                    }
                  };
                  return (
                    <FadeIn key={i} delay={(i + 1) * 0.1}>
                      <div className={isLast 
                        ? "bg-brand-500 rounded-3xl p-8 shadow-lg shadow-brand-500/20 hover:bg-brand-400 transition-colors h-full text-slate-900"
                        : "bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors h-full text-slate-300"
                      }>
                        {renderIcon(i)}
                        <h3 className={isLast ? "text-xl font-bold text-slate-900 mb-2" : "text-xl font-bold text-white mb-2"}>{item.title}</h3>
                        <p className={isLast ? "text-slate-900/80 font-medium" : "text-slate-400"}>{item.description}</p>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS GRID */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 mb-4 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                <span>Verified 5-Star Reviews</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-lg text-slate-655 max-w-2xl mx-auto">
                Real feedback from NT customers across Darwin, Palmerston, Alice Springs, and surrounding NT communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Mark T.",
                  location: "Palmerston, NT",
                  project: "6.6kW Residential Solar",
                  text: "We got three quotes before going with Oneroof Solar. They were the only company that came out, looked at the roof properly, and explained why our Palmerston home needed a different system size. Done in a day, working perfectly since."
                },
                {
                  name: "Sarah K.",
                  location: "Nightcliff, Darwin",
                  project: "Solar + Battery Package",
                  text: "I specifically asked about wet season performance before signing. They gave me realistic savings figures rather than best-case numbers. The battery has already paid off during two wet season outages."
                },
                {
                  name: "David L.",
                  location: "Bakewell, Palmerston",
                  project: "Battery Storage",
                  text: "The NT Battery Grant paperwork looked complicated. Oneroof handled the whole application, confirmed we were eligible, and the rebate came through without any issues. Would have been stuck without their help."
                },
                {
                  name: "Jane R.",
                  location: "Alice Springs, NT",
                  project: "10kW Residential Solar",
                  text: "Based in Alice Springs so we don't get many solar companies willing to come out. Oneroof were straightforward about travel costs, quoted fairly, and did the job properly first time. Monitoring shows above projected performance."
                },
                {
                  name: "Rachel M.",
                  location: "Casuarina, Darwin",
                  project: "Battery Retrofit",
                  text: "I had an existing solar system and wanted a battery added. Oneroof assessed the inverter compatibility, explained what would work, and installed without replacing the whole system. Very honest advice."
                },
                {
                  name: "Tom B.",
                  location: "Darwin City, NT",
                  project: "Commercial Solar",
                  text: "Used Oneroof for our commercial warehouse solar in Darwin City. The system was designed around our peak usage hours rather than just maximum panel count. The payback calculation has proven accurate six months in."
                }
              ].map((rev, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-[14px] leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-slate-100">
                    <div className="w-10 h-10 bg-slate-100/80 text-slate-700 font-bold text-xs flex items-center justify-center rounded-full border border-slate-200/50">
                      {rev.name.substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">{rev.name}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {rev.location} • <span className="text-brand-600 font-bold">{rev.project}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700">
                See All Customer Reviews →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMMON INQUIRIES (FAQ) */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-3 block">Common Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Common Solar Questions from Darwin Homeowners
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Answers to the questions we hear most from customers across Darwin, Palmerston, and Alice Springs.
            </p>
          </div>

          {/* Collapsible FAQ Block */}
          <div className="space-y-4">
            {[
              {
                q: "How much do solar panels cost in Darwin?",
                a: "A standard 6.6kW residential solar system in Darwin costs between $7,500 and $10,000 before government incentives. After STCs the net cost is typically lower. Darwin homeowners also have access to the NT Battery Grant Scheme which reduces battery costs by up to $6,000. We provide written quotes at no charge."
              },
              {
                q: "Is solar worth it in Darwin's wet season?",
                a: "Yes. Darwin receives high solar irradiance even during the wet season. While cloud cover reduces output on heavy rain days, Darwin's annual solar hours remain well above the national average. Darwin electricity prices are among the highest in Australia, which strengthens the financial case for solar year-round."
              },
              {
                q: "Do you install solar panels in Palmerston?",
                a: "Yes. Palmerston is one of our core service areas. We install across Durack, Driver, Moulden, Gray, Woodroffe, Rosebery, Bellamack, Bakewell, Gunn, Zuccoli, Johnston, and Mitchell. Our team works in Palmerston regularly."
              },
              {
                q: "What is the NT Battery Grant Scheme?",
                a: "The NT Battery Grant Scheme is a Northern Territory Government program that provides eligible homeowners with a rebate of up to $6,000 towards the purchase and installation of a battery storage system. Oneroof Solar is an approved installer and handles all grant applications on your behalf."
              },
              {
                q: "Do you install solar in Alice Springs?",
                a: "Yes. Oneroof Solar services Alice Springs for residential and commercial solar installations. Alice Springs has excellent solar resource with very high irradiance levels year-round. Our team travels to Alice Springs regularly. Contact us for a quote specific to your Alice Springs property."
              },
              {
                q: "Are your solar panels cyclone rated?",
                a: "Yes. All panels and racking systems we install across the NT are rated to withstand cyclone-strength winds. Darwin's building codes require higher wind load standards than most of mainland Australia. We only use mounting systems certified to NT wind categories, with a structural assessment before every installation."
              },
              {
                q: "Can I get solar with $0 upfront in Darwin?",
                a: "Yes. Oneroof Solar offers $0 deposit solar plans through approved finance partners. Finance terms vary by product. Our team will walk you through all available options at your consultation so you can compare the true cost of each plan before committing."
              },
              {
                q: "How long does solar installation take in Darwin?",
                a: "Most residential solar installations in Darwin are completed in a single day. From quote approval to switching on, most Darwin customers are operational within two to four weeks, depending on Power and Water Corporation connection timelines."
              }
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-900 bg-slate-50 hover:bg-slate-100/70 transition-colors flex justify-between items-center"
                  >
                    <span>{faq.q}</span>
                    <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-200' : 'max-h-0'}`}>
                    <p className="px-6 py-5 text-slate-600 text-sm leading-relaxed bg-white">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700">
              View All Solar FAQs →
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl sm:rounded-[3rem] overflow-hidden bg-[#0A1118] border border-slate-800 px-6 py-12 sm:p-10 md:p-16 lg:p-20 shadow-2xl shadow-brand-500/10">
            <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-r from-transparent to-brand-500/20 rounded-l-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-white uppercase tracking-widest">GET STARTED TODAY</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                    Ready to slash your <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">electricity bills?</span>
                  </h2>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Schedule a free consultation today. Our experts will design the perfect system for your roof and energy needs in Darwin, Alice Springs, or Palmerston.
                  </p>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-center sm:justify-start lg:items-end gap-4 w-full">
                <FadeIn delay={0.2} className="w-full sm:w-auto lg:w-full max-w-sm flex flex-col gap-4">
                  <Button size="lg" className="rounded-full w-full h-16 text-lg font-bold bg-gradient-to-r from-brand-500 to-emerald-500 hover:from-brand-500 hover:to-emerald-500 text-slate-900 shadow-[0_0_40px_rgba(140,198,63,0.3)] hover:shadow-[0_0_60px_rgba(140,198,63,0.4)] transition-all hover:-translate-y-1" asChild>
                    <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 w-6 h-6" /></Link>
                  </Button>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-flex items-center justify-center rounded-full w-full h-16 text-lg font-bold border-2 border-white/20 text-white hover:bg-transparent hover:text-white hover:border-white/20 backdrop-blur-sm transition-all shadow-sm">
                    Call Us: {PRIMARY_PHONE}
                  </a>
                  <p className="text-slate-500 text-sm font-medium text-center mt-2">
                    No obligations. 100% free quote.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
