"use client";

import type { ReactNode } from "react";
import { PAGE_GUTTER_CLASS } from "@/components/primitives/page-column";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

type HeaderShellProps = {
  children: ReactNode;
  actions: ReactNode;
};

/** Sticky chrome; mobile always shows border/bg, desktop toggles on scroll. */
export function HeaderShell({ children, actions }: HeaderShellProps) {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background",
        "md:border-transparent md:bg-transparent md:backdrop-blur-none",
        scrolled &&
          "md:border-border md:bg-background/95 md:backdrop-blur-sm md:supports-backdrop-filter:bg-background/50",
      )}
    >
      <nav
        className={cn(
          PAGE_GUTTER_CLASS,
          "flex h-14 w-full items-center justify-between",
        )}
        aria-label="Site"
      >
        {children}
        {actions}
      </nav>
    </header>
  );
}
