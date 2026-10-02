"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const ANCHOR_OFFSET = 88;

type LenisInstance = {
  destroy: () => void;
  raf: (time: number) => void;
  scrollTo: (
    target: HTMLElement,
    options?: { offset?: number },
  ) => void;
};

export function LenisInit() {
  const lenisRef = useRef<LenisInstance | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const schedule =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 1);

    const cancel =
      typeof cancelIdleCallback !== "undefined"
        ? cancelIdleCallback
        : (id: number) => window.clearTimeout(id);

    let rafId = 0;
    let destroyed = false;

    const idleId = schedule(() => {
      void import("lenis").then(({ default: Lenis }) => {
        if (destroyed) return;
        const lenis = new Lenis({
          lerp: 0.08,
          smoothWheel: true,
          syncTouch: false,
          respectReducedMotion: true,
        }) as LenisInstance;
        lenisRef.current = lenis;

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      });
    });

    return () => {
      destroyed = true;
      cancel(idleId as number);
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    const frame = requestAnimationFrame(() => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, { offset: -ANCHOR_OFFSET });
      } else {
        target.scrollIntoView({ block: "start" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
