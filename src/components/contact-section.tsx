import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DecorIcon } from "@/components/decor-icon";
import { Code2, Mail, Share2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

const channels = [
	{
		title: "Email",
		value: profile.social.email,
		href: `mailto:${profile.social.email}`,
		icon: <Mail />,
	},
	{
		title: "LinkedIn",
		value: "jayant-rohila",
		href: siteConfig.social.linkedin,
		icon: <Share2 />,
	},
	{
		title: "GitHub",
		value: "jayantrohila57",
		href: siteConfig.social.github,
		icon: <Code2 />,
	},
];

export function ContactSection() {
	return (
		<div className="relative mx-auto w-full max-w-lg border" id="contact">
			<div className="border-b px-6 py-8">
				<div className="mb-8 flex flex-col gap-2">
					<h2 className="font-semibold text-xl md:text-2xl">Get in touch</h2>
					<p className="text-muted-foreground text-sm">
						Product engineering, consulting, or open-source collaboration —{" "}
						<br className="hidden sm:inline" />
						reach out with context and links.
					</p>
				</div>

				<div className="grid gap-2 md:grid-cols-1">
					{channels.map((item) => (
						<a
							className="flex items-center gap-4 rounded-md p-2 hover:bg-accent/20"
							href={item.href}
							key={item.title}
							rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
							target={item.href.startsWith("http") ? "_blank" : undefined}
						>
							<div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
								{item.icon}
							</div>
							<div className={cn("flex flex-col gap-y-0.5")}>
								<h3 className="text-sm">{item.title}</h3>
								<p className="text-muted-foreground text-xs">{item.value}</p>
							</div>
						</a>
					))}
				</div>
			</div>

			<div className="px-6 py-8">
				<div className="mb-8 flex flex-col gap-1.5">
					<h3 className="font-medium text-xl">Send a message</h3>
					<p className="text-muted-foreground text-sm">
						This form is a UI placeholder — use email or LinkedIn for a
						guaranteed reply.
					</p>
				</div>
				<ContactForm />
			</div>
			<DecorIcon position="top-left" />
			<DecorIcon position="top-right" />
			<DecorIcon position="bottom-left" />
			<DecorIcon position="bottom-right" />
		</div>
	);
}

function ContactForm() {
	return (
		<form action={`mailto:${profile.social.email}`} className="w-full" method="get">
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="contact-name">Name</FieldLabel>
					<Input autoComplete="name" id="contact-name" name="name" placeholder="Your name" />
				</Field>
				<Field>
					<FieldLabel htmlFor="contact-email">Email</FieldLabel>
					<Input
						autoComplete="email"
						id="contact-email"
						name="email"
						placeholder="you@example.com"
						type="email"
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="contact-message">Message</FieldLabel>
					<Textarea
						autoComplete="off"
						id="contact-message"
						name="body"
						placeholder="What you're building and how I can help"
					/>
				</Field>
			</FieldGroup>
			<Button asChild className="mt-8 w-full">
				<Link href={`mailto:${profile.social.email}`}>Open in email client</Link>
			</Button>
		</form>
	);
}
