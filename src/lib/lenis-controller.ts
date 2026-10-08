/** Minimal Lenis surface used by the site (avoids importing lenis in every consumer). */
export type LenisController = {
  destroy: () => void;
  raf: (time: number) => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; immediate?: boolean },
  ) => void;
  resize: () => void;
  stop: () => void;
  start: () => void;
  on: (
    event: "scroll",
    callback: (payload: { scroll: number }) => void,
  ) => void;
};

let activeLenis: LenisController | null = null;
let lockCount = 0;
const scrollListeners = new Set<(y: number) => void>();

export function subscribeScrollPosition(listener: (y: number) => void) {
  scrollListeners.add(listener);
  listener(window.scrollY);
  return () => {
    scrollListeners.delete(listener);
  };
}

export function notifyScrollPosition(y: number) {
  for (const listener of scrollListeners) {
    listener(y);
  }
}

export function registerLenis(instance: LenisController | null) {
  activeLenis = instance;
}

export function getLenis(): LenisController | null {
  return activeLenis;
}

/** Overlay scroll lock — nested locks supported (e.g. dialog over dialog). */
export function setLenisScrollLocked(locked: boolean) {
  const lenis = activeLenis;
  if (!lenis) return;

  if (locked) {
    lockCount += 1;
    if (lockCount === 1) lenis.stop();
    return;
  }

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) lenis.start();
}

export const ANCHOR_SCROLL_OFFSET = 88;

export function scrollToHash(
  hash: string,
  options?: { immediate?: boolean },
): boolean {
  if (!hash || hash === "#") return false;
  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) return false;

  const lenis = activeLenis;
  if (lenis) {
    lenis.scrollTo(target, {
      offset: -ANCHOR_SCROLL_OFFSET,
      immediate: options?.immediate,
    });
  } else {
    target.scrollIntoView({ block: "start" });
  }
  return true;
}

export function scrollToTop(options?: { immediate?: boolean }) {
  const lenis = activeLenis;
  if (lenis) {
    lenis.scrollTo(0, { immediate: options?.immediate ?? false });
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: options?.immediate ? "auto" : "smooth",
    });
  }
  notifyScrollPosition(0);
}
