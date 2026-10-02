import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionFrame } from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Page not found",
  description: "The requested page could not be found.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <SiteShell>
      <SectionFrame border={false} className="flex min-h-[60vh] items-center py-24">
        <div className="border border-border p-10 md:p-16">
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
            Error
          </p>
          <h1 className="mt-4 text-[clamp(4rem,20vw,8rem)] leading-none font-semibold tracking-tighter">
            404
          </h1>
          <p className="mt-6 text-lg text-muted">Page not found.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border px-4 text-sm hover:text-accent"
            >
              Back home
            </Link>
            <Link
              href="/work"
              className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-accent/40 px-4 text-sm text-accent"
            >
              View work
            </Link>
          </div>
        </div>
      </SectionFrame>
    </SiteShell>
  );
}
