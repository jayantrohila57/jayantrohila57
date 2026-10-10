import { ExternalLink } from "lucide-react";
import {
  PAGE_BORDERED_CELL_CLASS,
  PageBleed,
} from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
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
  PAGE_BORDERED_CELL_CLASS,
  "flex items-center justify-between gap-4 text-sm transition-colors hover:bg-secondary/40",
);

export default function ElsewherePage() {
  return (
    <SectionFrame border={false} spacing="tight">
      <SectionIntro
        label="Elsewhere"
        title="Profiles & links"
        description="Verified public profiles — same links as in site config, collected in one place."
      />
      <PageBleed className="border-y border-border">
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
      </PageBleed>
    </SectionFrame>
  );
}
