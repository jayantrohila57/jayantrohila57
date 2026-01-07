"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => window.history.back()}
      className="gap-2"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </Button>
  );
}
