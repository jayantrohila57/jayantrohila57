import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/decor-icon";
import { stackGroups } from "@/data/portfolio";

type Integration = {
	src: string;
	name: string;
	description: string;
	isInvertable?: boolean;
	icon?: React.ReactNode;
};

const logoByName: Record<string, { src: string; isInvertable?: boolean }> = {
	"Next.js": {
		src: "https://storage.efferd.com/logo/vercel.svg",
		isInvertable: true,
	},
	React: {
		src: "https://storage.efferd.com/logo/github.svg",
		isInvertable: true,
	},
	TypeScript: {
		src: "https://storage.efferd.com/logo/github.svg",
		isInvertable: true,
	},
	"tRPC": { src: "https://storage.efferd.com/logo/supabase.svg" },
	"PostgreSQL / Neon": {
		src: "https://storage.efferd.com/logo/supabase.svg",
	},
	Vercel: {
		src: "https://storage.efferd.com/logo/vercel.svg",
		isInvertable: true,
	},
	"Better Auth": {
		src: "https://storage.efferd.com/logo/clerk.svg",
	},
};

function pickStackItems() {
	const picked = [
		{ group: "Frontend", name: "Next.js" },
		{ group: "Frontend", name: "React" },
		{ group: "Frontend", name: "TypeScript" },
		{ group: "Data / API", name: "tRPC" },
		{ group: "Data / API", name: "PostgreSQL / Neon" },
		{ group: "Platform & quality", name: "Vercel" },
	];

	return picked.map(({ group, name }) => {
		const groupData = stackGroups.find((g) => g.label === group);
		const item = groupData?.items.find((i) => i.name === name);
		const logo = logoByName[name] ?? {
			src: "https://storage.efferd.com/logo/github.svg",
			isInvertable: true,
		};
		const projectCount = item?.projectSlugs.length ?? 0;
		const description = item
			? `Used across ${projectCount} public ${projectCount === 1 ? "project" : "projects"} in this portfolio (${item.projectSlugs.slice(0, 3).join(", ")}${item.projectSlugs.length > 3 ? ", …" : ""}).`
			: `${group} tooling from portfolio stack data.`;

		return {
			src: logo.src,
			name,
			description,
			isInvertable: logo.isInvertable,
		} satisfies Integration;
	});
}

const data = pickStackItems();

export function Integrations() {
	return (
		<div className="relative mx-auto max-w-5xl border" id="stack">
			<div className="space-y-2 border-b px-4 py-8">
				<h2 className="font-semibold text-2xl tracking-wide md:text-3xl">
					Stack in practice
				</h2>
				<p className="max-w-2xl text-muted-foreground text-sm">
					Technologies tied to shipped repos — counts reflect public project
					slugs on this site, not employer stacks.
				</p>
			</div>
			<div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3">
				{data.map((item, index) => (
					<IntegrationCard integration={item} key={item.name}>
						{index === 1 ? <DecorIcon position="bottom-left" /> : null}
						{index === 4 ? <DecorIcon position="top-left" /> : null}
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
	integration: Integration;
}) {
	return (
		<div
			className={cn(
				"relative flex flex-col items-start gap-4 bg-background p-4 text-start md:p-6 md:even:bg-background/75",
				className,
			)}
			{...props}
		>
			<img
				alt={integration.name}
				className={cn(
					"pointer-events-none size-8 shrink-0 select-none object-contain",
					integration.isInvertable && "dark:invert",
				)}
				height={32}
				src={integration.src}
				width={32}
			/>
			<div className="space-y-1">
				<h3 className="font-semibold">{integration.name}</h3>
				<p className="text-muted-foreground text-xs md:text-sm">
					{integration.description}
				</p>
			</div>
			{children}
		</div>
	);
}
