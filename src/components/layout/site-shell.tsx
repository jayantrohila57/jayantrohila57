import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MainShell } from "@/components/layout/shells";
import { PageChrome } from "@/components/navigation/page-chrome";
import { ScrollRestoration } from "@/components/navigation/scroll-restoration";
import { ScrollToTopButton } from "@/components/navigation/scroll-to-top-button";

/** Site chrome: MainShell + header, main, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      <MainShell>
        <SiteHeader />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex min-w-0 flex-1 flex-col overflow-x-clip"
        >
          <PageChrome />
          {children}
        </main>
        <SiteFooter />
      </MainShell>
      <ScrollToTopButton />
    </>
  );
}
