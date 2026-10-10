import type { ReactNode } from "react";
import { SHELL_GUTTER_X_CLASS } from "@/components/layout/shells";
import { cn } from "@/lib/utils";

/** Inner horizontal gutter — rails are on MainShell only. */
export function EfferdRail({
  children,
  className,
  padding = true,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  padding?: boolean;
}) {
  return (
    <div className={cn(padding && SHELL_GUTTER_X_CLASS, "min-w-0", className)}>
      {children}
    </div>
  );
}
