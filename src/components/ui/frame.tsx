import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

function Frame({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative flex flex-col max-w-4xl mx-auto rounded-2xl bg-muted/72 p-1",
        "*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1",
        className,
      )}
      data-slot="frame"
      {...props}
    />
  );
}

function FramePanel({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-xl border bg-background bg-clip-padding p-2 md:p-4 shadow-xs/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]",
        className,
      )}
      data-slot="frame-panel"
      {...props}
    />
  );
}

function FrameHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header
      className={cn("flex flex-col p-2 md:p-4", className)}
      data-slot="frame-panel-header"
      {...props}
    />
  );
}

function FrameTitle({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("font-semibold text-2xl", className)}
      data-slot="frame-panel-title"
      {...props}
    />
  );
}

function FrameDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="frame-panel-description"
      {...props}
    />
  );
}

function FrameFooter({
  className,
  ...props
}: ComponentPropsWithoutRef<"footer">) {
  return (
    <footer
      className={cn("p-2 md:p-4", className)}
      data-slot="frame-panel-footer"
      {...props}
    />
  );
}

export {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
};
