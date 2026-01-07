"use client";

import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center space-y-8 max-w-2xl">
            {/* Critical Error Illustration */}
            <div className="relative">
              <div className="text-9xl font-bold text-red-600/20">💥</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertTriangle className="h-24 w-24 text-red-600" />
              </div>
            </div>

            {/* Critical Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Critical System Error
              </h1>
              <p className="text-xl text-muted-foreground">
                A critical error has occurred in the application.
              </p>
              <p className="text-muted-foreground">
                We're experiencing a system-wide issue. Our team has been
                automatically notified and is working to resolve this as quickly
                as possible.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && (
              <div className="text-left space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Critical Error Details:
                </h3>
                <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded-lg text-sm font-mono text-left">
                  <p className="text-red-600 dark:text-red-400">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-muted-foreground mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                  <details className="mt-2">
                    <summary className="cursor-pointer text-red-600 hover:underline">
                      Full Stack Trace
                    </summary>
                    <pre className="mt-2 text-xs overflow-x-auto whitespace-pre-wrap text-red-800 dark:text-red-200">
                      {error.stack}
                    </pre>
                  </details>
                </div>
              </div>
            )}

            {/* Emergency Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Immediate Actions:
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset} size="lg" variant="destructive">
                  Restart Application
                </Button>

                <Button variant="outline" size="lg" asChild className="gap-2">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Go to Homepage
                  </Link>
                </Button>
              </div>
            </div>

            {/* Status Information */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                What's happening:
              </h3>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• This is a critical system error</li>
                <li>• The application cannot continue normally</li>
                <li>• Our monitoring systems have detected this issue</li>
                <li>• Engineers are working on a resolution</li>
                <li>• Service will be restored as soon as possible</li>
              </ul>
            </div>

            {/* Alternative Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                While we fix this:
              </h3>
              <p className="text-muted-foreground">
                You can still reach me through these channels:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" asChild>
                  <Link href={`mailto:${siteConfig.contact.email}`}>
                    Email: {siteConfig.contact.email}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={siteConfig.social.github || "#"}>
                    GitHub: @{siteConfig.siteName}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={siteConfig.social.linkedin || "#"}>
                    LinkedIn: {siteConfig.siteName}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={siteConfig.social.twitter || "#"}>
                    Twitter: @{siteConfig.siteName}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Apology Message */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                I sincerely apologize for this inconvenience. Your experience is
                important to me, and I'm working to resolve this issue.
              </p>
              <p className="text-xs text-muted-foreground">
                Thank you for your patience and understanding.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
