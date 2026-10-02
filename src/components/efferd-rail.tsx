import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared max-width + side borders for live Efferd-aligned sections. */
export function EfferdRail({
  children,
  className,
  bordered = true,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto w-full max-w-5xl px-4", className)}>
      <div className={cn(bordered && "border-x border-border")}>{children}</div>
    </div>
  );
}
