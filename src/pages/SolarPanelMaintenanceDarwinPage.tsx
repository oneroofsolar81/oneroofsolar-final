import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Phone,
  Droplets,
  Building2,
  Home as HomeIcon,
  Sun,
  CloudRain,
  Bird,
  Clock,
  Wrench,
} from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Button } from "@/src/components/ui/Button";
import { FaqSection } from "@/src/components/FaqSection";
import { GoogleReviews } from "@/src/components/GoogleReviews";
import { QuoteForm } from "@/src/components/QuoteForm";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";

export function SolarPanelMaintenanceDarwinPage() {
  useEffect(() => {
    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Solar Panel Cleaning and Maintenance",
        provider: {
          "@type": "LocalBusiness",
          name: "Oneroof Solar",
          image: "https://oneroofsolar.com.au/assets/images/home/logo-oneroof.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3/97 Pruen Rd",
            addressLocality: "Berrimah",
            addressRegion: "NT",
            postalCode: "0828",
            addressCountry: "AU",
          },
          telephone: "0483 986 444",
          url: "https://oneroofsolar.com.au/",
        },
        description:
          "Professional solar panel cleaning and maintenance in Darwin. Purified water cleans, system health checks, post-storm clean-up, and bird proofing across Darwin and the NT.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does solar panel cleaning cost in Darwin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cost depends on your system size, roof access, and panel condition. We provide upfront quotes with no hidden charges. Contact us and we will give you a clear price before any work begins.",
            },
          },
          {
            "@type": "Question",
            name: "How often should Darwin solar panels be cleaned?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every six months is the standard recommendation, and it is the right one for Darwin. The dry season means panels go months without any natural rinse, while wildlife activity keeps contamination levels high. If your panels are near trees or under heavy bird or bat traffic, more frequent cleans are worth considering.",
            },
          },
          {
            "@type": "Question",
            name: "Does rain clean solar panels?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not properly. Light rain rinses loose dust but does not shift dried droppings or compacted grime. In Darwin's dry season, panels can go five or six months without any rainfall at all. Professional cleaning every six months maintains consistent output where rain simply cannot.",
            },
          },
          {
            "@type": "Question",
            name: "Is pressure cleaning safe for solar panels?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. High-pressure washing can crack panel glass, damage waterproof seals, and void your manufacturer warranty. We use low-pressure purified water systems with soft brushes, the approach recommended by solar panel manufacturers.",
            },
          },
          {
            "@type": "Question",
            name: "Can I clean my own solar panels?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Roof access without proper safety equipment is genuinely dangerous. On top of that, using the wrong products or pressure can permanently scratch your panels or damage seals. A professional clean is safer, more thorough, and protects the investment you have made in your system.",
            },
          },
          {
            "@type": "Question",
            name: "Do you service areas outside Darwin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We service Darwin, Palmerston, and surrounding Northern Territory areas. Contact us with your location and system details and we will confirm availability.",
            },
          },
          {
            "@type": "Question",
            name: "What's included in a maintenance check?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We check your inverter, battery, electrical connections, mounting clips, and hardware during every maintenance visit, not just the panel surface. If anything looks wrong, we tell you, with photos where relevant.",
            },
          },
        ],
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
            name: "Solar Panel Cleaning and Maintenance Darwin",
            item: "https://oneroofsolar.com.au/services/solar-panel-maintenance-darwin",
          },
        ],
      },
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      q: "How much does solar panel cleaning cost in Darwin?",
      a: "Cost depends on your system size, roof access, and panel condition. We provide upfront quotes with no hidden charges. Contact us and we will give you a clear price before any work begins.",
    },
    {
      q: "How often should Darwin solar panels be cleaned?",
      a: "Every six months is the standard recommendation, and it is the right one for Darwin. The dry season means panels go months without any natural rinse, while wildlife activity keeps contamination levels high. If your panels are near trees or under heavy bird or bat traffic, more frequent cleans are worth considering.",
    },
    {
      q: "Does rain clean solar panels?",
      a: "Not properly. Light rain rinses loose dust but does not shift dried droppings or compacted grime. In Darwin's dry season, panels can go five or six months without any rainfall at all. Professional cleaning every six months maintains consistent output where rain simply cannot.",
    },
    {
      q: "Is pressure cleaning safe for solar panels?",
      a: "No. High-pressure washing can crack panel glass, damage waterproof seals, and void your manufacturer warranty. We use low-pressure purified water systems with soft brushes, the approach recommended by solar panel manufacturers.",
    },
    {
      q: "Can I clean my own solar panels?",
      a: "Roof access without proper safety equipment is genuinely dangerous. On top of that, using the wrong products or pressure can permanently scratch your panels or damage seals. A professional clean is safer, more thorough, and protects the investment you have made in your system.",
    },
    {
      q: "Do you service areas outside Darwin?",
      a: "Yes. We service Darwin, Palmerston, and surrounding Northern Territory areas. Contact us with your location and system details and we will confirm availability.",
    },
    {
      q: "What's included in a maintenance check?",
      a: "We check your inverter, battery, electrical connections, mounting clips, and hardware during every maintenance visit, not just the panel surface. If anything looks wrong, we tell you, with photos where relevant.",
    },
  ];

  const scrollToForm = () => {
    const formEl = document.getElementById("enquiry-form-section");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="solar-maintenance-root" className="bg-white text-slate-900 font-sans">
      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#0A1118]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118] via-[#0A1118]/80 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn isHero>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 flex-wrap">
                <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <Link to="/solar-panels-darwin" className="hover:text-brand-400 transition-colors">Solar Panels Darwin</Link>
                <span className="text-slate-500" aria-hidden="true">&gt;</span>
                <span className="text-brand-400" aria-current="page">Cleaning and Maintenance</span>
              </nav>

              <h1 className="hero-heading text-white mb-8 break-words normal-case">
                Solar Panel Cleaning and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">
                  Maintenance Darwin
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-lg mb-8 font-medium border-l-2 border-brand-400/50 pl-6 leading-relaxed">
                Your solar system works hard every day, but dirty panels mean you are paying for power you are not getting. In Darwin's dry season, dust, bird droppings, and bat guano build up fast with nothing to wash them off. Oneroof Solar keeps your panels clean, your system healthy, and your energy bills where they should be.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                  onClick={scrollToForm}
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 border-white/20 text-white font-bold hover:bg-white/10 hover:text-white transition-all h-14 hover:-translate-y-1 uppercase tracking-widest"
                  >
                    Call Us Today <Phone className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/assets/images/home/home-about-stuart-park.webp"
                alt="Solar panel cleaning and maintenance Darwin, Oneroof Solar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-brand-400 text-xs uppercase tracking-widest mb-1">Recommended interval</p>
                  <p className="text-white text-xl font-black uppercase">Every 6 Months</p>
                </div>
                <div className="bg-brand-500 text-slate-900 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider">
                  Darwin NT
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DARWIN CLIMATE */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Darwin's Climate Is Hard on Solar Panels
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-6">
                Darwin gets months without meaningful rainfall during the dry season. There is nothing to rinse your panels naturally, so whatever lands on them stays there. Dust hardens into a film across your photovoltaic cells. Bird, bat, and possum droppings accumulate and bond to the glass. The result is less sunlight reaching your panels, less power generated, and higher electricity bills.
              </p>
              <p className="text-lg font-medium text-slate-600 leading-relaxed">
                Research from the Clean Energy Council shows soiled panels can lose up to 30% of their energy output. For a Darwin household or business, that is a significant hit to the return on your solar investment, and it happens gradually, so most people do not notice until the bills start climbing.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3]">
              <img
                src="/assets/images/home/home-premium-aerial.webp"
                alt="Dirty solar panels Darwin dry season dust build-up"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WE INSTALL IT WE MAINTAIN IT */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                We Install It. We Maintain It.
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-6">
                Oneroof Solar has been installing solar systems across Darwin and the Northern Territory for years. We know these systems inside out, because we put them up. When you book a clean or maintenance check with us, you are not handing your panels to a pressure washing company. You are working with the people who understand how solar systems are built, how they perform, and what to look for when something is not right.
              </p>
              <p className="text-lg font-bold text-slate-800 leading-relaxed">
                That is the difference between a clean and a solar service.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Our Solar Panel Cleaning and Maintenance Services
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Residential Solar Panel Cleaning Darwin",
                desc: "We clean rooftop solar systems on Darwin homes using purified, deionised water and soft-bristle equipment, the cleaning method recommended by solar manufacturers. No high pressure, no harsh chemicals, no scratched glass. Just clean panels running at full capacity.",
                icon: HomeIcon,
              },
              {
                title: "Commercial Solar Panel Cleaning Darwin",
                desc: "We service commercial solar arrays on offices, schools, warehouses, and industrial facilities across Darwin and the NT. Flexible scheduling keeps disruption to a minimum, and our team has the equipment to handle large installations efficiently.",
                icon: Building2,
              },
              {
                title: "Solar Farm Cleaning",
                desc: "Large-scale solar installations need systematic, regular maintenance to hold their output. We clean solar farms across the Northern Territory, working methodically across the array to restore peak energy production.",
                icon: Sun,
              },
              {
                title: "Solar Panel Maintenance Check",
                desc: "A clean panel is one thing. A healthy system is another. Our maintenance service checks your inverter, battery, electrical connections, and mounting hardware, not just the glass. If something needs attention, we flag it before it becomes a problem.",
                icon: Wrench,
              },
              {
                title: "Post-Storm Clean-Up",
                desc: "Darwin storms can leave debris, leaves, and grime across your panels overnight. We respond quickly after severe weather events, clear everything off, inspect for damage, and get your system back to full performance.",
                icon: CloudRain,
              },
              {
                title: "Bird Proofing and Debris Removal",
                desc: "If birds, bats, or possums are regularly using your roof, droppings will keep coming back between cleans. We remove accumulated debris and can advise on bird proofing solutions to reduce the problem at the source.",
                icon: Bird,
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-brand-300 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight normal-case">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow">
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE CLEAN */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] order-2 lg:order-1">
              <img
                src="/assets/images/home/home-hero-bayview.webp"
                alt="Purified water solar panel cleaning Darwin"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm mb-6 shadow-sm">
                <Droplets className="w-4 h-4 text-brand-600" />
                Manufacturer-Recommended Method
              </div>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                How We Clean Your Solar Panels
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-6">
                Not all cleaning is equal. High-pressure washing cracks panel glass, damages seals, and voids manufacturer warranties. Household detergents leave residue. Tap water leaves mineral deposits that attract more dust. We do not use any of these.
              </p>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-6">
                Our team uses purified, deionised water, filtered to remove dissolved minerals so it dries completely clean with no film or streaking. Combined with soft-bristle brushes and proper technique, the result is a panel surface that is genuinely clear, not just rinsed.
              </p>
              <p className="text-lg font-medium text-slate-600 leading-relaxed">
                This is the method solar panel manufacturers recommend. It is also the reason our cleans last longer than a standard pressure wash.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
                <Clock className="w-4 h-4" /> Service Day Workflow
              </div>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
                What to Expect on the Day
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Book your service",
                desc: "Call us or fill in the quote form and we will lock in a time.",
              },
              {
                step: "02",
                title: "System safety check",
                desc: "We check your system before work begins to make sure everything is handled correctly and safely.",
              },
              {
                step: "03",
                title: "Full panel clean",
                desc: "Purified water, soft brushes, careful technique. Every panel cleaned thoroughly.",
              },
              {
                step: "04",
                title: "Maintenance inspection",
                desc: "Inverter, battery, connections, and mounting hardware all checked.",
              },
              {
                step: "05",
                title: "You're updated",
                desc: "We let you know what we found, what we did, and if anything needs follow-up.",
              },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-slate-850 border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-lg hover:border-brand-500/30 transition-all duration-500 group">
                  <div className="text-7xl lg:text-8xl font-black text-slate-800 group-hover:text-brand-950 transition-colors pointer-events-none select-none w-32 text-center shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors normal-case">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                Solar Panel Cleaning Darwin, Cost
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-6">
                Solar panel cleaning costs in Darwin depend on the size of your system, how accessible your roof is, and the current condition of your panels. We provide clear, upfront pricing with no surprises on the day.
              </p>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-6">
                We also offer regular service plans, monthly, quarterly, or annual, so your system stays in top condition year-round without you having to think about it. Planned maintenance is always cheaper than reactive repairs.
              </p>
              <p className="text-lg font-medium text-slate-600 leading-relaxed mb-10">
                Contact us for a quote specific to your system.
              </p>
              <Button
                size="lg"
                className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                onClick={scrollToForm}
              >
                Request a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <FadeIn className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] sm:aspect-video lg:aspect-square">
                <img
                  src="/assets/images/home/home-project-bayview.webp"
                  alt="Signs solar panels need cleaning Darwin"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn>
                <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-6 normal-case">
                  Signs Your Solar Panels Need Cleaning
                </h2>
                <div className="space-y-4 mb-10">
                  {[
                    "Electricity bills have increased without a change in your usage",
                    "Your inverter is showing reduced output or a warning signal",
                    "It has been more than six months since the last professional clean",
                    "You can see dust, staining, or droppings on the panels from the ground",
                    "There has been a storm, dust storm, or high winds recently",
                    "Birds, bats, or possums are regularly active on your roof",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <p className="text-slate-700 font-semibold text-base sm:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 normal-case">Seeing any of these?</h4>
                    <p className="text-sm text-slate-500 font-semibold">Book a clean and maintenance check with our Darwin team.</p>
                  </div>
                  <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                    <Button className="rounded-full font-bold shadow-md hover:-translate-y-1 transition-all h-12 px-6">
                      Call {PRIMARY_PHONE} <Phone className="ml-2 w-4 h-4 fill-slate-900" />
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />

      <GoogleReviews />

      {/* BOTTOM CTA */}
      <section className="py-24 bg-[#0A1118] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 -translate-x-1/3" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-white mb-6 normal-case">
              Keep Your Solar System Performing All Year
            </h2>
            <p className="text-lg font-medium text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              A clean, well-maintained solar system pays for itself. If your panels have not been serviced in the last six months, it is time. Oneroof Solar services residential and commercial systems across Darwin and the Northern Territory, from a single rooftop to a full solar farm.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-brand-500 text-slate-900 border-none font-bold hover:bg-brand-400 transition-all h-14 hover:-translate-y-1 shadow-[0_0_20px_rgba(140,198,63,0.3)] uppercase tracking-widest"
                onClick={scrollToForm}
              >
                Request a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href={`tel:${PRIMARY_PHONE_RAW}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/20 text-white font-bold hover:bg-white/10 hover:text-white transition-all h-14 hover:-translate-y-1 uppercase tracking-widest"
                >
                  Call Now <Phone className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section id="enquiry-form-section" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn>
              <h2 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-4 normal-case">
                Book Solar Panel Cleaning in Darwin
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Tell us about your system and we will confirm availability and pricing.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <QuoteForm
                title="Book Your Clean"
                defaultInterest="Solar Panel Cleaning & Maintenance"
                source="solar_panel_maintenance_page"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
