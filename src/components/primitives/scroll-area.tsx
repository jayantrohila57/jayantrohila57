import type { ComponentPropsWithoutRef } from "react";
import { LENIS_PREVENT_ATTR } from "@/lib/lenis-prevent";
import { cn } from "@/lib/utils";

type ScrollAreaProps = ComponentPropsWithoutRef<"div">;

/**
 * Nested scroll container that keeps mouse-wheel events local when Lenis is active.
 * Prefer this (or `data-lenis-prevent` / `.lenis-prevent`) for any `overflow-auto` panel.
 */
export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <div
      {...props}
      {...{ [LENIS_PREVENT_ATTR]: "" }}
      className={cn("lenis-prevent overflow-auto", className)}
    >
      {children}
    </div>
  );
}
