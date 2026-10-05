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
    text: "Bayview homes vary widely in size and layout, from waterfront townhouses to larger family properties, so we design each system around your household’s real energy use rather than a standard package. Every install includes cyclone rated mounting, built to hold firm through wet season weather.",
  },
  {
    title: "Commercial Solar",
    href: "/solar-systems/commercial-solar-system",
    icon: Building2,
    text: "Bayview’s marina precinct and surrounding streets include offices and small commercial premises alongside residential homes. We build systems around your business’s actual trading hours and power draw, helping cut overheads without disrupting how you operate.",
  },
  {
    title: "Off-Grid and Backup Solar",
    href: "/solar-systems/off-grid-solar-system",
    icon: Zap,
    text: "Larger properties or those wanting independence from grid reliability can benefit from an off-grid or battery-backed setup. These systems are built to keep performing through the wet season, when outages and instability are most likely.",
  },
];

const relatedServices = [
  {
    title: "Solar Inverter Installation",
    href: "/services/solar-inverters/installation",
    icon: Cpu,
    text: "Darwin’s humidity and heat put real strain on inverters, often more than any other part of the system. We fit units rated IP65 and IP66 for dust and moisture resistance, matched correctly to your property’s size and power demand, whether that’s a home or a small business.",
  },
  {
    title: "Solar Inverter Repair",
    href: "/services/solar-inverters/repair",
    icon: Wrench,
    text: "A struggling inverter in Bayview is usually down to heat exposure or moisture finding its way into an ageing seal. Our team runs proper diagnostics on-site across all brands and models, rather than swapping parts on guesswork, so you get a fix that actually addresses the fault.",
  },
  {
    title: "Solar Battery Installation",
    href: "/services/solar-battery-installation",
    icon: BatteryCharging,
    text: "Battery systems fitted with MPPT charge controllers keep your solar output steady even during overcast wet season stretches. For homes that want backup power through storm season, this adds real peace of mind. Eligible installs can also access a Cheaper Home Batteries Program discount, worked into your quote upfront.",
  },
  {
    title: "EV Charger Installation",
    href: "/services/ev-chargers/installation",
    icon: Zap,
    text: "EV ownership is growing across Bayview, and pairing a charger with your solar setup means charging your car at a fraction of grid rates. We install chargers for homes and businesses alike, configured to work alongside your existing system.",
  },
  {
    title: "EV Charger Repair",
    href: "/services/ev-chargers/repair",
    icon: Wrench,
    text: "A faulty EV charger doesn’t need to mean a long wait on hold with an interstate provider. Our local team diagnoses and repairs chargers on-site, getting you back to charging without the runaround.",
  },
];

const solarOutputData = [
  { month: "Jan", season: "Wet Season", sunHours: 5.2, output: 780, performance: "Good (Cloud Cover Protection)", level: "good" },
  { month: "Feb", season: "Wet Season", sunHours: 5.0, output: 710, performance: "Good", level: "good" },
  { month: "Mar", season: "Late Wet", sunHours: 5.8, output: 860, performance: "High", level: "high" },
  { month: "Apr", season: "Transition", sunHours: 7.5, output: 1020, performance: "Peak Generation", level: "peak" },
  { month: "May", season: "Dry Season", sunHours: 8.2, output: 1080, performance: "Peak Generation", level: "peak" },
  { month: "Jun", season: "Dry Season", sunHours: 8.5, output: 1090, performance: "Maximum Efficiency", level: "peak" },
  { month: "Jul", season: "Dry Season", sunHours: 8.8, output: 1130, performance: "Maximum Efficiency", level: "peak" },
  { month: "Aug", season: "Dry Season", sunHours: 8.6, output: 1120, performance: "Peak Generation", level: "peak" },
  { month: "Sep", season: "Dry Season", sunHours: 8.1, output: 1050, performance: "Peak Generation", level: "peak" },
  { month: "Oct", season: "The Build-Up", sunHours: 7.8, output: 1020, performance: "High", level: "high" },
  { month: "Nov", season: "Early Wet", sunHours: 6.8, output: 920, performance: "Strong", level: "high" },
  { month: "Dec", season: "Wet Season", sunHours: 5.8, output: 850, performance: "Good", level: "good" },
];

const whyPoints = [
  "Quick turnaround across Bayview from our Darwin-based team",
  "Repairs handled with the same urgency as new installs, on all brands and models",
  "Dedicated safety inspections available for older systems, separate from routine maintenance",
  "Maintenance plans available to keep your system performing long-term",
  "SAA Accredited Installers, fitting only SAA Approved and Certified Products",
  "Equipment rated for Darwin conditions: cyclone mounting, IP65/IP66 protection",
  "Federal STC Solar PV Grant built into your quote from the start",
  "Cheaper Home Batteries Program discount available on eligible battery installs",
  "Full handling of your Power and Water/Jacana Energy grid connection paperwork",
  "Backed by a 4.9 star rating across 128 genuine local reviews",
];

