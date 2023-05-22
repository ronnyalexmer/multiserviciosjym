var contactForm = {
	NAMES: null,

	init: function ($form) {
		this.events($form);
	},

	events: function ($form) {
		this.formValidation($form);
		this.sendForm($form);
	},

	sendForm: function ($form) {
		var $modal = $form.find(".modal");
		var $successTxt = $modal.find(".success");
		var $errorTxt = $modal.find(".error");
		var $missTxt = $modal.find(".miss");

		$form.submit(function () {
			event.preventDefault();
			var form = $(this);
			$.ajax({
				url: "/src/php/email.php",
				method: "POST",
				cache: false,
				data: form.serialize(),
				beforeSend: function () {
					$successTxt.hide();
					$errorTxt.hide();
					$missTxt.hide();
				},
				success: function (result) {
					result = result.trim();
					if (result == 'SUCCESS') {
						$successTxt.show();
					}
					else if (result == 'MISS') {
						$errorTxt.show();
					} else {
						$missTxt.show();
					}
				},
				error: function (xhr) {
					console.error(xhr);
					$errorTxt.show();
				},
				complete: function () {
					$modal.modal("show");
				}
			});

			return false;
		});
	},

	formValidation: function ($form) {
		var $button = $form.find(".contact-button");

		$button.click(function () {
			var sendForm = true;
			var $clientName = $form.find("input[name='clientName']");
			var $clientPhone = $form.find("input[name='clientPhone']");
			var $clientEmail = $form.find("input[name='clientEmail']");
			var $clientMsg = $form.find(".clientMsg");

			var validName = contactForm.validateField($clientName);
			var validPhone = contactForm.validateField($clientPhone);
			var validEmail = contactForm.validateField($clientEmail);
			var validMsg = contactForm.validateField($clientMsg);


			if (validName) {
				$clientName.siblings(".text-danger").hide();
			} else {
				sendForm = false;
				$clientName.siblings(".text-danger").show();
			}

			if (validPhone || validEmail) {
				$clientPhone.siblings(".text-danger").hide();
				$clientEmail.siblings(".text-danger").hide();
			} else {
				$clientPhone.siblings(".text-danger").show();
				$clientEmail.siblings(".text-danger").show();
				sendForm = false;
			}

			if (validMsg) {
				$clientMsg.siblings(".text-danger").hide();
			} else {
				$clientMsg.siblings(".text-danger").show();
				sendForm = false;
			}

			if (sendForm) {
				$form.submit();
			}
		});
	},

	validateField: function ($field) {
		var value = $field.val();
		var maxLength = $field.attr("maxLength");
		if (value.length > maxLength) {
			return false;
		}

		var minLength = $field.attr("minLength");
		if (value.length < minLength) {
			return false;
		}

		var type = $field.attr("type");
		if (type == "number" && !contactForm.isNumeric(value)) {
			return false;
		}

		if (type == "email" && !contactForm.isEmail(value)) {
			return false;
		}

		return true;
	},

	isNumeric: function (str) {
		if (typeof str != "string") return false;
		return !isNaN(str) &&
			!isNaN(parseFloat(str));
	},

	isEmail: function (email) {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}

}

$(document).ready(function () {
	$(".contact-form form").each(function () {
		contactForm.init($(this));
	});
});