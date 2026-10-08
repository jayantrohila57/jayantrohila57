# Lenis smooth scroll

This site uses [Lenis](https://github.com/darkroomengineering/lenis) for smooth wheel scrolling on the document. Lenis is mounted in `src/components/lenis-init.tsx` and registered via `src/lib/lenis-controller.ts`.

## Reduced motion

When the visitor prefers reduced motion (`prefers-reduced-motion: reduce`), Lenis is **not** initialized. The page uses native scrolling and `scrollToTop` / `scrollToHash` fall back to `window.scrollTo` and `scrollIntoView`.

## Route changes

On every client-side pathname change, the window scrolls to the top unless the URL includes a `#hash`, in which case Lenis scrolls to that anchor (with header offset). `history.scrollRestoration` is set to `manual` in `ScrollRestoration`.

## Nested scroll areas

Lenis intercepts wheel events on the document. Panels with their own `overflow: auto` (command menu, mobile drawer, dropdowns, sheets, sidebars, etc.) must opt out so the wheel scrolls the panel instead of the page.

Mark any nested scroll container with **either**:

- the `data-lenis-prevent` attribute, or
- the `lenis-prevent` class

Lenis is configured with a `prevent` callback that checks both (see `src/lib/lenis-prevent.ts`).

### `ScrollArea` component

Prefer the shared wrapper for new UI:

```tsx
import { ScrollArea } from "@/components/primitives/scroll-area";

<ScrollArea className="max-h-80">
  {/* long list */}
</ScrollArea>
```

### Manual markup

```tsx
<div data-lenis-prevent className="lenis-prevent max-h-80 overflow-y-auto">
  …
</div>
```

Add the same attributes to **any new** overflow panel (tables, code blocks with scroll, dialogs with scrollable bodies).

## Content images (separate from Lenis)

Portfolio screenshots use the `.content-image` utility (`src/lib/content-image.ts`) for grayscale → color on hover/focus. See `global.css` under `@layer utilities`.
