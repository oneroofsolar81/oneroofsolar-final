const PARTNER_LOGOS = [
  { src: "/assets/images/hosted/partner-1.png", alt: "Partner brand 1" },
  { src: "/assets/images/hosted/partner-2.png", alt: "Partner brand 2" },
  { src: "/assets/images/hosted/partner-3.png", alt: "Partner brand 3" },
  { src: "/assets/images/hosted/partner-4.png", alt: "Partner brand 4" },
  { src: "/assets/images/hosted/partner-5.png", alt: "Partner brand 5" },
];

export function PartnersMarquee() {
  return (
    <section className="py-12 border-b border-slate-200 bg-white overflow-hidden relative">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center">
        {/* We render the original set and duplicate it immediately for seamless looping */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 md:gap-24 items-center justify-around flex-shrink-0 px-8 w-max">
            {PARTNER_LOGOS.map((logo) => (
              <img
                key={`${i}-${logo.src}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                src={logo.src}
                alt={logo.alt}
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
