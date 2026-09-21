const PARTNER_LOGOS = [
  { src: "/assets/images/hosted/partner-2.png", alt: "Hyundai Solar Australia authorised dealer" },
  { src: "/assets/images/hosted/partner-3.png", alt: "Tesla Energy certified installer" },
  { src: "/assets/images/hosted/partner-4.png", alt: "Tesla Powerwall certified installer" },
  { src: "/assets/images/hosted/partner-5.png", alt: "Sigenergy certified installer" },
];

export function PartnersMarquee() {
  return (
    <section className="partners-marquee py-12 border-b border-slate-200 bg-white overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="partners-marquee-track items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 md:gap-24 items-center justify-around flex-shrink-0 px-8" aria-hidden={i === 1}>
            {PARTNER_LOGOS.map((logo) => (
              <img
                key={`${i}-${logo.src}`}
                referrerPolicy="no-referrer"
                loading="eager"
                src={logo.src}
                alt={i === 0 ? logo.alt : ""}
                className="h-20 md:h-24 w-auto max-w-none object-contain mix-blend-multiply"
                height={96}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
