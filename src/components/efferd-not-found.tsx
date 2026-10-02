import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { FullWidthDivider } from "@/components/full-width-divider";
import { CompassIcon, HomeIcon } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden py-16">
      <div className="flex min-h-[50vh] items-center border-x border-border">
        <div>
          <FullWidthDivider />
          <Empty>
            <EmptyHeader>
              <EmptyTitle className="font-black font-mono text-8xl">404</EmptyTitle>
              <EmptyDescription className="text-nowrap">
                The page you&apos;re looking for might have been <br />
                moved or doesn&apos;t exist.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/">
                    <HomeIcon data-icon="inline-start" />
                    Go home
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
          <FullWidthDivider />
        </div>
      </div>
    </div>
  );
}
