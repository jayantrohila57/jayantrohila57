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

    let rafId = 0;
    let destroyed = false;

    const startLenis = () => {
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
    };

    const idleId =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(startLenis, { timeout: 3000 })
        : window.setTimeout(startLenis, 1500);

    return () => {
      destroyed = true;
      if (typeof cancelIdleCallback !== "undefined") {
        cancelIdleCallback(idleId as number);
      } else {
        window.clearTimeout(idleId as number);
      }
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
