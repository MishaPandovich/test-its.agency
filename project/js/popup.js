var link = document.querySelector('.goods__img--active'),
	excerpt = document.querySelector('.excerpt--active'),
	heightScroll = document.querySelector('.header').clientHeight;

var popup = $('.big-goods__item');
var lo = $('.big-goods__img');

function openPopup(element, event) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		popup.addClass('big-goods__item--show');

		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		popup.animate({ "top": scrollTop }, 1500);
		lo.delay(1500);
		lo.animate({ "margin-top": '10%', "opacity": '1'}, 1700);
	});
}

openPopup(link);
openPopup(excerpt);
