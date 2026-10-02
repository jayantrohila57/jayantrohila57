import { NotFoundPage } from "@/components/efferd-not-found";
import { SiteShell } from "@/components/layout/site-shell";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Page not found",
  description: "The requested page could not be found.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundPage />
    </SiteShell>
  );
}
