//
//	select_list_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	$('#app-container').on('elf-update', '.elf-select-list-control', function(e, v) {
		var all = $('#' + $(this).attr('id') + '-list a');
		var opt = all.eq(v);
		all.removeAttr('checked');
		opt.attr('checked', 'checked');
		$(this).children('p').text(opt.text());
		return false;
	});

	var parent, list = null;

	function hide() {
		if (list) {
			$(list).unbind('keydown');
			$(list).hide().unwrap().appendTo($(parent));
			$(parent).focus();
			list = null;
		}
	}

	$('#app-container').on(pointer.click, '.elf-select-list-control', function(e) {
		e.stopPropagation();
		e.preventDefault();

		hide();

		var _$ = $(this);
		parent = '#' + _$.attr('id');
		list = parent + '-list';

		var wrapper = $('<div class="select-popup-wrapper"></div>');
		$('#app-container').append(wrapper);
		$(list).appendTo(wrapper).show();

		var opt = $(list).find('div a[checked]');
		if (opt.length) opt[0].scrollIntoView(true);

		$(list).bind('keydown', function(e) {
			e.preventDefault();
			e.stopPropagation();
			if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
			var a = parent + '-list a';
			var v = $(a + '[checked]').index();
			var step = Math.ceil($(list + ' div').height() / $(a).eq(v).outerHeight(true));

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
			else if (e.keyCode == 35) /* end        */ { x = $(list).find('a:visible:last'); }
			else if (e.keyCode == 36) /* home       */ { x = $(list).find('a:visible:first'); }
			else if (e.keyCode == 38) /* up   arrow */ { x = $(a).eq(v).prevAll(':visible:first'); }
			else if (e.keyCode == 40) /* down arrow */ { x = $(a).eq(v).nextAll(':visible:first'); }
			else return;

			if (x.length == 0) return;

			v = x.index();
			$(a).removeAttr('checked');
			$(a).eq(v).attr('checked', 'checked');
			/* adjust scrolling */
			var o = $(a).eq(v)[0];
			var listHeight = o.offsetParent.clientHeight;
			var scrollTop = o.offsetParent.scrollTop;
			var scrollEnd = scrollTop + listHeight - o.clientHeight;
			if (o.offsetTop < scrollTop) { $(list + ' div').scrollTop(o.offsetTop); }
			if (o.offsetTop > scrollEnd) { $(list + ' div').scrollTop(o.offsetTop + scrollTop - scrollEnd); }
		});

		$(list).focus();

	});

	$('#app-container').on('keydown', '.elf-select-list-control', function(e) {
		e.stopPropagation();
		if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
		var a = '#' + $(this).attr('id') + '-list a';
		var v = $(a + '[checked]').index();
		var x;
		     if (e.keyCode == 38) /* up   arrow */ { x = $(a).eq(v).prevAll(':not(:contains("\t*")):first'); }
		else if (e.keyCode == 40) /* down arrow */ { x = $(a).eq(v).nextAll(':not(:contains("\t*")):first'); }
		else return;
		if (x.length == 0 || v == x.index()) return;
		$(this).trigger('elf-update', x.index());
		$(this).trigger('elf-change', x.index());
	});

	$('#app-container').on('click', '.elf-select-list-option-control', function(e) {
		e.stopPropagation();
		$(list).find('div a').removeAttr('checked');
		$(this).attr('checked', 'checked');
		var s = $(this).text();
		var v = $(this).index();
		setTimeout(function(){ /* deferred call */
			hide();
			$(parent).children('p').text(s);
			$(parent).trigger('elf-change', v);
		}, 0);
	});

	$(window).resize(function() { hide(); });
	$('#app-container').on(pointer.down, '.select-popup-wrapper', function(e) { hide(); return false; });
	$('#app-container').on(pointer.down, '.elf-select-list', function(e) { e.stopPropagation(); });
	$('#app-container').on(pointer.click, '.elf-select-list-close', function(e) { hide(); return false; });

});
