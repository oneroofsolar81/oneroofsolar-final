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
  "Power and Water Connection Support",
  "4.9/5 (128 Reviews)",
  "Upfront STC & Battery Discounts",
];

const systemTypes = [
  {
    title: "Residential Solar",
    href: "/solar-systems/residential-solar-system",
    icon: Home,
    text: "For East Point homes, we design each solar system around your roof, energy use and daily power needs rather than pushing a standard package. We consider roof orientation, available space, shading and Darwin's tropical conditions when sizing your system. With strong winds, humidity and coastal exposure to consider, the right mounting and weather-resistant components matter just as much as the panels.",
  },
  {
    title: "Commercial Solar",
    href: "/solar-systems/commercial-solar-system",
    icon: Building2,
    text: "East Point businesses need solar designed around their operating hours, energy demand and available roof space. We build commercial solar PV systems to help businesses generate more of their own electricity and reduce grid reliance. System design also considers East Point's tropical heat, humidity and coastal conditions, helping your solar setup perform reliably in Darwin's environment.",
  },
  {
    title: "Solar Battery Storage",
    href: "/solar-systems/off-grid-solar-system",
    icon: BatteryCharging,
    text: "East Point properties can pair solar panels with battery storage to keep more of the electricity they generate for later use. Instead of sending excess daytime solar back to the grid, a battery can store it for evening use when solar production drops. This can be particularly useful for homes and businesses with significant evening energy demand.",
  },
];

const relatedServices = [
  {
    title: "Solar Inverter Installation",
    href: "/services/solar-inverters/installation",
    icon: Cpu,
    text: "Your inverter converts the solar energy your panels generate into usable electricity for your home or business. In East Point, heat, humidity and coastal conditions make equipment selection important. We install reliable inverters with features such as IP65/IP66 protection, matched to your system size and energy requirements.",
  },
  {
    title: "Solar Inverter Repair",
    href: "/services/solar-inverters/repair",
    icon: Wrench,
    text: "East Point's heat, humidity and coastal air can put extra strain on older solar inverters. If your system is showing fault codes, shutting down or producing less power than expected, we inspect the inverter, connections and system performance to identify the actual fault and restore reliable operation.",
  },
  {
    title: "Solar Battery Installation",
    href: "/services/solar-battery-installation",
    icon: BatteryCharging,
    text: "Make better use of your solar power by storing excess daytime energy for later. We install solar battery systems matched to your energy use, with suitable charge-control technology and monitoring. Eligible installations may also qualify for the Cheaper Home Batteries Program discount, applied upfront.",
  },
  {
    title: "EV Charger Installation",
    href: "/services/ev-chargers/installation",
    icon: Zap,
    text: "For East Point homes and businesses, an EV charger can work alongside your solar system to make better use of daytime solar generation. We install EV charging systems matched to your property, vehicle needs and existing solar setup, helping you charge with more of your own renewable energy.",
  },
  {
    title: "EV Charger Repair",
    href: "/services/ev-chargers/repair",
    icon: Wrench,
    text: "If your EV charger is cutting out, charging slowly or not powering up, our team can inspect the charger, connections and electrical setup to find the fault. We provide local repair support for East Point properties, helping get your EV charging system back to reliable operation.",
  },
];

const whyPoints = [
  "Fast, local response for East Point homes and businesses from our nearby Darwin base",
  "Available for urgent solar repairs, not just new installations",
  "Ongoing maintenance to help keep your East Point solar system running at its best",
  "SAA Accredited Installers using only SAA Approved and Certified Products",
  "Cyclone-rated mounting and IP65/IP66-rated equipment built for Darwin's heat, humidity, coastal exposure and wet season",
  "Federal STC Solar PV Grant applied upfront in your quote, no chasing paperwork",
  "Eligible battery installations may qualify for a Cheaper Home Batteries Program discount",
  "Jacana Energy grid connection and compliance paperwork handled for you",
  "4.9 stars from 128 local reviews",
];

const faqs = [
  {
    q: "How do East Point's coastal conditions affect solar panels?",
    a: "Coastal salt spray, humidity, and tropical heat can accelerate wear on standard gear. We use weather-resistant IP65/IP66 rated equipment and cyclone-rated roof mounting (C2/C3) to protect against corrosion and extreme Darwin weather.",
  },
  {
    q: "Are your solar systems rated for East Point's strong winds and cyclones?",
    a: "Yes. All installations use certified C2/C3 cyclone-rated mounting specifically engineered to secure rooftops against severe tropical winds and storms near the East Point Reserve and coastline.",
  },
  {
    q: "Who handles the grid connection paperwork with Power and Water Corporation?",
    a: "We do. OneRoof Solar manages all grid connection documentation, compliance checks, and standards requirements (AS/NZS 4777) with Power and Water Corporation on your behalf.",
  },
  {
    q: "What rebates and discounts apply to East Point solar and battery installs?",
    a: "Eligible systems receive the Federal STC Solar PV Grant applied directly upfront as a discount. Qualifying battery setups can also access the Cheaper Home Batteries Program reduction.",
  },
  {
    q: "What should I do if my solar system or inverter fails in East Point?",
    a: "Call our local Darwin team for a fast diagnostic check. We thoroughly inspect your panels, inverter, and wiring to locate the fault and restore your system's performance.",
  },
];

