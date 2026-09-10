import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Sun,
  Smartphone,
  Shield,
  Home,
  Building2,
  Compass,
  ChevronDown,
  FileDown,
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { SEO } from "../components/SEO";
import { QuoteForm } from "../components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import heroImg from "../assets/images/sigen_battery_hero.webp";
import alphaEssImg from "../assets/images/alpha_ess_battery_product.webp";

const linkClass = "text-[#8cc63f] hover:underline font-bold";

const brands = [
  {
    title: "Sigenergy",
    description:
      "A smart, whole-home battery system that's great if you want a battery that manages your power use intelligently, not just stores it. Suits homes wanting blackout backup, EV charging integration, and room to expand later.",
    image: "https://i.postimg.cc/qMznYkKw/Sigen-Battery-8-k-Wh-with-LED-removebg-preview.png",
    specLabel: "Download Sigenergy Spec Sheet (PDF)",
    specHref: "/products/solar-battery-brands/sigenergy",
  },
  {
    title: "Sungrow",
    description:
      "A reliable, well supported battery that's easy to stack and expand over time. A solid choice if you want a system backed by strong local technical support and the option to grow your storage down the track.",
    image: "https://i.postimg.cc/6qnsnGMk/6383980259759580924379243-1-removebg-preview.png",
    specLabel: "Download Sungrow Spec Sheet (PDF)",
    specHref: "/products/solar-inverters/sungrow-inverters",
  },
  {
    title: "GoodWe",
    description:
      "One of the best value batteries on the market, with dependable hardware and straightforward software. A smart pick if you want strong performance without paying premium prices.",
    image: "https://www.goodwe.com.au/Public/Uploads/uploadfile4/images/20251014/ESA3-10KAll-in-oneSystem-1-495.png",
    specLabel: "Download GoodWe Spec Sheet (PDF)",
    specHref: "/products/solar-inverters/goodwe",
  },
  {
    title: "Fox ESS",
    description:
      "The budget friendly option in our range. It won't have every premium feature, but for homeowners who want solid battery storage without the higher price tag, it does the job well.",
    image: "https://solarjuice.com.au/wp-content/uploads/2026/05/ECS.1-406.png",
    specLabel: "Download Fox ESS Spec Sheet (PDF)",
    specHref: "/products/solar-inverters/fox-ess",
  },
  {
    title: "Alpha ESS",
    description:
      "An affordable entry point into battery storage, particularly well suited to smaller systems. A good fit if you're after basic backup and self-use without a big upfront spend.",
    image: alphaEssImg,
    specLabel: "Download Alpha ESS Spec Sheet (PDF)",
    specHref: "/products/solar-inverters/alpha-ess",
  },
];

