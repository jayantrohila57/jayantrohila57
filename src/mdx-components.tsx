import type { MDXComponents } from "mdx/types";
import { BlogPre, BlogProse } from "@/components/blog/blog-prose";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    wrapper: BlogProse,
    pre: (props) => {
      const child = props.children;
      if (typeof child === "string") {
        return <BlogPre>{child}</BlogPre>;
      }
      return <BlogPre>{String(child)}</BlogPre>;
    },
    ...components,
  };
}
