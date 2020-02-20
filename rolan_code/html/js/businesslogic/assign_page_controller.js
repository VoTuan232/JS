(function () {
    const IDS = {
        CATEGORY_LIST: '#assign-target-category-select-list-list',
        TARGET_LIST: '#assign-target-select-list-list',
        CATEGORY_SELECT: '#assign-target-category-select-list',
        TARGET_SELECT: '#assign-target-select-list'
    };

    const MIN_MAX_TYPE_ENUM = {
        toggle: 'toggle',
        dial: 'dial',
        list: 'list',
        tuner: 'tuner'
    };

    const ASSIGN_TARGET_MAX_MIN = {
        listMin: 'assign-list-type-target-min',
        listMax: 'assign-list-type-target-max',
        dialMin: 'assign-dial-type-target-min',
        dialMax: 'assign-dial-type-target-max',
    };

    const ASSIGN_MIDI = {
        MIDI_CC: 'MIDI CC#',
        MIDI_PC: 'MIDI PC#',
    };
    
    const PU_SELECT = {
        UP: 'PU SELECT UP',
        DOWN: 'PU SELECT DOWN',
    };

    const N_ASSIGN_PAGE = 16;
    const TARGET_VOF = 32768;
    const FACTOR = 10;

    window.assignPageModelController = {
        pageNum: 0,
        type: null,
        setCurrentAssignPage: function (pageNum) {
            this.pageNum = pageNum;
        },
        getCurrentAssignPage: function () {
            return this.pageNum;
        },
        setCurrentTypeTarget: function (type) {
            this.type = type;
        },
        getCurrentTypeTarget: function () {
            return this.type;
        }
    };

    const KEY_MODE_BASS = '-bass';

    // global function
    window.initializeAssignPage = function () {
        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        assignPageDOMController.createCategoryList(mode);
        for (let i = 0; i < N_ASSIGN_PAGE; i++) {
            assignPageDOMController.updateTopTargetLabel(i, 8, mode);
        }

        hideTargetMinMax(mode);
    };

    // global function
    window.assignPageDOMController = {
        createCategoryList: function (mode) {
            let doc = '';
            ASSIGN_CATEGORIES.forEach(function (category) {
                doc += `<a href="#" class="elf-select-list-option-control" categoryKey="${category.key}">${category.name}</a>`;
            });

            $(`#assign-target-category${mode}-select-list-list`).find('div').empty().append(doc);
        },

        createTargetList: function (categoryNum, mode) {
            let from = ASSIGN_CATEGORIES[categoryNum].from;
            let to = ASSIGN_CATEGORIES[categoryNum].to;
            let doc = '';
            for (let i = from; i < to; i++) {
                let assignTarget = ASSIGN_TARGETS[i];
                if (assignTarget.category === categoryNum && !(assignTarget.hasOwnProperty('isDisable') && assignTarget.isDisable)) {
                    doc += `<a href="#" class="elf-select-list-option-control" data-min-max="${assignTarget.hasOwnProperty('isTargetMinMaxEnable') ? assignTarget.isTargetMinMaxEnable : 1}" data-rise-fall="${assignTarget.hasOwnProperty('isSourceModeRiseFallEnable') ? assignTarget.isSourceModeRiseFallEnable : 1}" valueIdTarget="${i}">${assignTarget.name}</a>`
                } else {
                    doc += '<a href="#" class="elf-select-list-option-control" style="display: none;"></a>';
                }
            }
            $(`#assign-target${mode}-select-list-list`).find('div').empty().append(doc);
            _items[`#assign-target${mode}-select-list`.slice(1)].vofs = from;
        },

        cloneList: function (assignTarget, id, value, updateOnly) {
            let distListDOM = $('#' + id + '-list').find('div');
            distListDOM.empty();
            $('#' + assignTarget.id + '-list').find('div').find('a').clone().appendTo(distListDOM);
            // $('#' + assignTarget.id + '-list').find('div').find('a:not([style*="display: none"])').clone().appendTo(distListDOM);

            if (Array.isArray(_items[assignTarget.id].vofs)) {
                _items[id].vofs = [TARGET_VOF, _items[assignTarget.id].vofs[1]];
            } else {
                _items[id].vofs = TARGET_VOF;
            }

            let distDOM = $('#' + id);
            if (updateOnly) {
                let _v = Parameter.value(_items[id].pid, INTEGER4x4, _items[id].vofs);
                if (_v < assignTarget.min || assignTarget.max < _v) {
                    _v = value;
                }
                distDOM.trigger('elf-update', _v);
            } else {
                distDOM.trigger('elf-change', value);
                distDOM.trigger('elf-update', value);
            }
        },

        cloneDial: function (assignTarget, id, value, updateOnly, targetNum, mode) {
            let distStringerDOM = $('#' + id + '-stringer');
            distStringerDOM.empty();
            let sourceItem = _items[assignTarget.id];
            if (sourceItem && sourceItem.stringer) {
                let sourceStringer = $('#' + sourceItem.stringer);
                let format = sourceStringer.attr('format');
                if (format !== undefined) {
                    distStringerDOM.attr('format', format);
                } else {
                    distStringerDOM.attr('format', '');
                }
                sourceStringer.children().clone().appendTo(distStringerDOM);
                $(distStringerDOM).find('p').css('font-size', sourceStringer.css('font-size'));
            } else {
                distStringerDOM.attr('format', 'value');
                distStringerDOM.append('<p>');
            }
            if (assignTarget.smallFont !== undefined) {
                $(distStringerDOM).find('p').css('font-size', assignTarget.smallFont + 'px');
            }

            let distDOM = $('#' + id);

            distDOM.attr('min', assignTarget.min);
            distDOM.attr('max', assignTarget.max);
            if (assignTarget.min < 0) {
                distDOM.attr('center', assignTarget.min);
            } else {
                distDOM.removeAttr('center');
            }
            let dblclickHandler = $('#' + assignTarget.id).attr('dblclick-handler');
            if (dblclickHandler !== undefined) {
                distDOM.attr('dblclick-handler', dblclickHandler);
            } else {
                distDOM.removeAttr('dblclick-handler');
            }
            distDOM.data('target-num', targetNum);

            if (assignTarget.id !== '' && Array.isArray(_items[assignTarget.id].vofs)) {
                _items[id].vofs = [TARGET_VOF, _items[assignTarget.id].vofs[1]];
            } else {
                _items[id].vofs = TARGET_VOF;
            }

            let _v = Parameter.value(_items[id].pid, INTEGER4x4, _items[id].vofs);
            let cloneVal = _v;
            if (updateOnly) {
                if (_v < assignTarget.min || assignTarget.max < _v) {
                    _v = value;
                }
                distDOM.trigger('elf-update', _v);
                if (assignTarget.type === MIN_MAX_TYPE_ENUM.toggle ||
                    assignTarget.type === MIN_MAX_TYPE_ENUM.tuner) {
                    distStringerDOM.find('p').text(`${cloneVal === 0 ? 'OFF' : 'ON'}`);
                } else {
                    window.stringer(distStringerDOM, _v);
                }
            } else {
                distDOM.trigger('elf-change', value);
                distDOM.trigger('elf-update', value);
                if (assignTarget.type === MIN_MAX_TYPE_ENUM.toggle ||
                    assignTarget.type === MIN_MAX_TYPE_ENUM.tuner) {
                    distStringerDOM.find('p').text(`${cloneVal === 0 ? 'OFF' : 'ON'}`);
                } else {
                    window.stringer(distStringerDOM, value);
                }
            }
            $(`#assign-dial-type-page${mode}-mask`).css('display', 'none');
        },

        updateTopTargetLabel: function (assignNum, targetNum, mode) {
            let categoryName = ASSIGN_CATEGORIES.find(x => x.key === ASSIGN_TARGETS[targetNum].category).name;
            let targetName = ASSIGN_TARGETS[targetNum].name;
            $(`#assign-top${mode}-${assignNum + 1}-target-category`).find('p').text(`${categoryName} ${targetName}`);
        },

        updateTopTargetMinMax: function (assignNum, val, type, mode) {
            let distStringerId = `assign-top${mode}-${assignNum + 1}-target-${type}`;
            let distStringerDOM = $('#' + distStringerId);
            distStringerDOM.empty();
            let targetDummyId = `assign-top${mode}-${assignNum + 1}-target-dummy`;
            let targetValue = Parameter.value(_items[targetDummyId].pid, INTEGER4x4, _items[targetDummyId].vofs);
            let targetSrcId = ASSIGN_TARGETS[targetValue].id;
            let targetDOM = $('#' + targetSrcId);
            let sourceItem = _items[targetSrcId];

            let contents;
            if (targetDOM.hasClass('elf-toggle-button-control')) {
                contents = $('<div>').css('display', 'none');
                contents.append($('<p>').css('background-image', 'url()').text('OFF'));
                contents.append($('<p>').css('background-image', 'url()').text('ON'));
                distStringerDOM.append(contents);
                distStringerDOM.append($('<p>'));
                distStringerDOM.removeAttr('format');
            } else if (targetDOM.hasClass('elf-select-list-control')) {
                contents = $('<div>').css('display', 'none');
                // targetDOM.find('a:not([style*="display: none"])').each(function (index, element) {
                //     contents.append($('<p>').css('background-image', 'url()').text($(element).text()));
                // });
                targetDOM.find('a').each(function (index, element) {
                    contents.append($('<p>').css('background-image', 'url()').text($(element).text()));
                });
                distStringerDOM.append(contents);
                distStringerDOM.append($('<p>'));
                distStringerDOM.removeAttr('format');
            } else {
                if (sourceItem !== undefined && sourceItem.stringer) {
                    let sourceStringer = $('#' + sourceItem.stringer);
                    let format = sourceStringer.attr('format');
                    if (format !== undefined) {
                        distStringerDOM.attr('format', format.replace('<br>', ''));
                    } else {
                        distStringerDOM.attr('format', '');
                    }
                    sourceStringer.children().clone().appendTo(distStringerDOM);
                } else {
                    distStringerDOM.attr('format', 'value');
                    distStringerDOM.append($('<p>'));
                }
            }
            let format = distStringerDOM.attr('format');
            if (format) {
                if (ASSIGN_TARGETS[targetValue].hasOwnProperty('isMultiplied') && ASSIGN_TARGETS[targetValue].isMultiplied) {
                    window.stringer(distStringerDOM, (val - TARGET_VOF) / FACTOR);
                } else {
                    window.stringer(distStringerDOM, val - TARGET_VOF);
                }

                let str = distStringerDOM.find('p').html().replace('<br>', '');
                distStringerDOM.children('p').remove();
                distStringerDOM.append('<p>' + str + '</p>');
            } else {
                // [ MEMO_shideaki_20190408 : Remove <br> which is defined at resource.js. To minimize effect of rewrite, this is written outer of  window.stringer(). refs #16842
                let eq = ASSIGN_TARGETS[targetValue].hasOwnProperty('isMultiplied') && ASSIGN_TARGETS[targetValue].isMultiplied ? ((val - TARGET_VOF) / FACTOR) : (val - TARGET_VOF);
                distStringerDOM.children('p').remove();
                let obj = distStringerDOM.find('div p:eq(' + eq + ')').clone();
                if (obj.html() === undefined) {
                    return;
                }
                let str = obj.html().replace('<br>', '');
                obj.html(str);
                obj.appendTo(distStringerDOM);
                // ]
            }
            if (ASSIGN_TARGETS[targetValue].id === '' && ASSIGN_TARGETS[targetValue].isTargetMinMaxEnable !== 0) {
                distStringerDOM.find('p').text(val - TARGET_VOF === 0 ? 'OFF' : 'ON');
            }

            if (type === 'max') {
                valueSrcAndMode.setIsEnableRiseFall(ASSIGN_TARGETS[targetValue].isSourceModeRiseFallEnable === 0);
                isAssignTargetMidi.setIsValCc(ASSIGN_TARGETS[targetValue].name === ASSIGN_MIDI.MIDI_CC);
                isAssignTargetMidi.setIsValPc(ASSIGN_TARGETS[targetValue].name === ASSIGN_MIDI.MIDI_PC);
                updateLabelControlItem(mode,
                    assignNum,
                    ASSIGN_TARGETS[targetValue].isTargetMinMaxEnable,
                    ASSIGN_TARGETS[targetValue].isSourceModeRiseFallEnable
                );
            }

            return ASSIGN_TARGETS[targetValue];
        },
    };

    // global function
    window.assignPageMIDIController = {
        flush: function (assignNum) {
            let addr = `${APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.TEMPORARY_ASSIGN : ADDRESS_CONST.BID.TEMPORARY_ASSIGN_BASS}(${assignNum + 1})%0`;
            Parameter.flush(addr, ADDRESS_CONST.SIZE.ASSIGN);
        }
    };
    /**
     * global function
     * assign assign page with event
     */
    window.assignAssignPageEvent = function () {
        let typeMode = KEY_MODE_BASS;
        let topPageId = '#assign-list-assign-1-toggle-button';
        let topPageIdBass = '#assign-list-assign-bass-1-toggle-button';
        let otherUIIds = [
            '#assign-dial-type-target-min', '#assign-dial-type-target-min-bass',
            '#assign-dial-type-target-max', '#assign-dial-type-target-max-bass',
            '#assign-list-type-target-min', '#assign-list-type-target-min-bass',
            '#assign-list-type-target-max', '#assign-list-type-target-max-bass',
            '#assign-source-select-list', '#assign-source-bass-select-list',
            '#assign-mode-toggle', '#assign-mode-bass-toggle',
            '#assign-act-range-lo-dial', '#assign-act-range-lo-bass-dial',
            '#assign-act-range-hi-dial', '#assign-act-range-hi-bass-dial',
            '#assign-rise-time-dial', '#assign-rise-time-bass-dial',
            '#assign-fall-time-dial', '#assign-fall-time-bass-dial',
            '#assign-input-sens-dial', '#assign-input-sens-bass-dial',
            '#assign-wave-rate-dial', '#assign-wave-rate-bass-dial',
            '#assign-wave-form-dial', '#assign-wave-form-bass-dial',
            '#assign-midi-ch-1-dial', '#assign-midi-ch-1-bass-dial',
            '#assign-midi-cc-dial', '#assign-midi-cc-bass-dial',
            '#assign-midi-cc-value-min-dial', '#assign-midi-cc-value-min-bass-dial',
            '#assign-midi-cc-value-max-dial', '#assign-midi-cc-value-max-bass-dial',
            '#assign-midi-pc-dial', '#assign-midi-pc-bass-dial',
            '#assign-bank-lsb-dial', '#assign-bank-lsb-bass-dial'
        ];
        for (let i = 0; i < N_ASSIGN_PAGE; i++) {
            (function (n) {
                $(`${topPageId.replace('1', (n + 1))}, ${topPageIdBass.replace('1', (n + 1))}`).on('elf-changed', function (e, v, updateOnly) {
                    if (!updateOnly) {
                        assignPageMIDIController.flush(n);
                    }
                });
            })(i);
        }
        otherUIIds.forEach(function (value) {
            (function (id) {
                $(id).on('elf-changed', function (e, v, updateOnly) {
                    if (!updateOnly) {
                        assignPageMIDIController.flush(assignPageModelController.getCurrentAssignPage());
                    }
                });
            })(value);
        });

        $(`#${ASSIGN_TARGET_MAX_MIN.dialMin}, #${ASSIGN_TARGET_MAX_MIN.dialMin}${typeMode}`).on('elf-changed', function (e, v) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let currentPage = assignPageModelController.getCurrentAssignPage();
            let type = assignPageModelController.getCurrentTypeTarget();

            if (type === MIN_MAX_TYPE_ENUM.toggle ||
                type === MIN_MAX_TYPE_ENUM.tuner) {
                $(`#${ASSIGN_TARGET_MAX_MIN.dialMin}${mode}-stringer`).children('p').text(v === 0 ? 'OFF' : 'ON');
            }
            $(`#assign-top${mode}-${currentPage + 1}-target-min`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.dialMin}${mode}-stringer`).children('p').text());

            if (type === MIN_MAX_TYPE_ENUM.toggle ||
                type === MIN_MAX_TYPE_ENUM.tuner) {
                $(`#${ASSIGN_TARGET_MAX_MIN.dialMin}${mode}-stringer`).children('p').text(v === 0 ? 'OFF' : 'ON');
            }
            $(`#assign-top${mode}-${currentPage + 1}-target-min`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.dialMin}${mode}-stringer`).children('p').text());
        });

        $(`#${ASSIGN_TARGET_MAX_MIN.listMin}, #${ASSIGN_TARGET_MAX_MIN.listMin}${typeMode}`).on('elf-changed', function (e, v) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let currentPage = assignPageModelController.getCurrentAssignPage();
            $(`#assign-top${mode}-${currentPage + 1}-target-min`).find('p').text($(this).children('p').text());
        });

        $(`#${ASSIGN_TARGET_MAX_MIN.dialMax}, #${ASSIGN_TARGET_MAX_MIN.dialMax}${typeMode}`).on('elf-changed', function (e, v) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let currentPage = assignPageModelController.getCurrentAssignPage();
            let type = assignPageModelController.getCurrentTypeTarget();

            if (type === MIN_MAX_TYPE_ENUM.toggle ||
                type === MIN_MAX_TYPE_ENUM.tuner) {
                $(`#${ASSIGN_TARGET_MAX_MIN.dialMax}${mode}-stringer`).children('p').text(v === 0 ? 'OFF' : 'ON');
            }
            $(`#assign-top${mode}-${currentPage + 1}-target-max`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.dialMax}${mode}-stringer`).children('p').text());
        });

        $(`#${ASSIGN_TARGET_MAX_MIN.listMax}, #${ASSIGN_TARGET_MAX_MIN.listMax}${typeMode}`).on('elf-changed', function (e, v) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let currentPage = assignPageModelController.getCurrentAssignPage();
            $(`#assign-top${mode}-${currentPage + 1}-target-max`).find('p').text($(this).children('p').text());
        });

        $('#assign-sw, #assign-bass-sw').on('elf-changed', function (e, v, updateOnly) {
            if (!updateOnly) {
                assignPageMIDIController.flush(assignPageModelController.getCurrentAssignPage());
            }
        });

        $('#assign-bank-msb-dial, #assign-bank-msb-bass-dial').on('elf-changed', function (e, v, updateOnly) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            if (!updateOnly) {
                if (v === 0) {
                    $(`#assign-bank-lsb${mode}-dial`).trigger('elf-update', 0);
                    $(`#assign-bank-lsb${mode}-dial`).trigger('elf-change', [0, true]);
                    Parameter.setValue(_items[`assign-bank-lsb${mode}-dial`].pid, INTEGER2x4, 0, 0, false);
                }
                assignPageMIDIController.flush(assignPageModelController.getCurrentAssignPage());
            }
        });

        $('#assign-target-category-select-list, #assign-target-category-bass-select-list').on('elf-changed', function (e, v, updateOnly) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let categoryIndex = $(`#assign-target-category${mode}-select-list`).children('div').find('a').eq(v).attr('categoryKey');
            assignPageDOMController.createTargetList(parseInt(categoryIndex), mode);
            let targetSelectList = $(`#assign-target${mode}-select-list`);
            targetSelectList.trigger('elf-change', [0, updateOnly]);
            targetSelectList.trigger('elf-update', 0);
        });

        $('#assign-target-select-list, #assign-target-bass-select-list').on('elf-changed', function (e, v, updateOnly) {
            let currentPage = assignPageModelController.getCurrentAssignPage();
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let targetSelect = `#assign-target${mode}-select-list`;
            let pid = _items[targetSelect.slice(1)].pid;
            let targetNum = Parameter.value(pid, INTEGER4x4, 0);
            let targetName = ASSIGN_TARGETS[targetNum].name;

            assignPageDOMController.updateTopTargetLabel(currentPage, targetNum, mode);

            if (updateOnly) {
                let categoryNum = ASSIGN_TARGETS[targetNum].category;
                let categoryIndex = ASSIGN_CATEGORIES.findIndex(x => x.key === categoryNum);
                assignPageDOMController.createTargetList(categoryNum, mode);
                $(`#assign-target-category${mode}-select-list`).trigger('elf-update', categoryIndex);

                let vTemp = targetNum - _items[targetSelect.slice(1)].vofs;

                $(targetSelect).trigger('elf-update', vTemp);
            } else {
                // [ MEMO_20200120 : setValue target min-max when select target PU SELECT UP/PU SELECT DOWN ]
                if (targetName === PU_SELECT.UP || targetName === PU_SELECT.DOWN) {
                    Parameter.setValue(`Temp_patch${APP_MODE === MODE.GUITAR ? '': 'Bass'}%assign(${currentPage + 1})%5`, INTEGER4x4, TARGET_VOF, 0, false);
                    Parameter.setValue(`Temp_patch${APP_MODE === MODE.GUITAR ? '': 'Bass'}%assign(${currentPage + 1})%9`, INTEGER4x4, TARGET_VOF, 2, false);
                }

                assignPageMIDIController.flush(currentPage);
            }

            let assignTarget = ASSIGN_TARGETS[targetNum];
            assignTarget = _prepare(assignTarget);
            switch (assignTarget.type) {
                case MIN_MAX_TYPE_ENUM.list:
                    assignPageDOMController.cloneList(assignTarget, ASSIGN_TARGET_MAX_MIN.listMin + mode, assignTarget.min_0, updateOnly);
                    assignPageDOMController.cloneList(assignTarget, ASSIGN_TARGET_MAX_MIN.listMax + mode, assignTarget.max_0, updateOnly);

                    $(`#assign-dial-type${mode}-page`).hide();
                    $(`#assign-list-type${mode}-page`).show();

                    $(`#assign-top${mode}-${currentPage + 1}-target-min`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.listMin}${mode}`).children('p').text());
                    $(`#assign-top${mode}-${currentPage + 1}-target-max`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.listMax}${mode}`).children('p').text());
                    break;
                case MIN_MAX_TYPE_ENUM.toggle:
                case MIN_MAX_TYPE_ENUM.dial:
                case MIN_MAX_TYPE_ENUM.tuner:
                    assignPageDOMController.cloneDial(assignTarget, ASSIGN_TARGET_MAX_MIN.dialMin + mode, assignTarget.min_0, updateOnly, targetNum, mode);
                    assignPageDOMController.cloneDial(assignTarget, ASSIGN_TARGET_MAX_MIN.dialMax + mode, assignTarget.max_0, updateOnly, targetNum, mode);

                    $(`#assign-list-type${mode}-page`).hide();
                    $(`#assign-dial-type${mode}-page`).show();

                    $(`#assign-top${mode}-${currentPage + 1}-target-min`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.dialMin}${mode}-stringer`).children('p').text());
                    $(`#assign-top${mode}-${currentPage + 1}-target-max`).find('p').text($(`#${ASSIGN_TARGET_MAX_MIN.dialMax}${mode}-stringer`).children('p').text());
                    break;
            }

            assignPageModelController.setCurrentTypeTarget(assignTarget.type);
            // set enable target max min
            let dataMinMax = ASSIGN_TARGETS[targetNum].isTargetMinMaxEnable;
            let dataRiseFall = ASSIGN_TARGETS[targetNum].isSourceModeRiseFallEnable;
            if (dataMinMax === 0) {
                hideTargetMinMax(mode);
            };
            valueSrcAndMode.setIsEnableRiseFall(dataRiseFall === 0);

            isAssignTargetMidi.setIsValCc(targetName === ASSIGN_MIDI.MIDI_CC);
            isAssignTargetMidi.setIsValPc(targetName === ASSIGN_MIDI.MIDI_PC);
            
            let itemBankMsb = _items[`assign-bank-msb${mode}-dial`];
            isAssignTargetMidi.setIsBankMsbOff(itemBankMsb === 0);
            
            if (!updateOnly) {             

                let itemSrc = _items[`assign-source${mode}-select-list`];
                let itemMode = _items[`assign-mode${mode}-toggle`];
                valueSrcAndMode.setValueSource(Parameter.value(itemSrc.pid, itemSrc.size, itemSrc.vofs));
                valueSrcAndMode.setToggleMode(Parameter.value(itemMode.pid, itemMode.size, itemMode.vofs));
                
                updateLabelControlItem(mode, currentPage, dataMinMax, dataRiseFall);
                ctlExpAssignController.updateLabelSource(mode, currentPage);
                ctlExpAssignController.updateLabelMidi(mode, false, currentPage);
            }
            updateControlItemFormAssign(mode, currentPage, dataRiseFall === 0);
        });
    };

    function hideTargetMinMax(mode) {
        $(`#assign-dial-type${mode}-page`).hide();
        $(`#assign-list-type${mode}-page`).hide();
    };

    function updateControlItemFormAssign(mode, currentPage, isDisableRiseFall) {
        $(`#assign-mode${mode}-label`).css('opacity', isDisableRiseFall ? '0.4' : '1');
        $(`#assign-mode${mode}-toggle`).attr('tabindex', isDisableRiseFall ? '0' : '1');
        $(`#assign-mode${mode}-toggle`).css({ 'opacity': isDisableRiseFall ? '0.4' : 1, 'pointer-events': isDisableRiseFall ? 'none' : '' });
        ctlExpAssignController.assignSettingSourceMidi(mode, false, currentPage);
        ctlExpAssignController.assignSettingSource(mode, currentPage);
    };

    window.updateLabelControlItem = function (mode, currentPage, dataMinMax, dataRiseFall) {
        let isDisableRiseFall = dataRiseFall === 0;
        let isDisableMinMax = dataMinMax === 0;

        let idsMinMax = [
            `#assign-top${mode}-${currentPage + 1}-target-min`,
            `#assign-top${mode}-${currentPage + 1}-target-max`,
        ];
        let idsMode = [
            `#assign-top${mode}-${currentPage + 1}-mode-stringer`,
        ];
        disableLabelTopAssign(isDisableMinMax, idsMinMax);
        disableLabelTopAssign(isDisableRiseFall, idsMode);
    };

    function updateDialStatus(id, isDisable) {
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('opacity', isDisable ? '0.4' : '1');
        $(`#${id}-mask`).css('display', isDisable ? '' : 'none');
        $(`#${id}-dial`).attr('tabindex', isDisable ? '-1' : '0');
    };

    // local function
    function _prepare(assignTarget) {
        let distDOM = $('#' + assignTarget.id);
        if (assignTarget.type === undefined) {
            if (distDOM.hasClass('elf-toggle-button-control')) {
                assignTarget.type = MIN_MAX_TYPE_ENUM.toggle;
            } else if (distDOM.hasClass('elf-dial-control')) {
                assignTarget.type = MIN_MAX_TYPE_ENUM.dial;
            } else if (distDOM.hasClass('elf-select-list-control')) {
                assignTarget.type = MIN_MAX_TYPE_ENUM.list;
            } else if (assignTarget.isTargetMinMaxEnable !== 0 && assignTarget.id === '') {
                assignTarget.type = MIN_MAX_TYPE_ENUM.tuner;
            }
        }
        if (assignTarget.min === undefined) {
            switch (assignTarget.type) {
                case MIN_MAX_TYPE_ENUM.toggle:
                case MIN_MAX_TYPE_ENUM.tuner:
                    assignTarget.min = 0;
                    assignTarget.max = 1;
                    break;
                case MIN_MAX_TYPE_ENUM.dial:
                    assignTarget.min = distDOM.attr('min');
                    assignTarget.max = distDOM.attr('max');
                    break;
                case MIN_MAX_TYPE_ENUM.list:
                    assignTarget.min = 0;
                    assignTarget.max = distDOM.find('.elf-select-list-option-control:not([style*="display: none"])').length - 1;
                    break;
            }
        }

        if (assignTarget.min_0 === undefined) {
            assignTarget.min_0 = assignTarget.min;
            assignTarget.max_0 = assignTarget.max;
        }

        return assignTarget;
    };

    window.disableLabelTopAssign = function (isDisable, ids) {
        if (isDisable) {
            ids.forEach(e => {
                $(e).find('p').css('visibility', 'hidden');
                $(e).append($('<div>').addClass('disable-assign').text('---'));
            });
        } else {
            ids.forEach(e => {
                $(e).find('p').css('visibility', 'unset');
                $(e).find('.disable-assign').remove();
            });
        }
    }

})();
