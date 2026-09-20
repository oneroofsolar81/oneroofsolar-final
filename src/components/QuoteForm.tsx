import React, { useEffect, useRef } from "react";

interface QuoteFormProps {
  title?: string;
  responseNote?: string;
  defaultInterest?: string;
  className?: string;
  source?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  title = "Get Your Free Quote",
  responseNote = "Response within 2 business hours",
  className = "",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure form_embed.js script is loaded and active
    const scriptSrc = "https://api.oneroofsolar.com.au/js/form_embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className={`rounded-[28px] sm:rounded-[32px] bg-[#101726] border border-[#1e293b]/70 px-5 py-5 sm:px-7 sm:py-6 shadow-2xl shadow-black/80 relative overflow-hidden text-white font-['Inter',sans-serif] ${className}`}
    >
      {/* Top-right dark olive-forest green accent */}
      <div 
        className="w-36 h-36 sm:w-44 sm:h-44 bg-[#1b2e23] rounded-bl-full absolute top-0 right-0 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10">
        {/* Header with compact margins */}
        <div className="mb-3.5 sm:mb-4">
          <h3 className="text-xl sm:text-[26px] font-black text-white tracking-tight leading-tight normal-case">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f] shrink-0" />
            <span className="text-[#8dc63f] font-bold text-xs sm:text-sm">
              {responseNote}
            </span>
          </div>
        </div>

        {/* Connected CRM Form Iframe with balanced length */}
        <div className="w-full relative bg-transparent rounded-xl overflow-hidden" style={{ minHeight: "480px" }}>
          <iframe
            ref={iframeRef}
            src="https://api.oneroofsolar.com.au/widget/form/3uXInokjWftJSJgePj2x"
            style={{ width: "100%", height: "480px", border: "none", borderRadius: "8px", minHeight: "480px" }}
            id="inline-3uXInokjWftJSJgePj2x" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Us "
            data-height="480"
            data-layout-iframe-id="inline-3uXInokjWftJSJgePj2x"
            data-form-id="3uXInokjWftJSJgePj2x"
            title="Contact Us "
          />
        </div>

        {/* Privacy Note */}
        <p className="text-center text-xs sm:text-[13px] text-[#64748b] font-medium pt-2 pb-0.5">
          Your details are private and never shared
        </p>
      </div>
    </div>
  );
};

export default QuoteForm;
