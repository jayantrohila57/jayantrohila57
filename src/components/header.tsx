"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CommandMenu } from "@/components/navigation/command-menu";
import { siteConfig } from "@/config/site";

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
				"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
					scrolled,
			})}
		>
			<nav
				aria-label="Primary"
				className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4"
			>
				<div className="flex items-center gap-5">
					<Link
						className="rounded-lg px-2 py-2 font-mono text-xs tracking-[0.2em] uppercase hover:bg-muted dark:hover:bg-muted/50"
						href="/"
					>
						{siteConfig.author.name}
					</Link>
					<DesktopNav />
				</div>
				<div className="hidden items-center gap-2 md:flex">
					<Button asChild variant="outline">
						<Link href={siteConfig.resumePath}>Resume</Link>
					</Button>
					<Button asChild>
						<Link href="/contact">Contact</Link>
					</Button>
					<CommandMenu />
				</div>
				<div className="flex items-center gap-2 md:hidden">
					<CommandMenu />
					<MobileNav />
				</div>
			</nav>
		</header>
	);
}
