import { resumeData } from "@/lib/resume-data";

export function EducationTimeline() {
  return (
    <section className="not-prose my-8" aria-labelledby="education-timeline">
      <h2
        id="education-timeline"
        className="font-mono text-[0.65rem] uppercase tracking-widest text-site-muted"
      >
        Education & certification
      </h2>
      <ol className="mt-4">
        {resumeData.education.map((item) => (
          <li
            key={item.credential}
            className="grid gap-2 border-t border-site-border py-5 first:border-t-0 md:grid-cols-[minmax(0,10rem)_1fr]"
          >
            <p className="font-mono text-xs text-site-muted">{item.period}</p>
            <div>
              <p className="font-medium text-site-ink">{item.credential}</p>
              <p className="mt-1 text-sm text-site-muted">{item.institution}</p>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  className="mt-2 inline-block text-sm text-site-accent hover:underline"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  View certificate →
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
