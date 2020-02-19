$("document").ready(function ($) {

	// let nav = $('.top_box');
	// let nav = $('.top_box');
	// let nav = $('.top_box');
	// let nav = $('.top_box');
	// let nav = $('.top_box');
	// let nav = $('.top_box');
	// top_header-menu
	// top__header
	// top__logo
	// top__desc
	// top__phone
	// top__phone-link
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.top_header-menu').addClass("top_header-menu-fixed");
			$('.top__header').addClass("top__header-fixed");
			$('.top__logo').addClass("top__logo-fixed");
			$('.top__desc').addClass("top__desc-fixed");
			$('.top__phone').addClass("top__phone-fixed");
			$('.top__phone-link').addClass("top__phone-link-fixed");
			$('.header-wrap__bg').addClass("header-wrap__bg-fixed");
		} else {
			$('.top_header-menu').removeClass("top_header-menu-fixed");
			$('.top__header').removeClass("top__header-fixed");
			$('.top__logo').removeClass("top__logo-fixed");
			$('.top__desc').removeClass("top__desc-fixed");
			$('.top__phone').removeClass("top__phone-fixed");
			$('.top__phone-link').removeClass("top__phone-link-fixed");
			$('.header-wrap__bg').removeClass("header-wrap__bg-fixed");
		}
	});

});




window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

});
