(function () {

    const KEY_MODE = {
        GUITAR: 'guitar',
        BASS: 'bass',
    }
    const SEQ_TYPE = ['seq1', 'seq2'];

    const INST_KEY = ['inst1', 'inst2', 'inst3'];

    const SEQ_SW_STATUS = {
        on: 1,
        off: 0
    };

    const LIST_MIN_MAX = {
        min: 1,
        max: 16
    };
    const LIST_IMG = {
        min: 1,
        max: 13
    };

    const TAB_SEQ = {
        SEQ1: 1,
        SEQ2: 2
    };

    const LIST_TEPPER = ['pitch', 'cutoff', 'level'];

    const INIT_STEPPER = +12;
    const VALUE_CURVE_BUTTON = 0;
    const TAB_MODE_SEQ = 0;

    const updateValueCurve = {
        number: 0,
        setNumber(number) {
            this.number = number;
        },
        getNumber() {
            return this.number;
        }
    };

    const STR_SEQ_TAB = 'SEQ1';

    window.seqFunctionController = {
        init() {
            SEQ_TYPE.forEach(typeSeq => {
                this.initSeqController(typeSeq);
                this.inputReadOnlyStepper(typeSeq);
            });
        },

        addEventHoverImageButtonPopup() {
            for (let i = LIST_IMG.min; i <= LIST_IMG.max; i++) {
                $(`#popup-curve-img-${i}`).css("opacity", "0");
                $(`#popup-curve-img-${i}`).hover(
                    function () {
                        $(this).css({
                            "opacity": "0.28",
                            "background-color": "#19B5FE",
                            "border": "2px solid #19B5FE"
                        });
                    }, function () {
                        $(this).css({
                            "opacity": "0",
                            "background-color": "white",
                            "border": "none"
                        });
                    }
                );
            }
        },

        initSeqController(typeSeq) {
            let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;

            for (let i = LIST_MIN_MAX.min; i <= LIST_MIN_MAX.max; i++) {
                //add "+" in value stepper
                let _$ = $(`#inst-${mode}-seq-${typeSeq}-pitch-stepper-max-${i}-spinner, #inst-${mode}-seq-${typeSeq}-pitch-stepper-min-${i}-spinner`).children('input');
                let initMax = $(`#inst-${mode}-seq-${typeSeq}-pitch-stepper-max-${i}-spinner`).children('input');
                let initMin = $(`#inst-${mode}-seq-${typeSeq}-pitch-stepper-min-${i}-spinner`).children('input');
                _$.attr('init', INIT_STEPPER);
                _$.attr("unformat", "(value > 0) ? '+'+value : value");
                _$.attr("format", "(value > 0 ? '+' : '') + value");
                initMax.attr({
                    'description': 'inst-max-stepper-label',
                    'data-mode-numpad': 'NumpadB'
                });
                initMin.attr({
                    'description': 'inst-min-stepper-label',
                    'data-mode-numpad': 'NumpadB'
                });

                //add mode input
                $(`#inst-${mode}-seq-${typeSeq}-cutoff-stepper-max-${i}-spinner, 
                    #inst-${mode}-seq-${typeSeq}-level-stepper-max-${i}-spinner`).children('input').attr({
                    'description': 'inst-max-stepper-label',
                    'data-mode-numpad': 'BasicNumpad'
                });

                $(`#inst-${mode}-seq-${typeSeq}-cutoff-stepper-min-${i}-spinner, 
                    #inst-${mode}-seq-${typeSeq}-level-stepper-min-${i}-spinner`).children('input').attr({
                    'description': 'inst-min-stepper-label',
                    'data-mode-numpad': 'BasicNumpad'
                });

                //init max of stepper
                initMax.parent().trigger('elf-change', [INIT_STEPPER, true]);
            }
        },

        inputReadOnlyStepper(typeSeq) {
            let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
            for (let i = LIST_MIN_MAX.min; i <= LIST_MIN_MAX.max; i++) {
                LIST_TEPPER.forEach(typeStepper => {
                    $(`#inst-${mode}-seq-${typeSeq}-${typeStepper}-stepper-max-${i}-spinner input, #inst-${mode}-seq-${typeSeq}-${typeStepper}-stepper-min-${i}-spinner input`).prop('readOnly', true);
                    $(`#inst-${mode}-seq-${typeSeq}-${typeStepper}-stepper-max-${i}-spinner input, #inst-${mode}-seq-${typeSeq}-${typeStepper}-stepper-min-${i}-spinner input`).css('border', 'none');
                });
            }
        },

        chooseImageCurve() {
            for (let i = LIST_IMG.min; i <= LIST_IMG.max; i++) {
                $(`#popup-curve-img-${i}`).on(pointer.click, function (e) {
                    e.preventDefault();
                    let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
                    let tab = controlSeqInst.getSelectedTab();
                    let numberToggle = updateValueCurve.getNumber();
                    $(`#inst-${mode}-seq-seq${tab}-curve-${numberToggle}-button`).trigger('elf-change', i - 1);
                    $(`#inst-${mode}-seq-seq${tab}-curve-${numberToggle}-button`).trigger('elf-update', i - 1);
                    popup_close('popup-seq');
                });
            }
        },

        eventAssignSeq() {
            this.addEventHoverImageButtonPopup();
            this.chooseImageCurve();
            $('#inst-guitar-seq-tab, #inst-bass-seq-tab').on('elf-changed', function (e, v, updateOnly) {
                let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
                if (v === TAB_MODE_SEQ) {
                    $(`#inst-${mode}-seq-seq1-stepper-frame-child`).show();
                    $(`#inst-${mode}-seq-seq2-stepper-frame-child`).hide();
                } else {
                    $(`#inst-${mode}-seq-seq1-stepper-frame-child`).hide();
                    $(`#inst-${mode}-seq-seq2-stepper-frame-child`).show();
                }
                controlSeqInst.setSelectedTab(v + 1);
                if (!updateOnly) {
                    controlSeqInst.setCurrentTab(v + 1);
                }
            });
            SEQ_TYPE.forEach(typeSeq => {
                for (let i = LIST_MIN_MAX.min; i <= LIST_MIN_MAX.max; i++) {
                    $(`#inst-guitar-seq-${typeSeq}-curve-${i}-popup, #inst-bass-seq-${typeSeq}-curve-${i}-popup`).on(pointer.click, function (e) {
                        e.preventDefault();
                        let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
                        let leftButton = $(`#inst-${mode}-seq-${typeSeq}-curve-${i}-popup`).offset().left;
                        let topButton = $(`#inst-${mode}-seq-${typeSeq}-curve-${i}-popup`).offset().top;

                        let layoutWrapHeight = $('#layout-wrapper').height();
                        let bottomButton = layoutWrapHeight - topButton;
                        $('#popup-seq').css({
                            left: `${leftButton}px`,
                            bottom: `${bottomButton}px`,
                        })
                        updateValueCurve.setNumber(i);
                        popup_open('popup-seq');
                        $('#popup-seq').parent().css('background-color', 'transparent');
                        $('#popup-seq').parent().on('click', function (e) {
                            popup_close('#popup-seq'.slice(1));
                        });
                    });
                }

                for (let i = LIST_MIN_MAX.min; i <= LIST_MIN_MAX.max; i++) {
                    LIST_TEPPER.forEach(typeStepper => {
                        $(`#inst-guitar-seq-${typeSeq}-${typeStepper}-stepper-max-${i}-spinner input, #inst-guitar-seq-${typeSeq}-${typeStepper}-stepper-min-${i}-spinner input,
                               #inst-bass-seq-${typeSeq}-${typeStepper}-stepper-max-${i}-spinner input, #inst-bass-seq-${typeSeq}-${typeStepper}-stepper-min-${i}-spinner input`).dblclick(function (e) {
                            e.preventDefault();
                            numpad(e, $(this));
                        });
                    });
                };

                for (let i = LIST_MIN_MAX.min; i <= LIST_MIN_MAX.max; i++) {
                    LIST_TEPPER.forEach(typeStepper => {
                        $(`#inst-guitar-seq-${typeSeq}-curve-${i}-button, #inst-bass-seq-${typeSeq}-curve-${i}-button`).on('elf-changed elf-update', function (e, v) {
                            let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
                            if (v === VALUE_CURVE_BUTTON) {
                                $(`#inst-${mode}-seq-${typeSeq}-${typeStepper}-stepper-min-${i}-spinner`).addClass("disabled");
                            } else {
                                $(`#inst-${mode}-seq-${typeSeq}-${typeStepper}-stepper-min-${i}-spinner`).removeClass("disabled");
                            }
                        });
                    });
                }

                $(`#inst-guitar-seq-${typeSeq}-loop-dial, #inst-bass-seq-${typeSeq}-loop-dial`).on('elf-changed elf-update', function (e, v) {
                    if (v < LIST_MIN_MAX.min || v > LIST_MIN_MAX.max) {
                        return;
                    }

                    let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
                    for (let i = LIST_MIN_MAX.min; i <= LIST_MIN_MAX.max; i++) {
                        disableStepperAndCurve(`inst-${mode}-seq-${typeSeq}-stepper-${i}`, i <= v);
                        disableStepperAndCurve(`inst-${mode}-seq-${typeSeq}-curve-${i}`, i <= v);
                    }
                });

                $(`#inst-guitar-seq-${typeSeq}-sw-dial, #inst-bass-seq-${typeSeq}-sw-dial`).on('elf-changed elf-update', function (e, v) {
                    let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
                    if (v === SEQ_SW_STATUS.off) {
                        $(`#inst-${mode}-line-${typeSeq}-label`).css('color', 'rgba(255, 255, 255, 0.8)');
                    } else if (v === SEQ_SW_STATUS.on) { 
                        $(`#inst-${mode}-line-${typeSeq}-label`).css('color', '#33D6FF');
                    }
                });
            });
        }
    };

    /* set value current inst and seq */
    window.controlSeqInst = {
        selectedTab: TAB_SEQ.SEQ1,
        tab_inst1: TAB_SEQ.SEQ1,
        tab_inst2: TAB_SEQ.SEQ1,
        tab_inst3: TAB_SEQ.SEQ1,
        currentID: null,
        setSelectedTab(selectedTab) {
            if (selectedTab !== null) {
                this.selectedTab = selectedTab;
            }
        },

        getSelectedTab() {
            return this.selectedTab;
        },

        setCurrentTab(tab) {
            let instId = this.currentID;
            this[`tab_${instId}`] = tab;
        },

        setBlockId(id) {
            if (!INST_KEY.includes(id)) {
                return;
            }
            let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR : KEY_MODE.BASS;
            let listTabTagLabel = $(`#inst-${mode}-seq-tab`);
            let tabChecked = listTabTagLabel.find('label[checked="checked"]')[0];
            let textTab = $(tabChecked).text();
            this.setSelectedTab(textTab === STR_SEQ_TAB ? TAB_SEQ.SEQ1 : TAB_SEQ.SEQ2);
            this.currentID = id;
            let tab = this[`tab_${id}`];
            $(`#inst-${mode}-seq-tab`).trigger('elf-change', [tab - 1, true]);
            $(`#inst-${mode}-seq-tab`).trigger('elf-update', tab - 1);
        },

        resetTab() {
            this.tab_inst1 = TAB_SEQ.SEQ1;
            this.tab_inst2 = TAB_SEQ.SEQ1;
            this.tab_inst3 = TAB_SEQ.SEQ1;  
        },
    };

    function disableStepperAndCurve(id, disabled) {
        $('#' + id + '-mask').css('display', disabled ? 'none' : '');
    };
})();