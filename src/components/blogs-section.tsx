import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import {
  PAGE_GUTTER_CLASS,
  PageBleed,
} from "@/components/primitives/page-column";
import { cn } from "@/lib/utils";

export type BlogListItem = {
  title: string;
  date: string;
  description: string;
  href: string;
};

export type WorkListItem = {
  index: number;
  title: string;
  description: string;
  meta: string;
  href: string;
};

export function WorkListRow({
  index,
  title,
  description,
  meta,
  href,
  className,
}: WorkListItem & { className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex min-h-20 w-full min-w-0 max-w-full items-start gap-4 px-4 py-4 transition-colors hover:bg-secondary/50 md:items-center md:gap-6 md:px-6 md:py-6",
        className,
      )}
    >
      <span
        className="shrink-0 font-mono text-xs tracking-widest text-muted-foreground tabular-nums"
        aria-hidden
      >
        {String(index).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1 space-y-1">
        <h3 className="font-medium text-base text-foreground md:text-xl group-hover:text-link-accent">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
        <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase md:text-[11px]">
          {meta}
        </p>
      </div>
      <ArrowRightIcon
        className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground md:mt-0"
        aria-hidden
      />
    </Link>
  );
}

export function WorkList({ items }: { items: WorkListItem[] }) {
  return (
    <PageBleed className="relative min-w-0 max-w-full overflow-hidden border-y border-border">
      <div className="min-w-0 divide-y divide-border">
        {items.map((item) => (
          <WorkListRow key={item.href + item.title} {...item} />
        ))}
      </div>
    </PageBleed>
  );
}

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
        "group flex min-h-24 w-full max-w-full min-w-0 flex-col justify-center gap-y-1 overflow-hidden px-4 py-4 hover:cursor-pointer hover:bg-secondary/60 active:bg-secondary md:px-6",
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
      <PageBleed className="relative min-w-0 max-w-full overflow-hidden border-y border-border">
        <div className="min-w-0 divide-y divide-border">
          {items.map((blog) => (
            <BlogCard {...blog} key={blog.href + blog.title} href={blog.href} />
          ))}
        </div>
      </PageBleed>
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
