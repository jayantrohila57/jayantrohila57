import type React from "react";
import { cn } from "@/lib/utils";

type OutlineTextProps = React.ComponentProps<"span"> & {
  strokeWidth?: string;
};

export function OutlineText({
  children,
  className = "",
  strokeWidth = "1px",
  style,
  ...props
}: OutlineTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text font-extrabold text-transparent",
        className,
      )}
      style={{
        WebkitTextStroke: strokeWidth,
        WebkitTextFillColor: "transparent",
        WebkitTextStrokeColor: "currentColor",
        WebkitBackgroundClip: "text",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
