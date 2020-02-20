//
//	message.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

function Message_en() {}
function Message_ja() {}
Message_ja.prototype = new Message_en();

language = 'en';
messageSet = {
	en: new Message_en,
	ja: new Message_ja,
};

(function(window) {
	language = (navigator.userLanguage || navigator.language).substr(0, 2);
	if (language != 'ja') language = 'en';
	window.MSG = function(id) { return messageSet[language][id]; }
})(window);

/* for ENGLISH */
Message_en.prototype.IDM_OK					= "OK"
Message_en.prototype.IDM_CANCEL				= "CANCEL"
Message_en.prototype.IDM_CLOSE				= "CLOSE"
Message_en.prototype.IDM_LANGUAGE			= "Language"
Message_en.prototype.IDM_LANGUAGE_EN		= "English"
Message_en.prototype.IDM_LANGUAGE_JP		= "Japanese"
Message_en.prototype.IDM_MANUAL				= "Owner's Manual"
Message_en.prototype.IDM_DEVICE_SETTING		= "Device Setting"
Message_en.prototype.IDM_VERSION			= "Version"

Message_en.prototype.IDM_INVALID_FILE		= "Invalid file data."
Message_en.prototype.IDM_READ_TIMEOUT		= "Unable to read data. Make sure the connection with MIDI devices."

/* for JAPANESE */
Message_ja.prototype.IDM_CLOSE				= "閉じる"
Message_ja.prototype.IDM_LANGUAGE			= "言語設定"
Message_ja.prototype.IDM_LANGUAGE_EN		= "英語 (English)"
Message_ja.prototype.IDM_LANGUAGE_JP		= "日本語"
Message_ja.prototype.IDM_MANUAL				= "操作マニュアル"
Message_ja.prototype.IDM_DEVICE_SETTING		= "デバイス設定"
Message_ja.prototype.IDM_VERSION			= "バージョン"

Message_ja.prototype.IDM_INVALID_FILE		= "無効なファイル形式です。"
Message_ja.prototype.IDM_READ_TIMEOUT		= "データの読み込みに失敗しました。MIDI機器との接続を確認してください。"
