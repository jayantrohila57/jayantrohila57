import Link from "next/link";
import { cn } from "@/lib/utils";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
	experiments,
	getFeaturedProjects,
	type PortfolioProject,
} from "@/data/portfolio";

type WorkCard = {
	title: string;
	date: string;
	description: string;
	href: string;
};

function projectToCard(project: PortfolioProject): WorkCard {
	return {
		title: project.title,
		date: project.year,
		description: project.summary,
		href: `/work/${project.slug}`,
	};
}

const featuredCards = getFeaturedProjects().map(projectToCard);

const experimentCards: WorkCard[] = experiments.slice(0, 3).map((item) => ({
	title: item.title,
	date: "Experiment",
	description: item.summary,
	href: item.links.live ?? `/experiments#${item.slug}`,
}));

const workItems = [...featuredCards, ...experimentCards];

export function BlogsSection() {
	return (
		<div
			className="mx-auto flex w-full max-w-3xl flex-col justify-start md:border-x"
			id="work"
		>
			<div className="space-y-2 px-4 py-8 md:py-12">
				<h2 className="font-semibold text-2xl tracking-wide md:text-4xl">
					Selected work
				</h2>
				<p className="text-muted-foreground text-sm">
					Flagship open-source builds and supporting experiments — live demos
					and repos linked from each case study.
				</p>
				<Link
					className="inline-block font-mono text-xs text-foreground hover:underline"
					href="/work"
				>
					Full work index →
				</Link>
			</div>

			<div className="relative">
				<FullWidthDivider />
				<div className="divide-y">
					{workItems.map((item) => (
						<BlogCard {...item} key={`${item.title}-${item.href}`} />
					))}
				</div>
				<FullWidthDivider />
			</div>
		</div>
	);
}

function BlogCard({
	title,
	date,
	description,
	className,
	href,
	...props
}: React.ComponentProps<"a"> & {
	title: string;
	date: string;
	description: string;
	href: string;
}) {
	return (
		<Link
			className={cn(
				"group flex h-auto min-h-24 w-full flex-col justify-center gap-y-1 p-4 hover:cursor-pointer hover:bg-accent/30 active:bg-accent dark:active:bg-accent/50",
				className,
			)}
			href={href}
			{...props}
		>
			<div className="relative flex items-end justify-center gap-2">
				<h3 className="whitespace-nowrap font-medium text-foreground text-lg md:text-xl">
					{title}
				</h3>
				<span className="mb-[6px] w-full border-b-2 border-dashed" />
				<span className="whitespace-nowrap font-mono text-muted-foreground text-xs uppercase group-hover:text-foreground md:text-sm">
					{date}
				</span>
			</div>
			<div className="max-w-sm text-muted-foreground text-sm group-hover:text-foreground md:max-w-full md:text-base">
				{description}
			</div>
		</Link>
	);
}
