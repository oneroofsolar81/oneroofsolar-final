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
  Sun,
  Cpu,
  CircleDollarSign,
  BadgeCheck,
  Gauge,
  Wind,
  TrendingUp,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { GoogleReviews } from "../components/GoogleReviews";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

const ranges = [
  {
    range: "Sungrow SBR Series",
    capacity: "6.4–25.6 kWh",
    modules: "2–8",
    type: "LFP (LiFePO4)",
    protection: "IP55",
    bestFor: "Homes wanting flexible, modular battery storage",
    detail:
      "A flexible, modular high-voltage battery for residential solar storage. It supports 2 to 8 modules, providing 6.4–25.6 kWh of usable storage. With LFP chemistry and indoor or outdoor installation, it can be sized to your energy needs and expanded later.",
  },
  {
    range: "Sungrow SBH Series",
    capacity: "15–40 kWh",
    modules: "3–8",
    type: "LFP (LiFePO4)",
    protection: "IP55",
    bestFor: "Larger homes and higher energy requirements",
    detail:
      "Designed for higher energy storage needs, the SBH Series offers 15–40 kWh per unit with 3 to 8 modules. Up to four units can be connected for up to 160 kWh, making it suitable for larger homes and high-energy users.",
  },
];

export function SungrowBatteryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Sungrow Battery Darwin & NT | One Roof Solar",
    metaDescription:
      "Compare Sungrow battery storage for Darwin & NT homes and businesses. High-voltage LFP batteries with flexible capacity and backup options. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-battery-brands/sungrow",
    robots: "index, follow",
    openGraphTitle: "Sungrow Battery Darwin & NT | One Roof Solar",
    openGraphDescription:
      "Compare Sungrow battery storage for Darwin & NT homes and businesses. High-voltage LFP batteries with flexible capacity and backup options. Get a free quote.",
    twitterTitle: "Sungrow Battery Darwin & NT | One Roof Solar",
    twitterDescription:
      "Compare Sungrow battery storage for Darwin & NT homes and businesses. High-voltage LFP batteries with flexible capacity and backup options. Get a free quote.",
  };

  const faqs = [
    {
      q: "What is a Sungrow battery?",
      a: "A Sungrow battery is a rechargeable energy storage system that stores excess electricity from your solar panels so you can use more of that energy later when solar generation is lower.",
    },
    {
      q: "Which Sungrow battery ranges does One Roof Solar supply in Darwin?",
      a: "We supply the Sungrow SBR and SBH battery ranges. The SBR Series provides 6.4–25.6 kWh usable capacity per unit, while the SBH Series provides 15–40 kWh per unit.",
    },
    {
      q: "How much storage can a Sungrow battery provide?",
      a: "The SBR Series provides 6.4–25.6 kWh per unit. The SBH Series provides 15–40 kWh per unit and can reach up to 160 kWh when four units are connected in parallel.",
    },
    {
      q: "Are Sungrow batteries safe?",
      a: "Sungrow's supplied SBR and SBH ranges use Lithium Iron Phosphate (LiFePO4) battery chemistry and list relevant Australian and international certifications and standards. Correct installation and system configuration are also important for safe operation.",
    },
    {
      q: "Can I use 100% of a Sungrow battery's capacity?",
      a: "The supplied SBR and SBH ranges support up to 100% Depth of Discharge (DoD), allowing extensive use of the available battery capacity.",
    },
    {
      q: "Can I add a Sungrow battery to my existing solar system?",
      a: "It may be possible, but compatibility depends on your existing solar inverter, panels, electrical setup and battery configuration. We assess your current system before recommending a Sungrow battery installation.",
    },
    {
      q: "Can Sungrow batteries be installed outdoors in Darwin?",
      a: "Yes. The supplied SBR and SBH ranges are specified for indoor or outdoor installation and feature IP55 protection. We assess the installation location and environmental conditions before recommending the appropriate setup.",
    },
    {
      q: "Will a Sungrow battery reduce my electricity bills?",
      a: "A battery can help you use more of your own solar energy and reduce your reliance on grid electricity at times when your solar panels are producing less power. Your actual savings depend on your solar generation, electricity consumption and tariff.",
    },
    {
      q: "Does a Sungrow battery provide blackout backup?",
      a: "Backup capability depends on the complete solar and battery configuration, including the compatible inverter and backup setup. We can assess your requirements and explain the available backup options.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Sungrow Battery Systems",
      brand: { "@type": "Brand", name: "Sungrow" },
      manufacturer: { "@type": "Organization", name: "Sungrow" },
      image: "/assets/images/hosted/products/sungrow-battery-hero.webp",
      category: "Home Battery Storage",
      description:
        "SAA Accredited Sungrow SBR (6.4–25.6 kWh) and SBH (15–40 kWh) high-voltage LFP battery systems with IP55 protection, up to 100% Depth of Discharge and modular scaling. Supplied and installed across Darwin, Palmerston and the wider Northern Territory.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://oneroofsolar.com.au/products/solar-battery-brands/sungrow#faq",
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
          name: "Sungrow Battery Systems",
          item: "https://oneroofsolar.com.au/products/solar-battery-brands/sungrow",
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
      url: "https://oneroofsolar.com.au/products/solar-battery-brands/sungrow",
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
                <span className="text-[#8cc63f]" aria-current="page">Sungrow</span>
              </nav>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8cc63f]" /> SAA Accredited Installers
              </span>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Sungrow Battery Systems in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Darwin, NT</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Store more of your daytime solar energy, use it when you need it, and take greater control of your electricity costs with high-voltage Sungrow battery systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get My Sungrow Battery Quote</a>
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
                {["4.9/5 local rating", "SBR + SBH ranges", "IP55 · 100% DoD", "SAA Accredited"].map((chip) => (
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
                  src="/assets/images/hosted/products/sungrow-battery-hero.webp"
                  alt="High-voltage modular Sungrow battery mounted at a Darwin home"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="text-2xl font-black text-[#8cc63f] leading-none">LFP</div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">High-voltage</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* OVERVIEW */}
      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/hosted/products/sungrow-battery-pairing.webp"
                  alt="Darwin home with rooftop solar paired with a wall-mounted Sungrow battery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.12} className="lg:col-span-6 order-1 lg:order-2">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                What Is a Sungrow Battery?
              </h2>
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
                <p>
                  A Sungrow battery stores excess electricity generated by your{" "}
                  <Link to="/solar-panels-darwin" className={linkClass}>solar panels</Link> so you can use more of your own solar energy when generation drops. Instead of sending unused daytime solar to the grid, battery storage lets you keep that energy available for later use.
                </p>
                <p>
                  Sungrow offers high-voltage Lithium Iron Phosphate (LFP) battery systems with modular capacity options. The SBR Series provides 6.4–25.6 kWh per unit, while the SBH Series provides 15–40 kWh per unit and can be expanded to larger storage configurations.
                </p>
                <p>
                  One Roof Solar supplies and installs Sungrow battery systems in Darwin,{" "}
                  <Link to="/locations/palmerston" className={linkClass}>Palmerston</Link>,{" "}
                  <Link to="/locations/berrimah" className={linkClass}>Berrimah</Link>, Howard Springs and across the Northern Territory. See our full{" "}
                  <Link to="/services/solar-battery-installation" className={linkClass}>solar battery installation</Link> service.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA BLOCK 1 */}
      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 mb-5">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Not Sure Which Sungrow Battery Size You Need?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Choosing the right battery is about more than picking the biggest capacity. We look at your solar generation, evening electricity use, existing{" "}
                <Link to="/services/solar-inverters" className="text-[#8cc63f] hover:underline font-bold">inverter</Link>, available installation space and future energy needs to recommend a Sungrow system that fits your property.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Calculate My Ideal Battery Size
                </a>
                <Link to="/contact" className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Claim Your Free Battery Assessment
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMPARE RANGES TABLE */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Compare Sungrow Battery Ranges
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Sungrow offers two high-voltage LFP{" "}
                <Link to="/products/solar-battery-brands" className={linkClass}>battery options</Link> suitable for different residential and larger energy-storage requirements.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#0A1118] text-white">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Battery Range</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Usable Capacity</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Modules Per Unit</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Battery Type</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Protection</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {ranges.map((r, i) => (
                    <tr key={r.range} className={`align-top ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-t border-slate-200`}>
                      <td className="px-5 py-4 font-black text-slate-900 whitespace-nowrap">{r.range}</td>
                      <td className="px-5 py-4 font-bold text-[#8cc63f] whitespace-nowrap">{r.capacity}</td>
                      <td className="px-5 py-4 text-slate-700 font-medium whitespace-nowrap">{r.modules}</td>
                      <td className="px-5 py-4 text-slate-600 font-medium whitespace-nowrap">{r.type}</td>
                      <td className="px-5 py-4 text-slate-600 font-medium whitespace-nowrap">{r.protection}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm leading-relaxed">{r.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {ranges.map((r, idx) => (
              <FadeIn key={r.range} delay={idx * 0.08} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center shrink-0">
                    <Battery className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight normal-case">{r.range}</h3>
                    <p className="text-sm font-bold text-[#8cc63f]">{r.capacity} · {r.modules} modules</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed font-medium">{r.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SUNGROW */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Why Choose Sungrow Battery Storage?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                A battery should be matched to your solar system, electricity consumption and future energy requirements. Sungrow's modular battery ranges provide several advantages for Darwin and NT properties.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: "Store more of your solar energy", text: "A Sungrow solar battery stores excess daytime solar energy for use when your panels produce less electricity, helping you use more of your solar power." },
              { icon: Layers, title: "Flexible battery capacity", text: "The modular SBR and SBH ranges can be sized to your energy needs, with 6.4–25.6 kWh for SBR and 15–40 kWh for SBH per unit." },
              { icon: TrendingUp, title: "High-voltage LFP technology", text: "Sungrow batteries use Lithium Iron Phosphate (LiFePO4) chemistry and support up to 100% Depth of Discharge, helping you make greater use of stored energy." },
              { icon: Wind, title: "Indoor or outdoor installation", text: "SBR and SBH batteries feature IP55 protection and support indoor or outdoor installation. Natural convection cooling helps maintain normal operating conditions." },
            ].map((item) => (
              <FadeIn key={item.title} className="bg-white border border-slate-200 rounded-[2rem] p-7 h-full shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DARWIN CONDITIONS */}
      <section className="py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
              Sungrow Battery Storage for Darwin Conditions
            </h2>
            <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-5">
              <p>
                Darwin and the Top End experience high temperatures, humidity,{" "}
                <Link to="/do-solar-panels-work-during-darwins-wet-season" className={linkClass}>wet-season</Link> rain and{" "}
                <Link to="/blog/solar-panel-cyclone-protection" className={linkClass}>tropical storms</Link>. Battery location and installation therefore need to be considered carefully.
              </p>
              <p>
                Sungrow's supplied SBR and SBH battery ranges feature IP55 protection and support indoor or outdoor installation. Their specified operating conditions are designed for Australian environments, although the appropriate installation location depends on the individual property and system configuration.
              </p>
              <p>
                Our team assesses the available installation space, exposure, existing solar system and energy requirements before recommending a Sungrow battery solution.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA BLOCK 2 */}
      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Don't Let Darwin's Extreme Heat Destroy the Wrong Battery Investment
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                We evaluate your property, energy use, and solar setup to secure the exact Sungrow system you need.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Check My Battery Setup
                </a>
                <Link to="/contact" className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Talk to a Local Darwin Specialist
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PAIR WITH SOLAR */}
      <section className="py-20 lg:py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Pair Sungrow With Your Solar Setup
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                A Sungrow battery works alongside your solar system to help you make better use of the electricity your panels generate.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Cpu,
                title: "Adding to existing solar",
                node: (
                  <>
                    Already have solar? We assess your current{" "}
                    <Link to="/products/solar-inverters/sungrow-inverters" className={linkClass}>solar panels and inverter</Link> to determine whether Sungrow battery storage is a suitable fit.
                  </>
                ),
              },
              {
                icon: Sun,
                title: "New solar + battery installs",
                node: (
                  <>
                    Installing solar for the first time? We design a complete system with panels, inverter and Sungrow storage sized to your property. Explore our{" "}
                    <Link to="/solar-systems/residential-solar-system" className={linkClass}>residential solar systems</Link>.
                  </>
                ),
              },
              {
                icon: Layers,
                title: "Larger homes & energy users",
                text: "For properties with higher electricity consumption, the larger SBH range offers significantly more storage, with multiple units able to work together for greater capacity.",
              },
              {
                icon: Building2,
                title: "Commercial & larger-scale",
                node: (
                  <>
                    Sungrow's expandable SBH storage can suit larger properties and higher-energy applications. Explore our{" "}
                    <Link to="/solar-systems/commercial-solar-system" className={linkClass}>commercial solar systems</Link>.
                  </>
                ),
              },
            ].map((card) => (
              <FadeIn key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{card.node ?? card.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION & REBATES */}
      <section className="py-20 lg:py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-12 normal-case max-w-3xl">
              Installed by SAA Accredited Installers, With Rebates Applied Upfront
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight normal-case">Sungrow Installation by SAA Accredited Installers</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Correct installation matters for performance, safety and compliance. The supplied Sungrow SBR and SBH ranges list certifications and standards including CEC, IEC 62619, IEC 62040, UN38.3 and VDE 2510-50, with specifics varying by range. Our{" "}
                <Link to="/about" className={linkClass}>SAA Accredited Installers</Link> assess your existing solar system, battery location, electrical requirements and selected configuration before installation.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                <CircleDollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight normal-case">Save With the Cheaper Home Batteries Program</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                If your Sungrow battery installation is eligible for the Cheaper Home Batteries Program, we check the available discount as part of your{" "}
                <Link to="/contact" className={linkClass}>quote</Link>, so you understand the expected cost before making a decision. Whether you're adding storage to an existing system or installing solar and battery together, we assess the complete setup and explain the applicable program requirements.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SUITABILITY */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Is a Sungrow Battery Right for You?
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: "Homes with existing solar", text: "If your solar system generates more electricity than your home uses during the day, a Sungrow battery can store some of that excess energy for later use." },
              { icon: Zap, title: "Homes with higher energy use", text: "Larger homes or households using multiple air conditioners and other high-energy appliances may benefit from the larger storage capacities across the SBR and SBH ranges." },
              { icon: Building2, title: "Businesses & larger properties", text: "Businesses and larger properties with higher electricity requirements may benefit from the greater storage capacity available through the SBH range." },
              { icon: Layers, title: "Planning for future needs", text: "The modular design of Sungrow battery systems provides flexibility when your electricity consumption changes or you want to increase your storage capacity." },
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

      {/* REVIEWS */}
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
                Sungrow SBR &amp; SBH ranges, capacity, LFP safety, retrofits, rebates and Darwin installs.
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
                Still Buying Electricity After Your Solar Stops Producing?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Your solar panels can generate plenty of energy during Darwin's sunny days, but your home may still need power long after the sun goes down. Store more of your solar with a Sungrow battery and put that energy to work when you need it.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  See My Sungrow Battery Options
                </a>
                <Link to="/contact" className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Request a Free Quote
                </Link>
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
                  Get Your Sungrow Battery Quote
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Tell us about your property and we'll size the right Sungrow SBR or SBH battery to your usage, with any Cheaper Home Batteries Program discount checked upfront, no surprises later.
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
              <QuoteForm title="Get My Free Quote" defaultInterest="Sungrow Battery" source="sungrow_battery" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SungrowBatteryPage;