const faqs = [
  {
    q: "How much can a Bayview homeowner save with solar?",
    a: "Savings depend on your system size and household usage, but with over 6 peak sun hours a day in Bayview, most homes see a noticeable drop in their power bills. We give you exact savings figures with a free, no-obligation quote.",
  },
  {
    q: "Are solar installations built to resist saltwater corrosion near the marina?",
    a: "Yes. Bayview’s waterfront and marina-side properties face salt-laden coastal air, so we use corrosion-resistant, marine-grade mounting hardware and anodised aluminium framing rated for coastal environments to prevent premature wear and rust.",
  },
  {
    q: "Can solar panels on Bayview homes handle Darwin’s wet season storms?",
    a: "Yes. Every installation uses cyclone rated mounting compliant with C2 and C3 wind classifications, engineered to stay secure through extreme wet season winds and heavy tropical downpours.",
  },
  {
    q: "Can a Bayview solar system be upgraded with a battery later?",
    a: "Yes. We install inverters that are battery-ready from day one, so you can add battery storage down the track without replacing your existing system.",
  },
  {
    q: "Will a battery keep my Bayview home running during wet season outages?",
    a: "Yes. Pairing your solar with a battery fitted with MPPT charge controllers gives you reliable backup power during storm-related outages. Eligible installs can also access the Cheaper Home Batteries Program discount, applied upfront.",
  },
  {
    q: "How does grid connection with Power and Water/Jacana Energy work?",
    a: "We manage the entire application and compliance process on your behalf, ensuring your system fully meets AS 4777 grid standards so your connection is approved smoothly with zero hassle for you.",
  },
  {
    q: "Is the Federal STC discount included in my quote upfront?",
    a: "Yes. The Federal STC Solar PV Grant is applied directly to your quote as an upfront discount, not something you claim back later. Note the old NT Government local rebate program is now closed.",
  },
  {
    q: "What’s a typical payback period for solar in Bayview?",
    a: "With Bayview’s strong sun exposure, many households see their system pay for itself within a few years, faster with higher self-consumption. Adding a battery can improve this further. We provide a realistic payback estimate as part of your free quote.",
  },
];

