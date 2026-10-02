"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import "lenis/dist/lenis.css";

/** Offset for sticky site header when scrolling to `#` anchors */
const ANCHOR_OFFSET = 88;

const lenisOptions = {
  lerp: 0.08,
  smoothWheel: true,
  syncTouch: false,
  respectReducedMotion: true,
  stopInertiaOnNavigate: true,
  anchors: {
    offset: -ANCHOR_OFFSET,
  },
} as const;

function LenisRouteHashScroll() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    const frame = requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(target, { offset: -ANCHOR_OFFSET });
      } else {
        target.scrollIntoView({ block: "start" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  return null;
}

export function LenisRoot({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <LenisRouteHashScroll />
      {children}
    </ReactLenis>
  );
}
