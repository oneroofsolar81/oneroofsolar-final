import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Phone,
  Mail,
  Battery,
  ShieldCheck,
  Zap,
  Home,
  Building2,
  Layers,
  ChevronDown,
  FileDown,
  Clock,
  Sun,
  Cpu,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

const linkClass = "text-[#8cc63f] hover:underline font-bold";
const specHref = "/downloads/GoodWe ESA 3-10kW Residential All-In-One Energy Storage System.pdf";

export function GoodWeBatteryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "GoodWe Battery Darwin NT | Oneroof Solar",
    metaDescription:
      "GoodWe battery systems for Darwin, Palmerston & NT wide. SAA Approved products, Cheaper Home Batteries Program discount available. Get your quote today.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-battery-brands/goodwe",
    robots: "index, follow",
    openGraphTitle: "GoodWe Battery Darwin NT | Oneroof Solar",
    openGraphDescription:
      "GoodWe battery systems for Darwin, Palmerston & NT wide. SAA Approved products, Cheaper Home Batteries Program discount available. Get your quote today.",
    twitterTitle: "GoodWe Battery Darwin NT | Oneroof Solar",
    twitterDescription:
      "GoodWe battery systems for Darwin, Palmerston & NT wide. SAA Approved products, Cheaper Home Batteries Program discount available. Get your quote today.",
  };

  const faqs = [
    {
      q: "Are GoodWe batteries SAA approved?",
      a: "Yes. Every GoodWe product we supply is SAA Approved/Certified, and our team are SAA Accredited Installers. This means your battery meets proper Australian safety and compliance standards from day one.",
    },
    {
      q: "Can I add a GoodWe battery to solar panels I already have?",
      a: "Yes, in most cases. GoodWe batteries can be retrofitted to an existing solar panel system. We check your current setup as part of your free quote to confirm it will work.",
    },
    {
      q: "Is there still an NT Government battery grant?",
      a: "No, NT Government local battery grants are currently closed. Eligible GoodWe battery installs can instead get a discount through the Cheaper Home Batteries Program, checked during your quote.",
    },
    {
      q: "How fast does a GoodWe battery switch to backup during a blackout?",
      a: "GoodWe batteries switch to backup power in under 10 milliseconds. That is fast enough that most households barely notice the change when the grid drops out.",
    },
    {
      q: "Will a GoodWe battery handle Darwin's wet season?",
      a: "Yes. GoodWe batteries carry an IP66/IP55 rating and multi layer cell protection, built to handle high heat, humidity, and storm conditions common across the Top End.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "GoodWe ESA Battery Systems",
      brand: { "@type": "Brand", name: "GoodWe" },
      manufacturer: { "@type": "Organization", name: "GoodWe" },
      image: "/assets/images/hosted/goodwe-battery-hero.webp",
      category: "Home Battery Storage",
      description:
        "SAA Approved GoodWe ESA all-in-one battery systems with 5kWh to 108kWh storage, fast backup switching, and Cheaper Home Batteries Program discounts. Supplied and installed across Darwin, Palmerston and the wider Northern Territory.",
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oneroofsolar.com.au/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solar Batteries",
          item: "https://oneroofsolar.com.au/products/solar-battery-brands/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GoodWe Battery Systems",
          item: "https://oneroofsolar.com.au/products/solar-battery-brands/goodwe",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Oneroof Solar",
      image: "/assets/images/home/logo-oneroof.png",
      telephone: PRIMARY_PHONE,
      email: "info@oneroofsolar.com.au",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3/97 Pruen Rd",
        addressLocality: "Berrimah",
        addressRegion: "NT",
        postalCode: "0828",
        addressCountry: "AU",
      },
      geo: { "@type": "GeoCoordinates", latitude: -12.4386, longitude: 130.9256 },
      url: "https://oneroofsolar.com.au/products/solar-battery-brands/goodwe",
      areaServed: [
        { "@type": "Place", name: "Darwin" },
        { "@type": "Place", name: "Palmerston" },
        { "@type": "Place", name: "Northern Territory" },
      ],
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
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Link to="/" className="hover:text-[#8cc63f] transition-colors">Home</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <Link to="/products/solar-battery-brands/" className="hover:text-[#8cc63f] transition-colors">Batteries</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">GoodWe</span>
              </nav>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8cc63f]" /> SAA Approved Battery Storage
              </span>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                GoodWe Battery Systems,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Darwin NT</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                SAA Approved GoodWe batteries provides fast backup switching and keeps your power running, with the Cheaper Home Batteries Program discount checked as part of your quote.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get My Free Quote</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call Now</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {["Under 10ms backup", "IP66 / IP55 rated", "SAA Accredited", "10 year warranty"].map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                    <Check className="w-4 h-4 text-[#8cc63f]" />
                    {chip}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3]">
                <img
                  fetchPriority="high"
                  src="/assets/images/hosted/goodwe-battery-hero.webp"
                  alt="GoodWe all-in-one home battery system on a Darwin property"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="text-2xl font-black text-[#8cc63f] leading-none">ESA</div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">All-in-one</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/hosted/goodwe-battery-detail.webp"
                  alt="Close up of a sealed GoodWe home battery cabinet"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.12} className="lg:col-span-6 order-1 lg:order-2">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                What Is a GoodWe Battery?
              </h2>
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
                <p>
                  A GoodWe battery stores the power your solar panels generate, so you can use it at night, during a blackout, or whenever you need it most. GoodWe is a well established battery and inverter brand, built for solar homes that want reliable, everyday backup without a complicated setup.
                </p>
                <p>
                  In Darwin and across the NT, GoodWe batteries are supplied and installed by our SAA Accredited Installers, helping you make better use of your solar power even after the sun goes down.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Get Your GoodWe Battery Quote Today
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Already have solar panels or starting fresh, we will work out what fits your home and your budget.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Get My Free Quote
                </a>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Call Now
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                The GoodWe ESA Series
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                We keep this simple, one solid range that covers most Darwin homes and businesses.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <FadeIn className="lg:col-span-7 bg-slate-50 rounded-[2rem] p-8 sm:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-5 tracking-tight normal-case">GoodWe ESA Series</h3>
              <div className="text-slate-600 text-base leading-relaxed font-medium space-y-5">
                <p>
                  This is a fully integrated, all-in-one system that combines the inverter and battery into a single pre-wired unit. It comes in single phase, AC coupled, with power ranging from 3kW right up to 10kW, and battery storage from 5kWh up to 108kWh depending on how many modules you stack.
                </p>
                <p>
                  Because everything is pre-wired and modular, installation time can be cut by up to 50 percent compared to a standard separate inverter and battery setup. That means less time on your roof, less disruption, and a faster path to actually using the system.
                </p>
                <p>
                  It also plays nicely with solar panels you already have. If you're adding a battery to an existing setup, the ESA Series is built for that kind of integration without needing to rip out your current gear.
                </p>
                <p>
                  For homes wanting to scale up later, the battery capacity is expandable, so you can start smaller and add more storage down the track as your needs grow.
                </p>
                <p>
                  One more thing worth mentioning, it runs on an AI-driven energy management system that automatically optimises around time-of-use tariffs. In plain terms, it can shift when your battery charges and discharges to line up with cheaper power rates, so you're not paying full price when you don't need to.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="lg:col-span-5 space-y-4">
              <div className="bg-[#0A1118] rounded-[2rem] p-8 border border-white/10">
                <h3 className="text-lg font-black text-white mb-5 tracking-tight normal-case">Model range (battery side)</h3>
                <ul className="space-y-3 text-slate-300 text-sm font-medium">
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#8cc63f] shrink-0 mt-0.5" /> GW3K-BHA-G20 up to GW9.999K-BHA-G20</li>
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#8cc63f] shrink-0 mt-0.5" /> Li-ion battery, 380V nominal voltage</li>
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#8cc63f] shrink-0 mt-0.5" /> Charging power from 3.0kW up to 9.999kW</li>
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#8cc63f] shrink-0 mt-0.5" /> On-grid AC output rated from 3.0kW up to 9.999kW</li>
                </ul>
                <p className="text-slate-400 text-sm mt-6">
                  Full technical specs available on request or via our GoodWe ESA Series spec sheet.
                </p>
                <a
                  href={specHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-[#8cc63f] font-bold hover:underline"
                >
                  <FileDown className="w-4 h-4" />
                  Download GoodWe ESA Series Specs
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-4 normal-case max-w-3xl">
              Why Darwin Homes Are Choosing GoodWe
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-3xl">
              Here is what actually sets GoodWe apart, not just a spec sheet, but what it means for your day to day.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Backup in under 10ms", text: "If the power drops out, your GoodWe battery switches to backup in under 10 milliseconds. That is fast enough that most people do not even notice the lights flicker." },
              { icon: ShieldCheck, title: "AFCI protection", text: "Built in AFCI protection picks up on electrical faults early, before they turn into a real problem, which matters if you have ever dealt with dodgy wiring or ageing switchboards." },
              { icon: Layers, title: "IP66 / IP55 sealed", text: "The casing is rated IP66/IP55, sealed tight against dust and heavy moisture, which counts for a lot when you are living through a Top End wet season." },
              { icon: Battery, title: "Cell protection", text: "Multi layer battery cell protection adds another safety net on top of the sealed housing." },
              { icon: Check, title: "10 year warranty", text: "You also get a 10 year manufacturer warranty, so you are covered well past the first few wet seasons." },
              { icon: Zap, title: "Holds through storms", text: "For voltage stability during grid fluctuations, which is common here during storm season, GoodWe is built to hold steady rather than dropping out at the first sign of trouble." },
            ].map((item) => (
              <FadeIn key={item.title} className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight normal-case">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12">
            <FadeIn className="lg:col-span-6">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Pairing GoodWe With Your Solar Panels
              </h2>
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
                <p>A battery on its own does not do much. It is what it pairs with that makes the difference.</p>
                <p>
                  If you already have solar panels installed, a GoodWe battery can usually be added to your existing setup without starting from scratch. We will check your current system as part of your quote to confirm compatibility.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/hosted/goodwe-solar-pairing.webp"
                  alt="Darwin home with rooftop solar panels paired with a wall-mounted battery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Home, title: "Starting fresh", text: <>Quote a <Link to="/solar-systems/residential-solar-system" className={linkClass}>residential solar system</Link> and GoodWe battery together, sized properly from day one.</> },
              { icon: Building2, title: "Business use", text: <>See our <Link to="/solar-systems/commercial-solar-system" className={linkClass}>commercial solar systems</Link> for higher daytime usage.</> },
              { icon: Sun, title: "Off-grid NT", text: <>Rural properties can pair GoodWe with our <Link to="/solar-systems/off-grid-solar-system" className={linkClass}>off grid solar systems</Link>.</> },
              { icon: Cpu, title: "Existing inverter", text: <>Check our <Link to="/products/solar-inverters" className={linkClass}>solar inverters</Link> or <Link to="/services/solar-inverters/installation" className={linkClass}>inverter installation</Link>.</> },
            ].map((card) => (
              <FadeIn key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{card.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img
                  src="/assets/images/hosted/goodwe-saa-install.webp"
                  alt="Licensed electrician installing a GoodWe battery to Australian standards"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6 order-1 lg:order-2">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                Not Every GoodWe Installer Is Properly Approved. We Are.
              </h2>
              <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-5 mb-8">
                <p>
                  Every GoodWe product we supply is SAA Approved/Certified. We are also SAA Accredited Installers, which means your battery is fitted by people who meet the required Australian standards for safety and compliance.
                </p>
                <p>
                  This matters more than most people realise. If your battery is not fitted by an accredited installer, or the product itself is not properly approved, you can run into real problems later with insurance or warranty claims. We do not cut corners here.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: BadgeCheck, title: "SAA Approved products", text: "Every GoodWe unit we supply is certified." },
                  { icon: ShieldCheck, title: "SAA Accredited team", text: "Fitted to Australian safety standards." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <item.icon className="w-5 h-5 text-[#8cc63f] mb-3" />
                    <h3 className="text-sm font-black text-white mb-1 tracking-tight normal-case">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className={linkClass}>
                Learn more about who we are and how we work
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-10">
            <FadeIn className="lg:col-span-6">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Save on Your GoodWe Battery With the Cheaper Home Batteries Program
              </h2>
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
                <p>Let's talk money, because that is usually the first question anyway.</p>
                <p>
                  If your GoodWe battery setup is eligible, you can access a discount through the Cheaper Home Batteries Program. We check your eligibility as part of your quote, so you know exactly what you are saving before you commit to anything.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/hosted/goodwe-battery-rebate.webp"
                  alt="Checking battery rebate savings as part of a Darwin home quote"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: CircleDollarSign, title: "Cheaper Home Batteries Program", text: "Eligible GoodWe installs get this discount checked in your quote, before you commit." },
              { icon: ShieldCheck, title: "NT local grants are closed", text: "If you have seen a state rebate online, it is outdated. We only apply the current federal battery program." },
              { icon: Sun, title: "STC solar grant separate", text: "New panels alongside your battery get the Federal STC discount applied in the same quote." },
            ].map((card) => (
              <FadeIn key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{card.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Not Sure If GoodWe Suits Your Home?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Whether you already have panels or are starting fresh, give us a call and we will help you work out what fits.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Talk to Our Team
                </a>
                <a href="#quote-form" className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Request a Callback
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Who This System Suits
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.08} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Homeowners and Families</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Want lower power bills and backup during outages without fussing over technical details. GoodWe gives you that in a straightforward, low maintenance package.
              </p>
            </FadeIn>
            <FadeIn delay={0.12} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Commercial Property Managers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Businesses across Darwin and Palmerston are turning to battery storage to manage rising energy costs and keep operations running during grid interruptions.
              </p>
            </FadeIn>
            <FadeIn delay={0.16} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Off Grid Properties</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For rural NT properties not connected to the main grid, GoodWe's stackable module design gives you room to scale up storage as your needs grow.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-10 max-w-4xl mx-auto text-center">
              Already have a system playing up? Our{" "}
              <Link to="/services/solar-inverters/repair" className={linkClass}>inverter repair</Link>{" "}
              service and general{" "}
              <Link to="/services/solar-panel-repair-darwin" className={linkClass}>solar panel repair</Link>{" "}
              team can help sort it out.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-3 normal-case">
                Common Questions About GoodWe Batteries
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                SAA approval, retrofit options, rebates, backup speed, and Darwin wet season performance.
              </p>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <FadeIn key={faq.q} delay={i * 0.03}>
                  <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md border-[#8cc63f]/40" : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"}`}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full text-left px-5 sm:px-6 py-5 flex items-start justify-between gap-4"
                    >
                      <h3 className={`text-base sm:text-lg font-bold leading-snug ${isOpen ? "text-[#8cc63f]" : "text-slate-900"}`}>{faq.q}</h3>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${isOpen ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180" : "border-slate-200 text-slate-500 bg-slate-50"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 px-5 sm:px-6 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">{faq.a}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                  Ready for a Battery Built for NT Conditions?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Get your SAA Approved GoodWe battery quote today. Cheaper Home Batteries Program discount checked upfront, no surprises later.
                </p>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us Now</div>
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
              <QuoteForm title="Get My Free Quote" defaultInterest="GoodWe Battery" source="goodwe_battery" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoodWeBatteryPage;
