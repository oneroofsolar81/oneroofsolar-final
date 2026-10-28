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
  }, []);

  return null;
}

export default ChatWidget;
