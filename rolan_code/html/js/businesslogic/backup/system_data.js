/**
 *
 *  SYSTEM DATA BACKUP
 * 
 */

function SystemData() {
    this.timerId = null;
    this.configCommand = null;
    this.configStop = null;
    this.observers = [];
    this.configs = [];
    this.configsBass = [];

    this.configs.push(ProductSetting.editor[2].config); // System

    this.configsBass.push(ProductSetting.editorBass[2].config); // SystemBass

    this.paramSetsSystem = {};
    this.paramSetsSystemBass = {};

    for (let index = 0; index < this.configs.length; index++) {
        for (let n = 0; n < this.configs[index].blockSet.length; n++) {
            let bid = this.configs[index].blockSet[n];
            this.paramSetsSystem[bid] = Parameter.paramSet[bid];
        }
    }

    for (let index = 0; index < this.configsBass.length; index++) {
        for (let n = 0; n < this.configsBass[index].blockSet.length; n++) {
            let bid = this.configsBass[index].blockSet[n];
            this.paramSetsSystemBass[bid] = Parameter.paramSet[bid];
        }
    }
}

SystemData.prototype = new ReadWriteLogic();

SystemData.prototype.read = function () {
    if (this.timerId) return;
    let configs = APP_MODE === MODE.GUITAR ? this.configs : this.configsBass;
    let tasks = [];
    for (let i = 0, length = configs.length; i < length; i++) {
        let config = configs[i];
        let blockSet = config.blockSet;
        for (let n = 0, num = blockSet.length; n < num; n++) {
            let b = Parameter.getblock(blockSet[n]);
            let addr = b.addr;
            let size = 0;
            while ((size = b.size.shift()) !== undefined) {
                tasks.push({ addr: addr, size: size });
                addr += size;
            }
        }
    }
    this.configStop = function () { };
    this.readStart(tasks, 'system_data_read');
};

SystemData.prototype.write = function () {
    if (this.timerId) return;
    let tasks = [];
    let configs = APP_MODE === MODE.GUITAR ? this.configs : this.configsBass;
    for (let index = 0, length = configs.length; index < length; index++) {
        let config = configs[index];
        let blockSet = config.blockSet;
        for (let n = 0, num = blockSet.length; n < num; n++) {
            let b = Parameter.getblock(blockSet[n]);
            let addr = b.addr;
            let str = (b.data.join()).replace(/,/g, '');
            let wait = 0;
            if (b.size < 0) {
                b.size = [4];
                let len = (str.length / 2) - 4;
                wait = len ? ProductSetting.waitVariable : ProductSetting.waitVariable0;
                for (let cnt = 0; len > 0; len -= cnt) {
                    cnt = (len < SYSEX_MAXLEN) ? len : SYSEX_MAXLEN;
                    b.size.push(cnt);
                }
            }
            let size = 0;
            let i = 0;
            while ((size = b.size.shift()) !== undefined) {
                let data = str.substr(i * 2, size * 2);
                tasks.push({ addr: addr, data: data });
                addr += size; i += size;
            }
            if (wait) {
                tasks[tasks.length - 1].wait = wait;
            }
        }
    }
    this.configCommand = function () { };
    this.configStop = function () { };
    this.writeStart(tasks, 'system_data_write', ProductSetting.waitStart, ProductSetting.waitStop);
};

SystemData.prototype.cancel = function () {
    this.abort();
    this.broadcast('system_data_cancel', null);
};
