"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site.config";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "grid grid-cols-[0%_0.5rem_1fr_0.5rem_0%]  md:grid-cols-[15%_2.5rem_1fr_2.5rem_15%] grid-rows-[1px_1fr_1px]",
          "relative  w-full  bg-white [--pattern-fg:var(--color-black)]/10 dark:bg-background dark:[--pattern-fg:var(--color-white)]/10  z-50 w-full  bg-muted/30 backdrop-blur-xl supports-[backdrop-filter]:bg-muted",
        )}
      >
        <div className="col-start-3 row-start-2 grid w-[100%] bg-card/30 p-2">
          <div className="rounded-md bg-muted/30 pr-auto col-span-1 h-16 w-full p-4 flex flex-row items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center w-full   gap-2 text-xl font-bold transition-colors hover:text-primary"
            >
              <span>{siteConfig.logo.text}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center   w-full gap-1 md:flex">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 md:flex">
              <ThemeToggle />
              <Button asChild size="sm">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5" />
                      {siteConfig.name}
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-8 flex flex-col gap-1">
                    {siteConfig.navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-8 border-t pt-6">
                    <Button asChild className="w-full">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Get in Touch
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="relative -top-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
        <div className="relative col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
      </div>
    </header>
  );
}
