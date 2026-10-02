import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared max-width + side borders — matches header/footer (`max-w-5xl`). */
export function EfferdRail({
  children,
  className,
  bordered = true,
  padding = true,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  padding?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-5xl",
        padding && "px-4",
        className,
      )}
    >
      <div className={cn(bordered && "border-x border-border")}>{children}</div>
    </div>
  );
}
