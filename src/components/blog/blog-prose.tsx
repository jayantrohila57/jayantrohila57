import type { ReactNode } from "react";
import { CodeBlock } from "@/components/primitives/code-block";
import { cn } from "@/lib/cn";

export function BlogProse({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "blog-prose max-w-none text-sm leading-relaxed text-muted-foreground",
        "[&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
        "[&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground",
        "[&_p]:mt-4 [&_p:first-child]:mt-0",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5",
        "[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5",
        "[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-brand [&_a]:underline-offset-2 hover:[&_a]:text-link-accent",
        "[&_code]:rounded [&_code]:bg-elevated [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-foreground",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function BlogPre({
  children,
  maxHeightClass,
}: {
  children: string;
  maxHeightClass?: string;
}) {
  return <CodeBlock maxHeightClass={maxHeightClass}>{children}</CodeBlock>;
}
