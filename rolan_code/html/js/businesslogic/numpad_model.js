var BasicNumpad = function (_$) {
    this.target = _$;
    this.dialId = _$.attr('id');
    this.max = parseInt(_$.attr('max'));
    this.min = parseInt(_$.attr('min'));
    var value = this.convertNumpadVal(_$.val());
    this.displayVal = this.convert2NumpadVal(value);
    this.updateDisplay(this.displayVal);
    this.hasDecimalValue = false;
    this.hasNumpadB = false;
    this.hasPushed = false;

    var label = _$.attr('description');
    if (label !== undefined) {
        var desc = $('#' + label + ' p').text();
        $('#numpad_description').find('p').text(desc);
    }
};
BasicNumpad.prototype.MAX_INPUT_LENGTH = 5;
BasicNumpad.prototype.NUMPAD_WIDTH = 226;
BasicNumpad.prototype.NUMPAD_HEIGHT = 280;
BasicNumpad.prototype.LEFT = 162;
BasicNumpad.prototype.RIGHT = 72;
BasicNumpad.prototype.UP = 154;
BasicNumpad.prototype.DOWN = 90;

BasicNumpad.prototype.open = function () {
    popup_open('Numpad', 'bts-numpad-popup-wrapper');
    var leftAndTop = this.calcPosition();
    $('#Numpad').css({
        'top': leftAndTop[1] + 'px',
        'left': leftAndTop[0] + 'px'
    });
};

BasicNumpad.prototype.calcPosition = function () {
    if (this.target.offset().left + this.RIGHT + this.NUMPAD_WIDTH <= $(window).width() &&
        this.target.offset().top - this.UP >= 0
    ) {
        return [this.target.offset().left + this.RIGHT, this.target.offset().top - this.UP];
    } else if (this.target.offset().left - 8 - this.NUMPAD_WIDTH >= 0 &&
        this.target.offset().top - this.UP >= 0
    ) {
        return [this.target.offset().left - 8 - this.NUMPAD_WIDTH, this.target.offset().top - this.UP];
    } else if (this.target.offset().left + this.NUMPAD_WIDTH <= $(window).width() &&
        this.target.offset().top + this.DOWN + this.NUMPAD_HEIGHT <= $(window).height()
    ) {
        return [this.target.offset().left, this.target.offset().top + this.DOWN];
    } else if (this.target.offset().left - this.LEFT >= 0 &&
        this.target.offset().top + this.DOWN + this.NUMPAD_HEIGHT <= $(window).height()
    ) {
        return [this.target.offset().left - this.LEFT, this.target.offset().top + this.DOWN];
    }
};
BasicNumpad.prototype.close = function () {
    popup_close('Numpad');
    $('#Numpad').removeClass('bts-numpad-slideup-style');
};
BasicNumpad.prototype.convert2NumpadVal = function (v) {
    return v + '';
};
BasicNumpad.prototype.convertNumpadVal = function (v) {
    return v + '';
};
BasicNumpad.prototype.convert2DialVal = function (v) {
    return (v === '' || v === '-') ? 0 : parseInt(v);
};
BasicNumpad.prototype.append = function (char) {
    var calcVal = this.convert2CalcVal(char);
    if (!this.canAppend(char, calcVal)) {
        return;
    }
    switch (char) {
        case '+-': {
            if (calcVal.indexOf('-') === 0) {
                this.updateDisplay(calcVal.slice(1));
            } else {
                this.updateDisplay('-' + calcVal);
            }
            break;
        }
        default: {
            this.updateDisplay(calcVal + char);
            break;
        }
    }
    this.hasPushed = true;
};
BasicNumpad.prototype.reset = function () {
    this.displayVal = '';
    this.updateDisplay('');
    this.hasPushed = true;
}
BasicNumpad.prototype.convert2CalcVal = function (char) {
    return (!this.hasPushed && char !== '+-') ? '' : this.displayVal;
};
BasicNumpad.prototype.canAppend = function (char, calcVal) {
    switch (char) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': {
            if (calcVal.charAt(calcVal.length - 2) === '.') {
                return false;
            }
            if (calcVal.length === 1 && calcVal.charAt(0) === '0') {
                return false;
            }
            return this.getNumberOfDigits(calcVal) < this.MAX_INPUT_LENGTH;
        };
        case '0': {
            if (calcVal.charAt(calcVal.length - 2) === '.') {
                return false;
            }
            return calcVal.length === 0 ||
                (/^[.1-9]$/.test(calcVal.slice(-1)) && this.getNumberOfDigits(calcVal) < this.MAX_INPUT_LENGTH) ||
                (/^[0]$/.test(calcVal.slice(-1)) && !/^[0]+$/.test(calcVal) && this.getNumberOfDigits(calcVal) < this.MAX_INPUT_LENGTH);
        };
        case '.': {
            return this.hasDecimalValue &&
                calcVal.indexOf('.') === -1 &&
                /^[\d]$/.test(calcVal.slice(-1)) &&
                this.getNumberOfDigits(calcVal) < this.MAX_INPUT_LENGTH - 1;
        };
        case '+-': {
            return this.hasNumpadB && calcVal.length > 0 && calcVal.charAt(0) !== '0';
        }
    }
};
BasicNumpad.prototype.getNumberOfDigits = function (calcVal) {
    return calcVal.replace('.', '').replace('-', '').length;
};
BasicNumpad.prototype.calc = function (num) {
    var dialVal = this.convert2DialVal(this.displayVal);
    var roundedDialVal = this.roundDialVal(dialVal);
    var addedDialVal = roundedDialVal + num;
    var roundedAddedDialVal = this.roundDialVal(addedDialVal);
    this.updateDial(roundedAddedDialVal);

    this.updateDisplay(this.convert2NumpadVal(roundedAddedDialVal));
    this.hasPushed = true;
};

