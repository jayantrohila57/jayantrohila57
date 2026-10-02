import type { ReactNode } from "react";
import { EfferdRail } from "@/components/efferd-rail";
import { cn } from "@/lib/cn";

type SectionFrameProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Top border between major bands (default on). */
  border?: boolean;
  /** Side rails aligned to header/footer (default on). */
  rail?: boolean;
  /** Vertical rhythm — default matches all live pages. */
  spacing?: "default" | "tight" | "none";
};

export function SectionFrame({
  id,
  children,
  className,
  border = true,
  rail = true,
  spacing = "default",
}: SectionFrameProps) {
  const spacingClass =
    spacing === "none"
      ? "py-0"
      : spacing === "tight"
        ? "py-8 md:py-10"
        : "py-12 md:py-16";

  return (
    <section
      id={id}
      className={cn(
        "relative",
        spacingClass,
        border && "border-t border-border",
        className,
      )}
    >
      {rail ? <EfferdRail>{children}</EfferdRail> : children}
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

/** Mono action links in section headers (visible green on dark). */
export const sectionActionLinkClass =
  "font-mono text-xs tracking-wide text-link-accent hover:underline";

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
  return (
    <div className="border-t border-border py-2">
      <EfferdRail bordered={false} className="px-0">
        <div className="h-px w-full bg-border" aria-hidden />
      </EfferdRail>
    </div>
  );
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
        "relative border border-border bg-background p-4 md:p-6",
        dominant && "bg-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
