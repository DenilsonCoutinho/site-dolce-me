"use client";

import { useEffect } from "react";

const PIXEL_ID = "1406477116204253";

export default function MetaPixel() {
  useEffect(() => {
    if (!window.fbq) {
      const fbq = function () {
        if (fbq.callMethod) {
          fbq.callMethod.apply(fbq, arguments);
        } else {
          fbq.queue.push(arguments);
        }
      };

      window.fbq = fbq;
      if (!window._fbq) window._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    if (!window.__dolceMetaPixelInitialized) {
      window.fbq("init", PIXEL_ID);
      window.__dolceMetaPixelInitialized = true;
    }
    window.fbq("track", "PageView");
  }, []);

  return null;
}
