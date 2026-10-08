import type { ReactNode } from "react";
import { PAGE_GUTTER_CLASS } from "@/components/primitives/page-column";
import { cn } from "@/lib/utils";

/** Inner gutter padding — side borders live on `PageColumn`, not here. */
export function EfferdRail({
  children,
  className,
  padding = true,
}: {
  children: ReactNode;
  className?: string;
  /** @deprecated Borders are on PageColumn only; ignored. */
  bordered?: boolean;
  padding?: boolean;
}) {
  return (
    <div className={cn(padding && PAGE_GUTTER_CLASS, "min-w-0", className)}>
      {children}
    </div>
  );
}
