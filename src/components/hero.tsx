import Image from "next/image";
import Link from "next/link";
import { EfferdRail } from "@/components/efferd-rail";
import { buttonVariants } from "@/components/ui/button";
import { heroHeadline, siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { getProjectScreenshotPath } from "@/lib/project-media";
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

const heroScreenshot = getProjectScreenshotPath("taskflow");

/** Homepage hero — Efferd `hero-3` layout with portfolio identity and real product screenshot. */
export function PortfolioHero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        "min-h-[calc(100svh-3.5rem)] pt-10 pb-0 md:pt-14",
      )}
    >
      <EfferdRail padding={false}>
        <div className="grid gap-px border-x border-border bg-border lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 bg-background px-4 py-10 md:px-8 md:py-14">
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Product engineer
            </p>
            <div className="space-y-3">
              <h1
                className={cn(
                  "text-balance font-semibold text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]",
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

            <div className="flex w-fit flex-wrap items-center gap-3 pt-1">
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

          <div className="relative min-h-[220px] bg-surface/40 p-3 md:min-h-[320px] md:p-4 lg:min-h-full">
            <div className="relative h-full overflow-hidden border border-border bg-background">
              <Image
                src={heroScreenshot}
                alt="Taskflow — multi-tenant task and project management"
                width={1280}
                height={720}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="mt-2 px-1 font-mono text-[10px] text-muted-foreground">
              Taskflow — flagship project screenshot
            </p>
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
