var link = document.querySelector('.goods__img--active'),
	excerpt = document.querySelector('.excerpt--active'),
	heightScroll = document.querySelector('.header').clientHeight;

var popup = $('.big-goods__item');

function openPopup(element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		popup.addClass('big-goods__item--show');

		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		popup.animate({ "top": scrollTop}, 1500);
	});
}

openPopup(link);
openPopup(excerpt);
