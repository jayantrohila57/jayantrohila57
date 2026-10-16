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
        <span className="text-foreground text-sm">Lucsum</span>
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

export function LoftlancerProjectPreview() {
  return (
    <PreviewShell url="loftlancer / staging">
      <div className="flex gap-1 type-caption">
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
      <p className="type-caption text-muted-foreground">
        Variable groups · masked secrets · per environment
      </p>
    </PreviewShell>
  );
}

export function SpotifyStatsPreview() {
  return (
    <PreviewShell url="spotify / insights">
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="border border-border p-2">
          <p className="type-caption text-muted-foreground">Top artists</p>
          <p className="mt-1 text-foreground">Listening mix</p>
        </div>
        <div className="border border-border p-2">
          <p className="type-caption text-muted-foreground">Top tracks</p>
          <p className="mt-1 text-foreground">This month</p>
        </div>
      </div>
      <ul className="space-y-1 type-caption text-muted-foreground">
        <li>· Genres & listening time</li>
        <li>· Recent history chart</li>
      </ul>
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
  lucsum: () => <EcommerceProjectPreview />,
  loftlancer: () => <LoftlancerProjectPreview />,
  "stats-on-spotify": () => <SpotifyStatsPreview />,
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
