import { Shell } from "@/components/layout/shell";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <div className="">
      <Shell>
        <Shell.Container>
          <div className="p-12"></div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
            {subtitle}
          </p>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl flex items-center gap-2 font-bold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <p className="max-w-2xl text-base text-muted-foreground">
            {description}
          </p>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
    </div>
  );
}
