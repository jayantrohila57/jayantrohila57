import type { ReactNode } from "react";
import {
  BrowserWindow,
  StatusBadge,
} from "@/components/primitives/interface-window";
import type { PortfolioProject } from "@/data/portfolio";

function PreviewShell({ url, children }: { url: string; children: ReactNode }) {
  return (
    <BrowserWindow url={url}>
      <div className="space-y-2">{children}</div>
    </BrowserWindow>
  );
}

export function EcommerceProjectPreview() {
  return (
    <PreviewShell url="store / admin">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="text-foreground text-sm">Storefront</span>
        <StatusBadge label="demo UI" status="demo" />
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {["Products", "Orders", "Cart", "Checkout"].map((item) => (
          <div
            key={item}
            className="border border-border px-2 py-2 text-muted-foreground"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="border border-border px-2 py-2 text-xs">
        <span className="text-muted-foreground">Payment · </span>
        <span>Razorpay checkout · webhook verified</span>
      </div>
      <div className="border border-dashed border-border px-2 py-2 text-xs text-muted-foreground">
        Staff studio · catalog & order tools
      </div>
    </PreviewShell>
  );
}

export function EnvManagerProjectPreview() {
  return (
    <PreviewShell url="env-manager / staging">
      <div className="flex gap-1 text-[10px]">
        {["dev", "staging", "prod"].map((env, i) => (
          <span
            key={env}
            className={
              i === 1
                ? "border border-brand px-2 py-0.5 text-foreground"
                : "border border-border px-2 py-0.5 text-muted-foreground"
            }
          >
            {env}
          </span>
        ))}
      </div>
      {["API_URL", "AUTH_SECRET", "DATABASE_URL"].map((key) => (
        <div
          key={key}
          className="flex items-center justify-between gap-2 border border-border px-2 py-1 text-xs"
        >
          <span className="text-muted-foreground">{key}</span>
          <span className="text-brand">••••••</span>
        </div>
      ))}
      <p className="text-[10px] text-muted-foreground">
        Variable groups · masked secrets · per environment
      </p>
    </PreviewShell>
  );
}

export function TaskflowProjectPreview() {
  return (
    <PreviewShell url="taskflow / workspace">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="text-sm text-foreground">Acme Org</span>
        <StatusBadge label="workspace" status="demo" />
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px] text-muted-foreground">
        {["Projects", "Tasks", "Members"].map((tab) => (
          <div key={tab} className="border border-border py-1 text-center">
            {tab}
          </div>
        ))}
      </div>
      <ul className="space-y-1 text-xs">
        {[
          ["Launch checkout", "In progress"],
          ["RBAC audit", "Review"],
          ["i18n routes", "Done"],
        ].map(([task, state]) => (
          <li
            key={task}
            className="flex justify-between gap-2 border-t border-border pt-1"
          >
            <span>{task}</span>
            <span className="text-muted-foreground">{state}</span>
          </li>
        ))}
      </ul>
    </PreviewShell>
  );
}

export function InklyCmsPreview() {
  return (
    <PreviewShell url="inkly / editor">
      <div className="flex justify-between text-xs">
        <span className="text-foreground">Draft · Product launch notes</span>
        <span className="text-muted-foreground">Publish</span>
      </div>
      <div className="min-h-[4rem] border border-border p-2 text-[10px] leading-relaxed text-muted-foreground">
        Rich text editor · headings, lists, and embeds
      </div>
      <div className="flex flex-wrap gap-1 text-[10px]">
        {["Authors", "Categories", "Media"].map((tag) => (
          <span key={tag} className="border border-border px-1.5 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </PreviewShell>
  );
}

export function LibyuiPreview() {
  const components = ["Button", "Input", "Dialog", "Table", "Tabs", "Card"];
  return (
    <PreviewShell url="libyui / components">
      <p className="text-xs text-muted-foreground">Component library preview</p>
      <div className="grid grid-cols-3 gap-1.5">
        {components.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center border border-border py-2 text-[10px] text-muted-foreground"
          >
            {name}
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

export function ImageEditorPreview() {
  return (
    <PreviewShell url="editor / canvas">
      <div className="grid grid-cols-[1fr_4rem] gap-2">
        <div className="flex min-h-[5rem] items-center justify-center border border-dashed border-border text-[10px] text-muted-foreground">
          Canvas preview
        </div>
        <div className="flex flex-col gap-1 text-[10px]">
          {["Crop", "Filter", "Export"].map((tool) => (
            <span
              key={tool}
              className="border border-border px-1 py-1 text-center"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

export function SpotifyStatsPreview() {
  return (
    <PreviewShell url="spotify / insights">
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="border border-border p-2">
          <p className="text-[10px] text-muted-foreground">Top artists</p>
          <p className="mt-1 text-foreground">Listening mix</p>
        </div>
        <div className="border border-border p-2">
          <p className="text-[10px] text-muted-foreground">Top tracks</p>
          <p className="mt-1 text-foreground">This month</p>
        </div>
      </div>
      <ul className="space-y-1 text-[10px] text-muted-foreground">
        <li>· Genres & listening time</li>
        <li>· Recent history chart</li>
      </ul>
    </PreviewShell>
  );
}

export function PatternlabPreview() {
  return (
    <PreviewShell url="patternlab / runner">
      <div className="font-mono text-[10px] text-muted-foreground">
        <p className="text-xs text-foreground">Pattern challenge</p>
        <pre className="mt-2 leading-relaxed">{`function solve(input) {
  // your solution
}`}</pre>
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-muted-foreground">Run tests</span>
        <span className="text-brand">3 / 3 passed</span>
      </div>
    </PreviewShell>
  );
}

export function NeutralProjectPreview({
  project,
}: {
  project: PortfolioProject;
}) {
  const host = project.links.live
    ? project.links.live.replace(/^https?:\/\//, "").split("/")[0]
    : project.slug;

  return (
    <PreviewShell url={`${host} · preview`}>
      <div className="flex items-center justify-between gap-2 border-b border-border pb-2">
        <span className="text-sm text-foreground">{project.title}</span>
        <StatusBadge label="preview" status="demo" />
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
    </PreviewShell>
  );
}

const previewBySlug: Record<string, () => ReactNode> = {
  "e-commerce": () => <EcommerceProjectPreview />,
  "env-manager": () => <EnvManagerProjectPreview />,
  taskflow: () => <TaskflowProjectPreview />,
  "inkly-cms": () => <InklyCmsPreview />,
  libyui: () => <LibyuiPreview />,
  "image-editor": () => <ImageEditorPreview />,
  "stats-on-spotify": () => <SpotifyStatsPreview />,
  patternlab: () => <PatternlabPreview />,
};

export function ProjectPreviewBySlug({
  project,
}: {
  project: PortfolioProject;
}) {
  const render = previewBySlug[project.slug];
  if (render) {
    return render();
  }
  return <NeutralProjectPreview project={project} />;
}
