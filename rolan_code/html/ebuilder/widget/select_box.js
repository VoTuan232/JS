//
//	select_box.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['select-box'].properties = [
		'resource-id',
		'popup-class',
		'max-height',
		'box-width',
		'menu-style',
		'menu-title',
		'list-order'
	]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['select-box'].init = function(item) {
		item.width  = '120';
		item.height = '30';
		item.class  = 'item-select-box-style';
		item.init   = '0';
	};

	widget['select-box'].create$ = function(item) {

		var popup = item['popup-class'] ? item['popup-class'] : item.class + '-popup';

		var text = undefined;
		if (item['resource-id'] !== undefined) {
			text = Resource[_R_INDEX(item['resource-id'])].text;
		}
		if (text === undefined) text = [ '' ];

		var order = undefined;
		if (item['list-order'] !== undefined) {
			order = eval(item['list-order']);
		}

		var text0 = item['menu-style'] ? item['menu-title'] : text[0];

		var _$ = create$(
			'<div id="%id1" class="%class" tabIndex="0">' +
				'<p msg="%msg">%text0</p><div></div>' +
				'<div id="%id2" class="%popup elf-select-box" tabIndex="0"' +
					'style="max-height:%height; display:none;"></div>' +
			'</div>', {
			'%id1'    : item.id,
			'%class'  : item.class,
			'%id2'    : item.id + '-box',
			'%popup'  : popup,
			'%height' : item['max-height'],
			'%msg'    : msg(text0),
			'%text0'  : text0,
		});

		var num = text.length;
		if (order !== undefined) {
			num = order.length;
		}
		for (var n = 0; n < num; n++) {
			var txt = '';
			var i = n;
			if (order !== undefined) i = order[n];
			if (text[i] !== undefined) txt = text[i];
			var _$option = create$(
				'<a href="#" class="elf-select-box-option-control" msg="%msg">%text</a>', {
				'%msg':  msg(txt),
				'%text': txt
			});
			_$.children('.' + popup).append(_$option);
		}

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		if (item['box-width']) {
			_$.attr('box-width', item['box-width']);
		}

		if (item['menu-style']) {
			_$.attr('menu-style', item['menu-style']);
		}

		_$.addClass('elf-select-box-control');

		return _$;
	};

})(window);
