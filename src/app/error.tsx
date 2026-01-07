"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home as HomeIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { PageActions } from "@/components/ui/page-actions";

export default function Error({
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
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <CardTitle className="text-4xl font-bold text-foreground">
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
        <CardDescription className="text-lg text-muted-foreground">
          We encountered an unexpected error while loading this page.
        </CardDescription>
        <CardDescription className="text-muted-foreground">
          Don't worry, this isn't your fault! Our team has been notified and is
          working on a fix.
        </CardDescription>

        {process.env.NODE_ENV === "development" && (
          <div className="space-y-4">
            <CardTitle className="text-lg font-semibold text-foreground">
              Error Details:
            </CardTitle>
            <div className="bg-muted p-4 rounded-lg text-sm font-mono">
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
  );
}
