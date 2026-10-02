"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Portal, PortalBackdrop } from "@/components/portal";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";

type MobileNavProps = {
  commandSlot?: React.ReactNode;
};

export function MobileNav({ commandSlot }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      {commandSlot}
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        <div
          className={cn(
            "transition-all",
            open ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          <XIcon />
        </div>
        <div
          className={cn(
            "absolute transition-all",
            open ? "scale-0 opacity-0" : "scale-100 opacity-100",
          )}
        >
          <MenuIcon />
        </div>
      </Button>
      {open && (
        <Portal>
          <PortalBackdrop />
          <div
            className={cn(
              "relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto bg-background px-4 pt-14 pb-4",
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="flex w-full flex-col gap-y-1">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg p-3 text-sm active:bg-muted dark:active:bg-muted/50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Button asChild className="w-full" variant="outline">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button asChild className="w-full" variant="accent">
                <Link href={siteConfig.resumePath} onClick={() => setOpen(false)}>
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
