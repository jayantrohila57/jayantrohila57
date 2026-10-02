import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
