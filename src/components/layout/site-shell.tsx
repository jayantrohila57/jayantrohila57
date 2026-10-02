import type { ReactNode } from "react";
import { SiteFooterLazy } from "@/components/layout/site-footer-lazy";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooterLazy />
    </>
  );
}
