/* global
programMapModelController programMapDOMController programMapMIDIController
ADDRESS_CONST
*/

(function () {
    const PATCH_STR = [
        'U01-1', 'U01-2', 'U01-3', 'U01-4', 'U02-1', 'U02-2', 'U02-3', 'U02-4', 'U03-1', 'U03-2', 'U03-3', 'U03-4', 'U04-1', 'U04-2', 'U04-3', 'U04-4', 'U05-1', 'U05-2', 'U05-3', 'U05-4', 'U06-1', 'U06-2', 'U06-3', 'U06-4', 'U07-1', 'U07-2', 'U07-3', 'U07-4', 'U08-1', 'U08-2', 'U08-3', 'U08-4', 'U09-1', 'U09-2', 'U09-3', 'U09-4', 'U10-1', 'U10-2', 'U10-3', 'U10-4', 'U11-1', 'U11-2', 'U11-3', 'U11-4', 'U12-1', 'U12-2', 'U12-3', 'U12-4', 'U13-1', 'U13-2', 'U13-3', 'U13-4', 'U14-1', 'U14-2', 'U14-3', 'U14-4', 'U15-1', 'U15-2', 'U15-3', 'U15-4', 'U16-1', 'U16-2', 'U16-3', 'U16-4', 'U17-1', 'U17-2', 'U17-3', 'U17-4', 'U18-1', 'U18-2', 'U18-3', 'U18-4', 'U19-1', 'U19-2', 'U19-3', 'U19-4', 'U20-1', 'U20-2', 'U20-3', 'U20-4', 'U21-1', 'U21-2', 'U21-3', 'U21-4', 'U22-1', 'U22-2', 'U22-3', 'U22-4', 'U23-1', 'U23-2', 'U23-3', 'U23-4', 'U24-1', 'U24-2', 'U24-3', 'U24-4', 'U25-1', 'U25-2', 'U25-3', 'U25-4', 'U26-1', 'U26-2', 'U26-3', 'U26-4', 'U27-1', 'U27-2', 'U27-3', 'U27-4', 'U28-1', 'U28-2', 'U28-3', 'U28-4', 'U29-1', 'U29-2', 'U29-3', 'U29-4', 'U30-1', 'U30-2', 'U30-3', 'U30-4', 'U31-1', 'U31-2', 'U31-3', 'U31-4', 'U32-1', 'U32-2', 'U32-3', 'U32-4', 'U33-1', 'U33-2', 'U33-3', 'U33-4', 'U34-1', 'U34-2', 'U34-3', 'U34-4', 'U35-1', 'U35-2', 'U35-3', 'U35-4', 'U36-1', 'U36-2', 'U36-3', 'U36-4', 'U37-1', 'U37-2', 'U37-3', 'U37-4', 'U38-1', 'U38-2', 'U38-3', 'U38-4', 'U39-1', 'U39-2', 'U39-3', 'U39-4', 'U40-1', 'U40-2', 'U40-3', 'U40-4', 'U41-1', 'U41-2', 'U41-3', 'U41-4', 'U42-1', 'U42-2', 'U42-3', 'U42-4', 'U43-1', 'U43-2', 'U43-3', 'U43-4', 'U44-1', 'U44-2', 'U44-3', 'U44-4', 'U45-1', 'U45-2', 'U45-3', 'U45-4', 'U46-1', 'U46-2', 'U46-3', 'U46-4', 'U47-1', 'U47-2', 'U47-3', 'U47-4', 'U48-1', 'U48-2', 'U48-3', 'U48-4', 'U49-1', 'U49-2', 'U49-3', 'U49-4', 'U50-1', 'U50-2', 'U50-3', 'U50-4',
        'P01-1', 'P01-2', 'P01-3', 'P01-4', 'P02-1', 'P02-2', 'P02-3', 'P02-4', 'P03-1', 'P03-2', 'P03-3', 'P03-4', 'P04-1', 'P04-2', 'P04-3', 'P04-4', 'P05-1', 'P05-2', 'P05-3', 'P05-4', 'P06-1', 'P06-2', 'P06-3', 'P06-4', 'P07-1', 'P07-2', 'P07-3', 'P07-4', 'P08-1', 'P08-2', 'P08-3', 'P08-4', 'P09-1', 'P09-2', 'P09-3', 'P09-4', 'P10-1', 'P10-2', 'P10-3', 'P10-4', 'P11-1', 'P11-2', 'P11-3', 'P11-4', 'P12-1', 'P12-2', 'P12-3', 'P12-4', 'P13-1', 'P13-2', 'P13-3', 'P13-4', 'P14-1', 'P14-2', 'P14-3', 'P14-4', 'P15-1', 'P15-2', 'P15-3', 'P15-4', 'P16-1', 'P16-2', 'P16-3', 'P16-4', 'P17-1', 'P17-2', 'P17-3', 'P17-4', 'P18-1', 'P18-2', 'P18-3', 'P18-4', 'P19-1', 'P19-2', 'P19-3', 'P19-4', 'P20-1', 'P20-2', 'P20-3', 'P20-4', 'P21-1', 'P21-2', 'P21-3', 'P21-4', 'P22-1', 'P22-2', 'P22-3', 'P22-4', 'P23-1', 'P23-2', 'P23-3', 'P23-4', 'P24-1', 'P24-2', 'P24-3', 'P24-4', 'P25-1', 'P25-2', 'P25-3', 'P25-4', 'P26-1', 'P26-2', 'P26-3', 'P26-4', 'P27-1', 'P27-2', 'P27-3', 'P27-4', 'P28-1', 'P28-2', 'P28-3', 'P28-4', 'P29-1', 'P29-2', 'P29-3', 'P29-4', 'P30-1', 'P30-2', 'P30-3', 'P30-4', 'P31-1', 'P31-2', 'P31-3', 'P31-4', 'P32-1', 'P32-2', 'P32-3', 'P32-4', 'P33-1', 'P33-2', 'P33-3', 'P33-4', 'P34-1', 'P34-2', 'P34-3', 'P34-4', 'P35-1', 'P35-2', 'P35-3', 'P35-4', 'P36-1', 'P36-2', 'P36-3', 'P36-4', 'P37-1', 'P37-2', 'P37-3', 'P37-4', 'P38-1', 'P38-2', 'P38-3', 'P38-4', 'P39-1', 'P39-2', 'P39-3', 'P39-4', 'P40-1', 'P40-2', 'P40-3', 'P40-4', 'P41-1', 'P41-2', 'P41-3', 'P41-4', 'P42-1', 'P42-2', 'P42-3', 'P42-4', 'P43-1', 'P43-2', 'P43-3', 'P43-4', 'P44-1', 'P44-2', 'P44-3', 'P44-4', 'P45-1', 'P45-2', 'P45-3', 'P45-4', 'P46-1', 'P46-2', 'P46-3', 'P46-4', 'P47-1', 'P47-2', 'P47-3', 'P47-4', 'P48-1', 'P48-2', 'P48-3', 'P48-4', 'P49-1', 'P49-2', 'P49-3', 'P49-4', 'P50-1', 'P50-2', 'P50-3', 'P50-4',
    ];
    const N_BANK = 4;
    const N_PC = 128;
    const KEY_MODE_BASS = '-bass';
    
    let patchValues = [[], [], [], []];

    let programMapModelController = {
        selectedBank: 0,
        selectedPC: 0,
        selectBank: function (num) {
            this.selectedBank = num;
        },
        selectPC: function (num) {
            this.selectedPC = num;
        },
        updatePatchValue: function (bankNum, pcNum, value) {
            patchValues[bankNum][pcNum] = value;
        },
        getSelectedBankNum: function () {
            return this.selectedBank;
        },
        getSelectedPC: function () {
            return this.selectedPC;
        },
        getPatchValue: function (bankNum, pcNum) {
            return patchValues[bankNum][pcNum];
        }
    };

    let programMapDOMController = {
        updateLabel: function (bankNum, pcNum, value) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            $(`#bank${typeMode}-` + (bankNum + 1) + '-' + (pcNum + 1)).text(PATCH_STR[value]);
        },
        updatePatchSelect: function (bankNum, pcNum) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let patchValue = programMapModelController.getPatchValue(bankNum, pcNum);
            let patchDOM = $(`#program-map${typeMode}-patch`);
            patchDOM.find('p').text(PATCH_STR[patchValue]);
            patchDOM
                .find('div').find('a').removeAttr('checked')
                .eq(patchValue).attr('checked', 'checked');
        }
    };

    function loadPatchValues() {
        for (let i = 0; i < N_BANK; i++) {
            for (let j = 0; j < N_PC; j++) {
                patchValues[i].push(0);
            }
        }
    };

    window.programMapMIDIController = {
        receivePatchNum: function (bankNum, pcNum, val) {
            programMapModelController.updatePatchValue(bankNum, pcNum, val);
            programMapDOMController.updateLabel(bankNum, pcNum, val);
            if (programMapModelController.getSelectedBankNum() === bankNum && programMapModelController.getSelectedPC() === pcNum) {
                programMapDOMController.updatePatchSelect(bankNum, pcNum);
            }
        },
        sendPatchNum: function (bankNum, pcNum, patchNum) {
            let address = APP_MODE === MODE.GUITAR ? 'PCMAP_BANK_' : 'PCMAP_BASS_BANK_';
            let addr = ADDRESS_CONST.ADDRESS[address + (bankNum + 1)] + _7bitize(pcNum * 4);
            MIDIController.dt1(nibble(addr), this._convert2RawPatchNum(patchNum));
        },
        _convert2RawPatchNum: function (v) {
            let hex8 = function (x) {
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
            };
            return hex8(
                ((v & 0xf000) << 16) |
                ((v & 0xf00) << 8) |
                ((v & 0xf0) << 4) |
                ((v & 0xf))
            );
        }
    };

    window.assignProgramMapEvents = function () {
        loadPatchValues();
        $('#program-map-bank-select, #program-map-bass-bank-select').on('elf-changed', function (e, v) {
            programMapModelController.selectBank(v);
            programMapDOMController.updatePatchSelect(v, programMapModelController.getSelectedPC());
        });

        $('#program-map-pc, #program-map-bass-pc').on('elf-changed', function (e, v) {
            programMapModelController.selectPC(v);
            programMapDOMController.updatePatchSelect(programMapModelController.getSelectedBankNum(), v);
        });

        $('#program-map-patch, #program-map-bass-patch').on('elf-changed', function (e, v) {
            let bankNum = programMapModelController.getSelectedBankNum();
            let pcNum = programMapModelController.getSelectedPC();
            programMapModelController.updatePatchValue(bankNum, pcNum, v);
            programMapDOMController.updateLabel(bankNum, pcNum, v);
            programMapMIDIController.sendPatchNum(bankNum, pcNum, v);
        });
    };
})();
