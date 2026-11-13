import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Phone,
  Mail,
  ChevronDown,
  Star,
  Zap,
  Home,
  Building2,
  Tractor,
  ArrowRight,
  Shield,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { GoogleReviews } from "../components/GoogleReviews";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

const brands = [
  {
    name: "Fox ESS EV Chargers",
    slug: "foxess",
    text: "Fox ESS offers the widest range, from compact home units to dual-port commercial chargers. The A Series (7.3kW, 11kW, 22kW) comes in plug or socket versions with IP55/IK08 protection, OCPP 1.6J and 2.0.1 support, open Modbus and V2G hardware-readiness. The L and L Max Series are slim, tethered 7.3kW and 11kW chargers with solar linkage and scheduled charging. The C Series suits workplaces and car parks, with two ports, a display, a MID meter and QR code payment.",
    bestFor: "Homes wanting solar surplus charging, and businesses needing multi-port, metered charging.",
  },
  {
    name: "GoodWe EV Chargers",
    slug: "goodwe",
    text: "The GoodWe HCA Series (7kW single-phase, 11kW and 22kW three-phase) is a simple, solid choice for GoodWe inverter owners. It carries an IP66 rating, a 6m Type 2 cable and built-in 6mA DC residual current detection, and it runs very quietly. The SEMS app manages solar and charging together, and it connects to new and existing GoodWe inverter and Lynx Home battery systems.",
    bestFor: "Homes already running GoodWe solar or batteries.",
  },
  {
    name: "Sigenergy EV Chargers",
    slug: "sigenergy",
    text: "Sigenergy offers two options. The Sigen EVAC AC charger (7, 11 and 22kW) delivers PV surplus charging, battery boost with a cut-off SOC setting, phase switching, dynamic tariff scheduling and dynamic load management, in an IP65, IK10 enclosure. The Sigen EV DC Charging Module (12.5kW and 25kW) is a bi-directional CCS2 unit built for V2X, with IP66 protection.",
    bestFor: "Sigenergy battery owners and anyone wanting the smartest solar-to-EV control.",
  },
  {
    name: "Sungrow EV Chargers",
    slug: "sungrow",
    text: "The Sungrow AC22E-01 is a configurable 11kW or 22kW three-phase charger (7.4kW on single-phase) with an IP65, IK10 enclosure and 6mA DC fault detection. It includes adaptive load management, automatic phase switching, OTA updates, an optional MID meter, a 5m or 7m Type 2 cable and wall or stand-column mounting.",
    bestFor: "Sungrow solar and battery owners wanting flexible 11kW or 22kW charging.",
  },
  {
    name: "Tesla Wall Connector",
    slug: "tesla",
    text: "The Tesla Wall Connector is a wall-mounted home charger with a 7.3m cable, approved for indoor or outdoor use. It is installed by a licensed electrician, who sizes the circuit breaker to suit your power supply and vehicle. We confirm the model, charge rate and compatibility for your Tesla before quoting.",
    bestFor: "Tesla owners wanting a charger made for their vehicle.",
  },
];

const comparison = {
  headers: ["Brand / Model", "Power", "Phase", "Protection", "Standout feature"],
  rows: [
    ["Fox ESS A Series", "7.3 / 11 / 22 kW", "1 or 3", "IP55 / IK08", "V2G-ready, OCPP 1.6J and 2.0.1"],
    ["Fox ESS L Series", "7.3 / 11 kW", "1 or 3", "IP55 / IK08", "Slim tethered design, Wi-Fi and Bluetooth"],
    ["Fox ESS L Max Series", "7.3 / 11 kW", "1 or 3", "IP55 / IK08", "L Series plus Ethernet, OCPP, Modbus, RFID"],
    ["Fox ESS C Series", "2 x 7.3 / 11 / 22 kW", "1 or 3", "IP55 / IK10", "Dual-port, MID meter, QR payment"],
    ["GoodWe HCA", "7 / 11 / 22 kW", "1 or 3", "IP66", "SEMS app, quiet operation"],
    ["Sigenergy EVAC", "7 / 11 / 22 kW", "1 or 3", "IP65 / IK10", "PV surplus, battery boost, phase switching"],
    ["Sigenergy EV DC", "12.5 / 25 kW", "DC", "IP66", "Bi-directional V2X (vehicle dependent)"],
    ["Sungrow AC22E-01", "7.4 / 11 / 22 kW", "1 or 3", "IP65 / IK10", "Configurable output, adaptive load management"],
    ["Tesla Wall Connector", "Confirmed at quote", "Confirmed at quote", "Indoor / outdoor", "Made for Tesla vehicles"],
  ],
};