export function EastPointPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const darwinOffice = OFFICE_LOCATIONS[0];

  const seoData = {
    title: "Solar Installation and Repair in East Point NT | Oneroof Solar",
    metaDescription:
      "Reliable solar for East Point homes and businesses. Solar panel installation, battery storage, inverter solutions and repairs designed for Darwin's tropical coastal climate. Get a free quote.",
    canonicalUrl: "https://oneroofsolar.com.au/locations/east-point/",
    robots: "index, follow",
    openGraphTitle: "Solar Installation and Repair in East Point NT | Oneroof Solar",
    openGraphDescription:
      "Reliable solar for East Point homes and businesses. Solar panel installation, battery storage, inverter solutions and repairs designed for Darwin's tropical coastal climate.",
    twitterTitle: "Solar Installation and Repair in East Point NT | Oneroof Solar",
    twitterDescription:
      "Reliable solar for East Point homes and businesses. Solar panel installation, battery storage, inverter solutions and repairs designed for Darwin's tropical coastal climate.",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Solar Installation and Repair East Point",
      provider: {
        "@type": "LocalBusiness",
        name: "Oneroof Solar",
        image: "/assets/images/home/logo-oneroof.png",
        telephone: PRIMARY_PHONE,
        email: "info@oneroofsolar.com.au",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3/97 Pruen Rd",
          addressLocality: "Berrimah",
          addressRegion: "NT",
          postalCode: "0828",
          addressCountry: "AU",
        },
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "East Point" },
        { "@type": "AdministrativeArea", name: "Darwin" },
      ],
      description:
        "Solar panel installation, battery storage, inverter solutions and solar repairs for residential and commercial properties across East Point.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://oneroofsolar.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://oneroofsolar.com.au/contact/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "East Point",
          item: "https://oneroofsolar.com.au/locations/east-point/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Oneroof Solar East Point",
      image: "/assets/images/home/logo-oneroof.png",
      telephone: PRIMARY_PHONE,
      email: "info@oneroofsolar.com.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3/97 Pruen Rd",
        addressLocality: "Berrimah",
        addressRegion: "NT",
        postalCode: "0828",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -12.4260,
        longitude: 130.8380,
      },
      url: "https://oneroofsolar.com.au/locations/east-point/",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "128",
      },
      serviceArea: [
        { "@type": "Place", name: "East Point" },
        { "@type": "Place", name: "Fannie Bay" },
        { "@type": "Place", name: "Larrakeyah" },
        { "@type": "Place", name: "The Gardens" },
        { "@type": "Place", name: "Cullen Bay" },
        { "@type": "Place", name: "Darwin" },
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

      {/* Hero */}
      <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#121814]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-[#0A1118]/30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn isHero>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <a
                  href="https://oneroofsolar.com.au/"
                  className="hover:text-[#8cc63f] transition-colors"
                >
                  Home
                </a>
                <span className="text-slate-500" aria-hidden="true">
                  &gt;
                </span>
                <span className="text-slate-400">Locations</span>
                <span className="text-slate-500" aria-hidden="true">
                  &gt;
                </span>
                <span className="text-[#8cc63f]" aria-current="page">
                  East Point
                </span>
              </nav>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Solar Installation and Repair in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                  East Point NT
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Reliable solar for East Point homes and businesses, designed for Darwin&apos;s
                tropical climate, coastal conditions and strong weather. From residential rooftops to
                commercial properties, OneRoof Solar provides tailored solar installation, battery
                storage, repairs and maintenance right across East Point.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get a Free East Point Quote</a>
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

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {trustChips.map((chip) => (
                  <div
                    key={chip}
                    className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold"
                  >
                    <Check className="w-4 h-4 text-[#8cc63f] shrink-0" />
                    {chip}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img
                  fetchPriority="high"
                  src="/assets/images/hosted/bayview-0820.webp"
                  alt="Solar installation serving East Point homes and businesses near Darwin coastline"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#8cc63f] leading-none">
                    4.9 <Star className="w-4 h-4 fill-[#8cc63f]" />
                  </div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">
                    128 Reviews
                  </div>
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
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-center text-slate-900 mb-8 normal-case">
              Solar Panel Installation and Repair in East Point
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                East Point is a coastal Darwin suburb, with homes and properties around Lake
                Alexander, Dudley Point and East Point Reserve. Solar systems here need to handle
                tropical heat, humidity, wet-season rain, strong winds and coastal salt exposure.
                OneRoof Solar designs solar solutions around East Point&apos;s local conditions and
                individual roof requirements.
              </p>
              <p>
                Every solar panel installation uses quality solar panels, suitable inverters and
                cyclone-rated roof mounting designed for Territory conditions. We also consider roof
                structure, wind exposure and coastal conditions when designing your system.
              </p>
              <p>
                For grid-connected solar, we work with Power and Water Corporation requirements and
                applicable AS/NZS 4777 standards. If your existing system is underperforming or has
                stopped working, our solar panel repair team can assess the panels, inverter, wiring
                and connections to find the actual fault and get your system working properly again.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Residential / Commercial / Battery */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Residential, Commercial, and Solar Solutions for East Point
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={item.title}
                  delay={0.1 * (i + 1)}
                  className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed flex-1 mb-6">
                    {item.text}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid CTA 1 */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Power Your East Point Home or Business with Local Solar
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Built for East Point&apos;s tropical coastal climate, with upfront STC discounts on
                eligible systems.
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Get Your Free East Point Quote Today &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Inverter, Battery, and EV Charger Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Solar panels are just one part of a complete energy system. For East Point
                properties, the right inverter, battery storage or EV charger can help you get more
                from your solar investment. We design and install these components around your energy
                use, property and Darwin&apos;s tropical coastal conditions.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={item.title}
                  delay={Math.min(0.05 * i, 0.25)}
                  className={`bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm ${
                    i === relatedServices.length - 1 && relatedServices.length % 3 === 2
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">{item.text}</p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
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
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case">
                Why East Point Trusts OneRoof Solar
              </h2>
              <ul className="space-y-5">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-sm sticky top-28">
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 normal-case">
                  Built for Coastal Territory Conditions
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  From cyclone-rated mounting to IP65/IP66 weather-resistant equipment and upfront
                  STC discounts, every East Point system is designed around Darwin&apos;s heat,
                  humidity, coastal exposure and wet season.
                </p>
                <div className="flex items-center gap-3 text-slate-900 font-bold">
                  <Sun className="w-5 h-5 text-[#8cc63f]" />
                  Local Berrimah-based team
                </div>
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
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Solar System Underperforming or Faulty?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Talk to our local East Point team. We&apos;ll find the fault and get your system back
                on track.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#quote-form"
                  className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                >
                  Book Your Free East Point System Check
                </a>
                <a
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="inline-block bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                >
                  Call {PRIMARY_PHONE}
                </a>
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
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Find Us Near East Point
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">
                Serving East Point and nearby Darwin suburbs, including Fannie Bay, Larrakeyah, The
                Gardens and Cullen Bay. With easy access from the Darwin CBD and surrounding areas,
                our local team can reach East Point homes and businesses for solar installation,
                repairs and maintenance.
              </p>
              <div className="flex items-start gap-3 text-slate-700 font-medium">
                <MapPin className="w-5 h-5 text-[#8cc63f] shrink-0 mt-0.5" />
                <span>{darwinOffice.address}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <LocationMapCard location={darwinOffice} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">
                  Common questions about solar installation and repair for East Point properties.
                </p>
                <a href="#quote-form">
                  <Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 border-none uppercase tracking-wider text-xs">
                    Get a Free Quote
                  </Button>
                </a>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={faq.q} delay={i * 0.05}>
                    <div
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-white shadow-md border-brand-500/50"
                          : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`east-point-faq-panel-${i}`}
                        id={`east-point-faq-button-${i}`}
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4"
                      >
                        <div className="flex items-start sm:items-center gap-4">
                          <div
                            className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                              isOpen
                                ? "bg-[#8cc63f] text-[#19281D] shadow-md shadow-[#8cc63f]/20"
                                : "bg-slate-50 text-slate-500 border border-slate-200"
                            }`}
                          >
                            0{i + 1}
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                              isOpen ? "text-[#8cc63f]" : "text-slate-900"
                            }`}
                          >
                            {faq.q}
                          </h3>
                        </div>
                        <div
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180"
                              : "border-slate-200 text-slate-500 bg-slate-50"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                      <div
                        id={`east-point-faq-panel-${i}`}
                        aria-labelledby={`east-point-faq-button-${i}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 px-6 ${
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-slate-600 leading-relaxed font-medium pl-12 sm:pl-14 text-xs sm:text-sm">
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
      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                  Ready to Upgrade or Fix Your East Point Solar System?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Request a quick, no-obligation solar assessment from our local Darwin team today.
                </p>

                <div className="space-y-6">
                  <a
                    href={`tel:${PRIMARY_PHONE_RAW}`}
                    className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Call Our Team
                      </div>
                      <div className="text-base sm:text-lg font-black">{PRIMARY_PHONE}</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@oneroofsolar.com.au"
                    className="flex items-center gap-4 text-white hover:text-[#8cc63f] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8cc63f] border border-white/10 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Email Inquiry
                      </div>
                      <div className="text-base sm:text-lg font-black">info@oneroofsolar.com.au</div>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <QuoteForm
                title="Book Your Free East Point Consultation"
                defaultInterest="Residential Solar Panels"
                source="location_east_point"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight normal-case">
              Ready to Upgrade or Fix Your East Point Solar System?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Request a quick, no-obligation solar assessment from our local Darwin team today.
            </p>
            <a
              href="#quote-form"
              className="inline-block bg-[#8cc63f] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
            >
              Book Your Free East Point Consultation &rarr;
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default EastPointPage;
