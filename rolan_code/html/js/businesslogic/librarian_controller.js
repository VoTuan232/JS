//
//	librarian_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function () {

    if (ProductSetting.librarian == null) return;

    let librarians = [];
    let librariansBass = [];
    for (let i = 0; i < ProductSetting.librarian.length; i++) {
        librarians.push(new Librarian(ProductSetting.librarian[i].config));
        librariansBass.push(new Librarian(ProductSetting.librarianBass[i].config));
    }
    window.Librarians = librarians; /* export for window object */
    window.LibrariansBass = librariansBass; /* export for window object */

    let mode = 0;
    let model = new LibrarianModel(ProductSetting.name, true);
    let _tabs = [];
    let _copycells = []; /* for copy & paste operation */

    _tabs.push(model);

    let doc = 'MODE : <select>';
    for (let i = 0; i < ProductSetting.librarian.length; i++) {
        doc += '<option value="' + i + (i == 0 ? '" selected>' : '">') +
            ProductSetting.librarian[i].name + '</option>';
    }
    doc += '</select>';
    $('#librarian_view .mode').append(doc);

    update_tabs();
    update_table();

    $('#librarian_view .load').on('click', function (e) {
        load();
    });

    $('#librarian_view .save').on('click', function (e) {
        save();
    });

    $('#librarian_view .new').on('click', function (e) {
        create();
        update_tabs();
    });

    $('#librarian_view .duplicate').on('click', function (e) {
        duplicate();
    });

    $('#librarian_view .close').on('click', function (e) {
        close();
    });

    $('#librarian_view .tabs').on('click', 'input[type="radio"]', function (e) {
        let index = $('#librarian_view .tabs input[type="radio"]').index(this);
        model = _tabs[index];
        update_table();
    });

    $('#librarian_view .mode').on('change', 'select', function (e) {
        mode = $(this).val();
        update_table();
        _copycells = [];
    });

    $('#librarian_view .selectAll').on('click', function (e) {
        $('#librarian_view input[type="checkbox"]').each(function () {
            $(this).prop('checked', true);
        });
    });

    $('#librarian_view .clear').on('click', function (e) {
        $('#librarian_view input[type="checkbox"]').each(function () {
            $(this).prop('checked', false);
        });
    });

    $('#librarian_view .list').on('click', '.append', function (e) {
        model.append(mode);
        update_table();
    });

    $('#librarian_view .copy').on('click', function (e) {
        let rows = [];
        $('#librarian_view input[type="checkbox"]:checked').each(function () {
            let row = $(this).closest('tr').index();
            rows.push(row);
        });
        $('#librarian_view .clear').trigger('click');
        if (rows.length) _copycells = model.copy(mode, rows);
    });

    $('#librarian_view .paste').on('click', function (e) {
        let row = $('#librarian_view input[type="checkbox"]:checked').closest('tr').index();
        if (row >= 0) {
            model.replace(mode, row, _copycells);
            update_table();
        }
    });

    $('#librarian_view .delete').on('click', function (e) {
        let rows = [];
        $('#librarian_view input[type="checkbox"]:checked').each(function () {
            let row = $(this).closest('tr').index();
            rows.push(row);
        });
        if (rows.length) {
            for (let row; (row = rows.pop()) !== undefined;) {
                model.remove(mode, row);
            }
            update_table();
        }
    });

    $('#librarian_view .initialize').on('click', function (e) {
        $('#librarian_view input[type="checkbox"]:checked').each(function () {
            let row = $(this).closest('tr').index();
            model.initialize(mode, row);
        });
        update_table();
    });

    $('#librarian_view .list').on('change', 'input[type="text"].title', function (e) {
        let title = $(this).val();
        model.setTitle(title);
        update_tabs();
    });

    $('#librarian_view .list').on('change', 'input[type="text"].column, select', function (e) {
        let row = $(this).closest('tr').index();
        let col = $(this).closest('td').index() - 2;
        let v = $(this).val();
        model.setValue(mode, row, col, v);
    });

    $('#librarian_view .list').on('change', 'input[type="text"].memo', function (e) {
        let row = $(this).closest('tr').index();
        let memo = $(this).val();
        model.setValue(mode, row, -1, memo);
    });

    let fileheader = ProductSetting.name + ':librarian:1.00';
    let untitled = 1;

    function load() {
        let fs = $native.fs;
        fs.event.openfilename = function (file) {
            if (file) {
                let o;
                try {
                    o = JSON.parse(fs.readString(file));
                } catch (e) { alert(e); }
                if (o.header != fileheader) {
                    alert(MSG('IDM_INVALID_FILE')); return;
                }
                let title = file.substr(file.lastIndexOf(fs.separator()) + 1);

                create();
                _tabs[_tabs.length - 1].load(JSON.stringify(o.data));
                _tabs[_tabs.length - 1].setTitle(title.split('.')[0]);

                update_tabs();
            }
        };
        let filter = [ProductSetting.extension];
        fs.openfilename(filter);
    }

    function save() {
        let fs = $native.fs;
        fs.event.savefilename = function (to) {
            if (to) {
                let o = { header: fileheader, data: JSON.parse(model.toJSON()) };
                try {
                    fs.writeString(to, JSON.stringify(o));
                } catch (e) { alert(e); }
            }
        };
        let name = model.title();
        let ext = ProductSetting.extension;
        fs.savefilename(name, ext);
    }

    function create() {
        _tabs.push(new LibrarianModel('Untitled' + (untitled++), false));
    }

    function duplicate() {
        create();
        _tabs[_tabs.length - 1].duplicate(model);
        update_tabs();
    }

    function close() {
        let index = _tabs.indexOf(model);
        _tabs.splice(index, 1);
        if (index >= _tabs.length) {
            index = _tabs.length - 1;
        }
        model = _tabs[index];
        update_tabs();
        update_table();
    }

    /* midi operation */

    let observer = {
        notify: function (msg, arg) {
            let lib = APP_MODE === MODE.GUITAR ? librarians : librariansBass;
            if (msg == 'librarian_cancel' || arg == 'timeout' || arg == 'end') {
                lib[mode].removeObserver(observer);
                $('#librarian_view .progress').empty();
                if (arg == 'timeout') alert(MSG('IDM_READ_TIMEOUT'));
                if (msg == 'librarian_temporaryWrite') {
                    lib[mode].preview();
                } else {
                    update_table();
                }
            } else {
                $('#librarian_view .progress span').text(arg + '%');
            }
        }
    };

    let cancel = '<span></span><button class="cancel">Cancel</button>';

    $('#librarian_view').on('click', '.cancel', function (e) {
        let lib = APP_MODE === MODE.GUITAR ? librarians : librariansBass;
        lib[mode].cancel();
    });

    $('#librarian_view .list').on('click', '.read', function (e) {
        let rows = [];
        $('#librarian_view input[type="checkbox"]:checked').each(function () {
            let row = $(this).closest('tr').index();
            rows.push(row);
        });
        if (rows.length) {
            $('#librarian_view .progress').empty();
            $('#librarian_view .progress').append('<font color="red">now reading ... </font>' + cancel);

            let lib = APP_MODE === MODE.GUITAR ? librarians : librariansBass;
            lib[mode].addObserver(observer);
            lib[mode].read(rows);
        }
    });

    $('#librarian_view .list').on('click', '.write', function (e) {
        let rows = [];
        $('#librarian_view input[type="checkbox"]:checked').each(function () {
            let row = $(this).closest('tr').index();
            rows.push(row);
        });
        if (rows.length) {
            $('#librarian_view .progress').empty();
            $('#librarian_view .progress').append('<font color="red">now writing ... </font>' + cancel);

            let lib = APP_MODE === MODE.GUITAR ? librarians : librariansBass;
            lib[mode].addObserver(observer);
            lib[mode].write(rows);
        }
    });

    $('#librarian_view .list').on('click', 'button.preview', function (e) {
        let row = $(this).closest('tr').index();
        if ($(this).data('state') == 'off') {
            $('#librarian_view .progress').empty();
            $('#librarian_view .progress').append('<font color="red">now writing ... </font>' + cancel);

            let lib = APP_MODE === MODE.GUITAR ? librarians : librariansBass;
            lib[mode].addObserver(observer);
            lib[mode].temporaryWrite(model.cell(mode, row), row);
            $(this).data('state', 'on');
        } else {
            librarians[mode].cancel();
            $(this).data('state', 'off');
        }
    });

    /* update view */

    function update_tabs() {
        let doc = '';
        for (let i = 0; i < _tabs.length; i++) {
            doc +=
                '<label><input type="radio" name="tab" ' +
                (i == _tabs.indexOf(model) ? 'checked />' : '/>') +
                '<span class="tab">' + _tabs[i].title() + '</span>' +
                '</label>';
        }
        $('#librarian_view div.tabs').empty();
        $('#librarian_view div.tabs').append(doc);
    }

    function update_table() {

        let columnInfo = ProductSetting.librarian[mode].config.columnInfo;

        function columns(row, col, v) {
            let doc = '';
            if (columnInfo[col].type == 'picture') {
                doc = '<img src="' + v + '" ' + 'width="' + columnInfo[col].width + '" />';
            } else if (columnInfo[col].type == 'selectbox') {
                doc = '<select>';
                for (let i = 0; i < columnInfo[col].options.length; i++) {
                    doc += '<option value="' + i + (i == v ? '" selected>' : '">') +
                        columnInfo[col].options[i] + '</option>';
                }
                doc += '</select>';
            } else if (columnInfo[col].type == 'text') {
                doc = '<input type="text" disabled ' +
                    'value="' + v + '" ' +
                    'size="' + columnInfo[col].width + '" />';
            } else { /* 'text%n' */
                let max = columnInfo[col].type.replace(/text/g, '');
                doc = '<input type="text" class="column" ' +
                    'value="' + v + '" ' +
                    'size="' + columnInfo[col].width + '" ' +
                    'maxlength="' + max + '" />';
            }
            return doc;
        }

        function line(row) {
            let doc =
                '<td><input type="checkbox" /></td>' +
                '<td align="right">' + (row + 1) + '</td>';

            for (let col = 0; col < columnInfo.length; col++) {
                let v = model.value(mode, row, col);
                doc += '<td>' + columns(row, col, v) + '</td>';
            }

            doc +=
                '<td><input type="text" class="memo" ' +
                'value="' + model.memo(mode, row) + '" /></td>' +
                '<td><button class="preview" data-state="off">Preview</button></td>';
            return doc;
        }

        let table = '<table>';
        for (let row = 0; row < model.rows(mode); row++) {
            table += '<tr>' + line(row) + '</tr>';
        }
        table += '</table>';

        let doc = '';
        if (_tabs.indexOf(model) == 0) {
            doc += '<button class="read">Read</button>';
            doc += '<button class="write">Write</button>';
            doc += table;

            $('#librarian_view .close').prop("disabled", true);
            $('#librarian_view .delete').prop("disabled", true);
        } else {
            doc += 'Title: <input type="text" class="title" value="' + model.title() + '" />';
            doc += table;
            doc += '<button class="append">+</button>';

            $('#librarian_view .close').prop("disabled", false);
            $('#librarian_view .delete').prop("disabled", false);
        }

        $('#librarian_view div.list').empty();
        $('#librarian_view div.list').append(doc);
    }

});
