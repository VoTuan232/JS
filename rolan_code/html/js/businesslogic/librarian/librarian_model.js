/**
 * [概要]
 * LIVESETのMODEL
 *
 * [使用箇所]
 * LIBRARIAN画面
 *
 * [改善ポイント]
 * ・今回扱うLIBRARIANで扱うLIBRARIANのmodeは一種類のみのため(All Data Backup, StompBox Data Backupを除く)、
 *  cellsのmodeの階層を省いたほうが良い。
 *
 */

(function () {
    window.PatchInfo = function (memo, isToneCentralPatch) {
        this.memo = memo;
        this.isToneCentralPatch = isToneCentralPatch; // Tone CentralからダウンロードしたPatchかどうかを判定するフラグ
    };
}());

function LibrarianModel(title, instrument) {
    this.instrument = instrument;
    this.name = title;
    this.id = -1; // storage2へ保存する際のID(User: -1, librarian: 0 ~ max)

    this.cells = [];
    this.cellLengths = [];

    this.cellsBass = [];
    this.cellLengthsBass = [];

    for (let mode = 0; mode < librarianCommonInfo.librarians.length; mode++) {
        this.cells[mode] = [];
        this.cellLengths[mode] = librarianCommonInfo.librarians[mode].rows;
        if (this.instrument) {
            for (let row = 0; row < this.cellLengths[mode]; row++) {
                this.cells[mode][row] = librarianCommonInfo.librarians[mode].cell(row);
            }
            if (librarianCommonInfo.librarians[mode].config.hasOwnProperty('extRows')) {
                let rows = this.cellLengths[mode] + librarianCommonInfo.librarians[mode].config.extRows;
                for (let row = this.cellLengths[mode]; row < rows; row++) {
                    this.cells[mode][row] = librarianCommonInfo.librarians[mode].cell(row);
                }
            }
        }
    }

    for (let mode = 0; mode < librarianCommonInfo.librariansBass.length; mode++) {
        this.cellsBass[mode] = [];
        this.cellLengthsBass[mode] = librarianCommonInfo.librariansBass[mode].rows;
        if (this.instrument) {
            for (let row = 0; row < this.cellLengthsBass[mode]; row++) {
                this.cellsBass[mode][row] = librarianCommonInfo.librariansBass[mode].cell(row);
            }
            if (librarianCommonInfo.librariansBass[mode].config.hasOwnProperty('extRows')) {
                let rows = this.cellLengthsBass[mode] + librarianCommonInfo.librariansBass[mode].config.extRows;
                for (let row = this.cellLengthsBass[mode]; row < rows; row++) {
                    this.cellsBass[mode][row] = librarianCommonInfo.librariansBass[mode].cell(row);
                }
            }
        }
    }
}

