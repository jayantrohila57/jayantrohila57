import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Newspaper,
  Twitter,
} from "lucide-react";
import { Section } from "@/components/layout/section";

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

import SectionHeader from "@/components/layout/section-header";
import { isSvglIcon, SvglIcon, type SvglIconName } from "@/components/ui/icon";
import type { SocialLink } from "@/data/types";

export function SocialConnections({ social }: { social: SocialLink[] }) {
  if (!social || social.length === 0) return null;

  return (
    <Section>
      <SectionHeader
        subtitle="Connect"
        title="Connect With Me"
        description="Find me on these platforms or reach out directly."
      />

      <div className="grid gap-4 md:grid-cols-2">
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
              className="group flex items-center gap-4 rounded-xl border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {isSvgl ? (
                  <SvglIcon
                    name={socialItem.icon as SvglIconName}
                    className="h-6 w-6 text-current"
                  />
                ) : (
                  <LucideIcon className="h-6 w-6" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium">{socialItem.platform}</p>
                <p className="text-sm text-muted-foreground">
                  {socialItem.label}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>
    </Section>
  );
}
