import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared editorial column — one max-width and gutter for header, main, and footer. */
export const PAGE_MAX_WIDTH_CLASS = "mx-auto w-full max-w-5xl";

/** Vertical rails; use once per vertical band (header / main / footer), not per section. */
export const PAGE_COLUMN_BORDER_CLASS = "border-x border-border";

export const PAGE_GUTTER_CLASS = "px-4 md:px-6";

/** Negate gutter padding so rules and grids span column border to border. */
export const PAGE_BLEED_CLASS = "-mx-4 md:-mx-6";

export function pageColumnClassName(className?: string) {
  return cn(
    PAGE_MAX_WIDTH_CLASS,
    PAGE_COLUMN_BORDER_CLASS,
    "min-w-0",
    className,
  );
}

type PageColumnProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** When false, omit side borders (nested inside an existing column). */
  bordered?: boolean;
};

export function PageColumn({
  children,
  className,
  as: Component = "div",
  bordered = true,
}: PageColumnProps) {
  return (
    <Component
      className={cn(
        PAGE_MAX_WIDTH_CLASS,
        bordered && PAGE_COLUMN_BORDER_CLASS,
        "min-w-0",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function PageGutter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(PAGE_GUTTER_CLASS, className)}>{children}</div>;
}

export function PageBleed({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(PAGE_BLEED_CLASS, "min-w-0 w-auto", className)}>
      {children}
    </div>
  );
}

/** Full-width horizontal rule inside the page column (border to border). */
export function PageRule({ className }: { className?: string }) {
  return (
    <PageBleed>
      <div
        className={cn("h-px w-full shrink-0 bg-border", className)}
        aria-hidden
      />
    </PageBleed>
  );
}
