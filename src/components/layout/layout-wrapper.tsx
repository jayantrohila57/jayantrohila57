import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "@/lib/utils";

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutWrapper({ children, className }: LayoutWrapperProps) {
  return (
    <div className="flex min-h-screen bg-background flex-col">
      <Header />
      <main className={cn("flex-1", className)}>{children}</main>
      <Footer />
    </div>
  );
}
