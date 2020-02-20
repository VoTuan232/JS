//
//	helper.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

window.Resource = new Resource();

$(function() { /* resource table */

	var list = Resource;

	var doc = '<table>';
	for (var i = 0, max = list.length; i < max; i++) {
		var id = list[i].id;
		doc += '<tr><td nowrap>' + ((id !== undefined) ? id : i) + '</td>';
		doc += '<td nowrap>';

		var text = list[i].text;
		var icon = list[i].icon;
		for (var n = 0;  ; n++) {
			var txt = undefined, ico = undefined;
			if (text && text[n] !== undefined) txt = text[n];
			if (icon && icon[n] !== undefined) ico = icon[n];
			if (txt === undefined && ico === undefined) break;
			if (txt !== undefined) {
				doc += txt;
			}
			if (ico !== undefined) {
				doc += ' <img src="' + ico + '"></img>';
			}
			doc += ', ';
		}

		doc += '</td></tr>';
	}
	doc += '</table>'
	$('#e-resource-table').append(doc);

	$('#e-resource-table td').on('click', function(e) {
		var o = { 'resource-id': $(this).closest('tr').children('td:first').text() + '' };
		$('#e-right-sidebar-content').trigger('helper', o);
		$('#e-resource-pane').hide();
		return false;
	});

});

$(function() { /* message table */

	var langSet = [], idSet = [];
	for (var prop in window.messageSet) {
		langSet.push(prop);
	}
	if (langSet.length > 0) {
		for (var prop in window.messageSet[langSet[0]]) {
			idSet.push(prop);
		}
	}

	var doc = '<table>';
	for (var id = 0; id < idSet.length; id++) {
		doc += '<tr>';
		doc += '<td>' + idSet[id] + '</td>';
		for (var lang = 0; lang < langSet.length; lang++) {
			doc += '<td>' + messageSet[langSet[lang]][idSet[id]] + '</td>';
		}
		doc += '</tr>';
	}
	doc += '</table>'
	$('#e-message-table').append(doc);

	$('#e-message-table td').on('click', function(e) {
		var o = { 'text': '@' + idSet[$(this).closest('tr').index()] };
		$('#e-right-sidebar-content').trigger('helper', o);
		$('#e-message-pane').hide();
		return false;
	});

});

$(function() { /* address map tree view */

	var map = new AddressMap();

	function _addr(x) {
		x = _7bitize(x);
		var s = x.toString(16).toUpperCase();
		var n = 4 - s.length;
		var _0 = '';
		while (n-- > 0) _0 += '0';
		return _0 + s;
	}

	function append(elem, a) {
		if (a == null || a.length == 0) return;
		var doc = '<ul>';
		var block = ('child' in a[0]);
		for (var n = 0, max = a.length; n < max; n++) {
			if (block) {
				doc += '<li><span>' + a[n].name + '</span></li>';
			} else {
				doc += '<li>' + _addr(a[n].addr) + ' (' + a[n].addr +  ')' +
					'<span class="e-parameter">' + a[n].name + '</span></li>';
			}
		}
		doc += '</ul>'
		elem.append(doc);
	}
	append($('#e-address-map-treeview'), map.layout);

	$('#e-address-map-treeview').on('click', 'li', function(e) {
		var index = [];
		var li = $(this);
		do {
			index.push(li.index())
			li = li.closest('ul').parent();
		} while (li.prop("tagName").toLowerCase() != 'div');

		var a = map.layout, b, name = [];
		do {
			b = a[index.pop()];
			name.push(b.name);
			a = b.child;
		} while (a && index.length);

		if ('child' in b) {
			if (b.open = !b.open) {
				append($(this), a);
			} else {
				$(this).children('ul').remove();
			}
			return false;
		}

		name.pop();
		var bid  = name.join('%');
		var min  = b.min;
		var max  = b.max;
		var init = b.init;
		var size = b.size;
		if (size >= INTEGER1x1) {
			switch (size) {
				case INTEGER1x1: size = 'INTEGER1x1'; break;
				case INTEGER1x2: size = 'INTEGER1x2'; break;
				case INTEGER1x3: size = 'INTEGER1x3'; break;
				case INTEGER1x4: size = 'INTEGER1x4'; break;
				case INTEGER1x5: size = 'INTEGER1x5'; break;
				case INTEGER1x6: size = 'INTEGER1x6'; break;
				case INTEGER1x7: size = 'INTEGER1x7'; break;
				case INTEGER2x4: size = 'INTEGER2x4'; break;
				case INTEGER2x7: size = 'INTEGER2x7'; break;
				case INTEGER4x4: size = 'INTEGER4x4'; break;
				default: return false;
			}
			if (b.factor && (b.factor != 1)) {
				min  = (min  / b.factor) | 0;
				max  = (max  / b.factor) | 0;
				init = (init / b.factor) | 0;
				b.ofs =  '[' + b.ofs + ',' + b.factor + ']';
			}
		} else { max = size; }

		var o = {
			'parameter-id'   : bid + '%' + b.addr,
			'parameter-size' : size  + '',
			'parameter-vofs' : b.ofs + '',
			'min':  min  + '',
			'max':  max  + '',
			'init': init + '',
		};

		$('#e-right-sidebar-content').trigger('helper', o);
		$('#e-address-map-pane').hide();

		return false;
	});

});

$(function() { /* reuse table */

	var MAX_REUSE_FRAMES = 10;

	window.create_reuse_table = function (options) {

		var doc = '<table>';
		doc += '<tr><th>target-frame</th><th>replaced block-id of items</th></tr>';

		for (var n = 0; n < MAX_REUSE_FRAMES; n++) {
			var frame = '', bid = '';
			if (cur_page.reuse && n < cur_page.reuse.length) {
				frame = cur_page.reuse[n].frame;
				bid = cur_page.reuse[n].bid;
			}
			doc += '<tr>';
			doc += '<td><select><option></option>';
			for (var i = 0; i < options.length; i++) {
				var opt = options[i].trim();
				doc += '<option' + (frame == opt ? ' selected>' : '>') + opt + '</option>';
			}
			doc += '</select></td>';
			doc += '<td><input type="text" size="100" value="' + bid + '"/></td>';
			doc += '</tr>';
		}

		doc += '</table>'
		$('#e-reuse-table').append(doc);
	}

	$('#e-reuse-table').on('change', function(e) {
		var tbl = [];
		for (var n = 0; n < MAX_REUSE_FRAMES; n++) {
			var frame = $('#e-reuse-table tr').eq(n).find('option:selected').text();
			var bid = $('#e-reuse-table tr').eq(n).find('input[type="text"]').val();
			if (frame) { tbl.push({ frame:frame, bid:bid }); }
		}
		edit.reuse_page(tbl);
	});

	$('#e-reuse-table').on('click', function(e) { return false; });

});
