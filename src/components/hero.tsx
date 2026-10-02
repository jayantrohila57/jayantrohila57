import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FileTextIcon, MailIcon } from "lucide-react";
import { LogosSection } from "@/components/logos-section";
import { profile } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

export function HeroSection() {
	const nowLabel = profile.openToOpportunities
		? "Open to product engineering conversations"
		: profile.focus.building;

	return (
		<section className="relative mx-auto w-full max-w-5xl overflow-hidden pt-16">
			<div
				aria-hidden="true"
				className="absolute inset-0 size-full overflow-hidden"
			>
				<div
					className={cn(
						"absolute inset-0 isolate -z-10",
						"bg-[radial-gradient(20%_80%_at_20%_0%,--theme(--color-foreground/.1),transparent)]",
					)}
				/>
			</div>
			<div className="relative z-10 flex max-w-2xl flex-col gap-5 px-4">
				<Link
					className={cn(
						"group flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow-xs",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out",
					)}
					href="/about"
				>
					<div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
						<p className="font-mono text-xs">NOW</p>
					</div>
					<span className="text-xs">{nowLabel}</span>
					<span className="block h-5 border-l" />
					<div className="pr-1">
						<ArrowRightIcon className="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5" />
					</div>
				</Link>

				<h1
					className={cn(
						"text-balance font-medium text-4xl text-foreground leading-tight md:text-5xl",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out",
					)}
				>
					{profile.name}
					<span className="block text-muted-foreground text-2xl md:text-3xl">
						{profile.publicHeadline}
					</span>
				</h1>

				<p
					className={cn(
						"text-muted-foreground text-sm tracking-wide sm:text-lg md:text-xl",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out",
					)}
				>
					{profile.shortBio}
				</p>
				<p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
					{profile.metadataLine}
				</p>

				<div className="fade-in slide-in-from-bottom-10 flex w-fit flex-wrap animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<Button asChild variant="outline">
						<Link href="/work">
							View work
							<ArrowRightIcon data-icon="inline-end" />
						</Link>
					</Button>
					<Button asChild>
						<Link href="/contact">
							<MailIcon data-icon="inline-start" />
							Contact
						</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href={siteConfig.resumePath}>
							<FileTextIcon data-icon="inline-start" />
							Resume
						</Link>
					</Button>
				</div>
			</div>
			<div className="relative">
				<div
					className={cn(
						"absolute -inset-x-20 inset-y-0 -translate-y-1/3 scale-120 rounded-full",
						"bg-[radial-gradient(ellipse_at_center,theme(--color-foreground/.1),transparent,transparent)]",
						"blur-[50px]",
					)}
				/>
				<div
					className={cn(
						"mask-b-from-60% relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20",
						"fade-in slide-in-from-bottom-5 animate-in fill-mode-backwards delay-100 duration-1000 ease-out",
					)}
				>
					<div className="relative inset-shadow-2xs inset-shadow-foreground/10 mx-auto max-w-5xl overflow-hidden rounded-lg border bg-background p-2 shadow-xl ring-1 ring-card dark:inset-shadow-foreground/20 dark:inset-shadow-xs">
						<img
							alt="Open Graph preview card for Jayant Rohila portfolio"
							className="z-2 aspect-video rounded-lg border object-cover object-top dark:hidden"
							height={1080}
							src="/api/image?type=og"
							width={1920}
						/>
						<img
							alt="Open Graph preview card for Jayant Rohila portfolio"
							className="hidden aspect-video rounded-lg border object-cover object-top bg-background dark:block"
							height={1080}
							src="/api/image?type=og"
							width={1920}
						/>
					</div>
					<p className="mt-3 px-2 text-center font-mono text-[10px] text-muted-foreground">
						Featured build —{" "}
						<Link className="text-foreground hover:underline" href="/work/e-commerce">
							E-commerce
						</Link>{" "}
						(open source, live on Vercel)
					</p>
				</div>
			</div>
			<LogosSection />
		</section>
	);
}
