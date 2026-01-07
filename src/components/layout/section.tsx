import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  container?: boolean;
}

export function Section({
  as: Component = "section",
  container = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "py-16 md:py-20 lg:py-24",
        container && "px-4 md:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {container ? (
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      ) : (
        children
      )}
    </Component>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12 lg:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl",
            align === "center" && "text-center",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
