"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

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
        className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4"
        aria-label="Site"
      >
        {children}
        {actions}
      </nav>
    </header>
  );
}
