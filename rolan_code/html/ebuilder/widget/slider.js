//
//	slider.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['slider'].properties = [
		'center',
		'icon',
		'thumb-width',
		'thumb-height',
		'step-guide',
		'range-type',
		'stringer'
	]
		.concat(_common_properties)
		.concat(_range_properties)
		.concat(_constraint_properties)
		.concat(_value_properties)
		.concat(_handler_properties)
		.concat(_parameter_properties)

	widget['slider'].init = function(item) {
		item.width  = '150';
		item.height = '20';
		item.class  = 'item-slider-style'
		item.init   = '0';
		item.min    = '0';
		item.max    = '127';

		item['thumb-width' ] = '18';
		item['thumb-height'] = '18';
	};

	widget['slider'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class" min="%min" max="%max" tabIndex="0">' +
				'<span class="%class-guide"></span><div></div>' +
			'</div>', {
				'%id':     item.id,
				'%class':  item.class,
				'%min':    item.min,
				'%max':    item.max,
			});

		if (item.center !== undefined) { _$.attr('center', item.center); }

		if (item.icon) { _$.children('div').css('background-image', 'url(' + item.icon + ')'); }

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		_$.children('div').css('width',  item['thumb-width' ] + 'px');
		_$.children('div').css('height', item['thumb-height'] + 'px');

		_$.appendTo($('#create-tmp'));
		var border = _$.css('border-width').replace('px', '') * 1;
		$('#create-tmp').empty();

		var width  = (item.width  * 1);
		var height = (item.height * 1);
		var thumb, margin;
		if (width > height) {
			thumb = item['thumb-height'] * 1;
			if (thumb > height) {
				var dy = -Math.floor((thumb - height) / 2 + border);
				margin = dy + 'px';
			} else {
				margin = 'auto';
			}
			_$.children('div').css('left',   '0');
			_$.children('div').css('top',    '0');
			_$.children('div').css('bottom', '0');
			_$.children('div').css('margin', margin + ' 0 auto 0');
		} else {
			thumb = item['thumb-width'] * 1;
			if (thumb > width) {
				var dx = -Math.floor((thumb - width) / 2 + border);
				margin = dx + 'px';
			} else {
				margin = 'auto';
			}
			_$.children('div').css('top',    '0');
			_$.children('div').css('left',   '0');
			_$.children('div').css('right',  '0');
			_$.children('div').css('margin', '0 auto 0 ' + margin);
		}

		if (item['step-guide']) { _$.attr('step-guide', item['step-guide']); }

		if (item['range-type']) {
			if (item['lower-than']) { _$.attr('lower-than', item['lower-than']); }
			if (item['upper-than']) { _$.attr('upper-than', item['upper-than']); }
		}

		if (item['description']) { _$.attr('description', item['description']); }
		if (item['touch-handler']) { _$.attr('touch-handler', item['touch-handler']); }
		if (item['dblclick-handler']) { _$.attr('dblclick-handler', item['dblclick-handler']); }

		_$.addClass('elf-slider-control');

		return _$;
	};

})(window);
