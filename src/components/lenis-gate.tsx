"use client";

import dynamic from "next/dynamic";

const LenisInit = dynamic(
  () => import("@/components/lenis-init").then((mod) => mod.LenisInit),
  { ssr: false },
);

/** Site-wide Lenis smooth scroll (disabled when prefers-reduced-motion). */
export function LenisGate() {
  return <LenisInit />;
}
