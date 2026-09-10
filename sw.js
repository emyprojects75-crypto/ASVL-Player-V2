// ASVL Player service worker.
// A real, same-origin service worker file is required for "Add to Home
// Screen" / installability — browsers refuse to register one from a
// blob: URL, which is why this needs to be an actual deployed file
// alongside index.html (not generated inline via JavaScript).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Pass-through — no offline caching strategy here, just present so the
  // browser's installability check (which requires a fetch handler) passes.
});
