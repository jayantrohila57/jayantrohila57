"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const LenisInit = dynamic(
  () => import("@/components/lenis-init").then((mod) => mod.LenisInit),
  { ssr: false },
);

/** Skip Lenis on `/` so the home LCP path stays lean. */
export function LenisGate() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <LenisInit />;
}
