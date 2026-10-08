import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageChrome } from "@/components/navigation/page-chrome";
import { ScrollRestoration } from "@/components/navigation/scroll-restoration";
import { ScrollToTopButton } from "@/components/navigation/scroll-to-top-button";
import { PageColumn } from "@/components/primitives/page-column";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-w-0 flex-1 overflow-x-clip"
      >
        <PageColumn className="flex flex-col">
          <PageChrome />
          {children}
        </PageColumn>
      </main>
      <SiteFooter />
      <ScrollToTopButton />
    </>
  );
}
