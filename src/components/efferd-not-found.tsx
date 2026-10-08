import { CompassIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { PageRule } from "@/components/primitives/page-column";
import { SectionFrame } from "@/components/primitives/section-frame";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export function NotFoundPage() {
  return (
    <SectionFrame border={false} spacing="tight">
      <PageRule />
      <div className="flex w-full flex-col items-center py-16 md:py-24">
        <Empty className="w-full max-w-lg border-0">
          <EmptyHeader>
            <EmptyTitle className="font-black font-mono text-8xl">404</EmptyTitle>
            <EmptyDescription>This page doesn&apos;t exist.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild>
                <Link href="/">
                  <HomeIcon data-icon="inline-start" />
                  Back home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/work">
                  <CompassIcon data-icon="inline-start" />
                  View work
                </Link>
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
      <PageRule />
    </SectionFrame>
  );
}
