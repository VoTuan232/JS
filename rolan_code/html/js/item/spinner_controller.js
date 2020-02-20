//
//	spinner_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {
	let interval;
	// Each interval equal 0.5 s
	const TIME_IS_MOUSE_KEEPING = 2;

	const handleStepper = {
		timeHolding: 0,
		setTimeHolding(timeHolding) {
				this.timeHolding = timeHolding;
		},
		getTimeHolding() {
				return this.timeHolding;
		}
	};

	$(document).on('elf-update', '.elf-spinner-control', function(e, v) {
		$(this).prop('value', v);
		var _$input = $(this).children('input');
		calc(_$input, v * 1)
		return false;
	});

	$(document).on('change', '.elf-spinner-control', function(e) {
		e.stopPropagation();
		var _$input = $(this).children('input');
		var v = _$input.val();
		v = unformat(_$input, v);
		if (isNaN(v)) { v = $(this).val() } else { v = invert(_$input, v) }
		v = calc(_$input, (v * 1));
		_$input.parent().trigger('elf-change', v);
	});

	// Function handle value when holding mouse spinner
	function handvarimeHoldingSpinner(plus, _$input, v) {
		let timeHolding = handleStepper.getTimeHolding();

		timeHolding++;
		if (plus && timeHolding > TIME_IS_MOUSE_KEEPING) {
				v = calc(_$input, v + 10);
		} else if (!plus && timeHolding > TIME_IS_MOUSE_KEEPING) {
				v = calc(_$input, v - 10);
		} else if (plus && timeHolding < TIME_IS_MOUSE_KEEPING) {
				v = calc(_$input, v + 1);
		} else if (!plus && timeHolding < TIME_IS_MOUSE_KEEPING) {
				v = calc(_$input, v - 1);
		}
		handleStepper.setTimeHolding(timeHolding);
		
		_$input.parent().trigger('elf-change', v);
	}

	$('.elf-spinner-up-control').on('mousedown', function(e) {
		e.stopPropagation();
		var _$input = $(this).siblings('input');
		var v = _$input.parent().val() * 1;
		handvarimeHoldingSpinner(true, _$input, v);

		let self = this;
		interval =  setInterval(function() // Holding
		{
			var _$input = $(self).siblings('input');
			var v = _$input.parent().val() * 1;
			handvarimeHoldingSpinner(true, _$input, v);
		}, 500);
	});

	$('.elf-spinner-down-control').on('mousedown', function(e) {
		e.stopPropagation();
		var _$input = $(this).siblings('input');
		var v = _$input.parent().val() * 1;
		handvarimeHoldingSpinner(false, _$input, v);

		let self = this;
		interval =  setInterval(function() // Holding
		{
			var _$input = $(self).siblings('input');
			var v = _$input.parent().val() * 1;
			handvarimeHoldingSpinner(false, _$input, v);
		}, 500);
	});

	$('.elf-spinner-up-control').on('mouseup', function(e) {
		e.stopPropagation();
		clearInterval(interval);
		handleStepper.setTimeHolding(0);
	});

	$('.elf-spinner-down-control').on('mouseup', function(e) {
		e.stopPropagation();
		clearInterval(interval);
		handleStepper.setTimeHolding(0);
	});

	$('.elf-spinner-up-control').on('mouseleave', function(e) {
		e.stopPropagation();
		clearInterval(interval);
		handleStepper.setTimeHolding(0);
	});

	$('.elf-spinner-down-control').on('mouseleave', function(e) {
		e.stopPropagation();
		clearInterval(interval);
		handleStepper.setTimeHolding(0);
	});

	function calc(_$input, v) {
		var min = _$input.attr('min'); if (!min) min = 0;
		var max = _$input.attr('max'); if (!max) max = 0;
		min *= 1; max *= 1;
		if (v < min) v = min;
		if (v > max) v = max;
		_$input.val(format(_$input, power(_$input, v)));
		_$input.parent().val(v);
		//_$input.parent().trigger('elf-change', v);
		return v;
	}

	function power(_$, v) {
		var n = _$.attr('power');
		if (n) {
			v = v * Math.pow(10, n);
			if (n < 0) v = v.toFixed(Math.abs(n));
		}
		return v;
	}

	function invert(_$, v) {
		var n = _$.attr('power');
		if (n) { v = Math.round(v * Math.pow(10, -n)); }
		return v;
	}

	function format(_$, v) {
		var f = _$.attr('format');
		if (f) {
			var value = v;
			v = eval(f);
		}
		return v;
	}

	function unformat(_$, v) {
		var f = _$.attr('unformat');
		if (f) {
			var value = v;
			v = eval(f);
		}
		return v;
	}

});
