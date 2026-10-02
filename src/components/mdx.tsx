import { ResumeView } from "@/components/resume-view";
import { Callout } from "@/components/kb/callout";
import { CodeBlock } from "@/components/kb/code-block";
import { FactGrid } from "@/components/kb/fact-grid";
import { TerminalBlock } from "@/components/kb/terminal-block";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ResumeView,
    Callout,
    CodeBlock,
    TerminalBlock,
    FactGrid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
