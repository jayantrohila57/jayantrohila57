import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type FlexShellProps = {
  children: ReactNode;
  className?: string;
  direction?: "row" | "col";
  gap?: "2" | "3" | "4" | "6" | "8";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
};

export function FlexShell({
  children,
  className,
  direction = "col",
  gap = "4",
  align = "stretch",
  justify = "start",
  wrap = false,
}: FlexShellProps) {
  const alignClass =
    align === "center"
      ? "items-center"
      : align === "end"
        ? "items-end"
        : align === "stretch"
          ? "items-stretch"
          : "items-start";

  const justifyClass =
    justify === "center"
      ? "justify-center"
      : justify === "end"
        ? "justify-end"
        : justify === "between"
          ? "justify-between"
          : "justify-start";

  const gapClass =
    gap === "2"
      ? "gap-2"
      : gap === "3"
        ? "gap-3"
        : gap === "6"
          ? "gap-6"
          : gap === "8"
            ? "gap-8"
            : "gap-4";

  return (
    <div
      className={cn(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        gapClass,
        alignClass,
        justifyClass,
        wrap && "flex-wrap",
        className,
      )}
    >
      {children}
    </div>
  );
}
