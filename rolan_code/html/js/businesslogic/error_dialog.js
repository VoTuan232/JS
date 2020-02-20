var ERROR_DIALOG_TYPE = {
    singleBtn: 'single',
    doubleBtn: 'double',
    singleBtnLongTitle: 'singleLongTitle',
    doubleBtnLongTitle: 'doubleLongTitle',
    singleBtnLongContents: 'singleLongContents',
    doubleBtnLongContents: 'doubleLongContents',
    wrongDevice: 'wrongDevice',
    midiDeviceConnection: 'midiDeviceConnection',
    disconnected: 'disconnected',
    oldVersionOfBTS: 'oldVersionOfBTS'
};
var ERROR_DIALOG_ID = {};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.singleBtn] = {
    page: '#error-dialog-single-btn-type',
    headerLabel: '#error-dialog-single-btn-type-title-label',
    contentsLabel: '#error-dialog-single-btn-type-contents-label',
    firstBtn: '#error-dialog-single-btn-type-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.doubleBtn] = {
    page: '#error-dialog-double-btn-type',
    headerLabel: '#error-dialog-double-btn-type-title-label',
    contentsLabel: '#error-dialog-double-btn-type-contents-label',
    firstBtn: '#error-dialog-double-btn-type-left-btn',
    secondBtn: '#error-dialog-double-btn-type-right-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.singleBtnLongTitle] = {
    page: '#error-dialog-single-btn-long-title-type',
    headerLabel: '#error-dialog-single-btn-long-title-type-title-label',
    contentsLabel: '#error-dialog-single-btn-long-title-type-contents-label',
    firstBtn: '#error-dialog-single-btn-long-title-type-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.doubleBtnLongTitle] = {
    page: '#error-dialog-double-btn-long-title-type',
    headerLabel: '#error-dialog-double-btn-long-title-type-title-label',
    contentsLabel: '#error-dialog-double-btn-long-title-type-contents-label',
    firstBtn: '#error-dialog-double-btn-long-title-type-left-btn',
    secondBtn: '#error-dialog-double-btn-long-title-type-right-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.singleBtnLongContents] = {
    page: '#error-dialog-single-btn-long-contents-type',
    headerLabel: '#error-dialog-single-btn-long-contents-type-title-label',
    contentsLabel: '#error-dialog-single-btn-long-contents-type-contents-label',
    firstBtn: '#error-dialog-single-btn-long-contents-type-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.doubleBtnLongContents] = {
    page: '#error-dialog-double-btn-long-contents-type',
    headerLabel: '#error-dialog-double-btn-long-contents-type-title-label',
    contentsLabel: '#error-dialog-double-btn-long-contents-type-contents-label',
    firstBtn: '#error-dialog-double-btn-long-contents-type-left-btn',
    secondBtn: '#error-dialog-double-btn-long-contents-type-right-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.wrongDevice] = {
    page: '#device-err-midi-connect-dialog',
    firstBtn: '#device-err-midi-connect-dialog-cancel-btn',
    secondBtn: '#device-err-midi-connect-dialog-ok-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.midiDeviceConnection] = {
    page: '#connection-err-midi-connect-dialog',
    firstBtn: '#connection-err-midi-connect-dialog-cancel-btn',
    secondBtn: '#connection-err-midi-connect-dialog-ok-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.disconnected] = {
    page: '#disconnected-midi-connect-dialog',
    firstBtn: '#disconnected-midi-connect-dialog-cancel-btn',
    secondBtn: '#disconnected-midi-connect-dialog-ok-btn'
};
ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.oldVersionOfBTS] = {
    page: '#old-version-of-bts-dialog',
    headerLabel: '#old-version-of-bts-dialog-title-label',
    contentsLabel: '#old-version-of-bts-dialog-message',
    firstBtn: '#old-version-of-bts-dialog-ok-btn'
};

var ErrorDialog = function (type, priority, headerStr, contentsStr, firstBtnStr, secondBtnStr) {
    this.type = type;
    this.priority = priority;
    this.headerStr = headerStr === undefined ? '' : headerStr;
    this.contentsStr = contentsStr === undefined ? '' : contentsStr;
    this.firstBtnStr = firstBtnStr === undefined ? '' : firstBtnStr;
    this.secondBtnStr = secondBtnStr === undefined ? '' : secondBtnStr;
    this.visible = false;
};

