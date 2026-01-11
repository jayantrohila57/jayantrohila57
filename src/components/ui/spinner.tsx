import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"output">) {
  return (
    <output
      aria-live="polite"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    >
      <Loader2Icon className="size-full" />
    </output>
  );
}

export { Spinner };
