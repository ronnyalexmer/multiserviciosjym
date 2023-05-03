const cacheName = "site-static";
const assets = [ 
    "/", "/index.html", "/src/js/app.js", "/src/css/styles.css"
]

self.addEventListener("install", event => {
    //console.log("SW has been installed");
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("Caching assets");
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