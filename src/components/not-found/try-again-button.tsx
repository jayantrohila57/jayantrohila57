"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TryAgainButton() {
  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => window.location.reload()}
      className="gap-2"
    >
      <Search className="h-4 w-4" />
      Try Again
    </Button>
  );
}
