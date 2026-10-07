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
  Thermometer,
  Smartphone,
  Compass,
  ClipboardCheck,
  Wrench,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { GoogleReviews } from "../components/GoogleReviews";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

const specs: [string, string][] = [
  ["Model", "AlphaESS SMILE-G3-BAT-9.3S"],
  ["Usable Capacity", "9.3 kWh (100% Depth of Discharge)"],
  ["Battery Chemistry", "Lithium Iron Phosphate (LiFePO4 / LFP)"],
  ["Operating Voltage Range", "90V – 105.6V"],
  ["Max Charge / Discharge Current", "52.5 A"],
  ["Ingress Protection Rating", "IP65 (Suitable for Outdoor & Indoor Installation)"],
  ["Operating Temperature Range", "-20°C to 50°C"],
  ["System Expansion", "Modular scaling from 9.3 kWh up to 111.6 kWh"],
  ["Communication", "CAN Bus / AlphaCloud Smart App Monitoring"],
  ["Safety Certifications", "IEC 62619, IEC 62040, IEC 61000, UN38.3"],
  ["Warranty", "10-Year Performance Warranty"],
];

export function AlphaEssBatteryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Alpha ESS Battery Darwin & NT | One Roof Solar",
    metaDescription:
      "Alpha ESS battery storage for Darwin, Palmerston & NT homes and businesses. Store more solar energy, get blackout protection, and claim rebates. Get a quote.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-battery-brands/alpha-ess",
    robots: "index, follow",
    openGraphTitle: "Alpha ESS Battery Darwin & NT | One Roof Solar",
    openGraphDescription:
      "Alpha ESS battery storage for Darwin, Palmerston & NT homes and businesses. Store more solar energy, get blackout protection, and claim rebates. Get a quote.",
    twitterTitle: "Alpha ESS Battery Darwin & NT | One Roof Solar",
    twitterDescription:
      "Alpha ESS battery storage for Darwin, Palmerston & NT homes and businesses. Store more solar energy, get blackout protection, and claim rebates. Get a quote.",
  };

  const faqs = [
    {
      q: "How much energy can the AlphaESS SMILE-G3-BAT-9.3S store?",
      a: "The AlphaESS SMILE-G3-BAT-9.3S has a rated usable capacity of 9.3 kWh at 100% Depth of Discharge (DoD). You can add multiple battery modules to increase total energy storage up to 111.6 kWh.",
    },
    {
      q: "What type of battery chemistry does the AlphaESS SMILE-G3-BAT-9.3S use?",
      a: "It uses Lithium Iron Phosphate (LiFePO4 / LFP) technology. LFP chemistry is globally recognized for high thermal stability, superior safety, non-toxic components, and extended cycle life.",
    },
    {
      q: "How long does an AlphaESS battery last, and what is the warranty?",
      a: "The SMILE-G3-BAT-9.3S comes backed by a 10-year manufacturer performance warranty, guaranteeing reliable long-term performance under Australian operating conditions.",
    },
    {
      q: "Can I add an AlphaESS battery to my existing solar system?",
      a: "Yes. The system can be retrofitted to existing solar power setups using a compatible hybrid or AC-coupled inverter. We check compatibility as part of your inverter installation and quote.",
    },
    {
      q: "Is the AlphaESS battery suitable for outdoor installation in Darwin heat?",
      a: "Yes. The unit features an IP65 protection rating (dustproof and water-jet resistant) and is rated to operate safely between -20°C and 50°C, making it suitable for both outdoor and garage installations across Darwin.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "AlphaESS SMILE-G3-BAT-9.3S Battery System",
      brand: { "@type": "Brand", name: "Alpha ESS" },
      manufacturer: { "@type": "Organization", name: "Alpha ESS" },
      image: "/assets/images/hosted/products/alpha-ess.webp",
      category: "Home Battery Storage",
      description:
        "SAA Accredited Alpha ESS SMILE-G3-BAT-9.3S LFP battery storage with 9.3 kWh usable capacity (100% DoD), IP65 weatherproofing, EPS blackout backup and modular scaling up to 111.6 kWh. Supplied and installed across Darwin, Palmerston and the wider Northern Territory.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://oneroofsolar.com.au/products/solar-battery-brands/alpha-ess#faq",
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
          name: "Alpha ESS Battery Systems",
          item: "https://oneroofsolar.com.au/products/solar-battery-brands/alpha-ess",
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
      url: "https://oneroofsolar.com.au/products/solar-battery-brands/alpha-ess",
      areaServed: [
        { "@type": "Place", name: "Darwin" },
        { "@type": "Place", name: "Palmerston" },
        { "@type": "Place", name: "Berrimah" },
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
                <span className="text-[#8cc63f]" aria-current="page">Alpha ESS</span>
              </nav>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8cc63f]" /> SAA Accredited Battery Installers
              </span>

              <h1 className="hero-heading text-white mb-6 break-words normal-case">
                ALPHA ESS Home Battery System in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Darwin, NT</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Store your excess solar energy, protect your home from NT blackouts, and cut your power bills with certified Alpha ESS battery storage solutions across Darwin, Palmerston, Berrimah, and the Northern Territory.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get Alpha ESS Battery Quote</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-white border-white/20 bg-white/5 font-bold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all h-14 hover:-translate-y-1 uppercase tracking-wider text-xs"
                  asChild
                >
                  <Link to="/contact">Check Rebate Eligibility</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                {["4.9/5 · 150+ installs", "9.3 kWh · 100% DoD", "IP65 weatherproof", "10 year warranty"].map((chip) => (
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
                  src="/assets/images/hosted/products/alpha-ess.webp"
                  alt="Alpha ESS SMILE-G3 home battery system installed in Darwin, NT"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] drop-shadow-2xl"
                />
                <div className="absolute top-6 right-6 bg-[#0A1118]/95 backdrop-blur-md border border-[#8cc63f]/30 px-5 py-3 rounded-2xl z-20 shadow-lg text-center">
                  <div className="text-2xl font-black text-[#8cc63f] leading-none">9.3</div>
                  <div className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-1">kWh usable</div>
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
              What Is an Alpha ESS Battery?
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-5">
              <p>
                An Alpha ESS Battery stores excess solar energy generated by your{" "}
                <Link to="/solar-panels-darwin" className={linkClass}>solar panel system</Link> during the day for use at night or during grid outages. By storing your own clean power, you increase your energy self-consumption and protect your household or business against rising power tariffs.
              </p>
              <p>
                Equipped with smart energy management and real-time monitoring via the AlphaCloud mobile app, Alpha ESS systems offer an intelligent way to manage power consumption. As SAA-accredited installers based in Darwin, One Roof Solar supplies, installs, and services Alpha ESS battery storage systems tailored specifically to Northern Territory weather conditions. See our full{" "}
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
                <CircleDollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight normal-case">
                Feeding Your Solar Back to the Grid for Peanuts While Power Bills Stay Through the Roof?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Stop letting energy companies profit off your hard-generated power. Store your energy, protect your home against blackouts, and take full control of your electricity bills.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Calculate My Solar Savings Now
                </a>
                <Link to="/contact" className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Claim Your Free Battery Assessment
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                AlphaESS SMILE-G3-BAT-9.3S Technical Specifications
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                For fast comparison, here are the key technical specifications for the AlphaESS SMILE-G3-BAT-9.3S system.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#0A1118] text-white">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Feature / Specification</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Technical Details</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(([feature, detail], i) => (
                    <tr key={feature} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-t border-slate-200`}>
                      <td className="px-6 py-4 font-black text-slate-900">{feature}</td>
                      <td className="px-6 py-4 text-slate-600 font-medium">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* KEY FEATURES & BENEFITS */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Key Features &amp; Benefits of the AlphaESS Battery
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Battery, title: "100% usable capacity (9.3 kWh)", text: "Unlike older battery technologies that restrict usage to 80% to protect battery health, the SMILE-G3-BAT-9.3S allows full 100% Depth of Discharge (DoD) without compromising lifespan." },
              { icon: Layers, title: "Expandable modular design", text: "Start with a single 9.3 kWh module and stack compatible units up to 111.6 kWh as your household or commercial energy needs expand." },
              { icon: Thermometer, title: "Built for demanding NT conditions", text: "Featuring IP65 water and dust protection and an active operating range of -20°C to 50°C, the battery is engineered to handle extreme Darwin heat and humidity." },
              { icon: ShieldCheck, title: "Advanced LFP battery chemistry", text: "Lithium Iron Phosphate (LiFePO4) chemistry offers superior thermal stability, explosion-proof valving, aerosol safety systems, and a long operational service life." },
              {
                icon: Cpu,
                title: "Compatible with AlphaESS inverters",
                node: (
                  <>
                    Seamlessly integrates with{" "}
                    <Link to="/products/solar-inverters/alpha-ess" className={linkClass}>AlphaESS SMILE-G3 hybrid inverters</Link> (including G3-S3.6/S5/B5 and G3-T4/T5/T6/T8/T10 units).
                  </>
                ),
              },
              { icon: Smartphone, title: "Smart AlphaCloud monitoring", text: "Track generation, storage, and consumption in real time from the AlphaCloud mobile app, so you always know how your system is performing." },
            ].map((item) => (
              <FadeIn key={item.title} className="bg-white border border-slate-200 rounded-[2rem] p-7 h-full shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight normal-case">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.node ?? item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BLACKOUT & EPS */}
      <section className="py-24 bg-[#0A1118] relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-4 normal-case max-w-3xl">
              Reliable Backup Power During NT Storms &amp; Blackouts
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-3xl">
              When tropical storms or severe weather hit Darwin and the Top End, grid outages are common. The AlphaESS SMILE-G3 battery system provides peace of mind with continuous Emergency Power Supply (EPS) backup capabilities.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Essential circuits protection", text: "Keep vital appliances running during a blackout—including your refrigerator, lights, ceiling fans, Wi-Fi router, and essential home medical equipment." },
              { icon: ShieldCheck, title: "Automatic grid failover", text: "The system detects grid loss and switches to stored battery power seamlessly, keeping your home powered even when the rest of the street goes dark." },
              { icon: Sun, title: "Solar-recharged backup", text: "If the blackout lasts multiple days, your rooftop solar panels continue recharging your battery during daylight hours, providing sustainable off-grid security." },
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

      {/* GOVERNMENT INCENTIVES & REBATES */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Save More With Government Battery Incentives
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Upfront investment is a key factor when upgrading to home solar storage. Depending on available federal and Territory energy schemes—such as the Cheaper Home Batteries Program and STC incentives—eligible Darwin and NT homeowners can significantly offset installation costs.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ClipboardCheck, step: "1", title: "Free eligibility check", text: "We evaluate your current solar setup, home energy usage pattern, and property eligibility." },
              { icon: CircleDollarSign, step: "2", title: "Upfront discount calculation", text: "We apply eligible rebate discounts directly to your proposal so you see your clear out-of-pocket costs upfront—with zero hidden surprises." },
              { icon: Wrench, step: "3", title: "Full system integration", text: "Our SAA-accredited technicians install, test, and commission your battery to meet strict Australian Standards and NT grid requirements." },
            ].map((card) => (
              <FadeIn key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">{card.step}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight normal-case">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{card.text}</p>
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
                Tired of Sudden NT Blackouts Leaving You in the Dark?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Don't get caught unprotected when tropical storms knock out the grid. Secure reliable backup power for your family today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Check If Your Home Is Eligible
                </Link>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Speak to a Darwin Solar Specialist
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHO THIS SYSTEM SUITS */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Who Should Install the AlphaESS SMILE-G3 Battery?
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.08} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Darwin Homeowners &amp; Families</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you want to reduce night-time electricity charges and keep your air conditioning or essential household appliances running on clean solar power, the 9.3 kWh capacity provides an optimal energy balance for everyday homes.
              </p>
            </FadeIn>
            <FadeIn delay={0.12} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Commercial Properties &amp; Local Businesses</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Businesses operating in Berrimah, Palmerston, or Darwin with higher energy requirements can scale storage capacity up to 111.6 kWh. Explore our range of tailored{" "}
                <Link to="/solar-systems/commercial-solar-system" className={linkClass}>commercial solar systems</Link> for complete commercial energy setups.
              </p>
            </FadeIn>
            <FadeIn delay={0.16} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight normal-case">Off-Grid &amp; Semi-Rural NT Properties</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For remote or off-grid properties across the Northern Territory, scalable battery storage provides essential energy self-reliance when grid access is unavailable or unreliable. Pair your storage with our{" "}
                <Link to="/solar-systems/off-grid-solar-system" className={linkClass}>off-grid solar systems</Link> for an independent power network.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <GoogleReviews />

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-3 normal-case">
                Frequently Asked Questions About AlphaESS Batteries
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Capacity, LFP chemistry, warranty, retrofits, and Darwin outdoor installs.
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
                Ready to Take Control of Your Energy &amp; Cut Your Power Bills?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Secure your AlphaESS battery storage system, claim available government battery rebates, and protect your NT property against outages.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#quote-form" className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5">
                  Get My Free Battery Quote
                </a>
                <a href={`tel:${PRIMARY_PHONE_RAW}`} className="inline-block border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
                  Chat with an NT Solar Specialist
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
                  Get Your Alpha ESS Battery Quote
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  Tell us about your property and we'll size the right Alpha ESS SMILE-G3 battery to your usage, with any STC or Cheaper Home Batteries Program discount applied upfront, no surprises later.
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
              <QuoteForm title="Get My Free Quote" defaultInterest="Alpha ESS Battery" source="alpha_ess_battery" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AlphaEssBatteryPage;
