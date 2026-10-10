"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { headerIconButtonClass } from "@/components/layout/header-icon-button";
import { Portal, PortalBackdrop } from "@/components/portal";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  githubSlot?: React.ReactNode;
  contactSlot?: React.ReactNode;
  commandSlot?: React.ReactNode;
};

export function MobileNav({
  githubSlot,
  contactSlot,
  commandSlot,
}: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      {githubSlot}
      {commandSlot}
      {contactSlot}
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
        className={cn(headerIconButtonClass, "relative")}
      >
        <div
          className={cn(
            "transition-all",
            open ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          <XIcon aria-hidden />
        </div>
        <div
          className={cn(
            "absolute transition-all",
            open ? "scale-0 opacity-0" : "scale-100 opacity-100",
          )}
        >
          <MenuIcon aria-hidden />
        </div>
      </Button>
      {open && (
        <Portal>
          <PortalBackdrop />
          <div
            className={cn(
              "lenis-prevent relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto bg-background px-4 pt-14 pb-4",
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
            )}
            data-slot={open ? "open" : "closed"}
            id="mobile-menu"
            data-lenis-prevent=""
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
            <div className="mt-6 border-t border-border pt-6">
              <Button asChild variant="accent" className="w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
