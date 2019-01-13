var $filterLink = $('.filter__toggle'),
	$filterForm = $('.filter-form');
var filterInput = document.querySelectorAll('.input-btn__label');

$filterLink.on('click', function() {
	$filterForm.addClass('filter-form--show');
	$filterForm.css('top', $('#some_point').offset().top - 100);
	$('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
});

function closeFilter(elem) {
	elem.addEventListener('click', function() {
		$filterForm.removeClass('filter-form--show');
	});
}

for (var i=0; i < filterInput.length-1; i++) {
	closeFilter(filterInput[i]);
}

console.log($('#some_point').offset().top);