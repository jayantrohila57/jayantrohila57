"use client";

import { Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const CommandMenu = dynamic(
  () =>
    import("@/components/navigation/command-menu").then(
      (mod) => mod.CommandMenu,
    ),
  { ssr: false },
);

const MobileNav = dynamic(
  () => import("@/components/mobile-nav").then((mod) => mod.MobileNav),
  { ssr: false },
);

export function HeaderActions() {
  const commandSlot = <CommandMenu />;

  return (
    <>
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
        <Button asChild size="sm" variant="accent">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
      <MobileNav commandSlot={commandSlot} />
    </>
  );
}
