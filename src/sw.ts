self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open('drunk-cards-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/offline.html',
      ]);
    })
  );
});

self.addEventListener('fetch', (event: any) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/offline.html');
      })
    );
  }
});
