import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ExternalLinkRow({
  label,
  href,
  description,
}: {
  label: string;
  href: string;
  description?: string;
}) {
  const external = href.startsWith("http");

  const className =
    "not-prose my-3 flex items-start justify-between gap-4 border-b border-site-border py-3 text-sm last:border-b-0";

  const content = (
    <>
      <div>
        <p className="font-medium text-site-ink">{label}</p>
        {description ? (
          <p className="mt-1 text-site-muted text-pretty">{description}</p>
        ) : null}
        <p className="mt-1 font-mono text-xs text-site-muted break-all">
          {href.replace("https://", "")}
        </p>
      </div>
      <ArrowUpRight className="size-4 shrink-0 text-site-muted" aria-hidden />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={className}
        rel="noreferrer noopener"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export function ExternalLinkList({
  links,
}: {
  links: { label: string; href: string; description?: string }[];
}) {
  return (
    <div className="not-prose my-6 border border-site-border px-4">
      {links.map((link) => (
        <ExternalLinkRow key={link.href} {...link} />
      ))}
    </div>
  );
}
