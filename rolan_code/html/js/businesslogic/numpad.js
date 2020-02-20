$(function () {
    var ALL_CLEAR_MS = 500;
    var clearBtnTimer = null;
    var currentNumpad = null;
    var KEY_BIND_MAP = {
        zero: 48,
        one: 49,
        two: 50,
        three: 51,
        four: 52,
        five: 53,
        six: 54,
        seven: 55,
        eight: 56,
        nine: 57,
        period: 190,
        hyphen: 189,
        backspace: 8,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        delete: 46,
        enter: 13,
        numKey_0: 96,
        numKey_1: 97,
        numKey_2: 98,
        numKey_3: 99,
        numKey_4: 100,
        numKey_5: 101,
        numKey_6: 102,
        numKey_7: 103,
        numKey_8: 104,
        numKey_9: 105,
        numKey_minus: 109,
        numKey_period: 110
    }
    function clearAndCloseNumpad() {
        if (currentNumpad !== null) {
            currentNumpad.close();
        }
        currentNumpad = null;
    }

    window.closeNumpad = function () {
        clearAndCloseNumpad();
    };

    $('#Numpad').on('click', function (e) {
        e.stopPropagation();
    });
    $('#numpad_0').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('0');
        }
    });
    $('#numpad_1').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('1');
        }
    });
    $('#numpad_2').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('2');
        }
    });
    $('#numpad_3').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('3');
        }
    });
    $('#numpad_4').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('4');
        }
    });
    $('#numpad_5').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('5');
        }
    });
    $('#numpad_6').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('6');
        }
    });
    $('#numpad_7').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('7');
        }
    });
    $('#numpad_8').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('8');
        }
    });
    $('#numpad_9').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('9');
        }
    });
    $('#numpad_dot').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('.');
        }
    });
    $('#numpad_plus_minus').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.append('+-');
        }
    });
    $('#numpad_add_1').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.calc(1);
        }
    });
    $('#numpad_sub_1').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.calc(-1);
        }
    });
    $('#numpad_add_10').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.calc(10);
        }
    });
    $('#numpad_sub_10').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.calc(-10);
        }
    });
    $('#numpad_del').on(pointer.down, function (e) {
        e.preventDefault();
        clearBtnTimer = setTimeout(function () {
            clearTimeout(clearBtnTimer);
            clearBtnTimer = null;
            if (currentNumpad !== null) {
                currentNumpad.reset();
            }
        }, ALL_CLEAR_MS);
    });
    $('#numpad_del').on(pointer.up, function (e) {
        e.preventDefault();
        if (clearBtnTimer !== null) {
            clearTimeout(clearBtnTimer);
            clearBtnTimer = null;
            if (currentNumpad !== null) {
                currentNumpad.backSpace();
            }
        }
    });
    $('#numpad_cancel').on(pointer.click, function (e) {
        e.preventDefault();
        clearAndCloseNumpad();
    });
    $('#numpad_ok').on(pointer.click, function (e) {
        e.preventDefault();
        if (currentNumpad !== null) {
            currentNumpad.updateDialBeforeClose();
            clearAndCloseNumpad();
        }
    });
    document.onkeydown = function (e) {

        if (currentNumpad !== null) {
            if (e.keyCode === KEY_BIND_MAP.zero || e.keyCode === KEY_BIND_MAP.numKey_0) {
                currentNumpad.append('0');
            } else if (e.keyCode === KEY_BIND_MAP.one || e.keyCode === KEY_BIND_MAP.numKey_1) {
                currentNumpad.append('1');
            } else if (e.keyCode === KEY_BIND_MAP.two || e.keyCode === KEY_BIND_MAP.numKey_2) {
                currentNumpad.append('2');
            } else if (e.keyCode === KEY_BIND_MAP.three || e.keyCode === KEY_BIND_MAP.numKey_3) {
                currentNumpad.append('3');
            } else if (e.keyCode === KEY_BIND_MAP.four || e.keyCode === KEY_BIND_MAP.numKey_4) {
                currentNumpad.append('4');
            } else if (e.keyCode === KEY_BIND_MAP.five || e.keyCode === KEY_BIND_MAP.numKey_5) {
                currentNumpad.append('5');
            } else if (e.keyCode === KEY_BIND_MAP.six || e.keyCode === KEY_BIND_MAP.numKey_6) {
                currentNumpad.append('6');
            } else if (e.keyCode === KEY_BIND_MAP.seven || e.keyCode === KEY_BIND_MAP.numKey_7) {
                currentNumpad.append('7');
            } else if (e.keyCode === KEY_BIND_MAP.eight || e.keyCode === KEY_BIND_MAP.numKey_8) {
                currentNumpad.append('8');
            } else if (e.keyCode === KEY_BIND_MAP.nine || e.keyCode === KEY_BIND_MAP.numKey_9) {
                currentNumpad.append('9');
            } else if (e.keyCode === KEY_BIND_MAP.period || e.keyCode === KEY_BIND_MAP.numKey_period) {
                currentNumpad.append('.');
            } else if (e.keyCode === KEY_BIND_MAP.enter) {
                currentNumpad.updateDialBeforeClose();
                clearAndCloseNumpad();
            } else if (e.keyCode === KEY_BIND_MAP.backspace) {
                currentNumpad.backSpace();
            } else if (e.keyCode === KEY_BIND_MAP.delete) {
                currentNumpad.reset();
            } else if (e.keyCode === KEY_BIND_MAP.hyphen || e.keyCode === KEY_BIND_MAP.numKey_minus) {
                currentNumpad.append('+-');
            } else if (e.keyCode === KEY_BIND_MAP.up) {
                currentNumpad.calc(1);
            } else if (e.keyCode === KEY_BIND_MAP.down) {
                currentNumpad.calc(-1);
            }
            return false;
        }
    };

    /**
     * エントリポイント
     */
    window.numpad = function (e, _$) {
        currentNumpad = createNumpad(_$);
        currentNumpad.open();
        $('.bts-numpad-popup-wrapper').on('click', function () {
            clearAndCloseNumpad();
        });
    };

    window['disable-tap-step'] = true;

    const ASSIGN_DIAL_ID = [
        'assign-dial-type-target-min',
        'assign-dial-type-target-min-bass',
        'assign-dial-type-target-max',
        'assign-dial-type-target-max-bass',
    ]

    function createNumpad(_$) {
        let targetId = _$.attr('id');
        let type;
        if (ASSIGN_DIAL_ID.includes(targetId)) {
            // get id from assign_const.js
            targetId = ASSIGN_TARGETS[_$.data('target-num')].id;
        }
        for (let detailType in NUMPAD_DETAIL_TYPE) {
            let found = NUMPAD_DETAIL_TYPE[detailType].dialIds.some(function (id) {
                return id === targetId;
            });
            if (found) {
                type = NUMPAD_DETAIL_TYPE[detailType];
                break;
            }
        }

        if ($(_$[0]).is('input') && $(_$[0]).attr('data-mode-numpad') === 'NumpadB') {
            return new NumpadB(_$);
        } else if ($(_$[0]).is('input') && $(_$[0]).attr('data-mode-numpad') === 'BasicNumpad') {
            return new BasicNumpad(_$);
        } else if (!type) {
            return new BasicNumpad(_$);
        } else if (type.type === NUMPAD_TYPE.withText) {
            return new NumpadWithText(_$, type.textInfoArr, type.offset);
        } else if (type.type === NUMPAD_TYPE.decimal) {
            return new DecimalNumpad(_$);
        } else if (type.type === NUMPAD_TYPE.numpadInputLevel) {
            return new NumpadInputLevel(_$);
        } else {
            return new NumpadB(_$);
        }
    }
});
