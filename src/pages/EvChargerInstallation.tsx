import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  Home,
  Building2,
  Layers,
  Car,
  Sun,
  Compass,
  Calendar,
  MapPin,
  BadgeCheck,
  Sparkles,
  ClipboardList,
  Search,
  FileText,
  Wrench,
  ChevronDown,
  Zap,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import heroImg from "../assets/images/ev_charger_install_hero.webp";
import weatherImg from "../assets/images/darwin_storm_roof_1785343440441.webp";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

const evProducts = [
  {
    title: "Sigenergy",
    description:
      "Innovative EV chargers that seamlessly integrate with your home's energy ecosystem for smart, efficient charging.",
    image: "/assets/images/hosted/products/ev-charger.webp",
  },
  {
    title: "Myenergi",
    description:
      "Highly adaptable chargers allowing you to charge your vehicle using 100% free energy generated from your solar panels.",
    image:
      "/assets/images/hosted/products/ev-charger.webp",
  },
  {
    title: "Fronius",
    description:
      "Intelligent charging solutions offering dynamic load balancing and optimal utilization of your surplus solar energy.",
    image: "/assets/images/hosted/products/ev-charger.webp",
  },
];

export function EvChargerInstallation() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Best EV Charger Installation Darwin | Residential & Commercial",
    metaDescription:
      "SAA accredited EV charger installation in Darwin. Weatherproof installs, upfront quotes, local Berrimah team. Book a free assessment today.",
    canonicalUrl: "https://oneroofsolar.com.au/services/ev-chargers/installation",
    robots: "index, follow",
    openGraphTitle: "Best EV Charger Installation Darwin | Residential & Commercial",
    openGraphDescription:
      "SAA accredited EV charger installation in Darwin. Weatherproof installs, upfront quotes, local Berrimah team. Book a free assessment today.",
    twitterTitle: "Best EV Charger Installation Darwin | Residential & Commercial",
    twitterDescription:
      "SAA accredited EV charger installation in Darwin. Weatherproof installs, upfront quotes, local Berrimah team. Book a free assessment today.",
  };

  const faqs = [
    {
      q: "How much does EV charger installation cost in Darwin?",
      a: "It depends on your charger type, phase (single or three phase), and switchboard condition. We provide a clear, upfront quote after a free site assessment, so there are no surprises.",
    },
    {
      q: "Do I need approval from Jacana Energy to install a charger?",
      a: "If your charger connects to the grid or ties into a solar system, your energy provider may need to be notified. We handle this process for you as part of the installation.",
    },
    {
      q: "Will my charger survive Darwin's wet season?",
      a: "Yes. We fit sealed, weather rated chargers with cyclone rated mounting where needed, built specifically to handle Top End rain, humidity and storms.",
    },
    {
      q: "Can a normal electrician install an EV charger?",
      a: "Not quite. EV charger installation needs specific training and accreditation. Our team are SAA Accredited Installers, so you know the job meets proper Australian standards, not just general electrical work.",
    },
    {
      q: "Is it cheaper to charge my EV at home or at a charging station?",
      a: "Home charging is usually cheaper, especially overnight on off-peak rates. Public charging stations often cost more per charge, plus you're paying for the convenience of fast charging on the go.",
    },
    {
      q: "Can I plug my EV into a normal socket?",
      a: "You can, but it's very slow and not ideal for regular use. A proper EV charger is safer, much faster, and built to handle daily charging without straining your home's wiring.",
    },
    {
      q: "Is it better to install an EV charger inside or outside my garage?",
      a: "Either works, it depends on your setup. Inside offers extra protection from weather. Outside is fine too, as long as it's a weatherproof charger built for Darwin's wet season.",
    },
    {
      q: "What size breaker for a 7kW car charger?",
      a: "This depends on your specific setup and existing switchboard, so it's best confirmed during your site assessment. We'll check this properly and make sure everything's sized correctly before installing.",
    },
    {
      q: "Can I install a 7kW charger at home?",
      a: "In most cases, yes. Most Darwin homes can support a 7kW charger with single-phase power. We'll confirm this during your free site assessment based on your switchboard and property.",
    },
    {
      q: "Should I charge my EV to 100% every night?",
      a: "It depends on your vehicle and daily driving needs. Many manufacturers recommend charging to around 80-90% for regular use, and saving 100% charges for longer trips.",
    },
  ];

  const installCards = [
    {
      title: "Home Charging",
      icon: Home,
      text: "Charging your EV at home means you never have to plan a detour to a public station again. We install your charger in the garage, carport, or driveway, wherever suits your property best, and set it up so you simply plug in overnight and wake up to a full battery, ready for the day ahead.",
    },
    {
      title: "Commercial Charging",
      icon: Building2,
      text: "A charger on site gives your business a real edge with staff and customers who drive electric. We install charging points for retail stores, offices, and hospitality venues, sized to handle regular daily use, so your business can offer charging as a genuine amenity rather than an afterthought.",
    },
    {
      title: "Apartment & Strata Charging",
      icon: Layers,
      text: "Multi-unit living shouldn't mean missing out on EV charging. We design shared charging setups for apartment blocks and strata properties, working within body corporate requirements to deliver a fair, dedicated solution for each resident, so everyone in the building has reliable access to charge their vehicle.",
    },
    {
      title: "Fleet & Operator Charging",
      icon: Car,
      text: "Running a fleet means your vehicles need to be ready to go, every day, without delay. We install multiple charging points sized to your fleet's needs, so your vehicles charge efficiently overnight or between shifts, keeping your business moving without unplanned downtime or scheduling headaches.",
    },
    {
      title: "Solar & Battery Integration",
      icon: Sun,
      text: "If you already have solar panels or a home battery, we look at your whole electrical setup before adding a charger. This means working out how much extra load your switchboard can safely handle, so your new charger works alongside your existing system rather than against it.",
    },
    {
      title: "Off-Grid Properties",
      icon: Compass,
      text: "Living off the grid doesn't mean going without EV charging. We assess your property's power setup, including your off-grid solar system, and design a charging solution that fits within your available capacity, so rural and remote NT properties can charge reliably too.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "EV Charger Installation Darwin",
      provider: {
        "@type": "LocalBusiness",
        name: "Oneroof Solar",
        telephone: PRIMARY_PHONE,
        email: "info@oneroofsolar.com.au",
      },
      areaServed: "Darwin, Northern Territory",
      description:
        "SAA accredited EV charger installation in Darwin for homes, businesses, apartments, fleets and off-grid properties.",
      url: "https://oneroofsolar.com.au/services/ev-chargers/installation",
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
          name: "EV Chargers",
          item: "https://oneroofsolar.com.au/services/ev-chargers/installation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Installation",
          item: "https://oneroofsolar.com.au/services/ev-chargers/installation",
        },
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
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 flex-wrap">
                <Link to="/" className="hover:text-[#8cc63f] transition-colors">Home</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-slate-400">Services</span>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">EV Charger Installation</span>
              </nav>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                EV Charger Installation Darwin NT |{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Trusted Local EV Charger Installers</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-medium border-l-2 border-[#8cc63f] pl-6">
                Looking for someone reliable to install your EV charger in Darwin? Oneroof Solar are SAA Accredited Installers based right here in Berrimah. We fit chargers for homes, businesses, and rural properties across the Top End, built to handle our heat and wet season without fuss.
              </p>
              <p className="text-slate-300 text-sm sm:text-base mb-8">
                Get a free quote today. Call {PRIMARY_PHONE}.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get a free quote today</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call {PRIMARY_PHONE}</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3]">
                <img
                  fetchPriority="high"
                  src={heroImg}
                  alt="EV charger installation on a Darwin home"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              EV Charger Installation Experts
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Oneroof Solar provides professional EV charger installation across Darwin and the wider NT, for homes, businesses, apartments, and off-grid properties. An EV charger is a dedicated unit installed at your property that lets you charge your electric vehicle faster and more safely than a standard power point, usually overnight for homes or throughout the day for businesses and fleets.
              </p>
              <p>
                We handle the entire process, from checking your property's electrical capacity through to a fully compliant, SAA accredited installation, so you can charge with confidence. Already have a charger that will not start, trips the breaker, or died after a storm? See our{" "}
                <Link to="/services/ev-chargers/repair" className={linkClass}>EV charger repair</Link>{" "}
                service.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Home &amp; Commercial EV Charger Installation in Darwin
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Need a charger for the family car, or a full fleet setup for the whole business? Either way, we can sort it.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installCards.map((card, idx) => (
              <FadeIn key={card.title} delay={idx * 0.08} className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{card.text}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-12 max-w-4xl mx-auto text-center">
              Every installer on our team is fully licensed and SAA Accredited, so you know the job's done right. We also supply and install chargers from a range of trusted brands, so you're not locked into a single option.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Keep live EV product cards so the old products page is not lost after redirect */}
      <section id="ev-charger-products" className="py-24 lg:py-32 bg-[#0A1118] relative">
        <div className="absolute inset-0 bg-dot-white/[0.05] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white normal-case">
                View All EV Charger <span className="text-brand-400">Products</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} className="md:max-w-xs">
              <p className="text-slate-400 font-medium">
                State-of-the-art charging terminals designed for durability, speed, and seamless solar integration.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {evProducts.map((product, idx) => (
              <FadeIn key={product.title} delay={idx * 0.1}>
                <div className="bg-slate-900/40 rounded-[2rem] p-6 lg:p-8 border border-white/10 shadow-2xl hover:border-brand-500/40 transition-all duration-500 h-full flex flex-col group relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 group-hover:bg-brand-500/20 z-0"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="h-64 sm:h-[320px] mb-8 rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group-hover:border-white/20 transition-colors duration-500 flex items-center justify-center p-2">
                      <img
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-100 z-0 drop-shadow-2xl"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300 text-xs tracking-widest uppercase shadow-sm">
                        EV Charger
                      </span>
                      <span className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-md text-brand-400 text-xs tracking-widest uppercase shadow-sm flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Smart Ready
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tighter group-hover:text-brand-400 transition-colors normal-case">
                      {product.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">{product.description}</p>
                    <a href="#quote-form" className="mt-auto flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors group/link">
                      <span className="text-sm font-bold text-white tracking-widest uppercase group-hover/link:text-brand-400 transition-colors">
                        Explore Terminal
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-brand-500 group-hover/link:text-slate-900 transition-all duration-300 text-white shadow-sm border border-white/10 group-hover/link:border-brand-400">
                        <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-rotate-45 transition-transform duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                EV Chargers Built to Handle Darwin's Weather
              </h2>
              <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium space-y-6">
                <p>
                  Darwin doesn't play by the same rules as the rest of Australia, and neither should your EV charger. Cheap chargers built for cooler, drier climates can struggle up here. Ours are chosen to handle it properly.
                </p>
                <p>
                  We fit chargers with sealed housings that keep dust and rain out (you might see this called IP65 or IP66 rated), so a downpour in December won't cause you any grief. Where needed, we use cyclone rated mounting hardware, so your charger stays put through Top End storms instead of coming loose.
                </p>
                <p>
                  We also make sure your setup is wired safely to Australian grid connection standards, so everything works smoothly with your home or business power supply, and with your energy provider Jacana Energy if you're feeding power back from solar.
                </p>
                <p>
                  It's the same thinking we bring to every{" "}
                  <Link to="/services/solar-panel-installation" className={linkClass}>solar panel installation</Link>{" "}
                  we do in Darwin. Build it for the climate it's actually going into, not the climate on a spec sheet from somewhere down south.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img src={weatherImg} alt="Darwin weather conditions for outdoor EV charger installs" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
              EV Charger Installation Cost in Darwin
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Every home and business is different, so your price depends on a few things: the type of charger you choose, whether it's single phase or three phase, and the condition of your existing switchboard. We'll always give you a clear, upfront quote before any work starts. No surprise add ons.
              </p>
              <p>
                If you're installing your EV charger alongside a new solar panel or battery system, the STC discount is applied straight into your quote upfront, not something you have to claim back later.
              </p>
              <p>Not sure what applies to your situation? That's exactly what our free site visit is for.</p>
            </div>
            <a
              href="#quote-form"
              className="inline-block mt-8 bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
            >
              Book a free site assessment
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Why Choose Our EV Charger Installers
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Fast Local Response</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We aim to complete your site assessment within 24 hours of booking, with a clear written quote so you know exactly what's involved before you commit.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Locally Owned &amp; Operated</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We're part of the Darwin community, not a national call centre that dispatches a random contractor. Our reputation is built on honest work and treating every customer properly.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Licensed &amp; SAA Accredited</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every electrician on our team is fully licensed and SAA Accredited, with real experience installing EV chargers across Darwin, NT.
              </p>
            </FadeIn>
            <FadeIn delay={0.25} className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">Clean, Respectful Installation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We treat your home or business like our own. Tidy work, clear communication, and nothing left behind when the job's done.
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
                Our Ev Charger Installation Process
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ClipboardList, title: "Get In Touch", text: "Call us or fill in a quick online enquiry. Tell us a bit about your home or business and what you're after." },
              { icon: Search, title: "Free Site Assessment", text: "We visit your property at a time that suits you, check your switchboard, and work out the best setup for your space." },
              { icon: FileText, title: "Upfront Quote", text: "You get a clear quote with any eligible discounts already applied. No hidden extras, no surprises later." },
              { icon: Wrench, title: "Installation & Handover", text: "Our licensed team installs your charger, tests everything, and walks you through how to use it before we go." },
            ].map((step, idx) => (
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
                  <FadeIn key={i} delay={i * 0.05}>
                    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md border-brand-500/50" : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"}`}>
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                      >
                        <h3 className={`text-sm sm:text-base font-bold leading-tight ${isOpen ? "text-[#8cc63f]" : "text-slate-900"}`}>{faq.q}</h3>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${isOpen ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180" : "border-slate-200 text-slate-500 bg-slate-50"}`}>
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
                Ready to Charge Your EV Fast at Home or Work in Darwin?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                Stop relying on slow wall sockets or public charging queues. Our Berrimah-based, SAA Accredited team will check your switchboard, handle Jacana Energy grid approvals, and install a weather-sealed charger built for Top End heat and wet season rain.
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
              <QuoteForm title="Book Your Free Site Assessment" defaultInterest="EV Charger Installation" source="ev_charger_installation" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EvChargerInstallation;
