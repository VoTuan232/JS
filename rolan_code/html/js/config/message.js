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

/* License */
Message_en.prototype.IDM_LICENSE_COPYRIGHT_ROLAND		= "Copyright 2020 Roland Corporation. All rights reserved.";
Message_en.prototype.IDM_LICENSE_JQUERY					= 'jQuery JavaScript Library v1.12.4<br><a href="http://jquery.com/" class="version-license-link">http://jquery.com/</a><br><br>Includes Sizzle.js<br><a href="http://sizzlejs.com/" class="version-license-link" class="version-license-link">http://sizzlejs.com/</a><br><br>Copyright jQuery Foundation and other contributors<br>Released under the MIT license<br><a href="http://jquery.org/license" class="version-license-link">http://jquery.org/license</a>';
Message_en.prototype.IDM_LICENSE_JQUERY_UI				= 'jQuery UI - v1.12.1<br><a href="http://jqueryui.com" class="version-license-link">http://jqueryui.com</a><br><br>Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js<br><br>Copyright jQuery Foundation and other contributors; Licensed MIT';
Message_en.prototype.IDM_LICENSE_JQUERY_UI_TOUCH_PUNCH	= "jQuery UI Touch Punch 0.2.3<br>Copyright 2011–2014, Dave Furfero<br>Dual licensed under the MIT or GPL Version 2 licenses.";
Message_en.prototype.IDM_LICENSE_MIT					= 'MIT License<br><a href="http://opensource.org/licenses/mit-license.php" class="version-license-link">http://opensource.org/licenses/mit-license.php</a>';
Message_en.prototype.IDM_LICENSE_ROBOTO_CONDENSED		= '&quot;Roboto Condensed&quot; is a trademark of Google.Inc.<br>&quot;Roboto Condensed&quot; is licensed under the Apache License, version 2.0<br>Apache Licenses, version 2.0<br><a href="http://www.apache.org/licenses/LICENSE-2.0" class="version-license-link">http://www.apache.org/licenses/LICENSE-2.0</a><br>Google attribution<br><a href="https://www.google.com/fonts/attribution" class="version-license-link">https://www.google.com/fonts/attribution</a>';
Message_en.prototype.IDM_LICENSE_NOTO_SANS_JP			= '&quot;Noto Sans JP&quot; is a trademark of Google.Inc.<br>&quot;Noto Sans JP&quot; is licensed under the SIL Open Font License 1.1<br>SIL Open Font License<br><a href="http://scripts.sil.org/OFL" class="version-license-link">http://scripts.sil.org/OFL</a>';
Message_en.prototype.IDM_LICENSE                        = Message_en.prototype.IDM_LICENSE_JQUERY + "<br><br>" +
    Message_en.prototype.IDM_LICENSE_JQUERY_UI + "<br><br>" +
    Message_en.prototype.IDM_LICENSE_JQUERY_UI_TOUCH_PUNCH + "<br><br>" +
    Message_en.prototype.IDM_LICENSE_MIT + "<br><br>" +
    Message_en.prototype.IDM_LICENSE_ROBOTO_CONDENSED + "<br><br>" +
    Message_en.prototype.IDM_LICENSE_NOTO_SANS_JP + "<br><br>";

