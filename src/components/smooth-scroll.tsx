"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import "lenis/dist/lenis.css";

/** Offset for sticky site header when scrolling to `#` anchors */
const ANCHOR_OFFSET = 88;

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

/** Scroll to hash on load / client navigations (App Router). */
function LenisRouteHashScroll() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const scrollNative = () => {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ block: "start" });
    };

    if (!lenis) {
      scrollNative();
      return;
    }

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    const frame = requestAnimationFrame(() => {
      lenis.scrollTo(target, { offset: -ANCHOR_OFFSET });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  return null;
}

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

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <LenisRouteHashScroll />
      {children}
    </ReactLenis>
  );
}

/** Pause Lenis while overlays (e.g. ⌘K dialog) are open so wheel/scroll stays on the modal. */
export function useLenisScrollLock(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (!locked) return;
    lenis.stop();
    return () => {
      lenis.start();
    };
  }, [locked, lenis]);
}
