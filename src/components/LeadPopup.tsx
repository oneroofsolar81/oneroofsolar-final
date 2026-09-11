import { useState, useEffect, useRef } from "react";
import { X, Zap, ShieldCheck, Banknote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { safeStorage } from "../lib/storage";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const exitIntentFiredRef = useRef(false);
  const isOpenRef = useRef(isOpen);
  
  isOpenRef.current = isOpen;

  useEffect(() => {
    // Reset exit intent for each new page visit
    exitIntentFiredRef.current = false;
    
    const isHomePage = pathname === "/";
    let timer: NodeJS.Timeout | null = null;

    // Home page 10s timer logic
    if (isHomePage && !safeStorage.getSession("hasSeenLeadPopup10s")) {
      timer = setTimeout(() => {
        if (!safeStorage.getSession("hasSeenLeadPopup10s")) {
          setIsOpen(true);
          safeStorage.setSession("hasSeenLeadPopup10s", "true");
        }
      }, 10000);
    }

    // Exit intent logic (for all pages)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentFiredRef.current && !isOpenRef.current) {
        setIsOpen(true);
        exitIntentFiredRef.current = true;
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.start();
      }
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={closeModal}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-md"
          />

          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 260, mass: 0.9 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 flex flex-col lg:flex-row overflow-hidden my-8 isolate"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 lg:top-4 lg:right-4 z-50 w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/95 text-slate-900 hover:bg-white hover:rotate-90 transition-all duration-300 shadow-lg ring-1 ring-black/10"
                aria-label="Close"
              >
                <X size={18} className="lg:w-5 lg:h-5" />
              </button>

              {/* Left Side - Visual Focus */}
              <div className="relative hidden w-full lg:w-1/2 p-6 sm:p-8 lg:p-14 lg:flex flex-col justify-center overflow-hidden bg-neutral-950 text-white min-h-[320px] lg:min-h-[400px]">
                {/* Background Image / Texture */}
                <div 
                  className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: "url('/assets/images/home/home-premium-aerial.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/30 pointer-events-none" />
                
                {/* Glowing Orbs */}
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-yellow-500 rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-brand-500 rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen" />

                <div className="relative z-10 flex flex-col h-full justify-center">
                  {/* Logo */}
                  <div className="mb-4 lg:mb-6 relative">
                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
                    <img referrerPolicy="no-referrer" 
                      src="/assets/images/home/logo-oneroof.png" 
                      alt="Oneroof Solar Logo" 
                      className="h-[50px] lg:h-[70px] w-auto max-w-none opacity-100 drop-shadow-lg relative z-10"
                      width={242}
                      height={70}
                    />
                  </div>

                  <div className="relative z-10 max-w-[520px] [overflow-wrap:normal] [word-break:normal]">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 text-xs lg:text-sm font-semibold mb-3 lg:mb-4 shadow-[0_0_20px_rgba(234,179,8,0.15)] ring-1 ring-yellow-500/30 font-['Inter',sans-serif]">
                      <Zap size={16} className="text-yellow-400 animate-pulse" />
                      <span className="text-yellow-50">Limited Time Offer</span>
                    </div>
                    
                    <h2 className="font-['Inter',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-black tracking-tight mb-3 lg:mb-4 leading-[1.1] drop-shadow-2xl max-w-[520px] [overflow-wrap:normal] [word-break:normal]">
                      <span className="text-white">Claim Your</span>{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-sm inline-block max-w-full py-0.5">
                        $13,000 Rebate
                      </span>
                      <span className="text-white text-xl sm:text-2xl lg:text-3xl mt-1.5 block font-extrabold tracking-tight">
                        on Solar and Battery
                      </span>
                    </h2>
                    
                    <p className="font-['Inter',sans-serif] text-sm lg:text-base text-neutral-200 mb-5 lg:mb-6 leading-relaxed max-w-[480px] font-medium [overflow-wrap:normal] [word-break:normal]">
                      Switch to premium solar and battery storage. Lock in lower energy bills and secure your government rebate today.
                    </p>

                    <div className="space-y-3.5 lg:space-y-4">
                      <div className="flex items-center gap-4 lg:gap-5 group">
                        <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 flex items-center justify-center border border-yellow-500/30 shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:scale-105 transition-transform duration-300">
                          <Banknote className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="font-['Inter',sans-serif] font-bold text-white text-base lg:text-lg tracking-wide">Free Savings Estimate</h4>
                          <p className="font-['Inter',sans-serif] text-xs lg:text-sm text-neutral-300 font-medium">See exactly how much you can save</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 lg:gap-5 group">
                        <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 flex items-center justify-center border border-yellow-500/30 shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:scale-105 transition-transform duration-300">
                          <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="font-['Inter',sans-serif] font-bold text-white text-base lg:text-lg tracking-wide">Premium Tier-1 Tech</h4>
                          <p className="font-['Inter',sans-serif] text-xs lg:text-sm text-neutral-300 font-medium">Industry-leading panels & batteries</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-8 text-[10px] leading-relaxed text-neutral-400/80 max-w-sm font-['Inter',sans-serif]">
                      Terms and conditions apply. <br/>
                      Estimated rebates are calculated using a 48 kWh battery and a 20 kW solar PV system. Actual rebates are subject to eligibility, program terms, and government approval.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full lg:w-1/2 bg-neutral-950 flex flex-col justify-center px-4 py-8 sm:px-6 lg:p-12 relative overflow-hidden text-white">
                <div 
                  className="absolute inset-0 opacity-60 pointer-events-none"
                  style={{
                    backgroundImage: "url('/assets/images/home/home-project-bayview.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-neutral-950/70 pointer-events-none backdrop-blur-md" />
                <div className="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />
                
                <div className="text-center mb-6 lg:mb-8 relative z-10">
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">Check Eligibility</h3>
                  <p className="text-neutral-300 mt-2 font-medium">Takes less than 60 seconds</p>
                </div>
                
                <div className="w-full relative bg-transparent rounded-xl overflow-hidden" style={{ minHeight: "720px" }}>
                  <iframe
                    src="https://api.oneroofsolar.com.au/widget/form/XVgkuW5m65fGTA1nDLGD"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px", minHeight: "720px", overflow: "hidden" }}
                    scrolling="no"
                    title="Check Eligibility Form"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
