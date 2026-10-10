import { BlogPre, BlogProse } from "@/components/blog/blog-prose";

export function LenisNestedScrollPost() {
  return (
    <BlogProse>
      <p>
        I run Lenis on this portfolio for smooth in-page scrolling. It works
        well for long case-study pages and the writing index. The trade-off is
        familiar: Lenis listens to wheel events on the document and tries to
        own vertical movement. Any panel that should scroll independently — a
        mobile menu, a command palette list, or a sheet — must opt out on the
        correct axis. Get that wrong and either the panel feels stuck or the
        page stops scrolling when the pointer happens to be over a wide code
        block.
      </p>
      <p>
        The fix is not to disable Lenis globally. It is to mark nested scroll
        surfaces with the right attribute for the gesture direction, and to use
        a shared <code>CodeBlock</code> component for samples so horizontal
        overflow never carries full <code>data-lenis-prevent</code>.
      </p>

      <h2>What Lenis is doing</h2>
      <p>
        Lenis is initialized in a client component that loads after idle time
        (and only when the user has not requested reduced motion). The instance
        uses <code>smoothWheel: true</code>, <code>allowNestedScroll: true</code>,
        and a <code>prevent</code> callback. Lenis walks the event composed path;
        when a node opts out for that gesture, Lenis does not call{" "}
        <code>preventDefault</code> and native overflow scrolling can run.
      </p>
      <BlogPre>
        {`// src/components/lenis-init.tsx (excerpt)
const lenis = new Lenis({
  smoothWheel: true,
  allowNestedScroll: true,
  prevent: (node) =>
    node instanceof HTMLElement && shouldLenisPreventScroll(node),
});`}
      </BlogPre>

      <h2>Vertical panes vs code blocks</h2>
      <p>
        <strong>Vertical nested scroll</strong> (command menu, mobile drawer,
        sheets): use <code>data-lenis-prevent</code> or{" "}
        <code>className="lenis-prevent"</code> with <code>overflow-y-auto</code>{" "}
        and a max height. The <code>prevent</code> callback only treats{" "}
        <code>.lenis-prevent</code> as a full opt-out when the element can
        actually scroll vertically, so a horizontal-only node does not trap the
        wheel by accident.
      </p>
      <p>
        <strong>Horizontal-only code</strong>: use the shared{" "}
        <code>CodeBlock</code> / <code>BlogPre</code> wrapper —{" "}
        <code>overflow-x-auto</code> plus{" "}
        <code>data-lenis-prevent-horizontal</code>. Vertical wheel over the
        block smooth-scrolls the page; shift+wheel or a sideways trackpad
        gesture scrolls the snippet. Do not put <code>data-lenis-prevent</code>{" "}
        on those blocks.
      </p>
      <BlogPre>
        {`// src/lib/lenis-prevent.ts (excerpt)
export function shouldLenisPreventScroll(node: HTMLElement): boolean {
  if (node.hasAttribute("data-lenis-prevent")) return true;
  if (node.classList.contains("lenis-prevent")) {
    return node.scrollHeight > node.clientHeight + 1;
  }
  return false;
}`}
      </BlogPre>
      <p>
        Lenis 1.3+ also understands axis-specific attributes without the
        callback: <code>data-lenis-prevent-vertical</code> and{" "}
        <code>data-lenis-prevent-horizontal</code> apply only when the wheel
        delta is primarily vertical or horizontal. Tall code with{" "}
        <code>max-h-*</code> uses the vertical attribute so the interior scrolls
        first; <code>allowNestedScroll</code> helps hand off to the page at the
        edge.
      </p>

      <h2>Where I apply it on this site</h2>
      <ul>
        <li>
          <strong>Mobile navigation</strong> — full <code>data-lenis-prevent</code>{" "}
          on the scrolling panel.
        </li>
        <li>
          <strong>Command menu</strong> — capped list with full prevention.
        </li>
        <li>
          <strong>Sheets and dropdowns</strong> — Radix content nodes with{" "}
          <code>data-lenis-prevent</code>.
        </li>
        <li>
          <strong>Code samples</strong> — <code>CodeBlock</code> with horizontal
          prevention only (see below).
        </li>
        <li>
          <strong>ScrollArea primitive</strong> — vertical nested scroll helper.
        </li>
      </ul>
      <BlogPre>
        {`<Command.List
  className="lenis-prevent max-h-80 overflow-y-auto p-2"
  data-lenis-prevent=""
/>

// Wide sample — page scrolls vertically over the block
<pre data-lenis-prevent-horizontal className="overflow-x-auto">…</pre>`}
      </BlogPre>

      <h2>Reduced motion and touch</h2>
      <p>
        Lenis does not boot when <code>prefers-reduced-motion: reduce</code> is
        set. I keep <code>syncTouch: false</code> for document touch behavior.
        Horizontal swipe on a wide <code>pre</code> still uses native{" "}
        <code>overflow-x</code> scrolling on touch devices because Lenis does
        not claim that axis on horizontal-only blocks.
      </p>

      <h2>Checklist for new UI</h2>
      <ul>
        <li>
          Vertical list in a dialog → <code>data-lenis-prevent</code> +{" "}
          <code>overflow-y-auto</code>.
        </li>
        <li>
          Wide code → <code>CodeBlock</code> or{" "}
          <code>data-lenis-prevent-horizontal</code>, never full prevent.
        </li>
        <li>
          Tall code → <code>maxHeightClass</code> on <code>CodeBlock</code> (
          <code>data-lenis-prevent-vertical</code>).
        </li>
      </ul>
      <p>
        Full details live in <code>docs/LENIS.md</code> in the repo.
      </p>
    </BlogProse>
  );
}
