import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SectionBleed } from "./section-shell";
import { shellCellClassName } from "./tokens";

export type GridShellProps = {
  children: ReactNode;
  className?: string;
  /** Tailwind grid-cols-* classes */
  columns?: string;
  border?: "top" | "y" | "none";
};

/**
 * Rail-to-rail grid with gap-px dividers — cells use GridCell padding.
 */
export function GridShell({
  children,
  className,
  columns = "grid-cols-1",
  border = "top",
}: GridShellProps) {
  return (
    <SectionBleed
      className={cn(
        "grid gap-px bg-border",
        border === "y" && "border-y border-border",
        border === "top" && "border-t border-border",
        columns,
        className,
      )}
    >
      {children}
    </SectionBleed>
  );
}

export type GridCellProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
  colSpan?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function GridCell<T extends ElementType = "div">({
  children,
  className,
  as,
  colSpan,
  ...props
}: GridCellProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(shellCellClassName(), colSpan, className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/** @deprecated alias */
export const PageBleedGrid = GridShell;
