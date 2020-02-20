//
//	ebuilder.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	$('#e-load').on('click', function(e) {
		edit.load();
	});

	$('#e-save').on('click', function(e) {
		edit.save();
	});

	$('#e-save-as').on('click', function(e) {
		edit.save_as();
	});

	$('#e-undo').on('click', function(e) {
		if (edit.undo()) { refresh(); }
	});

	$('#e-redo').on('click', function(e) {
		if (edit.redo()) { refresh(); }
	});

	$('#e-cut').on('click', function(e) {
		if (edit.cut_item()) { refresh(); }
	});

	$('#e-copy').on('click', function(e) {
		edit.copy_item();
	});

	$('#e-paste').on('click', function(e) {
		if (edit.paste_item()) { refresh(); }
	});

	$('#e-delete').on('click', function(e) {
		if (edit.delete_item()) { refresh(); }
	});

	$('#e-grid').on('change', function(e) {
		draw_grid();
	});

	$('#e-grid-step').on('change', function(e) {
		draw_grid();
	});

	$('#e-align-left').on('click', function(e) {
		if (edit.align('left', $('#e-grid-step').val() * 1)) { refresh(); }
	});

	$('#e-align-top').on('click', function(e) {
		if (edit.align('top', $('#e-grid-step').val() * 1)) { refresh(); }
	});

	$('#e-align-right').on('click', function(e) {
		if (edit.align('right', $('#e-grid-step').val() * 1)) { refresh(); }
	});

	$('#e-align-bottom').on('click', function(e) {
		if (edit.align('bottom', $('#e-grid-step').val() * 1)) { refresh(); }
	});

	$('#e-center-horizontal').on('click', function(e) {
		if (edit.center('horizontal')) { refresh(); }
	});

	$('#e-center-vertical').on('click', function(e) {
		if (edit.center('vertical')) { refresh(); }
	});

	$('#e-spacing').on('click', function(e) {
		if (edit.spacing($('#e-space').val() * 1)) { refresh(); }
	});

	$('#e-equal-spacing').on('click', function(e) {
		if (edit.spacing()) { refresh(); }
	});

	$('#e-language').on('change', function(e) {
		window.language = $('#e-language option:selected').text();
		refresh();
	});

	$('#e-inspect').on('change', function(e) {
		refresh();
	});

	$('#e-reload').on('click', function(e) {
		edit.backup();
		location.reload(true);
	});

	$('#e-refresh').on('click', function(e, except_property) {
		refresh(except_property);
	});

	$('#e-items').on('click', function(e) {
		$('#e-left-sidebar-fixed-pane').hide();
	});

	$('#e-pages').on('click', function(e) {
		$('#e-left-sidebar-fixed-pane').show();
	});

	$('#e-insert-page').on('click', function(e) {
		edit.insert_page(); refresh();
	});

	$('#e-append-page').on('click', function(e) {
		edit.append_page(); refresh();
	});

	$('#e-up-page').on('click', function(e) {
		if (edit.forword_page()) { refresh(); }
	});

	$('#e-down-page').on('click', function(e) {
		if (edit.backword_page()) { refresh(); }
	});

	$('.e-expand').on('click', function(e) {
		if ($('#e-hierarchy-wrapper').is(':hidden')) {
			$('#e-left-sidebar-fixed-pane').hide();
			$('#e-left-sidebar-header .e-header-style-button').hide();
			$('#e-hierarchy-wrapper').show();
			$('#e-stage-wrapper').css('left', '450px');
			refresh();
		} else {
			$('#e-stage-wrapper').css('left', '150px');
			$('#e-hierarchy-wrapper').hide();
			$('#e-left-sidebar-header .e-header-style-button').show();
		}
	});

	$('#e-search').on('change', function(e) {
		var id = $(this).val(); if (!id) return;
		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			if (page.prop.id == id) {
				cur_page = page; edit.clear(); refresh();
				$('#e-hierarchy-list-wrapper .e-current')[0].scrollIntoView(true);
				return;
			}
			var items = page.items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				if (items[n].id == id) {
					cur_page = page; edit.select(id); refresh();
					$('#e-hierarchy-list-wrapper .e-current')[0].scrollIntoView(true);
					return;
				}
			}
		}
		alert(id + ' not found');
	});

	$('#e-sidebar-list-page-wrapper').on('click', '.e-sidebar-list-page', function(e) {
		cur_page = layout.pages[$(this).index()];
		refresh();
	});

	$('#e-right-sidebar-content').on('click', '#e-duplicate-page', function(e) {
		edit.duplicate_page();
		refresh();
	});

	$('#e-right-sidebar-content').on('click', '#e-delete-page', function(e) {
		if (edit.delete_page()) { refresh(); }
	});

	$('#e-hierarchy-list-wrapper').on('click', '.e-hierarchy-page', function(e) {
		e.stopPropagation(); $(document).trigger('click');
		cur_page = layout.pages[$(this).attr('index')];
		refresh();
	});

	$('#e-right-sidebar-bottom').on('click', '.e-inspector-style-button', function(e) {
		var index = $(this).index() - 1;
		if (index < 0) {
			edit.clear();
		} else {
			edit.select(cur_page.items[index].id, false);
		}
		refresh();
	});

	$('#e-canvas').on('draw', function(e) {
		draw_grid();
	});

	$(window).resize(refresh);

	function refresh(except_property) {

		try { create_hierarchy() } catch(e) {
			alert(e); edit.undo(); refresh(); return;
		}

		$('#e-sidebar-list-page-wrapper').empty();
		var doc = '';
		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			var cls = 'e-sidebar-list-page';
			if (page == cur_page) cls += ' e-current-page';
			doc += '<button class="' + cls + '">' + page.prop.id + '</button>';
		}
		$('#e-sidebar-list-page-wrapper').append(doc);

		$('#e-right-sidebar-bottom').empty();
		var desc = '<b>' + cur_page.prop.type + '</b> : ' + cur_page.prop.id;
		doc = '<button class="e-inspector-style-button">' + desc + '</button>';
		var items = cur_page.items;
		for (var n = 0, cnt = items.length; n < cnt; n++) {
			desc = '<b>' + items[n].type + '</b> : ' + items[n].id;
			if (items[n].locked) desc += ' <b><i>(LOCKED)</i></b>'
			doc += '<button class="e-inspector-style-button">' + desc + '</button>';
		}
		$('#e-right-sidebar-bottom').append(doc);

		$('#e-edit-stage').empty();

		var page = cur_page.prop;
		$('#e-edit-wrapper').css('margin',
			($('#e-stage-wrapper').outerHeight(true) < page.height) ? '0 auto' : 'auto');
		$('#e-edit-wrapper').width(page.width);
		$('#e-edit-wrapper').height(page.height);
		$('#e-edit-stage').width(page.width);
		$('#e-edit-stage').height(page.height);

		var $page = widget['page'].create$(page);
		$('#e-edit-stage').append($page);
		if ($('#e-inspect').prop('checked')) { $page.css('opacity', '0.3'); }

		var items = cur_page.items;
		for (var n = 0, cnt = items.length; n < cnt; n++) {
			var item = items[n];
			var $elem = widget[item.type].create$(item);
			if ($elem) {
				$elem.addClass('e-edit-target');
				$page.append($elem);
			}
		}

		$('p[msg^="IDM"],label[msg^="IDM"],a[msg^="IDM"]').each(function() {
			var idm = $(this).attr('msg');
			if (idm) { $(this).html(MSG(idm)); }
		});

		$('.elf-dial-control canvas').each(function(){ draw_dial($(this), 30) });

		draw_grid();

		if (!except_property) refresh_property();
	}

	function create_hierarchy() {

		var _deferred = [];

		$('#e-hierarchy-list-wrapper').empty();
		var doc = '';
		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			var cls = 'e-hierarchy-page' + (page == cur_page ? ' e-current' : '');
			doc += '<div class="' + cls + '" id="x-' + page.prop.id + '" index="' + i + '">' + page.prop.id;
			var items = page.items;
			for (var n = 0, cnt = items.length; n < cnt; n++) {
				var item = items[n];
				if (item.type == 'frame') {
					doc += '<div class="e-hierarchy-frame" id="x-' + item.id + '">[ ' + item.id + ' ]</div>';
				}
				if (item['page-selector']) _deferred.push(item['page-selector']);
			}
			doc += '</div>';
		}
		$('#e-hierarchy-list-wrapper').append(doc);

		for (var i = 0, num = layout.pages.length; i < num; i++) {
			var page = layout.pages[i];
			if (page.prop['target-frame']) {
				if (_deferred.indexOf(page.prop['target-frame']) !== -1) {
					$('#x-' + page.prop.id).addClass('e-deferred');
				}
				$('#x-' + page.prop.id).appendTo($('#x-' + page.prop['target-frame']));
			}
		}
	}

	function draw_grid() {
		var canvas = $('#e-canvas')[0];
		canvas.style.left = cur_page.prop.c_left + 'px';
		canvas.style.top  = cur_page.prop.c_top  + 'px';
		var width  = canvas.width  = cur_page.prop.c_width;
		var height = canvas.height = cur_page.prop.c_height;
		var ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.fillStyle = $('#e-canvas').css('background-color');
		ctx.fillRect(0, 0, width, height);

		if ($('#e-grid').prop('checked')) {
			ctx.strokeStyle = $('#e-canvas').css('color');
			ctx.lineWidth = 0.5;
			var step = $('#e-grid-step').val() * 1;
			if (!isNaN(step) && step) {
				for (var x = step; x < width; x += step) {
					ctx.moveTo(x, 0); ctx.lineTo(x, height);
				}
				for (var y = step; y < height; y += step) {
					ctx.moveTo(0, y); ctx.lineTo(width, y);
				}
				ctx.stroke();
			}
		}
		ctx.closePath();

		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'red';
		ctx.setLineDash([5, 15]);
		var items = cur_page.items;
		for (var n = 0, cnt = items.length; n < cnt; n++) {
			var item = items[n];
			if (!item.checked) continue;
			var x = $('#' + item.id).position().left - 2;
			var y = $('#' + item.id).position().top  - 2;
			var w = $('#' + item.id).outerWidth(true)  + 4;
			var h = $('#' + item.id).outerHeight(true) + 4;
			ctx.strokeRect(x, y, w, h);
		}
		ctx.closePath();
	}

	function draw_dial($canvas, degree) {

		var LIMIT = 136; /* -136 ~ 136 degree */

		var canvas = $canvas[0];

		var thickness = $canvas.prev().css('border-radius').replace('px', '');
		var fgcolor   = $canvas.prev().css('color');
		var bgcolor   = $canvas.prev().css('background-color');

		var x = Math.floor(canvas.width  / 2);
		var y = Math.floor(canvas.height / 2);
		var r = Math.min(x, y) - thickness;

		var deg_s = (-LIMIT - 90) * Math.PI / 180;
		var deg_v = (degree - 90) * Math.PI / 180;
		var deg_e = ( LIMIT - 90) * Math.PI / 180;

		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (fgcolor) {
			ctx.beginPath();
			ctx.lineWidth = thickness;
			ctx.strokeStyle = fgcolor;
			ctx.arc(x, y, r, deg_s, deg_v, false);
			ctx.stroke();
			ctx.closePath();
		}
		if (bgcolor) {
			ctx.beginPath();
			ctx.lineWidth = thickness;
			ctx.strokeStyle = bgcolor;
			ctx.arc(x, y, r, deg_v, deg_e, false);
			ctx.stroke();
			ctx.closePath();
		}
	}

	/* set buttun state */
	edit.state_callback(function() {
		var state = edit.state();
		$('#e-save'  ).prop('disabled', !state.save);
		$('#e-undo'  ).prop('disabled', !state.undo);
		$('#e-redo'  ).prop('disabled', !state.redo);
		$('#e-cut'   ).prop('disabled', !state.cut);
		$('#e-copy'  ).prop('disabled', !state.copy);
		$('#e-paste' ).prop('disabled', !state.paste);
		$('#e-delete').prop('disabled', !state.del);
	});

	for (var lang in window.messageSet) {
		$('#e-language').append('<option' +
			((lang === window.language) ? ' selected>' : '>') + lang + '</option>');
	}

	edit.restore();
	refresh();

});
