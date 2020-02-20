//
//	property.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	var properties = [

		{ prop: 'id'                 , input: 'text'     , desc: 'HTML id' },
		{ prop: 'left'               , input: 'text'     , desc: 'px (% is valid for Frame)' },
		{ prop: 'top'                , input: 'text'     , desc: 'px (% is valid for Frame)' },
		{ prop: 'right'              , input: 'text'     , desc: 'px (% is valid for Frame)' },
		{ prop: 'bottom'             , input: 'text'     , desc: 'px (% is valid for Frame)' },
		{ prop: 'width'              , input: 'text'     , desc: 'px' },
		{ prop: 'height'             , input: 'text'     , desc: 'px' },
		{ prop: 'class'              , input: 'text'     , desc: 'css style' },

			/* page style */
		{ prop: 'style'              , input: 'select'   , desc: 'page-flexible-style | page-left-style | page-center-style | page-right-style | page-middle-style | page-fix-style' },
		{ prop: 'target-frame'       , input: 'frame'    , desc: '' },
		{ prop: 'wrapper-style'      , input: 'text'     , desc: 'used in popup_open(id, wrapper-style)' },

			/* for group button */
		{ prop: 'columns'            , input: 'text'     , desc: 'columns a line' },
		{ prop: 'use-label-width'    , input: 'check'    , desc: '' },

			/* for tab */
		{ prop: 'tab-width'          , input: 'text'     , desc: 'px' },

			/* for select box  */
		{ prop: 'popup-class'        , input: 'text'     , desc: 'if empty, class + "-popup"' },
		{ prop: 'max-height'         , input: 'text'     , desc: 'px' },
		{ prop: 'box-width'          , input: 'text'     , desc: 'px' },
		{ prop: 'menu-style'         , input: 'check'    , desc: 'use as Menu' },
		{ prop: 'menu-title'         , input: 'text'     , desc: '' },

			/* for select list/panel properties */
		{ prop: 'popup-header-class' , input: 'text'     , desc: 'if empty, class + "-header"' },
		{ prop: 'popup-option-class' , input: 'text'     , desc: 'if empty, class + "-option"' },
		{ prop: 'image-width'        , input: 'text'     , desc: 'e.g. 25% and 64px' },
		{ prop: 'caption'            , input: 'text'     , desc: '' },
		{ prop: 'list-order'         , input: 'text'     , desc: 'e.g. [ 0, 2, 1 ]' },

			/* for slider properties */
		{ prop: 'thumb-width'        , input: 'text'     , desc: 'px' },
		{ prop: 'thumb-height'       , input: 'text'     , desc: 'px' },
		{ prop: 'step-guide'         , input: 'check'    , desc: '' },

			/* range properties */
		{ prop: 'min'                , input: 'text'     , desc: '' },
		{ prop: 'max'                , input: 'text'     , desc: '' },
		{ prop: 'center'             , input: 'text'     , desc: 'if empty, min | min < 0 < max' },

			/* content */
		{ prop: 'text'               , input: 'msg'      , desc: '' },
		{ prop: 'icon'               , input: 'file'     , desc: '' },
		{ prop: 'resource-id'        , input: 'list'     , desc: '' },
		{ prop: 'init'               , input: 'text'     , desc: '' },

			/* constraint properties */
		{ prop: 'lower-than'         , input: 'self'     , desc: '' },
		{ prop: 'upper-than'         , input: 'self'     , desc: '' },

			/* for slider and bar properties */
		{ prop: 'range-type'         , input: 'check'    , desc: '' },

			/* for dial and bar properties */
		{ prop: 'value-hidden'       , input: 'check'    , desc: '' },

			/* for spinner properties */
		{ prop: 'nth-power'          , input: 'text'     , desc: 'display value * 10^n' },

			/* for handler properties */
		{ prop: 'description'        , input: 'label'    , desc: 'description label for handler' },
		{ prop: 'touch-handler'      , input: 'text'     , desc: 'call window[touch-handler](e, $(this))' },
		{ prop: 'dblclick-handler'   , input: 'text'     , desc: 'call window[dblclick-handler](e, $(this))' },

			/* parameter properties */
		{ prop: 'parameter-id'       , input: 'map'      , desc: '' },
		{ prop: 'parameter-size'     , input: 'text'     , desc: '' },
		{ prop: 'parameter-vofs'     , input: 'text'     , desc: '' },
		{ prop: 'option'             , input: 'check'    , desc: '' },
		{ prop: 'option-addr'        , input: 'text'     , desc: '' },
		{ prop: 'option-type'        , input: 'text'     , desc: '' },
		{ prop: 'trigger-changed'    , input: 'check'    , desc: '$.trigger("elf-changed")' },

			/* action properties */
		{ prop: 'page-selector'      , input: 'frame'    , desc: '' },
		{ prop: 'page-order'         , input: 'text'     , desc: 'e.g. [ 0, 2, 1 ]' },
		{ prop: 'replace-block'      , input: 'text'     , desc: '' },
		{ prop: 'replace-frame'      , input: 'frame'    , desc: '' },

			/* for push-button properties */
		{ prop: 'popup'              , input: 'popup'    , desc: 'popup page or close' },
		{ prop: 'inc-value'          , input: '+-'       , desc: '' },
		{ prop: 'dec-value'          , input: '+-'       , desc: '' },

			/* for knob properties */
		{ prop: 'angle-specified'    , input: 'text'     , desc: 'e.g. [ -130, -90, -50, ... ]' },

			/* stringer */
		{ prop: 'stringer'           , input: 'stringer' , desc: '' },
		{ prop: 'format'             , input: 'text'     , desc: "e.g. (value * 100) + 'Hz'" },

			/* for text input properties */
		{ prop: 'ascii-only'          ,input: 'check'    , desc: '' },
		{ prop: 'padding'             ,input: 'text'     , desc: 'eg. 4px 3em 4px  4px' },

			/* font style */
		{ prop: 'color'              , input: 'text'     , desc: 'eg. #000000' },
		{ prop: 'font-size'          , input: 'text'     , desc: 'eg. 14px' },
		{ prop: 'font-weight'        , input: 'select'   , desc: 'bold' },
		{ prop: 'font-style'         , input: 'select'   , desc: 'oblique | italic' },
		{ prop: 'text-align'         , input: 'select'   , desc: 'left | center | right' },
	/*	{ prop: 'vertical-align'     , input: 'select'   , desc: 'top | middle | bottom' }, */

			/* background style */
		{ prop: 'background'         , input: 'text'     , desc: 'eg. linear-gradient(#000, #fff)' },
		{ prop: 'background-color'   , input: 'text'     , desc: 'eg. #000000 or transparent' },
		{ prop: 'background-image'   , input: 'file'     , desc: '' },
		{ prop: 'background-repeat'  , input: 'select'   , desc: 'no-repeat' },
		{ prop: 'background-size'    , input: 'select'   , desc: 'auto | contain | cover' },
		{ prop: 'background-position', input: 'text'     , desc: 'eg. center center (center | left | right | top | bottom)' },
		{ prop: 'opacity'            , input: 'text'     , desc: 'eg. 0.6' },

			/* border style */
		{ prop: 'border'             , input: 'text'     , desc: 'eg. 1px solid #000000' },
		{ prop: 'border-radius'      , input: 'text'     , desc: 'eg. 10px' },

	];

	var target = null;

	window.refresh_property = function() {
		$('#e-right-sidebar-content').empty();

		target = null;
		var targets = edit.target_items();
		if (targets.length > 1) return;
		target = targets.length ? targets[0] : cur_page.prop;
		var rules = widget[target.type].properties;

		var doc = '<table>';
		for (var n = 0, num = properties.length; n < num; n++) {
			var line = properties[n];
			if (rules.indexOf(line.prop) < 0) continue;
			var desc = line.desc;
			var v = (line.prop in target) ? target[line.prop] : '';

			doc += '<tr>';
			doc += '<td>' + line.prop + '</td>';
			switch (line.input) {
				case 'text':
					doc += '<td><input type="text" value="' + v + '"/></td>';
					break;

				case 'check':
					doc += '<td><input type="checkbox"' + (v ? ' checked="checked"' : '') + '/></td>';
					break;

				case 'select':
					doc += '<td><select><option></option>';
					var options = line.desc.split('|');
					for (var i = 0; i < options.length; i++) {
						var opt = options[i].trim();
						doc += '<option' + (v == opt ? ' selected>' : '>') + opt + '</option>';
					}
					doc += '</select></td>'; desc = '';
					break;

				case 'file':
					doc += '<td><input type="text" value="' + v + '"/></td>';
					desc = '<button class="e-file-chooser e-property-style-button">...</button>';
					break;

				case 'map':
					doc += '<td><input type="text" value="' + v + '"/></td>';
					desc = '<button class="e-address-map e-property-style-button">...</button>';
					break;

				case 'list':
					doc += '<td><input type="text" value="' + v + '"/></td>';
					desc = '<button class="e-resource e-property-style-button">...</button>';
					break;

				case 'msg':
					doc += '<td><input type="text" value="' + v + '"/></td>';
					desc = '<button class="e-message e-property-style-button">...</button>';
					break;

				case 'popup':
					doc += '<td><select><option></option>';
					var options = enum_popup();
					for (var i = 0; i < options.length; i++) {
						var opt = options[i].trim();
						doc += '<option' + (v == opt ? ' selected>' : '>') + opt + '</option>';
					}
					doc += '</select></td>'; desc = '';
					break;

				case '+-':
					doc += '<td><select><option></option>';
					var options = []
						.concat(enum_items('spinner', cur_page))
						.concat(enum_items('knob', cur_page))
						.concat(enum_items('slider', cur_page))
						.concat(enum_items('dial', cur_page))
						.concat(enum_items('bar', cur_page));
					for (var i = 0; i < options.length; i++) {
						var opt = options[i].trim();
						doc += '<option' + (v == opt ? ' selected>' : '>') + opt + '</option>';
					}
					doc += '</select></td>'; desc = '';
					break;

				case 'frame':
					doc += '<td><select><option></option>';
					var options = enum_items('frame');
					for (var i = 0; i < options.length; i++) {
						var opt = options[i].trim();
						doc += '<option' + (v == opt ? ' selected>' : '>') + opt + '</option>';
					}
					doc += '</select></td>'; desc = '';
					break;

				case 'label':
				case 'stringer':
					doc += '<td><select><option></option>';
					var options = enum_items(line.input, cur_page);
					for (var i = 0; i < options.length; i++) {
						var opt = options[i].trim();
						doc += '<option' + (v == opt ? ' selected>' : '>') + opt + '</option>';
					}
					doc += '</select></td>'; desc = '';
					break;

				case 'self':
					doc += '<td><select><option></option>';
					var options = enum_items(target.type, cur_page);
					for (var i = 0; i < options.length; i++) {
						if (options[i] == target.id) continue;
						var opt = options[i].trim();
						doc += '<option' + (v == opt ? ' selected>' : '>') + opt + '</option>';
					}
					doc += '</select></td>'; desc = '';
					break;

				default:
					doc += '<td>---</td>';
					break;
			}
			doc += '<td>' + desc + '</td>';
			doc += '</tr>';
		}
		doc += '</table>'

		if (target.type == 'page') {
			doc += '<br />';
			doc += '<button class="e-header-style-button" id="e-duplicate-page">Duplicate</button>';
			doc += '<button class="e-header-style-button' + (cur_page.reuse ? ' e-resue' : '')
						+ '" id="e-reuse-page">Reuse for other frames</button>';
			doc += '<button class="e-header-style-button e-header-style-button-right" id="e-delete-page">Delete</button>';
		}

		$('#e-right-sidebar-content').append(doc);
	}

	$('#e-right-sidebar-content').on('change', 'input[type="text"]', function(e) {
		var prop = $(this).parent().prev().text();
		var v = $(this).val();
		if (prop === 'id' && exists(v)) { alert(v + ' is already exists'); return; }
		if (prop === 'page-order' && v) {
			try { JSON.parse(v) } catch (e) { alert('syntax error: ' + v); return; }
		}
		if (prop === 'list-order' && v) {
			try { JSON.parse(v) } catch (e) { alert('syntax error: ' + v); return; }
		}
		var o = {}; o[prop] = v;
		edit.change(target, o);
		$('#e-refresh').trigger('click', true);
	});

	$('#e-right-sidebar-content').on('change', 'input[type="checkbox"]', function(e) {
		var prop = $(this).parent().prev().text();
		var o = {}; o[prop] = $(this).prop('checked') ? 'true' : '';
		edit.change(target, o);
		$('#e-refresh').trigger('click', true);
	});

	$('#e-right-sidebar-content').on('change', 'select', function(e) {
		var prop = $(this).parent().prev().text();
		var o = {}; o[prop] = $(this).children('option:selected').text();
		edit.change(target, o);
		$('#e-refresh').trigger('click', true);
	});

	/* input helper */
	$('#e-right-sidebar-content').on('click', '.e-file-chooser', function(e) {
		var prop = $(this).parent().prev().prev().text();
		var fs = $native.fs;
		fs.event.openfilename = function(file) {
			if (file) {
				var sep = fs.separator();
				var img = file.substr(file.lastIndexOf('images' + sep));
				var url = img.replace(sep, '/')
				var o = {};
				if (prop == 'background-image') {
					o[prop] = 'url(' + url + ')';
				} else {
					o[prop] = url;
				}
				edit.change(target, o);
				$('#e-refresh').trigger('click');
			}
		};
		var filter = [ 'png', 'jpg', 'bmp' ];
		fs.openfilename(filter);
	});

	$('#e-right-sidebar-content').on('click', '.e-address-map', function(e) {
		$('#e-address-map-pane').show();
		return false;
	});

	$('#e-right-sidebar-content').on('click', '.e-resource', function(e) {
		$('#e-resource-pane').show();
		return false;
	});

	$('#e-right-sidebar-content').on('click', '.e-message', function(e) {
		$('#e-message-pane').show();
		return false;
	});

	$('#e-right-sidebar-content').on('click', '#e-reuse-page', function(e) {
		$('#e-reuse-table').empty();
		create_reuse_table(enum_items('frame'));
		$('#e-reuse-pane').show();
		return false;
	});

	$('#e-right-sidebar-content').on('helper', function(e, o) {
		edit.change(target, o);
		$('#e-refresh').trigger('click');
	});

	$(document).on('click', function(e) {
		$('#e-address-map-pane').hide();
		$('#e-resource-pane').hide();
		$('#e-message-pane').hide();
		$('#e-reuse-pane').hide();
	});

	function exists(id) {
		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			if (page.prop.id == id) return true;
			var items = page.items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				if (items[n].id == id) return true;
			}
		}
		return false;
	}

	function enum_popup() {
		var options = [ '--close' ];
		for (var i = 1, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			if (!page.prop['target-frame']) {
				options.push(page.prop.id);
			}
		}
		return options;
	}

	function enum_items(type, page) {
		var options = [];
		for (var i = 0, num = layout.pages.length; i < num; i++) {
			if (page && page != layout.pages[i]) continue;
			var items = layout.pages[i].items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				if (items[n].type == type) {
					options.push(items[n].id);
				}
			}
		}
		return options;
	}

});
