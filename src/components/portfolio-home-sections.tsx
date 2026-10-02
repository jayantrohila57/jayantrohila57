import Link from "next/link";
import { FullWidthDivider } from "@/components/full-width-divider";
import { experience, profile } from "@/data/portfolio";

export function PortfolioExperienceSection() {
	return (
		<section
			className="mx-auto w-full max-w-3xl flex-col md:border-x"
			id="experience"
		>
			<div className="space-y-2 px-4 py-8 md:py-12">
				<h2 className="font-semibold text-2xl tracking-wide md:text-4xl">
					Experience
				</h2>
				<p className="text-muted-foreground text-sm">
					Public career timeline — client deliverables and internal employer
					details stay off this site.
				</p>
				<Link
					className="inline-block font-mono text-xs text-foreground hover:underline"
					href="/about"
				>
					Full profile →
				</Link>
			</div>
			<div className="relative">
				<FullWidthDivider />
				<div className="divide-y">
					{experience.map((role) => (
						<article className="p-4 md:p-6" key={role.id}>
							<div className="flex flex-wrap items-baseline justify-between gap-2">
								<h3 className="font-medium text-foreground text-lg">
									{role.company}
								</h3>
								<p className="font-mono text-muted-foreground text-xs uppercase">
									{role.period}
								</p>
							</div>
							<p className="mt-1 text-muted-foreground text-sm">{role.role}</p>
							{role.location ? (
								<p className="mt-1 font-mono text-[11px] text-muted-foreground">
									{role.location}
								</p>
							) : null}
							<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
								{role.summary}
							</p>
							{role.highlights.length > 0 ? (
								<ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground text-xs">
									{role.highlights.map((line) => (
										<li key={line}>{line}</li>
									))}
								</ul>
							) : null}
							<p className="mt-3 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">
								{role.technologies.join(" · ")}
							</p>
						</article>
					))}
				</div>
				<FullWidthDivider />
			</div>
		</section>
	);
}

export function PortfolioAboutSection() {
	return (
		<section className="mx-auto w-full max-w-3xl border-x px-4 py-12" id="about">
			<div className="relative border p-6 md:p-8">
				<p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
					About
				</p>
				<h2 className="mt-3 font-semibold text-2xl">{profile.name}</h2>
				<p className="mt-1 text-muted-foreground">{profile.title}</p>
				<p className="mt-4 text-muted-foreground text-sm leading-relaxed">
					{profile.longBio}
				</p>
				<p className="mt-4 font-mono text-xs text-muted-foreground">
					{profile.location}
				</p>
				<p className="mt-6 text-muted-foreground text-xs leading-relaxed">
					Lucsum is an upcoming company hub only — not employment. PeLocal,
					Limetray, Servoedge, and similar names are not listed as roles here.
				</p>
				<Link
					className="mt-6 inline-block font-mono text-xs text-foreground hover:underline"
					href="/about"
				>
					Read more →
				</Link>
			</div>
		</section>
	);
}

export function PortfolioFocusSection() {
	const { focus } = profile;
	return (
		<section className="mx-auto w-full max-w-5xl border-x px-4 py-10">
			<div className="grid gap-px border bg-border md:grid-cols-3">
				{[
					{ label: "Building", value: focus.building },
					{ label: "Active", value: focus.active },
					{ label: "Exploring", value: focus.exploring },
				].map((item) => (
					<div className="bg-background p-4 md:p-6" key={item.label}>
						<p className="font-mono text-[10px] text-muted-foreground uppercase">
							{item.label}
						</p>
						<p className="mt-2 text-foreground text-sm">{item.value}</p>
					</div>
				))}
			</div>
		</section>
	);
}
