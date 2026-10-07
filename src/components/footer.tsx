import Link from "next/link";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";

const connectLinks = [
  { label: "GitHub", href: siteConfig.social.github, external: true },
  { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
  {
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    external: true,
  },
];

/** Efferd `footer-4` — compact identity and navigation endpoint. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="relative mx-auto max-w-5xl border-x border-border px-4">
        <div className="grid gap-8 py-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-12">
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
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Explore
              </h3>
              <ul className="mt-3 space-y-2">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Connect
              </h3>
              <ul className="mt-3 space-y-2">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center">
        <p className="text-muted-foreground text-xs">
          © {year} {siteConfig.author.name}
        </p>
      </div>
    </footer>
  );
}
