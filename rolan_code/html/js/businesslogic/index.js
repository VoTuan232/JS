//
//	index.js
//
//	Copyright 2020 Roland Corporation. All rights reserved.
//
$(function () {
    // define URL
    urlDefinition.fetchUrlDefinition(function () {
        userLogManager.post();
        statusLogManager.post(0);
        util.checkAppVersion();
    });

    customizeUIParts();

    initializeChain();
    initializeMenuPage();
    initializePatch();
    initializeOtherDOM();

    assignChainEvent();
    assignOtherEvents();
    assignPatchEvents();

    editorLoadEvent();

    //btc
    eventsToneCentral();
    tcLoadYoutubeApi();
    tcLoadSCApi();

    // librarian
    assignCreateLivesetDialog();
    assignOverwritePatchDialog();
    initLibrarian();

    // start observing midi event
    $event.start();

    // init MIDI
    startMIDIObservation();
    assignMIDIEvent();
    instGuitarController.loadPageInitInst();

    let isOffLineMode = midiConnectionController.startInitSetting();

    if (isOffLineMode) {
        editorCommonController.offLineMode();
    }

    setTimeout(function () {
        btsDOMController.closeSplashPage();
    }, 1500);

    // indicatorのストップ
    $native.app.control('indicator stop');
});
