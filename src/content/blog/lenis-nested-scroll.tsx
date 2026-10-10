import { BlogPre, BlogProse } from "@/components/blog/blog-prose";

export function LenisNestedScrollPost() {
  return (
    <BlogProse>
      <p>
        I run Lenis on this portfolio for smooth in-page scrolling. It works
        well for long case-study pages and the writing index. The trade-off is
        familiar: Lenis listens to wheel events on the document and tries to
        own vertical movement. Any panel that should scroll independently — a
        mobile menu, a command palette list, a sheet, a sidebar, or a wide code
        block — can feel stuck or “rubbery” unless you opt it out explicitly.
      </p>
      <p>
        The fix is not to disable Lenis globally. It is to mark nested scroll
        surfaces so Lenis steps aside. On this site that is a small convention
        backed by one helper and a CSS class mirrored in the Lenis config.
      </p>

      <h2>What Lenis is doing</h2>
      <p>
        Lenis is initialized in a client component that loads after idle time
        (and only when the user has not requested reduced motion). The instance
        uses <code>smoothWheel: true</code> and a <code>prevent</code> callback.
        That callback runs for nodes involved in a wheel gesture; when it
        returns <code>true</code>, Lenis does not hijack the event.
      </p>
      <BlogPre>
        {`// src/components/lenis-init.tsx (excerpt)
const lenis = new Lenis({
  smoothWheel: true,
  prevent: (node) =>
    node instanceof HTMLElement && shouldLenisPreventScroll(node),
});`}
      </BlogPre>
      <p>
        The important detail is that the check walks the event target’s
        ancestors. If any ancestor is marked as a nested scroll region, Lenis
        leaves the wheel alone and the browser’s native overflow scrolling
        works.
      </p>

      <h2>The convention: attribute + class</h2>
      <p>
        I keep two equivalent markers in sync so markup and components stay
        readable:
      </p>
      <ul>
        <li>
          <code>data-lenis-prevent</code> on the scrollable element (or a
          wrapper that should count as nested scroll)
        </li>
        <li>
          <code>className="lenis-prevent"</code> for the same behavior via CSS
          class
        </li>
      </ul>
      <BlogPre>
        {`// src/lib/lenis-prevent.ts
export function shouldLenisPreventScroll(node: HTMLElement): boolean {
  if (node.hasAttribute("data-lenis-prevent")) return true;
  if (node.classList.contains("lenis-prevent")) return true;
  return false;
}`}
      </BlogPre>
      <p>
        The global stylesheet also defines <code>.lenis-prevent</code> with{" "}
        <code>overscroll-behavior: contain</code> so nested panes do not yank
        the page scroll when you hit the end of a list.
      </p>

      <h2>Where I apply it on this site</h2>
      <p>
        Any UI that is <code>overflow-y-auto</code> or{" "}
        <code>overflow-x-auto</code> and should feel like a native scroll view
        gets the marker. Concrete places in this repo:
      </p>
      <ul>
        <li>
          <strong>Mobile navigation</strong> — the full-screen menu panel scrolls
          while the page behind it stays put.
        </li>
        <li>
          <strong>Command menu</strong> — the <code>Command.List</code> is capped
          in height and scrolls inside the dialog.
        </li>
        <li>
          <strong>Sheets and dropdowns</strong> — Radix-based surfaces set{" "}
          <code>data-lenis-prevent</code> on the content node.
        </li>
        <li>
          <strong>Code samples</strong> — blog posts and engineering notes wrap{" "}
          <code>&lt;pre&gt;</code> blocks with <code>lenis-prevent</code> and{" "}
          <code>overflow-x-auto</code> so horizontal swipes on a phone scroll
          the snippet instead of the page.
        </li>
        <li>
          <strong>ScrollArea primitive</strong> — a shared wrapper applies the
          attribute so feature code does not forget it.
        </li>
      </ul>
      <BlogPre>
        {`<Command.List
  className="lenis-prevent max-h-80 overflow-y-auto p-2"
  data-lenis-prevent=""
/>`}
      </BlogPre>

      <h2>Reduced motion and touch</h2>
      <p>
        Lenis does not boot when <code>prefers-reduced-motion: reduce</code> is
        set. Anchor links still work; the browser handles scrolling. I also keep{" "}
        <code>syncTouch: false</code> so touch dragging on the page does not
        fight mobile browser behavior. Nested scroll regions remain important on
        touch devices because overflow panels still need to capture vertical
        gestures inside their bounds.
      </p>

      <h2>Checklist for new UI</h2>
      <p>When I add a scrollable overlay or inset panel, I ask:</p>
      <ul>
        <li>Does this element have its own scrollbar (vertical or horizontal)?</li>
        <li>Should wheel or trackpad input scroll this element instead of the page?</li>
        <li>Is the element inside a dialog, sheet, or sticky header region?</li>
      </ul>
      <p>
        If yes, I add <code>lenis-prevent</code> and{" "}
        <code>data-lenis-prevent</code>. That is the whole contract. Lenis keeps
        the marketing smoothness; nested areas keep the behavior users expect from
        the platform.
      </p>
    </BlogProse>
  );
}
