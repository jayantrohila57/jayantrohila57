import Link from "next/link";
import { cn } from "@/lib/utils";
import { FullWidthDivider } from "@/components/full-width-divider";

export type BlogListItem = {
  title: string;
  date: string;
  description: string;
  href: string;
};

export function BlogCard({
  title,
  date,
  description,
  className,
  ...props
}: React.ComponentProps<typeof Link> & {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <Link
      className={cn(
        "group flex min-h-24 w-full flex-col justify-center gap-y-1 p-4 hover:cursor-pointer hover:bg-secondary/60 active:bg-secondary",
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-end sm:gap-2">
        <h3 className="min-w-0 text-pretty font-medium text-base text-foreground sm:text-lg md:text-xl">
          {title}
        </h3>
        <span
          aria-hidden
          className="mb-[6px] hidden min-w-0 flex-1 border-b-2 border-dashed border-border sm:block"
        />
        <span className="shrink-0 font-mono text-[11px] text-muted-foreground uppercase sm:text-xs md:text-sm">
          {date}
        </span>
      </div>
      <div className="max-w-sm text-muted-foreground text-sm group-hover:text-foreground md:max-w-full md:text-base">
        {description}
      </div>
    </Link>
  );
}

export function BlogsList({
  items,
  intro,
}: {
  items: BlogListItem[];
  intro?: { title: string; description?: string };
}) {
  return (
    <div className="w-full">
      {intro ? (
        <div className="space-y-2 px-4 py-8 md:py-10">
          <h2 className="font-semibold text-2xl tracking-wide md:text-3xl">
            {intro.title}
          </h2>
          {intro.description ? (
            <p className="text-muted-foreground text-sm">{intro.description}</p>
          ) : null}
        </div>
      ) : null}
      <div className="relative">
        <FullWidthDivider />
        <div className="divide-y divide-border">
          {items.map((blog) => (
            <BlogCard {...blog} key={blog.href + blog.title} href={blog.href} />
          ))}
        </div>
        <FullWidthDivider />
      </div>
    </div>
  );
}

const demoBlogs: BlogListItem[] = [
  {
    title: "Sample entry",
    date: "Preview",
    description: "Playground placeholder — live site binds portfolio data.",
    href: "#",
  },
];

export function BlogsSection() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col justify-start md:border-x">
      <BlogsList
        intro={{
          title: "Latest Blogs",
          description: "Efferd blogs-1 list pattern (demo).",
        }}
        items={demoBlogs}
      />
    </div>
  );
}
