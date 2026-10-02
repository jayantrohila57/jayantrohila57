import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { EfferdRail } from "@/components/efferd-rail";
import {
  InterfaceWindow,
  TerminalWindow,
} from "@/components/primitives/interface-window";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
function ArrowRightGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-10 pb-4 md:pt-14 md:pb-8">
      <EfferdRail>
        <div className="relative z-10 flex max-w-2xl flex-col gap-5 px-4 pt-4 pb-8">
          <h1
            className={cn(
              "text-balance font-semibold text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl",
            )}
          >
            {profile.name.split(" ").join(" ")}
          </h1>

          <Link
            href="/about"
            prefetch={false}
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
            <ArrowRightGlyph
              className="size-3 pr-1 duration-150 ease-out group-hover:translate-x-0.5"
            />
          </Link>

          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base md:text-lg">
            {profile.shortBio}
          </p>
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
            {profile.metadataLine}
          </p>

          <div className="flex w-fit flex-wrap items-center gap-3 pt-2">
            <Link
              href="/work"
              prefetch={false}
              className={cn(buttonVariants({ variant: "accent" }))}
            >
              View work
              <ArrowRightGlyph className="size-4" />
            </Link>
            <Link
              href="/contact"
              prefetch={false}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Contact
            </Link>
            <Link
              href={siteConfig.resumePath}
              prefetch={false}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="hidden border-t border-border bg-surface/40 p-2 md:block md:p-3">
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

        <div className="flex min-w-0 flex-wrap gap-x-4 gap-y-2 border-t border-border px-4 py-4 font-mono text-xs tracking-wider text-muted-foreground">
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
