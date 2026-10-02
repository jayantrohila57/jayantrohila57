"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { moreNav, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-site-border bg-site-paper/95 backdrop-blur-sm">
      <div className="site-container flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-site-accent"
        >
          <span className="font-display text-lg font-medium tracking-tight text-site-ink">
            Jayant Rohila
          </span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-widest text-site-muted sm:inline">
            Product engineer
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "font-medium text-site-ink"
                  : "text-site-muted hover:text-site-ink",
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm text-site-muted hover:text-site-ink"
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
              <ChevronDown
                className={cn("size-3.5 transition-transform", moreOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {moreOpen ? (
              <div
                role="menu"
                className="absolute right-0 top-full mt-1 min-w-[14rem] border border-site-border bg-site-paper py-1 shadow-sm"
              >
                {moreNav.map((item) => (
                  <Link
                    key={item.href}
                    role="menuitem"
                    href={item.href}
                    className="block px-4 py-2 text-sm text-site-muted hover:bg-site-surface hover:text-site-ink"
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-site-border p-2 text-site-ink md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-site-border md:hidden"
          aria-label="Mobile"
        >
          <ul className="site-container divide-y divide-site-border py-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-3 text-sm",
                    isActive(item.href)
                      ? "font-medium text-site-ink"
                      : "text-site-muted",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <p className="py-2 font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
                More
              </p>
              <ul>
                {moreNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-sm text-site-muted"
                      {...(item.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
