$(function () {

	var COEF = 6;

	$('.elf-dial-control').each(function () {
		$(this).addClass('elf-wheel');
	});

	var amount = 0;
	var mousewheel = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	$(document).on(mousewheel, '.elf-wheel', function (e) {
		e.stopPropagation();
		var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		if (delta < 0 && amount > 0) amount = 0;
		if (delta > 0 && amount < 0) amount = 0;
		amount += delta;
		var _$ = $(this);
		var v = _$.val();
		if (amount < -COEF) { v--; }
		else if (amount > COEF) { v++; }
		else return;
		amount = 0;
		_$.trigger('elf-update', v);
		if (v == _$.val()) {
			_$.trigger('elf-change', v);
		}
	});

});
