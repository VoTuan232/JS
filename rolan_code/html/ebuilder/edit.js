//
//	edit.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

/* constant difintions */
var
	VERSION = 'Ver 2.01',
	EXTENSION = 'elf',
	MAX_UNDO = 50;

/* global window objects
	layout = { version: "infomation", pages: [ page1, page2, ... } }
	page   = { prop: { properties ... }, items: [ item1, item2, ... ] }
	item   = { properties ... }
 */
layout = { version: VERSION, pages:[] };
cur_page = null;
cur_dir = null;

(function(window) {

	function title(s) { document.title = 'ebuilder (' + VERSION + ') - ' + s; }
	title('Untitled');

	var
		filename = '',
		undo_buf = [],
		undo_index = 0,
		save_index = 0,
		clipboard = null,
		_callback = null;

	var _ = {

		load: function() {
			var fs = $native.fs;
			fs.event.openfilename = function(file) {
				if (file) (open_file(file))();
			};
			var filter = [ EXTENSION ];
			fs.openfilename(filter);
		},

		save: function(after) {
			if (filename) {
				var fs = $native.fs;
				try {
					fs.writeString(filename, JSON.stringify(layout, null, '\t'));
					save_index = undo_index;
					if (after) after();
				} catch (e) { alert(e); }
			} else {
				this.save_as(after);
			}
		},

		save_as: function(after) {
			var fs = $native.fs;
			fs.event.savefilename = function(to) {
				if (to) {
					try {
						fs.writeString(to, JSON.stringify(layout, null, '\t'));
						title(filename = to);
						save_index = undo_index;
						if (after) after();
						if (_callback) _callback();
					} catch (e) { alert(e); }
				}
			};
			var ext = EXTENSION;
			var name = (filename == '') ? 'Untitled'
				: (filename.substr(filename.lastIndexOf(fs.separator()) + 1)).split('.')[0];
			fs.savefilename(name, ext);
		},

		append_page: function() {
			layout.pages.push(new_page());
			snapshot();
		},

		insert_page: function(from, to) {
			if (arguments.length == 0) {
				layout.pages.push(new_page());
				from = layout.pages.length - 1;
				to = layout.pages.indexOf(cur_page) + 1;
			} else {
				if (from < 0 || from >= layout.pages.length) return false;
				if (to < 0 || to >= layout.pages.length) return false;
				if (from > to) to++;
			}
			layout.pages.splice(to, 0, layout.pages.splice(from, 1)[0]);
			var frame = layout.pages[to - 1].prop['target-frame'];
			if (frame !== undefined) {
				layout.pages[to].prop['target-frame'] = frame;
			} else {
				delete layout.pages[to].prop['target-frame'];
			}
			snapshot();
			return true;
		},

		delete_page: function() {
			var index = layout.pages.indexOf(cur_page);
			if (index < 1) return false;
			layout.pages.splice(index, 1);
			if (index >= layout.pages.length) {
				index = layout.pages.length - 1;
			}
			cur_page = layout.pages[index];
			snapshot();
			return true;
		},

		duplicate_page: function() {
			var o = $.extend(true, {}, cur_page);
			o.prop.id = uniq_page_id();
			for (var i = 0, num = o.items.length; i < num; i++) {
				o.items[i].id = 'id' + uniq_id();
			}
			layout.pages.push(o);
			snapshot();
		},

		forword_page: function() {
			var index = layout.pages.indexOf(cur_page) - 1;
			if (index < 0) return false;
			layout.pages.splice(index, 2, cur_page, layout.pages[index]);
			snapshot();
			return true;
		},

		backword_page: function() {
			var index = layout.pages.indexOf(cur_page);
			if (index < 0 || index >= layout.pages.length - 1) return false;
			layout.pages.splice(index, 2, layout.pages[index + 1], cur_page);
			snapshot();
			return true;
		},

		move_page: function(from, to) {
			if (from < 0 || from >= layout.pages.length) return false;
			if (to < 0 || to >= layout.pages.length) return false;
			layout.pages.splice(to, 0, layout.pages.splice(from, 1)[0]);
			snapshot();
			return true;
		},

		reuse_page: function(tbl) {
			if (tbl && tbl.length) {
				cur_page.reuse = tbl;
			} else {
				delete cur_page.reuse;
			}
			snapshot();
			return true;
		},

		append_item: function(type, left, top) {
			if (left < 0) left = 0;
			if (top  < 0) top  = 0;
			var o = new_item(type, left, top);
			o.checked = true;
			this.clear();
			cur_page.items.push(o);
			snapshot();
		},

		delete_item: function() {
			var items = [];
			for (var i = 0, num = cur_page.items.length; i < num; i++) {
				if (!cur_page.items[i].checked) {
					items.push(cur_page.items[i]);
				}
			}
			if (cur_page.items.length != items.length) {
				cur_page.items = items;
				snapshot();
				return true;
			}
			return false;
		},

		cut_item: function() {
			var items = [], checked = [];
			for (var i = 0, num = cur_page.items.length; i < num; i++) {
				if (cur_page.items[i].checked) {
					checked.push(cur_page.items[i]);
				} else {
					items.push(cur_page.items[i]);
				}
			}
			if (checked.length) {
				cur_page.items = items;
				clipboard = checked;
				snapshot();
				return true;
			}
			return false;
		},

		copy_item: function() {
			var checked = [];
			for (var i = 0, num = cur_page.items.length; i < num; i++) {
				if (cur_page.items[i].checked) {
					checked.push($.extend(true, {}, cur_page.items[i]));
				}
			}
			if (checked.length) {
				clipboard = checked;
				if (_callback) _callback();
			}
		},

		paste_item: function() {
			if (clipboard == null) return false;
			this.clear();
			for (var i = 0, num = clipboard.length; i < num; i++) {
				var o = $.extend(true, {}, clipboard[i]);
				o.id = 'id' + uniq_id();
				o.left = (o.left * 1) + 4;
				o.top  = (o.top  * 1) + 4;
				cur_page.items.push(o);
			}
			snapshot();
			return true;
		},

		swap_item: function(from, to) {
			if (from < 0 || from >= cur_page.items.length) return false;
			if (to < 0 || to >= cur_page.items.length) return false;
			cur_page.items.splice(to, 0, cur_page.items.splice(from, 1)[0]);
			snapshot();
			return true;
		},

		align: function(dir, step) {
			var targets = this.target_items();
			if (targets.length == 0) return false;

			if (targets.length > 1) {
				/* align for other items */
				var changed = false;
				var bounds  = get_bounds();
				for (var i = 0, num = targets.length; i < num; i++) {
					var item = targets[i];
					if (isNaN(item.left) || isNaN(item.top)) continue;
					var left   = item.left   * 1;
					var top    = item.top    * 1;
					var width  = item.width  * 1;
					var height = item.height * 1;
					var dx = 0, dy = 0;
					switch (dir) {
						case 'left':   dx = bounds.left - left; break;
						case 'top':    dy = bounds.top  - top;  break;
						case 'right':  dx = bounds.right  - (left + width ); break;
						case 'bottom': dy = bounds.bottom - (top  + height); break;
					}
					if (dx || dy) {
						item.left = (left += dx) + '';
						item.top  = (top  += dy) + '';
						changed = true;
					}
				}
				if (changed) {
					snapshot();
					return true;
				}
				return false;
			}

			/* align for grid line */
			if (isNaN(step) || (step < 1)) return false;
			var item = targets[0];
			if (isNaN(item.left) || isNaN(item.top)) return false;
			var left   = item.left   * 1;
			var top    = item.top    * 1;
			var width  = item.width  * 1;
			var height = item.height * 1;
			var dx = 0, dy = 0;
			switch (dir) {
				case 'left':   dx = -(left % step); break;
				case 'top':    dy = -(top  % step); break;
				case 'right':  dx = step - ((left + width ) % step); break;
				case 'bottom': dy = step - ((top  + height) % step); break;
			}
			if (dx || dy) {
				item.left = (left += dx) + '';
				item.top  = (top  += dy) + '';
				snapshot();
				return true;
			}
			return false;
		},

		center: function(dir) {
			var targets = this.target_items();
			if (targets.length == 0) return false;

			var changed = false;
			var bounds;
			if (targets.length > 1) {
				bounds = get_bounds(); /* centering for other items */
			} else {
				bounds = {  /* centering for current page */
					left: 0, top: 0,
					right:  cur_page.prop.c_width,
					bottom: cur_page.prop.c_height
				};
			}
			for (var i = 0, num = targets.length; i < num; i++) {
				var item = targets[i];
				if (isNaN(item.left) || isNaN(item.top)) continue;
				var left   = item.left   * 1;
				var top    = item.top    * 1;
				var width  = item.width  * 1;
				var height = item.height * 1;
				var x = left, y = top;
				switch (dir) {
					case 'horizontal':
						x = bounds.left + Math.floor((bounds.right - bounds.left - width ) / 2);
						break;
					case 'vertical':
						y = bounds.top  + Math.floor((bounds.bottom - bounds.top - height) / 2);
						break;
				}
				if ((x != left) || (y != top)) {
					item.left = x + '';
					item.top  = y + '';
					changed = true;
				}
			}
			if (changed) {
				snapshot();
				return true;
			}
			return false;
		},

		spacing: function(space) {
			var targets = this.target_items();
			if (targets.length < 1) return false;
			if (space === undefined) {
				var width = 0;
				for (var i = 0, num = targets.length; i < num; i++) {
					var item = targets[i];
					width += (item.width  * 1);
				}
				var bounds = get_bounds();
				space = Math.floor((bounds.right - bounds.left - width) / (targets.length - 1));
			} else {
				if (isNaN(space) || (space < 0)) return false;
			}
			var changed = false;
			for (var i = 0, x = -1, num = targets.length; i < num; i++) {
				var item   = targets[i];
				if (isNaN(item.left)) continue;
				var left   = item.left  * 1;
				var width  = item.width * 1;
				if (x >= 0 && x != left) {
					item.left = (left = x) + '';
					changed = true;
				}
				x = left + width + space;
			}
			if (changed) {
				snapshot();
				return true;
			}
			return false;
		},

		change: function(item, obj) {
			if (arguments.length == 0) {
				/* force snapshot */
				snapshot(); return;
			}
			if (item == null) return;
			for (var prop in obj) {
				if (obj[prop] === '') {
					delete item[prop];
				} else {
					item[prop] = obj[prop] + '';
				}
			}
			snapshot();
		},

		undo: function() {
			if (undo_index == 0) return false;
			undo_index--;
			restore_layout($.extend(true, {}, undo_buf[undo_index]));
			if (_callback) _callback();
			return true;
		},

		redo: function() {
			if ((undo_index + 1) >= undo_buf.length) return false;
			undo_index++;
			restore_layout($.extend(true, {}, undo_buf[undo_index]));
			if (_callback) _callback();
			return true;
		},

		check_lock: function(id, lock) {
			var item = this.find_item(id);
			if (item == null) return;
			if (lock) {
				if (item.locked) {
					delete item.locked;
				} else {
					item.locked = true;
					delete item.checked;
				}
				snapshot();
			}
			return item.locked;
		},

		select: function(id, append) {
			var item = this.find_item(id);
			if (item == null || item.checked) return;
			if (!append) this.clear();
			item.checked = true;
			if (_callback) _callback();
		},

		select_items: function(region) {
			/* normalize region (l < r & t < b) */
			if (region.left > region.right )
				region.left = [region.right,  region.right  = region.left][0];
			if (region.top  > region.bottom)
				region.top  = [region.bottom, region.bottom = region.top ][0];

			var items = cur_page.items;
			for (var i = 0, num = items.length; i < num; i++) {
				var item = items[i];
				delete item.checked;
				if (item.locked) continue;
				if (isNaN(item.left) || isNaN(item.top)) continue;
				var left   = item.left   * 1;
				var top    = item.top    * 1;
				var width  = item.width  * 1;
				var height = item.height * 1;
				if ((left >= region.left) &&
					(top  >= region.top ) &&
					(left + width  <= region.right ) &&
					(top  + height <= region.bottom)) {
					item.checked = true;
				}
			}
			if (_callback) _callback();
		},

		clear: function() {
			var items = cur_page.items;
			for (var i = 0, num = items.length; i < num; i++) {
				delete items[i].checked;
			}
			if (_callback) _callback();
		},

		target_items: function() {
			var checked = [];
			var items = cur_page.items;
			for (var i = 0, num = items.length; i < num; i++) {
				if (items[i].checked) checked.push(items[i]);
			}
			checked.sort(function(a, b) {
				if (a.left < b.left) return -1;
				if (a.left > b.left) return  1;
				return 0;
			});
			return checked;
		},

		find_item: function(id) {
			var items = cur_page.items;
			for (var i = 0, num = items.length; i < num; i++) {
				if (items[i].id == id) return items[i];
			}
			return null;
		},

		state: function() {
			var targets = this.target_items().length;
			return {
				save:  (filename != ''),
				undo:  (undo_index != 0),
				redo:  (undo_index < undo_buf.length - 1),
				cut:   (targets > 0),
				copy:  (targets > 0),
				paste: (clipboard != null),
				del:   (targets > 0)
			}
		},

		state_callback: function(f) { _callback = f; },

		backup: function() {
			var o = {
				filename:   filename,
				undo_buf:   undo_buf,
				undo_index: undo_index,
				save_index: save_index
			};
			$native.app.clipboard(JSON.stringify(o));
		},

		restore: function() {
			var json = $native.app.clipboard();
			if (json) {
				var o = JSON.parse(json);
				filename   = o.filename;
				undo_buf   = o.undo_buf;
				undo_index = o.undo_index;
				save_index = o.save_index;
				restore_layout($.extend(true, {}, undo_buf[undo_index]));
				if (_callback) _callback();
			}
		}

	};

	function open_file(file) {
		return function() {
			try {
				var o = JSON.parse($native.fs.readString(file));
				load_layout(o);
				title(filename = file);
			} catch (e) { alert(e); }
			$('#e-refresh').trigger('click');
		}
	}

	function new_page() {
		var _  = {
			prop: { id: uniq_page_id(), type: 'page' }, items: []
		};
		widget['page'].init(_.prop);
		return _;
	}

	function new_item(type, left, top) {
		var _  = { id: 'id' + uniq_id(), type: type, left: left, top: top };
		widget[type].init(_);
		return _;
	}

	function load_layout(file) {
		file.version = VERSION;
		restore_layout({ layout:file, _index: 0 });
		undo_buf = []; undo_index = 0; save_index = 0;
		snapshot();
	}

	function restore_layout(o) {
		layout = o.layout;
		cur_page = layout.pages[o._index];
	}

	function snapshot() {
		if (undo_buf.length) undo_index++;
		undo_buf.splice(undo_index, undo_buf.length - undo_index);
		var o = {
			layout: $.extend(true, {}, layout),
			_index: layout.pages.indexOf(cur_page)
		};
		undo_buf.push(o);
		if (undo_buf.length > MAX_UNDO) {
			undo_buf.shift(); undo_index--; save_index--;
		}
		if (_callback) _callback();
	}

	function get_bounds() {
		var targets = _.target_items();
		var _left, _top, _right, _bottom;
		for (var i = 0, num = targets.length; i < num; i++) {
			var item = targets[i];
			if (isNaN(item.left) || isNaN(item.top)) continue;

			var left   = item.left   * 1;
			var top    = item.top    * 1;
			var width  = item.width  * 1;
			var height = item.height * 1;

			if (_left   === undefined) _left   = left;
			if (_top    === undefined) _top    = top;
			if (_right  === undefined) _right  = left + width;
			if (_bottom === undefined) _bottom = top  + height;

			if (left < _left) _left = left;
			if (top  < _top)  _top  = top;
			if (left + width  > _right ) _right  = left + width;
			if (top  + height > _bottom) _bottom = top  + height;
		}
		return { left: _left, top: _top, right: _right, bottom: _bottom };
	}

	function uniq_page_id() {
		var numbering = 1;
		loop: while (true) {
			var id = 'Page' + numbering;
			for (var i = 0, num = layout.pages.length; i < num; i++) {
				var page = layout.pages[i];
				if (page.prop.id == id) {
					numbering++;
					continue loop;
				}
			}
			return id;
		}
	}

	function uniq_id() {
		return '_' + new Date().getTime().toString(36) + '_' +
				Math.random().toString(36).substr(2, 9);
	}

	function url2path(url) {
		var path = url.replace('file://', '');
		if (path.match(/^\/[a-zA-Z]:\//)) {
			return path.substr(1).replace(/\//g, $native.fs.separator());
		}
		return path;
	}

	cur_dir = url2path(window.location.href).replace('ebuilder.html', '');

	/* create new page */
	layout.pages.push(new_page());
	cur_page = layout.pages[0];
	snapshot();

	window.edit = _; /* export as window objet */

	$native.app.event.command = function(param1, param2) {
		if (param1 == 'exit') {
			if (undo_index != save_index) {
				$('#e-modal-dialog p').text('Save before exit ?');
				$('#e-modal-dialog-wrapper').show();
				$('#e-modal-dialog').on('click', '.e-button-yes', function() {
					$('#e-modal-dialog-wrapper').hide();
					edit.save(function(){ $native.app.exit(); });
				});
				$('#e-modal-dialog').on('click', '.e-button-no', function() {
					$native.app.exit();
				});
			} else {
				$native.app.exit();
			}
		}
		if (param1 == 'open') {
			if (param2.substr(param2.lastIndexOf('.') + 1) != EXTENSION) return;
			var file = url2path(param2);
			if (undo_index != save_index) {
				$('#e-modal-dialog p').text('Save before loading a file ?');
				$('#e-modal-dialog-wrapper').show();
				$('#e-modal-dialog').on('click', '.e-button-yes', function() {
					$('#e-modal-dialog-wrapper').hide();
					edit.save(open_file(file)); return false;
				});
				$('#e-modal-dialog').on('click', '.e-button-no', function() {
					$('#e-modal-dialog-wrapper').hide();
					(open_file(file))(); return false;
				});
			} else {
				(open_file(file))()
			}
		}
	};

	$event.start();

	/* load css files */
	(function() {
		try  {
			var files = $native.fs.contents(cur_dir + 'css');
			for (var i = 0, num = files.length; i < num; i++) {
				var style = '<link rel="stylesheet" type="text/css" href="css/' + files[i].name + '">';
				$('head link:last').after(style);
			}
		} catch (e) { alert(e); }
	})();

})(window);
