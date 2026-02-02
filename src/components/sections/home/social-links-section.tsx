import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Newspaper,
  Twitter,
} from "lucide-react";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { isSvglIcon, SvglIcon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site.config";
import type { Profile } from "@/data/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  GitHub: Github,
  Linkedin,
  LinkedIn: Linkedin,
  Twitter,
  Mail,
  Newspaper,
  DevTo: Newspaper,
};

export function SocialLinksSection({
  social,
}: {
  social: Profile["social"] | undefined;
}) {
  if (!social || social.length === 0) return null;
  return (
    <>
      <SectionHeader
        subtitle="Connect"
        title="Let's Get in Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities."
      />
      <Section className="bg-muted/30">
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {social.map((socialItem) => {
            const isSvgl = isSvglIcon(socialItem.icon);
            const LucideIcon = iconMap[socialItem.icon];

            if (!isSvgl && !LucideIcon) return null;

            return (
              <a
                key={socialItem.platform}
                href={socialItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {isSvgl ? (
                    <SvglIcon
                      name={socialItem.icon as "LinkedIn"}
                      className="h-5 w-5 text-current"
                    />
                  ) : (
                    <LucideIcon className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{socialItem.platform}</p>
                  <p className="text-sm text-muted-foreground">
                    {socialItem.label}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.author.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
}
