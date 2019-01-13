var filterLink = document.querySelector('.filter__toggle');

var filter = $('.filter');
var filterForm = $('.filter-form');

function openFilter(element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		filter.addClass('filter--show');
		filterForm.addClass('filter-form--show');

		filter.animate({ "top": $('#some_point').offset().top + 40}, 1500);
	});
}

openFilter(filterLink);