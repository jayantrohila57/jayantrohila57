import { PageRule } from "@/components/primitives/page-column";
import { cn } from "@/lib/utils";

type FullWidthDividerProps = React.ComponentProps<"div"> & {
  position?: "top" | "bottom";
};

/**
 * Horizontal rule spanning the full width of the page column.
 * Prefer `PageRule` or `border-t` on a full-width child inside `PageColumn`.
 */
export function FullWidthDivider({
  className,
  position: _position,
  ...props
}: FullWidthDividerProps) {
  return (
    <PageRule
      className={cn(className)}
      {...props}
    />
  );
}
