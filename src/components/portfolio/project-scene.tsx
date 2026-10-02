import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";
import {
  BrowserWindow,
  StatusBadge,
} from "@/components/primitives/interface-window";
import { cn } from "@/lib/cn";

function EcommercePreview() {
  return (
    <BrowserWindow url="store.demo / orders">
      <div className="space-y-2">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <span className="text-foreground">Transactions</span>
          <StatusBadge label="demo" status="demo" />
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <span>Date</span>
          <span>Status</span>
          <span className="text-right">Amount</span>
        </div>
        {[
          ["02 Oct", "Settled", "₹12,400"],
          ["01 Oct", "Pending", "₹8,200"],
          ["30 Sep", "Settled", "₹18,900"],
        ].map(([d, s, a]) => (
          <div
            key={d}
            className="grid grid-cols-3 gap-2 border-t border-border py-1 text-xs"
          >
            <span className="text-muted-foreground">{d}</span>
            <span>{s}</span>
            <span className="text-right">{a}</span>
          </div>
        ))}
        <p className="pt-1 text-xs text-muted-foreground">
          EXAMPLE · not live business data
        </p>
      </div>
    </BrowserWindow>
  );
}

function EnvManagerPreview() {
  return (
    <BrowserWindow url="env-manager / production">
      <div className="space-y-2">
        {["DATABASE_URL", "BETTER_AUTH_SECRET", "RAZORPAY_KEY_ID"].map(
          (key) => (
            <div
              key={key}
              className="flex items-center justify-between gap-2 border border-border px-2 py-1"
            >
              <span className="truncate text-muted-foreground">{key}</span>
              <span className="text-[color:var(--accent-muted)]">••••••</span>
            </div>
          ),
        )}
        <p className="text-xs text-muted-foreground">Secrets UI — illustrative</p>
      </div>
    </BrowserWindow>
  );
}

function TaskflowPreview() {
  return (
    <div className="font-mono text-xs leading-relaxed text-muted-foreground">
      <div className="mb-2 text-foreground">Architecture (from repo)</div>
      <pre>{`Next.js UI
    ↓
 tRPC + Query
    ↓
 Prisma → PostgreSQL
    ↓
 Organizations / RBAC`}</pre>
    </div>
  );
}

export function ProjectVisual({
  project,
  className,
}: {
  project: PortfolioProject;
  className?: string;
}) {
  const map = {
    dashboard: <EcommercePreview />,
    terminal: <EnvManagerPreview />,
    architecture: <TaskflowPreview />,
    data: <EcommercePreview />,
    ai: <TaskflowPreview />,
    browser: <EnvManagerPreview />,
    editor: <EnvManagerPreview />,
    custom: <TaskflowPreview />,
  };

  return (
    <div className={cn("relative", className)} aria-hidden>
      {map[project.visualType]}
    </div>
  );
}

export function ProjectScene({
  project,
  index,
  reverse,
}: {
  project: PortfolioProject;
  index: number;
  reverse?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-background transition-colors hover:bg-card"
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="border-b border-border p-6 lg:border-r lg:border-b-0">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {String(index).padStart(2, "0")} · {project.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-link-accent">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <dl className="mt-6 grid gap-2 font-mono text-xs text-muted-foreground uppercase">
            <div className="flex justify-between gap-4 border-t border-border pt-2">
              <dt>Status</dt>
              <dd className="text-foreground normal-case">{project.status}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border pt-2">
              <dt>Stack</dt>
              <dd className="max-w-[60%] text-right text-foreground normal-case">
                {project.stack.slice(0, 4).join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
        <div className="p-4 md:p-6">
          <ProjectVisual project={project} />
        </div>
      </div>
    </Link>
  );
}
