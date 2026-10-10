import Link from "next/link";
import {
  SectionBleed,
  SHELL_GUTTER_X_CLASS,
} from "@/components/layout/shells";
import { footerNavGroups, interestsNavItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full">
      <SectionBleed className="border-t border-border">
        <div className={cn(SHELL_GUTTER_X_CLASS, "py-10")}>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] md:gap-12">
            <div className="space-y-3">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {profile.name}
              </p>
              <p className="text-sm font-medium text-foreground">
                {profile.title}
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Building complex web products with thoughtful UX and scalable
                frontend architecture.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerNavGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={`${group.title}-${item.href}`}>
                        {item.external ? (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBleed>
      <SectionBleed className="border-t border-border">
        <div
          className={cn(
            SHELL_GUTTER_X_CLASS,
            "flex flex-col items-center gap-2 py-4 text-center sm:flex-row sm:justify-between",
          )}
        >
          <p className="text-muted-foreground text-xs">
            © {year} {siteConfig.author.name}
          </p>
          <Link
            href={interestsNavItem.href}
            className="text-xs text-muted-foreground/80 hover:text-muted-foreground"
          >
            {interestsNavItem.label}
          </Link>
        </div>
      </SectionBleed>
    </footer>
  );
}
