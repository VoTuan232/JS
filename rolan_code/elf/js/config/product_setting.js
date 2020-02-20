//
//	product_setting.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	var _ = {

		name:			'Template',
		vserion:		'Ver 0.01 (B001)',
		copyright:		'Copyright 2016 Roland Corporation.\nAll rights reserved.',

		modelId:		'0000001F',
		deviceId:		'10',
		lengthOfAddr:	4,		/* length of dt1/rq1 address size */
		lengthOfSize:	4,		/* length of rq1 size */
		interval :		4,		/* to adjust interval for midi transmition before (msec) */
		timeout :		10,		/* RQ1 timeout (seconds) */
		waitStart:		0,		/* wait for DT1 start (msec) */
		waitStop:		5000,	/* wait for DT1 end (msec) */
		waitVariable:	1500,	/* wait for valiable length DT1(msec) */
		waitVariable0:	370,	/* wait for clearing valiable length DT1 (msec) */

		extension: 'xyz',

		editor: [
			{ name: 'Setting 1', config: new EditorSetting1 },
			{ name: 'Setting 2', config: new EditorSetting2 },
		],

		librarian: [
			{ name: 'Setting 1', config: new LibrarianSetting1 },
			{ name: 'Setting 2', config: new LibrarianSetting2 },
		],

		manual: {
			en: 'manual_en.pdf',
			ja: 'manual_jp.pdf'
		},

	};

	window.ProductSetting = _; /* export window object */

	var lang = (navigator.userLanguage || navigator.language).substr(0, 2);
	if (lang != 'ja') lang = 'en';

	window.readme = function() {
		var url = ProductSetting.manual[lang];
		if (url.lastIndexOf('http') < 0) {
			var path = decodeURIComponent(window.location.href.replace('file://', ''));
			if (path.match(/^\/[a-zA-Z]:\//)) { path = path.substr(1); }
			var str = path.substring(0, path.lastIndexOf('/') + 1) + url;
			url = str.replace(/\//g, $native.fs.separator());
		}
		$native.fs.exec(url);
	}

})(window);
