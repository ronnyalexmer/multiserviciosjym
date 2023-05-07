const cacheName = "site-static";
const assets = [
    "/", "/index.html", "/src/js/app.js",
    "/src/css/lib/bootstrap.min.css", "/src/css/styles.css", "/src/css/contact-form.css", "/src/css/footer.css",
    "/src/css/included-services.css", "/src/css/menu-navbar.css", "/src/css/services-section.css", "/src/css/services-social-navbar.css",
    "/src/img/logo.jpg", "/src/img/fotos/contact-form.jpg", "/src/img/section-bricolaje.jpg", "/src/img/section-electricidad.jpg",
    "/src/img/section-fontaneria.jpg", "/src/img/section-climatizacion.jpg", "/src/img/section-persianas.jpg", "/src/img/section-montajes.jpg",
    "/src/img/svg/ico-booked.svg", "/src/img/svg/ico-budget.svg", "/src/img/svg/ico-email.svg", "/src/img/svg/ico-instagram-color.svg", "/src/img/svg/ico-instagram.svg",
    "/src/img/svg/ico-taskrabbit-color.svg", "/src/img/svg/ico-taskrabbit.svg", "/src/img/svg/ico-tlf.svg", "/src/img/svg/ico-transport.svg", "/src/img/svg/ico-whatsapp-color.svg", 
    "/src/img/svg/ico-whatsapp.svg", "/src/img/svg/logo-ico.svg"
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