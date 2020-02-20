//
//	push_button.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['push-button'].properties = [ 'text', 'popup', 'inc-value', 'dec-value' ]
		.concat(_common_properties)
		.concat(_font_properties)
		.concat(_background_properties)

	widget['push-button'].create$ = widget['label'].create$;

	widget['push-button'].init = function(item) {
		item.width  = '100';
		item.height = '30';
		item.class  = 'item-push-button-style';
		item.text   = 'Button';
	};

})(window);
