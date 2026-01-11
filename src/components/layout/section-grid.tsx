import { cn } from "@/lib/utils";

interface SectionGridProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  length?: number;
  grid?: number;
}

const SectionGrid = ({
  children,
  className,
  index,
  length,
  grid,
  ...props
}: SectionGridProps) => {
  const isOdd = index % 2 === 0;
  const last = length && index === length - 1;
  const secondLast = length && index === length - 2;
  return (
    <div
      className={cn(
        "grid grid-cols-[16px_1fr_16px] grid-rows-[16px_1px_auto_1px]",
        "relative h-full w-full  bg-background [--pattern-fg:var(--color-black)]/10 dark:bg-background dark:[--pattern-fg:var(--color-white)]/10",
        isOdd && "grid-cols-[16px_1fr_16px] md:grid-cols-[16px_1fr]",
        secondLast &&
          "grid-rows-[16px_1px_auto_1px] md:grid-rows-[16px_1px_auto_1px_16px]",
        last && "grid-rows-[16px_1px_auto_1px_16px]",
      )}
      {...props}
    >
      <div className={cn("col-start-2 row-start-3 bg-muted/30", className)}>
        {children}
      </div>
      <div className="relative col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-size-[10px_10px] bg-fixed"></div>
      {!isOdd && (
        <div className="relative col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-size-[10px_10px] bg-fixed"></div>
      )}
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  );
};

const SectionSingleGrid = ({
  children,
  className,
  index,
  length,
}: SectionGridProps) => {
  const isOdd = index % 2 === 0;
  const last = length && index === length - 1;
  const secondLast = length && index === length - 2;
  return (
    <div
      className={cn(
        "grid grid-cols-[16px_1fr_16px] grid-rows-[16px_1px_auto_1px]",
        "relative h-full w-full  bg-background [--pattern-fg:var(--color-black)]/10 dark:bg-background dark:[--pattern-fg:var(--color-white)]/10",
        // isOdd && "grid-cols-[16px_1fr_16px] md:grid-cols-[16px_1fr]",
        // secondLast &&
        //   "grid-rows-[16px_1px_auto_1px] md:grid-rows-[16px_1px_auto_1px_16px]",
        last && "grid-rows-[16px_1px_auto_1px_16px]",
      )}
    >
      <div className={cn("col-start-2 row-start-3 bg-muted/30", className)}>
        {children}
      </div>
      <div className="relative col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-size-[10px_10px] bg-fixed"></div>
      {/* <div className="relative col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-size-[10px_10px] bg-fixed"></div> */}
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  );
};

export default SectionGrid;
export { SectionSingleGrid };
