import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EfferdRail } from "@/components/efferd-rail";
import {
  InterfaceWindow,
  TerminalWindow,
} from "@/components/primitives/interface-window";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { ArrowRightIcon } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-4 md:pt-14 md:pb-8">
      <EfferdRail>
        <div className="relative z-10 flex max-w-2xl flex-col gap-5 px-4 pt-4 pb-8">
          <Link
            href="/about"
            className={cn(
              "group flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow-xs",
            )}
          >
            <div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
              <p className="font-mono text-xs">NOW</p>
            </div>
            <span className="text-xs text-muted-foreground">
              {profile.publicHeadline}
            </span>
            <span className="block h-5 border-l" />
            <ArrowRightIcon
              className="size-3 pr-1 duration-150 ease-out group-hover:translate-x-0.5"
            />
          </Link>

          <h1
            className={cn(
              "text-balance font-semibold text-4xl leading-[0.95] tracking-tight md:text-6xl",
            )}
          >
            {profile.name.split(" ").join(" ")}
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base md:text-lg">
            {profile.shortBio}
          </p>
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
            {profile.metadataLine}
          </p>

          <div className="flex w-fit flex-wrap items-center gap-3 pt-2">
            <Button asChild variant="default">
              <Link href="/work">
                View work
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={siteConfig.resumePath}>Resume</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-border bg-surface/40 p-2 md:p-3">
          <div className="grid gap-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
            <InterfaceWindow title="apps/" className="h-full">
              <div className="space-y-1 text-muted-foreground">
                <div>/apps</div>
                <div className="pl-2">web</div>
                <div className="pl-2">dashboard</div>
                <div>/packages</div>
                <div className="pl-2">ui</div>
                <div className="pl-2">config</div>
              </div>
            </InterfaceWindow>
            <InterfaceWindow title="page.tsx" className="h-full">
              <pre className="overflow-x-auto text-[10px] leading-relaxed text-muted-foreground">
                {`export default function Home() {
  return (
    <ProductShell>
      <DataTable rows={orders} />
    </ProductShell>
  );
}`}
              </pre>
            </InterfaceWindow>
            <TerminalWindow
              lines={[
                "$ git status",
                "● main",
                "2 files changed",
                "$ pnpm dev",
                "ready — local workspace (illustration)",
              ]}
            />
          </div>
          <p className="border-t border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">
            Workspace composition — representative layout, not a live terminal.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border px-4 py-4 font-mono text-[10px] tracking-wider text-muted-foreground">
          {profile.heroStrip.map((tech, i) => (
            <span key={tech} className="flex items-center gap-4">
              {i > 0 ? (
                <span aria-hidden className="hidden text-border sm:inline">
                  /
                </span>
              ) : null}
              {tech}
            </span>
          ))}
        </div>
      </EfferdRail>
    </section>
  );
}

/** Placeholder hero for `/playground/efferd` — not used on live routes. */
export function EfferdHeroDemo() {
  return (
    <section className="mx-auto w-full max-w-5xl overflow-hidden pt-16">
      <div className="relative z-10 flex max-w-2xl flex-col gap-5 px-4">
        <p className="font-mono text-xs text-muted-foreground">
          @efferd/hero-3 demo shell (live site uses PortfolioHero)
        </p>
        <h1 className="font-medium text-4xl md:text-5xl">Block preview</h1>
      </div>
    </section>
  );
}

/** @deprecated Use PortfolioHero on site routes. */
export const HeroSection = EfferdHeroDemo;
