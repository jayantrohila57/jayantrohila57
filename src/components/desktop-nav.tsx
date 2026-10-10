"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

function isNavActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/work")) {
    return pathname === "/work" || pathname.startsWith("/work/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = isNavActive(item.href, pathname);

  return (
    <Link
      href={item.href}
      prefetch={false}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-muted/60 font-medium text-foreground dark:bg-muted/40"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground dark:hover:bg-muted/30",
      )}
    >
      {item.label}
    </Link>
  );
}

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
      {mainNav.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  );
}
