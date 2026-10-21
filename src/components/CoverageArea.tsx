import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const DARWIN_CITY_SUBURBS = [
  { name: "Stuart Park", href: "/locations/stuart-park" },
  { name: "Fannie Bay", href: "/locations/fannie-bay" },
  { name: "East Point", href: "/locations/east-point" },
  { name: "Berrimah", href: "/locations/berrimah" },
  { name: "Bayview", href: "/locations/bayview" },
  { name: "Winnellie", href: "/locations/winnellie" },
];

const POSTCODES = [
  "0800", "0810", "0812", "0820", "0822", "0828", "0829", "0830", "0832", "0834",
  "0835", "0836", "0837", "0838", "0839", "0840", "0841", "0845", "0846", "0847",
  "0850", "0852", "0853", "0886",
];

/**
 * Service-area coverage section shared across the home page and every service page.
 * Edit this one component to keep the coverage grid consistent site-wide.
 */
export function CoverageArea() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-dot-slate-200 opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mx-auto text-center max-w-3xl mb-20">
          <span className="text-[0.875rem] font-normal leading-[1.5] tracking-widest text-brand-600 uppercase mb-3 block">WHERE WE SERVE</span>
          <h2 className="text-[2rem] font-bold leading-[1.25] text-slate-900 tracking-tight mb-6 normal-case">
            Solar Installations Across <span className="text-brand-600">Darwin &amp; the NT</span>
          </h2>
          <p className="text-slate-600 text-[1rem] font-normal leading-[1.6] max-w-2xl mx-auto">
            Oneroof Solar installs across every suburb in Greater Darwin, plus Alice Springs, Katherine, and surrounding NT communities.
          </p>
        </div>

        {/* Serviced Suburbs 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {/* Card 1: Darwin City */}
          <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />

            <div className="flex justify-between items-start mb-6">
              <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/25 uppercase tracking-widest">
                Primary
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-white mb-2 normal-case">Darwin City</h3>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 uppercase tracking-wider block mb-4">
                Primary Hub — (0800, 0820) — Residential &amp; Commercial
              </span>

              <div className="flex flex-wrap gap-2 mb-6">
                {DARWIN_CITY_SUBURBS.map((suburb) => (
                  <Link key={suburb.href} to={suburb.href} className="text-[0.875rem] font-normal leading-[1.5] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full hover:text-white hover:border-brand-500/40 hover:bg-brand-500/10 transition-colors">
                    {suburb.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/locations/darwin-city" className="text-[1rem] font-medium leading-[1] text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Darwin Solar <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Northern Darwin */}
          <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />

            <div className="flex justify-between items-start mb-6">
              <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/25 uppercase tracking-widest">
                Active
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-white mb-2 normal-case">Northern Darwin</h3>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 uppercase tracking-wider block mb-4">
                (0810, 0812) — Residential &amp; Commercial
              </span>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Nightcliff", "Casuarina", "Rapid Creek", "Coconut Grove", "Tiwi", "Muirhead", "Wanguri", "Karama", "Leanyer", "Alawa"].map((suburb, i) => (
                  <span key={i} className="text-[0.875rem] font-normal leading-[1.5] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {suburb}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/locations/northern-darwin" className="text-[1rem] font-medium leading-[1] text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View All Suburbs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Alice Springs */}
          <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />

            <div className="flex justify-between items-start mb-6">
              <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/25 uppercase tracking-widest">
                Regional
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-white mb-2 normal-case">Alice Springs</h3>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 uppercase tracking-wider block mb-4">
                2nd Hub — (0870) — Residential &amp; Commercial
              </span>

              <p className="text-slate-300 text-[1rem] font-normal leading-[1.6] mb-4">
                Alice Springs has some of the highest solar irradiance in Australia. Our team travels regularly for residential and commercial installations.
              </p>
              <div className="mt-4">
                <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 uppercase tracking-widest block mb-2">Coverage:</span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Alice Springs", "Katherine", "Tennant Creek"].map((place, i) => (
                    <span key={i} className="text-[0.875rem] font-normal leading-[1.5] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/solar-alice-springs/" className="text-[1rem] font-medium leading-[1] text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              Alice Springs Solar <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 4: Palmerston */}
          <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />

            <div className="flex justify-between items-start mb-6">
              <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/25 uppercase tracking-widest">
                Active
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-white mb-2 normal-case">Palmerston</h3>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 uppercase tracking-wider block mb-4">
                (0830, 0832) — Residential &amp; Commercial
              </span>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Palmerston City", "Driver", "Moulden", "Gray", "Woodroffe", "Durack", "Rosebery", "Bellamack", "Bakewell", "Gunn", "Zuccoli"].map((suburb, i) => (
                  <span key={i} className="text-[0.875rem] font-normal leading-[1.5] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {suburb}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/locations/palmerston" className="text-[1rem] font-medium leading-[1] text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              Palmerston Solar <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 5: Darwin Rural */}
          <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />

            <div className="flex justify-between items-start mb-6">
              <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 text-brand-400">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/25 uppercase tracking-widest">
                Active
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-white mb-2 normal-case">Darwin Rural</h3>
              <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-400 uppercase tracking-wider block mb-4">
                (0822, 0836–0847) — Residential &amp; Commercial
              </span>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Humpty Doo", "Howard Springs", "Litchfield", "Berry Springs", "Noonamah", "Coolalinga", "Batchelor", "Darwin River", "Adelaide River"].map((suburb, i) => (
                  <span key={i} className="text-[0.875rem] font-normal leading-[1.5] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {suburb}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/locations/darwin-rural" className="text-[1rem] font-medium leading-[1] text-[#8cc63f] hover:text-brand-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              Darwin Rural <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 6: Not Sure We Cover Your Area? */}
          <div className="bg-gradient-to-b from-[#0F2317] to-[#0A120D] border border-emerald-950/40 p-8 rounded-[2rem] flex flex-col relative overflow-hidden h-full shadow-2xl group hover:border-brand-500/30 transition-all duration-300 min-h-[360px]">
            {/* Abstract Map Graphic */}
            <div className="absolute top-0 left-0 right-0 h-40 opacity-15 pointer-events-none overflow-hidden">
              <svg className="w-full h-full text-[#8cc63f]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,30 50,70 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0,30 Q30,60 60,20 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="1.5" className="fill-brand-400" />
                <circle cx="30" cy="40" r="1" className="fill-brand-400" />
                <circle cx="70" cy="45" r="1" className="fill-brand-400" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A120D]" />
            </div>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300" />

            <div className="flex-grow relative z-10 pt-6">
              <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-white mb-4 normal-case">Not Sure We Cover Your Area?</h3>
              <p className="text-slate-300 text-[1rem] font-normal leading-[1.6] mb-8">
                If you are in the Northern Territory, we almost certainly do. Call us and we will confirm within one business day.
              </p>
            </div>
            <div className="relative z-10 mt-auto">
              <Button size="lg" className="rounded-full w-full h-12 text-[1rem] font-medium leading-[1] bg-[#8cc63f] hover:bg-[#7bc034] text-slate-900 group-hover:scale-[1.02] transition-transform duration-300" asChild>
                <Link to="/contact">Check My Area</Link>
              </Button>
            </div>
          </div>

        </div>

        {/* Postcode strip */}
        <div className="bg-slate-50/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl py-5 px-6 sm:px-8 border border-slate-200/60 shadow-sm max-w-5xl mx-auto">
          <div className="flex flex-col gap-3.5 items-start text-left">
            <span className="text-[0.875rem] font-normal leading-[1.5] text-brand-600 uppercase tracking-widest">
              ALL NT POSTCODES:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-slate-800 text-[0.875rem] font-normal leading-[1.5]">
              {POSTCODES.map((p, idx) => (
                <span key={idx} className="bg-white border border-brand-500/20 hover:border-brand-500/40 hover:shadow-sm transition-all duration-300 px-2.5 py-1 rounded-full text-slate-800 shadow-sm">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
