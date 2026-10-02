"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { Code2 } from "lucide-react";

type HeaderProps = {
  commandSlot?: ReactNode;
};

export function Header({ commandSlot }: HeaderProps) {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav
        className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4"
        aria-label="Site"
      >
        <div className="flex min-w-0 items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="rounded-lg px-2 py-2 hover:bg-muted/50 dark:hover:bg-muted/30"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase">
              {profile.name.split(" ")[0]}
            </span>
          </Link>
          <DesktopNav />
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Code2 className="size-3.5" />
              GitHub
            </a>
          </Button>
          {commandSlot}
          <Button asChild size="sm">
            <Link href={siteConfig.resumePath}>Resume</Link>
          </Button>
        </div>
        <MobileNav commandSlot={commandSlot} />
      </nav>
    </header>
  );
}

/** @deprecated Playground label — same as {@link Header}. */
export const SiteHeaderBlock = Header;
