import type * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
}

export function Section({
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "grid grid-cols-[0%_0.5rem_1fr_0.5rem_0%]  md:grid-cols-[15%_2.5rem_1fr_2.5rem_15%] grid-rows-[1px_1fr_1px]",
        "relative h-full w-full  bg-white [--pattern-fg:var(--color-black)]/10 dark:bg-background dark:[--pattern-fg:var(--color-white)]/10",
        className,
      )}
      {...props}
    >
      <div className="col-start-3 row-start-2 grid w-full bg-card/30">
        {children}
      </div>
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative col-span-full col-start-1 row-start-1 h-px bg-(--pattern-fg)"></div>
      <div className="relative col-span-full col-start-1 row-start-3 h-px bg-(--pattern-fg)"></div>
    </Component>
  );
}