export function SolarBatteryBrands() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Solar Battery Brands Darwin NT | Oneroof Solar",
    metaDescription:
      "SAA approved solar batteries for Darwin homes & businesses. Alpha ESS, Fox ESS, GoodWe, Sigenergy, Sungrow. Free quote today.",
    canonicalUrl: "https://oneroofsolar.com.au/products/solar-battery-brands/",
    robots: "index, follow",
    openGraphTitle: "Solar Battery Brands Darwin NT | Oneroof Solar",
    openGraphDescription:
      "SAA approved solar batteries for Darwin homes & businesses. Alpha ESS, Fox ESS, GoodWe, Sigenergy, Sungrow. Free quote today.",
    twitterTitle: "Solar Battery Brands Darwin NT | Oneroof Solar",
    twitterDescription:
      "SAA approved solar batteries for Darwin homes & businesses. Alpha ESS, Fox ESS, GoodWe, Sigenergy, Sungrow. Free quote today.",
  };

  const faqs = [
    {
      q: "Which solar battery brand is best for Darwin's climate?",
      a: "It depends on your needs, but Sigenergy and Sungrow handle heat and humidity particularly well. We only stock brands proven to perform reliably in tropical NT conditions, not just mild southern climates.",
    },
    {
      q: "Are you SAA accredited installers?",
      a: "Yes. Every installer on our team is SAA Accredited, and every battery we supply is an SAA Approved Product, so your installation meets proper Australian standards from start to finish.",
    },
    {
      q: "Is the NT solar battery rebate still available?",
      a: "No. The NT Government's local battery grant scheme has closed. The Federal STC Solar Grant is still available and is applied as an upfront discount in your quote.",
    },
    {
      q: "How does the Cheaper Home Batteries Program discount work?",
      a: "Eligible battery installations may qualify for an extra discount under this federal program. We check your eligibility during your quote, so any applicable savings are included upfront, not claimed separately.",
    },
    {
      q: "Can I get a battery for an off-grid property in the NT?",
      a: "Yes. We design and install battery systems specifically for off-grid homes and properties across the Territory, sized to handle full independence from the grid reliably.",
    },
    {
      q: "Can a battery run my whole house during a blackout?",
      a: "It largely depends on the specific battery capacity you choose and your home's overall energy consumption during the outage. We can custom design systems specifically equipped to back up just your essential circuits or your entire home for extended periods.",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Solar Battery Brands Darwin NT",
      description:
        "SAA approved solar batteries supplied and installed by Oneroof Solar across Darwin, Palmerston and the wider Northern Territory.",
      itemListElement: brands.map((brand, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: brand.title,
      })),
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
          name: "Solar Battery Brands",
          item: "https://oneroofsolar.com.au/products/solar-battery-brands/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Oneroof Solar",
      image: "https://i.postimg.cc/vZdTgLm9/oneroof.png",
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
      url: "https://oneroofsolar.com.au/products/solar-battery-brands/",
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
                <a href="https://oneroofsolar.com.au/" className="hover:text-[#8cc63f] transition-colors">Home</a>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-[#8cc63f]" aria-current="page">Solar Battery Brands</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-6 uppercase">
                Solar Battery Brands{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Darwin NT</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-medium border-l-2 border-[#8cc63f] pl-6">
                Choosing a solar battery isn't just about picking a brand name. It's about picking one that can handle Darwin's heat, our wet season humidity, and years of hard work without letting you down. We stock and install five trusted battery brands, backed by our SAA Accredited team, so you get a system built for where you actually live.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                  asChild
                >
                  <a href="#quote-form">Get a fast local quote</a>
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
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-[4/3] flex items-center justify-center">
                <img
                  fetchPriority="high"
                  src={heroImg}
                  alt="Solar battery brands installed on Darwin homes"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Which Battery Actually Holds Up in Darwin's Heat?
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                Not every solar battery on the market is built for a climate like ours. Plenty of brands are designed and tested down south, where the weather is mild and the humidity is nothing like what we get here in the wet season.
              </p>
              <p>
                Darwin puts real strain on outdoor electrical equipment. Heat, moisture, and long stretches of hard use can shorten the life of a battery that isn't up to the job. That's why we don't sell every brand on the market. We stock five batteries we genuinely trust to perform well here, year after year.
              </p>
              <p>
                As your local SAA Accredited team, we've seen which brands hold up and which ones struggle once the wet season rolls around. We're not interested in pushing whatever's trending online. We're interested in what actually works for homes and businesses across Darwin, Palmerston, Berrimah, and the wider NT.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                Stop Paying Jacana Energy to Cool Your Home at Night.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Generating solar during the day is only half the battle. When the sun goes down and the aircons switch on, most Darwin homes bleed money straight back to the grid. A battery stores your daytime power so you can run your aircon all night without the bill shock.
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Book Your Battery Backup Installation
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product cards — same format as live /services/battery-storage */}
      <section className="py-24 lg:py-32 bg-[#0A1118] relative">
        <div className="absolute inset-0 bg-dot-white/[0.05] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-slate-300 font-semibold text-sm mb-6 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_rgba(140,198,63,0.8)]"></span>
                Hardware Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">
                The Battery Brands <br />
                <span className="text-brand-400">We Supply</span> and Install
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} className="md:max-w-xs">
              <p className="text-slate-400 font-medium">
                These are the five brands we trust enough to put our name behind. Each one earns its place for a different reason, whether that's price, performance, or flexibility. Here's an honest look at each.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {brands.map((product, idx) => (
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
                        Battery
                      </span>
                      <span className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-md text-brand-400 text-xs tracking-widest uppercase shadow-sm flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Backup Ready
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tighter group-hover:text-brand-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">
                      {product.description}
                    </p>

                    <Link
                      to={product.specHref}
                      className="mt-auto flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors group/link"
                    >
                      <span className="text-sm font-bold text-white tracking-widest uppercase group-hover/link:text-brand-400 transition-colors flex items-center gap-2">
                        <FileDown className="w-4 h-4" />
                        {product.specLabel}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-brand-500 group-hover/link:text-slate-900 transition-all duration-300 text-white shadow-sm border border-white/10 group-hover/link:border-brand-400 shrink-0 ml-3">
                        <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-rotate-45 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-12 max-w-4xl">
              Every battery we install is SAA Approved, and every installation is carried out by SAA Accredited Installers, so you know the job's done to proper Australian standards.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                Battery Storage Built for Homes, Businesses, and Off-Grid Properties
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#8cc63f] mb-4 tracking-tight uppercase">Residential</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Perfect for Darwin families who want lower power bills and backup power when the grid goes down. We size your battery to match how your household actually uses electricity. Learn more about{" "}
                <Link to="/solar-systems/residential-solar-system" className={linkClass}>residential solar systems</Link>.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#8cc63f] mb-4 tracking-tight uppercase">Commercial</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Running a business means power reliability matters even more. We help commercial properties across the NT cut running costs and keep operations going during outages. Learn more about{" "}
                <Link to="/solar-systems/commercial-solar-system" className={linkClass}>commercial solar systems</Link>.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 flex items-center justify-center text-[#8cc63f] border border-[#8cc63f]/20 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#8cc63f] mb-4 tracking-tight uppercase">Off-Grid</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Living remotely doesn't mean going without reliable power. We design battery systems built to handle full off-grid living across the Territory. Learn more about{" "}
                <Link to="/solar-systems/off-grid-solar-system" className={linkClass}>off-grid solar systems</Link>.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us — same format as live /services/battery-storage */}
      <section className="py-24 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Why Choose Our Solar Batteries?
              </h2>
              <p className="text-brand-900 text-lg font-bold max-w-2xl mx-auto">
                Future-proof your home with intelligent storage solutions that grow with your needs.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-lg">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">Energy Independence</h3>
              <p className="text-white/90 font-medium leading-relaxed text-[15px]">
                Store your daytime solar surplus and power your home through the night, minimizing grid reliance completely.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-lg">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">Blackout Protection</h3>
              <p className="text-white/90 font-medium leading-relaxed text-[15px]">
                Automatically switch to battery backup power within milliseconds during a grid outage to keep essentials running.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-500 mb-6 shadow-lg">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">Safe &amp; Certified</h3>
              <p className="text-white/90 font-medium leading-relaxed text-[15px]">
                Installed exclusively by our licensed solar electricians to meet strict Australian safety standards.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              SAA Compliance You Can Trust
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>
                When you're spending real money on a battery system, you want to know it's been done properly. That's exactly what SAA accreditation means for you.
              </p>
              <p>
                Every installer on our team is an SAA Accredited Installer, and every battery and inverter we fit is an SAA Approved or Certified Product. In plain terms, that means the person doing your installation is properly qualified, and the equipment going into your home or business meets proper Australian standards.
              </p>
              <p>
                We handle the technical side too, including making sure your system runs at stable voltage and your MPPT settings are configured correctly so your battery charges efficiently. Outdoor components are chosen with IP65 or IP66 rated casing, built to handle Darwin's rain and humidity without letting moisture cause problems down the track.
              </p>
              <p>
                Not sure if your current setup is working properly? Book a free{" "}
                <Link to="/services/solar-inverters/repair" className={linkClass}>inverter health check</Link>. Call {PRIMARY_PHONE} or visit us at Berrimah, NT.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Upfront Savings on Your Battery
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6">
              <p>Here's the honest state of play on incentives right now.</p>
              <p>
                The NT Government's own local solar and battery grant scheme has closed. It's no longer available, and we won't pretend otherwise.
              </p>
              <p>
                What is still available is the Federal STC Solar Grant. This isn't something you have to claim back later or fill out extra paperwork for. It's applied directly as a discount inside your quote, upfront, so the price you see already reflects it.
              </p>
              <p>
                On top of that, eligible battery installations may also qualify for a discount under the Cheaper Home Batteries Program. We'll check your eligibility as part of your quote, so you know exactly what applies to your situation before you commit to anything.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                Keep your power on when wet season storms trip the grid.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Most rooftop solar systems switch off automatically during a blackout for safety. Adding a battery ensures your home stays powered, keeping your food fresh and your family cool when local lines go down.
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-[#8cc63f] text-[#19281D] px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-400 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Book Your Battery Backup Setup
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1] mb-6 uppercase">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-md">
                  Honest answers on battery brands, rebates, and Darwin installs.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
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
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 focus-visible:ring-2 focus-visible:ring-[#8cc63f] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all"
                      >
                        <h3 className={`text-sm sm:text-base font-bold leading-tight transition-colors ${isOpen ? "text-[#8cc63f]" : "text-slate-900"}`}>
                          {faq.q}
                        </h3>
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
                        id={`faq-panel-${i}`}
                        aria-labelledby={`faq-button-${i}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 px-6 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="text-slate-600 leading-relaxed font-medium text-xs sm:text-sm">
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

      <section id="quote-form" className="py-24 bg-[#0A1118] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
                Get a Fast Local Quote
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                Tell us about your property and we will match the right battery brand to Darwin conditions, with the STC discount already applied to your quote.
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
              <QuoteForm title="Get Your Free Quote" defaultInterest="Solar Battery Storage" source="solar_battery_brands" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolarBatteryBrands;
