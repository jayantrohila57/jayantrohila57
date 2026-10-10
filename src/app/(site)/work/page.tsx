import { WorkPageBody } from "@/components/portfolio/work-page-body";
import { SectionShell } from "@/components/layout/shells";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { Suspense } from "react";

export const metadata = generatePageMetadata({
  title: staticPageSeo.work.title,
  description: staticPageSeo.work.description,
  path: "/work",
});

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export default async function WorkPage({ searchParams }: Props) {
  const { type } = await searchParams;

  return (
    <SectionShell dividerTop={false} spacing="compact">
      <Suspense fallback={null}>
        <WorkPageBody typeParam={type} />
      </Suspense>
    </SectionShell>
  );
}
