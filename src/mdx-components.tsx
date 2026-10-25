import type { MDXComponents } from "mdx/types";
import { isValidElement, type ReactNode } from "react";
import { BlogPre, BlogProse } from "@/components/blog/blog-prose";
import { cn } from "@/lib/cn";

function extractText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  if (isValidElement(node)) {
    const childProps = node.props as { children?: ReactNode };
    return extractText(childProps.children);
  }
  return "";
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    wrapper: BlogProse,
    pre: ({ children }) => {
      const text = extractText(children).replace(/\n$/, "");
      return <BlogPre>{text}</BlogPre>;
    },
    code: ({ className, children, ...props }) => {
      const isBlock = Boolean(className?.includes("language-"));
      if (isBlock) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className={cn(
            "rounded bg-elevated px-1 py-0.5 font-mono text-xs text-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </code>
      );
    },
    ...components,
  };
}