ErrorDialog.prototype.open = function (firstBtnFunc, secondBtnFunc) {
    var currentDialogPriority = null;
    for (var error in ERROR_DIALOG_MAP) {
        if (ERROR_DIALOG_MAP.hasOwnProperty(error)) {
            if (ERROR_DIALOG_MAP[error].visible) {
                currentDialogPriority = ERROR_DIALOG_MAP[error].priority;
            }
        }
    }
    if (currentDialogPriority === null || currentDialogPriority > this.priority) {
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.doubleBtn].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.singleBtn].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.doubleBtnLongTitle].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.singleBtnLongTitle].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.doubleBtnLongContents].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.singleBtnLongContents].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.wrongDevice].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.midiDeviceConnection].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.disconnected].page.slice(1));
        popup_close(ERROR_DIALOG_ID[ERROR_DIALOG_TYPE.oldVersionOfBTS].page.slice(1));
        this.visible = true;
        this._openDialog(firstBtnFunc, secondBtnFunc);
    }
};

ErrorDialog.prototype._openDialog = function (firstBtnFunc, secondBtnFunc) {
    var self = this;
    $(ERROR_DIALOG_ID[this.type].headerLabel).html(this.headerStr);
    $(ERROR_DIALOG_ID[this.type].contentsLabel).html(this.contentsStr);
    $(ERROR_DIALOG_ID[this.type].firstBtn + ' p').html(this.firstBtnStr);
    $(ERROR_DIALOG_ID[this.type].firstBtn).on(pointer.click, function (e) {
        e.preventDefault();
        for (var error in ERROR_DIALOG_MAP) {
            if (ERROR_DIALOG_MAP.hasOwnProperty(error)) {
                ERROR_DIALOG_MAP[error].visible = false;
            }
        }
        popup_close(ERROR_DIALOG_ID[self.type].page.slice(1));
        $(ERROR_DIALOG_ID[self.type].firstBtn).off(pointer.click);
        $(ERROR_DIALOG_ID[self.type].secondBtn).off(pointer.click);
        if (firstBtnFunc !== undefined) {
            firstBtnFunc();
        }
    });
    if (
        this.type === ERROR_DIALOG_TYPE.doubleBtn ||
        this.type === ERROR_DIALOG_TYPE.doubleBtnLongTitle ||
        this.type === ERROR_DIALOG_TYPE.doubleBtnLongContents
    ) {
        $(ERROR_DIALOG_ID[this.type].secondBtn + ' p').html(this.secondBtnStr);
        $(ERROR_DIALOG_ID[this.type].secondBtn).on(pointer.click, function (e) {
            e.preventDefault();
            for (var error in ERROR_DIALOG_MAP) {
                if (ERROR_DIALOG_MAP.hasOwnProperty(error)) {
                    ERROR_DIALOG_MAP[error].visible = false;
                }
            }
            popup_close(ERROR_DIALOG_ID[self.type].page.slice(1));
            $(ERROR_DIALOG_ID[self.type].firstBtn).off(pointer.click);
            $(ERROR_DIALOG_ID[self.type].secondBtn).off(pointer.click);
            if (secondBtnFunc !== undefined) {
                secondBtnFunc();
            }
        });
    }
    popup_open(ERROR_DIALOG_ID[this.type].page.slice(1));
};

var MIDIDialog = function (type, priority) {
    ErrorDialog.call(this, type, priority);
    this.id = ERROR_DIALOG_ID[type].page;
};
MIDIDialog.prototype = Object.create(ErrorDialog.prototype);
MIDIDialog.prototype.constructor = MIDIDialog;

MIDIDialog.prototype._openDialog = function (firstBtnFunc, secondBtnFunc) {
    var self = this;
    $(ERROR_DIALOG_ID[this.type].firstBtn).on(pointer.click, function (e) {
        e.preventDefault();
        for (var error in ERROR_DIALOG_MAP) {
            if (ERROR_DIALOG_MAP.hasOwnProperty(error)) {
                ERROR_DIALOG_MAP[error].visible = false;
            }
        }
        popup_close(ERROR_DIALOG_ID[self.type].page.slice(1));
        $(ERROR_DIALOG_ID[self.type].secondBtn).on(pointer.click);
        $(ERROR_DIALOG_ID[self.type].firstBtn).off(pointer.click);
        if (firstBtnFunc !== undefined) {
            firstBtnFunc();
        }
    });
    $(ERROR_DIALOG_ID[this.type].secondBtn).on(pointer.click, function (e) {
        e.preventDefault();
        for (var error in ERROR_DIALOG_MAP) {
            if (ERROR_DIALOG_MAP.hasOwnProperty(error)) {
                ERROR_DIALOG_MAP[error].visible = false;
            }
        }
        popup_close(ERROR_DIALOG_ID[self.type].page.slice(1));
        $(ERROR_DIALOG_ID[self.type].secondBtn).on(pointer.click);
        $(ERROR_DIALOG_ID[self.type].firstBtn).off(pointer.click);
        if (secondBtnFunc !== undefined) {
            secondBtnFunc();
        }
    });
    popup_open(this.id.slice(1));
};

