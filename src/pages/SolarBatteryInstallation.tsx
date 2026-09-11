import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Gauge, 
  Sliders, 
  TrendingUp,
  Home,
  Building2,
  BatteryCharging,
  Sun,
  Shield,
  Star
} from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/SEO";
import { PackagesSection } from "@/src/components/PackagesSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { PartnersMarquee } from "@/src/components/PartnersMarquee";

export function SolarBatteryInstallation() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoData = {
    title: "Solar Battery Installation Darwin, NT | Oneroof Solar",
    metaDescription: "Licensed solar battery installation in Darwin, NT. Blackout protection, expert integration, residential and commercial. Get a free quote today.",
    canonicalUrl: "https://oneroofsolar.com.au/services/solar-battery-installation",
    robots: "index, follow",
    openGraphTitle: "Solar Battery Installation Darwin, NT | Oneroof Solar",
    openGraphDescription: "Licensed solar battery installation in Darwin, NT. Blackout protection, expert integration, residential and commercial. Get a free quote today.",
    openGraphImage: "/assets/images/hosted/products/sigen-battery.webp",
    twitterTitle: "Solar Battery Installation Darwin, NT | Oneroof Solar",
    twitterDescription: "Licensed solar battery installation in Darwin, NT. Blackout protection, expert integration, residential and commercial. Get a free quote today.",
    twitterImage: "/assets/images/hosted/products/sigen-battery.webp",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar Battery Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Oneroof Solar",
      "telephone": "0483 986 444",
      "email": "info@oneroofsolar.com.au",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3/97 Pruen Rd",
        "addressLocality": "Berrimah",
        "addressRegion": "NT",
        "postalCode": "0828",
        "addressCountry": "AU"
      }
    },
    "areaServed": "Darwin NT",
    "description": "Licensed solar battery installation in Darwin, NT. Blackout protection, expert integration, residential and commercial. Get a free quote today.",
    "url": "https://oneroofsolar.com.au/services/solar-battery-installation"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it safe to have a big battery inside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern battery units are tested to be highly safe and are engineered with automated thermal regulation systems. As a best practice precaution we typically recommend installing them in insulated garages or against fully shaded external walls."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose power during installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases no. Any brief disconnection is scheduled for a short window during final connection and testing not the whole installation day."
        }
      },
      {
        "@type": "Question",
        "name": "Can it charge from the grid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most battery systems can charge from solar during the day and top up from the grid if needed useful if you are on a time of use tariff or want guaranteed backup heading into the Wet season."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the best place to install the battery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A shaded well ventilated spot such as an insulated garage or a shielded external wall out of direct sun. Darwin's heat makes placement especially important for battery lifespan and warranty."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a battery installation typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential installs in Darwin take one to two days from start to commissioning depending on system size and whether it is paired with new panels or added to an existing solar system."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a battery to my existing solar system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most existing solar systems can be retrofitted with a battery either AC coupled for a simpler retrofit or DC coupled through a hybrid inverter for higher efficiency. We will confirm which suits your current setup during your quote."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a solar battery last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most quality batteries are warrantied for 10 years and can last well beyond that with correct installation and placement particularly important given Darwin's heat."
        }
      }
    ]
  };

  const breadcrumbSchema = {
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
        "name": "Solar Battery Installation",
        "item": "https://oneroofsolar.com.au/services/solar-battery-installation"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oneroof Solar",
    "url": "https://oneroofsolar.com.au",
    "telephone": "0483 986 444",
    "email": "info@oneroofsolar.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3/97 Pruen Rd",
      "addressLocality": "Berrimah",
      "addressRegion": "NT",
      "postalCode": "0828",
      "addressCountry": "AU"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  const whyChooseUsCards = [
    {
      title: "Best Warranties",
      desc: "Full peace of mind with comprehensive performance guarantees backed by our licensed NT team.",
      icon: ShieldCheck
    },
    {
      title: "Max Efficiency",
      desc: "Tier 1 hardware paired with installation practices suited to Darwin's climate so you get the most from every kilowatt.",
      icon: Gauge
    },
    {
      title: "Custom Built",
      desc: "No cookie cutter setups. Every battery system is matched to your roof your usage and your property residential or commercial.",
      icon: Sliders
    },
    {
      title: "Fast Payback",
      desc: "By cutting your reliance on grid power our systems typically pay for themselves quickly even faster with rising NT electricity costs.",
      icon: TrendingUp
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "1. Consultation and Quote",
      desc: "We review your energy bills and survey your site to understand exactly what you need then provide a transparent custom quote."
    },
    {
      step: "2",
      title: "2. System Design",
      desc: "Our engineers design a layout suited to your roof and Darwin's conditions ensuring every component fits and performs as it should."
    },
    {
      step: "3",
      title: "3. Expert Installation",
      desc: "Our licensed installers fit your system safely and to strict regulations with minimal disruption to your day."
    },
    {
      step: "4",
      title: "4. Commissioning",
      desc: "We test the full system connect you to the grid and show you how to monitor your savings from day one."
    }
  ];

  const batteryBrands = [
    {
      name: "Tesla",
      desc: "Industry-leading energy density with sleek wall-mounted Powerwall architectures.",
      image: "/assets/images/home/home-battery-nightcliff.webp"
    },
    {
      name: "Sigenergy",
      desc: "Next-generation integrated 5-in-one solar and high-voltage battery storage.",
      image: "/assets/images/hosted/products/sigen-battery.webp"
    },
    {
      name: "Sungrow",
      desc: "High-yield modular lithium iron phosphate (LFP) storage with robust cycling longevity.",
      image: "/assets/images/hosted/products/sigen-battery-detail.webp"
    },
    {
      name: "BYD",
      desc: "World-class battery chemistry renowned for high safety, deep discharge, and modular expansion.",
      image: "/assets/images/hosted/products/fronius.webp"
    },
    {
      name: "Alpha ESS",
      desc: "Reliable, cost-effective residential and commercial energy storage systems.",
      image: "/assets/images/hosted/products/alpha-ess.webp"
    }
  ];

  const faqs = [
    {
      q: "Is it safe to have a big battery inside?",
      a: "Modern battery units are tested to be highly safe and are engineered with automated thermal regulation systems. As a best practice precaution we typically recommend installing them in insulated garages or against fully shaded external walls."
    },
    {
      q: "Will I lose power during installation?",
      a: "In most cases no. Any brief disconnection is scheduled for a short window during final connection and testing not the whole installation day."
    },
    {
      q: "Can it charge from the grid?",
      a: "Yes. Most battery systems can charge from solar during the day and top up from the grid if needed useful if you are on a time of use tariff or want guaranteed backup heading into the Wet season."
    },
    {
      q: "Where is the best place to install the battery?",
      a: "A shaded well ventilated spot such as an insulated garage or a shielded external wall out of direct sun. Darwin's heat makes placement especially important for battery lifespan and warranty."
    },
    {
      q: "How long does a battery installation typically take?",
      a: "Most residential installs in Darwin take one to two days from start to commissioning depending on system size and whether it is paired with new panels or added to an existing solar system."
    },
    {
      q: "Can I add a battery to my existing solar system?",
      a: (
        <>
          Yes. Most existing solar systems can be retrofitted with a battery either AC coupled for a simpler retrofit or DC coupled through a <Link to="/services/solar-inverters" className="text-[#8cc63f] font-semibold hover:underline">hybrid inverter</Link> for higher efficiency. We will confirm which suits your current setup during your quote.
        </>
      )
    },
    {
      q: "How long does a solar battery last?",
      a: "Most quality batteries are warrantied for 10 years and can last well beyond that with correct installation and placement particularly important given Darwin's heat."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      <SEO seo={seoData} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-[#0A1118]/60"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#8cc63f]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <FadeIn isHero>
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6  flex-wrap">
                  <Link to="/" className="hover:text-[#8cc63f] transition-colors">Home</Link>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-slate-400">Services</span>
                  <span className="text-slate-500" aria-hidden="true">&gt;</span>
                  <span className="text-[#8cc63f]" aria-current="page">Solar Battery Installation</span>
                </nav>

                {/* Rating Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold mb-6 backdrop-blur-md">
                  <div className="flex items-center text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span>Google Rating 5.0 | Licensed Solar Specialists</span>
                </div>

                {/* H1 Heading */}
                <h1 className="hero-heading text-white mb-6 break-words normal-case">
                  Solar Battery Installation Darwin NT
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-[#8cc63f] pl-6 mb-8 max-w-2xl">
                  Protect your home or business from blackouts with expert battery installation
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-[#8cc63f] text-[#19281D] border-none font-black hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_4px_20px_rgba(91,201,77,0.3)] uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Claim your free battery quote now</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    className="rounded-xl px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all h-14 uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href="tel:0483986444">
                      <Phone className="w-4 h-4 mr-2 text-[#8cc63f]" />
                      <span>Call 0483 986 444</span>
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Visual Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <FadeIn isHero delay={0.2}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0D1520] aspect-[4/3] w-full flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center relative">
                    <img 
                      referrerPolicy="no-referrer"
                      src="/assets/images/hosted/products/sigen-battery.webp" 
                      alt="Solar battery installation in Darwin NT" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8cc63f] text-[#19281D] flex items-center justify-center shrink-0">
                        <BatteryCharging className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Blackout Protection Active</div>
                        <div className="text-slate-400 text-xs font-medium">Automatic seamless grid backup</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>

        {/* Partner Logos Marquee */}
        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-8">
          <PartnersMarquee />
        </div>
      </section>

      {/* 2. ABOUT THIS SERVICE SECTION */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Solar Battery Installation Excellence in Darwin
              </h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                <p>
                  Expert integration of high capacity storage batteries to protect your home or business against grid outages, backed by licensed installation across Darwin and the wider NT.
                </p>
                <p>
                  Installing a large lithium ion battery requires strict electrical safety standards. We handle the heavy lifting, secure mounting, and software syncing to your home network, so the system is ready to run from day one.
                </p>
                <p>
                  We install for both residential and commercial solar battery installation projects, whether you are adding storage to an existing <Link to="/solar-panels-darwin" className="text-[#8cc63f] font-bold underline hover:text-brand-700">solar system</Link> or starting fresh.
                </p>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight normal-case">
                    Designed for Darwin Homes
                  </h3>
                  <p>
                    Darwin's heat and humidity affect where and how a battery should be installed. Our team positions every unit for airflow and shade, protecting performance and warranty from day one.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. EXCLUSIVE SOLAR & BATTERY DEALS (PACKAGES SECTION) */}
      <PackagesSection />

      {/* 4. CTA SECTION 1 */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div 
              className="rounded-2xl text-center shadow-xl p-8 sm:p-12"
              style={{ backgroundColor: "#19281D" }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight normal-case">
                Protect your home before the next outage
              </h3>
              <p className="text-slate-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto font-medium">
                See how affordable battery backup is for your property
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3.5 rounded font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#8cc63f", color: "#19281D" }}
              >
                Claim your free battery quote now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mb-12">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Why Choose Our Solar Battery Installation in Darwin
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                We do not just supply equipment. We deliver complete energy solutions built for longevity performance and return on investment for both residential and commercial solar battery installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUsCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-sm hover:border-[#8cc63f]/50 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-100 flex items-center justify-center text-[#19281D] mb-5">
                        <IconComp className="w-6 h-6 text-brand-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight normal-case">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. OUR PROCESS SECTION */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mb-12">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                How We Deliver Your Solar Battery Installation
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                A fully managed four step process from your first quote to switching on your new solar battery installation in Darwin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col justify-between h-full relative"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#8cc63f] text-[#19281D] font-black text-xl flex items-center justify-center mb-5 shadow-md shadow-[#8cc63f]/20">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight normal-case">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. BATTERY BRANDS WE INSTALL SECTION */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mb-10">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Battery Brands We Install in Darwin
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                We fit batteries from trusted manufacturers including Tesla, Sigenergy, Sungrow, BYD, and Alpha ESS, matched to your system size and budget rather than pushed from one supplier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {batteryBrands.map((brand, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between items-center text-center hover:border-[#8cc63f]/50 transition-all group"
                >
                  <div className="w-full h-32 mb-4 flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-slate-100/60 transition-colors overflow-hidden">
                    <img 
                      referrerPolicy="no-referrer"
                      src={brand.image} 
                      alt={`${brand.name} solar battery`}
                      className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 normal-case">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-3">
                    {brand.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. RESIDENTIAL VS COMMERCIAL SECTION */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8 normal-case">
              Residential and Commercial Battery Installation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-slate-50 border border-slate-200 p-7 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-100 flex items-center justify-center text-brand-600 mb-5">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight normal-case">
                    Residential
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Built around your household's daily usage blackout protection and roof space sized for a home rather than a business.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-7 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-100 flex items-center justify-center text-brand-600 mb-5">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight normal-case">
                    Commercial
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    Designed around your business's operating hours peak demand charges and continuity requirements so your system is engineered for a different load profile entirely.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. WHAT AFFECTS YOUR INSTALLATION COST SECTION */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl">
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                What Affects Your Battery Installation Cost
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                Every quote is different but the main factors are battery capacity whether you are adding to an existing solar system or installing fresh the complexity of your switchboard and wiring and whether you choose AC or DC coupling. See our packages above for a starting guide or get a free quote for an exact figure.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. COMPLIANCE & STANDARDS SECTION */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200 text-xs font-bold uppercase tracking-wider mb-4">
                <Shield className="w-3.5 h-3.5" /> Australian Safety Standards
              </div>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Licensed and Compliant Installation
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-medium">
                Every installation is carried out to Australian wiring and battery safety standards (AS/NZS 5139 and AS/NZS 5033) so your system is compliant, insurable and eligible for any applicable rebates. Our licensed installers handle the paperwork and inspections so you do not have to.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-10 text-center normal-case">
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
                        ? "bg-white shadow-md border-[#8cc63f]/60"
                        : "bg-white border-slate-200 hover:border-[#8cc63f]/40 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-battery-${i}`}
                      id={`faq-button-battery-${i}`}
                      className="w-full text-left px-6 py-5 sm:p-6 flex items-start sm:items-center justify-between focus:outline-none gap-4 transition-all"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                            isOpen
                              ? "bg-[#8cc63f] text-[#19281D] shadow-md shadow-[#8cc63f]/20"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-bold leading-tight transition-colors ${
                            isOpen ? "text-brand-700" : "text-slate-900"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-[#8cc63f] bg-brand-100 text-brand-700 rotate-180"
                            : "border-slate-200 text-slate-500 bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-battery-${i}`}
                      aria-labelledby={`faq-button-battery-${i}`}
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

      {/* 12. FINAL CTA SECTION */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div 
              className="rounded-2xl text-center shadow-2xl p-8 sm:p-14"
              style={{ backgroundColor: "#19281D" }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight normal-case">
                Keep your power on when it matters most
              </h3>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
                Request a free quote for reliable battery backup built for the Darwin climate
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-9 py-4 rounded font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#8cc63f", color: "#19281D" }}
              >
                Get your free battery assessment today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 13. VERIFIED 5-STAR REVIEWS SECTION */}
      <GoogleReviews />

    </div>
  );
}
