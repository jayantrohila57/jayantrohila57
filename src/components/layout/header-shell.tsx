"use client";

import type { ReactNode } from "react";
import { SHELL_GUTTER_X_CLASS } from "@/components/layout/shells";
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
          SHELL_GUTTER_X_CLASS,
          "flex min-h-14 w-full items-center justify-between py-4",
        )}
        aria-label="Site"
      >
        {children}
        {actions}
      </nav>
    </header>
  );
}
