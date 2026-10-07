import { technologies, toolboxHighlightIds } from "@/data/technologies";

export function LogoCloud() {
  const labels = technologies
    .filter((t) => toolboxHighlightIds.includes(t.id))
    .map((t) => t.label);

  return (
    <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-8">
      {labels.map((label) => (
        <span
          key={label}
          className="pointer-events-none select-none font-mono text-xs tracking-wide text-muted-foreground uppercase md:text-sm"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/** Demo wordmarks for playground only. */
export function LogoCloudDemo() {
  const logos = [
    {
      alt: "Vercel",
      src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
    },
    {
      alt: "Supabase",
      src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
    },
    {
      alt: "GitHub",
      src: "https://storage.efferd.com/logo/github-wordmark.svg",
    },
  ];
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-8 py-6">
      {logos.map((logo) => (
        <img
          alt={logo.alt}
          className="pointer-events-none h-5 w-fit select-none dark:brightness-0 dark:invert"
          height="auto"
          key={logo.alt}
          loading="lazy"
          src={logo.src}
          width="auto"
        />
      ))}
    </div>
  );
}
