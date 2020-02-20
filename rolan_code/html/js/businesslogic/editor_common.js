(function () {
    /* global function */
    window.editorCommonController = {
        /** 
         * public function
        */
        loadPage() {
            if (APP_MODE === MODE.GUITAR) {
                $('#label-mode-guitar').show();
                $('#label-mode-bass').hide();

                $('#top-header-menu-bass-btn').hide();
                $('#top-header-menu-btn').show();

                $('#top-header-tuner-bass-btn').hide();
                $('#top-header-tuner-btn').show();

                this.changeDetailPageIdsGuitar();
            } else {
                $('#label-mode-guitar').hide();
                $('#label-mode-bass').show();

                $('#top-header-menu-btn').hide();
                $('#top-header-menu-bass-btn').show();

                $('#top-header-tuner-btn').hide();
                $('#top-header-tuner-bass-btn').show();

                this.changeDetailPageIdsBass();
            };
        },

        /** 
         * function begin load 
         * public function
        */
        editorLoad(value) {
            if (value !== undefined) {
                let tempMode = APP_MODE;
                APP_MODE = value === MODE.BASS ? MODE.BASS : MODE.GUITAR;
                if (tempMode !== value) {
                    // define URL
                    urlDefinition.fetchUrlDefinition(function () {
                        userLogManager.post();
                        statusLogManager.post(0);
                        util.checkAppVersion();
                    });
                    settingAssignConst();
                    ctlControlFunctionController.ctlExpControlFunction();
                    initializeAssignPage();

                    initializeKnob();
                    menuUsbSettingController.offlineModeUsbSetting();
                    menuInputSettingController();

                    mainSubFunctionController.initLREffector();
                    seqFunctionController.init();
                }
            }
            this.loadPage();
            ctlExpController.load();
        },

        changeDetailPageIdsBass() {
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.master] = new ChainDetailPage('#master-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst1] = new ChainDetailPage('#inst-wrapper-bass', 0, ['#inst-content-replacer-bass', '#inst-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst2] = new ChainDetailPage('#inst-wrapper-bass', 1, ['#inst-content-replacer-bass', '#inst-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst3] = new ChainDetailPage('#inst-wrapper-bass', 2, ['#inst-content-replacer-bass', '#inst-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.normal] = new ChainDetailPage('#normal-input-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx1] = new ChainDetailPage('#fx-wrapper-bass', 0, ['#fx-content-replacer-bass', '#fx-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx2] = new ChainDetailPage('#fx-wrapper-bass', 1, ['#fx-content-replacer-bass', '#fx-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx3] = new ChainDetailPage('#fx-wrapper-bass', 2, ['#fx-content-replacer-bass', '#fx-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer1] = new ChainDetailPage('#balancer-1-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer2] = new ChainDetailPage('#balancer-2-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer3] = new ChainDetailPage('#balancer-3-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.sendReturn] = new ChainDetailPage('#send-return-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.equalizer1] = new ChainDetailPage('#eq-wrapper-bass', 0, ['#eq-content-replacer-bass', '#eq-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.equalizer2] = new ChainDetailPage('#eq-wrapper-bass', 1, ['#eq-content-replacer-bass', '#eq-title-switcher-bass']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.divider] = new ChainDetailPage('#divider-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.mixer] = new ChainDetailPage('#mixer-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.footVolume1] = new ChainDetailPage('#foot-volume-1-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.footVolume2] = new ChainDetailPage('#foot-volume-2-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.delay1] = new ChainDetailPage('#delay-1-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.delay2] = new ChainDetailPage('#delay-2-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.masterDelay] = new ChainDetailPage('#master-delay-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.reverb] = new ChainDetailPage('#reverb-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.distortion] = new ChainDetailPage('#distortion-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.compressor] = new ChainDetailPage('#compressor-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.airdPreamp] = new ChainDetailPage('#aird-preamp-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.noiseSuppressor] = new ChainDetailPage('#noise-sp-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.chorus] = new ChainDetailPage('#chorus-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainLR] = new ChainDetailPage('#effect-setting-main-out-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainL] = new ChainDetailPage('#effect-setting-main-out-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainR] = new ChainDetailPage('#effect-setting-main-out-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubLR] = new ChainDetailPage('#effect-setting-sub-out-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubL] = new ChainDetailPage('#effect-setting-sub-out-bass');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubR] = new ChainDetailPage('#effect-setting-sub-out-bass');
        },

        changeDetailPageIdsGuitar() {
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.master] = new ChainDetailPage('#master');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst1] = new ChainDetailPage('#inst-wrapper', 0, ['#inst-content-replacer', '#inst-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst2] = new ChainDetailPage('#inst-wrapper', 1, ['#inst-content-replacer', '#inst-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst3] = new ChainDetailPage('#inst-wrapper', 2, ['#inst-content-replacer', '#inst-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.normal] = new ChainDetailPage('#normal-test');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx1] = new ChainDetailPage('#fx-wrapper', 0, ['#fx-content-replacer', '#fx-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx2] = new ChainDetailPage('#fx-wrapper', 1, ['#fx-content-replacer', '#fx-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx3] = new ChainDetailPage('#fx-wrapper', 2, ['#fx-content-replacer', '#fx-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer1] = new ChainDetailPage('#balancer-1');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer2] = new ChainDetailPage('#balancer-2');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer3] = new ChainDetailPage('#balancer-3');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.sendReturn] = new ChainDetailPage('#send-return');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.equalizer1] = new ChainDetailPage('#eq-wrapper', 0, ['#eq-content-replacer', '#eq-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.equalizer2] = new ChainDetailPage('#eq-wrapper', 1, ['#eq-content-replacer', '#eq-title-switcher']);
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.divider] = new ChainDetailPage('#divider');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.mixer] = new ChainDetailPage('#mixer');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.footVolume1] = new ChainDetailPage('#foot-volume-1');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.footVolume2] = new ChainDetailPage('#foot-volume-2');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.delay1] = new ChainDetailPage('#delay-1');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.delay2] = new ChainDetailPage('#delay-2');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.masterDelay] = new ChainDetailPage('#master-delay');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.reverb] = new ChainDetailPage('#reverb');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.distortion] = new ChainDetailPage('#distortion');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.compressor] = new ChainDetailPage('#compressor');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.airdPreamp] = new ChainDetailPage('#aird-preamp');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.noiseSuppressor] = new ChainDetailPage('#noise-sp');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.chorus] = new ChainDetailPage('#chorus');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainLR] = new ChainDetailPage('#effect-setting-main-out');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainL] = new ChainDetailPage('#effect-setting-main-out');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainR] = new ChainDetailPage('#effect-setting-main-out');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubLR] = new ChainDetailPage('#effect-setting-sub-out');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubL] = new ChainDetailPage('#effect-setting-sub-out');
            CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubR] = new ChainDetailPage('#effect-setting-sub-out');
        },

        offLineMode() {
            editorCommonController.editorLoad();
            // offline
            chainModelController.controlCursorStart();
        }
    };

    window.editorLoadEvent = function () {
        effectChainController.defaultSwitch();

        // ctl exp
        settingAssignConst();
        ctlExpController.load();
        ctlExpController.eventCtlExp();

        // event assign
        initializeAssignPage();
        assignAssignPageEvent();
        ctlExpAssignController.offLineMode();

        ctlControlFunctionController.ctlExpControlFunction();
        ctlControlFunctionController.addListenerEventChangedShowMode();

        ctlExpAssignController.ctlExpAssign();

        ctlExpPatchToMidiController.eventPatchToMidi();

        ctlExpLedColorController.ctlExpLedColor();
        ctlExpLedColorController.eventCtlExpColor();

        ctlExpGuitarBassMidiController.ctlExpGuitarBass();

        effectChainController.assignEffectEvents();

        // variation
        stompboxController.initStompboxMap();
        stompboxController.assignStompboxEvents();

        //tuner
        initializeTuner();
        assignTunerEvents();

        // menu
        initializeKnob();
        assignKnobEvents();

        menuUsbSettingController.offlineModeUsbSetting();
        menuUsbSettingController.usbSettingEvents();

        menuInputSettingController();
        menuInputSetting.menuInputSettingEvents();

        menuPlayOptionController.minMaxBankEvent();
        assignProgramMapEvents();
        assignMenuPageEvents();
        assignRunningModeEvents();

        instGuitarController.initialize();
        instBassController.initialize();
        instGuitarController.eventsInstGuitar();
        instBassController.eventsInstBass();

        // editor
        editorFx();
        initControllerEditorAmp();
        eventAmpController();

        initControllerEditorReverb();

        initControllerEditorMstDelay();
        eventMstDelay();

        editorChorusController();
        eventChorus();

        initControllerEditorSendReturn();
        seqFunctionController.init();
        seqFunctionController.eventAssignSeq();

        mainMasterFunctionController.disabledSelectMst();
        mainMasterFunctionController.eventMaster();

        mainSubFunctionController.initLREffector();
        mainSubFunctionController.mainSubLREffectEvents();

        editorDividerMixerController.eventDividerSelectListMode();
    };
})();
