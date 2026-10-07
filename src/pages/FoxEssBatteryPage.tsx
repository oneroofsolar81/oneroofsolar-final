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
  Sun,
  Cpu,
  CircleDollarSign,
  BadgeCheck,
  Wind,
  BatteryCharging,
  Flame,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { GoogleReviews } from "../components/GoogleReviews";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

// Fox ESS high-voltage storage battery datasheets (already hosted in /public/downloads)
const FOX_EQ4800_PDF = "/downloads/Fox ESS EQ4800 High Voltage Storage Battery Datasheet.pdf";
const FOX_EQ5500_PDF = "/downloads/Fox ESS EQ5500 High Voltage Storage Battery Datasheet.pdf";
const FOX_EP11_PDF = "/downloads/Fox ESS EP11 High Voltage Storage Battery Datasheet.pdf";
const FOX_EP12_PLUS_PDF = "/downloads/Fox ESS EP12 Plus High Voltage Storage Battery Datasheet.pdf";

const models = [
  {
    model: "Fox ESS EQ4800",
    moduleSize: "4.66 kWh",
    maxCapacity: "Up to 41.93 kWh",
    type: "LFP (LiFePO4)",
    rating: "IP65",
    bestFor: "Smaller homes looking for a simple, flexible setup",
    pdf: FOX_EQ4800_PDF,
    detail:
      "A compact, high-voltage battery giving you 4.66 kWh of usable storage per module. You can start with one unit and add up to 9 modules as your power needs grow.",
  },
  {
    model: "Fox ESS EQ5500",
    moduleSize: "5.46 kWh",
    maxCapacity: "Up to 49.14 kWh",
    type: "LFP (LiFePO4)",
    rating: "IP65",
    bestFor: "Medium to large homes planning for extra aircon or EVs",
    pdf: FOX_EQ5500_PDF,
    detail:
      "Delivers 5.46 kWh per battery stack. It easily scales up to 49.14 kWh, making it a great pick if you plan to install more split-system air conditioners down the road.",
  },
  {
    model: "Fox ESS EP11",
    moduleSize: "10.36 kWh",
    maxCapacity: "Up to 41.60 kWh",
    type: "LFP (LiFePO4)",
    rating: "IP65",
    bestFor: "High-capacity wall or floor-mounted battery",
    pdf: FOX_EP11_PDF,
    detail:
      "A higher-capacity unit packed into a single block with 10.36 kWh storage. You can mount it on the wall or floor, and connect up to 4 units together if you need serious storage capacity.",
  },
  {
    model: "Fox ESS EP12 Plus (W)",
    moduleSize: "11.52 kWh",
    maxCapacity: "Up to 46.08 kWh",
    type: "LFP (LiFePO4)",
    rating: "IP65",
    bestFor: "Larger homes wanting maximum power and built-in fire safety",
    pdf: FOX_EP12_PLUS_PDF,
    detail:
      "Provides 11.52 kWh per module. Built with LFP technology and an integrated fire protection safety feature, it gives extra peace of mind during hot NT summers.",
  },
];

