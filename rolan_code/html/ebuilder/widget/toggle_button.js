//
//	toggle_button.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['toggle-button'].properties = [ 'resource-id' ]
		.concat(_common_properties)
		.concat(_background_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)

	widget['toggle-button'].init = function(item) {
		item.width  = '80';
		item.height = '30';
		item.class  = 'item-toggle-button-style';
		item.init   = '0';
	};

	widget['toggle-button'].create$ = function(item) {

		var _$ = create$('<div id="%id" class="%class"></div>', {
			'%id'     : item.id,
			'%class'  : item.class
		});

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
			var display = (i > 0) ? 'display:none;' : '';
			var _$child = create$(
				'<p style="background-image:url(%icon);%display" msg="%msg">%text</p>', {
					'%icon': ico, '%display': display, '%msg': msg(txt), '%text': txt
			});
			_$.append(_$child);
		}

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		for (var i = 0, num = _background_properties.length; i < num; i++) {
			var prop = _background_properties[i];
			if (item[prop] !== undefined) {
				_$.css(prop, item[prop]);
			}
		}

		_$.addClass('elf-toggle-button-control');

		return _$;
	};

})(window);