/* Error */
Message_en.prototype.IDM_ERROR_MIDI_DEVICE_CONNECTION_TITLE = "MIDI DEVICE CONNECTION ERROR"
Message_en.prototype.IDM_ERROR_MIDI_DEVICE_CONNECTION_MESSAGE = "Try again."
Message_en.prototype.IDM_ERROR_WRONG_DEVICE_TITLE = "WRONG DEVICE"
Message_en.prototype.IDM_ERROR_WRONG_DEVICE_MESSAGE = "Check the pairing device and connecting device again."
Message_en.prototype.IDM_ERROR_DISCONNECTED_TITLE = "DISCONNECTED"
Message_en.prototype.IDM_ERROR_DISCONNECTED_MESSAGE = "Check the pairing device and connecting device again."
Message_en.prototype.IDM_ERROR_COMMUNICATION_TITLE = "COMMUNICATION ERROR"
Message_en.prototype.IDM_ERROR_COMMUNICATION_MESSAGE = "Try again."
Message_en.prototype.IDM_ERROR_FILE_TITLE = "FILE ERROR"
Message_en.prototype.IDM_ERROR_FILE_MESSAGE = "Operation failed."
Message_en.prototype.IDM_ERROR_INTERNET_TITLE = "NO INTERNET ACCESS"
Message_en.prototype.IDM_ERROR_INTERNET_MESSAGE = "Check the network connection."
Message_en.prototype.IDM_ERROR_LIBRARY_TITLE = "LIBRARY FULL"
Message_en.prototype.IDM_ERROR_LIBRARY_MESSAGE = "The liveset is full."
/* specific to PC version */
Message_en.prototype.IDM_ERROR_DEVICE_CONNECT_SELECT_TITLE = "Choose a device to connect with."
Message_en.prototype.IDM_ERROR_DEVICE_NOT_FOUND_TITLE = "DEVICE NOT FOUND"
Message_en.prototype.IDM_ERROR_DEVICE_NOT_FOUND_MESSAGE_1 = "Plese confirm that the USB driver is installed and the USB cable between the SY-1000 and the computer is connected, then click the \"Refresh\" button."
Message_en.prototype.IDM_ERROR_DEVICE_NOT_FOUND_MESSAGE_2 = "Driver software must be installed on the computer to complete the connection to the SY-1000."
Message_en.prototype.IDM_ERROR_DEVICE_NOT_FOUND_MESSAGE_3 = "When the [OFFLINE MODE] button is pressed, the editor can be tested even when the SY-1000 is not connected to a computer. LIBRARIAN and TONE CENTRAL are available, however , patch data can not be saved."


/* Error with Model Name */
Message_en.prototype.IDM_ERROR_UNSUPPORTED_TITLE = "UNSUPPORTED DATA"
Message_en.prototype.IDM_ERROR_UNSUPPORTED_MESSAGE_GUITAR = "The file is not supported on SY-1000 GUITAR MODE."
Message_en.prototype.IDM_ERROR_UNSUPPORTED_MESSAGE_BASS = "The file is not supported on SY-1000 BASS MODE."
Message_en.prototype.IDM_ERROR_OLD_BTS_TITLE = "OLD VERSION OF BOSS TONE STUDIO FOR SY-1000"
Message_en.prototype.IDM_ERROR_OLD_BTS_MESSAGE = "You are using an older version of BOSS TONE STUDIO for SY-1000.<br>Update to the latest version."
Message_en.prototype.IDM_ERROR_OLD_FIRM_TITLE = "OLD VERSION OF SY-1000"
Message_en.prototype.IDM_ERROR_OLD_FIRM_MESSAGE = "You are using an older version of SY-1000.<br>Update to the latest version."
Message_en.prototype.IDM_ERROR_OFFLINE_MODE_TITLE = "OFFLINE MODE"
Message_en.prototype.IDM_ERROR_OFFLINE_MODE_MESSAGE = "SY-1000 is not connected to a mobile device.<br>LIBRARIAN and TONE CENTRAL are available, however, patch data can't be saved."

/* Patch Weite/Clear */
Message_en.prototype.IDM_CLEAR_MSG = "The temporary tone setting will be initialized."

/* Bluetooth */
Message_en.prototype.IDM_BLE_STEP1_MSG = "Activate Bluetooth function on your smart<br>phone but do not pair to a device yet.<br>(If you have selected a device, unpair it <br>before proceeding.) "
Message_en.prototype.IDM_BLE_STEP2_MSG = "Tap the Bluetooth MIDI Device button below <br>and select the device to pair from the list."
Message_en.prototype.IDM_BLE_STEP3_MSG = "Select the device to connect in the box <br>below."

/* Librarian */
Message_en.prototype.IDM_DELETE_LIVESET_MSG = "The Liveset will be deleted."
Message_en.prototype.IDM_DELETE_PATCH_MSG = "The Patch will be deleted."
Message_en.prototype.IDM_OVERWRITE_MSG_1 = "Overwrite patch?"
Message_en.prototype.IDM_OVERWRITE_MSG_2 = "Do not display this message again."
