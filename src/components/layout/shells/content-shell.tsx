import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ContentShellVariant = "page" | "section" | "compact";
export type ContentShellAlign = "start" | "center";

export type ContentShellProps = {
  eyebrow?: string;
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  variant?: ContentShellVariant;
  align?: ContentShellAlign;
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
};

const titleClass: Record<ContentShellVariant, string> = {
  page: "text-4xl font-semibold tracking-tight md:text-5xl",
  section: "text-2xl font-semibold tracking-tight md:text-3xl",
  compact: "text-2xl font-semibold tracking-tight md:text-3xl",
};

const blockMargin: Record<ContentShellVariant, string> = {
  page: "mb-8 md:mb-10",
  section: "mb-8 md:mb-10",
  compact: "mb-4 md:mb-5",
};

export function ContentShell({
  eyebrow,
  icon,
  title,
  description,
  action,
  variant = "section",
  align = "start",
  headingLevel = "h2",
  className,
}: ContentShellProps) {
  const Heading = headingLevel;

  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        blockMargin[variant],
        align === "center" && "items-center text-center md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            {icon ? (
              <span className="inline-flex items-center gap-2">
                {icon}
                {eyebrow}
              </span>
            ) : (
              eyebrow
            )}
          </p>
        ) : icon ? (
          <div className="mb-2 text-muted-foreground">{icon}</div>
        ) : null}
        <Heading className={titleClass[variant]}>{title}</Heading>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className={cn("shrink-0", align === "center" && "mx-auto")}>
          {action}
        </div>
      ) : null}
    </div>
  );
}
