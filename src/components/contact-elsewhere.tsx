import Link from "next/link";
import { elsewhereLinks } from "@/config/site";

export function ContactElsewhereLinks() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-8">
      <div className="mb-4">
        <h2 className="font-semibold text-lg">Elsewhere</h2>
        <p className="mt-1 text-muted-foreground text-sm">
          Verified public profiles — no login-only or unlisted platforms.
        </p>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {elsewhereLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border border-border px-4 py-3 text-sm transition-colors hover:bg-muted/50"
            >
              <span className="font-medium">{item.label}</span>
              <span className="mt-0.5 block truncate font-mono text-[11px] text-muted-foreground">
                {item.href.replace(/^https?:\/\/(www\.)?/, "")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
