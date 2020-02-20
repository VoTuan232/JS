/**
 *  [概要]
 *  FileのIO処理
 *
 *  [使用箇所]
 *  LIBRARIAN, SYSTEM DATA BACKUP, VARIATION DATA BACKUP画面
 * 
 */


(function () {
    window.fileManager = {
        extension: null,
        /**
         *  FileへのExport処理
         *  @param {function} successFunc export成功時に実行する関数
         *  @param {function} errorFunc export失敗時に実行する関数
         *  @param {string} name デフォルトのファイル名
         *  @param {string} extension 保存するファイルの拡張子
         */
        exportFile: function (successFunc, errorFunc, name, extension) {
            var fs = $native.fs;
            fs.event.savefilename = function (fileName) {
                if (fileName) {
                    try {
                        successFunc(fileName); // コールバック関数の実行
                    } catch (e) {
                        ERROR_DIALOG_MAP.fileError.open();
                        errorFunc();
                    }
                }
            };
            fs.savefilename(name, extension);
        },
        /**
         *  CloudへのExport処理
         *  @param {function} successFunc export成功時に実行する関数
         *  @param {function} errorFunc export失敗時に実行する関数
         *  @param {string} name デフォルトのファイル名
         *  @param {string} extension 保存するファイルの拡張子
         */
        exportCloud: function (successFunc, errorFunc, name, extension) {
            var fs = $native.fs;
            var temp = fs.path('temporary');
            fs.event.savefilename = function (fileName) {
                if (fileName) {
                    try {
                        successFunc(fileName); // コールバック関数の実行
                    } catch (e) {
                        ERROR_DIALOG_MAP.fileError.open();
                        errorFunc();
                    }
                }
            };
            try {
                fs.event.savefilename(temp + name + '.' + extension);
                $native.app.exportfile(temp + name + '.' + extension);
            } catch (e) {
                errorFunc();
                return;
            }
        },
        /**
         *  FileからのImport処理
         *  @param {function} successFunc import成功時に実行する関数
         *  @param {function} errorFunc import失敗時に実行する関数
         *  @param {string} extension 開きたいファイルの拡張子
         */
        importFile: function (successFunc, errorFunc, extension) {
            var self = this;
            var fs = $native.fs;
            var fileName = [extension];
            self.extension = extension;
            fs.event.openfilename = function (file) {
                if (file) {
                    try {
                        var exten = file.split('.').pop();
                        if (exten !== self.extension) {
                            APP_MODE === MODE.GUITAR ? ERROR_DIALOG_MAP.unsupportedDataGuitar.open() : ERROR_DIALOG_MAP.unsupportedDataBass.open();
                            errorFunc();
                            return;
                        }
                        $native.app.control('indicator start');
                        var json = fs.readString(file);
                        $native.app.control('indicator stop');
                        try {
                            successFunc(json); // コールバック関数の実行
                        } catch (e) {
                            APP_MODE === MODE.GUITAR ? ERROR_DIALOG_MAP.unsupportedDataGuitar.open() : ERROR_DIALOG_MAP.unsupportedDataBass.open();
                            errorFunc();
                            return;
                        }
                    } catch (e) {
                        ERROR_DIALOG_MAP.fileError.open();
                        errorFunc();
                        return;
                    }
                }
            };
            fs.openfilename(fileName);
        },
        /**
         *  CloudからのImport処理
         *  @param {function} successFunc import成功時に実行する関数
         *  @param {function} errorFunc import失敗時に実行する関数
         *  @param {string} extension 開きたいファイルの拡張子
         *  @param {[string]} filter cloudを開いた際にフィルタリングをかける拡張子
         */
        importCloud: function (successFunc, errorFunc, extension, filter) {
            var fs = $native.fs;
            $native.app.event.command = function (param1, param2) {
                if (param1 == 'import' || param1 == 'open') {
                    if (param2.substr(param2.lastIndexOf('.') + 1) != extension) {
                        return;
                    }
                    var file = decodeURIComponent(param2.replace('file://', ''));
                    if (file.match(/^\/[a-zA-Z]:\//)) {
                        file = file.substr(1);
                    }
                    file = file.replace(/\//g, fs.separator());
                    if (file) {
                        try {
                            $native.app.control('indicator start');
                            var json = fs.readString(file);
                            $native.app.control('indicator stop');
                            try {
                                successFunc(json);
                            } catch (e) {
                                APP_MODE === MODE.GUITAR ? ERROR_DIALOG_MAP.unsupportedDataGuitar.open() : ERROR_DIALOG_MAP.unsupportedDataBass.open();
                                errorFunc();
                                return;
                            }
                        } catch (e) {
                            ERROR_DIALOG_MAP.fileError.open();
                            errorFunc();
                            return;
                        }
                    }
                }
            };
            try {
                $native.app.importfile(filter);
            } catch (e) {
                errorFunc();
            }
        }
    };
}());
