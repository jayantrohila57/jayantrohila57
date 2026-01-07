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
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.author.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
