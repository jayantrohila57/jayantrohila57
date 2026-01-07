"use client";

import { useEffect } from "react";
import { AlertTriangle, Home as HomeIcon } from "lucide-react";
import { ThemeProvider, LayoutWrapper } from "@/components/layout";
import "./globals.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { PageActions } from "@/components/ui/page-actions";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>
            <div className="container flex items-center justify-center min-h-[60vh]">
              <Card className="w-full max-w-md border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Critical System Error
                    </CardTitle>
                  </div>
                  <CardAction>
                    <PageActions
                      actions={[
                        {
                          onClick: reset,
                          text: "Restart Application",
                          variant: "destructive",
                        },
                        {
                          href: "/",
                          text: "Go to Homepage",
                          icon: HomeIcon,
                          variant: "outline",
                        },
                      ]}
                    />
                  </CardAction>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-muted-foreground">
                    A critical error has occurred in the application.
                  </CardDescription>
                  <CardDescription className="text-sm text-muted-foreground">
                    We're experiencing a system-wide issue. Our team has been
                    automatically notified and is working to resolve this as
                    quickly as possible.
                  </CardDescription>

                  {process.env.NODE_ENV === "development" && (
                    <div className="space-y-4">
                      <CardTitle className="text-sm font-semibold text-foreground">
                        Critical Error Details:
                      </CardTitle>
                      <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg text-xs font-mono break-all">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
