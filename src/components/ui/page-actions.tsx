import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageActionProps {
  href?: string;
  onClick?: () => void;
  text: string;
  icon?: LucideIcon;
  variant?: "default" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

interface PageActionsProps {
  actions: PageActionProps[];
  layout?: "vertical" | "horizontal";
}

export function PageActions({
  actions,
  layout = "horizontal",
}: PageActionsProps) {
  const containerClass =
    layout === "horizontal"
      ? "flex flex-col sm:flex-row gap-4 pt-4"
      : "space-y-4 pt-4";

  return (
    <div className={containerClass}>
      {actions.map((action) => {
        const key =
          action.href ?? `${action.text}-${action.variant ?? "default"}`;
        const buttonContent = (
          <>
            {action.icon && <action.icon className="h-5 w-5" />}
            {action.text}
          </>
        );

        if (action.href) {
          return (
            <Button
              key={key}
              asChild
              size={action.size || "lg"}
              variant={action.variant || "default"}
              className="gap-2"
            >
              <Link href={action.href} className="flex items-center">
                {buttonContent}
              </Link>
            </Button>
          );
        }

        return (
          <Button
            key={key}
            onClick={action.onClick}
            size={action.size || "lg"}
            variant={action.variant || "default"}
            className="gap-2"
          >
            {buttonContent}
          </Button>
        );
      })}
    </div>
  );
}
