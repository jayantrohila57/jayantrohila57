import type React from "react";
import { DecorIcon } from "@/components/decor-icon";
import { stackGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export type IntegrationItem = {
  name: string;
  description: string;
  icon?: React.ReactNode;
};

export function IntegrationsGrid({
  items,
  nested,
}: {
  items: IntegrationItem[];
  nested?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        nested ? "border-0" : "mx-auto max-w-5xl border border-border",
      )}
    >
      <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3">
        {items.map((item) => (
          <IntegrationCard integration={item} key={item.name}>
            {item.icon}
          </IntegrationCard>
        ))}
      </div>
      <DecorIcon position="top-left" />
      <DecorIcon position="top-right" />
      <DecorIcon position="bottom-left" />
      <DecorIcon position="bottom-right" />
    </div>
  );
}

function IntegrationCard({
  integration,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  integration: IntegrationItem;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start gap-3 bg-background p-4 text-start md:p-6 md:even:bg-background/75",
        className,
      )}
      {...props}
    >
      <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        {integration.name}
      </span>
      <div className="space-y-1">
        <h3 className="font-semibold text-sm md:text-base">
          {integration.name}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm">
          {integration.description}
        </p>
      </div>
      {children}
    </div>
  );
}

function buildStackIntegrations(): IntegrationItem[] {
  const items: IntegrationItem[] = [];
  for (const group of stackGroups) {
    for (const item of group.items.slice(0, 2)) {
      items.push({
        name: item.name,
        description: `${group.label} · used in ${item.projectSlugs.length} public project${item.projectSlugs.length === 1 ? "" : "s"}`,
      });
    }
  }
  return items.slice(0, 6);
}

export function PortfolioStackIntegrations({
  nested,
}: {
  nested?: boolean;
} = {}) {
  return <IntegrationsGrid items={buildStackIntegrations()} nested={nested} />;
}

const demoData: IntegrationItem[] = [
  {
    name: "Vercel",
    description: "Playground placeholder integration card.",
  },
  {
    name: "OpenAI",
    description: "Demo copy only — not shown on live stack section.",
  },
];

export function Integrations() {
  return <IntegrationsGrid items={demoData} />;
}
