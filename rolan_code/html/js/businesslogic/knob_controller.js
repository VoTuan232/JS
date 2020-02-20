(function () {

    const N_KNOB = 6;

    const DEFAULT_NUM = 0;

    let knobModelController = {
        selectedKnobNum: 0,
        selectedCategoryNums: [0, 2, 2, 1, 5, 2],
        selectedParameterNums: [0, 2, 3, 1, 12, 4],
        setSelectedNumberKnob(num) {
            this.selectedKnobNum = num;
        },
        getSelectedNumberKnob() {
            return this.selectedKnobNum;
        },
        setSelectedCategoryNum(knob, num) {
            this.selectedCategoryNums[knob] = num;
        },
        getSelectedCategoryNum(knob) {
            return this.selectedCategoryNums[knob];
        },
        setSelectedParameterNum(knob, num) {
            this.selectedParameterNums[knob] = num;
        },
        getSelectedParameterNum(knob) {
            return this.selectedParameterNums[knob];
        }
    };

    let knobDOMController = {
        createCategoryList: function (mode) {
            let doc = '';
            KNOB_CATEGORIES.forEach(function (category) {
                doc += `<a href="#" class="elf-select-list-option-control">${category.name}</a>`;
            });

            $(`#knob${mode}-target-category-select-list-list`).find('div').empty().append(doc);
        },

        createParameterList: function (categoryNum, mode) {
            let from = KNOB_CATEGORIES[categoryNum].from;
            let to = KNOB_CATEGORIES[categoryNum].to;
            let doc = '';
            for (let i = from; i < to; i++) {
                let parameter = KNOB_PARAMETERS[i];
                if (parameter.category === categoryNum) {
                    doc += `<a href="#" class="elf-select-list-option-control">${parameter.name}</a>`
                } else {
                    doc += '<a href="#" class="elf-select-list-option-control" style="display: none;"></a>';
                }
            }
            let parameterListDOM = $(`#knob${mode}-target-parameter-select-list-list`);
            parameterListDOM.find('div').empty().append(doc);

            let knobNum = knobModelController.getSelectedNumberKnob();
            let parameterNum = knobModelController.getSelectedParameterNum(knobNum);
            parameterListDOM.find('a').removeAttr('checked');
            parameterListDOM.find('a').eq(parameterNum - from).attr('checked', true);
            $(`#knob${mode}-target-parameter-select-list`).find('p').text(KNOB_PARAMETERS[parameterNum].name);
        },

        updateLabel: function (knobNum, parameterNum, mode) {
            let categoryName = KNOB_CATEGORIES.find(x => x.key === KNOB_PARAMETERS[parameterNum].category).name;
            let parameterName = KNOB_PARAMETERS[parameterNum].name;
            $(`#knob${(knobNum + 1)}${mode}-label`).text(`${categoryName} ${parameterName}`);
        }
    };

    window.knobMIDIController = {
        receiveParameter: function (knobNum, parameterNum) {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let category = KNOB_PARAMETERS[parameterNum].category;

            knobModelController.setSelectedParameterNum(knobNum, parameterNum);
            knobModelController.setSelectedCategoryNum(knobNum, category);
            knobDOMController.updateLabel(knobNum, parameterNum, mode);
            triggerCagetoryAndParameter(knobNum, mode);
        },
        sendParameter: function (knobNum, parameterNum) {
            let cmd = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS;
            let addr = cmd + ADDRESS_CONST.ADDRESS[`KNOB_SETTING_${knobNum + 1}`];
            MIDIController.dt1(nibble(addr), this._convert2RawParamVal(parameterNum));
        },
        _convert2RawParamVal: function (v) {
            return this._hex8(((v & 0xf000) << 16) | ((v & 0xf00) << 8) | ((v & 0xf0) << 4) | ((v & 0xf)));
        },

        _hex8(x) {
            let s = x.toString(16).toUpperCase();
            if (x < 0x10) {
                return '0000000' + s;
            } else if (x < 0x100) {
                return '000000' + s;
            } else if (x < 0x1000) {
                return '00000' + s;
            } else if (x < 0x10000) {
                return '0000' + s;
            } else if (x < 0x100000) {
                return '000' + s;
            } else if (x < 0x1000000) {
                return '00' + s;
            } else if (x < 0x10000000) {
                return '0' + s;
            } else {
                return s;
            }
        }
    };

    const KEY_MODE_BASS = '-bass';

    window.initializeKnob = function () {
        // set setting Knob Constant
        settingKnobConst();

        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        for (let i = 0; i < N_KNOB; i++) {
            let parameterNum = knobModelController.getSelectedParameterNum(i);
            knobDOMController.updateLabel(i, parameterNum, mode);
        };
        knobDOMController.createCategoryList(mode);
        knobDOMController.createParameterList(DEFAULT_NUM, mode);
    };

    window.assignKnobEvents = function () {
        $('#knob-knob-number-select-list, #knob-bass-knob-number-select-list').on('elf-changed', function (e, v) {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            knobModelController.setSelectedNumberKnob(v);
            triggerCagetoryAndParameter(v, mode);
        });

        $('#knob-target-category-select-list, #knob-bass-target-category-select-list').on('elf-changed', function (e, v, isCategorySelect) {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            knobDOMController.createParameterList(v, mode);

            let knobNum = knobModelController.getSelectedNumberKnob();
            knobModelController.setSelectedCategoryNum(knobNum, v);

            let targetSelectList = $(`#knob${mode}-target-parameter-select-list`);
            if (!isCategorySelect) {
                targetSelectList.trigger('elf-change', DEFAULT_NUM);
                targetSelectList.trigger('elf-update', DEFAULT_NUM);
            }
        });

        $('#knob-target-parameter-select-list, #knob-bass-target-parameter-select-list').on('elf-changed', function (e, v, isParameterSelect) {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

            let knobNum = knobModelController.getSelectedNumberKnob();
            let parameterNum = KNOB_CATEGORIES[knobModelController.getSelectedCategoryNum(knobNum)].from + v;
            knobModelController.setSelectedParameterNum(knobNum, parameterNum);
            knobDOMController.updateLabel(knobNum, parameterNum, mode);
            if (!isParameterSelect) {
                knobMIDIController.sendParameter(knobNum, parameterNum, mode);
            }
        });
    };

    function triggerCagetoryAndParameter(knobNum, mode) {
        if (knobNum !== knobModelController.getSelectedNumberKnob()) return;
        let categoryNum = knobModelController.getSelectedCategoryNum(knobNum);
        let parameterNum = knobModelController.getSelectedParameterNum(knobNum);

        let knobCategory = $(`#knob${mode}-target-category-select-list`);
        knobCategory.trigger('elf-change', [categoryNum, true]);
        knobCategory.trigger('elf-update', categoryNum);

        let parameterIndex = parameterNum > KNOB_CATEGORIES[categoryNum].from ? parameterNum - KNOB_CATEGORIES[categoryNum].from : 0;

        let targetSelectList = $(`#knob${mode}-target-parameter-select-list`);
        targetSelectList.trigger('elf-change', [parameterIndex, true]);
        targetSelectList.trigger('elf-update', parameterIndex);
    }
})();
