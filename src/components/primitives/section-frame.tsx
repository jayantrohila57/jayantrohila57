import type { ReactNode } from "react";
import {
  ContentShell,
  SectionRule,
  SectionShell,
  type SectionSpacing,
} from "@/components/layout/shells";
import { cn } from "@/lib/cn";

/** @deprecated Use SHELL_SECTION_PAD_DEFAULT from shells */
export const SECTION_BAND_PADDING_CLASS = "py-8 md:py-12";

type SectionFrameProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  border?: boolean;
  spacing?: "default" | "tight" | "none";
  bleedContent?: boolean;
};

/** @deprecated Prefer SectionShell */
export function SectionFrame({
  id,
  children,
  className,
  border = true,
  spacing = "default",
  bleedContent = false,
}: SectionFrameProps) {
  const shellSpacing: SectionSpacing =
    spacing === "tight" ? "compact" : spacing;

  return (
    <SectionShell
      id={id}
      className={className}
      dividerTop={border}
      spacing={shellSpacing}
      bleed={bleedContent}
    >
      {children}
    </SectionShell>
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

/** @deprecated Prefer ContentShell */
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
    <ContentShell
      eyebrow={label}
      title={title}
      description={description}
      action={action}
      variant={compact ? "compact" : "section"}
    />
  );
}

export function SectionBandDivider() {
  return <SectionRule />;
}

/** @deprecated Use GridCell inside GridShell */
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
        "relative border border-border bg-background p-4 md:p-6",
        dominant && "bg-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
