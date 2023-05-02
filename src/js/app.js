if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
		.then(function (registration) {
			console.log('Service worker registrado correctamente:', registration);
		})
		.catch(function (error) {
			console.log('Error al registrar el service worker:', error);
		});
}