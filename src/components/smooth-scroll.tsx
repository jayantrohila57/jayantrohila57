"use client";

import { getLenis, setLenisScrollLocked } from "@/lib/lenis-controller";
import { useEffect } from "react";

/** Pause Lenis (or body scroll fallback) while overlays are open. */
export function useLenisScrollLock(locked: boolean) {
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      setLenisScrollLocked(locked);
      return () => setLenisScrollLocked(false);
    }

    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
