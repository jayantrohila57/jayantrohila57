import { cn } from "@/lib/utils";

interface ShellProps {
  className?: string;
  children: React.ReactNode;
}

const Shell = ({ className, children, ...props }: ShellProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-[0%_0.5rem_1fr_0.5rem_0%]  md:grid-cols-[15%_2.5rem_1fr_2.5rem_15%] grid-rows-[1px_1fr_1px]",
        "relative h-full w-full  bg-white [--pattern-fg:var(--color-black)]/10 dark:bg-background dark:[--pattern-fg:var(--color-white)]/10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ShellContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ShellContainer = ({ children, className }: ShellContainerProps) => {
  return (
    <div
      className={cn(
        "col-start-3 row-start-2 grid w-full bg-card/30",
        className,
      )}
    >
      {children}
    </div>
  );
};

const ShellLeftDecoration = () => {
  return (
    <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};

const ShellRightDecoration = () => {
  return (
    <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};

const ShellTopDecoration = () => {
  return (
    <div className="relative col-span-full col-start-1 row-start-1 h-px bg-(--pattern-fg)"></div>
  );
};

const ShellBottomDecoration = () => {
  return (
    <div className="relative col-span-full col-start-1 row-start-3 h-px bg-(--pattern-fg)"></div>
  );
};

Shell.Container = ShellContainer;
Shell.LeftDecoration = ShellLeftDecoration;
Shell.RightDecoration = ShellRightDecoration;
Shell.TopDecoration = ShellTopDecoration;
Shell.BottomDecoration = ShellBottomDecoration;

export { Shell };
