import {
  ActivityIcon,
  GlobeIcon,
  LayersIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import type React from "react";
import { PageBleed } from "@/components/primitives/page-column";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const defaultIcons = [
  <ZapIcon key="z" />,
  <ShieldCheckIcon key="s" />,
  <ActivityIcon key="a" />,
  <GlobeIcon key="g" />,
];

export function FeatureBento({ features }: { features: FeatureItem[] }) {
  const cols =
    features.length <= 3
      ? "md:grid-cols-3"
      : features.length === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <PageBleed className="relative w-full">
      <div
        className={cn(
          "relative grid grid-cols-1 gap-px border-t border-border bg-border",
          cols,
        )}
      >
        {features.map((feature, i) => (
          <FeatureCard
            feature={{
              ...feature,
              icon: feature.icon ?? defaultIcons[i % defaultIcons.length],
            }}
            key={feature.title}
          />
        ))}
      </div>
    </PageBleed>
  );
}

export function FeatureCard({
  feature,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  feature: FeatureItem;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden bg-background p-4 md:p-6",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 flex items-center pt-2 pb-4",
          "[&_svg]:size-5 [&_svg]:text-primary",
        )}
      >
        {feature.icon ?? <LayersIcon />}
      </div>
      <div className="relative z-10 space-y-2">
        <h3 className="font-medium text-foreground text-lg">{feature.title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed md:text-sm">
          {feature.description}
        </p>
      </div>
      {children}
    </div>
  );
}

const demoFeatures: FeatureItem[] = [
  {
    title: "Pattern preview",
    description:
      "features-6 bento grid — live site uses engineering principles.",
  },
  {
    title: "Typed boundaries",
    description: "End-to-end types from UI through API layers.",
  },
  {
    title: "Delivery",
    description: "CI and deploy paths documented in public repos.",
  },
  {
    title: "Product UI",
    description: "Shared components and accessible interaction patterns.",
  },
];

export function FeatureSection() {
  return (
    <div className="mx-auto min-h-[40vh] w-full max-w-5xl place-content-center space-y-12 border-x py-4">
      <FeatureBento features={demoFeatures} />
    </div>
  );
}
