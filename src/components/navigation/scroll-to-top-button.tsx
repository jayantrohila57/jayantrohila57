"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { headerIconButtonClass } from "@/components/layout/header-icon-button";
import { Button } from "@/components/ui/button";
import { scrollToTop, subscribeScrollPosition } from "@/lib/lenis-controller";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 320;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = (y: number) => {
      setVisible(y > SHOW_AFTER_PX);
    };
    return subscribeScrollPosition(onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        headerIconButtonClass,
        "fixed right-4 bottom-4 z-40 md:right-6 md:bottom-6",
      )}
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={() => scrollToTop()}
    >
      <ArrowUp className="size-4" aria-hidden />
    </Button>
  );
}
