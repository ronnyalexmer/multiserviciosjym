const cacheName = "site-static";
const assets = [ 
    "/", "/index.html", "/src/js/app.js", "/src/css/styles.css",
    "/src/elements/head.html", "/src/elements/header.html",
    "/src/elements/footer.html", "/src/img/logo.png",
    "/pages/bricolaje.html", "/pages/electricidad.html",
    "/pages/fontaneria.html"
]

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("active", event => {
    console.log("SW has been actived");
});

self.addEventListener("fetch", event => {
    console.log("Fetch event", event);
});