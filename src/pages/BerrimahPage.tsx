import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  Zap,
  Sun,
  Home,
  Building2,
  BatteryCharging,
  Wrench,
  ChevronDown,
  Star,
  Cpu,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { LocationMapCard, OFFICE_LOCATIONS } from "../components/LocationMap";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

const trustChips = [
  "SAA Accredited",
  "Cyclone Rated Roof Mounting C2/C3",
  "Jacana Approved",
  "4.9/5 (128 Reviews)",
  "Upfront STC & Battery Discounts",
];

const systemTypes = [
  {
    title: "Residential Solar",
    href: "/solar-systems/residential-solar-system",
    icon: Home,
    text: "For Berrimah homes, we size every system around how your household actually uses power, not a generic off the shelf package. That means looking at your roof space, your daily routine, and your power bills before we recommend anything. Cyclone rated mounting keeps things secure through wet season storms.",
  },
  {
    title: "Commercial Solar",
    href: "/solar-systems/commercial-solar-system",
    icon: Building2,
    text: "Built for Berrimah's industrial precinct, including sites running 3 phase power. We design commercial systems around your actual operating hours, so a warehouse running daytime shifts gets a very different setup to a business that operates around the clock.",
  },
  {
    title: "Off-Grid Solar",
    href: "/solar-systems/off-grid-solar-system",
    icon: Zap,
    text: "Not every property around Berrimah is connected to mains power, and for rural blocks and standalone properties, an off-grid solar system can be the most practical option. We design these systems to run independently year round, including through the wet season when reliability matters most.",
  },
];

const relatedServices = [
  {
    title: "Solar Inverter Installation",
    href: "/services/solar-inverters/installation",
    icon: Cpu,
    text: "Your inverter is the brain of your solar system, and it is usually the first thing to struggle in Darwin's heat and humidity. Our range includes units rated IP65 and IP66, built to resist dust and moisture. We fit inverters suited to your system size, residential or commercial.",
  },
  {
    title: "Solar Inverter Repair",
    href: "/services/solar-inverters/repair",
    icon: Wrench,
    text: "Most inverter faults in Berrimah come down to heat stress or moisture getting into old, poorly sealed units. If your inverter is throwing fault codes or dropping offline, our local team diagnoses the actual issue fast, rather than guessing or swapping parts unnecessarily.",
  },
  {
    title: "Solar Battery Installation",
    href: "/services/solar-battery-installation",
    icon: BatteryCharging,
    text: "We install battery systems with MPPT charge controllers that keep your panels performing even on cloudy wet season days. If you cannot afford downtime, a battery gives you a safety net. Eligible installs may qualify for a Cheaper Home Batteries Program discount, applied upfront.",
  },
  {
    title: "EV Charger Installation",
    href: "/services/ev-chargers/installation",
    icon: Zap,
    text: "More Berrimah homes and businesses are adding EV chargers alongside solar, and it makes sense. Charging straight from your own solar power cuts running costs and keeps you off peak grid pricing. We install for homes and commercial fleets, matched to your existing setup.",
  },
  {
    title: "EV Charger Repair",
    href: "/services/ev-chargers/repair",
    icon: Wrench,
    text: "If your EV charger has stopped working properly, we repair those too, so you are not stuck waiting on a call centre or an interstate technician who has never seen your setup. Fast, local diagnosis from a team based right here in Berrimah.",
  },
];

const whyPoints = [
  "Fast, local response, based right in Berrimah",
  "Available for urgent repairs, not just new installs",
  "Ongoing maintenance plans to keep your system running at its best",
  "SAA Accredited Installers using only SAA Approved and Certified Products",
  "Cyclone rated mounting and IP65/IP66 rated equipment built for Darwin's heat, humidity, and wet season",
  "Federal STC Solar PV Grant applied upfront in your quote, no chasing paperwork",
  "Eligible battery installs may qualify for a Cheaper Home Batteries Program discount",
  "Jacana Energy grid connection and compliance paperwork handled for you",
  "4.9 stars from 128 local reviews",
];

const faqs = [
  {
    q: "Are Oneroof Solar installers SAA accredited?",
    a: "Yes. Our team holds SAA Accredited Installer status, the current national standard for solar design and installation in Australia. We also only fit SAA Approved and Certified Products for full compliance and safety.",
  },
  {
    q: "How does grid connection with Jacana Energy work?",
    a: "We handle your Jacana Energy grid connection application and compliance paperwork as part of your installation. Your system is connected safely and correctly, meeting AS 4777 standards, with no extra steps required from you.",
  },
  {
    q: "Is the solar rebate already included in my quote?",
    a: "Yes. The Federal STC Solar PV Grant is applied upfront as a discount on your quote, not as a separate claim you chase later. The old NT Government local grant is closed and no longer available.",
  },
  {
    q: "Can solar panels handle Darwin's wet season and cyclones?",
    a: "Yes, when installed correctly. We use cyclone rated framing and mounting suited to C2 and C3 wind classifications, so your system is built to stay secure through storm season, not just the dry.",
  },
  {
    q: "Do I need to be home for a battery installation?",
    a: "Yes, for the initial assessment and final handover. Our licenced team completes the technical installation and connection, then walks you through how your system and battery work before we leave.",
  },
];

