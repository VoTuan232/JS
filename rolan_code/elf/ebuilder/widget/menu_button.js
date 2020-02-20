//
//	meun_button.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	widget['menu-button'].properties = [ 'resource-id' ]
		.concat(_common_properties)
		.concat(_value_properties)
		.concat(_parameter_properties)
		.concat(_action_properties)

	widget['menu-button'].init = function(item) {
		item.width  = '150';
		item.height = '200';
		item.class  = 'item-menu-button-style';
		item.init   = '0';
	};

	widget['menu-button'].create$ = widget['group-button'].create$;

})(window);
