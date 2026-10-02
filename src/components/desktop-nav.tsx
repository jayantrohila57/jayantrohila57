import Link from "next/link";
import { mainNav } from "@/config/navigation";

export function DesktopNav() {
	return (
		<div className="hidden items-center gap-1 md:flex">
			{mainNav.map((item) => (
				<Link
					className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent/30 hover:text-foreground"
					href={item.href}
					key={item.href}
				>
					{item.label}
				</Link>
			))}
		</div>
	);
}
