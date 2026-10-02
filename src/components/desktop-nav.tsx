import Link from "next/link";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch={false}
          className={cn(
            "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors",
            "hover:bg-muted/50 hover:text-foreground dark:hover:bg-muted/30",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
