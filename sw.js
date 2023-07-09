const cacheName = "site-static";
const assets = [
	"/",
	"/src/css/banner-section.css", "/src/css/carousel-section.css", "/src/css/check-list.css", "/src/css/contact-form.css", "/src/css/footer.css", "/src/css/included-services.css", "/src/css/menu-navbar.css", "/src/css/paragraph-text.css", "/src/css/services-section.css", "/src/css/slider-images.css", "/src/css/social-navbar.css", "/src/css/styles.css", "/src/css/lib/bootstrap.min.css",
	"/src/img/logo.jpg", "/src/img/logo.png", "/src/img/logo.webp",
	"/src/img/favicon/favicon.ico", "/src/img/favicon/garox.jpg",
	"/src/img/fotos/calefaccion/calefaccion-slider-termo-1-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-termo-1-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-termo-1.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-termo-1.webp", "/src/img/fotos/calefaccion/calefaccion-banner-desktop.jpg", "/src/img/fotos/calefaccion/calefaccion-banner-desktop.webp", "/src/img/fotos/calefaccion/calefaccion-banner.jpg", "/src/img/fotos/calefaccion/calefaccion-banner.webp", "/src/img/fotos/calefaccion/calefaccion-slider-caldera-1-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-caldera-1-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-caldera-1.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-caldera-1.webp", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-1-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-1-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-1.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-1.webp", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-2-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-2-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-2.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-2.webp", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-3-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-3-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-3.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-radiador-3.webp", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-1-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-1-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-1.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-1.webp", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-2-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-2-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-2.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-2.webp", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-3-modal.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-3-modal.webp", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-3.jpg", "/src/img/fotos/calefaccion/calefaccion-slider-toallero-3.webp",
	"/src/img/fotos/carpinteria/carpinteria-slider-suelo-1.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-suelo-1-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-suelo-1.webp", "/src/img/fotos/carpinteria/carpinteria-slider-suelo-1-modal.webp",
	"/src/img/fotos/carpinteria/carpinteria-banner-desktop.jpg", "/src/img/fotos/carpinteria/carpinteria-banner-desktop.webp", "/src/img/fotos/carpinteria/carpinteria-banner.jpg", "/src/img/fotos/carpinteria/carpinteria-banner.webp", "/src/img/fotos/carpinteria/carpinteria-slider-mueble-1-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-mueble-1-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-mueble-1.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-mueble-1.webp", "/src/img/fotos/carpinteria/carpinteria-slider-parquet-1-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-parquet-1-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-parquet-1.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-parquet-1.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-1-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-1-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-1.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-1.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-2-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-2-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-2.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-2.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-3-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-3-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-3.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-3.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-4-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-4-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-4.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-puertas-4.webp", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-1-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-1-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-1.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-1.webp", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-2-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-2-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-2.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-2.webp",
	"/src/img/fotos/carpinteria/carpinteria-slider-tarima-3-modal.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-3-modal.webp", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-3.jpg", "/src/img/fotos/carpinteria/carpinteria-slider-tarima-3.webp",
	"/src/img/fotos/construccion/construccion-banner-desktop.jpg", "/src/img/fotos/construccion/construccion-banner-desktop.webp", "/src/img/fotos/construccion/construccion-banner.jpg", "/src/img/fotos/construccion/construccion-banner.webp",
	"/src/img/fotos/construccion/construccion-slider-casa-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-casa-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-casa-1.jpg", "/src/img/fotos/construccion/construccion-slider-casa-1.webp",
	"/src/img/fotos/construccion/construccion-slider-ceramica-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-ceramica-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-ceramica-1.jpg", "/src/img/fotos/construccion/construccion-slider-ceramica-1.webp",
	"/src/img/fotos/construccion/construccion-slider-ceramica-2-modal.jpg", "/src/img/fotos/construccion/construccion-slider-ceramica-2-modal.webp", "/src/img/fotos/construccion/construccion-slider-ceramica-2.jpg", "/src/img/fotos/construccion/construccion-slider-ceramica-2.webp",
	"/src/img/fotos/construccion/construccion-slider-claraboya-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-claraboya-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-claraboya-1.jpg", "/src/img/fotos/construccion/construccion-slider-claraboya-1.webp",
	"/src/img/fotos/construccion/construccion-slider-claraboya-2-modal.jpg", "/src/img/fotos/construccion/construccion-slider-claraboya-2-modal.webp", "/src/img/fotos/construccion/construccion-slider-claraboya-2.jpg", "/src/img/fotos/construccion/construccion-slider-claraboya-2.webp",
	"/src/img/fotos/construccion/construccion-slider-distribucion-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-distribucion-1.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-1.webp",
	"/src/img/fotos/construccion/construccion-slider-distribucion-2-modal.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-2-modal.webp", "/src/img/fotos/construccion/construccion-slider-distribucion-2.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-2.webp",
	"/src/img/fotos/construccion/construccion-slider-distribucion-3-modal.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-3-modal.webp", "/src/img/fotos/construccion/construccion-slider-distribucion-3.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-3.webp",
	"/src/img/fotos/construccion/construccion-slider-distribucion-4-modal.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-4-modal.webp", "/src/img/fotos/construccion/construccion-slider-distribucion-4.jpg", "/src/img/fotos/construccion/construccion-slider-distribucion-4.webp",
	"/src/img/fotos/construccion/construccion-slider-habitacion-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-habitacion-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-habitacion-1.jpg", "/src/img/fotos/construccion/construccion-slider-habitacion-1.webp",
	"/src/img/fotos/construccion/construccion-slider-pared-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-pared-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-pared-1.jpg", "/src/img/fotos/construccion/construccion-slider-pared-1.webp", "/src/img/fotos/construccion/construccion-slider-pared-2-modal.jpg", "/src/img/fotos/construccion/construccion-slider-pared-2-modal.webp", "/src/img/fotos/construccion/construccion-slider-pared-2.jpg", "/src/img/fotos/construccion/construccion-slider-pared-2.webp", "/src/img/fotos/construccion/construccion-slider-pared-3-modal.jpg", "/src/img/fotos/construccion/construccion-slider-pared-3-modal.webp", "/src/img/fotos/construccion/construccion-slider-pared-3.jpg", "/src/img/fotos/construccion/construccion-slider-pared-3.webp", "/src/img/fotos/construccion/construccion-slider-pared-4-modal.jpg", "/src/img/fotos/construccion/construccion-slider-pared-4-modal.webp", "/src/img/fotos/construccion/construccion-slider-pared-4.jpg", "/src/img/fotos/construccion/construccion-slider-pared-4.webp", "/src/img/fotos/construccion/construccion-slider-piso-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-piso-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-piso-1.jpg", "/src/img/fotos/construccion/construccion-slider-piso-1.webp", "/src/img/fotos/construccion/construccion-slider-techo-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-techo-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-techo-1.jpg", "/src/img/fotos/construccion/construccion-slider-techo-1.webp", "/src/img/fotos/construccion/construccion-slider-techo-2-modal.jpg", "/src/img/fotos/construccion/construccion-slider-techo-2-modal.webp", "/src/img/fotos/construccion/construccion-slider-techo-2.jpg", "/src/img/fotos/construccion/construccion-slider-techo-2.webp", "/src/img/fotos/construccion/construccion-slider-ventana-1-modal.jpg", "/src/img/fotos/construccion/construccion-slider-ventana-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-ventana-1.jpg", "/src/img/fotos/construccion/construccion-slider-ventana-1.webp", "/src/img/fotos/construccion/construccion-slider-puertas-1.webp", "/src/img/fotos/construccion/construccion-slider-puertas-1-modal.webp", "/src/img/fotos/construccion/construccion-slider-puertas-1.jpg", "/src/img/fotos/construccion/construccion-slider-puertas-1-modal.jpg",
	"/src/img/fotos/electricidad/electricidad-slider-camara-1-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-camara-1.jpg", "/src/img/fotos/electricidad/electricidad-slider-camara-1-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-camara-1.webp", "/src/img/fotos/electricidad/electricidad-slider-camara-2-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-camara-2.jpg", "/src/img/fotos/electricidad/electricidad-slider-camara-2-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-camara-2.webp", 
	"/src/img/fotos/electricidad/electricidad-banner-desktop.jpg", "/src/img/fotos/electricidad/electricidad-banner-desktop.webp", "/src/img/fotos/electricidad/electricidad-banner.jpg", "/src/img/fotos/electricidad/electricidad-banner.webp", "/src/img/fotos/electricidad/electricidad-slider-conexiones-1-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-conexiones-1-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-conexiones-1.jpg", "/src/img/fotos/electricidad/electricidad-slider-conexiones-1.webp", "/src/img/fotos/electricidad/electricidad-slider-conexiones-2-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-conexiones-2-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-conexiones-2.jpg", "/src/img/fotos/electricidad/electricidad-slider-conexiones-2.webp", "/src/img/fotos/electricidad/electricidad-slider-conexiones-3-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-conexiones-3-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-conexiones-3.jpg", "/src/img/fotos/electricidad/electricidad-slider-conexiones-3.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-1-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-1-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-1.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-1.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-2-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-2-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-2.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-2.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-3-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-3-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-3.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-3.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-4-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-4-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-4.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-4.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-5-modal.jpg",
	"/src/img/fotos/electricidad/electricidad-slider-iluminacion-5-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-5.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-5.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-6-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-6-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-6.jpg", "/src/img/fotos/electricidad/electricidad-slider-iluminacion-6.webp", "/src/img/fotos/electricidad/electricidad-slider-interruptor-1-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-interruptor-1-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-interruptor-1.jpg", "/src/img/fotos/electricidad/electricidad-slider-interruptor-1.webp", "/src/img/fotos/electricidad/electricidad-slider-videoportero-1-modal.jpg", "/src/img/fotos/electricidad/electricidad-slider-videoportero-1-modal.webp", "/src/img/fotos/electricidad/electricidad-slider-videoportero-1.jpg", "/src/img/fotos/electricidad/electricidad-slider-videoportero-1.webp",
	"/src/img/fotos/fontaneria/fontaneria-slider-desague-1-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-desague-1-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-desague-1.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-desague-1.webp",
	"/src/img/fotos/fontaneria/fontaneria-banner-desktop.jpg", "/src/img/fotos/fontaneria/fontaneria-banner-desktop.webp", "/src/img/fotos/fontaneria/fontaneria-banner.jpg", "/src/img/fotos/fontaneria/fontaneria-banner.webp", "/src/img/fotos/fontaneria/fontaneria-slider-banera-1-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-banera-1-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-banera-1.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-banera-1.webp", "/src/img/fotos/fontaneria/fontaneria-slider-banera-2-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-banera-2-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-banera-2.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-banera-2.webp", "/src/img/fotos/fontaneria/fontaneria-slider-bano-1-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-bano-1-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-bano-1.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-bano-1.webp", "/src/img/fotos/fontaneria/fontaneria-slider-bano-2-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-bano-2-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-bano-2.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-bano-2.webp", "/src/img/fotos/fontaneria/fontaneria-slider-bano-3-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-bano-3-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-bano-3.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-bano-3.webp", "/src/img/fotos/fontaneria/fontaneria-slider-canerias-1-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-canerias-1-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-canerias-1.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-canerias-1.webp", "/src/img/fotos/fontaneria/fontaneria-slider-ducha-1-modal.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-ducha-1-modal.webp", "/src/img/fotos/fontaneria/fontaneria-slider-ducha-1.jpg", "/src/img/fotos/fontaneria/fontaneria-slider-ducha-1.webp",
	"/src/img/fotos/inicio/contact-form.jpg", "/src/img/fotos/inicio/contact-form.webp", "/src/img/fotos/inicio/section-calefaccion.jpg", "/src/img/fotos/inicio/section-calefaccion.webp", "/src/img/fotos/inicio/section-carpinteria.jpg", "/src/img/fotos/inicio/section-carpinteria.webp", "/src/img/fotos/inicio/section-climatizacion.jpg", "/src/img/fotos/inicio/section-climatizacion.webp", "/src/img/fotos/inicio/section-construccion.jpg", "/src/img/fotos/inicio/section-construccion.webp", "/src/img/fotos/inicio/section-electricidad.jpg", "/src/img/fotos/inicio/section-electricidad.webp", "/src/img/fotos/inicio/section-fontaneria.jpg", "/src/img/fotos/inicio/section-fontaneria.webp", "/src/img/fotos/inicio/section-instalaciones.jpg", "/src/img/fotos/inicio/section-instalaciones.webp", "/src/img/fotos/inicio/section-instalaciones_old.jpg", "/src/img/fotos/inicio/section-instalaciones_old.webp", "/src/img/fotos/inicio/section-montajes.jpg", "/src/img/fotos/inicio/section-montajes.webp", "/src/img/fotos/inicio/section-persianas.jpg", "/src/img/fotos/inicio/section-persianas.webp", "/src/img/fotos/inicio/section-pintura.jpg", "/src/img/fotos/inicio/section-pintura.webp", "/src/img/fotos/inicio/section-reformas.jpg", "/src/img/fotos/inicio/section-reformas.webp",
	"/src/img/fotos/instalaciones/carousel-calefaccion-desktop.jpg", "/src/img/fotos/instalaciones/carousel-calefaccion-desktop.webp", "/src/img/fotos/instalaciones/carousel-calefaccion.jpg", "/src/img/fotos/instalaciones/carousel-calefaccion.webp", "/src/img/fotos/instalaciones/carousel-carpinteria-desktop.jpg", "/src/img/fotos/instalaciones/carousel-carpinteria-desktop.webp", "/src/img/fotos/instalaciones/carousel-carpinteria.jpg", "/src/img/fotos/instalaciones/carousel-carpinteria.webp", "/src/img/fotos/instalaciones/carousel-construccion-desktop.jpg", "/src/img/fotos/instalaciones/carousel-construccion-desktop.webp", "/src/img/fotos/instalaciones/carousel-construccion-desktop_old.jpg", "/src/img/fotos/instalaciones/carousel-construccion-desktop_old.webp", "/src/img/fotos/instalaciones/carousel-construccion.jpg", "/src/img/fotos/instalaciones/carousel-construccion.webp", "/src/img/fotos/instalaciones/carousel-electricidad-desktop.jpg", "/src/img/fotos/instalaciones/carousel-electricidad-desktop.webp", "/src/img/fotos/instalaciones/carousel-fontaneria_desktop.jpg", "/src/img/fotos/instalaciones/carousel-fontaneria_desktop.webp", "/src/img/fotos/instalaciones/carousel-pintura-desktop.jpg", "/src/img/fotos/instalaciones/carousel-pintura-desktop.webp", "/src/img/fotos/instalaciones/carousel-pintura.jpg", "/src/img/fotos/instalaciones/carousel-pintura.webp",
	"/src/img/fotos/pintura/pintura-banner-desktop.jpg", "/src/img/fotos/pintura/pintura-banner-desktop.webp", "/src/img/fotos/pintura/pintura-banner.jpg", "/src/img/fotos/pintura/pintura-banner.webp", "/src/img/fotos/pintura/pintura-slider-casa-1-modal.jpg", "/src/img/fotos/pintura/pintura-slider-casa-1-modal.webp", "/src/img/fotos/pintura/pintura-slider-casa-1.jpg", "/src/img/fotos/pintura/pintura-slider-casa-1.webp", "/src/img/fotos/pintura/pintura-slider-casa-2-modal.jpg", "/src/img/fotos/pintura/pintura-slider-casa-2-modal.webp", "/src/img/fotos/pintura/pintura-slider-casa-2.jpg", "/src/img/fotos/pintura/pintura-slider-casa-2.webp", "/src/img/fotos/pintura/pintura-slider-casa-3-modal.jpg", "/src/img/fotos/pintura/pintura-slider-casa-3-modal.webp", "/src/img/fotos/pintura/pintura-slider-casa-3.jpg", "/src/img/fotos/pintura/pintura-slider-casa-3.webp", "/src/img/fotos/pintura/pintura-slider-casa-4-modal.jpg", "/src/img/fotos/pintura/pintura-slider-casa-4-modal.webp", "/src/img/fotos/pintura/pintura-slider-casa-4.jpg", "/src/img/fotos/pintura/pintura-slider-casa-4.webp", "/src/img/fotos/pintura/pintura-slider-escaleras-1-modal.jpg", "/src/img/fotos/pintura/pintura-slider-escaleras-1-modal.webp", "/src/img/fotos/pintura/pintura-slider-escaleras-1.jpg", "/src/img/fotos/pintura/pintura-slider-escaleras-1.webp", "/src/img/fotos/pintura/pintura-slider-escaleras-2-modal.jpg", "/src/img/fotos/pintura/pintura-slider-escaleras-2-modal.webp", "/src/img/fotos/pintura/pintura-slider-escaleras-2.jpg", "/src/img/fotos/pintura/pintura-slider-escaleras-2.webp", "/src/img/fotos/pintura/pintura-slider-pintura-1-modal.jpg", "/src/img/fotos/pintura/pintura-slider-pintura-1-modal.webp", "/src/img/fotos/pintura/pintura-slider-pintura-1.jpg", "/src/img/fotos/pintura/pintura-slider-pintura-1.webp",
	"/src/img/fotos/reformas/reformas-banner-desktop.jpg", "/src/img/fotos/reformas/reformas-banner-desktop.webp", "/src/img/fotos/reformas/reformas-banner.jpg", "/src/img/fotos/reformas/reformas-banner.webp", "/src/img/fotos/reformas/reformas-slider-bano-1-modal.jpg", "/src/img/fotos/reformas/reformas-slider-bano-1-modal.webp", "/src/img/fotos/reformas/reformas-slider-bano-1.jpg", "/src/img/fotos/reformas/reformas-slider-bano-1.webp", "/src/img/fotos/reformas/reformas-slider-bano-2-modal.jpg", "/src/img/fotos/reformas/reformas-slider-bano-2-modal.webp", "/src/img/fotos/reformas/reformas-slider-bano-2.jpg", "/src/img/fotos/reformas/reformas-slider-bano-2.webp", "/src/img/fotos/reformas/reformas-slider-bano-3-modal.jpg", "/src/img/fotos/reformas/reformas-slider-bano-3-modal.webp", "/src/img/fotos/reformas/reformas-slider-bano-3.jpg", "/src/img/fotos/reformas/reformas-slider-bano-3.webp", "/src/img/fotos/reformas/reformas-slider-bano2-1-modal.jpg", "/src/img/fotos/reformas/reformas-slider-bano2-1-modal.webp", "/src/img/fotos/reformas/reformas-slider-bano2-1.jpg", "/src/img/fotos/reformas/reformas-slider-bano2-1.webp", "/src/img/fotos/reformas/reformas-slider-bano2-3-modal.jpg", "/src/img/fotos/reformas/reformas-slider-bano2-3-modal.webp", "/src/img/fotos/reformas/reformas-slider-bano2-3.jpg", "/src/img/fotos/reformas/reformas-slider-bano2-3.webp", "/src/img/fotos/reformas/reformas-slider-cocina-1-modal.jpg", "/src/img/fotos/reformas/reformas-slider-cocina-1-modal.webp", "/src/img/fotos/reformas/reformas-slider-cocina-1.jpg", "/src/img/fotos/reformas/reformas-slider-cocina-1.webp", "/src/img/fotos/reformas/reformas-slider-cocina-2-modal.jpg", "/src/img/fotos/reformas/reformas-slider-cocina-2-modal.webp", "/src/img/fotos/reformas/reformas-slider-cocina-2.jpg",
	"/src/img/fotos/reformas/reformas-slider-cocina-2.webp", "/src/img/fotos/reformas/reformas-slider-cocina-3-modal.jpg", "/src/img/fotos/reformas/reformas-slider-cocina-3-modal.webp", "/src/img/fotos/reformas/reformas-slider-cocina-3.jpg", "/src/img/fotos/reformas/reformas-slider-cocina-3.webp", "/src/img/fotos/reformas/reformas-slider-local-1-modal.jpg", "/src/img/fotos/reformas/reformas-slider-local-1-modal.webp", "/src/img/fotos/reformas/reformas-slider-local-1.jpg", "/src/img/fotos/reformas/reformas-slider-local-1.webp", "/src/img/fotos/reformas/reformas-slider-muebles-1-modal.jpg", "/src/img/fotos/reformas/reformas-slider-muebles-1-modal.webp", "/src/img/fotos/reformas/reformas-slider-muebles-1.jpg", "/src/img/fotos/reformas/reformas-slider-muebles-1.webp",
	"/src/img/svg/ico-bath.svg", "/src/img/svg/ico-booked.svg", "/src/img/svg/ico-booked_old.svg", "/src/img/svg/ico-budget.svg", "/src/img/svg/ico-budget_old.svg", "/src/img/svg/ico-building.svg", "/src/img/svg/ico-chair.svg", "/src/img/svg/ico-check.svg", "/src/img/svg/ico-chevron-left.svg", "/src/img/svg/ico-chevron-right.svg", "/src/img/svg/ico-electricity.svg", "/src/img/svg/ico-email.svg", "/src/img/svg/ico-instagram-color.svg", "/src/img/svg/ico-instagram.svg", "/src/img/svg/ico-kitchen.svg", "/src/img/svg/ico-link.svg", "/src/img/svg/ico-logo.svg", "/src/img/svg/ico-paint.svg", "/src/img/svg/ico-taskrabbit-color.svg", "/src/img/svg/ico-taskrabbit.svg", "/src/img/svg/ico-temperature.svg", "/src/img/svg/ico-tlf.svg", "/src/img/svg/ico-transport.svg", "/src/img/svg/ico-transport_old.svg", "/src/img/svg/ico-wallapop-color.svg", "/src/img/svg/ico-water.svg", "/src/img/svg/ico-whatsapp-color.svg", "/src/img/svg/ico-whatsapp.svg", "/src/img/svg/logo-ico.svg",
	"/src/js/app.js", "/src/js/slider-images.js", "/src/js/contact-form.js", "/src/js/lib/bootstrap.bundle.min.js", "/src/js/lib/jquery.slim.min.js"
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
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
	);
});