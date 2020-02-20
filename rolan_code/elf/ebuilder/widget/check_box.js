//
//	check_box.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['check-box'].properties = [ 'text' ]
		.concat(_common_properties)
		.concat(_font_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)

	widget['check-box'].init = function(item) {
		item.class  = 'item-check-box-style';
		item.width  = '150';
		item.height = '30';
		item.text   = 'Check me';
		item.init   = '0';
	};

	widget['check-box'].create$ = function(item) {

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

		_$.addClass('elf-check-box-control');

		return _$;
	};

})(window);
