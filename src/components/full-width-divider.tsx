import { cn } from "@/lib/utils";

type FullWidthDividerProps = React.ComponentProps<"div"> & {
  position?: "top" | "bottom";
};

/** Full-bleed divider within the nearest positioned ancestor (never `100vw`). */
export function FullWidthDivider({
  className,
  position,
  ...props
}: FullWidthDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 h-px w-full bg-border",
        position &&
          "data-[position=top]:-top-px data-[position=bottom]:-bottom-px",
        className,
      )}
      data-position={position}
      {...props}
    />
  );
}
