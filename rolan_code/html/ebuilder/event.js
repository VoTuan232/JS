//
//	event.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	/* keyboard event */

	var zoom = 100;

	$(document).on('keydown', function(e) {
		if (e.shiftKey || e.altKey || e.metaKey) return;
		if (e.ctrlKey) {
			if (e.keyCode === 88) { /* Ctrl + 'X' */
				edit.cut_item(); $('#e-refresh').trigger('click');
			} else
			if (e.keyCode === 67) { /* Ctrl + 'C' */
				edit.copy_item(); $('#e-refresh').trigger('click');
			} else
			if (e.keyCode === 86) { /* Ctrl + 'V' */
				edit.paste_item(); $('#e-refresh').trigger('click');
			} else
			if (e.keyCode === 90) { /* Ctrl + 'Z' */
				edit.undo(); $('#e-refresh').trigger('click');
			} else
			if (e.keyCode === 89) { /* Ctrl + 'Y' */
				edit.redo(); $('#e-refresh').trigger('click');
			} else
			if (e.keyCode === 107) { /* Ctrl + '+' */
				document.body.style.zoom = (zoom += 10) + '%';
			} else
			if (e.keyCode === 109) { /* Ctrl + '-' */
				zoom -= 10;
				document.body.style.zoom = (zoom -= 10) + '%';
			}
		} else {
			if (e.keyCode ==  8) { return false; } /* disable Back Sspace (hisory back) */
			else if (e.keyCode == 37) { move(-1,  0); } /* Right arrow */
			else if (e.keyCode == 38) { move( 0, -1); } /* Up    arrow */
			else if (e.keyCode == 39) { move( 1,  0); } /* Left  arrow */
			else if (e.keyCode == 40) { move( 0,  1); } /* Down  arrow */
			else if (e.keyCode == 46) { /* Delete */
				edit.delete_item(); $('#e-refresh').trigger('click');
			}
		}
	});

	$('#e-hierarchy-header').on('keydown', function(e) { e.stopPropagation(); });
	$('#e-right-sidebar-content').on('keydown', function(e) { e.stopPropagation(); });
	$('#e-reuse-table').on('keydown', function(e) { e.stopPropagation(); });

	function move(dx, dy) {
		var targets = edit.target_items();
		if (!targets.length) return;
		for (var i = 0, num = targets.length; i < num; i++) {
			var item = targets[i];
			var _$ = $('#' + item.id);
			if (isNaN(item.left) || isNaN(item.top)) continue;
			item.left = Math.floor((item.left * 1) + dx);
			item.top  = Math.floor((item.top  * 1) + dy);
			_$.css('left', item.left + 'px'),
			_$.css('top',  item.top +  'px');
		}
		edit.change();
		$('#e-refresh').trigger('click');
	}

	/* mouse event */

	var binder = null, op = null;
	var from, type, sizing, lastX, lastY, region = {};

	$('#e-client-wrapper').on('mousedown', '.e-sidebar-list-page', function(e) {
		op = 'page'; from = $(this).index();
	});

	$('#e-client-wrapper').on('mouseup', '.e-sidebar-list-page', function(e) {
		if (op != 'page') return;
		var to = $(this).index();
		if (from != to) {
			edit.move_page(from, to);
			$('#e-refresh').trigger('click');
		}
	});

	$('#e-client-wrapper').on('mousedown', '.e-hierarchy-frame', function(e) {
		op = ''; return false;
	});

	$('#e-client-wrapper').on('mousedown', '.e-hierarchy-page', function(e) {
		op = 'hierarchy'; from = $(this).attr('index') * 1; return false;
	});

	$('#e-client-wrapper').on('mouseup', '.e-hierarchy-frame', function(e) {
		if (op != 'hierarchy') return;
		edit.change(layout.pages[from].prop, { 'target-frame' : $(this).attr('id').substr(2) });
		$('#e-refresh').trigger('click');
		return false;
	});

	$('#e-client-wrapper').on('mouseup', '.e-hierarchy-page', function(e) {
		if (op != 'hierarchy') return;
		var to = $(this).attr('index') * 1;
		if (from != to) {
			edit.insert_page(from, to);
			$('#e-refresh').trigger('click');
		}
		return false;
	});

	$('#e-client-wrapper').on('mousedown', '.e-inspector-style-button', function(e) {
		op = 'inspector'; from = $(this).index() - 1;
	});

	$('#e-client-wrapper').on('mouseup', '.e-inspector-style-button', function(e) {
		if (op != 'inspector') return;
		var to = $(this).index() - 1;
		if (from != to) {
			edit.swap_item(from, to);
			$('#e-refresh').trigger('click');
		}
	});

	$('#e-client-wrapper').on('mousedown', '.e-sidebar-list-item', function(e) {
		type = $(this).attr('id');
		binder = '#e-client-wrapper';
		$(binder).bind('mousemove', function(e) {
			op = 'drop'; 
			lastX = Math.floor(e.pageX - $('#e-edit-wrapper').offset().left);
			lastY = Math.floor(e.pageY - $('#e-edit-wrapper').offset().top);
			return false;
		});
		return false;
	});

	$('#e-edit-stage').on('mousedown', function(e) {
		op = 'region'; 
		region.left = region.right  = Math.floor(e.pageX - $('#e-edit-wrapper').offset().left);
		region.top  = region.bottom = Math.floor(e.pageY - $('#e-edit-wrapper').offset().top);
		binder = '#e-edit-stage';
		$(binder).bind('mousemove', function(e) {
			region.right  = Math.floor(e.pageX - $('#e-edit-wrapper').offset().left);
			region.bottom = Math.floor(e.pageY - $('#e-edit-wrapper').offset().top);
			return false;
		});
		return false;
	});

	$('#e-edit-stage').on('mousedown', '.e-edit-target', function(e) {
		op = 'click';
		if (edit.check_lock($(this).attr('id'), e.altKey)) return false;
		edit.select($(this).attr('id'), e.ctrlKey);
		$('#e-canvas').triggerHandler('draw');

		lastX = e.pageX;
		lastY = e.pageY;
		sizing = (e.which == 3 || e.metaKey);
		binder = '#e-edit-stage';
		$(binder).bind('mousemove', function(e) {
			var dx = (e.pageX - lastX);
			var dy = (e.pageY - lastY);
			if (op == null) {
				if ((-2 < dx && dx < 2) && (-2 < dy && dy < 2)) return;
			}
			op = 'drag'; 
			var targets = edit.target_items();
			for (var i = 0, num = targets.length; i < num; i++) {
				var item = targets[i];
				var _$ = $('#' + item.id);
				if (sizing) {
					item.width  = Math.floor((item.width  * 1) + dx);
					item.height = Math.floor((item.height * 1) + dy);
					_$.css('width',  item.width  + 'px');
					_$.css('height', item.height + 'px');
				} else {
					if (isNaN(item.left) || isNaN(item.top)) continue;
					item.left = Math.floor((item.left * 1) + dx);
					item.top  = Math.floor((item.top  * 1) + dy);
					_$.css('left', item.left + 'px'),
					_$.css('top',  item.top +  'px');
				}
			}
			lastX = e.pageX;
			lastY = e.pageY;
			$('#e-canvas').triggerHandler('draw');
			return false;
		});
		return false;
	});

	$(window).bind('mouseup', function() {
		if (binder) {
			$(binder).unbind('mousemove');
			binder = null;
		}
		if (op == 'click') {
			$('#e-refresh').trigger('click');
		} else if (op == 'drop') {
			edit.append_item(type, lastX, lastY);
			$('#e-refresh').trigger('click');
		} else if (op == 'drag') {
			edit.change();
			$('#e-refresh').trigger('click');
		} else if (op == 'region') {
			edit.select_items(region);
			$('#e-refresh').trigger('click');
		}
		op = null;
	});

});
