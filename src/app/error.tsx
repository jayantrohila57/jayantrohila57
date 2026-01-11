"use client";

import { AlertTriangle, Home as HomeIcon, RefreshCw } from "lucide-react";
import { useEffect } from "react";
import { LayoutWrapper } from "@/components/layout";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageActions } from "@/components/ui/page-actions";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <LayoutWrapper>
      <div className="container flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md border-destructive/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <CardTitle className="text-2xl font-bold text-foreground">
                Something went wrong
              </CardTitle>
            </div>
            <CardAction>
              <PageActions
                actions={[
                  {
                    onClick: reset,
                    text: "Try Again",
                    icon: RefreshCw,
                  },
                  {
                    href: "/",
                    text: "Back to Home",
                    icon: HomeIcon,
                    variant: "outline",
                  },
                ]}
              />
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-4">
            <CardDescription className="text-base text-muted-foreground">
              We encountered an unexpected error while loading this page.
            </CardDescription>
            <CardDescription className="text-sm text-muted-foreground">
              Don't worry, this isn't your fault! Our team has been notified and
              is working on a fix.
            </CardDescription>

            {process.env.NODE_ENV === "development" && (
              <div className="space-y-4">
                <CardTitle className="text-sm font-semibold text-foreground">
                  Error Details:
                </CardTitle>
                <div className="bg-muted p-4 rounded-lg text-xs font-mono break-all">
                  <p className="text-destructive">{error.message}</p>
                  {error.digest && (
                    <p className="text-muted-foreground mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
