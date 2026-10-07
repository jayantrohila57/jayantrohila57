import Image from "next/image";
import Link from "next/link";
import { EfferdRail } from "@/components/efferd-rail";
import { buttonVariants } from "@/components/ui/button";
import { heroHeadline, siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { getProjectHeroScreenshotPath } from "@/lib/project-media";
import { cn } from "@/lib/utils";

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

const heroProjectSlug = "taskflow";
const heroScreenshot = getProjectHeroScreenshotPath(heroProjectSlug);

/** Homepage hero — Efferd `hero-3` layout with portfolio identity and real product screenshot. */
export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <EfferdRail padding={false}>
        <div className="grid gap-px border-x border-border bg-border lg:grid-cols-2 lg:items-stretch">
          <div
            className={cn(
              "flex flex-col justify-center gap-4 bg-background px-5 py-10 sm:px-6",
              "md:gap-5 md:px-8 md:py-14 lg:py-16",
            )}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Product engineer
            </p>
            <div className="space-y-2.5 md:space-y-3">
              <h1
                className={cn(
                  "text-balance font-semibold text-4xl leading-[1.05] tracking-tight text-foreground",
                  "md:text-5xl lg:text-[3.25rem]",
                )}
              >
                {profile.name}
              </h1>
              <p className="text-balance text-lg text-muted-foreground md:text-xl">
                {heroHeadline}
              </p>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              I work across product UI, frontend architecture, typed APIs, and
              data-heavy workflows — primarily with TypeScript, React, and
              Next.js.
            </p>
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
              Next.js · React · TypeScript
            </p>

            <div className="flex w-fit flex-wrap items-center gap-3 pt-0.5">
              <Link
                href="/work"
                prefetch={false}
                className={cn(buttonVariants({ variant: "accent" }))}
              >
                View work
                <ArrowRightGlyph className="size-4" />
              </Link>
              <Link
                href={siteConfig.resumePath}
                prefetch={false}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Resume
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-muted-foreground",
                )}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-col bg-[#050505] lg:min-h-[min(32rem,70vh)]">
            <div className="relative flex min-h-[220px] flex-1 flex-col sm:min-h-[280px]">
              <div className="relative min-h-[220px] flex-1 overflow-hidden sm:min-h-[280px]">
                <Image
                  src={heroScreenshot}
                  alt="Taskflow — authentication and workspace UI"
                  width={1440}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full min-h-[220px] w-full object-cover object-left sm:min-h-[280px]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-background/40 lg:via-transparent lg:to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/50"
                  aria-hidden
                />
              </div>
              <div
                className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-background px-4 py-2.5"
              >
                <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  Taskflow — in-app sign-in & workspace
                </p>
                <Link
                  href="/work/taskflow"
                  prefetch={false}
                  className="font-mono text-[10px] text-brand hover:underline"
                >
                  Case study →
                </Link>
              </div>
            </div>
          </div>
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
