import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Timeline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative space-y-0", className)}>
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-px bg-border"
      />
      {children}
    </div>
  );
}

export function TimelineItem({
  period,
  title,
  subtitle,
  summary,
  highlights,
  technologies,
  className,
}: {
  period: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights?: string[];
  technologies?: string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative border-b border-border-subtle py-8 pl-8 last:border-b-0",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute top-9 left-0 size-[15px] rounded-full border border-border bg-background"
      />
      <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
        {period}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-accent">{subtitle}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        {summary}
      </p>
      {highlights && highlights.length > 0 ? (
        <ul className="mt-3 list-inside list-disc text-sm text-muted">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
      {technologies && technologies.length > 0 ? (
        <p className="mt-4 font-mono text-[11px] text-muted">
          {technologies.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}
