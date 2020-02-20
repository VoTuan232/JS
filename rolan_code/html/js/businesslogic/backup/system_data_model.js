/**
 *
 *  SYSTEM DATA BACKUP
 * 
 */

function SystemDataModel() {
    this.systemDataParamSets = systemDataSettingController.systemData.paramSetsSystem;
    this.systemDataParamSetsBass = systemDataSettingController.systemData.paramSetsSystemBass;
}

SystemDataModel.prototype = {
    /** 
     * SYSTEM DATA BACKUP
     * {
     *   "system": { System },
     *   "formatRev": librarianFormatRev,
     *   "device": "SY-1000_mode"
     * } 
     */
    toJSON: function () {
        let systemDataParam = APP_MODE === MODE.GUITAR ? this.systemDataParamSets : this.systemDataParamSetsBass;
        let systemData = {};
        systemData['system'] = {};
        for (let prop in systemDataParam) {
            if (systemDataParam.hasOwnProperty(prop)) {
                systemData.system[prop] = systemDataParam[prop];
            }
        }
        systemData['formatRev'] = systemDataSettingController.formatRev;
        systemData['device'] = APP_MODE === MODE.GUITAR ? ProductSetting.name + '_' + ProductSetting.guitarMode : ProductSetting.name + '_' + ProductSetting.bassMode;
        let json = JSON.stringify(systemData);
        return json;
    },
    load: function (json) {
        let systemDataParam = APP_MODE === MODE.GUITAR ? this.systemDataParamSets : this.systemDataParamSetsBass;
        let data = JSON.parse(json);
        if (data.hasOwnProperty('formatRev') && data.hasOwnProperty('device') && data.hasOwnProperty('system')) {
            let nameDevice = data.device.replace('_' + ProductSetting.guitarMode, '').replace('_' + ProductSetting.bassMode, '');
            if (nameDevice !== ProductSetting.name) {
                throw new Error('this file is unsupported');
            }
            _checkSystemDataBackupRevision(data);
            
            let dataSystem = data.system;
            for (let prop in dataSystem) {
                let system = dataSystem[prop];
                    for (let i = 0, length = system.length; i < length; i++) {
                        systemDataParam[prop][i] = system[i]
                    }
            }
        } else {
            throw new Error('this file is unsupported');
        }
    }
};

function _checkSystemDataBackupRevision(data) {
    let loadFileRev = data.formatRev - 0;
    let appRev = systemDataSettingController.formatRev - 0;
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

