var $link = $('.goods__img--active'),
	$excerpt = $('.excerpt--active'),
	$cardGoods = $('.big-goods__item'),
	$cardClose = $(".big-goods__close");


function openCardGoods(element, evt) {
	element.on('click', function(evt) {
		evt.preventDefault();
		$cardGoods.addClass('big-goods__item--show');

		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		$cardGoods.animate({ "top": scrollTop}, 1500);

		$cardGoods.addClass('active'); 
	});
}

openCardGoods($link);
openCardGoods($excerpt);

$cardClose.on('click', function() {
	$cardGoods.removeClass('big-goods__item--show');
	$cardGoods.removeClass('active'); 
	$cardGoods.css('top', '3000px');
});