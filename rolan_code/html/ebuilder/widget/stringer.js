//
//	stringer.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['stringer'].properties = [ 'resource-id', 'format' ]
		.concat(_common_properties)
		.concat(_font_properties)
		.concat(_background_properties)

	widget['stringer'].init = function(item) {
		item.width  = '100';
		item.height = '30';
		item.class  = 'item-stringer-style';
		item.format = 'value';
	};

	widget['stringer'].create$ = function(item) {

		var format = item['format'] ? item['format'] : '';

		var _$ = create$('<div id="%id" class="%class" format="%format"></div>', {
			'%id'     : item.id,
			'%class'  : item.class,
			'%format' : format
		});

		if (format) {
			_$.append('<p>' + format + '</p>');
		} else {
			_$.append('<div style="display:none;"></div>');
			var text = undefined, icon = undefined;
			if (item['resource-id'] !== undefined) {
				text = Resource[_R_INDEX(item['resource-id'])].text;
				icon = Resource[_R_INDEX(item['resource-id'])].icon;
			}
			if (text === undefined) text = [ '' ];
			if (icon === undefined) icon = [ '' ];

			var num = Math.max(text.length, icon.length);
			for (var i = 0; i < num; i++) {
				var txt = '', ico = '';
				if (text[i] !== undefined) txt = text[i];
				if (icon[i] !== undefined) ico = icon[i];
				var _$child = create$(
					'<p style="background-image:url(%icon);" msg="%msg">%text</p>', {
						'%icon': ico, '%msg': msg(txt), '%text': txt
				});
				_$.children('div').append(_$child);
			}
			_$.find('p').eq(0).clone().appendTo(_$);
		}

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

		_$.addClass('elf-stringer-control');

		return _$;
	};

})(window);
