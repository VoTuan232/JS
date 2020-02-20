//
//	knob.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['knob'].properties = [ 'angle-specified', 'stringer' ]
		.concat(_common_properties)
		.concat(_range_properties)
		.concat(_constraint_properties)
		.concat(_value_properties)
		.concat(_handler_properties)
		.concat(_parameter_properties)

	widget['knob'].init = function(item) {
		item.width  = '100';
		item.height = '100';
		item.class  = 'item-knob-style';
		item.init   = '0';
		item.min    = '0';
		item.max    = '127';
	};

	widget['knob'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class" min="%min" max="%max" tabIndex="0">' +
				'<div></div>' +
			'</div>', {
				'%id':    item.id,
				'%class': item.class,
				'%min':   item.min,
				'%max':   item.max
			});

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		if (item['angle-specified']) { _$.attr('degree', item['angle-specified']); }

		if (item['description']) { _$.attr('description', item['description']); }
		if (item['touch-handler']) { _$.attr('touch-handler', item['touch-handler']); }
		if (item['dblclick-handler']) { _$.attr('dblclick-handler', item['dblclick-handler']); }

		_$.addClass('elf-knob-control');

		return _$;
	};

})(window);
