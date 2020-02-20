//
//	dial.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['dial'].properties = [ 'center', 'value-hidden', 'stringer' ]
		.concat(_common_properties)
		.concat(_range_properties)
		.concat(_constraint_properties)
		.concat(_value_properties)
		.concat(_handler_properties)
		.concat(_parameter_properties)

	widget['dial'].init = function(item) {
		item.width  = '78';
		item.height = '78';
		item.class  = 'item-dial-style';
		item.init   = '0';
		item.min    = '0';
		item.max    = '127';
	};

	widget['dial'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class" min="%min" max="%max" tabIndex="0">' +
				'<p>%init</p><span></span>' +
				'<canvas width="%width" height="%height"></canvas>' +
			'</div>', {
				'%id':        item.id,
				'%class':     item.class,
				'%min':       item.min,
				'%max':       item.max,
				'%init':      item.init,
				'%width':     item.width,
				'%height':    item.height,
			});

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		if (item.center !== undefined) { _$.attr('center', item.center); }

		if (item['value-hidden']) {
			_$.children('p').css('display', 'none');
		} else {
			_$.children('p').css('line-height', item.height + 'px');
		}

		if (item['description']) { _$.attr('description', item['description']); }
		if (item['touch-handler']) { _$.attr('touch-handler', item['touch-handler']); }
		if (item['dblclick-handler']) { _$.attr('dblclick-handler', item['dblclick-handler']); }

		_$.addClass('elf-dial-control');

		return _$;
	};

})(window);
