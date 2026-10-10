# Lenis smooth scroll

This site uses [Lenis](https://github.com/darkroomengineering/lenis) for smooth wheel scrolling on the document. Lenis is mounted in `src/components/lenis-init.tsx` and registered via `src/lib/lenis-controller.ts`.

## Reduced motion

When the visitor prefers reduced motion (`prefers-reduced-motion: reduce`), Lenis is **not** initialized. The page uses native scrolling and `scrollToTop` / `scrollToHash` fall back to `window.scrollTo` and `scrollIntoView`.

## Route changes

On every client-side pathname change, the window scrolls to the top unless the URL includes a `#hash`, in which case Lenis scrolls to that anchor (with header offset). `history.scrollRestoration` is set to `manual` in `ScrollRestoration`.

## Nested scroll areas

Lenis intercepts wheel events on the document. Panels with their own **vertical** scroll (`overflow-y: auto` and content taller than the box) must opt out so the wheel scrolls the panel instead of the page.

### Vertical panes (menus, sheets, command list)

Use **full** prevention:

- `data-lenis-prevent`, or
- `className="lenis-prevent"` together with `overflow-y-auto` (and usually `max-h-*`)

The `prevent` callback treats `.lenis-prevent` as opt-out **only when the element can actually scroll vertically**, so a stray class on a horizontal-only block does not trap the page wheel.

### Code blocks (horizontal overflow only)

Wide `<pre>` / code samples use `CodeBlock` (`src/components/primitives/code-block.tsx`):

- `overflow-x-auto`
- `data-lenis-prevent-horizontal` — Lenis ignores **horizontal** gestures so shift+wheel / trackpad sideways scroll the snippet
- **No** `data-lenis-prevent` — vertical wheel continues to smooth-scroll the page

### Tall code blocks (vertical + horizontal)

Pass `maxHeightClass` (e.g. `max-h-96`) to `CodeBlock`. The block gets `overflow-y-auto` and `data-lenis-prevent-vertical`. Vertical wheel scrolls inside until the edge; `allowNestedScroll: true` on Lenis helps hand off to the page at the boundary.

### Lenis built-in axis attributes (v1.3+)

| Attribute | Effect |
|-----------|--------|
| `data-lenis-prevent` | Opt out for all gestures |
| `data-lenis-prevent-vertical` | Opt out when wheel gesture is primarily vertical |
| `data-lenis-prevent-horizontal` | Opt out when wheel gesture is primarily horizontal |

See `src/lib/lenis-prevent.ts` for shared constants.

### `ScrollArea` component

```tsx
import { ScrollArea } from "@/components/primitives/scroll-area";

<ScrollArea className="max-h-80">
  {/* long list */}
</ScrollArea>
```

`ScrollArea` sets `data-lenis-prevent` and `.lenis-prevent` for vertical nested scroll.

### Manual vertical panel

```tsx
<div data-lenis-prevent className="lenis-prevent max-h-80 overflow-y-auto">
  …
</div>
```

## Content images (separate from Lenis)

Portfolio screenshots use the `.content-image` utility (`src/lib/content-image.ts`) for grayscale → color on hover/focus. See `global.css` under `@layer utilities`.
