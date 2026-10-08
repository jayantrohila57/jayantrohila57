import { NotFoundPage } from "@/components/efferd-not-found";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionFrame } from "@/components/primitives/section-frame";
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
      <SectionFrame border={false} spacing="tight" className="pt-8">
        <NotFoundPage />
      </SectionFrame>
    </SiteShell>
  );
}
