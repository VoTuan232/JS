
//
//	tone_central_service.js
//
//	Copyright 2020 Roland Corporation. All rights reserved.
//
(function () {
    const TC_SERVICE_CONST = Object.freeze({
        YOUTUBE_API: "https://www.youtube.com/iframe_api",
        SC_API: "https://w.soundcloud.com/player/api.js",
        TIMEOUT_MSEC: 15000
    });

    window.ToneCentralService = {
        ytApiSuccess: false,
        scApiSuccess: false,
        tcLivesetObj: null,
        tcYoutubePlayer: null,
        tcSCPlayer: null,
        checkTslFile: function (tslObj) {
            if (typeof tslObj !== 'object') {
                return false;
            }
            if (tslObj.data[0] !== undefined && tslObj.name !== undefined && tslObj.data !== undefined) {
                var isValid = true;
                for (var i = 0; i < tslObj.data[0].length; i++) {
                    if (tslObj.data[0][i].memo === undefined && tslObj.data[0][i].paramSet === undefined) {
                        isValid = false;
                    }
                }
                return isValid;
            } else {
                return false;
            }
        },
        getUrl: function () {
            return urlDefinition;
        },
        tcLoadLivesetList: function () {
            let livesetList = null;
            processingController.start(function (index) {
                let hasCanceled = false;
                let url = ToneCentralService.getUrl();
                if (url.BTC_DOMAIN === '' || url.BTC_DATA_API === '') {
                    urlDefinition.fetchUrlDefinition(function () {
                        if (hasCanceled) {
                            return;
                        }
                        getLivesetList(
                            function () {
                                processingController.finish(index);
                            },
                            function () {
                                processingController.finish(index);
                                ERROR_DIALOG_MAP.noInternetAccess.open();
                            }
                        );
                    });
                } else {
                    getLivesetList(
                        function () {
                            processingController.finish(index);
                        },
                        function () {
                            processingController.finish(index);
                            ERROR_DIALOG_MAP.noInternetAccess.open();
                        }
                    );
                }
                return function () {
                    hasCanceled = true;
                };
            });
            function getLivesetList(completeFunc, errorFunc) {
                $.ajax({
                    url: urlDefinition.BTC_DOMAIN + urlDefinition.BTC_DATA_API,
                    type: 'GET',
                    cache: false,
                    timeout: TC_SERVICE_CONST.TIMEOUT_MSEC,
                    success: function (data) {
                        if (data.items !== undefined) {
                            livesetList = data.items;
                        } else {
                            livesetList = null;
                        }
                    },
                    error: function (e) {
                        livesetList = null;
                        console.log("livesetList = null @ getLivesetList");
                    },
                    complete: function (r) {
                        if (livesetList !== null) {
                            completeFunc();
                            ToneCentralUiService.tcDrawLivesetList(livesetList);
                        } else {
                            errorFunc();
                        }
                    }
                });
            }
        },
        tcLoadLivesetInfo: function (liveset) {
            processingController.start(function (index) {
                let hasCanceled = false;
                let url = ToneCentralService.getUrl();
                if (url.SC_DOMAIN === '' || url.SC_RESOLVE === '' || url.SC_CLIENT_ID === '' || url.BTC_LIVESET_FILE === '') {
                    urlDefinition.fetchUrlDefinition(function () {
                        if (hasCanceled) {
                            return;
                        }
                        ToneCentralService.getLivesetInfo(
                            liveset,
                            function () {
                                processingController.finish(index);
                            },
                            function () {
                                processingController.finish(index);
                                ERROR_DIALOG_MAP.noInternetAccess.open();
                                console.log("ERROR_DIALOG_MAP.noInternetAccess.open();");
                            },
                            function () {
                                processingController.finish(index);
                                APP_MODE === MODE.GUITAR ? ERROR_DIALOG_MAP.unsupportedDataGuitar.open() : ERROR_DIALOG_MAP.unsupportedDataBass.open();
                                console.log("ERROR_DIALOG_MAP.unsupportedData.open();");
                            }
                        );
                    });
                } else {
                    ToneCentralService.getLivesetInfo(
                        liveset,
                        function () {
                            processingController.finish(index);
                        },
                        function () {
                            processingController.finish(index);
                            ERROR_DIALOG_MAP.noInternetAccess.open();
                            console.log("ERROR_DIALOG_MAP.noInternetAccess.open();");
                        },
                        function () {
                            processingController.finish(index);
                            APP_MODE === MODE.GUITAR ? ERROR_DIALOG_MAP.unsupportedDataGuitar.open() : ERROR_DIALOG_MAP.unsupportedDataBass.open();
                            console.log("ERROR_DIALOG_MAP.unsupportedData.open(); @@@@@"); // MEMO_20191217 : no SoundCloud link
                        }
                    );
                }
                return function () {
                    hasCanceled = true;
                };
            });
        },
        getLivesetInfo: function (liveset, completeFunc, errorFunc, unSupportError) {
            var scData = null;
            $.ajax({
                url: urlDefinition.SC_DOMAIN + urlDefinition.SC_RESOLVE + '?client_id=' + urlDefinition.SC_CLIENT_ID + '&url=' + liveset.soundcloudUrl,
                type: 'GET',
                cache: false,
                timeout: TC_SERVICE_CONST.TIMEOUT_MSEC,
                success: function (data) {
                    scData = data;
                },
                error: function (e) {
                    scData = null;
                    console.log("scData = null; @ getLivesetInfo @@@@@"); // MEMO_20191217 : no SoundCloud link
                },
                complete: function (response) {
                    var livesetDetail = null;
                    $.ajax({
                        url: urlDefinition.BTC_DOMAIN + urlDefinition.BTC_LIVESET_FILE + liveset.basename + '.tsl',
                        type: 'GET',
                        cache: false,
                        timeout: TC_SERVICE_CONST.TIMEOUT_MSEC,
                        success: function (livesetItem) {
                            livesetDetail = livesetItem;
                        },
                        error: function (error) {
                            livesetDetail = null;
                            console.log("livesetList = null @ getLivesetInfo");
                        },
                        complete: function (complete) {
                            if (livesetDetail !== null) {
                                var tslObj = JSON.parse(livesetDetail);
                                var checkResult = ToneCentralService.checkTslFile(tslObj);
                                if (checkResult !== false) {
                                    if (!tslObj.hasOwnProperty('device') || !((APP_MODE === MODE.GUITAR && tslObj.device.includes(ProductSetting.guitarMode)) || (APP_MODE === MODE.BASS && tslObj.device.includes(ProductSetting.bassMode)))) {
                                        unSupportError();
                                        return;
                                    }

                                    let nameDevice = tslObj.device.replace('_' + ProductSetting.guitarMode, '').replace('_' + ProductSetting.bassMode, '');

                                    if (nameDevice !== ProductSetting.name) {
                                        unSupportError();
                                        return;
                                    }
                                    ToneCentralService.tcLivesetObj = tslObj;
                                    completeFunc();
                                    ToneCentralUiService.tcDrawLivesetInfo(
                                        liveset, ToneCentralService.tcLivesetObj, scData
                                    );
                                    ToneCentralUiService.assignDomEvent();
                                } else {
                                    errorFunc();
                                }
                            } else {
                                errorFunc();
                            }
                        }
                    });
                }
            });
        }
    };

    window.tcLoadYoutubeApi = function () {
        $.ajax({
            url: TC_SERVICE_CONST.YOUTUBE_API,
            type: 'GET',
            timeout: TC_SERVICE_CONST.TIMEOUT_MSEC,
            success: function (s) {
            },
            error: function (e) {
                ToneCentralService.ytApiSuccess = false;
                console.log("ToneCentralService.ytApiSuccess = false; @ tcLoadYoutubeApi");
            }
        });
    };

    window.tcLoadSCApi = function () {
        $.ajax({
            url: TC_SERVICE_CONST.SC_API,
            type: 'GET',
            timeout: TC_SERVICE_CONST.TIMEOUT_MSEC,
            success: function (s) {
                ToneCentralService.scApiSuccess = true;
            },
            error: function (e) {
                ToneCentralService.scApiSuccess = false;
                console.log("ToneCentralService.scApiSuccess = false; @ tcLoadSCApi");
            }
        });
    };
}());