$(function () {
    var IDS = {
        numpadList: '#NumpadList',
        description: '#numpad_list_description',
        option: '#numpad_list_option',
        close: '#numpad_list_close'
    };
    var CLASS_NAMES = {
        popupWrapper: '.bts-numpad-list-popup-wrapper',
        slideUp: '.bts-numpad-list-slideup-style'
    };

    var _$target = '';
    var stringerTexts = '';
    var ROW_HEIGHT = 28;
    var N_ROW = 8;

    var val = 0;

    $(document).on('keydown', '.elf-dial-control', function (e) {
        e.stopPropagation();
        if ($('#NumpadList').css('display') != 'block') return;
        if (e.keyCode == 38) { val = val - 1; }
        else if (e.keyCode == 40) { val = val + 1; }
        else if (e.keyCode == 9) { closeNumpadList(); return; }
        else if (e.keyCode == 35) { val = stringerTexts.length - 1; }
        else if (e.keyCode == 36) { val = 0; }
        else if (e.keyCode == 13) { closeNumpadList(); return; }
        if (val < 0) {
            val = 0;
        }
        if (val >= stringerTexts.length) {
            val = stringerTexts.length - 1;
        }
        $(IDS.option).find('a').removeAttr('checked');
        $(IDS.option).find('a').eq(val).attr('checked', 'checked');
        scrollSelectLocation(val);
        _$target.trigger('elf-update', val);
        _$target.trigger('elf-change', val);

        return;
    });

    var numpadList = function (e, _$) {
        var label = _$.attr('description');

        var desc = $('#' + label).find('p').text();
        $(IDS.description).find('p').text(desc);
        var item = _items[_$.attr('id')];

        var targetStringer = $('#' + item.stringer);
        stringerTexts = targetStringer.children('div').eq(0).children('p');
        var html = '';
        for (var i = 0; i < stringerTexts.length; i++) {
            if (stringerTexts.eq(i).css('display') !== 'none') {
                html += '<a>' + stringerTexts.eq(i).text() + '</a>';
            } else {
                html += '<a style="display: none;"></a>'
            }
        }
        $(IDS.option).append(html);
        $(IDS.option).find('a').on('click', function (e) {
            $(IDS.option).find('a').removeAttr('checked');
            $(this).attr('checked', 'checked');
            val = $(IDS.option).find('a').index(this);
            _$target.trigger('elf-update', val);
            _$target.trigger('elf-change', val);
            closeNumpadList();
        });

        _$target = _$;
        val = _$.val();

        $(IDS.option).find('a').eq(val).attr('checked', 'checked');
        var leftAndTop = calcPosition(_$);
        $('#NumpadList').css({
            'top': leftAndTop[1] + 'px',
            'left': leftAndTop[0] + 'px'
        });
        popup_open(IDS.numpadList.slice(1), CLASS_NAMES.popupWrapper.slice(1));

        scrollSelectLocation(val);

        $(IDS.numpadList).on('click', function (e) {
            e.stopPropagation();
        });
        $(CLASS_NAMES.popupWrapper).on('click', function () {
            closeNumpadList();
        });
    };

    function scrollSelectLocation(val) {
        if (stringerTexts.length > N_ROW) {
            if (stringerTexts.length - val < N_ROW) {
                $('#numpad_list_option').scrollTop(ROW_HEIGHT * (stringerTexts.length - N_ROW));
            } else {
                $('#numpad_list_option').scrollTop(ROW_HEIGHT * val);
            }
        }
    }

    $(IDS.close).on(pointer.click, function (e) {
        e.preventDefault();
        closeNumpadList();
    });

    function closeNumpadList() {
        popup_close(IDS.numpadList.slice(1), CLASS_NAMES.popupWrapper.slice(1));
        val = 0;
        $(IDS.option).empty();
    }
    function calcPosition(target) {
        if (target.offset().left + 72 + 162 <= $(window).width() &&
            target.offset().top - 162 >= 0
        ) {
            return [target.offset().left + 72, target.offset().top - 162];
        } else if (target.offset().left - 8 - 162 >= 0 &&
            target.offset().top - 162 >= 0
        ) {
            return [target.offset().left - 8 - 162, target.offset().top - 162];
        } else if (target.offset().left + 162 <= $(window).width() &&
            target.offset().top + 66 + 250 <= $(window).height()
        ) {
            return [target.offset().left, target.offset().top + 66];
        } else if (target.offset().left - 98 >= 0 &&
            target.offset().top + 66 + 250 <= $(window).height()
        ) {
            return [target.offset().left - 98, target.offset().top + 66];
        }
    }

    window['numpadList'] = numpadList;
    window.closeNumpadList = closeNumpadList;
});