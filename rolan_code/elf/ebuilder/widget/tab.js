//
//	tab.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['tab'].properties = [ 'resource-id', 'right', 'tab-width' ]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['tab'].init = function(item) {
		item.width  = '150';
		item.height = '40';
		item.class  = 'item-tab-style';
		item.init   = '0';
	};

	widget['tab'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class">' +
				'<div></div>' +
				'<p class="left-arrow elf-tab-left-control" ></p>' +
				'<p class="right-arrow elf-tab-right-control"></p>' +
			'</div>', {
			'%id'    : item.id,
			'%class' : item.class
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
			var _$label = create$(
				'<label class="elf-tab-item" msg="%msg">%text</label>', {
					'%msg': msg(txt), '%text': txt,
			});
			if (ico) { _$label.css('background-image', 'url(' + ico + ')'); }
			_$.children('div').append(_$label);
		}

		_$.css('left', item.left + 'px');
		_$.css('top',  item.top  + 'px');
		if (item.right !== undefined) {
			_$.css('right', item.right + 'px');
		} else {
			_$.css('width', item.width + 'px');
		}
		_$.css('height', item.height + 'px');

		if (item['tab-width']) {
			var width = item['tab-width'];
			_$.children('div').css('width', (width * num) + 'px');
			_$.find('label').css('width', width + 'px');
		} else {
			_$.children('div').css('width', '100%');
			_$.find('label').css('width', (100 / num) + '%');
		}

		_$.find('label').css('line-height', _$.innerHeight() + 'px');
		_$.find('p').css('line-height', _$.innerHeight() + 'px');

		_$.addClass('elf-tab-control');

		return _$;
	};

})(window);
