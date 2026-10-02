import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionFrameProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  border?: boolean;
};

export function SectionFrame({
  id,
  children,
  className,
  border = true,
}: SectionFrameProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24",
        border && "border-t border-border",
        className,
      )}
    >
      <div className="site-container">{children}</div>
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
        "mb-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
        className,
      )}
    >
      {index} — {label}
    </p>
  );
}

export function SectionIntro({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-muted leading-relaxed">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function CrosshairMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute font-mono text-[10px] text-border select-none",
        className,
      )}
    >
      +
    </span>
  );
}

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
        "relative border border-border bg-panel/80 p-4 md:p-6",
        dominant && "bg-elevated/90",
        className,
      )}
    >
      {children}
    </div>
  );
}
