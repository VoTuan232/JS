//
//	select_list.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['select-list'].properties = [
		'resource-id',
		'popup-class',
		'popup-header-class',
		'popup-option-class',
		'caption'
	]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['select-list'].init = function(item) {
		item.width  = '120';
		item.height = '30';
		item.class  = 'item-select-list-style';
		item.init   = '0';
	};

	widget['select-list'].create$ = function(item) {

		var popup  = item['popup-class'] ? item['popup-class'] : item.class + '-popup' ;
		var header = item['popup-header-class'] ? item['popup-header-class'] : item.class + '-header';
		var option = item['popup-option-class'] ? item['popup-option-class'] : item.class + '-option';

		var caption = item.caption ? item.caption : '';

		var text = undefined, icon = undefined;
		if (item['resource-id'] !== undefined) {
			text = Resource[_R_INDEX(item['resource-id'])].text;
			icon = Resource[_R_INDEX(item['resource-id'])].icon;
		}
		if (text === undefined) text = [ '' ];
		if (icon === undefined) icon = [ '' ];

		var _$ = create$(
			'<div id="%id1" class="%class" tabIndex="0">' +
				'<p msg="%msg">%text0</p>' +
				'<div id="%id2" class="%popup elf-select-list" style="display:none;" tabIndex="0">' +
					'<label class="%header elf-select-list-close">' + caption + '</label>' +
					'<div class="%option"></div>' +
				'</div>' +
			'</div>', {
			'%id1'    : item.id,
			'%class'  : item.class,
			'%id2'    : item.id + '-list',
			'%popup'  : popup,
			'%header' : header,
			'%option' : option,
			'%msg'    : msg(text[0]),
			'%text0'  : text[0],
		});

		for (var i = 0, num = text.length; i < num; i++) {
			var txt = '', ico = '';
			if (text[i] !== undefined) txt = text[i];
			if (icon[i] !== undefined) ico = icon[i];
			var _$option = create$(
				'<a href="#" class="elf-select-list-option-control" msg="%msg">%text</a>', {
				'%msg'  : msg(txt),
				'%text' : txt
			});
			if (ico) { _$option.css('background-image', 'url(' + ico + ')'); }
			_$.find('.' + option).append(_$option);
		}

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		_$.addClass('elf-select-list-control');

		return _$;
	};

})(window);
