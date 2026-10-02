"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Dialog({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

export function DialogContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn(
          "fixed top-[15%] left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-[var(--radius-md)] border border-border bg-panel p-0 shadow-xl outline-none",
          className,
        )}
      >
        {children}
        <DialogPrimitive.Close className="absolute top-3 right-3 rounded-[var(--radius-sm)] p-1 text-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent/50">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "border-b border-border px-4 py-3 font-mono text-xs tracking-widest text-muted uppercase",
        className,
      )}
    >
      {children}
    </DialogPrimitive.Title>
  );
}
