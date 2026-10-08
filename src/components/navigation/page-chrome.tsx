"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useMemo } from "react";
import { headerIconButtonClass } from "@/components/layout/header-icon-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  breadcrumbListStructuredData,
  getBackHref,
  getBreadcrumbs,
} from "@/lib/breadcrumbs";
import { cn } from "@/lib/utils";

function isSameOriginReferrer(): boolean {
  if (!document.referrer) return false;
  try {
    return new URL(document.referrer).origin === window.location.origin;
  } catch {
    return false;
  }
}

export function PageChrome({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const crumbs = useMemo(() => getBreadcrumbs(pathname), [pathname]);

  if (crumbs.length === 0) return null;

  const backHref = getBackHref(crumbs);
  const jsonLd = breadcrumbListStructuredData(crumbs);

  const handleBack = () => {
    if (isSameOriginReferrer() && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(backHref);
  };

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 border-b border-border px-4 py-3 md:px-6",
        className,
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        className={headerIconButtonClass}
        onClick={handleBack}
        aria-label="Go back"
        title="Go back"
      >
        <ArrowLeft className="size-4" aria-hidden />
      </Button>
      <Breadcrumb className="min-w-0 flex-1">
        <BreadcrumbList>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <Fragment key={`${crumb.label}-${index}`}>
                {index > 0 ? <BreadcrumbSeparator /> : null}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href ?? "/"}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
