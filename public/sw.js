const CACHE_NAME = "pwa-cache-v1";
const CACHE_IMAGES = "pwa-images-v1";
const CACHE_FONTS = "pwa-fonts-v1";

// Handle messages from clients
self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Cache all essential files for offline functionality
const urlsToCache = [
  // Pages (only cache what definitely exists)
  "/",
  "/offline",

  // Icons and generated images for meta/PWA
  "/icon", // Main icon (32x32)
  "/api/icon/192", // PWA icon 192x192
  "/api/icon/512", // PWA icon 512x512
  "/opengraph-image", // OG image for social sharing
  "/twitter-image", // Twitter card image

  // Manifest (only cache the webmanifest that definitely exists)
  "/manifest.webmanifest",

  // Other files will be cached dynamically as they are requested
];

// Install event - cache resources
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        // Cache files individually to handle failures gracefully
        const cachePromises = urlsToCache.map(function (url) {
          return fetch(url)
            .then(function (response) {
              if (response.ok) {
                return cache.put(url, response);
              }
            })
            .catch(function (error) {
              console.error("Service Worker: Error caching:", url, error);
              return Promise.resolve(); // Don't fail the entire cache if one URL fails
            });
        });

        return Promise.all(cachePromises);
      })
      .catch(function (error) {
        console.error("Service Worker: Failed to cache files:", error);
        // Don't fail the installation, continue anyway
        return self.skipWaiting();
      }),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (
              cacheName !== CACHE_NAME &&
              cacheName !== CACHE_IMAGES &&
              cacheName !== CACHE_FONTS
            ) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(function () {
        return self.clients.claim(); // Take control of all open pages
      }),
  );
});

// Fetch event - serve from cache when offline, cache new resources
self.addEventListener("fetch", function (event) {
  // Exclude Vercel scripts from service worker handling
  if (event.request.url.includes("https://va.vercel-scripts.com/")) {
    return; // Do not handle this request
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then(function (response) {
          // Check if valid response
          if (!response) {
            return new Response("Offline - No response", {
              status: 408,
              headers: { "Content-Type": "text/plain" },
            });
          }

          if (response.status === 0) {
            return new Response("Offline - Network error", {
              status: 503,
              headers: { "Content-Type": "text/plain" },
            });
          }

          if (response.type === "opaque") {
            return response; // Return opaque responses (like from CDN)
          }

          if (response.status >= 200 && response.status < 300) {
            // Cache all successful responses (except external APIs)
            const url = new URL(event.request.url);
            if (
              url.origin === self.location.origin ||
              url.origin === "https://fonts.googleapis.com" ||
              url.origin === "https://fonts.gstatic.com"
            ) {
              // Clone the response
              const responseToCache = response.clone();

              caches.open(CACHE_NAME).then(function (cache) {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          } else {
            return response;
          }
        })
        .catch(function (error) {
          console.error("Service Worker: Fetch failed:", error);

          // Offline fallback strategies
          if (event.request.destination === "document") {
            // For navigation requests, serve the offline page
            return caches.match("/offline");
          } else if (event.request.url.includes("/icon/")) {
            // For icon requests, serve the default icon
            return caches.match("/icon");
          } else if (event.request.url.includes("/opengraph-image")) {
            // For OG image requests, serve a basic fallback
            return new Response("Offline - Image not available", {
              status: 200,
              headers: { "Content-Type": "text/plain" },
            });
          }
        });
    }),
  );
});

// Add a fallback for Vercel Web Analytics script
self.addEventListener("fetch", function (event) {
  if (
    event.request.url.includes(
      "https://va.vercel-scripts.com/v1/script.debug.js",
    )
  ) {
    event.respondWith(
      fetch(event.request).catch(function () {
        console.warn(
          "Service Worker: Failed to load Vercel Web Analytics script. Check for ad blockers.",
        );
        return new Response("", { status: 204 });
      }),
    );
  }
});

// Specific handlers for generated images and metadata
self.addEventListener("fetch", function (event) {
  const url = new URL(event.request.url);
  const pathname = url.pathname;

  // Handle generated image routes
  if (
    pathname === "/icon" ||
    pathname === "/icon/192" ||
    pathname === "/opengraph-image" ||
    pathname === "/twitter-image"
  ) {
    event.respondWith(
      caches.match(pathname).then(function (response) {
        if (response) {
          return response;
        }
        // Try to fetch and cache
        return fetch(event.request)
          .then(function (fetchResponse) {
            if (fetchResponse.ok) {
              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME).then(function (cache) {
                cache.put(pathname, responseToCache);
              });
            }
            return fetchResponse;
          })
          .catch(function (error) {
            console.error(
              "Service Worker: Failed to fetch image:",
              pathname,
              error,
            );
            return new Response("Image not available", {
              status: 404,
              headers: { "Content-Type": "text/plain" },
            });
          });
      }),
    );
    return;
  }

  // Handle manifest
  if (pathname === "/manifest.webmanifest") {
    event.respondWith(
      caches.match(pathname).then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(function (fetchResponse) {
            if (fetchResponse.ok) {
              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME).then(function (cache) {
                cache.put(pathname, responseToCache);
              });
            }
            return fetchResponse;
          })
          .catch(function (error) {
            console.error("Service Worker: Failed to fetch manifest:", error);
            return new Response("Manifest not available", {
              status: 404,
              headers: { "Content-Type": "text/plain" },
            });
          });
      }),
    );
    return;
  }

  // Exclude Vercel scripts from service worker handling
  if (event.request.url.includes("https://va.vercel-scripts.com/")) {
    return; // Do not handle this request
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then(function (response) {
          // Check if valid response
          if (!response) {
            return new Response("Offline - No response", {
              status: 408,
              headers: { "Content-Type": "text/plain" },
            });
          }

          if (response.status === 0) {
            return new Response("Offline - Network error", {
              status: 503,
              headers: { "Content-Type": "text/plain" },
            });
          }

          if (response.type === "opaque") {
            return response; // Return opaque responses (like from CDN)
          }

          if (response.status >= 200 && response.status < 300) {
            // Cache all successful responses (except external APIs)
            const url = new URL(event.request.url);
            if (
              url.origin === self.location.origin ||
              url.origin === "https://fonts.googleapis.com" ||
              url.origin === "https://fonts.gstatic.com"
            ) {
              // Clone the response
              const responseToCache = response.clone();

              caches.open(CACHE_NAME).then(function (cache) {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          } else {
            return response;
          }
        })
        .catch(function (error) {
          console.error("Service Worker: Fetch failed:", error);

          // Offline fallback strategies
          if (event.request.destination === "document") {
            // For navigation requests, serve the offline page
            return caches.match("/offline");
          } else if (event.request.url.includes("/icon/")) {
            // For icon requests, serve the default icon
            return caches.match("/icon");
          } else if (event.request.url.includes("/opengraph-image")) {
            // For OG image requests, serve a basic fallback
            return new Response("Offline - Image not available", {
              status: 200,
              headers: { "Content-Type": "text/plain" },
            });
          }
        });
    }),
  );
});
