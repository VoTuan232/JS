//
//	page.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['page'].properties = [ 'id', 'style', 'width', 'height', 'target-frame', 'wrapper-style' ]
		.concat(_background_properties)

	widget['page'].init = function(item) {
		item.style  = 'page-flexible-style';
		item.width  = '800';
		item.height = '600';
	};

	widget['page'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class"></div>', {
				'%id':    item.id,
				'%class': item.style
			});

		switch (item.style) {
			case 'page-flexible-style':
				break;
			case 'page-left-style':
			case 'page-center-style':
			case 'page-right-style':
				_$.css('width',  item.width  + 'px');
				break;
			case 'page-middle-style':
			case 'page-fix-style':
				_$.css('width',  item.width  + 'px');
				_$.css('height', item.height + 'px');
				break;
		}

		if (item['wrapper-style'] && !item['target-frame']) {
			_$.attr('wrapper-style', item['wrapper-style']);
		}

		for (var i = 0, num = _background_properties.length; i < num; i++) {
			var prop = _background_properties[i];
			if (item[prop] !== undefined) {
				_$.css(prop, item[prop]);
			}
		}

		_$.appendTo($('#create-tmp'));
		item.c_left = _$.css('border-left-width').replace('px', '') * 1;
		item.c_top  = _$.css('border-top-width' ).replace('px', '') * 1;
		item.c_width  = item.width  - item.c_left - (_$.css('border-right-width' ).replace('px', '') * 1);
		item.c_height = item.height - item.c_top  - (_$.css('border-bottom-width').replace('px', '') * 1);
		$('#create-tmp').empty();

		return _$;
	};

})(window);
