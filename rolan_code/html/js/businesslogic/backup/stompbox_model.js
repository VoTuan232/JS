
function StompBoxModel() {
    this.stompBoxParamSets = stompBoxSettingController.stompBox.paramSetStompBox;
    this.stompBoxParamSetsBass = stompBoxSettingController.stompBox.paramSetStompBoxBass;
}

StompBoxModel.prototype = {
    /** 
     * VARIATION(STOMPBOX) DATA BACKUP
     * {
     *   "variation": { variation },
     *   "formatRev": librarianFormatRev,
     *   "device": "SY-1000@mode"
     * } 
     */
    toJSON: function () {
        let stompBoxParam = APP_MODE === MODE.GUITAR ? this.stompBoxParamSets : this.stompBoxParamSetsBass;
        let stompBox = {};
        stompBox['variation'] = {};
        for (let prop in stompBoxParam) {
            if (stompBoxParam.hasOwnProperty(prop)) {
                stompBox.variation[prop] = stompBoxParam[prop];
            }
        }
        stompBox['formatRev'] = stompBoxSettingController.formatRev;
        stompBox['device'] = APP_MODE === MODE.GUITAR ? ProductSetting.name + '_' + ProductSetting.guitarMode : ProductSetting.name + '_' + ProductSetting.bassMode;
        let json = JSON.stringify(stompBox);
        return json;
    },
    load: function (json) {
        let stompBoxParam = APP_MODE === MODE.GUITAR ? this.stompBoxParamSets : this.stompBoxParamSetsBass;
        let data = JSON.parse(json);
        if (data.hasOwnProperty('formatRev') && data.hasOwnProperty('device') && data.hasOwnProperty('variation')) {
            let nameDevice = data.device.replace('_' + ProductSetting.guitarMode, '').replace('_' + ProductSetting.bassMode, '');
            if (nameDevice !== ProductSetting.name) {
                throw new Error('this file is unsupported');
            }
            _checkStompBoxDataBackupRevision(data);
            
            let dataVariation = data.variation;
            for (let prop in dataVariation) {
                let subVariation = dataVariation[prop];
                    for (let i = 0, length = subVariation.length; i < length; i++) {
                        stompBoxParam[prop][i] = subVariation[i]
                    }
            }
        } else {
            throw new Error('this file is unsupported');
        }
    }
};

function _checkStompBoxDataBackupRevision(data) {
    let loadFileRev = data.formatRev - 0;
    let appRev = stompBoxSettingController.formatRev - 0;
    if (loadFileRev > appRev) {
        // TODO:
        return;
    } else if (loadFileRev < appRev) {
        // TODO:
        return;
    } else {
        return;
    }
}
