import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  SHELL_BLEED_CLASS,
  SHELL_GUTTER_X_CLASS,
  shellSectionPadClass,
} from "./tokens";

export type SectionSpacing = "default" | "compact" | "none";

export type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Rail-to-rail top rule (default on). */
  dividerTop?: boolean;
  /** Inner padding rhythm (ignored when `bleed` — use GridCell / inset bleed for text). */
  spacing?: SectionSpacing;
  /**
   * Bleed mode: horizontal gutter wrapper only so `SectionBleed` aligns to rails.
   * Text inside bleed bands must use `GridCell` or `SectionBleed inset`.
   */
  bleed?: boolean;
};

/** Full-width band inside a section (cancel gutter to reach rails). */
export function SectionBleed({
  children,
  className,
  inset,
}: {
  children: ReactNode;
  className?: string;
  /** Wrap children in standard cell padding (text inside full-bleed media rows). */
  inset?: boolean;
}) {
  return (
    <div className={cn(SHELL_BLEED_CLASS, "box-border", className)}>
      {inset ? (
        <div className={cn(SHELL_GUTTER_X_CLASS, "py-4 md:py-6")}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}

/** Horizontal gutter wrapper for text inside a section (not page width). */
export function PageGutter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(SHELL_GUTTER_X_CLASS, className)}>{children}</div>;
}

export function SectionRule({ className }: { className?: string }) {
  return (
    <SectionBleed>
      <div
        className={cn("box-border h-px w-full shrink-0 bg-border", className)}
        aria-hidden
      />
    </SectionBleed>
  );
}

export function SectionShell({
  id,
  children,
  className,
  dividerTop = true,
  spacing = "default",
  bleed = false,
}: SectionShellProps) {
  const pad = shellSectionPadClass(spacing);

  return (
    <section id={id} className={cn("relative w-full", className)}>
      {dividerTop ? <SectionRule /> : null}
      {bleed ? (
        <div className={cn(SHELL_GUTTER_X_CLASS, "min-w-0")}>{children}</div>
      ) : (
        <div className={cn(SHELL_GUTTER_X_CLASS, pad, "min-w-0")}>{children}</div>
      )}
    </section>
  );
}
