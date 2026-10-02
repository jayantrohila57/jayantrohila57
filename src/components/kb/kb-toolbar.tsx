import {
  MarkdownCopyButton,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/docs/page";

export function KbToolbar({
  markdownUrl,
  githubUrl,
}: {
  markdownUrl: string;
  githubUrl: string;
}) {
  return (
    <div
      className="not-prose mb-6 flex flex-wrap items-center gap-2 border-b border-site-border pb-4"
    >
      <MarkdownCopyButton markdownUrl={markdownUrl} />
      <ViewOptionsPopover markdownUrl={markdownUrl} githubUrl={githubUrl} />
      <p className="ms-auto font-mono text-[0.65rem] text-site-muted">
        Engineering knowledge base
      </p>
    </div>
  );
}
