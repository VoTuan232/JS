//
//	widget.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

widget = {
	'page': {},
	'frame': {},
	'label': {},
	'stringer': {},
	'push-button': {},
	'latch-button': {},
	'group-button': {}, 
	'menu-button': {}, 
	'radio-button': {},
	'check-box': {},
	'toggle-button': {},
	'tab': {},
	'knob': {},
	'slider': {},
	'dial': {}, 
	'bar': {}, 
	'spinner': {}, 
	'select-box': {}, 
	'select-list': {}, 
	'select-panel': {}, 
	'text-input': {},
};

_common_properties = [
	'id',
	'left',
	'top',
	'width',
	'height',
	'class',
];

_font_properties = [
	'color',
	'font-size',
	'font-weight',
	'font-style',
	'text-align',
/*	'vertical-align', */
];

_background_properties = [
	'background',
	'background-color',
	'background-image',
	'background-repeat',
	'background-size',
	'background-position',
	'border',
	'border-radius',
	'opacity',
];

_range_properties = [
	'min',
	'max',
];

_constraint_properties = [
	'lower-than',
	'upper-than',
];

_value_properties = [
	'init',
];

_handler_properties = [
	'description',
	'touch-handler',
	'dblclick-handler',
];

_parameter_properties = [
	'parameter-id',
	'parameter-size',
	'parameter-vofs',
	'option',
	'option-addr',
	'option-type',
	'trigger-changed',
];

_action_properties = [
	'page-selector',
	'page-order',
	'replace-block',
	'replace-frame',
];

function create$(text, replace) {
	var html = text;
	for (var prop in replace) {
		html = html.replace(new RegExp(prop, 'g'),
			(replace[prop] !== undefined) ? replace[prop] : '');
	}
	return $(html);
}

function _R_INDEX(id) {
	for (var idx = 0, max = Resource.length; idx < max; idx++) {
		if (Resource[idx].id === undefined) continue;
		if (Resource[idx].id == id) return idx;
	}
	id = parseInt(id, 10);
	if (isNaN(id) || id < 0 || id >= Resource.length) id = 0;
	return id;
}

function msg(text) {
	if (!text) return '';
	return (text.lastIndexOf('@IDM', 0) < 0 ? '' : text.substr(1));
}
