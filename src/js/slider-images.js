var carouselImage = {
	init: function ($carousel) {
		this.events($carousel);
	},

	events: function ($carousel) {
		this.setInterval($carousel);
		this.setupImgsSlider($carousel);
	},

	setInterval: function ($carousel) {
		$carousel.carousel({
			interval: 3000
		});
	},

	setupImgsSlider: function ($carousel) {
		var minPerSlide = parseInt($carousel.attr("data-imgsSlider"));

		$carousel.find(".carousel-item").each(function () {
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i = 0; i < minPerSlide; i++) {
				next = next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}

				next.children(':first-child').clone().appendTo($(this));
			}
		});
	}
}

$(document).ready(function () {
	$(".slider-images-section .carousel").each(function () {
		carouselImage.init($(this));
	});
});