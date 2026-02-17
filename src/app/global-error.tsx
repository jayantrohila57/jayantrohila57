"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="">Global Error</div>
      </body>
    </html>
  );
}
