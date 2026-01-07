"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Error Illustration */}
        <div className="relative">
          <div className="text-9xl font-bold text-destructive/20">⚠️</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="h-24 w-24 text-destructive" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="text-xl text-muted-foreground">
            We encountered an unexpected error while loading this page.
          </p>
          <p className="text-muted-foreground">
            Don't worry, this isn't your fault! Even the best code can have
            hiccups. Our team has been notified and is working on a fix.
          </p>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Error Details:
            </h3>
            <div className="bg-muted p-4 rounded-lg text-sm font-mono text-left">
              <p className="text-red-600">{error.message}</p>
              {error.digest && (
                <p className="text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-primary hover:underline">
                  Stack Trace
                </summary>
                <pre className="mt-2 text-xs overflow-x-auto whitespace-pre-wrap">
                  {error.stack}
                </pre>
              </details>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Button variant="outline" size="lg" asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Helpful Suggestions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            What you can do:
          </h3>
          <ul className="text-left text-muted-foreground space-y-2">
            <li>• Refresh the page and try again</li>
            <li>• Check your internet connection</li>
            <li>• Try accessing a different page</li>
            <li>• Clear your browser cache and cookies</li>
            <li>• Contact us if the problem persists</li>
          </ul>
        </div>

        {/* Contact Support */}
        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Still having trouble?
          </h3>
          <p className="text-muted-foreground">
            Feel free to reach out to me directly. I'm here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={`mailto:${siteConfig.contact.email}`}>
                Send Email
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={siteConfig.social.twitter || "#"}>DM on Twitter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
