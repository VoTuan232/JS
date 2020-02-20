//
//	spinner.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['spinner'].properties = [ 'nth-power', 'stringer' ]
		.concat(_common_properties)
		.concat(_range_properties)
		.concat(_constraint_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)

	widget['spinner'].init = function(item) {
		item.width  = '100';
		item.height = '40';
		item.class  = 'item-spinner-style';
		item.init   = '0';
		item.min    = '0';
		item.max    = '127';
	};

	widget['spinner'].create$ = function(item) {

		var power = item['nth-power'] ? item['nth-power'] : '';

		var _$ = create$(
			'<div id="%id" class="%class">' +
				'<input type="text" min="%min" max="%max" value="%value" power="%power" />' +
				'<div class="up-arrow elf-spinner-up-control"></div>' +
				'<div class="down-arrow elf-spinner-down-control"></div>' +
			'</div>', {
				'%id':    item.id,
				'%class': item.class,
				'%min':   item.min,
				'%max':   item.max,
				'%value': item.init,
				'%power': power
			});

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		_$.addClass('elf-spinner-control');

		return _$;
	};

})(window);
