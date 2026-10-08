import Link from "next/link";
import { EfferdRail } from "@/components/efferd-rail";
import { buttonVariants } from "@/components/ui/button";
import {
  heroHeadline,
  heroStatusLine,
  heroSupportingLine,
  siteConfig,
} from "@/config/site";
import { profile } from "@/data/portfolio";
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

/** Homepage hero — Efferd `hero-3` copy hierarchy, text-only editorial panel. */
export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <EfferdRail padding={false}>
        <div className="border-x border-border bg-background">
          <div
            className={cn(
              "mx-auto flex max-w-3xl flex-col gap-4 px-5 py-12 sm:px-6",
              "md:gap-5 md:px-8 md:py-16 lg:py-20",
            )}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {profile.title}
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
              <p className="text-balance text-lg text-foreground md:text-xl">
                {heroHeadline}
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {heroSupportingLine}
            </p>
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
              {heroStatusLine}
            </p>

            <div className="flex w-fit flex-wrap items-center gap-3 border-t border-border pt-6 md:pt-7">
              <Link
                href="/work"
                prefetch={false}
                className={cn(buttonVariants({ variant: "accent" }))}
              >
                View selected work
                <ArrowRightGlyph className="size-4" />
              </Link>
              <Link
                href={siteConfig.resumePdfPath}
                prefetch={false}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Download résumé
              </Link>
              <span className="font-mono text-[10px] text-muted-foreground">
                {siteConfig.resumeUpdatedLabel}
              </span>
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