const segments = [
  {
    title: "Homes",
    icon: Home,
    text: "A single-phase 7kW charger suits daily overnight charging, while three-phase 11kW or 22kW units charge faster where your supply allows. Slim options like the Fox ESS L Series and GoodWe HCA suit garages and carports. Pair one with our residential solar systems to charge from your own roof.",
    href: "/solar-systems/residential-solar-system",
  },
  {
    title: "Businesses",
    icon: Building2,
    text: "Workplaces, car parks and fleets need metering, access control and multiple ports. Dual-port chargers like the Fox ESS C Series add an integrated MID meter, RFID or NFC access and QR code payment. Ask about our commercial solar systems for fleet charging.",
    href: "/solar-systems/commercial-solar-system",
  },
  {
    title: "Rural properties",
    icon: Tractor,
    text: "Long cable runs and single-phase supply are common across Darwin rural areas. We assess your supply and switchboard, then recommend a charger with load management so charging never overloads it. Our off-grid solar systems can power charging away from the grid.",
    href: "/solar-systems/off-grid-solar-system",
  },
];

const whyPoints = [
  "15 years of experience installing solar systems and energy products across Darwin and the NT.",
  "A local Berrimah-based team handling your EV charger installation and future repairs.",
  "SAA-accredited, licensed electricians carrying out every installation without subcontracting.",
  "Australian safety compliance, including correct switchboard protection devices and RCCB requirements.",
  "Certified hardware carrying CE, CB, UKCA and RCM certifications.",
  "New Energy Tech Approved Seller, with clear quotes, transparent pricing and after-sales support.",
  "Solar-powered driving using daytime surplus energy, paired with solar and battery storage.",
  "Smart load management that balances EV charging with your household electricity use.",
];

const faqs = [
  {
    q: "How much does it cost to install an EV charger at home in Darwin?",
    a: "The price depends on the charger you choose, your switchboard, the cable run from the board to where the charger will mount, and whether your property is single or three-phase. We give you a clear written quote after a site assessment, so you see the full cost before you commit.",
  },
  {
    q: "How long does it take to charge an electric car at home?",
    a: "It depends on your battery size and charger power. As a rough guide, a 60kWh battery charging from empty takes around 8 to 9 hours on a 7kW charger and about 5 to 6 hours on 11kW, if your car accepts that rate. Most owners top up overnight rather than charging from empty.",
  },
  {
    q: "Can I just plug my EV into a normal power point?",
    a: "You can on a standard outlet, but it is very slow and puts a continuous load on the circuit. A dedicated wall charger is faster and safer, and it adds smart features like scheduling and solar surplus charging.",
  },
  {
    q: "Will I need to upgrade my switchboard to install a charger?",
    a: "Not always. We check your switchboard's spare capacity and your phase supply first. Where capacity is tight, load management can keep charging within your supply, and we tell you upfront if any upgrade is needed.",
  },
  {
    q: "Will a charger from these brands work with any electric car?",
    a: "Most EVs sold in Australia use a Type 2 connector for AC charging, which all the chargers we supply are designed for. We still check your vehicle's make, model and maximum AC charge rate before recommending a charger.",
  },
  {
    q: "Can I charge my EV at night using my solar power?",
    a: "Solar panels only generate by day, so night charging needs either grid power or stored energy from a battery. Many owners schedule charging for cheaper off-peak hours, or add a home battery to charge from stored solar.",
  },
  {
    q: "Can I charge my EV during a blackout?",
    a: "Only if your home has a battery backup system sized to cover the charger's load. A charger on its own needs grid power to work. Tell us what you want to keep running in a blackout and we will design for it.",
  },
  {
    q: "Can I install an EV charger if I rent or live in a unit?",
    a: "You will need written permission from your landlord, or approval from the body corporate for shared parking and meters. Once you have approval, we can assess the site and quote the installation.",
  },
];

