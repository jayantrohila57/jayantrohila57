import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code2, Globe, Mail, Share2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

const data = [
	{
		title: "Email",
		description: "Best for detailed context, timelines, and links.",
		icon: <Mail />,
		href: `mailto:${profile.social.email}`,
		label: profile.social.email,
	},
	{
		title: "LinkedIn",
		description: "Connect for product engineering and consulting conversations.",
		icon: <Share2 />,
		href: siteConfig.social.linkedin,
		label: "LinkedIn profile",
	},
	{
		title: "GitHub",
		description: "Open-source work, demos, and issue discussions.",
		icon: <Code2 />,
		href: siteConfig.social.github,
		label: "github.com/jayantrohila57",
	},
	{
		title: "Site",
		description: "This portfolio — jayantrohila.com.",
		icon: <Globe />,
		href: siteConfig.siteUrl,
		label: "jayantrohila.com",
	},
];

export function Contact() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-16">
			<div className="mb-12 flex max-w-md flex-col justify-center gap-2">
				<h2 className="font-bold text-2xl md:text-3xl">Elsewhere</h2>
				<p className="text-base text-muted-foreground">
					Public channels only — no phone or private identifiers on this site.
				</p>
			</div>
			<div className="grid gap-0.5 overflow-hidden rounded-lg bg-muted p-0.5 md:grid-cols-2 lg:grid-cols-4 dark:bg-muted/50">
				{data.map((item) => (
					<div
						className="flex flex-col gap-3 rounded-lg bg-background px-6 py-6 shadow-xs"
						key={item.title}
					>
						<div
							className={cn(
								"flex items-center gap-x-2",
								"[&_svg]:size-4 [&_svg]:text-muted-foreground",
							)}
						>
							{item.icon}
							<h3 className="text-sm">{item.title}</h3>
						</div>
						<p className="text-muted-foreground text-sm">{item.description}</p>
						<div className="mt-1 flex items-center gap-x-2">
							<Button asChild variant="link">
								<a
									href={item.href}
									rel={
										item.href.startsWith("http") ? "noopener noreferrer" : undefined
									}
									target={item.href.startsWith("http") ? "_blank" : undefined}
								>
									{item.label}
								</a>
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
