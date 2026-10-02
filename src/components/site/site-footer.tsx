import Link from "next/link";
import { footerNav } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-site-border bg-site-surface">
      <div className="site-container flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg text-site-ink">Jayant Rohila</p>
          <p className="mt-1 font-mono text-xs text-site-muted">
            Product Engineer · Noida, India
          </p>
          <p className="mt-3 max-w-sm text-sm text-site-muted text-pretty">
            Personal developer home — portfolio, career timeline, project evidence,
            and engineering notes. Public facts only.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {footerNav.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-site-muted underline-offset-4 hover:text-site-accent hover:underline"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-site-muted underline-offset-4 hover:text-site-accent hover:underline"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-site-border">
        <p className="site-container py-4 font-mono text-[0.65rem] text-site-muted">
          © {year} Jayant Rohila · Built with Next.js ·{" "}
          <a
            href="https://github.com/jayantrohila57/jayantrohila57"
            className="hover:text-site-accent"
            rel="noreferrer noopener"
            target="_blank"
          >
            source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
