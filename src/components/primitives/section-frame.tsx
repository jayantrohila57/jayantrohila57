import type { ReactNode } from "react";
import {
  PAGE_BORDERED_CELL_CLASS,
  PageGutter,
  PageRule,
} from "@/components/primitives/page-column";
import { cn } from "@/lib/cn";

/** Shared vertical padding for homepage bands (identical top/bottom). */
export const SECTION_BAND_PADDING_CLASS = "py-10 md:py-12";

type SectionFrameProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Rail-to-rail top rule (default on). */
  border?: boolean;
  /** Vertical rhythm inside the gutter. */
  spacing?: "default" | "tight" | "none";
  /** Omit horizontal gutter (child uses PageBleed only). */
  bleedContent?: boolean;
};

export function SectionFrame({
  id,
  children,
  className,
  border = true,
  spacing = "default",
  bleedContent = false,
}: SectionFrameProps) {
  const spacingClass =
    spacing === "none"
      ? ""
      : spacing === "tight"
        ? "pt-8 pb-8 md:pt-10 md:pb-10"
        : SECTION_BAND_PADDING_CLASS;

  return (
    <section id={id} className={cn("relative w-full", className)}>
      {border ? <PageRule /> : null}
      {bleedContent ? (
        /** Bleed bands need a gutter parent so `PageBleed` (-mx) aligns to column rails. */
        <PageGutter className="min-w-0">{children}</PageGutter>
      ) : (
        <PageGutter className={cn("min-w-0", spacingClass)}>{children}</PageGutter>
      )}
    </section>
  );
}

export function SectionLabel({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase",
        className,
      )}
    >
      {index} — {label}
    </p>
  );
}

export const sectionActionLinkClass =
  "font-mono text-xs tracking-wide text-link-accent hover:underline";

export const inlineBodyLinkClass =
  "font-medium text-foreground underline decoration-brand underline-offset-2 hover:text-link-accent";

export function SectionIntro({
  title,
  label,
  description,
  action,
  compact,
}: {
  title: string;
  label?: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        compact ? "mb-4 md:mb-5" : "mb-8 md:mb-10",
      )}
    >
      <div className="max-w-2xl">
        {label ? (
          <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            {label}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function SectionBandDivider() {
  return <PageRule />;
}

/** @deprecated Prefer FeatureCard / grid gap-px inside SectionFrame. */
export function BentoPanel({
  children,
  className,
  dominant,
}: {
  children: ReactNode;
  className?: string;
  dominant?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border border-border bg-background",
        PAGE_BORDERED_CELL_CLASS,
        "md:py-6",
        dominant && "bg-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
