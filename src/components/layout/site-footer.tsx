import Link from "next/link";
import { footerNavGroups } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16">
      <div className="site-container">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-muted">{profile.title}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Building thoughtful software — product engineering and open-source
              projects with live demos.
            </p>
          </div>
          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-muted hover:text-foreground"
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
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.author.name}
          </p>
          <p className="font-mono">Noida · {siteConfig.siteUrl.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
