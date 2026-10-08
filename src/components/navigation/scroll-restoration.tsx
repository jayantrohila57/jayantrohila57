"use client";

import { useEffect } from "react";
import { scrollToHash, scrollToTop } from "@/lib/lenis-controller";

/** Prevent the browser from restoring scroll across full reloads; hash routes still anchor. */
export function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const onPopState = () => {
      const hash = window.location.hash;
      requestAnimationFrame(() => {
        if (hash) {
          scrollToHash(hash, { immediate: true });
        } else {
          scrollToTop({ immediate: true });
        }
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
}