LibrarianModel.prototype = {

    rows: function (mode, extend) {
        let cells = APP_MODE === MODE.GUITAR ? this.cells : this.cellsBass;
        let cellLengths = APP_MODE === MODE.GUITAR ? this.cellLengths : this.cellLengthsBass;
        let length = cells[mode].length;
        if ((!extend) && (this.instrument) && (length > cellLengths[mode])) {
            length = cellLengths[mode];
        }
        return length;
    },

    title: function () {
        return this.name;
    },

    setTitle: function (title) {
        this.name = title;
    },

    memo: function (mode, row) {
        return this.cell(mode, row).memo;
    },

    value: function (mode, row, col) {
        return this.cell(mode, row).value(col);
    },

    setValue: function (mode, row, col, v) {
        if (col < 0) {
            this.cell(mode, row).memo = v;
        } else {
            this.cell(mode, row).setValue(col, v);
        }
    },

    append: function (mode) {
        if (this.instrument) return false;
        if (APP_MODE === MODE.GUITAR) {
            this.cells[mode].push(librarianCommonInfo.librarians[mode].factory());
        } else {
            this.cellsBass[mode].push(librarianCommonInfo.librariansBass[mode].factory());
        }
        return true;
    },

    remove: function (mode, row) {
        if (this.instrument) return false;
        let cells = APP_MODE === MODE.GUITAR ? this.cells : this.cellsBass;
        cells[mode].splice(row, 1);
        return true;
    },

    duplicate: function (model) {
        let cells = APP_MODE === MODE.GUITAR ? model.cells : model.cellsBass;
        for (let mode = 0; mode < cells.length; mode++) {
            for (let i = 0, num = cells[mode].length; i < num; i++) {
                if (APP_MODE === MODE.GUITAR) {
                    this.cells[mode][i] = librarianCommonInfo.librarians[mode].factory();
                    this.cells[mode][i].copy(cells[mode][i]);
                } else {
                    this.cellsBass[mode][i] = librarianCommonInfo.librariansBass[mode].factory();
                    this.cellsBass[mode][i].copy(cells[mode][i]);
                }
            }
        }
    },

    initialize: function (mode, row) {
        if (APP_MODE === MODE.GUITAR) {
            this.cells[mode][row].copy(librarianCommonInfo.librarians[mode].factory());
        } else {
            this.cellsBass[mode][row].copy(librarianCommonInfo.librariansBass[mode].factory());
        }
    },

    copy: function (mode, rows) {
        let _copycells = [];
        let row;
        while ((row = rows.shift()) != undefined) {
            let cell;
            if (APP_MODE === MODE.GUITAR) {
                cell = librarianCommonInfo.librarians[mode].factory();
                cell.copy(this.cells[mode][row]);
            } else {
                cell = librarianCommonInfo.librariansBass[mode].factory();
                cell.copy(this.cellsBass[mode][row]);
            }
            _copycells.push(cell);
        }
        return _copycells;
    },

    replace: function (mode, row, _copycells) {
        for (let i = 0, num = _copycells.length; i < num; i++) {
            // if (row >= this.cells[mode].length) {
            if (row >= this.rows(mode)) {
                if (!this.append(mode)) return;
            }

            if (APP_MODE === MODE.GUITAR) {
                this.cells[mode][row++].copy(_copycells[i]);
            } else {
                this.cellsBass[mode][row++].copy(_copycells[i]);
            }
        }
    },

    cell: function (mode, row) {
        let cell;
        if (APP_MODE === MODE.GUITAR) {
            cell = this.cells[mode][row];
        } else {
            cell = this.cellsBass[mode][row];
        }
        return cell
    },



    toJSON: function () {
        let deviceName = APP_MODE === MODE.GUITAR ? ProductSetting.name + '_' + ProductSetting.guitarMode : ProductSetting.name + '_' + ProductSetting.bassMode;
        let o = { name: this.name, formatRev: librarianFormatRev, device: deviceName, data: [] };

        if (APP_MODE === MODE.GUITAR) {
            for (let mode = 0; mode < librarianCommonInfo.librarians.length; mode++) {
                o.data[mode] = [];
                for (let row = 0, num = this.cells[mode].length; row < num; row++) {
                    o.data[mode].push({
                        memo: this.cells[mode][row].memo,
                        paramSet: this.cells[mode][row].paramSet
                    });
                }
            }
        } else {
            for (let mode = 0; mode < librarianCommonInfo.librariansBass.length; mode++) {
                o.data[mode] = [];
                for (let row = 0, num = this.cellsBass[mode].length; row < num; row++) {
                    o.data[mode].push({
                        memo: this.cellsBass[mode][row].memo,
                        paramSet: this.cellsBass[mode][row].paramSet
                    });
                }
            }
        }

        return JSON.stringify(o);
    },

    /**
     * BG745用に処理を変更
     * 取り扱うJSONの形は以下の通り
     * {
     *   "name": "LiveSetの名前",
     *   "formatRev": "データのリビジョン",
     *   "device": "SY-1000_****mode",
     *   "data": [[
     *     {
     *       "memo": "PatchInfoオブジェクト",
     *       "paramSet": "patchのデータ"
     *     },...
     *   ],[],[]]
     * } 
     */
    load: function (json) {
        let data = JSON.parse(json);
        if (data.hasOwnProperty('name') &&
            data.hasOwnProperty('formatRev') &&
            data.hasOwnProperty('device') &&
            data.hasOwnProperty('data') &&
            ((APP_MODE === MODE.GUITAR && data.device.includes(ProductSetting.guitarMode)) || (APP_MODE === MODE.BASS && data.device.includes(ProductSetting.bassMode)))) {
            let nameDevice = data.device.replace('_' + ProductSetting.guitarMode, '').replace('_' + ProductSetting.bassMode, '');
            if (nameDevice !== ProductSetting.name) {
                throw new Error('this file is unsupported');
            }
            _checkRevision(data);
            this.name = data.name;
            if (APP_MODE === MODE.GUITAR) {
                for (let mode = 0; mode < data.data.length; mode++) {
                    let num = data.data[mode].length >= librarianCommonInfo.maxPatchNum ? librarianCommonInfo.maxPatchNum : data.data[mode].length;
                    for (let row = 0; row < num; row++) {
                        this.cells[mode][row] = librarianCommonInfo.librarians[mode].factory();
                        this.cells[mode][row].memo = data.data[mode][row].memo;
                        this.cells[mode][row].paramSet = data.data[mode][row].paramSet;
                    }
                }
            } else {
                for (let mode = 0; mode < data.data.length; mode++) {
                    let num = data.data[mode].length >= librarianCommonInfo.maxPatchNum ? librarianCommonInfo.maxPatchNum : data.data[mode].length;
                    for (let row = 0; row < num; row++) {
                        this.cellsBass[mode][row] = librarianCommonInfo.librariansBass[mode].factory();
                        this.cellsBass[mode][row].memo = data.data[mode][row].memo;
                        this.cellsBass[mode][row].paramSet = data.data[mode][row].paramSet;
                    }
                }
            }
        } else {
            throw new Error('this file is unsupported');
        }
    }

};

function _checkRevision(o) {
    let loadFileRev = o.formatRev - 0;
    let appRev = librarianFormatRev - 0;
    if (loadFileRev > appRev) {
        // TODO:
        return;
    } else if (loadFileRev < appRev) {
        // TODO:
        return;
    } else {
        return;
    }
}
