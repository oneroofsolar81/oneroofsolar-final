import { useEffect } from "react";

const WIDGET_ID = "6acb957badba9fb18c1cdfbc";
const LOCATION_ID = "eoX75jhLRsIm2LAPvFNM";
const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";

/**
 * LeadConnector (GoHighLevel) floating chat widget, injected once site-wide.
 * Renders nothing in React; it appends the widget mount node and loader script
 * to <body> on first mount and guards against duplicates on re-render/navigation.
 */
export function ChatWidget() {
  useEffect(() => {
    let done = false;

    const inject = () => {
      if (done) return;
      done = true;

      // Mount node the loader looks for
      if (!document.querySelector(`div[data-chat-widget][data-widget-id="${WIDGET_ID}"]`)) {
        const mount = document.createElement("div");
        mount.setAttribute("data-chat-widget", "");
        mount.setAttribute("data-widget-id", WIDGET_ID);
        mount.setAttribute("data-location-id", LOCATION_ID);
        document.body.appendChild(mount);
      }

      // Loader script (load once)
      if (!document.querySelector(`script[src="${LOADER_SRC}"]`)) {
        const script = document.createElement("script");
        script.src = LOADER_SRC;
        script.async = true;
        script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
        script.setAttribute("data-widget-id", WIDGET_ID);
        document.body.appendChild(script);
      }
    };

    // Defer the heavy third-party chat loader until the page is interactive:
    // first user interaction, or idle, whichever comes first.
    const events: (keyof WindowEventMap)[] = ["pointerdown", "mousemove", "touchstart", "keydown", "scroll"];
    const fire = () => {
      events.forEach((e) => window.removeEventListener(e, fire));
      inject();
    };
    events.forEach((e) => window.addEventListener(e, fire, { passive: true, once: true }));

    const w = window as typeof window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(inject, { timeout: 6000 });
    } else {
      timeoutId = window.setTimeout(inject, 5000);
    }

    return () => {
      events.forEach((e) => window.removeEventListener(e, fire));
      if (timeoutId) window.clearTimeout(timeoutId);
      const cancel = (window as typeof window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
      if (idleId !== undefined && typeof cancel === "function") cancel(idleId);
    };
  }, []);

  return null;
}

export default ChatWidget;
