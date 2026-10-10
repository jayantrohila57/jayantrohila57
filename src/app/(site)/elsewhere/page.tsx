import { ExternalLink } from "lucide-react";
import {
  ContentShell,
  SectionBleed,
  SectionShell,
  shellCellClassName,
} from "@/components/layout/shells";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { elsewhereLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: staticPageSeo.elsewhere.title,
  description: staticPageSeo.elsewhere.description,
  path: "/elsewhere",
});

const rowClass = cn(
  shellCellClassName(),
  "flex items-center justify-between gap-4 text-sm transition-colors hover:bg-secondary/40",
);

export default function ElsewherePage() {
  return (
    <SectionShell dividerTop={false} spacing="compact">
      <ContentShell
        eyebrow="Elsewhere"
        title="Profiles & links"
        description="Verified public profiles — same links as in site config, collected in one place."
        variant="page"
        headingLevel="h1"
      />
      <SectionBleed className="border-y border-border">
        <ul className="divide-y divide-border">
          {elsewhereLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={rowClass}
              >
                <span className="font-medium text-foreground">{link.label}</span>
                <ExternalLink
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${siteConfig.contact.email}`} className={rowClass}>
              <span className="font-medium text-foreground">Email</span>
              <span className="text-muted-foreground">
                {siteConfig.contact.email}
              </span>
            </a>
          </li>
        </ul>
      </SectionBleed>
    </SectionShell>
  );
}
