import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Phone,
  Mail,
  Battery,
  BatteryCharging,
  Cpu,
  ShieldCheck,
  Zap,
  Home,
  Building2,
  Layers,
  ChevronDown,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import heroImg from "../assets/images/sigen_battery_hero.webp";
import detailImg from "../assets/images/sigen_battery_detail.webp";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

export function SigenergyBatteryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Sigenergy Battery Systems Darwin & NT | Oneroof Solar",
    metaDescription:
      "Weatherproof Sigenergy batteries for Darwin, Palmerston & NT properties. IP66 rated, SAA accredited installation, and upfront rebates applied. Call us today.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-battery-brands/sigenergy",
    robots: "index, follow",
    openGraphTitle: "Sigenergy Battery Systems Darwin & NT | Oneroof Solar",
    openGraphDescription:
      "Weatherproof Sigenergy batteries for Darwin, Palmerston & NT properties. IP66 rated, SAA accredited installation, and upfront rebates applied. Call us today.",
    twitterTitle: "Sigenergy Battery Systems Darwin & NT | Oneroof Solar",
    twitterDescription:
      "Weatherproof Sigenergy batteries for Darwin, Palmerston & NT properties. IP66 rated, SAA accredited installation, and upfront rebates applied. Call us today.",
  };

  const faqs = [
    {
      q: "Are Sigenergy batteries SAA approved?",
      a: "Yes. Every Sigenergy product we supply is SAA Approved/Certified, and our team are SAA Accredited Installers. This means your system meets proper Australian safety and compliance standards from day one.",
    },
    {
      q: "How is the battery rebate discount applied to my quote?",
      a: "Your discount is processed as a direct point-of-sale deduction using eligible Small-scale Technology Certificates (STCs) under the federal battery scheme. You only pay the out-of-pocket net balance listed on your quote.",
    },
    {
      q: "Can I still get an NT Government battery grant?",
      a: "No, NT Government local solar and battery grants are currently closed. We apply the Federal STC discount and, where eligible, the Cheaper Home Batteries Program discount instead.",
    },
    {
      q: "What size Sigenergy battery do I need?",
      a: "It depends on your household usage and goals. The 5.0 kWh suits smaller homes, while the 8.0 kWh fits larger households or higher energy use. We help you choose during your quote.",
    },
    {
      q: "Will a Sigenergy battery handle Darwin's high heat wet season?",
      a: "Yes. It carries an IP66 rating and 5 layer safety protection, built to handle high heat, humidity, and storm conditions common across the Top End without losing performance.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Sigenergy Battery Systems",
      "brand": { "@type": "Brand", "name": "Sigenergy" },
      "manufacturer": { "@type": "Organization", "name": "Sigenergy" },
      "image": "https://i.postimg.cc/vZdTgLm9/oneroof.png",
      "category": "Home Battery Storage",
      "description":
        "SAA Approved Sigenergy home and commercial battery storage systems with LiFePO4 cells, IP66 rating, and 5.0 kWh or 8.0 kWh stackable capacity. Supplied and installed across Darwin, Palmerston and the wider Northern Territory.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://oneroofsolar.com.au/" },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Solar Batteries",
          "item": "https://oneroofsolar.com.au/services/solar-battery-installation",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sigenergy Battery Systems",
          "item": "https://oneroofsolar.com.au/products/solar-battery-brands/sigenergy",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Oneroof Solar",
      "image": "https://i.postimg.cc/vZdTgLm9/oneroof.png",
      "telephone": PRIMARY_PHONE,
      "email": "info@oneroofsolar.com.au",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3/97 Pruen Rd",
        "addressLocality": "Berrimah",
        "addressRegion": "NT",
        "postalCode": "0828",
        "addressCountry": "AU",
      },
      "geo": { "@type": "GeoCoordinates", "latitude": -12.4386, "longitude": 130.9256 },
      "url": "https://oneroofsolar.com.au/products/solar-battery-brands/sigenergy",
      "areaServed": [
        { "@type": "Place", "name": "Darwin" },
        { "@type": "Place", "name": "Palmerston" },
        { "@type": "Place", "name": "Northern Territory" },
      ],
    },
  ];

  return (
    <div className="bg-[#121814] text-slate-100 font-sans min-h-screen">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0A1118]/30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn isHero>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#8cc63f] transition-colors">Home</a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-slate-400">Batteries</span>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">Sigenergy</span>
              </nav>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8cc63f]" /> SAA Approved Battery Storage
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-6 uppercase">
                Sigenergy Battery Systems,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Darwin NT</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                SAA Approved Sigenergy batteries for homes, businesses, and off grid properties, built for Darwin's heat, humidity, and wet season storms. Get an upfront quote with the STC discount already applied, plus savings through the Cheaper Home Batteries Program.
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
                {["IP66 rated", "SAA Accredited", "~10,000 cycles", "STC discount applied"].map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                    <Check className="w-4 h-4 text-[#8cc63f]" />
                    {chip}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img
                  fetchPriority="high"
                  src={heroImg}
                  alt="Sigenergy home battery system mounted on a Darwin home wall"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="text-2xl font-black text-[#8cc63f] leading-none">IP66</div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">Weatherproof</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* What Is a Sigenergy Battery? */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                What Is a Sigenergy Battery?
              </h2>
              <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-6">
                <p>
                  A Sigenergy battery is a home and commercial energy storage system that stores solar power for use at night, during outages, or off grid. It uses LiFePO4 cells rated for around 10,000 charge cycles, carries an IP66 rating for dust and moisture protection, and comes in 5.0 kWh or 8.0 kWh sizes that stack together for bigger capacity.
                </p>
                <p>
                  If you have lived in Darwin through even one wet season, you already know what heat and humidity can do to electrical gear. Sigenergy batteries are built with that exact problem in mind. They are made to handle high ambient temperatures, sticky air, and the kind of storms that knock other systems around.
                </p>
                <p>
                  We supply Sigenergy battery systems to homes, businesses, and off grid properties across Darwin, Palmerston, Berrimah, and the wider Northern Territory.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img
                  src={detailImg}
                  alt="Close up of a weatherproof Sigenergy home battery unit"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Block 1 (Hero) */}
      <section className="py-16 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
              Get Your Sigenergy Quote, STC Discount Already Applied
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Call us or fill in the quick form below. No waiting around for the rebate, it is already knocked off your price before we send the quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#quote-form"
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Get My Free Quote
              </a>
              <a
                href={`tel:${PRIMARY_PHONE_RAW}`}
                className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Call Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Sigenergy Battery Range We Supply */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                The Sigenergy Battery Range We Supply
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We keep it simple. Two battery sizes, one smart system that ties it all together.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/10 hover:border-[#8cc63f]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 shadow-inner">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">Sigen Battery 5.0 kWh</h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Usable capacity of 5.2 kWh. Runs on LiFePO4 cells, which are known for being safe and long lasting. Can sit on the floor or mount on a wall, whatever suits your space.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/10 hover:border-[#8cc63f]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 shadow-inner">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">Sigen Battery 8.0 kWh</h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Usable capacity of 7.8 kWh, same reliable platform, just more room to store power for bigger households or higher usage.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/10 hover:border-[#8cc63f]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 shadow-inner">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">SigenStor, The Full System</h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                This pairs the Sigen Energy Controller with your battery, and you can add an EV DC Charging Module if you drive electric. It runs at 100% depth of discharge, meaning you actually get to use the full capacity you paid for, not just a slice of it.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="mt-8 bg-slate-900/30 rounded-[2rem] p-8 border border-[#8cc63f]/15 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Modular Flexibility</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The built-in battery optimiser allows mixing older and newer modules over time. You can scale up storage in the future without discarding your existing units.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-8 max-w-4xl">
              Full technical specs, including voltage range and MPPT compatibility, are available on request. Pair it with a solid{" "}
              <Link to="/solar-systems/residential-solar-system" className={linkClass}>residential solar system</Link>{" "}
              or check compatibility with your{" "}
              <Link to="/product/solar-panels-brands" className={linkClass}>existing solar panels</Link>{" "}
              for the best results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sigenergy Battery Safety & SAA Accreditation */}
      <section className="py-24 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              Sigenergy Battery Safety &amp; SAA Accreditation
            </h2>
            <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Every Sigenergy product we supply is SAA Approved/Certified. We are also SAA Accredited Installers, which means your setup is fitted by people who meet the required Australian standards for safety and compliance.
              </p>
              <p>
                This matters more than most people realise. If your battery is not fitted by an accredited installer, or the product itself is not properly approved, you can run into real problems down the line with insurance or warranty claims. We do not cut corners here.
              </p>
              <p>
                Learn more about{" "}
                <Link to="/about" className={linkClass}>who we are</Link>{" "}
                and how we work.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Save More With the Cheaper Home Batteries Program */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              Save More With the Cheaper Home Batteries Program
            </h2>
            <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>Let's talk money, because that's usually the first question anyway.</p>
              <p>
                If your Sigenergy battery setup is eligible, you can access a discount through the Cheaper Home Batteries Program. We check your eligibility as part of your quote, so you know exactly what you're saving before you commit to anything.
              </p>
              <p>
                One thing we want to be upfront about: the NT Government's local battery grants are currently closed. If you've seen mention of a state based rebate somewhere online, it's outdated. We only work with the Cheaper Home Batteries Program, and we apply it properly and honestly in every quote we send.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Block 2 (Mid Page) */}
      <section className="py-16 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
              Not Sure Which Battery Size Fits Your Home?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Give us a quick call and we will help you work out whether the 5.0 kWh or 8.0 kWh setup makes more sense for your household or business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${PRIMARY_PHONE_RAW}`}
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Talk to Our Team
              </a>
              <a
                href="#quote-form"
                className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Request a Callback
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who This System Suits */}
      <section className="py-24 bg-[#121814] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Who This System Suits
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Sigenergy batteries work well for a wide range of NT properties.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-slate-900/30 rounded-[2rem] p-8 border border-white/5 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#8cc63f] mb-4 tracking-tight uppercase">Homeowners and Families</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                If you want lower power bills and backup during outages, this is a straightforward, low maintenance option that just gets on with the job.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-slate-900/30 rounded-[2rem] p-8 border border-white/5 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#8cc63f] mb-4 tracking-tight uppercase">Commercial Property Managers</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Businesses across Darwin and Palmerston are turning to battery storage to manage rising energy costs and keep operations running during grid interruptions. Check out our{" "}
                <Link to="/solar-systems/commercial-solar-system" className={linkClass}>commercial solar systems</Link>{" "}
                for a full setup.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-slate-900/30 rounded-[2rem] p-8 border border-white/5 flex flex-col h-full shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#8cc63f] mb-4 tracking-tight uppercase">Off Grid Properties</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                For rural NT properties not connected to the main grid, Sigenergy's stackable battery design gives you room to scale up storage as your needs grow. Have a look at our{" "}
                <Link to="/solar-systems/off-grid-solar-system" className={linkClass}>off grid solar systems</Link>{" "}
                page for more detail.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-8 max-w-4xl mx-auto text-center">
              If you are exploring inverter options alongside your battery, our{" "}
              <Link to="/products/solar-inverters" className={linkClass}>solar inverters range</Link>{" "}
              and{" "}
              <Link to="/services/solar-inverters/installation" className={linkClass}>inverter installation service</Link>{" "}
              cover everything you need to know. Already have a system playing up? Our{" "}
              <Link to="/services/solar-inverters/repair" className={linkClass}>inverter repair service</Link>{" "}
              and general{" "}
              <Link to="/services/solar-panel-repair-darwin" className={linkClass}>solar panel repair</Link>{" "}
              team can help sort it out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs mb-6 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#8cc63f] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Support</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] mb-6 uppercase">
                  Common Questions About Sigenergy Batteries
                </h2>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                  Everything you need to know about Sigenergy battery storage for your NT property.
                </p>
                <div className="mt-8">
                  <a href="#quote-form">
                    <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 border-none uppercase tracking-wider text-xs">
                      Get My Free Quote
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-slate-900/60 shadow-xl border-[#8cc63f]/30"
                          : "bg-slate-900/20 border-white/5 hover:border-[#8cc63f]/20"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 focus-visible:ring-2 focus-visible:ring-[#8cc63f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121814] transition-all"
                      >
                        <div className="flex items-start sm:items-center gap-4">
                          <div
                            className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                              isOpen
                                ? "bg-[#8cc63f] text-[#19281D] shadow-md shadow-[#8cc63f]/20"
                                : "bg-white/5 text-slate-400 border border-white/10"
                            }`}
                          >
                            0{i + 1}
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                              isOpen ? "text-[#8cc63f]" : "text-white"
                            }`}
                          >
                            {faq.q}
                          </h3>
                        </div>
                        <div
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180"
                              : "border-white/10 text-slate-400 bg-white/5"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <div
                        id={`faq-panel-${i}`}
                        aria-labelledby={`faq-button-${i}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 px-6 sm:px-6 ${
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-slate-300 leading-relaxed font-medium pl-12 sm:pl-14 text-xs sm:text-sm">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="py-24 bg-[#0A1118] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#121814]/10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
                Get Your Sigenergy Battery Quote
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                Tell us about your property and we will size the right Sigenergy battery for your needs, with the STC discount already applied to your quote.
              </p>

              <div className="space-y-6">
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group">
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
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <QuoteForm
                title="Get Your Free Quote"
                defaultInterest="Solar Battery Storage"
                source="sigenergy_battery"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Block 3 (Final Booking) */}
      <section className="py-24 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Ready for a Battery That Actually Handles NT Conditions?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Get your SAA Approved Sigenergy battery quote today. STC discount already applied, no surprises later.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${PRIMARY_PHONE_RAW}`}
                className="inline-block bg-[#8cc63f] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
              >
                Call Us Now
              </a>
              <a
                href="#quote-form"
                className="inline-block border border-white/20 bg-white/5 text-white px-10 py-5 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 uppercase tracking-wider text-xs"
              >
                Get My Free Quote
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default SigenergyBatteryPage;
