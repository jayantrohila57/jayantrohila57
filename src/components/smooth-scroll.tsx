"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ComponentType,
  type ReactNode,
} from "react";

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

type LenisRootComponent = ComponentType<{ children: ReactNode }>;

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const [LenisRoot, setLenisRoot] = useState<LenisRootComponent | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const schedule =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 1);

    const cancel =
      typeof cancelIdleCallback !== "undefined"
        ? cancelIdleCallback
        : (id: number) => window.clearTimeout(id);

    const idleId = schedule(() => {
      void import("@/components/lenis-root").then((mod) =>
        setLenisRoot(() => mod.LenisRoot),
      );
    });

    return () => cancel(idleId as number);
  }, [reducedMotion]);

  if (reducedMotion || !LenisRoot) {
    return <>{children}</>;
  }

  return <LenisRoot>{children}</LenisRoot>;
}

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
