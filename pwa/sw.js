importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Workbox is loaded.`);

    workbox.precaching.precacheAndRoute([]);
    const articleHandler = workbox.strategies.networkFirst({
        cacheName: 'pwa-barcode-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
            })
        ]
    });

    workbox.routing.registerRoute(/(.*)\.html/, args => {
        return articleHandler.handle(args);
    });
    workbox.routing.registerRoute(
        /(.*)\.(?:png|gif|jpg)/,
        workbox.strategies.cacheFirst({
            cacheName: 'images-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

} else {
    console.log(`Workbox didn't load.`);
