//
//	radio_button.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['radio-button'].properties = [ 'resource-id' ]
		.concat(_common_properties)
		.concat(_font_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['radio-button'].init = function(item) {
		item.width  = '200';
		item.height = '100';
		item.class  = 'item-radio-button-style';
		item.init   = '0';
	};

	widget['radio-button'].create$ = function(item) {

		var _$ = create$('<div id="%id" class="%class"></div>', {
			'%id'    : item.id,
			'%class' : item.class
		});

		var text = undefined;
		if (item['resource-id'] !== undefined) {
			text = Resource[_R_INDEX(item['resource-id'])].text;
		}
		if (text === undefined) text = [ '' ];

		for (var i = 0, num = text.length; i < num; i++) {
			var _$child = create$(
				'<input type="radio" id="%id2" name="%name" value="%value" />' +
				'<label for="%id2" class="elf-radio-button-item" msg="%msg">%text</label>', {
					'%id2':   item.id + '-' + i,
					'%name':  item.id,
					'%value': i,
					'%msg':   msg(text[i]),
					'%text':  text[i],
			});
			_$.append(_$child);
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

		_$.addClass('elf-radio-button-control');

		return _$;
	};

})(window);