export function EvChargerBrands() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "EV Charger Brands Darwin | Fox ESS, GoodWe, Sigenergy, Sungrow, Tesla | Oneroof Solar",
    metaDescription:
      "Explore reliable EV charger installation in Darwin with Oneroof Solar. Choose from leading brands, enjoy solar-smart charging and get a free quote from SAA-accredited electricians.",
    canonicalUrl: "https://oneroofsolar.com.au/products/ev-charger-brands",
    robots: "index, follow",
    openGraphTitle: "EV Charger Brands We Install in Darwin and the NT | Oneroof Solar",
    openGraphDescription:
      "Fast, solar-ready home and commercial EV chargers from five trusted brands, installed by SAA accredited electricians across Darwin and the NT.",
    twitterTitle: "EV Charger Brands We Install in Darwin and the NT | Oneroof Solar",
    twitterDescription:
      "Fast, solar-ready home and commercial EV chargers from five trusted brands, installed by SAA accredited electricians.",
  };

  const schemas = [
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
        { "@type": "ListItem", position: 2, name: "Products", item: "https://oneroofsolar.com.au/products/ev-charger-brands" },
        {
          "@type": "ListItem",
          position: 3,
          name: "EV Charger Brands",
          item: "https://oneroofsolar.com.au/products/ev-charger-brands",
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
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#8cc63f] transition-colors">
                  Home
                </a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-slate-400">Products</span>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">EV Charger Brands</span>
              </nav>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                EV Charger Brands We Install in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                  Darwin &amp; the NT
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Fast, solar-ready home and commercial EV chargers from five trusted brands, installed by SAA
                accredited electricians who understand Top End heat, humidity and wet season storms.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get a Free Quote</a>
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
                {["SAA Accredited", "New Energy Tech Approved Seller", "4.9/5 from 130 reviews", "Response within 2 business hours"].map(
                  (chip) => (
                    <div key={chip} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-semibold">
                      <Check className="w-4 h-4 text-[#8cc63f] shrink-0" />
                      {chip}
                    </div>
                  ),
                )}
              </div>
            </FadeIn>

            <FadeIn isHero delay={0.2} className="relative">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img
                  fetchPriority="high"
                  src="/assets/images/hosted/products/ev-charger.webp"
                  alt="EV charger brands installed across Darwin and the NT by Oneroof Solar"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#8cc63f] leading-none">
                    4.9 <Star className="w-4 h-4 fill-[#8cc63f]" />
                  </div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">130 Reviews</div>
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
              EV Chargers Designed for Darwin Homes and Businesses
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                The right EV charger should suit your vehicle, switchboard, solar system and local climate. Oneroof
                Solar supplies leading brands and handles everything from site assessment to professional{" "}
                <Link to="/services/ev-chargers/installation" className="text-[#8cc63f] font-semibold hover:underline">
                  EV charger installation
                </Link>
                .
              </p>
              <p>
                Darwin's heat, humidity and wet season also matter. We select chargers with suitable weather and
                impact protection, including IP65-rated models and above, and install them in suitable locations to
                reduce heat exposure. Not sure which suits you? Our team compares single-phase and three-phase
                options, charging speed, app control and solar surplus charging against your power supply and daily
                driving, then quotes the best fit.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brand cards */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Our EV Charger Brands
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Five trusted brands, each with its own strengths. Explore any brand for models, specs and the right
                fit for your home or business.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((b, i) => (
              <FadeIn
                key={b.slug}
                delay={Math.min(0.05 * i, 0.25)}
                className="group bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">{b.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{b.text}</p>
                <p className="text-slate-500 text-sm mb-6">
                  <span className="font-bold text-slate-700">Best for:</span> {b.bestFor}
                </p>
                <Link
                  to={`/products/ev-charger-brands/${b.slug}`}
                  className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
                >
                  View {b.name.replace(" EV Chargers", "").replace(" Wall Connector", "")} <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 normal-case">
              EV Charger Brand Comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#0A1118] text-white">
                    {comparison.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 font-bold whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3 align-top border-t border-slate-100 ${
                            ci === 0 ? "font-bold text-slate-900 whitespace-nowrap" : "text-slate-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Segments */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                EV Chargers for Homes, Businesses and Rural Properties
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segments.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn
                  key={s.title}
                  delay={0.1 * (i + 1)}
                  className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-[#8cc63f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">{s.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-1 mb-6">{s.text}</p>
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-2 text-[#8cc63f] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
              Why Choose Us for EV Charger Installation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-3xl">
              Future-proof your driveway with smart charging that grows with your needs.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {whyPoints.map((point, i) => (
              <FadeIn key={point} delay={Math.min(i * 0.03, 0.3)} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{point}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pair with solar */}
      <section className="py-14 bg-[#0A1118] relative border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/15 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                  Pair Your EV Charger with Solar and Battery Storage
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                  A charger paired with a solar system can run on daytime surplus power instead of grid electricity.
                  Add a home battery through our{" "}
                  <Link to="/services/solar-battery-installation" className="text-[#8cc63f] font-semibold hover:underline">
                    solar battery installation
                  </Link>{" "}
                  service and you can charge overnight from stored solar. Compare{" "}
                  <Link to="/products/solar-battery-brands" className="text-[#8cc63f] font-semibold hover:underline">
                    solar battery brands
                  </Link>{" "}
                  that match your charger.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviews />

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                  EV Charger FAQs for Darwin
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">
                  Common questions about choosing and installing an EV charger in Darwin and the NT.
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
                        aria-controls={`ev-brands-faq-panel-${i}`}
                        id={`ev-brands-faq-button-${i}`}
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
                        id={`ev-brands-faq-panel-${i}`}
                        aria-labelledby={`ev-brands-faq-button-${i}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 px-6 ${
                          isOpen ? "max-h-[30rem] pb-6 opacity-100" : "max-h-0 opacity-0"
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
                  Ready to Charge at Home?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Book your EV charger installation with Darwin's SAA accredited team. We check your switchboard,
                  compare the brands and quote the best fit for your home or business.
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
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Our Team</div>
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
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</div>
                      <div className="text-base sm:text-lg font-black">info@oneroofsolar.com.au</div>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <QuoteForm
                title="Get Your Free EV Charger Quote"
                defaultInterest="EV Charger Installation"
                source="ev_charger_brands"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EvChargerBrands;
