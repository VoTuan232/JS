//
//	latch_button.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['latch-button'].properties = [ 'text', 'stringer' ]
		.concat(_common_properties)
		.concat(_font_properties)
		.concat(_background_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)

	widget['latch-button'].init = function(item) {
		item.width  = '80';
		item.height = '30';
		item.class  = 'item-latch-button-style';
		item.init   = '0';
		item.text   = '0/1';
	};

	widget['latch-button'].create$ = function(item) {

		var text = item['text']
		if (text === undefined) text  = '';

		var _$ = create$(
			'<div id="%id1" class="%class">' +
				'<input type="checkbox" id="%id2" />' +
				'<label for="%id2" msg="%msg">%text</label>' +
			'</div>', {
				'%id1':   item.id,
				'%class': item.class,
				'%id2':   item.id + '-0',
				'%msg':   msg(text),
				'%text':  text
			});

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		for (var i = 0, num = _font_properties.length; i < num; i++) {
			var prop = _font_properties[i];
			if (item[prop] !== undefined) {
				_$.css(prop, item[prop]);
			}
		}

		for (var i = 0, num = _background_properties.length; i < num; i++) {
			var prop = _background_properties[i];
			if (item[prop] !== undefined) {
				_$.css(prop, item[prop]);
			}
		}

		_$.addClass('elf-check-box-control');

		return _$;
	};

})(window);