BasicNumpad.prototype.roundDialVal = function (v) {
    return (v > this.max) ? this.max : (v < this.min ? this.min : v);
};
BasicNumpad.prototype.updateDialBeforeClose = function () {
    var dialVal = this.convert2DialVal(this.displayVal);
    var roundedDialVal = this.roundDialVal(dialVal);
    this.updateDial(roundedDialVal);
};
BasicNumpad.prototype.clear = function () {
    this.updateDisplay('');
    this.hasPushed = true;
};
BasicNumpad.prototype.backSpace = function () {
    var str = this.canBack() ? this.displayVal : '';
    str = str.slice(0, -1);
    this.updateDisplay(str);
    this.hasPushed = true;
};
BasicNumpad.prototype.canBack = function () {
    return true;
};
BasicNumpad.prototype.updateDisplay = function (v) {
    this.displayVal = v;
    $('#numpad_value').find('p').text(v);
};
BasicNumpad.prototype.updateDial = function (v) {
    this.target.trigger('elf-update', v);
    this.target.trigger('elf-change', v);
};

var DecimalNumpad = function (_$) {
    BasicNumpad.call(this, _$);
    this.hasDecimalValue = true;
};
DecimalNumpad.prototype = Object.create(BasicNumpad.prototype);
DecimalNumpad.prototype.constructor = DecimalNumpad;
DecimalNumpad.prototype.convert2NumpadVal = function (v) {
    return Math.floor(parseFloat(v) / 10) + '.' + v % 10;
};
DecimalNumpad.prototype.convert2DialVal = function (v) {
    return (v === '' || v === '-') ? 0 : Math.floor(parseFloat(v) * 10);
};

var NumpadB = function (_$) {
    BasicNumpad.call(this, _$);
    this.hasNumpadB = true;
};
NumpadB.prototype = Object.create(BasicNumpad.prototype);
NumpadB.prototype.constructor = NumpadB;

var NumpadInputLevel = function (_$) {
    BasicNumpad.call(this, _$);
    this.max = parseInt(_$.attr('max')) - 20;
    this.min = parseInt(_$.attr('min')) - 20;
    this.hasNumpadB = true;
    this.hasDecimalValue = false;
};
NumpadInputLevel.prototype = Object.create(BasicNumpad.prototype);
NumpadInputLevel.prototype.constructor = NumpadInputLevel;
NumpadInputLevel.prototype.convertNumpadVal = function (v) {
    return v - 20;
};
NumpadInputLevel.prototype.updateDial = function (v) {
    this.target.trigger('elf-update', v + 20);
    this.target.trigger('elf-change', v + 20);
};

