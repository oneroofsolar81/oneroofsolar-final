import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  Home,
  Building2,
  Car,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Clock,
  FileText,
  ChevronDown,
  MapPin,
  BadgeCheck,
  AlertTriangle,
  Search,
  ClipboardList,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import heroImg from "../assets/images/ev_charger_install_hero.webp";
import weatherImg from "../assets/images/darwin_storm_roof_1785343440441.webp";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

export function EvChargerRepair() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "EV Charger Repair Darwin NT | Fast Diagnosis | Oneroof Solar",
    metaDescription:
      "Licensed EV charger repair in Darwin. Fault diagnosis, weather and electrical faults, honest repair-or-replace advice. Book a callout today.",
    canonicalUrl: "https://oneroofsolar.com.au/services/ev-chargers/repair",
    robots: "index, follow",
    openGraphTitle: "EV Charger Repair Darwin NT | Fast Diagnosis | Oneroof Solar",
    openGraphDescription:
      "Licensed EV charger repair in Darwin. Fault diagnosis, weather and electrical faults, honest repair-or-replace advice. Book a callout today.",
    twitterTitle: "EV Charger Repair Darwin NT | Fast Diagnosis | Oneroof Solar",
    twitterDescription:
      "Licensed EV charger repair in Darwin. Fault diagnosis and honest repair-or-replace advice from a local Berrimah team.",
  };

  const faqs = [
    {
      q: "How much does EV charger repair cost in Darwin?",
      a: "It depends on the fault. A tripped breaker, loose connection, or weather-damaged cable is a smaller job. A failed control board or water-damaged unit costs more and sometimes points to replacement. We confirm an exact price after diagnosis, before any work goes ahead.",
    },
    {
      q: "What should I do if my EV charger stops working?",
      a: "Do not open the unit. Check whether the isolator or circuit breaker has tripped, and whether the vehicle charges on a different outlet or public charger. Note any error light or code, then call a licensed electrician. DIY work is a genuine electrical hazard and can void the warranty.",
    },
    {
      q: "Is it cheaper to repair or replace an EV charger?",
      a: "Repair is usually the better first step if the unit is relatively new, still under warranty, or the fault is a single part such as a cable, socket, or breaker. Replacement makes more sense for older units, water-damaged chargers, or models where parts are no longer available.",
    },
    {
      q: "Can a normal electrician repair an EV charger?",
      a: "EV chargers need specific electrical knowledge, not just general wiring. Our team are licensed and SAA Accredited, so diagnosis and any follow-on work meet Australian standards rather than a guess at the switchboard.",
    },
    {
      q: "Will a repair void my charger warranty?",
      a: "Not if it is carried out by a licensed technician and the manufacturer still covers the unit. Unauthorised or DIY repairs are what typically void a warranty. We check your warranty status before any work starts.",
    },
    {
      q: "How long does an EV charger repair take?",
      a: "Simple faults can often be fixed on the same visit. Repairs that need a replacement part usually take a few days to a week, depending on stock from the manufacturer.",
    },
    {
      q: "Can you repair a charger that was not installed by Oneroof Solar?",
      a: "Yes. We diagnose home and commercial EV chargers across Darwin, including units we did not originally install. Send a photo of the charger and any error display, and we will confirm before you book a callout.",
    },
    {
      q: "Will my charger survive Darwin's wet season after a repair?",
      a: "If weather got in, we fix the fault and check seals, mounting, and drainage so the same rain and humidity do not take it out again. If the unit is too far gone, we will say so and point you to a weather-rated replacement instead of patching it.",
    },
  ];

  const signsList = [
    "The charger will not start, or your car stays on a trickle charge overnight.",
    "A red, amber, or flashing fault light on the unit or in the app.",
    "The charger trips the breaker, RCD, or isolator as soon as you plug in.",
    "Error codes on the display, or the monitoring app has gone quiet.",
    "Visible water, rust, cracked housing, or heat marks around the unit.",
    "A burning smell, buzzing, or a cable that runs hotter than it used to.",
    "The unit worked before a storm and has not charged properly since.",
  ];

  const whyFailList = [
    "Wet season rain and humidity get into outdoor housings that were never sealed for the Top End.",
    "Lightning and voltage surges between November and April can knock out control boards the same way they hit inverters.",
    "Heat through the build-up and Dry season pushes internals harder than chargers built for cooler states.",
    "Coastal salt air around Nightcliff, Fannie Bay, Larrakeyah and Nakara speeds up corrosion on connectors and mounts.",
    "Loose cyclone-season mounting or a damaged cable gland lets water in long before the charger actually fails.",
  ];

  const whoNeedsRepair = [
    {
      title: "Home Charging",
      icon: Home,
      text: "Most homeowners call when overnight charging stops working and the car is not ready in the morning. We diagnose the unit, the circuit, and the vehicle connection so you are not guessing which one failed.",
    },
    {
      title: "Businesses & Sites",
      icon: Building2,
      text: "A dead charger on a workplace or retail site is a staff and customer problem, not just an electrical one. We treat commercial callouts as priority work and give a clear timeline before parts are ordered.",
    },
    {
      title: "Fleet & Operators",
      icon: Car,
      text: "If vehicles need to leave charged every shift, a down charger costs more than a callout. We inspect the unit and the supply so the rest of the fleet setup is not sitting idle while one point is out.",
    },
  ];

  const repairOrReplace = [
    {
      title: "Age and warranty",
      desc: "Units still under manufacturer warranty, or only a few years old, are almost always worth diagnosing before you replace them.",
      icon: Clock,
    },
    {
      title: "Type of fault",
      desc: "A tripped breaker, failed socket, damaged cable, or loose connection is a straightforward repair. A water-logged board usually is not.",
      icon: Wrench,
    },
    {
      title: "Parts availability",
      desc: "If the manufacturer still supplies parts for your model, repair is usually the cheaper path. Discontinued units often make replacement the better long-term option.",
      icon: ShieldCheck,
    },
    {
      title: "Cost comparison",
      desc: "We give you both prices before any work starts, so the decision is yours, not ours.",
      icon: FileText,
    },
  ];

  const processSteps = [
    { icon: ClipboardList, title: "Get In Touch", text: "Call or send a photo of the charger and any error light or code. Tell us whether it is a home, business, or fleet unit." },
    { icon: Search, title: "On-site Diagnosis", text: "We test the charger, the circuit, and the isolator with proper equipment, not a guess at the switchboard." },
    { icon: FileText, title: "Clear Quote", text: "You get a repair or replace recommendation with pricing before we start. No hidden extras." },
    { icon: Wrench, title: "Repair & Test", text: "Licensed work, then a full charge test and a check that weather seals and mounting still suit Darwin." },
  ];

  const brands = ["Sigenergy", "Myenergi", "Fronius"];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "EV Charger Repair Darwin",
      provider: {
        "@type": "LocalBusiness",
        name: "Oneroof Solar",
        telephone: PRIMARY_PHONE,
        email: "info@oneroofsolar.com.au",
      },
      areaServed: "Darwin, Northern Territory",
      description:
        "Licensed EV charger repair for Darwin homes, businesses, and fleets, including weather and electrical fault diagnosis.",
      url: "https://oneroofsolar.com.au/services/ev-chargers/repair",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oneroofsolar.com.au/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://oneroofsolar.com.au/services/ev-chargers/installation" },
        { "@type": "ListItem", position: 3, name: "EV Chargers", item: "https://oneroofsolar.com.au/services/ev-chargers/installation" },
        { "@type": "ListItem", position: 4, name: "EV Charger Repair", item: "https://oneroofsolar.com.au/services/ev-chargers/repair" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0A1118]/30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn isHero>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 flex-wrap">
                <Link to="/" className="hover:text-[#8cc63f] transition-colors">Home</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <Link to="/services/ev-chargers/installation" className="hover:text-[#8cc63f] transition-colors">EV Chargers</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">EV Charger Repair</span>
              </nav>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                EV Charger Repair Darwin NT -{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Fast Diagnosis, Honest Advice</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-medium border-l-2 border-[#8cc63f] pl-6">
                Charger not starting, tripping, or dead after a wet season storm? Oneroof Solar are licensed, SAA Accredited electricians based in Berrimah. We diagnose home, business, and fleet chargers across Darwin and give a straight repair-or-replace answer before any work starts.
              </p>
              <p className="text-slate-300 text-sm sm:text-base mb-8">
                Call {PRIMARY_PHONE} or book a diagnostic callout below.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call {PRIMARY_PHONE}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Book a diagnostic callout</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3]">
                <img
                  fetchPriority="high"
                  src={heroImg}
                  alt="EV charger on a Darwin home that may need licensed repair"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              What Does EV Charger Repair Involve in Darwin?
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                A faulty EV charger usually shows as a car that will not charge overnight, a unit that trips the breaker, an error light, or a charger that died after rain or a storm. Left alone, a small wiring or seal fault can turn into a failed board, and what would have been a repair becomes a full replacement.
              </p>
              <p>
                Oneroof Solar diagnoses and repairs EV chargers across Darwin, Palmerston, and rural NT. We check the charger, the circuit, and the isolator, then tell you whether a repair or a replacement is the better spend. If you need a new unit instead, we handle{" "}
                <Link to="/services/ev-chargers/installation" className={linkClass}>EV charger installation</Link>{" "}
                as well, so you are not bounced between two contractors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Signs Your EV Charger Needs Repair
              </h2>
              <div className="space-y-4 mb-8">
                {signsList.map((sign) => (
                  <div key={sign} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8cc63f] shrink-0 mt-1" />
                    <p className="text-slate-600 text-base leading-snug font-medium">{sign}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium border-t border-slate-200 pt-4">
                If you notice any of these, switch off at the isolator if it is safe to do so and call a licensed technician. Opening the unit yourself can void the warranty and is a genuine electrical risk.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Do not wait on a dead charger</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  A charger that trips, runs hot, or took on water can get worse quickly in Darwin heat. Diagnosis first means you only pay for the fix you actually need.
                </p>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-flex items-center gap-2 text-[#8cc63f] font-bold uppercase tracking-wider text-xs hover:underline">
                  Call {PRIMARY_PHONE} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img src={weatherImg} alt="Darwin storm conditions that damage outdoor EV chargers" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                Why Darwin EV Chargers Fail More Often
              </h2>
              <div className="space-y-4">
                {whyFailList.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8cc63f] shrink-0 mt-1" />
                    <p className="text-slate-200 text-base leading-snug font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Who Needs EV Charger Repair in Darwin
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoNeedsRepair.map((card, idx) => (
              <FadeIn key={card.title} delay={idx * 0.08} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{card.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              Repair or Replace? How We Decide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairOrReplace.map((item, idx) => (
                <FadeIn key={item.title} delay={idx * 0.08} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              EV Charger Repair Cost in Darwin
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Repair cost comes down to what actually failed, not just the brand. A tripped breaker, damaged cable, or failed socket is a smaller job. A fried control board, or water inside the housing after a storm, costs more and can tip the decision toward replacement.
              </p>
              <p>
                Rural callouts to Litchfield, Humpty Doo, or Berry Springs may include a small travel component. We always confirm the exact price after diagnosis, before any work starts. No surprises on the invoice.
              </p>
            </div>
            <a
              href="#quote-form"
              className="inline-block mt-8 bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
            >
              Book a diagnostic callout
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Why Choose Our EV Charger Repair Team
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Locally Owned &amp; Operated</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Based in Berrimah, not a national call centre. We already know what Darwin heat, humidity, and Wet season storms do to outdoor chargers.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Licensed &amp; SAA Accredited</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every electrician on our team is fully licensed and SAA Accredited, with real experience installing and diagnosing EV chargers across Darwin, NT.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Warranty-Safe Work</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We check manufacturer cover before we start. If replacement is the honest option, we will say so instead of patching a unit that will not last.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Our EV Charger Repair Process
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <FadeIn key={step.title} delay={idx * 0.1} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center relative">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              Chargers We Diagnose &amp; Repair
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8 max-w-4xl">
              We regularly work with Sigenergy, Myenergi, and Fronius chargers, the same brands we install. We also diagnose other home and commercial units after an inspection. If you are not sure whether we service your model, send a photo of the unit and we will confirm before you book.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {brands.map((brandName) => (
                <div
                  key={brandName}
                  className="bg-white border border-slate-200 p-5 rounded-2xl text-center flex items-center justify-center hover:border-brand-500/40 transition-colors shadow-sm"
                >
                  <span className="text-slate-900 font-bold text-lg tracking-wide">{brandName}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                  FAQs
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={faq.q} delay={i * 0.05}>
                    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md border-brand-500/50" : "bg-slate-50 border-slate-200 hover:border-brand-500/30 shadow-sm"}`}>
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                      >
                        <h3 className={`text-sm sm:text-base font-bold leading-tight ${isOpen ? "text-[#8cc63f]" : "text-slate-900"}`}>{faq.q}</h3>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${isOpen ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180" : "border-slate-200 text-slate-500 bg-white"}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 px-6 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="text-slate-600 leading-relaxed font-medium text-xs sm:text-sm">{faq.a}</div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                Book Your EV Charger Repair in Darwin
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                If the charger will not start, trips the breaker, or went quiet after a storm, do not wait for it to get worse. Our Berrimah-based, SAA Accredited team will diagnose the fault and give you a clear repair or replace price before any work starts.
              </p>
              <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Our Team</div>
                  <div className="text-base sm:text-lg font-black">{PRIMARY_PHONE}</div>
                </div>
              </a>
              <a href="mailto:info@oneroofsolar.com.au" className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-base sm:text-lg font-black">info@oneroofsolar.com.au</div>
                </div>
              </a>
            </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <QuoteForm title="Book a Diagnostic Callout" defaultInterest="EV Charger Repair" source="ev_charger_repair" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EvChargerRepair;
