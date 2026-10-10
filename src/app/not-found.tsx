import { NotFoundPage } from "@/components/efferd-not-found";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionShell } from "@/components/layout/shells";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Page not found | Jayant Rohila",
  description:
    "This page does not exist on jayantrohila.com. Browse work, about, or contact from the homepage.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <SiteShell>
      <SectionShell dividerTop={false} spacing="compact" className="pt-8">
        <NotFoundPage />
      </SectionShell>
    </SiteShell>
  );
}
