//
//	native.js
//
//	Copyright 2015 Roland Corporation. All rights reserved.
//

(function(window) {

	var _  = function() { return 0 };
	var _1 = function() { return 0 };
	var _2 = function() {};

	var native = {

		app: {
			ready: function() { _('$$app_ready'); },
			storage: function(data) { if (data !== undefined) _('$$app_storage', data); else return _('$$app_storage'); },
			storage2: function(key, data) { if (data !== undefined) _('$$app_storage2', key, data); else return _('$$app_storage2', key); },
			clipboard: function(data) { if (data !== undefined) _('$$app_clipboard', data); else return _('$$app_clipboard'); },
			importfile: function(filter) { _('$$app_importfile', (filter ? JSON.stringify(filter) : undefined)); },
			exportfile: function(file) { _('$$app_exportfile', file); },
			control: function(req) { _('$$app_control', req) },
			exit: function() { _('$$app_exit'); },

			event: {
				command: function(param1, param2) {}
			}
		},

		midi: {
			input: {
				endpoints: function() { return JSON.parse(_('$$midi_inendpoints')); },
				connect: function(ep) { _('$$midi_inconnect', (ep ? JSON.stringify(ep) : undefined)); },
				disconnect: function(ep) { _('$$midi_indisconnect', (ep ? JSON.stringify(ep) : undefined)); }
			},
			output: {
				endpoints: function() { return JSON.parse(_('$$midi_outendpoints')); },
				connect: function(ep) { _('$$midi_outconnect', (ep ? JSON.stringify(ep) : undefined)); },
				disconnect: function(ep) { _('$$midi_outdisconnect', (ep ? JSON.stringify(ep) : undefined)); }
			},
			send: function(msg) { _2('$$midi_send', msg); },
			panel: function() { _('$$midi_panel'); },

			event: {
				message: function(msg, timestamp) {},
				changed: function() {},
				connectfailed: function(ep) {},
				error: function(code) {}
			}
		},

		midix: {
			client: function(count) { _('$$midix_client', count * 1); },
			input: {
				endpoints: function() { return JSON.parse(_('$$midix_inendpoints')); },
				connect: function(cid, ep) { _('$$midix_inconnect', cid * 1, (ep ? JSON.stringify(ep) : undefined)); },
				disconnect: function(cid, ep) { _('$$midix_indisconnect', cid * 1, (ep ? JSON.stringify(ep) : undefined)); }
			},
			output: {
				endpoints: function() { return JSON.parse(_('$$midix_outendpoints')); },
				connect: function(cid, ep) { _('$$midix_outconnect', cid * 1, (ep ? JSON.stringify(ep) : undefined)); },
				disconnect: function(cid, ep) { _('$$midix_outdisconnect', cid * 1, (ep ? JSON.stringify(ep) : undefined)); }
			},
			send: function(cid, msg) { _2('$$midix_send', cid * 1, msg); },
			thru: function(cid, enable) { _('$$midix_thru', cid * 1, enable) },
			panel: function() { _('$$midix_panel'); },

			event: {
				changed: function() {},
				message: function(cid, msg, timestamp) {},
				connectfailed: function(cid, ep) {},
				error: function(cid, code) {}
			}
		},

		tgif: {
			param: function(pid, val) { if (val !== undefined) _('$$tgif_param', pid, val * 1); else return _('$$tgif_param', pid); },
			send: function(msg) { _2('$$tgif_send', msg); },
			thru: function(enable) { _('$$tgif_thru', enable); },
			buffer: function(num) { if (num !== undefined) _('$$tgif_buffer', num * 1); else return _('$$tgif_buffer'); }
		},

		player: {
			open: function(file) { return _('$$player_open', file); },
			play: function() { _('$$player_play'); },
			pause: function() { _('$$player_pause'); },
			stop: function() { _('$$player_stop'); },
			locate: function(time) { _('$$player_locate', time * 1.0); delete window['$$player_time']; },
			volume: function(gain) { return _('$$player_volume', gain); },
			file: function() { return _('$$player_file'); },
			totaltime: function() { return _('$$player_totaltime'); },
			status: function() { return _1('$$player_status'); },
			channels: function() { return _1('$$player_channels'); },
			peakpower: function(cahnnel) { return _1('$$player_peakpower', cahnnel); },
			time: function() { return _1('$$player_time'); },

			event: {
				eof: function(file) {},
				stop: function(file) {},
				error: function(file) {}
			}
		},

		recorder: {
			create: function(file, format) { return _('$$recorder_create', file, format * 1); },
			record: function() { _('$$recorder_record'); },
			pause: function() { _('$$recorder_pause'); },
			stop: function() { _('$$recorder_stop'); },
			volume: function(gain) { return _('$$recorder_volume', gain); },
			file: function() { return _('$$recorder_file'); },
			status: function() { return _1('$$recorder_status'); },
			channels: function() { return _1('$$recorder_channels'); },
			peakpower: function(cahnnel) { return _1('$$recorder_peakpower', cahnnel); },
			time: function() { return _1('$$recorder_time'); },

			event: {
				stop: function(file) {},
				error: function(file) {}
			}
		},

		rwc: {
			discovery: function() { _2('$$rwc_discovery'); },
			connect: function(dev) { _('$$rwc_connect', JSON.stringify(dev)); },
			disconnect: function() { _('$$rwc_disconnect'); },
			device: function() { var dev = _('$$rwc_device'); return (dev ? JSON.parse(dev) : null); },
			send: function(msg) { _2('$$rwc_send', msg); },
			inputmode: function(mode) { _('$$rwc_inputmode', mode); },
			timeout: function(sec) { return _('$$rwc_timeout', sec); },
			keepalive: function(sec) { return _('$$rwc_keepalive', sec); },

			event: {
				found: function(dev) {},
				connected: function(dev) {},
				connectfailed: function(dev) {},
				closed: function(dev) {},
				message: function(msg, timestamp) {},
				error: function(dev) {}
			}
		},

		http: {
			download: function(url, to) { return _('$$http_download', url, to); },
			upload: function(url, file) { return _('$$http_upload', url, file); },
			cancel: function(id) { _('$$http_cancel', id * 1); },

			event: {
				progress: function(id, total, amount) {},
				completed: function(id, file) {},
				error: function(id, url) {}
			}
		},

		fs: {
			separator: function() { return _('$$fs_separator'); },
			path: function(where) { return _('$$fs_path', where); },
			volumes: function() { return JSON.parse(_('$$fs_volumes')); },
			contents: function(path) { return JSON.parse(_('$$fs_contents', path)); },
			stat: function(path) { return JSON.parse(_('$$fs_stat', path)); },
			exec: function(file) { _('$$fs_exec', file); },
			mkdir: function(path) { _('$$fs_mkdir', path); },
			unlink: function(path) { _('$$fs_unlink', path); },
			copy: function(from, to) { _('$$fs_copy', from, to); },
			move: function(from, to) { _('$$fs_move', from, to); },
			unzip: function(zip, folder) { _('$$fs_unzip', zip, folder); },
			readString: function(file) { return _('$$fs_readString', file); },
			readData: function(file, opt) { return _('$$fs_readData', file, (opt ? JSON.stringify(opt) : undefined)); },
			writeString: function(file, text) { _('$$fs_writeString', file, text); },
			writeData: function(file, data) { _('$$fs_writeData', file, data); },
			appendString: function(file, text) { _('$$fs_appendString', file, text); },
			appendData: function(file, data) { _('$$fs_appendData', file, data); },
			openfilename: function(filter) { _('$$fs_openfilename', (filter ? JSON.stringify(filter) : undefined)); },
			savefilename: function(name, ext)  { _('$$fs_savefilename', name, ext); },
			unmount: function(path) { _('$$fs_unmount', path); },
 
			event: {
				openfilename: function(file) {},
				savefilename: function(file) {},
				unmounted: function(path) {},
				unmountfailed: function(path, reason) {}
			}
		},

		security: {
			uuidgen: function() { return _('$$security_uuidgen'); },
			md5: function(data) { return _('$$security_md5', data); },
			encipher: function(text) { return _('$$security_encipher', text); },
			decipher: function(data) { return _('$$security_decipher', data); },
			aes: {
				encrypt: function(data, key) { return _('$$security_aesencrypt', data, (key ? key : undefined)); },
				decrypt: function(data, key) { return _('$$security_aesdecrypt', data, (key ? key : undefined)); }
			},
			des: {
				encrypt: function(data, key) { return _('$$security_desencrypt', data, (key ? key : undefined)); },
				decrypt: function(data, key) { return _('$$security_desdecrypt', data, (key ? key : undefined)); }
			}
		},

		notification: {
			token: function() { return _('$$notification_token'); },
			badge: function(count) { return _('$$notification_badge', count); },

			event: {
				refresh: function(token) {},
				received: function(params) {}
			}
		},

		recognizer: {
			start: function() { _('$$recognizer_start'); },
			stop: function() { _('$$recognizer_stop'); },

			event: {
				partial: function(text) {},
				final: function(text) {},
				error: function(reason) {}
			}
		},

		barcode: {
			read: function(type) { _('$$barcode_read', type); },

			event: {
				detected: function(data) {}
			}
		},

		sh: {
			exec: function(argv) { return _('$$sh_exec', JSON.stringify(argv)); },
			kill: function(pid) { _('$$sh_kill', pid); },

			event: {
				stdout: function(pid, output) {}
			}
		},

		util: {
			bytes: function(text) { return _('$$util_bytes', text); },
			text: function(bytes) { return _('$$util_text', bytes); }
		},

		stop: function() {},    /* iOS: applicationDidEnterBackground,  Android: onStop() */
		restart: function() {}, /* iOS; applicationWillEnterForeground, Android: onRestart() */

	};

	var pumpevent = function() {
		var ev;
		while (ev = _('$$app_getevent')) { dispatch(ev); }
	};

	var dispatch = function(ev) {
		var args = ev.split('\f');
		var prop = args.shift();
		var type = args.shift();
		if (native[prop] && native[prop].event[type]) {
			native[prop].event[type].apply(native, args);
		}
	};

	window.$native = native; /* export window object */
	window.$event = { start: function(delay) { window.setInterval(pumpevent, delay ? delay : 50); } };

	if (typeof window.$$app !== 'undefined') {
		_ = _1 = _2 = function() {
			var a = arguments[0].split('_');
			var o = a[0]; var f = a[1];
			if (typeof arguments[2] !== 'undefined')
				return window[o][f](arguments[1], arguments[2]);
			if (typeof arguments[1] !== 'undefined')
				return window[o][f](arguments[1]);
			return window[o][f]();
		}
		if (typeof window.$$app.startevent !== 'undefined') {
 			window.$event.trigger = function() { window.setTimeout(pumpevent, 0) };
			window.$event.start = function() {
				window.addEventListener('beforeunload', function(){
					_('$$app_startevent', false); /* stop event */
				});
				_('$$app_startevent', true);
			}
		}
	} else if (navigator.userAgent.indexOf('roland.quattro') != -1) {
		if (typeof window.$$xhrport !== 'undefined') {
			_ = function() {
				var xhr = new XMLHttpRequest();
				var url = 'http://localhost:' + window.$$xhrport + '/' + arguments[0];
				if (typeof arguments[1] !== 'undefined')
					url += '?' + encodeURIComponent(arguments[1]);
				if (typeof arguments[2] !== 'undefined')
					url += ',' + encodeURIComponent(arguments[2]);
				xhr.open('GET', url, false);
				xhr.send(null);
				return decode(xhr.responseText);
			}
			_1 = function() {
				var req = arguments[0];
				if (typeof arguments[1] !== 'undefined')
					req += ('\f' + arguments[1]);
				if (typeof arguments[2] !== 'undefined')
					req += ('\f' + arguments[2]);
				webkit.messageHandlers.quattro1.postMessage(req);
				if (window[req] === undefined) {
					return _.apply(this, arguments);
				}
				return decode(window[req]);
			}
			_2 = function() {
				var req = arguments[0];
				if (typeof arguments[1] !== 'undefined')
					req += ('\f' + arguments[1]);
				if (typeof arguments[2] !== 'undefined')
					req += ('\f' + arguments[2]);
				webkit.messageHandlers.quattro2.postMessage(req);
			}
		} else {
			_ = _1 = _2 = function() {
				var xhr = new XMLHttpRequest();
				xhr.open('HEAD', '/!quattro?' + (+new Date()), false);
				if (window.$$native) xhr.setRequestHeader('native', window.$$native);
				xhr.setRequestHeader('method', arguments[0]);
				if (typeof arguments[1] !== 'undefined')
					xhr.setRequestHeader('arg1', encodeURIComponent(arguments[1]));
				if (typeof arguments[2] !== 'undefined')
					xhr.setRequestHeader('arg2', encodeURIComponent(arguments[2]));
				xhr.send(null);
				return decode(xhr.responseText);
			}
		}
		if (_('$$app_startevent') !== undefined) {
			window.$event.dispatch = function(ev) { window.setTimeout(function(){ dispatch(ev) }, 0) };
			window.$event.start = function() {
				window.addEventListener('pagehide', function(){
					_('$$app_startevent'); /* stop event */
				});
				_('$$app_startevent', true);
			}
		}
	}

	function decode(str) {
		var x = str.slice(1);
		switch (str.charAt(0)) {
			case 'v': return undefined;
			case 'b': return Boolean(x);
			case 'd': return parseInt(x);
			case 'f': return parseFloat(x);
			case 's': return x;
		}
		throw new Error(x);
	}

})(window);
