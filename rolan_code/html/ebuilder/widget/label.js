//
//	label.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['label'].properties = [ 'text' ]
		.concat(_common_properties)
		.concat(_font_properties)
		.concat(_background_properties)

	widget['label'].init = function(item) {
		item.width  = '100';
		item.height = '30';
		item.class  = 'item-label-style';
		item.text   = 'Label';
	};

	widget['label'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class"><p msg="%msg">%text</p></div>', {
				'%id':    item.id,
				'%class': item.class,
				'%msg':   msg(item.text),
				'%text':  item.text,
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

		return _$;
	};

})(window);
