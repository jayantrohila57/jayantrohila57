import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageChrome } from "@/components/navigation/page-chrome";
import { ScrollRestoration } from "@/components/navigation/scroll-restoration";
import { ScrollToTopButton } from "@/components/navigation/scroll-to-top-button";
import { PageColumn } from "@/components/primitives/page-column";

/** One rail column for header, main, and footer (continuous side borders). */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      <PageColumn className="flex min-h-dvh flex-1 flex-col">
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
      </PageColumn>
      <ScrollToTopButton />
    </>
  );
}
