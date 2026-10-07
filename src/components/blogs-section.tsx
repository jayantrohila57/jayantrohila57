import Link from "next/link";
import { FullWidthDivider } from "@/components/full-width-divider";
import { cn } from "@/lib/utils";

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
        "group flex min-h-24 w-full max-w-full min-w-0 flex-col justify-center gap-y-1 overflow-hidden p-4 hover:cursor-pointer hover:bg-secondary/60 active:bg-secondary",
        className,
      )}
      {...props}
    >
      <div className="flex w-full min-w-0 max-w-full flex-col gap-1 md:flex-row md:items-end md:gap-2">
        <h3 className="min-w-0 max-w-full break-words font-medium text-base text-pretty text-foreground [overflow-wrap:anywhere] md:text-xl">
          {title}
        </h3>
        <span
          aria-hidden
          className="mb-[6px] hidden min-w-0 flex-1 border-b-2 border-dashed border-border md:block"
        />
        <span className="max-w-full shrink-0 self-start font-mono text-[11px] text-muted-foreground uppercase md:self-auto md:text-sm">
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
      <div className="relative min-w-0 max-w-full overflow-hidden">
        <FullWidthDivider />
        <div className="min-w-0 divide-y divide-border">
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
