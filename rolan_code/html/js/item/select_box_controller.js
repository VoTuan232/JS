//
//	select_box_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	$(document).on('elf-update', '.elf-select-box-control', function(e, v) {
		var item = _items[$(this).attr('id')];
		var index = v;
		if (item.list_order) {
			index = item.list_order.indexOf(v);
			if (index < 0) {
				index = v;
			}
		}
		var all = $('#' + $(this).attr('id') + '-box a');
		var opt = all.eq(index);
		all.removeAttr('checked');
		opt.attr('checked', 'checked');
		if (!$(this).attr('menu-style')) {
			$(this).attr('value', v);
			$(this).children('p').text(opt.text());
		}
		return false;
	});

	var parent, box = null;

	function hide() {
		if (box) {
			$(box).unbind('keydown');
			$(box).hide().unwrap().appendTo($(parent));
			$(parent).focus();
			box = null;
		}
	}

	$(document).on(pointer.click, '.elf-select-box-control', function(e) {
		e.stopPropagation();
		e.preventDefault();

		hide();

		var _$ = $(this);
		parent = '#' + _$.attr('id');
		box = parent + '-box';

		var val = undefined;
		var item = _items[_$.attr('id')];
		if (item && item.pid) {
			val = $(parent).attr('value');
			if (val) {
				val = parseInt(val, 10);
				if (item.list_order) {
					val = item.list_order.indexOf(val);
				}
			}
		}
		if (val === undefined) {
			val = $(parent+' p').text();
		}

		var left   = _$.offset().left;
		var top    = _$.offset().top + _$.outerHeight();
		var width  = _$.outerWidth();
		var height = $(box).height();

		if (_$.attr('box-width') !== undefined) {
			width = _$.attr('box-width') * 1;
		}

		if (left + width > $(document).width()) {
			left = (left + _$.outerWidth()) - width;
		}
		if (top + height > $(document).height()) {
			top = _$.offset().top - height;
		}

		$(box).css('left',  left  + 'px');
		$(box).css('top',   top   + 'px');
		$(box).css('width', width + 'px');

		var wrapper = $('<div class="select-popup-wrapper"></div>');
		$(document.body).append(wrapper);
		$(box).appendTo(wrapper).show();

		var opt = $(box).children('a[checked]');
		if (opt.length) opt[0].scrollIntoView(true);

		$(box).bind('keydown', function(e) {
			e.preventDefault();
			e.stopPropagation();
			if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
			var a = parent + '-box a';
			var v = $(a + '[checked]').index();
			var step = Math.floor($(box).height() / $(a).eq(v).height());

			var x;
			     if (e.keyCode == 13) /* enter      */ { $(a).eq(v).trigger('click'); return; }
			else if (e.keyCode == 27) /* esc        */ { hide(); return; } 
			else if (e.keyCode == 33) /* page up    */ {
				x = $(a).eq(v).prevAll(':visible');
				var idx = Math.min(step, x.length) - 1; if (idx < 0) return;
				x = x.eq(idx);
			}
			else if (e.keyCode == 34) /* page down  */ {
				x = $(a).eq(v).nextAll(':visible');
				var idx = Math.min(step, x.length) - 1; if (idx < 0) return;
				x = x.eq(idx);
			}
			else if (e.keyCode == 35) /* end        */ { x = $(box).find('a:visible:last'); }
			else if (e.keyCode == 36) /* home       */ { x = $(box).find('a:visible:first'); }
			else if (e.keyCode == 38) /* up   arrow */ { x = $(a).eq(v).prevAll(':visible:first'); }
			else if (e.keyCode == 40) /* down arrow */ { x = $(a).eq(v).nextAll(':visible:first'); }
			else return;

			if (x.length == 0) return;

			v = x.index();
			$(a).removeAttr('checked');
			$(a).eq(v).attr('checked', 'checked');
			/* adjust scrolling */
			var o = $(a).eq(v)[0];
			var boxHeight = o.offsetParent.clientHeight;
			var scrollTop = o.offsetParent.scrollTop;
			var scrollEnd = scrollTop + boxHeight - o.clientHeight;
			if (o.offsetTop < scrollTop) { $(box).scrollTop(o.offsetTop); }
			if (o.offsetTop > scrollEnd) { $(box).scrollTop(o.offsetTop + scrollTop - scrollEnd); }
		});
		$(box).focus();

	});

	$(document).on('keydown', '.elf-select-box-control', function(e) {
		e.stopPropagation();
		if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
		var item = _items[$(this).attr('id')];
		var a = '#' + $(this).attr('id') + '-box a';
		var v = $(a + '[checked]').index();
		var x;
		if (e.keyCode == 38) { x = getOption(a, v, e.keyCode); } /* up   arrow */
		else if (e.keyCode == 40) { x = getOption(a, v, e.keyCode); } /* down arrow */
		else return; 
		if (x.length == 0 || v == x.index()) return;
		var index = x.index();  
		if (item.list_order && v < item.list_order.length) {
			index = item.list_order[index];
		}
		$(this).trigger('elf-update', index);
		$(this).trigger('elf-change', index);
	});

	function getOption(a, v, keyCode) {
		var x , i;
		if (keyCode == 38) {
			x = $(a).eq(v).prevAll(':not(:contains("\t*")):first');
			i = -1;
		} else if (keyCode == 40) {
			x = $(a).eq(v).nextAll(':not(:contains("\t*")):first');
			i = 1;
		}
		return $(x[0]).css('display') != 'none' ? x : getOption(a, v + i, keyCode);
	};

	$(document).on('click', '.elf-select-box-option-control', function(e) {
		e.stopPropagation();
		$(box).children('a').removeAttr('checked');
		$(this).attr('checked', 'checked');
		var s = $(this).text();
		var v = $(this).index();
		var item = _items[$(e.target).closest(".elf-select-box").attr('id').replace('-box','')];
		if (item && item.list_order && v < item.list_order.length) {
			v = item.list_order[v];
		}
		setTimeout(function(){ /* deferred call */
			hide();
			if (!$(parent).attr('menu-style')) {
				$(parent).attr('value', v);
				$(parent).children('p').text(s);
			}
			$(parent).trigger('elf-change', v);
		}, 0);
	});

	$(window).resize(function() { hide(); });
	$(document).on(pointer.down, '.select-popup-wrapper', function(e) { hide(); return false; });
	$(document).on(pointer.down, '.elf-select-box', function(e) { e.stopPropagation(); });

});
