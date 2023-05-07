const cacheName = "site-static";
const assets = [
    "/", "/index.html", "/src/js/app.js",
    "/src/css/lib/bootstrap.min.css", "/src/css/styles.css", "/src/css/contact-form.css", "/src/css/footer.css",
    "/src/css/included-services.css", "/src/css/menu-navbar.css", "/src/css/services-section.css", "/src/css/services-social-navbar.css",
    "/src/img/logo.jpg",
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