import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { HeaderActions } from "@/components/layout/header-actions";
import { HeaderShell } from "@/components/layout/header-shell";
import { profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <HeaderShell actions={<HeaderActions />}>
        <div className="flex min-w-0 items-center gap-4 md:gap-6">
          <Link
            href="/"
            prefetch={false}
            className="rounded-lg px-2 py-2 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:bg-muted/30"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase">
              {profile.name.split(" ")[0]}
            </span>
          </Link>
          <DesktopNav />
        </div>
      </HeaderShell>
    </>
  );
}