var NumpadWithText = function (_$, textInfoArr, offset) {
    this.textInfoArr = textInfoArr;
    this.offset = offset;
    BasicNumpad.call(this, _$);
};
NumpadWithText.prototype = Object.create(BasicNumpad.prototype);
NumpadWithText.prototype.constructor = NumpadWithText;
NumpadWithText.prototype.convert2NumpadVal = function (v) {
    var result = this.textInfoArr.filter(function (textInfo) {
        return textInfo.start <= v && v < textInfo.start + textInfo.texts.length;
    }).map(function (textInfo) {
        return textInfo.texts[v - textInfo.start];
    });
    return result[0] !== undefined ? result[0] : parseInt(v) + this.offset + '';
};
NumpadWithText.prototype.convert2DialVal = function (v) {

    var result = this.textInfoArr.map(function (textInfo) {
        var index = textInfo.texts.findIndex(function (value) {
            return value === v;
        });
        return index !== -1 ? textInfo.start + index : null;
    }).filter(function (text) {
        return text !== null;
    });
    if (result[0] !== undefined) {
        return result[0];
    } else {
        return (v === '' || v === '-') ? 0 : parseInt(v) - this.offset;
    }
};
NumpadWithText.prototype.canBack = function () {
    var self = this;
    return !this.textInfoArr.some(function (textInfo) {
        return textInfo.texts.some(function (text) {
            return text === self.displayVal;
        });
    });
};
NumpadWithText.prototype.convert2CalcVal = function (char) {
    var self = this;
    return this.textInfoArr.some(function (textInfo) {
        return textInfo.texts.some(function (text) {
            return text === self.displayVal;
        });
    }) ? '' : BasicNumpad.prototype.convert2CalcVal.call(this, char);
};
NumpadWithText.prototype.updateDialBeforeClose = function () {
    var self = this;
    var dialVal = this.convert2DialVal(this.displayVal);
    var hasTextShown = this.textInfoArr.some(function (textInfo) {
        return textInfo.texts.some(function (text) {
            return text === self.displayVal;
        });
    });
    if (hasTextShown) {
        return dialVal;
    }
    var roundedDialVal = this.roundDialVal(dialVal);
    var result = this.textInfoArr.filter(function (textInfo) {
        return textInfo.start === self.min ||
            textInfo.start + textInfo.texts.length - 1 === self.max;
    }).filter(function (textInfo) {
        return textInfo.start <= roundedDialVal && roundedDialVal < textInfo.start + textInfo.texts.length;
    }).map(function (textInfo) {
        return textInfo.start === self.min ? textInfo.start + textInfo.texts.length : textInfo.start - 1;
    });
    this.updateDial(result[0] !== undefined ? result[0] : roundedDialVal);
};
NumpadWithText.prototype.calc = function (num) {
    // if (valueSelectTypeDelay == 3) {
    //     var value = this.convertNumpadVal(this.target.val());
    //     this.displayVal = this.convert2NumpadVal(value);
    //     if (this.displayVal == 1200 && num > 0) {
    //         this.displayVal = 2000;
    //     }

    //     if (num == +10 && this.displayVal < 1200 && this.displayVal > 1190) {
    //         this.displayVal = parseInt(this.displayVal) + 800;
    //     }
    //     if (num == -10 && this.convert2DialVal(this.displayVal) > 2000 && this.convert2DialVal(this.displayVal) <= 2010) {
    //         this.displayVal = parseInt(this.convert2DialVal(this.displayVal)) - 800;
    //     }
    //     if (this.displayVal == '1/32' && num < 0) {
    //         this.displayVal = 1201;
    //     }
    // }
    var dialVal = this.convert2DialVal(this.displayVal);
    var roundedDialVal = this.roundDialVal(dialVal);
    var addedDialVal = roundedDialVal + num;
    var roundedAddedDialVal = this.roundDialVal(addedDialVal);
    this.updateDial(roundedAddedDialVal);

    this.updateDisplay(this.convert2NumpadVal(roundedAddedDialVal));
    this.hasPushed = true;
};