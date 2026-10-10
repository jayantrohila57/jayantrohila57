"use client";

import {
  ANCHOR_SCROLL_OFFSET,
  registerLenis,
  notifyScrollPosition,
  scrollToHash,
  scrollToTop,
  type LenisController,
} from "@/lib/lenis-controller";
import { shouldLenisPreventScroll } from "@/lib/lenis-prevent";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function parseInPageHash(href: string): string | null {
  if (href.startsWith("#")) return href;
  try {
    const url = new URL(href, window.location.origin);
    if (url.pathname === window.location.pathname && url.hash) {
      return url.hash;
    }
  } catch {
    return null;
  }
  return null;
}

export function LenisInit() {
  const lenisRef = useRef<LenisController | null>(null);
  const pathname = usePathname();
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = motion.matches;

    const onMotionChange = () => {
      prefersReducedMotion.current = motion.matches;
      if (motion.matches) {
        lenisRef.current?.destroy();
        lenisRef.current = null;
        registerLenis(null);
      } else if (!lenisRef.current) {
        bootLenis();
      }
    };

    motion.addEventListener("change", onMotionChange);

    let rafId = 0;
    let destroyed = false;

    function bootLenis() {
      if (destroyed || prefersReducedMotion.current) return;

      void import("lenis").then(({ default: Lenis }) => {
        if (destroyed || prefersReducedMotion.current) return;

        const lenis = new Lenis({
          lerp: 0.08,
          smoothWheel: true,
          syncTouch: false,
          autoResize: true,
          respectReducedMotion: true,
          allowNestedScroll: true,
          prevent: (node) =>
            node instanceof HTMLElement && shouldLenisPreventScroll(node),
        }) as LenisController;

        lenisRef.current = lenis;
        registerLenis(lenis);

        lenis.on("scroll", ({ scroll }: { scroll: number }) => {
          notifyScrollPosition(scroll);
        });

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        const hash = window.location.hash;
        if (hash) {
          requestAnimationFrame(() => scrollToHash(hash));
        }
      });
    }

    if (!motion.matches) {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(() => bootLenis(), { timeout: 1200 });
      } else {
        window.setTimeout(bootLenis, 50);
      }
    }

    const onDocumentClick = (event: MouseEvent) => {
      if (prefersReducedMotion.current) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const hash = parseInPageHash(href);
      if (!hash) return;

      event.preventDefault();
      if (history.pushState) {
        history.pushState(null, "", hash);
      } else {
        window.location.hash = hash;
      }
      scrollToHash(hash);
    };

    document.addEventListener("click", onDocumentClick);

    const onNativeScroll = () => {
      if (!lenisRef.current) {
        notifyScrollPosition(window.scrollY);
      }
    };
    window.addEventListener("scroll", onNativeScroll, { passive: true });

    return () => {
      destroyed = true;
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("scroll", onNativeScroll);
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      registerLenis(null);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const lenis = lenisRef.current;

    requestAnimationFrame(() => {
      lenis?.resize();
      if (hash) {
        scrollToHash(hash, { immediate: true });
        return;
      }
      scrollToTop({ immediate: true });
    });
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) scrollToHash(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
