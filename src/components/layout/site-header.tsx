"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { CommandMenu } from "@/components/navigation/command-menu";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[padding,background,border] duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "site-container flex items-center justify-between gap-4 rounded-[var(--radius-md)] border px-4 py-3 transition-colors md:px-5",
          scrolled
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.25em] text-foreground uppercase hover:text-accent"
        >
          Jayant Rohila
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted hover:text-foreground sm:inline"
          >
            GitHub
          </Link>
          <Link
            href="/contact"
            className="hidden text-sm text-muted hover:text-foreground sm:inline"
          >
            Contact
          </Link>
          <CommandMenu />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] border border-border md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="site-container mt-2 md:hidden">
          <nav
            className="rounded-[var(--radius-md)] border border-border bg-panel p-4"
            aria-label="Mobile"
          >
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block py-1 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
