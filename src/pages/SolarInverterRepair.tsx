import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  ChevronDown,
  CheckCircle2,
  Zap,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Compass,
  MapPin,
  Wrench,
  ShieldCheck,
  Star,
  AlertTriangle,
  Clock,
  HelpCircle,
  FileText
} from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";

import heroImage from "../assets/images/repair_hero_diag_1785343403327.jpg";
import whatRepairImage from "../assets/images/repair_fault_code_1785343421701.jpg";
import faultPanelImage from "../assets/images/inverter_fault_light_1785339561883.jpg";
import whyFailImage from "../assets/images/darwin_storm_roof_1785343440441.jpg";

export function SolarInverterRepair() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Solar Inverter Repair Darwin NT | Fast Diagnosis | Oneroof Solar",
    metaDescription: "CEC-accredited solar inverter repair in Darwin. Fast fault diagnosis of all major brands and honest repair-or-replace advice. Book a callout today.",
    canonicalUrl: "https://oneroofsolar.com.au/services/solar-inverters/repair",
    robots: "index, follow",
    openGraphTitle: "Solar Inverter Repair Darwin NT | Fast Diagnosis | Oneroof Solar",
    openGraphDescription: "CEC-accredited solar inverter repair in Darwin. Fast fault diagnosis of all major brands and honest repair-or-replace advice. Book a callout today.",
    openGraphImage: "https://oneroofsolar.com.au/assets/images/repair_hero_diag_1785343403327.jpg",
    twitterTitle: "Solar Inverter Repair Darwin NT | Fast Diagnosis | Oneroof Solar",
    twitterDescription: "CEC-accredited solar inverter repair in Darwin. Fast fault diagnosis of all major brands and honest repair-or-replace advice.",
    twitterImage: "https://oneroofsolar.com.au/assets/images/repair_hero_diag_1785343403327.jpg",
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Solar Inverter Repair Darwin",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Oneroof Solar",
        "telephone": "0483 986 444",
        "email": "info@oneroofsolar.com.au"
      },
      "areaServed": "Darwin, Northern Territory",
      "description": "Fast, CEC-accredited solar inverter repairs for Darwin homes, businesses, and off grid properties.",
      "url": "https://oneroofsolar.com.au/services/solar-inverters/repair"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://oneroofsolar.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://oneroofsolar.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Solar Inverters",
          "item": "https://oneroofsolar.com.au/services/solar-inverters"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Solar Inverter Repair",
          "item": "https://oneroofsolar.com.au/services/solar-inverters/repair"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to repair a solar inverter in Darwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minor repairs, such as a blown fuse or a fan replacement, typically cost between $200 and $600. More involved board-level repairs can run from $600 to $1,200. We confirm an exact price after diagnosis, before any work goes ahead."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my solar inverter stops working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check whether the isolator has tripped and it's safe to switch it off. Do not open the unit yourself. Note any fault light, code or noise, then call a licensed solar technician for diagnosis rather than waiting to see if it resolves on its own."
          }
        },
        {
          "@type": "Question",
          "name": "Is it cheaper to repair or replace a solar inverter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repair is usually cheaper if the unit is under 7 years old and the fault is a single component, such as a fan or fuse. Replacement tends to make more sense for units over 10 years old, or where the main board or the whole unit has failed."
          }
        },
        {
          "@type": "Question",
          "name": "Can I repair a solar inverter myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Solar inverters carry both DC and AC voltage and remain live even when the grid is switched off. DIY repair is a genuine electrical hazard and will usually void your warranty. Always use a licensed, CEC-accredited technician."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a solar inverter repair take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simple faults, like a blown fuse, can often be fixed on the same visit. Repairs needing a replacement part usually take a few days to a week, depending on part availability from the manufacturer."
          }
        },
        {
          "@type": "Question",
          "name": "Does a repair void my inverter's warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not if it's carried out by an authorised, CEC-accredited technician. Unauthorised repairs, including DIY attempts, are what typically void a manufacturer's warranty, so we check your warranty status before doing any work."
          }
        }
      ]
    }
  ];

  const signsList = [
    "No display, or a screen that stays blank even in full sun.",
    "A red or flashing fault light on the unit.",
    "A sudden drop in generation on a clear day, with no shading or cloud to explain it.",
    "Your monitoring app has stopped updating or shows no data.",
    "The inverter keeps shutting down and restarting on its own.",
    "Clicking, buzzing or humming that wasn't there before.",
    "A burning smell, discolouration, or visible heat damage around the unit."
  ];

  const whyFailList = [
    "Wet season lightning and voltage surges between November and April are one of the most common causes of sudden inverter failure we see.",
    "Extended heat through the build-up and Wet season pushes internal capacitors and fans past their rated life faster than in cooler states.",
    "Humidity gets into circuit boards and connectors over time, causing corrosion faults that show up as intermittent errors before a full failure.",
    "Dry season dust clogs cooling fans and vents, which makes an inverter run hotter and shortens its working life.",
    "Coastal-facing suburbs like Nightcliff, Fannie Bay, Larrakeyah and Nakara see extra corrosion risk from salt air on top of the heat and humidity."
  ];

  const whoNeedsRepair = [
    {
      title: "Homeowners",
      desc: "Most homeowners call us the moment a fault light comes on or the power bill spikes, usually worried that opening the unit themselves will void the warranty, and wanting the fastest possible turnaround.",
      icon: Home
    },
    {
      title: "Businesses",
      desc: "A business can't wait days for a callout. Downtime costs money every hour the system is offline, so priority response and clear communication on parts and timing matter more than price alone.",
      icon: Building2
    },
    {
      title: "Off-grid and rural properties",
      desc: "For properties in Litchfield, Humpty Doo and Berry Springs running on hybrid or off-grid systems, a faulty inverter often means the battery backup stops working too. Repair urgency is higher, and so is the need for a technician who actually services rural NT rather than Darwin metro only.",
      icon: Compass
    }
  ];

  const repairOrReplace = [
    {
      title: "Age and warranty",
      desc: "Units under 7 years old, or still under manufacturer warranty, are almost always worth repairing first.",
      icon: Clock
    },
    {
      title: "Type of fault",
      desc: "A blown fuse, failed fan or loose connection is a straightforward repair. A fried main board or water-damaged unit usually isn't.",
      icon: Wrench
    },
    {
      title: "Parts availability",
      desc: "If the manufacturer still supplies parts for your model, repair is usually the cheaper path. Discontinued models often make replacement the better long-term option.",
      icon: ShieldCheck
    },
    {
      title: "Cost comparison",
      desc: "We give you both prices before any work starts, so the decision is yours, not ours.",
      icon: FileText
    }
  ];

  const repairProcessSteps = [
    {
      step: "01",
      title: "Remote Diagnosis",
      desc: "Phone or remote diagnosis first, where the fault code or symptoms make that possible."
    },
    {
      step: "02",
      title: "On-site Inspection",
      desc: "On-site inspection if remote diagnosis can't confirm the fault."
    },
    {
      step: "03",
      title: "Diagnostic Testing",
      desc: "Testing with proper diagnostic equipment to confirm the exact cause."
    },
    {
      step: "04",
      title: "Clear Recommendation",
      desc: "A clear repair or replace recommendation, with pricing, before we start work."
    },
    {
      step: "05",
      title: "Warranty Check",
      desc: "Warranty check with the manufacturer if your unit may still be covered."
    },
    {
      step: "06",
      title: "Post-Repair Testing",
      desc: "Post-repair testing and monitoring check so you can see it's actually fixed."
    }
  ];

  const brands = [
    "GoodWe",
    "Sungrow",
    "Fox ESS",
    "Elpha ESS",
    "Sigenergy"
  ];

  const locationCards = [
    {
      title: "Darwin City & Inner Suburbs",
      postcode: "NT 0800 / 0820",
      suburbs: "CBD, Darwin Waterfront, The Esplanade, Larrakeyah, Parap, Cullen Bay, Bayview, East Point, Fannie Bay, Stuart Park, The Gardens, Ludmilla, Winnellie, Woolner"
    },
    {
      title: "Nightcliff & Northern Suburbs",
      postcode: "NT 0810",
      suburbs: "Nightcliff, Rapid Creek, Coconut Grove, Millner, Wagaman, Moil, Alawa, Lyons, Jingili, Tiwi, Wanguri, Nakara, Brinkin, Lee Point, Muirhead"
    },
    {
      title: "Casuarina and East",
      postcode: "NT 0810 / 0812",
      suburbs: "Casuarina, Anula, Leanyer, Wulagi, Malak, Karama, Sanderson, Marrara, Buffalo Creek, Holmes"
    },
    {
      title: "Fannie Bay & Surrounds",
      postcode: "NT 0820",
      suburbs: "Berrimah, Knuckey Lagoon, The Narrows"
    }
  ];

  const faqs = [
    {
      q: "How much does it cost to repair a solar inverter in Darwin?",
      a: "Minor repairs, such as a blown fuse or a fan replacement, typically cost between $200 and $600. More involved board-level repairs can run from $600 to $1,200. We confirm an exact price after diagnosis, before any work goes ahead."
    },
    {
      q: "What should I do if my solar inverter stops working?",
      a: "Check whether the isolator has tripped and it's safe to switch it off. Do not open the unit yourself. Note any fault light, code or noise, then call a licensed solar technician for diagnosis rather than waiting to see if it resolves on its own."
    },
    {
      q: "Is it cheaper to repair or replace a solar inverter?",
      a: "Repair is usually cheaper if the unit is under 7 years old and the fault is a single component, such as a fan or fuse. Replacement tends to make more sense for units over 10 years old, or where the main board or the whole unit has failed."
    },
    {
      q: "Can I repair a solar inverter myself?",
      a: "No. Solar inverters carry both DC and AC voltage and remain live even when the grid is switched off. DIY repair is a genuine electrical hazard and will usually void your warranty. Always use a licensed, CEC-accredited technician."
    },
    {
      q: "How long does a solar inverter repair take?",
      a: "Simple faults, like a blown fuse, can often be fixed on the same visit. Repairs needing a replacement part usually take a few days to a week, depending on part availability from the manufacturer."
    },
    {
      q: "Does a repair void my inverter's warranty?",
      a: "Not if it's carried out by an authorised, CEC-accredited technician. Unauthorised repairs, including DIY attempts, are what typically void a manufacturer's warranty, so we check your warranty status before doing any work."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]/60"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#5BC94D]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 font-mono flex-wrap">
                  <RouterLink to="/" className="hover:text-[#5BC94D] transition-colors">Home</RouterLink>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-slate-400">Services</span>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <RouterLink to="/services/solar-inverters" className="hover:text-[#5BC94D] transition-colors">Solar Inverters</RouterLink>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#5BC94D]" aria-current="page">Solar Inverter Repair</span>
                </nav>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide [word-spacing:0.12em] leading-[1.08] mb-6">
                  Solar Inverter Repair Darwin
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#5BC94D] pl-6 mb-8 max-w-2xl">
                  Fast, CEC-accredited solar inverter repairs for Darwin homes, businesses, and off grid properties, built to handle wet season lightning strikes and Dry season heat. Get your system back online without paying for a full replacement you don't need.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#5BC94D] text-[#19281D] border-none font-black hover:bg-emerald-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href="tel:0483986444">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>Call 0483 986 444</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <RouterLink to="/contact">
                      <span>Contact Us</span>
                    </RouterLink>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Visual Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] aspect-[16/10] sm:aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img 
                      referrerPolicy="no-referrer"
                      src={heroImage} 
                      alt="CEC-accredited technician running diagnostics on a wall-mounted inverter with a handheld tester" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT DOES SOLAR INVERTER REPAIR INVOLVE IN DARWIN? (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={whatRepairImage} 
                    alt="Close-up of an inverter display panel showing a fault code" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  What Does Solar Inverter Repair Involve in Darwin?
                </h2>
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                  <p>
                    A dead or faulty inverter usually shows a blank display, a flashing fault light, a power bill that jumps even though the panels look fine, or a monitoring app that has gone quiet. If left alone, a small fault gets worse fast. A loose connection or a failing fan can turn into a fried circuit board within weeks in Darwin's heat, and what would have been a two hundred dollar fix becomes a full inverter replacement.
                  </p>
                  <p>
                    Oneroof Solar diagnoses and repairs <RouterLink to="/services/solar-inverters" className="text-brand-600 font-bold underline hover:text-brand-700">solar inverters</RouterLink> across Darwin, Palmerston and rural NT. We service GoodWe, Sungrow, Fox ESS, Elpha ESS, Sigenergy and most other major brands, covering fault codes, blown fuses, fan and cooling failures, communication and monitoring faults, and storm or surge damage, with an honest call on whether a repair or a replacement is the better spend.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. SIGNS YOUR SOLAR INVERTER NEEDS REPAIR (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Signs Your Solar Inverter Needs Repair
                </h2>

                <div className="space-y-4 mb-8">
                  {signsList.map((sign, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-brand-600" />
                      </div>
                      <p className="text-slate-700 text-base leading-snug font-medium">
                        {sign}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium border-t border-slate-200 pt-4">
                  If you notice any of these, switch off at the isolator if it's safe to do so and call a licensed technician. Opening the unit yourself can void your warranty and is a genuine electrical risk.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={faultPanelImage} 
                    alt="Inverter digital display panel showing a fault warning light" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. WHY DARWIN INVERTERS FAIL MORE OFTEN THAN OTHER CITIES (Deep Navy contrast section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl aspect-[4/3]">
                  <img 
                    referrerPolicy="no-referrer"
                    src={whyFailImage} 
                    alt="Dramatic tropical storm clouds over a Darwin rooftop with solar panels" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Why Darwin Inverters Fail More Often Than Other Cities
                </h2>

                <div className="space-y-4">
                  {whyFailList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-[#5BC94D]" />
                      </div>
                      <p className="text-slate-200 text-base leading-snug font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. WHO NEEDS SOLAR INVERTER REPAIR IN DARWIN (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Who Needs Solar Inverter Repair in Darwin
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {whoNeedsRepair.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. CTA BANNER (Light off-white section with Deep Navy card) */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0A1118] border border-brand-500/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-wide max-w-4xl mx-auto leading-tight">
                Every Day Your Inverter Sits Broken, You're Paying Full Price for Zero Solar Power.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
                A small fault today is a full replacement bill in a few months if it's left alone. Call our CEC-accredited team for a fast diagnosis and a straight answer on repair versus replace, no upsell, just the fix your system actually needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 uppercase tracking-wider text-xs shadow-lg shadow-brand-500/20"
                  asChild
                >
                  <RouterLink to="/contact">
                    <span>Book Your Inverter Repair Callout &rarr;</span>
                  </RouterLink>
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all h-14 uppercase tracking-wider text-xs"
                  asChild
                >
                  <RouterLink to="/contact">
                    <span>Contact Us</span>
                  </RouterLink>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. REPAIR OR REPLACE? HOW WE DECIDE (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Repair or Replace? How We Decide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairOrReplace.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-200 p-7 rounded-2xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. SOLAR INVERTER REPAIR COSTS IN DARWIN (Deep Navy section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] border-b border-slate-800 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Solar Inverter Repair Costs in Darwin
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              <p>
                Repair cost comes down to what's actually failed, not just the brand. A blown fuse or a tired fan is a small job. A fried main board, or damage from a lightning surge, costs more and sometimes tips the decision toward replacement. Here's what Darwin homeowners and businesses typically pay:
              </p>
            </div>

            {/* Pricing Table */}
            <div className="overflow-x-auto mb-10 rounded-2xl border border-white/10 shadow-xl bg-slate-900">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white font-bold text-base sm:text-lg">
                    <th className="py-4 px-6 sm:px-8">Repair type</th>
                    <th className="py-4 px-6 sm:px-8">Typical Darwin price range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300 text-sm sm:text-base font-medium">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">Diagnostic / callout fee</td>
                    <td className="py-4 px-6 sm:px-8">$99–$150 (often waived if repair proceeds)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">Minor repair (fuse, fan, isolator)</td>
                    <td className="py-4 px-6 sm:px-8">$200–$600</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">Board-level / component repair</td>
                    <td className="py-4 px-6 sm:px-8">$600–$1,200</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">Full inverter replacement</td>
                    <td className="py-4 px-6 sm:px-8">
                      $1,500–$6,000 (link to the <RouterLink to="/services/solar-inverters/installation" className="text-[#5BC94D] font-bold underline hover:text-emerald-400">installation page</RouterLink>)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
              Final price depends on your inverter's brand and age, whether parts are still available from the manufacturer, and the extent of the damage. Rural callouts to Litchfield, Humpty Doo or Berry Springs may carry a small travel component. We always confirm the exact price before any work starts, no surprises on the invoice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 9. WHY CHOOSE ONEROOF SOLAR FOR SOLAR INVERTER REPAIR (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Why Choose Oneroof Solar for Solar Inverter Repair
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 rounded-2xl sm:rounded-3xl shadow-sm space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                <p>
                  We're a locally based, CEC-accredited team in Berrimah, not a call centre booking system that dispatches whoever's free. That matters for repair work, because whoever turns up already understands what Darwin's heat, humidity and Wet season storms do to an inverter over time.
                </p>
                <p>
                  We repair GoodWe, Sungrow, Fox ESS, Elpha ESS and Sigenergy systems regularly, so the diagnosis is fast and the fix is right the first time. Every repair is priced before we start, every repair is done in a way that keeps your manufacturer warranty intact, and if replacement genuinely is the better option, we'll tell you that too instead of patching something that won't last. Oneroof Solar is rated 4.9 stars from 127 reviews across our solar work in Darwin.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#0A1118] border border-brand-500/40 p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#5BC94D] mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-white font-bold ml-2">4.9 / 5.0</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Local CEC-Accredited Team</h3>
                  <p className="text-slate-200 text-base font-medium leading-relaxed">
                    Based in Berrimah, servicing Darwin, Palmerston, and rural NT with honest advice and warranty-safe repairs.
                  </p>
                </div>
                <div className="mt-8">
                  <RouterLink 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#5BC94D] text-[#19281D] font-black hover:bg-emerald-400 transition-all text-xs uppercase tracking-wider"
                  >
                    <span>Book Diagnostic Callout &rarr;</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. OUR SOLAR INVERTER REPAIR PROCESS (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Our Solar Inverter Repair Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {repairProcessSteps.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-700 font-black text-lg flex items-center justify-center mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 11. BRANDS WE REPAIR (White section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Brands We Repair
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8 max-w-4xl">
              We repair GoodWe, Sungrow, Fox ESS, Elpha ESS and Sigenergy inverters, along with most other major brands installed across Darwin homes and businesses. If you're not sure whether we service your brand, send us a photo of the unit and we'll confirm before you book a callout.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {brands.map((brandName, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:border-brand-500/40 transition-colors"
                >
                  <span className="text-slate-900 font-bold text-lg tracking-wide">{brandName}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 12. LOCATIONS SECTION (Light off-white section) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
              Solar Inverter Repair Across Darwin, Areas We Serve
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-4xl">
              Oneroof Solar diagnoses and repairs solar inverters across greater Darwin and the Northern Territory. If you're in any of the suburbs or postcodes below, we're your local team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationCards.map((loc, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:border-brand-500/40 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Rounded pin icon at top of each card */}
                    <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 mb-5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    {/* Suburb group name */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                      {loc.title}
                    </h3>
                    {/* Postcode chip */}
                    <div className="inline-block bg-brand-500/10 border border-brand-500/20 text-brand-700 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4">
                      {loc.postcode}
                    </div>
                    {/* Comma-separated suburb list */}
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {loc.suburbs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS (Light off-white section) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-wide [word-spacing:0.12em] leading-[1.2] mb-10 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "bg-white shadow-md border-brand-500/50"
                        : "bg-white border-slate-200 hover:border-brand-500/30 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-invrep-${i}`}
                      id={`faq-button-invrep-${i}`}
                      className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 transition-all"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                            isOpen
                              ? "bg-brand-500 text-slate-900 shadow-md shadow-brand-500/20"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-bold leading-tight transition-colors ${
                            isOpen ? "text-brand-600" : "text-slate-900"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-brand-500 bg-brand-500/10 text-brand-600 rotate-180"
                            : "border-slate-200 text-slate-500 bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-invrep-${i}`}
                      aria-labelledby={`faq-button-invrep-${i}`}
                      role="region"
                      className={`overflow-hidden transition-all duration-500 px-6 sm:px-6 ${
                        isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-slate-600 leading-relaxed font-medium pl-12 sm:pl-14 text-base sm:text-lg border-t border-slate-100 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 14. END CTA BANNER (Deep Navy section) */}
      <section className="py-16 lg:py-20 bg-[#0A1118] relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-500/30 bg-slate-900/90 p-8 sm:p-14 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-wide [word-spacing:0.12em] leading-tight">
                  Book Your Solar Inverter Repair
                </h2>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
                  If your inverter is showing a fault light, your bill has spiked, or your monitoring app has gone quiet, don't wait for it to get worse.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl px-8 bg-brand-500 text-slate-900 border-none font-black hover:bg-brand-400 transition-all h-14 uppercase tracking-wider text-xs shadow-lg shadow-brand-500/30"
                    asChild
                  >
                    <a href="tel:0483986444">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>Call 0483 986 444</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <RouterLink to="/contact">
                      <span>Contact Us</span>
                    </RouterLink>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
