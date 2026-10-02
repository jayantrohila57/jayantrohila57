"use client";

import { useEffect } from "react";

/** Pause page scroll while overlays (e.g. ⌘K dialog) are open. */
export function useLenisScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
