import { cn } from "@/lib/cn";

/** Single source for page width and rails — only MainShell applies these. */
export const SHELL_MAX_WIDTH_CLASS = "mx-auto w-full max-w-5xl";
export const SHELL_RAILS_CLASS = "border-x border-border";

/** Horizontal gutter (matches rail inset for text). */
export const SHELL_GUTTER_X_CLASS = "px-4 md:px-6";

/** Negate gutter so bands span rail to rail (must be inside a gutter wrapper). */
export const SHELL_BLEED_CLASS = "relative -mx-4 max-w-none md:-mx-6";

/** Section vertical padding */
export const SHELL_SECTION_PAD_DEFAULT = "py-8 md:py-12";
export const SHELL_SECTION_PAD_COMPACT = "py-8 md:py-10";

/** Minimum vertical padding inside legacy bordered rows (prefer GridCell). */
export const SHELL_CELL_PAD_Y_CLASS = "py-4";

/** @deprecated Use SHELL_CELL_PAD_Y_CLASS */
export const PAGE_CELL_PAD_Y_CLASS = SHELL_CELL_PAD_Y_CLASS;

/** Bordered grid / list cells */
export const SHELL_CELL_CLASS = "bg-background p-4 md:p-6 min-w-0";

export function pageColumnClassName(className?: string) {
  return cn(SHELL_MAX_WIDTH_CLASS, SHELL_RAILS_CLASS, "min-w-0", className);
}

export const shellSectionPadClass = (spacing: "default" | "compact" | "none") =>
  spacing === "none"
    ? ""
    : spacing === "compact"
      ? SHELL_SECTION_PAD_COMPACT
      : SHELL_SECTION_PAD_DEFAULT;

export function shellGutterClassName(className?: string) {
  return cn(SHELL_GUTTER_X_CLASS, className);
}

export function shellCellClassName(className?: string) {
  return cn(SHELL_CELL_CLASS, className);
}
