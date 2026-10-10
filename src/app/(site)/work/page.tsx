import { Suspense } from "react";
import { WorkPageBody } from "@/components/portfolio/work-page-body";
import { SectionFrame } from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";

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
    <SectionFrame border={false} spacing="tight">
      <Suspense fallback={null}>
        <WorkPageBody typeParam={type} />
      </Suspense>
    </SectionFrame>
  );
}
