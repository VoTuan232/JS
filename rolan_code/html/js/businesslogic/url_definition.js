//
//	url_definition.js
//
//	Copyright 2020 Roland Corporation. All rights reserved.
//
let URLDefinition = function () {
    this.isProd = ProductSetting.releaseMode === 1;
    this.MODEL = ProductSetting.name;
    this.DEFINITION_URL = '';
    // this.DEFINITION_URL = 'http://api.roland.com/app/btc/define/gt-1000.json';
    // BTC
    this.BTC_DOMAIN = '';
    this.BTC_DATA_API = '';
    this.BTC_LIVESET_FILE = '';

    // Roland
    this.API_DOMAIN = this.isProd ? 'http://api.roland.com' : 'http://dev-api.roland.com';
    this.API_USER = '';
    this.API_STATUS_LOGS = '';
    this.API_UPDATE_LOGS = '';
    this.API_PATCH_USE_LOGS = '';
    this.API_LIVESET_ADD_LOGS = '';
    this.API_LIVESET_LOGS = '';
    this.API_YOUTUBE_LOGS = '';
    this.API_SOUND_CLOUD_LOGS = '';

    // Sound Cloud
    this.SC_DOMAIN = '';
    this.SC_CLIENT_ID = '';
    this.SC_RESOLVE = '';

    // Youtube
    this.YOUTUBE_URL = '';

    // マニュアル
    this.OWNERS_MANUALS_JA = '';
    this.OWNERS_MANUALS_EN = '';

    // ドライバーアップデート
    this.UPDATES_DRIVERS_JA = '';
    this.UPDATES_DRIVERS_EN = '';
};

URLDefinition.prototype.fetchUrlDefinition = function (completeFunc) {
    let self = this;
    let result = { urlObj: null, isSuccess: false };
    let isOnLine = navigator.onLine;
    let typeMode = APP_MODE === MODE.BASS ? 'bass' : 'guitar';
    
    this.API_DOMAIN     = (ProductSetting.releaseMode === 1) ? 'http://api.roland.com'                                             : 'http://dev-api.roland.com';
    this.DEFINITION_URL = (ProductSetting.releaseMode === 1) ? `http://api.roland.com/app/btc/define/sy-1000_${typeMode}mode.json` : `http://dev-api.roland.com/app/btc/define/sy-1000_${typeMode}mode.json`;

    $.ajax({
        url: this.DEFINITION_URL,
        type: 'GET',
        success: function (obj) {
            result.urlObj = obj;
            result.isSuccess = true;
        },
        error: function () {
            result.urlObj = null;
            result.isSuccess = false;
            console.log("result.urlObj = null; result.isSuccess = false; @ fetchUrlDefinition");
        },
        complete: function () {
            let urlObj = {};
            if (result.urlObj !== null && result.isSuccess && isOnLine) {
                urlObj = result.urlObj;
            } else {
                urlObj = {};
            }
            self._setUrlDefinition(urlObj);
            self._updateProductSettingManual();
            if (typeof completeFunc === 'function') {
                completeFunc();
            }
        }
    });
};

URLDefinition.prototype._setUrlDefinition = function (urlObj) {
    let btcObj = urlObj.btc;
    let apiObj = urlObj.api;
    let externalServiceObj = urlObj.external_service;
    let supportObj = urlObj.support;

    if (btcObj !== undefined) {
        this.BTC_DOMAIN = this.convertUndefined(btcObj.domain);
        this.BTC_LIVESET_FILE = this.convertUndefined(btcObj.liveset_file);
        this.BTC_DATA_API = this.convertUndefined(btcObj.dataapi);
    }
    if (apiObj !== undefined) {
        this.API_DOMAIN = this.convertUndefined(apiObj.domain);
        this.API_USER = this.convertUndefined(apiObj.user);
        this.API_STATUS_LOGS = this.convertUndefined(apiObj.statuslogs);
        this.API_UPDATE_LOGS = this.convertUndefined(apiObj.updatelogs);
        this.API_PATCH_USE_LOGS = this.convertUndefined(apiObj.patchuselogs);
        this.API_LIVESET_ADD_LOGS = this.convertUndefined(apiObj.livesetaddlogs);
        this.API_LIVESET_LOGS = this.convertUndefined(apiObj.livesetlogs);
        this.API_YOUTUBE_LOGS = this.convertUndefined(apiObj.youtubelogs);
        this.API_SOUND_CLOUD_LOGS = this.convertUndefined(apiObj.soundcloudlogs);
    }
    if (externalServiceObj !== undefined) {
        if (externalServiceObj.soundcloud !== undefined) {
            let soundCloudObj = externalServiceObj.soundcloud;
            this.SC_DOMAIN = this.convertUndefined(soundCloudObj.domain);
            this.SC_CLIENT_ID = this.convertUndefined(soundCloudObj.client_id);
            this.SC_RESOLVE = this.convertUndefined(soundCloudObj.resolve);
        }
        if (externalServiceObj.youtube !== undefined) {
            let youtubeObj = externalServiceObj.youtube;
            this.YOUTUBE_URL = this.convertUndefined(youtubeObj.url);
        }
    }
    if (supportObj !== undefined) {
        if (supportObj.owners_manuals !== undefined) {
            let manuals = supportObj.owners_manuals;
            this.OWNERS_MANUALS_JA = this.convertUndefined(manuals.jp);
            this.OWNERS_MANUALS_EN = this.convertUndefined(manuals.en);
        }
        if (supportObj.updates_drivers !== undefined) {
            let updatesDrivers = supportObj.updates_drivers;
            this.UPDATES_DRIVERS_JA = this.convertUndefined(updatesDrivers.jp);
            this.UPDATES_DRIVERS_EN = this.convertUndefined(updatesDrivers.en);
        }
    }
};

URLDefinition.prototype._updateProductSettingManual = function () {
    ProductSetting.manual.ja = this.OWNERS_MANUALS_JA;
    ProductSetting.manual.en = this.OWNERS_MANUALS_EN;
};

URLDefinition.prototype.convertUndefined = function (str) {
    return str === undefined ? '' : str;
};

(function () {
    window.urlDefinition = new URLDefinition();
})();
