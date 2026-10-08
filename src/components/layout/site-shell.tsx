import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageColumn } from "@/components/primitives/page-column";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-w-0 flex-1 overflow-x-clip"
      >
        <PageColumn className="flex flex-col">{children}</PageColumn>
      </main>
      <SiteFooter />
    </>
  );
}
