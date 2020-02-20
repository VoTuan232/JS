//
//	export.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	$('#e-export').on('click', function(e) {
		$('#e-edit-stage').empty();
		$('#layout-wrapper').empty();
		edit.clear();
		verify();
		export_files(expand_reuse_pages());
		$('#e-refresh').trigger('click');
	});

	function verify() {
		var _ids = {};
		/* at first, collect all id (ans check overlapped id) */
		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			if (_ids[page.prop.id]) {
				alert('"' + page.prop.id + '" (page) is overlapping');
			}
			_ids[page.prop.id] = true;
			var items = page.items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				var id = items[n].id;
				if (_ids[id]) {
					alert('"' + id + '" (' + items[n].type + ') in ' +
						page.prop.id +' is overlapping');
				}
				_ids[id] = true;
			}
		}

		function check(item, prop) {
			/* if target id is not exists, then remove the property form item */
			if (item[prop] && !_ids[item[prop]]) delete item[prop];
		}

		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			check(page.prop, 'target-frame');
			var items = page.items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				var item = items[n];
				check(item, 'stringer');
				check(item, 'inc-value');
				check(item, 'dec-value');
				check(item, 'lower-than');
				check(item, 'upper-than');
				check(item, 'page-selector');
				check(item, 'replace-frame');
				if (item['popup'] != '--close')
					check(item, 'popup');
			}
		}
	}

	function expand_reuse_pages() {

		function clone(page, frame, bid) {
			var _id = '_' + frame;
			var o = $.extend(true, {}, page);
			o.prop['id'] += _id;
			o.prop['target-frame'] = frame;
			for (var i = 0, num = o.items.length; i < num; i++) {
				o.items[i]['id'] += _id;
				if (o.items[i]['lower-than']) o.items[i]['lower-than'] += _id;
				if (o.items[i]['upper-than']) o.items[i]['upper-than'] += _id;
				if (o.items[i]['stringer']  ) o.items[i]['stringer']   += _id;
				if (o.items[i]['inc-value'] ) o.items[i]['inc-value']  += _id;
				if (o.items[i]['dec-value'] ) o.items[i]['dec-value']  += _id;
				/* do not care 'replace-block', 'replace-frame', 'page-selector', 'popup'. */
				if (o.items[i]['parameter-id'] && bid) {
					var _ = o.items[i]['parameter-id'].split('%');
					o.items[i]['parameter-id'] = bid + '%' + _.pop();
				}
			}
			return o;
		}

		var pages = $.extend(true, [], layout.pages);

		var _ = [];
		for (var i = 0, num = pages.length; i < num; i++) {
			var page = pages[i];
			if (page.reuse) {
				for (var n = 0, len = page.reuse.length; n < len; n++) {
					_.push(clone(page, page.reuse[n].frame, page.reuse[n].bid));
				}
			}
		}

		return pages.concat(_);
	}

	function export_files(pages) {

		var files, styles = '', scripts = '';

		try {
			files = $native.fs.contents(cur_dir + 'css');
			for (var i = 0, num = files.length; i < num; i++) {
				styles += ('<link rel="stylesheet" type="text/css" href="css/' + files[i].name + '">\n');
			}

			files = $native.fs.contents(cur_dir + 'js/lib');
			for (var i = 0, num = files.length; i < num; i++) {
				scripts += ('<script src="js/lib/' + files[i].name + '"></script>\n');
			}

			scripts += ('<script src="import.js"></script>\n');
			scripts += ('<script src="js/config/message.js"></script>\n');

			files = $native.fs.contents(cur_dir + 'js/utilities');
			for (var i = 0, num = files.length; i < num; i++) {
				scripts += ('<script src="js/utilities/' + files[i].name + '"></script>\n');
			}
		} catch (e) { alert(e); }

		try {
			/* additional scripts  */
			var files = $native.fs.readString(cur_dir + 'additionals').split(/\r\n|\r|\n/);
			for (var i = 0, num = files.length; i < num; i++) {
				if (!files[i]) continue;
				scripts += ('<script src="' + files[i] + '"></script>\n');
			}
		} catch (e) {}

		try {
			files = $native.fs.contents(cur_dir + 'js/item');
			for (var i = 0, num = files.length; i < num; i++) {
				if (files[i].name == 'item_logic.js') continue; /* append after for loop */
				scripts += ('<script src="js/item/' + files[i].name + '"></script>\n');
			}
			scripts += ('<script src="js/item/item_logic.js"></script>\n');
		} catch (e) { alert(e); }

		var _items = {};
		var _deferred = [];

		function foreach_pages(parent, page) {
			var items = page.items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				var item = items[n];
				var elem = widget[item.type].create$(item);
				if (elem) {
					parent.append(elem);
					_items[item.id] = {
						id			: item['id'],
						pid			: item['parameter-id'],
						size		: eval(item['parameter-size']),
						vofs		: eval(item['parameter-vofs']),
						init		: item['init'],
						opt			: eval(item['option']),
						opt_addr	: eval(item['option-addr']),
						opt_type	: eval(item['option-type']),
						trig		: eval(item['trigger-changed']),
						lower		: item['lower-than'],
						upper		: item['upper-than'],
						stringer	: item['stringer'],
						block		: item['replace-block'],
						replace		: item['replace-frame'],
						frame		: item['page-selector'],
						order		: eval(item['page-order']),
						popup		: item['popup'],
						inc			: item['inc-value'],
						dec			: item['dec-value'],
					}
					if (item['parameter-id']) elem.addClass('elf-parameter');
					if (item['popup']) elem.addClass('elf-popup');
					if (item['inc-value'] || item['dec-value']) elem.addClass('elf-step-value');
					if (item['page-selector']) _deferred.push(item['page-selector']);
				}
			}
		}

		for (var i = 0, num = pages.length; i < num; i++) {
			var page = pages[i];
			var elem = widget['page'].create$(page.prop);
			foreach_pages(elem, page);
			$('#layout-wrapper').append(elem);
		}

		for (var i = 0, num = pages.length; i < num; i++) {
			var page = pages[i];
			if (page.prop['target-frame']) {
				if ($('#' + page.prop['target-frame'] + ' div')[0]) {
					$('#' + page.prop.id).css('display', 'none');
				}
				if (_deferred.indexOf(page.prop['target-frame']) !== -1) {
					$('#' + page.prop.id).find('.elf-parameter').each(function() {
						_items[$(this).attr('id')].deferred = true;
					});
				}
				$('#' + page.prop.id).appendTo('#' + page.prop['target-frame']);
			} else if (i != 0) {
				$('#' + page.prop.id).css('display', 'none');
			}
		}
		
		var json = JSON.stringify(_items, null, '\t');
		var div = $('#layout-wrapper').html();

		var html = '';
		html += '<!data type html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
		html += '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n'
		html += '<meta name="format-detection" content="telephone=no, email=no, address=no">\n'
		html += styles;
		html += scripts;
		html += '</head>\n<body oncontextmenu="return false">\n';
		html += '<div id="app-container">';
		html += '  <div id="layout-wrapper"></div>';
		html += '</div>';
		html += '</body>\n</html>\n';

		try  {
			$native.fs.mkdir(cur_dir + 'export');
			$native.fs.writeString(cur_dir + 'export/layout.div', div);
			$native.fs.writeString(cur_dir + 'export/item.json',  json);
			$native.fs.writeString(cur_dir + 'export.html', html);
		} catch (e) { alert(e); }
	}

});
