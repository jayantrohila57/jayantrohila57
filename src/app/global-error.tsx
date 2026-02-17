"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FrameTitle,
} from "@/components/ui/frame";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen flex items-center justify-center p-4">
          <Frame>
            <FrameHeader>
              <FrameTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-6 w-6" />
                Critical Error
              </FrameTitle>
              <FrameDescription>
                A critical error has occurred. The application needs to be
                restarted.
              </FrameDescription>
            </FrameHeader>

            <div className="p-2 md:p-4">
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

              <Button
                onClick={handleRetry}
                variant="default"
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Restart Application
              </Button>
            </div>

            <FrameFooter>
              <p className="text-sm text-muted-foreground">
                If this problem continues, please contact your system
                administrator.
              </p>
            </FrameFooter>
          </Frame>
        </div>
      </body>
    </html>
  );
}
