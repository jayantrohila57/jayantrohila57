import { cn } from "@/lib/cn";

type CodeBlockProps = {
  children: string;
  className?: string;
  /** e.g. `max-h-96` — enables vertical overflow and vertical Lenis opt-out. */
  maxHeightClass?: string;
};

/**
 * Code sample block: horizontal scroll uses native overflow; vertical wheel
 * scrolls the page unless `maxHeightClass` adds a vertical scrollport.
 */
export function CodeBlock({
  children,
  className,
  maxHeightClass,
}: CodeBlockProps) {
  const verticalScrollport = Boolean(maxHeightClass);

  return (
    <pre
      className={cn(
        "code-block mt-4 overflow-x-auto rounded-md border border-border bg-elevated p-4 font-mono text-xs leading-relaxed text-foreground",
        verticalScrollport && "overflow-y-auto",
        maxHeightClass,
        className,
      )}
      {...(verticalScrollport
        ? { "data-lenis-prevent-vertical": "" }
        : { "data-lenis-prevent-horizontal": "" })}
    >
      {children}
    </pre>
  );
}
