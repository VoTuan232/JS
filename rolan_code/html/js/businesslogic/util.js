/* global updateLogManager */

(function () {
    window.util = {
        waitForMIDIMsgReply: function (hexStr, observer) {
            var timeOut = 0;
            var timer = null;
            var process = function () {
                if (timeOut > 0) {
                    if (new Date().getTime() > timeOut) {
                        clearTimeout(timer);
                        MIDIController.removeReceiver(receiver);
                        if (typeof observer.error === 'function') {
                            observer.error();
                        }
                        return;
                    }
                } else {
                    timeOut = (new Date()).getTime() + (ProductSetting.timeout * 1000);
                    MIDIController.send(hexStr);
                }
                timer = setTimeout(process, 10);
            };
            var receiver = {
                receive: function (msg) {
                    if (observer.isSucceeded(msg)) {
                        clearTimeout(timer);
                        setTimeout(function () {
                            MIDIController.removeReceiver(receiver);
                        }, 0);
                        if (typeof observer.success === 'function') {
                            observer.success(msg);
                        }
                    }
                }
            };
            MIDIController.addReceiver(receiver);
            process();
        },
        waitForDT1Reply: function (address, value, observer) {
            var timeOut = 0;
            var timer = null;
            var process = function () {
                if (timeOut > 0) {
                    if (new Date().getTime() > timeOut) {
                        clearTimeout(timer);
                        MIDIController.removeReceiver(receiver);
                        if (typeof observer.error === 'function') {
                            observer.error();
                        }
                        return;
                    }
                } else {
                    timeOut = (new Date()).getTime() + (ProductSetting.timeout * 1000);
                    MIDIController.dt1(nibble(address), value);
                }
                timer = setTimeout(process, 10);
            };
            var receiver = {
                receive: function (msg) {
                    if (observer.isSucceeded(msg)) {
                        clearTimeout(timer);
                        setTimeout(function () {
                            MIDIController.removeReceiver(receiver);
                        }, 0);
                        if (typeof observer.success === 'function') {
                            observer.success(msg);
                        }
                    }
                }
            };
            MIDIController.addReceiver(receiver);
            process();
            return function () {
                clearTimeout(timer);
                MIDIController.removeReceiver(receiver);
            };
        },
        waitForRQ1Reply: function (address, size, observer) {
            var timeOut = 0;
            var timer = null;
            var canceled = false;
            var process = function () {
                if (timeOut > 0) {
                    if (new Date().getTime() > timeOut) {
                        clearTimeout(timer);
                        if (observer !== undefined && typeof observer.error === 'function') {
                            observer.error();
                        }
                        return;
                    }
                } else {
                    timeOut = (new Date()).getTime() + (ProductSetting.timeout * 1000);
                    MIDIController.rq1(nibble(address), nibble(size), function (msg) {
                        if (canceled) {
                            return;
                        }
                        clearTimeout(timer);
                        if (observer !== undefined && typeof observer.success === 'function') {
                            observer.success(msg);
                        }
                    });
                }
                timer = setTimeout(process, 10);
            };
            process();
            return function () {
                clearTimeout(timer);
                canceled = true;
            };
        },
        readStorage: function () {
            var storageString = $native.app.storage();
            if (typeof storageString === 'string' && storageString.length > 0) {
                try {
                    var obj = JSON.parse(storageString);
                    return obj;
                } catch (e) {
                    return {};
                }
            } else {
                return {};
            }
        },
        writeStorage: function (key, value) {
            var storage = this.readStorage();
            storage[key] = value;
            $native.app.storage(JSON.stringify(storage));
        },
        convert2AddrStr: function (hex) {
            var str = hex.toString(16).toUpperCase();
            if (str.length < 8) {
                var zeroPrefix = '';
                for (var i = 0; i < 8 - str.length; i++) {
                    zeroPrefix += '0';
                }
                return zeroPrefix + str;
            } else {
                return str;
            }
        },
        convert2AsciiOnlyStr: function (str) {
            var result = '';
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);
                result += ((0x20 <= char && char <= 0x7F) ? str.charAt(i) : '');
            }
            return result;
        },
        convert2AsciiOnlyStrSpace: function (str) {
            var result = '';
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);
                result += ((0x20 <= char && char <= 0x7E) ? str.charAt(i) : ' ');
            }
            return result;
        },
        convert2NameHex: function (name) {
            for (var i = 0, l = 16 - name.length; i < l; i++) {
                name += ' ';
            }
            var nameHex = '';
            for (var j = 0; j < name.length; j++) {
                var code = name.charCodeAt(j).toString(16).toUpperCase();
                if (code.length < 2) {
                    code = '0' + code;
                }
                nameHex += code;
            }
            return nameHex;
        },
        convert2NameStr: function (hex) {
            var patchName = '';
            for (var i = 0; i < 16; i++) {
                patchName += String.fromCharCode(parseInt(hex.substr(i * 2, 2), 16));
            }
            return patchName;
        },
        getDeviceOs: function () {
            var deviceOs = navigator.userAgent;
            var matchesArray = deviceOs.match(/\(([^\)]*)\)/);
            if (matchesArray[1] !== undefined) {
                deviceOs = matchesArray[1];
            }
            return deviceOs;
        },
        checkAppVersion: function () {
            var appVersion = ProductSetting.version;
            var storage = this.readStorage();
            var storedAppVersion = storage.appVersion;
            if (storedAppVersion !== undefined && this._isVersionLater(appVersion, storedAppVersion)) {
                updateLogManager.post(appVersion);
            }
            this.writeStorage('appVersion', appVersion);
        },
        _isVersionLater: function (current, stored) {
            var currentEachNum = current.split('.');
            for (var i = 0; i < currentEachNum.length; i++) {
                var storedValue = stored.split('.')[i];
                if (currentEachNum[i] > storedValue) {
                    return true;
                } else if (currentEachNum[i] < storedValue) {
                    return false;
                }
            }
            return false;
        }
    };
})();
