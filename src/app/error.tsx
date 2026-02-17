"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <Frame>
      <FrameHeader>
        <FrameTitle className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="h-6 w-6" />
          Something went wrong
        </FrameTitle>
        <FrameDescription>
          We encountered an unexpected error. Please try again.
        </FrameDescription>
      </FrameHeader>

      <FramePanel className="h-full w-full">
        {error?.message && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
            <p className="text-sm text-destructive font-mono">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleRetry}
            variant="default"
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Button
            onClick={handleGoHome}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Button>
        </div>
      </FramePanel>

      <FrameFooter>
        <p className="text-sm text-muted-foreground">
          If this problem persists, please contact support.
        </p>
      </FrameFooter>
    </Frame>
  );
}
