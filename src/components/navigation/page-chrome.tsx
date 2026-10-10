"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useMemo } from "react";
import { SectionRule, SHELL_GUTTER_X_CLASS } from "@/components/layout/shells";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

const backButtonClass = cn(
  "inline-flex size-7 shrink-0 items-center justify-center rounded-md",
  "text-muted-foreground transition-colors",
  "hover:bg-muted/50 hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

export function PageChrome() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div
        className={cn(
          SHELL_GUTTER_X_CLASS,
          "flex min-h-9 flex-row items-center gap-0 py-4",
        )}
      >
        <button
          type="button"
          className={backButtonClass}
          onClick={handleBack}
          aria-label="Go back"
          title="Go back"
        >
          <ArrowLeft className="size-3.5" strokeWidth={2} aria-hidden />
        </button>
        <span
          className="mx-2 h-3.5 w-px shrink-0 bg-border"
          aria-hidden
        />
        <Breadcrumb className="min-w-0 flex-1">
          <BreadcrumbList className="text-sm leading-none">
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
      <SectionRule />
    </>
  );
}
