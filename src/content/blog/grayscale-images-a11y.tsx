import { BlogPre, BlogProse } from "@/components/blog/blog-prose";

export function GrayscaleImagesPost() {
  return (
    <BlogProse>
      <p>
        Project thumbnails on this site default to grayscale and return to full
        color when the user hovers or focuses the card. The effect is subtle —
        it keeps the grid calm while still rewarding exploration. The
        implementation is a single utility class in global CSS, applied through
        a tiny helper so JSX stays consistent.
      </p>

      <h2>The content-image class</h2>
      <p>
        Styles live in <code>src/app/global.css</code> under{" "}
        <code>.content-image</code>. The React helper exports a constant class
        name from <code>src/lib/content-image.ts</code> so media components do
        not hard-code strings.
      </p>
      <BlogPre>
        {`/* global.css (excerpt) */
.content-image {
  transition: filter 300ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .content-image {
    filter: grayscale(1);
  }

  .content-image:hover,
  .group:hover .content-image,
  .group:focus-within .content-image,
  .group:focus-visible .content-image {
    filter: grayscale(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .content-image {
    transition: none;
  }
}`}
      </BlogPre>

      <h2>Why hover and focus-within</h2>
      <p>
        Pointer users get color on hover. Keyboard users need the same affordance
        when focus moves inside a project link, so the selectors include{" "}
        <code>.group:focus-within</code> and <code>.group:focus-visible</code> on
        the card wrapper. The card is a single interactive surface (
        <code>Link</code> with <code>group</code>), which keeps focus management
        simple.
      </p>

      <h2>Touch-first devices</h2>
      <p>
        The grayscale filter is wrapped in{" "}
        <code>@media (hover: hover) and (pointer: fine)</code>. On phones and
        tablets without a fine pointer, images stay in color all the time — there
        is no hover state to discover, so forcing grayscale would only reduce
        clarity.
      </p>

      <h2>Reduced motion</h2>
      <p>
        When <code>prefers-reduced-motion: reduce</code> is set, the transition
        on the filter is disabled. Color may still change instantly on hover where
        hover is available; the important part is avoiding animated filter
        transitions for users who asked for less motion.
      </p>

      <h2>Using it on new media</h2>
      <p>
        Any screenshot or preview image inside a project card should use the
        helper class on the <code>img</code> or media wrapper. Do not duplicate
        filter logic in Tailwind arbitrary values — one CSS block keeps behavior
        aligned with accessibility media queries.
      </p>
      <BlogPre>
        {`import { contentImageClass } from "@/lib/content-image";

<img
  src={src}
  alt={alt}
  className={contentImageClass}
/>`}
      </BlogPre>
      <p>
        If you add motion beyond filter (scale, parallax), gate those effects
        behind the same reduced-motion query or skip them entirely. The grayscale
        pattern is intentionally boring: predictable, testable, and easy to
        explain in a design review.
      </p>
    </BlogProse>
  );
}
