var sliderImage = {
	init: function ($carousel) {
		this.events($carousel);
	},

	events: function ($carousel) {
		this.setInterval($carousel);
		this.setupImgsSlider($carousel);
		this.setupModal($carousel);
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
	},

	setupModal: function ($carousel) {
		var $modal = $carousel.find(".modal");
		$carousel.find(".carousel-description").each(function () {
			sliderImage.openModalImg($(this), $modal);
		});
	},

	openModalImg: function ($item, $modal) {
		$item.click(function () {
			var $this = $(this);
			var title = $this.find("h3").text();
			var $imgThumbail = $this.find("img");
			var imgUrl = $imgThumbail.attr("data-modal-img");
			var altText = $imgThumbail.attr("alt");
			var noExtensionUrl = imgUrl.replace(/\.[^/.]+$/, "");
			var $picture = "<picture>" +
				"<source srcset='" + noExtensionUrl + ".webp' type='image/webp'>" +
				"<source srcset='" + imgUrl + "' type='image/jpeg'>" +
				"<img src='" + imgUrl + "' alt='" + altText + "'>";
			"</picture>";

			$modal.find(".modal-title").text(title);
			$modal.find(".modal-body").html($picture);
			$modal.modal("show");
		});
	}


}

$(document).ready(function () {
	$(".slider-images-section .carousel").each(function () {
		sliderImage.init($(this));
	});
});