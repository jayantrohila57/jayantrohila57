"use client";

import { useEffect, useState, type ComponentType, type ReactNode } from "react";

type SmoothScrollComponent = ComponentType<{ children: ReactNode }>;

/** Loads Lenis wrapper after first paint so hero LCP is not blocked by smooth-scroll JS. */
export function DeferredSmoothScroll({ children }: { children: ReactNode }) {
  const [SmoothScroll, setSmoothScroll] = useState<SmoothScrollComponent | null>(
    null,
  );

  useEffect(() => {
    const schedule =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 1);

    const cancel =
      typeof cancelIdleCallback !== "undefined"
        ? cancelIdleCallback
        : (id: number) => window.clearTimeout(id);

    const idleId = schedule(() => {
      void import("@/components/smooth-scroll").then((mod) =>
        setSmoothScroll(() => mod.SmoothScroll),
      );
    });

    return () => cancel(idleId as number);
  }, []);

  if (!SmoothScroll) {
    return <>{children}</>;
  }

  return <SmoothScroll>{children}</SmoothScroll>;
}
