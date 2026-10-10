import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared editorial column — one max-width and gutter for header, main, and footer. */
export const PAGE_MAX_WIDTH_CLASS = "mx-auto w-full max-w-5xl";

/** Vertical rails; use once per vertical band (header / main / footer), not per section. */
export const PAGE_COLUMN_BORDER_CLASS = "border-x border-border";

export const PAGE_GUTTER_CLASS = "px-4 md:px-6";

/** Minimum vertical padding inside bordered cells, rows, and bands. */
export const PAGE_CELL_PAD_Y_CLASS = "py-4";

/** Standard inset for any bordered cell that contains text or controls. */
export const PAGE_BORDERED_CELL_CLASS = cn(
  PAGE_GUTTER_CLASS,
  PAGE_CELL_PAD_Y_CLASS,
);

/**
 * Negate gutter padding so rules and grids span column border to border.
 * Explicit width calc avoids subpixel gaps at the right rail (esp. with overflow-x-clip).
 */
/** Negative margin only — avoid width calc that widens scrollWidth on mobile. */
export const PAGE_BLEED_CLASS =
  "relative -mx-4 max-w-none md:-mx-6";

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
      data-page-column=""
      className={cn(
        PAGE_MAX_WIDTH_CLASS,
        bordered && PAGE_COLUMN_BORDER_CLASS,
        "min-w-0 overflow-x-clip",
        className,
      )}
    >
      {children}
    </Component>
  );
}

/** Bordered grid/list cell — always re-applies rail gutter + min vertical pad. */
export function PageBorderedCell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(PAGE_BORDERED_CELL_CLASS, "min-w-0 bg-background", className)}>
      {children}
    </div>
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
  /** Wrap all children in standard gutter padding (text bands inside bleed). */
  inset,
}: {
  children: ReactNode;
  className?: string;
  inset?: boolean;
}) {
  return (
    <div className={cn(PAGE_BLEED_CLASS, "box-border", className)}>
      {inset ? (
        <div className={PAGE_BORDERED_CELL_CLASS}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}

/** Full-width horizontal rule inside the page column (border to border). */
export function PageRule({ className }: { className?: string }) {
  return (
    <PageBleed>
      <div
        className={cn("box-border h-px w-full shrink-0 bg-border", className)}
        aria-hidden
      />
    </PageBleed>
  );
}

/** Bento/grid band with rail-to-rail top edge and gap-px cell dividers. */
export function PageBleedGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <PageBleed
      className={cn(
        "grid auto-rows-fr grid-cols-1 gap-px border-t border-border bg-border",
        className,
      )}
    >
      {children}
    </PageBleed>
  );
}