export function BerrimahPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const darwinOffice = OFFICE_LOCATIONS[0];

  const seoData = {
    title: "Local Berrimah Solar Installers & Repair Experts | Oneroof",
    metaDescription:
      "Built for Berrimah's wet season & extreme heat. SAA accredited team for solar, battery & inverter fixes. 4.9★ rated local experts based on Pruen Rd. Call now!",
    canonicalUrl: "https://oneroofsolar.com.au/locations/berrimah/",
    robots: "index, follow",
    openGraphTitle: "Local Berrimah Solar Installers & Repair Experts | Oneroof",
    openGraphDescription:
      "Built for Berrimah's wet season & extreme heat. SAA accredited team for solar, battery & inverter fixes. 4.9★ rated local experts based on Pruen Rd. Call now!",
    twitterTitle: "Local Berrimah Solar Installers & Repair Experts | Oneroof",
    twitterDescription:
      "Built for Berrimah's wet season & extreme heat. SAA accredited team for solar, battery & inverter fixes. 4.9★ rated local experts based on Pruen Rd. Call now!",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Solar Installation and Repair Berrimah",
      provider: {
        "@type": "LocalBusiness",
        name: "Oneroof Solar",
        image: "/assets/images/home/logo-oneroof.png",
        telephone: PRIMARY_PHONE,
        email: "info@oneroofsolar.com.au",
        address: { "@type": "PostalAddress", streetAddress: "3/97 Pruen Rd", addressLocality: "Berrimah", addressRegion: "NT", postalCode: "0828", addressCountry: "AU" },
      },
      areaServed: [{ "@type": "AdministrativeArea", name: "Berrimah" }, { "@type": "AdministrativeArea", name: "Darwin" }],
      description: "Solar panel installation, repair and maintenance for Berrimah homes, industrial sites and commercial properties.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oneroofsolar.com.au/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://oneroofsolar.com.au/contact/" },
        { "@type": "ListItem", position: 3, name: "Berrimah", item: "https://oneroofsolar.com.au/locations/berrimah/" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Oneroof Solar Berrimah",
      image: "/assets/images/home/logo-oneroof.png",
      telephone: PRIMARY_PHONE,
      email: "info@oneroofsolar.com.au",
      address: { "@type": "PostalAddress", streetAddress: "3/97 Pruen Rd", addressLocality: "Berrimah", addressRegion: "NT", postalCode: "0828", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -12.4386, longitude: 130.9256 },
      url: "https://oneroofsolar.com.au/locations/berrimah/",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "128" },
      serviceArea: [{ "@type": "Place", name: "Berrimah" }, { "@type": "Place", name: "Darwin" }],
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0A1118]/30" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn isHero>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#8cc63f] transition-colors">Home</a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-slate-400">Locations</span>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">Berrimah</span>
              </nav>
              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Solar Installation and Repair in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Berrimah NT</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Local, reliable solar for Berrimah homes and businesses, built to handle Darwin&apos;s heat and wet season. From residential rooftops to industrial sites, we install and repair it all, right here in your suburb.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs" asChild>
                  <a href="#quote-form">Get a Free Berrimah Quote</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs" asChild>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>Call {PRIMARY_PHONE}</a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {trustChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                    <Check className="w-4 h-4 text-[#8cc63f] shrink-0" />
                    {chip}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img fetchPriority="high" src="/assets/images/hosted/berrimah-0828.webp" alt="Solar installation at OneRoof Solar's Berrimah headquarters on Pruen Road" className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#8cc63f] leading-none">4.9 <Star className="w-4 h-4 fill-[#8cc63f]" /></div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">128 Reviews</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* Intro */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-center text-slate-900 mb-8 normal-case">Solar Panel Installation and Repair in Berrimah</h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Berrimah sits right between Darwin and Palmerston, home to busy industrial units, family homes, and everything in between. From the Business Park and Hidden Valley Industrial Estate along Berrimah Road, to homes and properties near the Showground and Exhibition Centre, we cover the whole suburb. Whether you run a warehouse on Pruen Road or a family home near Kormilda College, Oneroof Solar builds systems that handle real Territory conditions, from build up heat to wet season storms.
              </p>
              <p>
                Every solar panel installation uses cyclone rated mounting built for wet season storms, and meets AS 4777 grid connection standards. If your existing system is underperforming or has stopped working altogether, our solar panel repair team gets to Berrimah fast. We know the older panels installed during the early solar rush in this area are often the ones causing trouble now, and we fix the actual problem instead of just patching it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Residential / Commercial / Off-Grid */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn><h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">Residential, Commercial, and Off-Grid Solar for Berrimah</h2></FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={0.1 * (i + 1)} className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 shadow-inner"><Icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">{item.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed flex-1 mb-6">{item.text}</p>
                  <Link to={item.href} className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">Power Your Berrimah Home or Business with Local Solar</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">Built for Darwin&apos;s harsh climate with upfront STC discounts applied directly to your quote.</p>
              <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs">Get Your Free Berrimah Quote Today &rarr;</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">Inverter, Battery, and EV Charger Services</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Solar panels are only part of the picture. Most homes and businesses in Berrimah also need a reliable inverter, and increasingly, battery backup or EV charging as well. We handle the full setup, not just the panels on your roof.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={Math.min(0.05 * i, 0.25)} className={`bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm ${i === relatedServices.length - 1 && relatedServices.length % 3 === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6"><Icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">{item.text}</p>
                  <Link to={item.href} className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case">Why Berrimah Trusts Oneroof Solar</h2>
              <ul className="space-y-5">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                    <span className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-sm sticky top-28">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6"><Shield className="w-6 h-6" /></div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 normal-case">Based Right Here in Berrimah</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Our HQ is on Pruen Road. From cyclone-rated mounting to IP65/IP66 equipment and upfront STC discounts, every Berrimah system is designed for real Territory conditions.</p>
                <div className="flex items-center gap-3 text-slate-900 font-bold"><Sun className="w-5 h-5 text-[#8cc63f]" />3/97 Pruen Rd, Berrimah</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Repair CTA */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">Solar System Underperforming or Faulty?</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">Speak directly with our local Berrimah team. We diagnose and fix real issues fast.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs">Book a Free Berrimah System Check</a>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:-translate-y-0.5 uppercase tracking-wider text-xs">Call {PRIMARY_PHONE}</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">Find Us in Berrimah</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">Close to the Business Park, Hidden Valley Industrial Estate, and the Showground and Exhibition Centre. Near Tiger Brennan Drive or the Stuart Highway, our team is minutes away.</p>
              <div className="flex items-start gap-3 text-slate-700 font-medium"><MapPin className="w-5 h-5 text-[#8cc63f] shrink-0 mt-0.5" /><span>{darwinOffice.address}</span></div>
            </FadeIn>
            <FadeIn delay={0.15}><LocationMapCard location={darwinOffice} /></FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">Frequently Asked Questions</h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">Common questions about solar installation and repair for Berrimah properties.</p>
                <a href="#quote-form"><Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 border-none uppercase tracking-wider text-xs">Get a Free Quote</Button></a>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={faq.q} delay={i * 0.05}>
                    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md border-brand-500/50" : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"}`}>
                      <button onClick={() => setOpenFaqIndex(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`berrimah-faq-panel-${i}`} id={`berrimah-faq-button-${i}`} className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4">
                        <div className="flex items-start sm:items-center gap-4">
                          <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${isOpen ? "bg-[#8cc63f] text-[#19281D] shadow-md shadow-[#8cc63f]/20" : "bg-slate-50 text-slate-500 border border-slate-200"}`}>0{i + 1}</div>
                          <h3 className={`text-sm sm:text-base font-bold leading-tight transition-colors ${isOpen ? "text-[#8cc63f]" : "text-slate-900"}`}>{faq.q}</h3>
                        </div>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180" : "border-slate-200 text-slate-500 bg-slate-50"}`}><ChevronDown className="w-4 h-4" /></div>
                      </button>
                      <div id={`berrimah-faq-panel-${i}`} aria-labelledby={`berrimah-faq-button-${i}`} role="region" className={`overflow-hidden transition-all duration-500 px-6 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="text-slate-600 leading-relaxed font-medium pl-12 sm:pl-14 text-xs sm:text-sm">{faq.a}</div>
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
      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"><div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" /></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">Ready to Upgrade or Fix Your Berrimah Solar System?</h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">Drop into our Pruen Road HQ or request a quick, zero-obligation assessment from our local team online today.</p>
                <div className="space-y-6">
                  <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all"><Phone className="w-5 h-5" /></div>
                    <div><div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Our Team</div><div className="text-base sm:text-lg font-black">{PRIMARY_PHONE}</div></div>
                  </a>
                  <a href="mailto:info@oneroofsolar.com.au" className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all"><Mail className="w-5 h-5" /></div>
                    <div><div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</div><div className="text-base sm:text-lg font-black">info@oneroofsolar.com.au</div></div>
                  </a>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}><QuoteForm title="Book Your Free Berrimah Consultation" defaultInterest="Residential Solar Panels" source="location_berrimah" /></FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight normal-case">Ready to Upgrade or Fix Your Berrimah Solar System?</h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Drop into our Pruen Road HQ or request a quick, zero-obligation assessment from our local team online today.</p>
            <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs">Book Your Free Berrimah Consultation &rarr;</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default BerrimahPage;
