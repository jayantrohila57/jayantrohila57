/* =========================================================
   Next.js PWA Service Worker (No Library)
   - Single fetch handler
   - Safe response cloning
   - Offline navigation fallback
   - Runtime caching for assets
   ========================================================= */

const VERSION = "v1";
const STATIC_CACHE = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;

const OFFLINE_URL = "/offline";

/* ------------------ INSTALL ------------------ */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll([OFFLINE_URL, "/manifest.webmanifest"]))
      .catch(() => {}),
  );
  self.skipWaiting();
});

/* ------------------ ACTIVATE ------------------ */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !key.includes(VERSION))
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

/* ------------------ FETCH ------------------ */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* Ignore non-GET requests */
  if (request.method !== "GET") return;

  /* Ignore cross-origin + Vercel internals */
  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith("/_vercel") ||
    url.hostname.includes("vercel")
  ) {
    return;
  }

  /* ---------- NAVIGATION (Network → Offline) ---------- */
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
    return;
  }

  /* ---------- STATIC ASSETS (Cache → Network) ---------- */
  if (
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image" ||
    request.destination === "font"
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;

        return fetch(request)
          .then((response) => {
            if (!response || !response.ok || response.type === "opaque") {
              return response;
            }

            /* ✅ CLONE IMMEDIATELY */
            const clone = response.clone();

            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, clone);
            });

            return response;
          })
          .catch(() => undefined);
      }),
    );
  }
});