var OldVersionOfBTSDialog = function (type, priority, headerStr, contentsStr) {
    ErrorDialog.call(this, type, priority);
    this.id = ERROR_DIALOG_ID[type].page;
    this.headerStr = headerStr === undefined ? '' : headerStr;
    this.contentsStr = contentsStr === undefined ? '' : contentsStr;
}
OldVersionOfBTSDialog.prototype = Object.create(ErrorDialog.prototype);
OldVersionOfBTSDialog.prototype.constructor = OldVersionOfBTSDialog;

OldVersionOfBTSDialog.prototype._openDialog = function (firstBtnFunc) {
    var self = this;
    $(ERROR_DIALOG_ID[this.type].headerLabel).html(this.headerStr);
    $(ERROR_DIALOG_ID[this.type].contentsLabel).html(this.contentsStr);
    $(ERROR_DIALOG_ID[this.type].firstBtn).on(pointer.click, function (e) {
        e.preventDefault();
        for (var error in ERROR_DIALOG_MAP) {
            if (ERROR_DIALOG_MAP.hasOwnProperty(error)) {
                ERROR_DIALOG_MAP[error].visible = false;
            }
        }
        popup_close(ERROR_DIALOG_ID[self.type].page.slice(1));
        $(this).off(pointer.click);
        if (firstBtnFunc !== undefined) {
            firstBtnFunc();
        }
    });
    popup_open(this.id.slice(1));
};

var messageEn = new Message_en();

var ERROR_DIALOG_MAP = {
    wrongDeviceError: new MIDIDialog(
        ERROR_DIALOG_TYPE.wrongDevice,
        0
    ),
    midiDeviceConnectionError: new MIDIDialog(
        ERROR_DIALOG_TYPE.midiDeviceConnection,
        1
    ),
    disconnectedError: new MIDIDialog(
        ERROR_DIALOG_TYPE.disconnected,
        2
    ),
    communicationError: new ErrorDialog(
        ERROR_DIALOG_TYPE.doubleBtn,
        3,
        messageEn.IDM_ERROR_COMMUNICATION_TITLE,
        messageEn.IDM_ERROR_COMMUNICATION_MESSAGE,
        'CANCEL',
        'RETRY'
    ),
    fileError: new ErrorDialog(
        ERROR_DIALOG_TYPE.singleBtn,
        4,
        messageEn.IDM_ERROR_FILE_TITLE,
        messageEn.IDM_ERROR_FILE_MESSAGE,
        'OK'
    ),
    noInternetAccess: new ErrorDialog(
        ERROR_DIALOG_TYPE.singleBtn,
        10,
        messageEn.IDM_ERROR_INTERNET_TITLE,
        messageEn.IDM_ERROR_INTERNET_MESSAGE,
        'OK'
    ),
    libraryFull: new ErrorDialog(
        ERROR_DIALOG_TYPE.singleBtn,
        5,
        messageEn.IDM_ERROR_LIBRARY_TITLE,
        messageEn.IDM_ERROR_LIBRARY_MESSAGE,
        'OK'
    ),
    unsupportedDataGuitar: new ErrorDialog(
        ERROR_DIALOG_TYPE.singleBtn,
        6,
        messageEn.IDM_ERROR_UNSUPPORTED_TITLE,
        messageEn.IDM_ERROR_UNSUPPORTED_MESSAGE_GUITAR,
        'OK'
    ),
    oldVersionOfBTS: new OldVersionOfBTSDialog(
        ERROR_DIALOG_TYPE.oldVersionOfBTS,
        7,
        messageEn.IDM_ERROR_OLD_BTS_TITLE,
        messageEn.IDM_ERROR_OLD_BTS_MESSAGE
    ),
    oldVersionOfInstrument: new OldVersionOfBTSDialog(
        ERROR_DIALOG_TYPE.oldVersionOfBTS,
        8,
        messageEn.IDM_ERROR_OLD_FIRM_TITLE,
        messageEn.IDM_ERROR_OLD_FIRM_MESSAGE
    ),
    offLineMode: new ErrorDialog(
        ERROR_DIALOG_TYPE.singleBtnLongContents,
        9,
        messageEn.IDM_ERROR_OFFLINE_MODE_TITLE,
        messageEn.IDM_ERROR_OFFLINE_MODE_MESSAGE,
        'OK'
    ),
    unsupportedDataBass: new ErrorDialog(
        ERROR_DIALOG_TYPE.singleBtn,
        10,
        messageEn.IDM_ERROR_UNSUPPORTED_TITLE,
        messageEn.IDM_ERROR_UNSUPPORTED_MESSAGE_BASS,
        'OK'
    ),
};
