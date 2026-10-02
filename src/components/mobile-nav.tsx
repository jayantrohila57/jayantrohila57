"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { Portal, PortalBackdrop } from "@/components/portal";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { XIcon, MenuIcon } from "lucide-react";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				<div
					className={cn(
						"transition-all",
						open ? "scale-100 opacity-100" : "scale-0 opacity-0",
					)}
				>
					<XIcon />
				</div>
				<div
					className={cn(
						"absolute transition-all",
						open ? "scale-0 opacity-0" : "scale-100 opacity-100",
					)}
				>
					<MenuIcon />
				</div>
			</Button>
			{open && (
				<Portal className="top-14">
					<PortalBackdrop />
					<div
						className={cn(
							"size-full overflow-y-auto p-4",
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
						)}
						data-slot={open ? "open" : "closed"}
						id="mobile-menu"
					>
						<div className="flex w-full flex-col gap-y-1">
							{mainNav.map((link) => (
								<Link
									className="rounded-lg p-3 text-sm active:bg-muted dark:active:bg-muted/50"
									href={link.href}
									key={link.href}
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<Link
								className="rounded-lg p-3 text-sm active:bg-muted dark:active:bg-muted/50"
								href="/contact"
								onClick={() => setOpen(false)}
							>
								Contact
							</Link>
						</div>
						<div className="mt-5 flex flex-col gap-2">
							<Button asChild className="w-full" variant="outline">
								<Link href={siteConfig.resumePath} onClick={() => setOpen(false)}>
									Resume
								</Link>
							</Button>
							<Button asChild className="w-full">
								<Link
									href={siteConfig.social.github}
									onClick={() => setOpen(false)}
									rel="noopener noreferrer"
									target="_blank"
								>
									GitHub
								</Link>
							</Button>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}