export function FoxEssBatteryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Fox ESS Battery Darwin & NT | One Roof Solar",
    metaDescription:
      "Compare Fox ESS battery storage (EQ4800, EQ5500, EP11, EP12 Plus) for Darwin & NT homes. Simple, scalable solar batteries with blackout protection. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-battery-brands/foxess",
    robots: "index, follow",
    openGraphTitle: "Fox ESS Battery Darwin & NT | One Roof Solar",
    openGraphDescription:
      "Compare Fox ESS battery storage (EQ4800, EQ5500, EP11, EP12 Plus) for Darwin & NT homes. Simple, scalable solar batteries with blackout protection. Get a free quote.",
    twitterTitle: "Fox ESS Battery Darwin & NT | One Roof Solar",
    twitterDescription:
      "Compare Fox ESS battery storage (EQ4800, EQ5500, EP11, EP12 Plus) for Darwin & NT homes. Simple, scalable solar batteries with blackout protection. Get a free quote.",
  };

  const faqs = [
    {
      q: "What is a Fox ESS Battery?",
      a: "It is a rechargeable Lithium Iron Phosphate (LFP) energy storage unit that saves your excess daytime solar power so you can use it at night or during blackouts.",
    },
    {
      q: "Which Fox ESS models does One Roof Solar supply in Darwin?",
      a: "We supply and install four models: the EQ4800 (4.66 kWh), EQ5500 (5.46 kWh), EP11 (10.36 kWh), and EP12 Plus (W) (11.52 kWh).",
    },
    {
      q: "How much battery storage can I scale up to?",
      a: "It depends on the model range you choose: EQ4800 scales up to 41.93 kWh, EQ5500 up to 49.14 kWh, EP11 up to 41.60 kWh, and EP12 Plus (W) up to 46.08 kWh.",
    },
    {
      q: "Are Fox ESS batteries safe?",
      a: "Yes. All four models use Lithium Iron Phosphate (LFP) chemistry, which is known for thermal safety and long life. The EP12 Plus (W) model also comes with an integrated fire protection function.",
    },
    {
      q: "Can I use 100% of the battery capacity?",
      a: "Yes. The supplied EQ4800, EQ5500, EP11, and EP12 Plus models offer 100% Depth of Discharge (DoD), so you can use all the power stored inside.",
    },
    {
      q: "Can I add a Fox ESS battery to my current solar system?",
      a: "In most cases, yes. We inspect your existing solar inverter and use a compatible hybrid inverter or AC-coupled setup to connect the battery seamlessly.",
    },
    {
      q: "Can these batteries be installed outdoors in Darwin?",
      a: "Yes. All models carry an IP65 weatherproof rating, making them suitable for outdoor or garage walls across Darwin and the Top End.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Fox ESS Battery Systems",
      brand: { "@type": "Brand", name: "Fox ESS" },
      manufacturer: { "@type": "Organization", name: "Fox ESS" },
      image: "/assets/images/hosted/products/foxess-inverter.webp",
      category: "Home Battery Storage",
      description:
        "SAA Approved Fox ESS modular LFP battery systems (EQ4800, EQ5500, EP11, EP12 Plus) with IP65 weatherproofing, blackout backup and 100% Depth of Discharge. Supplied and installed across Darwin, Palmerston and the wider Northern Territory.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://oneroofsolar.com.au/products/solar-battery-brands/foxess#faq",
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
          name: "Fox ESS Battery Systems",
          item: "https://oneroofsolar.com.au/products/solar-battery-brands/foxess",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "One Roof Solar",
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
      url: "https://oneroofsolar.com.au/products/solar-battery-brands/foxess",
      areaServed: [
        { "@type": "Place", name: "Darwin" },
        { "@type": "Place", name: "Palmerston" },
        { "@type": "Place", name: "Berrimah" },
        { "@type": "Place", name: "Howard Springs" },
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

      {/* HERO */}
      <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-[#0A1118]">
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
                <span className="text-[#8cc63f]" aria-current="page">Fox ESS</span>
              </nav>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8cc63f]" /> SAA Accredited Installers
              </span>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Fox ESS Battery Systems in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Darwin, NT</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Store your daylight solar energy, keep the lights on during Darwin blackouts, and cut your evening power bills with certified Fox ESS batteries.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Calculate My Ideal Battery Size</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                  asChild
                >
                  <Link to="/contact">Request a Free Energy Audit</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {["4.9/5 local rating", "IP65 weatherproof", "100% usable (DoD)", "SAA Accredited"].map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                    <Check className="w-4 h-4 text-[#8cc63f]" />
                    {chip}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center p-6">
                <img
                  fetchPriority="high"
                  src="/assets/images/hosted/products/foxess-inverter.webp"
                  alt="Fox ESS energy storage hardware supplied and installed in Darwin, NT"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] drop-shadow-2xl"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="text-2xl font-black text-[#8cc63f] leading-none">LFP</div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">Modular</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* OVERVIEW */}
      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              What Is a Fox ESS Battery?
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
              <p>
                A Fox ESS Battery holds onto the extra power your{" "}
                <Link to="/solar-panels-darwin" className={linkClass}>solar panels</Link> generate during the day. Instead of sending that power back to the grid for pennies, you save it to run your home at night, keep your AC on, or power through sudden tropical storm blackouts.
              </p>
              <p>
                Fox ESS makes high-voltage, modular Lithium Iron Phosphate (LFP) batteries. That means you can start with a small setup today and add extra storage modules whenever your family needs more power. One Roof Solar supplies, installs, and services Fox ESS systems right here in Darwin,{" "}
                <Link to="/locations/palmerston" className={linkClass}>Palmerston</Link>, Howard Springs, and across the Northern Territory. See our full{" "}
                <Link to="/services/solar-battery-installation" className={linkClass}>solar battery installation</Link> service.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA BLOCK 1 */}
      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 mb-5">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Not Sure Which Fox ESS Model Fits Your Night-Time Power Draw?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Pick a battery that's too small, and you're stuck paying high night-time grid tariffs. Pick one that's too big, and you spend more money upfront than you need to. We'll check your actual evening kWh usage and find the exact sweet spot for your home.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Claim Your Free Battery Assessment
                </Link>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Call Now
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Compare Fox ESS Battery Models
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                We supply four main Fox ESS{" "}
                <Link to="/products/solar-battery-brands" className={linkClass}>battery options</Link> in the Northern Territory. Here is how they stack up side by side.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#0A1118] text-white">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Model</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Module Size</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Max Expandable Capacity</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Battery Type</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Weather Rating</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m, i) => (
                    <tr
                      key={m.model}
                      className={`align-top ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-t border-slate-200`}
                    >
                      <td className="px-5 py-4 font-black text-slate-900 whitespace-nowrap">{m.model}</td>
                      <td className="px-5 py-4 font-bold text-[#8cc63f] whitespace-nowrap">{m.moduleSize}</td>
                      <td className="px-5 py-4 text-slate-700 font-medium whitespace-nowrap">{m.maxCapacity}</td>
                      <td className="px-5 py-4 text-slate-600 font-medium whitespace-nowrap">{m.type}</td>
                      <td className="px-5 py-4 text-slate-600 font-medium whitespace-nowrap">{m.rating}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm leading-relaxed">{m.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DETAILED MODEL BREAKDOWN */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Detailed Breakdown of Supplied Models
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Four modular LFP options, each sized for a different home and night-time power draw. Download the full datasheet for any model below.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((m, idx) => (
              <FadeIn key={m.model} delay={idx * 0.08} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center shrink-0">
                    <Battery className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight normal-case">{m.model}</h3>
                    <p className="text-sm font-bold text-[#8cc63f]">{m.moduleSize} per module · {m.maxCapacity}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">{m.detail}</p>
                <a
                  href={m.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[#8cc63f] font-bold hover:underline"
                >
                  <FileDown className="w-4 h-4" />
                  Download {m.model} Datasheet (PDF)
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BLACKOUT & CLIMATE PROTECTION */}
      <section className="py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-4 normal-case max-w-3xl">
              Built to Handle Top End Storms and Heat
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-3xl">
              Darwin's{" "}
              <Link to="/do-solar-panels-work-during-darwins-wet-season" className={linkClass}>wet season</Link> brings high humidity, scorching heat, and frequent grid failures. A good battery needs to survive the weather and keep your house running.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Emergency Power Supply (EPS) backup", text: "Keep your fridge, fans, lights, Wi-Fi, and essential power points running during wet season power outages." },
              { icon: ShieldCheck, title: "IP65 weatherproof protection", text: "Tough, sealed enclosures built for outdoor or garage installations across Darwin, Berrimah, and Palmerston." },
              { icon: Wind, title: "Natural convection cooling", text: "Uses smart passive cooling rather than noisy fans that get clogged up with tropical dust and humidity." },
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

      {/* CTA BLOCK 2 */}
      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Don't Let Darwin's Wet Season Catch You Off Guard
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                High humidity and{" "}
                <Link to="/blog/solar-panel-cyclone-protection" className="text-[#8cc63f] hover:underline font-bold">storm blackouts</Link> can be tough on electronic gear. Let our local team match the right IP65-rated Fox ESS battery to your home's setup.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Get a Climate Assessment
                </a>
                <Link to="/contact" className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Speak to a Local Darwin Specialist
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SOLAR SYSTEM INTEGRATION */}
      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Pair Fox ESS With Your Solar Setup
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                A battery works alongside your solar array to make sure no clean power goes to waste.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Cpu,
                title: "Adding to existing solar",
                text: (
                  <>
                    Already have solar panels? We check your current{" "}
                    <Link to="/services/solar-inverters" className={linkClass}>solar inverter</Link> and recommend the right AC-coupled or hybrid option to add a Fox ESS battery cleanly.
                  </>
                ),
              },
              {
                icon: Sun,
                title: "New solar + battery installs",
                text: (
                  <>
                    Putting{" "}
                    <Link to="/solar-systems/residential-solar-system" className={linkClass}>solar on your roof</Link> for the first time? We design a balanced package with panels, inverter, and Fox ESS storage all sized to fit your family's routine.
                  </>
                ),
              },
              {
                icon: Building2,
                title: "Commercial & rural scaling",
                text: (
                  <>
                    For larger properties in{" "}
                    <Link to="/locations/darwin-rural" className={linkClass}>Howard Springs</Link> or commercial sites in{" "}
                    <Link to="/locations/berrimah" className={linkClass}>Berrimah</Link>, Fox ESS scales right up to 49.14 kWh. See our{" "}
                    <Link to="/solar-systems/commercial-solar-system" className={linkClass}>commercial solar</Link> or{" "}
                    <Link to="/solar-systems/off-grid-solar-system" className={linkClass}>off-grid solar systems</Link>.
                  </>
                ),
              },
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

      {/* SAFETY & REBATES */}
      <section className="py-20 lg:py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-12 normal-case max-w-3xl">
              Safety Approved & Government Rebates Applied
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight normal-case">Certified SAA Installers</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Fox ESS batteries meet tough Australian electrical standards (including IEC 62619, EN IEC 61000, and UN38.3). Our local{" "}
                <Link to="/about" className={linkClass}>SAA Accredited technicians</Link> handle the entire installation so everything is safe, compliant, and built to last.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                <CircleDollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight normal-case">Cheaper Home Batteries Program</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                If your home qualifies for the Cheaper Home Batteries Program or federal STC discounts, we check your eligibility upfront and deduct the rebate right on your{" "}
                <Link to="/contact" className={linkClass}>quote</Link> so you see your exact out-of-pocket costs from day one.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SUITABILITY MATRIX */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Is a Fox ESS Battery Right for You?
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Standard family homes", text: "Perfect for Darwin homeowners who want to run evening air conditioning using clean solar energy stored during the day." },
              { icon: Layers, title: "Higher energy users", text: "Great for homes running multiple ACs or charging an EV, thanks to expandable storage limits up to 49.14 kWh." },
              { icon: Building2, title: "Local businesses", text: "Helps commercial sites in Berrimah cut peak demand charges during business hours." },
              { icon: Flame, title: "Homes in storm zones", text: "Essential for families who want reliable backup power when tropical storms knock out the power grid." },
            ].map((card, idx) => (
              <FadeIn key={card.title} delay={idx * 0.08} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REAL LOCAL REVIEWS */}
      <GoogleReviews />

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-3 normal-case">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Fox ESS models, scaling, LFP safety, retrofits, and Darwin outdoor installs.
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

      {/* CTA BLOCK 3 */}
      <section className="py-12 lg:py-16 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Scared Tropical Storms Will Knock Out Your Power This Wet Season?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Keep your AC, fridge, and lights running through grid blackouts. Get an IP65-rated Fox ESS battery built for Darwin with no hidden costs later.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Protect My Home Against Outages
                </a>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Speak to a Local Specialist
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                  Ready for a Battery Built for NT Conditions?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Get your SAA Accredited Fox ESS battery quote today. We'll size the right model to your evening usage and apply any STC or Cheaper Home Batteries Program discount upfront, no surprises later.
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
              <QuoteForm title="Get My Free Quote" defaultInterest="Fox ESS Battery" source="foxess_battery" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoxEssBatteryPage;
