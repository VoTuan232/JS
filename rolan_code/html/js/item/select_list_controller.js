//
//	select_list_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function () {

	var backgroundClassNames = ['elf-popup-wrapper', 'page-select-list-popup-wrapper'];

	$(document).on('elf-update', '.elf-select-list-control', function (e, v) {
		var item = _items[$(this).attr('id')];
		var index = v;
		if (item.list_order) {
			index = item.list_order.indexOf(v);
			if (index < 0) {
				index = v;
			}
		}
		var all = $('#' + item.id + '-list a');
		var opt = all.eq(index);
		all.removeAttr('checked');
		opt.attr('checked', 'checked');
		$(this).attr('value', v);
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
		$('.' + backgroundClassNames.join('.')).remove();
	}

	$(document).on('click', '.elf-select-list-control', function (e) {
		e.stopPropagation();
		e.preventDefault();

		hide();

		var _$ = $(this);
		parent = '#' + _$.attr('id');
		list = parent + '-list';
		var val = undefined;
		var item = _items[_$.attr('id')];
		if (item && item.pid) {
			val = $(parent).attr('value');
			if (val) {
				val = parseInt(val, 10);
				if (item.list_order) {
					val = item.list_order.indexOf(val);
				}
				$(parent + '-list a').removeAttr('checked');
				$(parent + '-list a').eq(val).attr('checked', 'checked');
			}
		}
		if (val === undefined) {
			val = $(parent+' p').text();
			for(var i =0; i< $(parent + '-list a').length;i++){
				if($(parent + '-list a').eq(i).text() == val){
					$(parent + '-list a').removeAttr('checked');
					$(parent + '-list a').eq(i).attr('checked', 'checked');
					break;
				}
			}
		}
		var wrapper = $('<div class="select-popup-wrapper"></div>');
		$(document.body).append(wrapper);
		$(list).appendTo(wrapper).show();

		$(list).css('min-width', _$.css('width').slice(0, -2));
		if (_$.offset().top + parseInt(_$.css('height').slice(0, -2)) + 252 <= $(window).height()) {
			$(list).css('top', _$.offset().top + parseInt(_$.css('height').slice(0, -2)));
		} else {
			$(list).css('top', _$.offset().top - 252);
		}
		$(list).css('left', _$.offset().left);
		$(list).css('right', 'auto');
		$(list).css('bottom', 'auto');

		var opt = $(list).find('div a[checked]');
		if (opt.length) opt[0].scrollIntoView(true);

		$(list).bind('keydown', function (e) {
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
			if (o.offsetTop < scrollTop) { $(list).scrollTop(o.offsetTop); }
			if (o.offsetTop > scrollEnd) { $(list).scrollTop(o.offsetTop + scrollTop - scrollEnd); }
		});

		var background = $('<div>').addClass(backgroundClassNames.join(' '));
		$(document.body).append(background);
		$(list).focus();

	});

	$(document).on('keydown', '.elf-select-list-control', function (e) {
		e.stopPropagation();
		if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
		var item = _items[$(this).attr('id')];
		var a = '#' + item.id + '-list a';
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

	$(document).on('click', '.elf-select-list-option-control', function (e) {
		e.stopPropagation();
		$(list).find('div a').removeAttr('checked');
		$(this).attr('checked', 'checked');
		var s = $(this).text();
		var v = $(this).index();
		var item = _items[$(e.target).closest(".elf-select-list").attr('id').replace('-list','')];
		if (item && item.list_order && v < item.list_order.length) {
			v = item.list_order[v];
		}
		setTimeout(function () { /* deferred call */
			hide();
			$(parent).attr('value', v);
			$(parent).children('p').text(s);
			$(parent).trigger('elf-change', v);
		}, 0);
	});

	$(window).resize(function () { hide(); });
	$(document).on(pointer.down, '.select-popup-wrapper', function (e) { hide(); return false; });
	$(document).on(pointer.down, '.elf-select-list', function (e) { e.stopPropagation(); });
	$(document).on(pointer.click, '.elf-select-list-close', function (e) { hide(); return false; });

});