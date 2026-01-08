import Link from "next/link";
import { siteConfig } from "@/data/site.config";
import { Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  GitHub: Github,
  Linkedin,
  LinkedIn: Linkedin,
  Twitter,
  Mail,
};

import { SvglIcon, isSvglIcon } from "@/components/ui/icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "grid grid-cols-[0%_0.5rem_1fr_0.5rem_0%]  md:grid-cols-[15%_2.5rem_1fr_2.5rem_15%] grid-rows-[1px_1fr_1px]",
        "relative  w-full  bg-white [--pattern-fg:var(--color-black)]/10 dark:bg-background dark:[--pattern-fg:var(--color-white)]/10 z-50 w-full  bg-muted/30 ",
      )}
    >
      <div className="col-start-3 row-start-2 grid w-[100%] bg-card/30 p-2">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 rounded-md bg-muted/30 pr-auto col-span-1 h-full w-full p-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Code2 className="h-6 w-6" />
              <span>{siteConfig.logo.text}</span>
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              {siteConfig.tagline}. Building scalable web applications and
              leading engineering teams.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {siteConfig.social.map((social) => {
                const isSvgl = isSvglIcon(social.icon);
                const LucideIcon = iconMap[social.icon];

                if (!isSvgl && !LucideIcon) return null;

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border border-border",
                      "text-muted-foreground transition-colors hover:border-foreground hover:text-foreground",
                    )}
                    aria-label={social.label}
                  >
                    {isSvgl ? (
                      <SvglIcon
                        name={social.icon as any}
                        className="h-4 w-4 text-current"
                      />
                    ) : (
                      <LucideIcon className="h-4 w-4" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {siteConfig.footer.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex col-span-full  py-4 flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.author.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </div>
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      {/* <div className="relative col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div> */}
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </footer>
  );
}
