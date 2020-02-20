//
//	frame.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['frame'].properties = [ 'right', 'bottom' ]
		.concat(_common_properties)
		.concat(_background_properties)

	widget['frame'].init = function(item) {
		item.width  = '200';
		item.height = '200';
		item.class  = 'item-frame-style';

		/* for visibility */
		item.opacity = '0.5';
		item['background-color'] = '#888';
	};

	widget['frame'].create$ = function(item) {

		var _$ = create$(
			'<div id="%id" class="%class"></div>', {
				'%id':    item.id,
				'%class': item.class
			});

		function unit(x) { return ((x + '').match(/^[0-9]+$/) ? 'px' : ''); }

		if (item.left   !== undefined) { _$.css('left',   item.left   + unit(item.left));   }
		if (item.top    !== undefined) { _$.css('top',    item.top    + unit(item.top));    }
		if (item.right  !== undefined) { _$.css('right',  item.right  + unit(item.right));   }
		if (item.bottom !== undefined) { _$.css('bottom', item.bottom + unit(item.bottom)); }

		if (item.left !== undefined && item.right !== undefined) {
			_$.css('min-width', item.width + 'px');
		} else {
			_$.css('width', item.width + 'px');
		}
		if (item.top !== undefined && item.bottom !== undefined) {
			_$.css('min-height', item.height + 'px');
		} else {
			_$.css('height', item.height + 'px');
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
