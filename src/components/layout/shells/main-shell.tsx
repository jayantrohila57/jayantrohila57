import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SHELL_MAX_WIDTH_CLASS, SHELL_RAILS_CLASS } from "./tokens";

export type MainShellProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Page column: max width, centering, and continuous left/right rails.
 * Header, main, and footer all render inside this shell.
 */
export function MainShell({ children, className }: MainShellProps) {
  return (
    <div
      data-page-column=""
      className={cn(
        SHELL_MAX_WIDTH_CLASS,
        SHELL_RAILS_CLASS,
        "flex min-h-dvh min-w-0 flex-col overflow-x-clip",
        className,
      )}
    >
      {children}
    </div>
  );
}
