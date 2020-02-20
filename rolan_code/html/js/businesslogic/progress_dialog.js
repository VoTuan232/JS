function ProgressDialog(title) {
    this.id = '#progress-dialog';
    this.progressBar = '#progress-dialog-bar > div';
    this.titleLabel = '#progress-dialog-label p';
    this.cancelBtn = '#progress-dialog-cancel-btn';
    this.title = title;
}

ProgressDialog.prototype.init = function () {
    $(this.progressBar).width(0);
};

ProgressDialog.prototype.update = function (arg) {
    $(this.progressBar).width(arg + '%');
};

ProgressDialog.prototype.open = function (func) {
    popup_open(this.id.slice(1));
    $(this.progressBar).width(0);
    $(this.titleLabel).text(this.title);
    var self = this;
    $(this.cancelBtn).on(pointer.click, function () {
        $(self.cancelBtn).off(pointer.click);
        if (typeof func === 'function' && typeof func !== 'undefined') {
            func();
        }
        popup_close(self.id.slice(1));
    });
};

ProgressDialog.prototype.close = function (func) {
    $(this.cancelBtn).off(pointer.click);
    if (typeof func === 'function' && typeof func !== 'undefined') {
        func();
    }
    popup_close(this.id.slice(1));
};

var PROGRESS_DIALOG_MAP = {
    import: new ProgressDialog(
        'Import'
    ),
    export: new ProgressDialog(
        'Export'
    )
};

function CompleteDialog(title) {
    this.id = '#complete-dialog';
    this.titleLabel = '#complete-dialog-label p';
    this.cancelBtn = '#complete-dialog-cancel-btn';
    this.title = title;
}

CompleteDialog.prototype.open = function (func) {
    popup_open(this.id.slice(1));
    $(this.titleLabel).text(this.title);
    var self = this;
    $(this.cancelBtn).on(pointer.click, function () {
        $(self.cancelBtn).off(pointer.click);
        if (typeof func === 'function' && typeof func !== 'undefined') {
            func();
        }
        popup_close(self.id.slice(1));
    });
};

CompleteDialog.prototype.close = function (func) {
    $(this.cancelBtn).off(pointer.click);
    if (typeof func === 'function' && typeof func !== 'undefined') {
        func();
    }
    popup_close(this.id.slice(1));
};

var COMPLETE_DIALOG_MAP = {
    import: new CompleteDialog(
        'Import'
    ),
    export: new CompleteDialog(
        'Export'
    )
};
