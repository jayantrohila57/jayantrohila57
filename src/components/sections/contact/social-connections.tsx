import { Section } from "@/components/layout/section";
import profile from "@/data/profile.json";
import { siteConfig } from "@/data/site.config";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Newspaper,
  ArrowUpRight,
} from "lucide-react";

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

import { SvglIcon, isSvglIcon } from "@/components/ui/icon";
import SectionHeader from "@/components/layout/section-header";

export function SocialConnections() {
  return (
    <Section>
      <SectionHeader
        subtitle="Connect"
        title="Connect With Me"
        description="Find me on these platforms or reach out directly."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {profile.social.map((social) => {
          const isSvgl = isSvglIcon(social.icon);
          const LucideIcon = iconMap[social.icon];

          if (!isSvgl && !LucideIcon) return null;

          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {isSvgl ? (
                  <SvglIcon
                    name={social.icon as any}
                    className="h-6 w-6 text-current"
                  />
                ) : (
                  <LucideIcon className="h-6 w-6" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium">{social.platform}</p>
                <p className="text-sm text-muted-foreground">{social.label}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>
    </Section>
  );
}
