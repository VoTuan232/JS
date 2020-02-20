//
//	group_button.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['group-button'].properties = [ 'resource-id', 'right', 'columns', 'use-label-width' ]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['group-button'].init = function(item) {
		item.width  = '150';
		item.height = '40';
		item.class  = 'item-group-button-style';
		item.init   = '0';
	};

	widget['group-button'].create$ = function(item) {

		var _$ = create$('<div id="%id" class="%class"></div>', {
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
			var _$child = create$(
				'<input type="radio" id="%id2" name="%name" value="%value" />' +
				'<label for="%id2" class="elf-radio-button-item" msg="%msg">%text</label>', {
					'%id2':   item.id + '-' + i,
					'%name':  item.id,
					'%value': i,
					'%msg':   msg(txt),
					'%text':  txt,
			});
			if (ico) { _$child.css('background-image', 'url(' + ico + ')'); }
			_$.append(_$child);
		}

		_$.css('left', item.left + 'px');
		_$.css('top',  item.top  + 'px');

		if (item.right !== undefined) {
			_$.css('right', item.right + 'px');
		} else {
			_$.css('width', item.width + 'px');
		}
		_$.css('height', item.height + 'px');

		var columns = item.columns;
		if (columns === undefined) columns = num;
		var line = Math.floor((num + (columns - 1)) / columns);

		_$.appendTo($('#create-tmp'));
		var modeV = _$.children('label').css('-webkit-writing-mode').match(/vertical/);
		if (!modeV) modeV = _$.children('label').css('writing-mode').match(/vertical/);
		$('#create-tmp').empty();

		var width, height, lineHeight;
		if (item.type === 'menu-button') {
			width  = 100; /* fixed */
			height = 100 / columns;
			lineHeight = (modeV ? _$.innerWidth() : _$.innerHeight() / columns);
		} else {
			width  = 100 / columns;
			height = 100 / line;
			lineHeight = (modeV ? _$.innerWidth() : _$.innerHeight()) / line;
		}

		if (!item['use-label-width']) {
			_$.children('label').css('width',  width  + '%');
		}
		_$.children('label').css('height', height + '%');
		_$.children('label').css('line-height', lineHeight + 'px');

		_$.addClass('elf-radio-button-control');

		return _$;
	};

})(window);
