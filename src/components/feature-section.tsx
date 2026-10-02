import { cn } from "@/lib/utils";
import type React from "react";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
	ActivityIcon,
	BoxesIcon,
	LayersIcon,
	ShieldCheckIcon,
} from "lucide-react";
import { engineeringPrinciples } from "@/data/portfolio";

type FeatureType = {
	title: string;
	icon: React.ReactNode;
	description: string;
};

const iconByVisual: Record<
	(typeof engineeringPrinciples)[number]["visual"],
	React.ReactNode
> = {
	"data-table": <ActivityIcon />,
	"type-flow": <ShieldCheckIcon />,
	"ui-stack": <LayersIcon />,
	"ci-pipeline": <BoxesIcon />,
};

const features: FeatureType[] = engineeringPrinciples.map((item) => ({
	title: item.title,
	description: item.description,
	icon: iconByVisual[item.visual],
}));

export function FeatureSection() {
	return (
		<div
			className="mx-auto w-full max-w-5xl place-content-center space-y-12 border-x py-4"
			id="engineering"
		>
			<div className="space-y-2 px-4 pt-8">
				<h2 className="font-semibold text-2xl tracking-wide md:text-3xl">
					Engineering focus
				</h2>
				<p className="max-w-2xl text-muted-foreground text-sm">
					How I approach product UI, typed backends, and maintainable App Router
					codebases — drawn from public project READMEs, not vanity metrics.
				</p>
			</div>
			<div className="relative grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
				<FullWidthDivider position="top" />
				{features.map((feature) => (
					<FeatureCard feature={feature} key={feature.title} />
				))}
				<FullWidthDivider position="bottom" />
			</div>
		</div>
	);
}

export function FeatureCard({
	feature,
	className,
	...props
}: React.ComponentProps<"div"> & {
	feature: FeatureType;
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
					"relative z-10 flex items-center pt-4 pb-6",
					"[&_svg]:size-5 [&_svg]:text-primary",
				)}
			>
				{feature.icon}
			</div>

			<div className="relative z-10 space-y-2">
				<h3 className="font-medium text-foreground text-lg">{feature.title}</h3>
				<p className="text-muted-foreground text-xs leading-relaxed">
					{feature.description}
				</p>
			</div>
		</div>
	);
}
