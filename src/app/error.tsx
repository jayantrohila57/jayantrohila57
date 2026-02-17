"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return <div className="">Error</div>;
}
