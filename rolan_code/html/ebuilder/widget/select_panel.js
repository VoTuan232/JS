//
//	select_panel.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['select-panel'].properties = [
		'resource-id',
		'popup-class',
		'popup-header-class',
		'popup-option-class',
		'image-width',
		'caption'
	]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['select-panel'].init = function(item) {
		item.width  = '100';
		item.height = '100';
		item.class  = 'item-select-panel-style';
		item.init   = '0';
	};

	widget['select-panel'].create$ = function(item) {

		var popup  = item['popup-class'] ? item['popup-class'] : item.class + '-popup' ;
		var header = item['popup-header-class'] ? item['popup-header-class'] : item.class + '-header';
		var option = item['popup-option-class'] ? item['popup-option-class'] : item.class + '-option';

		var caption = item.caption ? item.caption : '';

		var icon = undefined;
		if (item['resource-id'] !== undefined) {
			icon = Resource[_R_INDEX(item['resource-id'])].icon;
		}
		if (icon === undefined) icon = [ '' ];

		var _$ = create$(
			'<div id="%id1" class="%class" style="background-image:url(%icon0)" tabIndex="0">' +
				'<div id=%id2 class="%popup elf-select-panel" style="display:none;" tabIndex="0">' +
					'<label class="%header elf-select-panel-close">' + caption + '</label>' +
					'<div class="%option"></div>' +
				'</div>' +
			'</div>', {
			'%id1'    : item.id,
			'%class'  : item.class,
			'%id2'    : item.id + '-panel',
			'%popup'  : popup,
			'%header' : header,
			'%option' : option,
			'%icon0'  : icon[0],
		});

		for (var i = 0, num = icon.length; i < num; i++) {
			var _$option = create$(
				'<img class="elf-select-panel-option-control" ' +
					'src="%icon" style="width:%width"></img>', {
				'%icon'  : icon[i],
				'%width' : item['image-width']
			});
			_$.find('.' + option).append(_$option);
		}

		_$.css('left',   item.left   + 'px');
		_$.css('top',    item.top    + 'px');
		_$.css('width',  item.width  + 'px');
		_$.css('height', item.height + 'px');

		_$.addClass('elf-select-panel-control');

		return _$;
	};

})(window);