export function BayviewPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const darwinOffice = OFFICE_LOCATIONS[0];
  const maxOutput = Math.max(...solarOutputData.map((d) => d.output));

  const seoData = {
    title: "Bayview's Top Solar Installers & Repair Experts | Oneroof Solar",
    metaDescription:
      "4.9★ rated solar, inverter & EV charger service in Bayview NT. Cyclone-rated C2/C3 systems with Jacana paperwork handled. Free quote today!",
    canonicalUrl: "https://oneroofsolar.com.au/locations/bayview/",
    robots: "index, follow",
    openGraphTitle: "Bayview's Top Solar Installers & Repair Experts | Oneroof Solar",
    openGraphDescription:
      "4.9★ rated solar, inverter & EV charger service in Bayview NT. Cyclone-rated C2/C3 systems with Jacana paperwork handled. Free quote today!",
    twitterTitle: "Bayview's Top Solar Installers & Repair Experts | Oneroof Solar",
    twitterDescription:
      "4.9★ rated solar, inverter & EV charger service in Bayview NT. Cyclone-rated C2/C3 systems with Jacana paperwork handled. Free quote today!",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Solar Installation and Repair Bayview",
      provider: {
        "@type": "LocalBusiness",
        name: "Oneroof Solar",
        image: "/assets/images/home/logo-oneroof.png",
        telephone: PRIMARY_PHONE,
        email: "info@oneroofsolar.com.au",
        address: { "@type": "PostalAddress", streetAddress: "3/97 Pruen Rd", addressLocality: "Berrimah", addressRegion: "NT", postalCode: "0828", addressCountry: "AU" },
      },
      areaServed: [{ "@type": "AdministrativeArea", name: "Bayview" }, { "@type": "AdministrativeArea", name: "Darwin" }],
      description: "Solar panel installation, repair and maintenance for Bayview waterfront homes and businesses.",
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
        { "@type": "ListItem", position: 3, name: "Bayview", item: "https://oneroofsolar.com.au/locations/bayview/" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Oneroof Solar Bayview",
      image: "/assets/images/home/logo-oneroof.png",
      telephone: PRIMARY_PHONE,
      email: "info@oneroofsolar.com.au",
      address: { "@type": "PostalAddress", streetAddress: "3/97 Pruen Rd", addressLocality: "Berrimah", addressRegion: "NT", postalCode: "0828", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -12.4386, longitude: 130.9256 },
      url: "https://oneroofsolar.com.au/locations/bayview/",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "128" },
      serviceArea: [{ "@type": "Place", name: "Bayview" }, { "@type": "Place", name: "Darwin" }],
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
                <span className="text-[#8cc63f]" aria-current="page">Bayview</span>
              </nav>
              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                Solar Installation and Repair in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Bayview NT</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Trusted solar solutions for Bayview&apos;s waterfront homes and businesses, engineered to stand up to Darwin&apos;s tropical climate. More than a quarter of Bayview homes already run on solar, and with over 6 peak sun hours a day here, it&apos;s easy to see why.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs" asChild>
                  <a href="#quote-form">Request a Free Bayview Quote</a>
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
                <img fetchPriority="high" src="/assets/images/hosted/bayview-0820.webp" alt="Solar installation on a waterfront Bayview home near Darwin marina" className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]" />
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
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-center text-slate-900 mb-8 normal-case">Solar Panel Installation and Repair in Bayview</h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Bayview is one of Darwin&apos;s most desirable addresses, framed by the marina, Charles Darwin National Park, and Tiger Brennan Drive, and just a short drive from the CBD. This is a suburb of high-value homes and waterfront living, so your solar system needs to look as good as it performs.
              </p>
              <p>
                We fit every system with cyclone rated mounting engineered for Darwin&apos;s wet season, and every installation meets AS 4777 grid compliance standards. If your panels are underperforming or have failed outright, our repair team responds quickly across Bayview, and we work on all brands and models, not just the systems we install. Rather than a quick patch job, we identify what&apos;s actually gone wrong and resolve it properly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Residential / Commercial / Off-Grid */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn><h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">Solar Options for Bayview Homes and Businesses</h2></FadeIn>
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

      {/* Solar Output Chart */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-[#8cc63f]/10 text-[#8cc63f] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#8cc63f]/20">
                <Sun className="w-4 h-4" /> Average Monthly Solar Output
              </div>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">Average Monthly Solar Output in Bayview &amp; Darwin NT</h2>
              <p className="text-slate-600 text-sm sm:text-base">Based on a standard 6.6kW Solar System with average 6+ Peak Sun Hours per day.</p>
            </div>

            {/* Bar Chart */}
            <div className="bg-slate-50 rounded-[2rem] p-6 sm:p-8 border border-slate-200 mb-6">
              <div className="flex items-end justify-between gap-1 sm:gap-2 h-48 sm:h-64 mb-4">
                {solarOutputData.map((d) => {
                  const height = (d.output / maxOutput) * 100;
                  return (
                    <div key={d.month} className="flex flex-col items-center flex-1 h-full justify-end group">
                      <div className="text-[10px] sm:text-xs font-bold text-slate-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{d.output.toLocaleString()}</div>
                      <div
                        className={`w-full max-w-[3rem] rounded-t-lg transition-all duration-300 group-hover:opacity-90 ${
                          d.level === "peak" ? "bg-[#8cc63f]" : d.level === "high" ? "bg-[#8cc63f]/70" : "bg-[#8cc63f]/40"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                      <div className="text-[10px] sm:text-xs font-bold text-slate-500 mt-2">{d.month}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#8cc63f]" /> Peak / Maximum</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#8cc63f]/70" /> High / Strong</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#8cc63f]/40" /> Good</div>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-left font-bold text-slate-900 text-xs uppercase tracking-wider">Month</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-900 text-xs uppercase tracking-wider">Season</th>
                    <th className="px-4 py-3 text-right font-bold text-slate-900 text-xs uppercase tracking-wider">Sun Hours</th>
                    <th className="px-4 py-3 text-right font-bold text-slate-900 text-xs uppercase tracking-wider">Output (kWh)</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-900 text-xs uppercase tracking-wider hidden sm:table-cell">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {solarOutputData.map((d, i) => (
                    <tr key={d.month} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-4 py-3 font-bold text-slate-900">{d.month}</td>
                      <td className="px-4 py-3 text-slate-600">{d.season}</td>
                      <td className="px-4 py-3 text-right text-slate-600">{d.sunHours} hrs</td>
                      <td className="px-4 py-3 text-right font-bold text-slate-900">{d.output.toLocaleString()} kWh</td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                          d.level === "peak" ? "bg-[#8cc63f]/10 text-[#8cc63f]" : d.level === "high" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                        }`}>
                          <Zap className="w-3 h-3" /> {d.performance}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#8cc63f]/5 border border-[#8cc63f]/20 rounded-2xl p-6 text-center">
              <p className="text-slate-700 text-sm sm:text-base font-medium">
                <strong className="text-slate-900">Key Takeaway:</strong> Darwin gets over 2,300+ kWh of free solar power per year on average. Even during peak wet season months (Jan&ndash;Feb), high-efficiency panels with MPPT technology keep generating solid power through cloud cover.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">Solar Built for Bayview&apos;s Waterfront Lifestyle</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">Cyclone rated systems with the Federal STC discount already worked into your quote, no extra paperwork.</p>
              <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs">Get Your Bayview Quote &rarr;</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">Inverters, Batteries, and EV Chargers for Bayview</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">A solar system is more than just rooftop panels. Most Bayview households and businesses also rely on a properly rated inverter, and many are now adding battery storage or EV charging into the mix. We look after the entire setup, start to finish.</p>
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

      {/* Repair CTA */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">Inverter Tripping or Solar Output Dropping in Bayview?</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">Don&apos;t let heat or humidity ruin your energy savings. Our local SAA-certified team diagnoses and fixes all major brands fast.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs">Book a Bayview System Check</a>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:-translate-y-0.5 uppercase tracking-wider text-xs">Call {PRIMARY_PHONE}</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case">Why Bayview Chooses Oneroof Solar</h2>
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
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 normal-case">Built for Bayview&apos;s Waterfront Conditions</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Marine-grade mounting, corrosion-resistant hardware, and IP65/IP66 rated equipment designed for salt-laden coastal air and tropical storms.</p>
                <div className="flex items-center gap-3 text-slate-900 font-bold"><Sun className="w-5 h-5 text-[#8cc63f]" />6+ Peak Sun Hours Daily</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">Servicing Bayview</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">We&apos;re a short drive from Bayview&apos;s marina precinct, Gardens Golf Course, and the edge of Charles Darwin National Park, with easy access via Tiger Brennan Drive. Wherever you are in the suburb, our team can reach you quickly.</p>
              <div className="flex items-start gap-3 text-slate-700 font-medium"><MapPin className="w-5 h-5 text-[#8cc63f] shrink-0 mt-0.5" /><span>{darwinOffice.address}</span></div>
            </FadeIn>
            <FadeIn delay={0.15}><LocationMapCard location={darwinOffice} /></FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky-below-header">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">Frequently Asked Questions</h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">Common questions about solar installation and repair for Bayview waterfront properties.</p>
                <a href="#quote-form"><Button className="rounded-xl shadow-lg hover:-translate-y-1 transition-all h-14 px-8 font-bold bg-[#8cc63f] text-[#19281D] hover:bg-brand-400 border-none uppercase tracking-wider text-xs">Get a Free Quote</Button></a>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={faq.q} delay={i * 0.05}>
                    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md border-brand-500/50" : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"}`}>
                      <button onClick={() => setOpenFaqIndex(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`bayview-faq-panel-${i}`} id={`bayview-faq-button-${i}`} className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4">
                        <div className="flex items-start sm:items-center gap-4">
                          <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${isOpen ? "bg-[#8cc63f] text-[#19281D] shadow-md shadow-[#8cc63f]/20" : "bg-slate-50 text-slate-500 border border-slate-200"}`}>0{i + 1}</div>
                          <h3 className={`text-sm sm:text-base font-bold leading-tight transition-colors ${isOpen ? "text-[#8cc63f]" : "text-slate-900"}`}>{faq.q}</h3>
                        </div>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "border-[#8cc63f] bg-[#8cc63f]/10 text-[#8cc63f] rotate-180" : "border-slate-200 text-slate-500 bg-slate-50"}`}><ChevronDown className="w-4 h-4" /></div>
                      </button>
                      <div id={`bayview-faq-panel-${i}`} aria-labelledby={`bayview-faq-button-${i}`} role="region" className={`overflow-hidden transition-all duration-500 px-6 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
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
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">Ready to Slash Your Bayview Power Bills?</h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">Upfront STC discounts applied directly to your quote with complete Jacana Energy paperwork handled for you.</p>
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
            <FadeIn delay={0.2}><QuoteForm title="Claim Your Free Bayview Solar Assessment Today" defaultInterest="Residential Solar Panels" source="location_bayview" /></FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0A1118] text-center relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight normal-case">Ready to Slash Your Bayview Power Bills?</h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Upfront STC discounts applied directly to your quote with complete Jacana Energy paperwork handled for you.</p>
            <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-10 py-5 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs">Claim Your Free Bayview Solar Assessment Today &rarr;</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default BayviewPage;
