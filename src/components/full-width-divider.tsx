import { cn } from "@/lib/utils";

type FullWidthDividerProps = React.ComponentProps<"div"> & {
  /** Span the positioned parent only (default). Avoids `100vw` horizontal overflow on mobile. */
  contained?: boolean;
  position?: "top" | "bottom";
};

export function FullWidthDivider({
  className,
  contained = true,
  position,
  ...props
}: FullWidthDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-px bg-border",
        contained
          ? "inset-x-0 w-full"
          : "left-1/2 w-full max-w-[100vw] -translate-x-1/2",
        position &&
          "data-[position=top]:-top-px data-[position=bottom]:-bottom-px",
        className,
      )}
      data-contained={contained}
      data-position={position}
      {...props}
    />
  );
}
