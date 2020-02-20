//
//	text_input.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['text-input'].properties = [ 'max', 'ascii-only',
			'padding',
			'color',
			'font-size',
			'text-align',
			'background',
			'border',
			'border-radius',
		]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)

	widget['text-input'].init = function(item) {
		item.width  = '100';
		item.height = '40';
		item.class  = 'item-text-input-style';
		item.init   = 'Text';
	};

	widget['text-input'].create$ = function(item) {

		var ascii = item['ascii-only'] ? item['ascii-only'] : '';

		var _$ = create$(
			'<div id="%id" class="%class" ascii="%ascii">' +
				'<input type="text" maxlength="%max" value="%value" />' +
			'</div>', {
				'%id':    item.id,
				'%class': item.class,
				'%ascii': ascii,
				'%max':   item.max,
				'%value': item.init,
			});

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		if (item['padding']       !== undefined) _$.css('padding',       item['padding']);
		if (item['color']         !== undefined) _$.css('color',         item['color']);
		if (item['font-size']     !== undefined) _$.css('font-size',     item['font-size']);
		if (item['background']    !== undefined) _$.css('background',    item['background']);
		if (item['border']        !== undefined) _$.css('border',        item['border']);
		if (item['border-radius'] !== undefined) _$.css('border-radius', item['border-radius']);

		if (item['text-align'] !== undefined) _$.children('input').css('text-align', item['text-align']);

		_$.addClass('elf-text-input-control');

		return _$;
	};

})(window);
