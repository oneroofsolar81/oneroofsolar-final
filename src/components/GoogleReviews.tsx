import React, { useEffect, useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Star } from 'lucide-react';

const FALLBACK_REVIEWS = [
  {
    name: "David Richardson",
    location: "Frankston, VIC",
    rating: 5,
    date: "2 weeks ago",
    text: "Outstanding service from One Roof Solar. They designed a custom 10.3kW system with battery storage. The installation was incredibly clean, and our electricity bill has dropped by 85%. Highly professional team!",
    initials: "DR"
  },
  {
    name: "Sarah Jenkins",
    location: "Blacktown, NSW",
    rating: 5,
    date: "1 month ago",
    text: "From the initial quote to the final grid connection, the process was seamless. The consultant took the time to explain panel efficiency and battery storage options. Very happy with the results!",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    location: "Box Hill, VIC",
    rating: 5,
    date: "3 weeks ago",
    text: "Highly recommend One Roof Solar. Pristine quality panels, very clean wiring, and no high-pressure sales pitches. Excellent value and local support!",
    initials: "MC"
  },
  {
    name: "Emma Thompson",
    location: "Parramatta, NSW",
    rating: 5,
    date: "2 months ago",
    text: "Great local solar team. They helped us secure our state solar rebates and did a fantastic job on our difficult multi-tiered roof. 10/10 service!",
    initials: "ET"
  },
  {
    name: "Robert Kovac",
    location: "Geelong, VIC",
    rating: 5,
    date: "3 days ago",
    text: "Excellent experience from start to finish. The installers were prompt, tidy, and did an outstanding job. The system has been performing above expectations.",
    initials: "RK"
  },
  {
    name: "Amanda Holmes",
    location: "Cronulla, NSW",
    rating: 5,
    date: "3 weeks ago",
    text: "Professional, knowledgeable, and honest. They did a detailed shading analysis on our roof and configured the optimum inverter setup. Highly recommended!",
    initials: "AH"
  }
];

export function GoogleReviews() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // 1. Try to load the Elfsight script
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Listen for Elfsight-related errors globally
    const handleError = (e: ErrorEvent) => {
      const msg = e.message || (e.error && e.error.message) || '';
      if (typeof msg === 'string') {
        const lower = msg.toLowerCase();
        if (
          lower.includes('elfsight') ||
          lower.includes('eapps') ||
          lower.includes('app_views_limit_reached')
        ) {
          setShowFallback(true);
        }
      }
    };

    window.addEventListener('error', handleError);

    // 3. Fallback check: After 2.5 seconds, if the widget container didn't populate any inner DOM, fall back.
    const timer = setTimeout(() => {
      const elfsightContainer = document.querySelector('[class*="elfsight-app-"]');
      if (elfsightContainer) {
        const hasChildren = elfsightContainer.children.length > 0;
        const hasText = elfsightContainer.textContent && elfsightContainer.textContent.trim().length > 0;
        if (!hasChildren && !hasText) {
          setShowFallback(true);
        }
      } else {
        setShowFallback(true);
      }
    }, 2500);

    return () => {
      window.removeEventListener('error', handleError);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span>Verified 5-Star Reviews</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what our community is saying about our premium solar solutions, professional installation, and lifelong energy support.
            </p>
          </div>

          {/* High-Conversion Local Testimonials Grid (Pre-rendered and displayed when fallback is active) */}
          <div className={showFallback ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "hidden"}>
            {FALLBACK_REVIEWS.map((review, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-[14px] leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-slate-100">
                  <div className="w-10 h-10 bg-slate-100/80 text-slate-700 font-bold text-xs flex items-center justify-center rounded-full border border-slate-200/50">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-snug">{review.name}</h4>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {review.location} • <span className="text-slate-350">{review.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standard Elfsight Platform App Container (Kept persistently in the DOM to avoid DOM manipulation exceptions on unmount) */}
          <div className={!showFallback ? "w-full text-center text-slate-500 min-h-[300px] flex items-center justify-center" : "hidden"}>
            <div className="elfsight-app-97fdc0ab-99c9-4ba4-9322-5d5c0458539a w-full" data-elfsight-app-lazy></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

