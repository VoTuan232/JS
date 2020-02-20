/* global
CHAIN_BLOCK_ID_MAP CHAIN_DETAIL_PAGE_IDS
util
*/
function ChainDetailPage(id, index, switcher) {
    this.id = id;
    this.index = index;
    this.switcher = switcher;
}

ChainDetailPage.prototype = {
    show: function () {
        if (this.switcher) {
            if (this.switcher instanceof Array) {
                for (var i = 0; i < this.switcher.length; i++) {
                    $(this.switcher[i]).trigger('elf-change', this.index);
                }
            }
            else {
                $(this.switcher).trigger('elf-change', this.index);
            }
        }
        $(this.id).show();
    },
    hide: function() {
        $(this.id).hide();
    }
};

(function () {
    window.CHAIN_BLOCK_ID_MAP = {
        master: 'mst',
        inst1: 'inst1',
        inst2: 'inst2',
        inst3: 'inst3',
        normal: 'normal',
        fx1: 'fx1',
        fx2: 'fx2',
        fx3: 'fx3',
        balancer1: 'bal1',
        balancer2: 'bal2',
        balancer3: 'bal3',
        sendReturn: 'sndrtn',
        equalizer1: 'eq1',
        equalizer2: 'eq2',
        divider: 'div',
        mixer: 'mix',
        splitter1: 'spl1',
        splitter2: 'spl2',
        splitter3: 'spl3',
        splitter4: 'spl4',
        outMainL: 'out-ml',
        outMainR: 'out-mr',
        outMainLR: 'out-mlr',
        outSubL: 'out-sl',
        outSubR: 'out-sr',
        outSubLR: 'out-slr',
        footVolume1: 'fv1',
        footVolume2: 'fv2',
        delay1: 'dly1',
        delay2: 'dly2',
        masterDelay: 'mdly',
        reverb: 'rev',
        distortion: 'ds',
        compressor: 'cmp',
        airdPreamp: 'amp',
        noiseSuppressor: 'ns',
        chorus: 'cho',
        divTemp1: 'div1temp',
        divTemp2: 'div2temp',
        divTemp3: 'div3temp',
    };

    window.CHAIN_BLOCK_NUM_RELATION = [
        CHAIN_BLOCK_ID_MAP.inst1,
        CHAIN_BLOCK_ID_MAP.inst2,
        CHAIN_BLOCK_ID_MAP.inst3,
        CHAIN_BLOCK_ID_MAP.normal,

        CHAIN_BLOCK_ID_MAP.compressor,
        CHAIN_BLOCK_ID_MAP.distortion,
        CHAIN_BLOCK_ID_MAP.airdPreamp,
        CHAIN_BLOCK_ID_MAP.noiseSuppressor,

        CHAIN_BLOCK_ID_MAP.fx1,
        CHAIN_BLOCK_ID_MAP.fx2,
        CHAIN_BLOCK_ID_MAP.fx3,
        CHAIN_BLOCK_ID_MAP.equalizer1,

        CHAIN_BLOCK_ID_MAP.equalizer2,
        CHAIN_BLOCK_ID_MAP.chorus,
        CHAIN_BLOCK_ID_MAP.delay1,
        CHAIN_BLOCK_ID_MAP.delay2,

        CHAIN_BLOCK_ID_MAP.masterDelay,
        CHAIN_BLOCK_ID_MAP.reverb,
        CHAIN_BLOCK_ID_MAP.footVolume1,
        CHAIN_BLOCK_ID_MAP.footVolume2,

        CHAIN_BLOCK_ID_MAP.sendReturn,
        CHAIN_BLOCK_ID_MAP.divider,
        CHAIN_BLOCK_ID_MAP.splitter4,
        CHAIN_BLOCK_ID_MAP.mixer,

        CHAIN_BLOCK_ID_MAP.outSubL,
        CHAIN_BLOCK_ID_MAP.outSubR,
        CHAIN_BLOCK_ID_MAP.outMainL,
        CHAIN_BLOCK_ID_MAP.outMainR,

        CHAIN_BLOCK_ID_MAP.splitter1,
        CHAIN_BLOCK_ID_MAP.balancer1,
        CHAIN_BLOCK_ID_MAP.splitter2,
        CHAIN_BLOCK_ID_MAP.balancer2,
        CHAIN_BLOCK_ID_MAP.splitter3,
        CHAIN_BLOCK_ID_MAP.balancer3,

        CHAIN_BLOCK_ID_MAP.outMainLR,
        CHAIN_BLOCK_ID_MAP.outSubLR,

        CHAIN_BLOCK_ID_MAP.master,

        CHAIN_BLOCK_ID_MAP.divTemp1,
        CHAIN_BLOCK_ID_MAP.divTemp2,
        CHAIN_BLOCK_ID_MAP.divTemp3,

    ];

    window.BRANCH_POINT_LINE_TYPE = {
        junction: 0,
        aBranch: 1,
        bBranch: 2,
        horizontal: 3
    };

    window.BLOCK_WIDTH = 48;

    window.INITIAL_BLOCK_NUM_ORDER = [39, 38, 37, 0, 8, 28, 1, 9, 29, 20, 30, 2, 10, 31, 12, 14, 24, 25, 32, 3, 4, 5, 6, 11, 7, 18, 13, 15, 33, 16, 17, 19, 26, 27, 21, 22, 23, 36];

    window.CHAIN_HTML_ID = {
        chain: '#main-chain-frame-1',
        tinyChain: '#tiny-chain-frame-1',
        chainParent: '#main-chain',
        tinyChainParent: '#tiny-chain',
        chainSquare: '#chain-square',
        tinyChainClickArea: '#tiny-chain-click-area',
        editModeBtn: '#chain-edit-btn',
        effectSettingPage: '#effects-setting',
        effectSettingPageBackBtn: '#effects-setting-back-btn',
        effectSettingPageEffectWrapperFrame: '#effects-setting-frame-2'
    };
    window.CHAIN_HTML_CLASSNAME = {
        chainBlock: '.chain-block',
        chainLine: '.chain-line',
        flashing: '.flashing',
        overlay: '.overlay',
        overlayFV: '.overlay-fv',
        overlayDiv: '.overlay-div'
    };
    window.CHAIN_DETAIL_PAGE_IDS = {};
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.master] = new ChainDetailPage('#master');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst1] = new ChainDetailPage('#inst-1');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst2] = new ChainDetailPage('#inst-2');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.inst3] = new ChainDetailPage('#inst-3');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.normal] = new ChainDetailPage('#normal-input');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx1] = new ChainDetailPage('#fx-1');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx2] = new ChainDetailPage('#fx-2');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.fx3] = new ChainDetailPage('#fx-3');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer1] = new ChainDetailPage('#balancer-1');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer2] = new ChainDetailPage('#balancer-2');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.balancer3] = new ChainDetailPage('#balancer-3');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.sendReturn] = new ChainDetailPage('#send-return');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.equalizer1] = new ChainDetailPage('#eq-wrapper', 0, ['#eq-content-replacer', '#eq-title-switcher']);
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.equalizer2] = new ChainDetailPage('#eq-wrapper', 1, ['#eq-content-replacer', '#eq-title-switcher']);
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.divider] = new ChainDetailPage('#divider');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.mixer] = new ChainDetailPage('#mixer');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.footVolume1] = new ChainDetailPage('#foot-volume-1');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.footVolume2] = new ChainDetailPage('#foot-volume-2');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.delay1] = new ChainDetailPage('#delay-1');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.delay2] = new ChainDetailPage('#delay-2');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.masterDelay] = new ChainDetailPage('#master-delay');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.reverb] = new ChainDetailPage('#reverb');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.distortion] = new ChainDetailPage('#distortion');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.compressor] = new ChainDetailPage('#compressor');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.airdPreamp] = new ChainDetailPage('#aird-preamp');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.noiseSuppressor] = new ChainDetailPage('#noise-sp');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.chorus] = new ChainDetailPage('#chorus');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainLR] = new ChainDetailPage('#effect-setting-main-out');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainL] = new ChainDetailPage('#effect-setting-main-out');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outMainR] = new ChainDetailPage('#effect-setting-main-out');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubLR] = new ChainDetailPage('#effect-setting-sub-out');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubL] = new ChainDetailPage('#effect-setting-sub-out');
    // CHAIN_DETAIL_PAGE_IDS[CHAIN_BLOCK_ID_MAP.outSubR] = new ChainDetailPage('#effect-setting-sub-out');

    window.CHAIN_SIMULATOR_OUT_PAIR = {};
    CHAIN_SIMULATOR_OUT_PAIR[CHAIN_BLOCK_ID_MAP.outSubL] = CHAIN_BLOCK_ID_MAP.outSubL;
    CHAIN_SIMULATOR_OUT_PAIR[CHAIN_BLOCK_ID_MAP.outSubR] = CHAIN_BLOCK_ID_MAP.outSubR;
    CHAIN_SIMULATOR_OUT_PAIR[CHAIN_BLOCK_ID_MAP.outMainL] = CHAIN_BLOCK_ID_MAP.outMainL;
    CHAIN_SIMULATOR_OUT_PAIR[CHAIN_BLOCK_ID_MAP.outMainR] = CHAIN_BLOCK_ID_MAP.outMainR;
    CHAIN_SIMULATOR_OUT_PAIR[CHAIN_BLOCK_ID_MAP.outMainLR] = CHAIN_BLOCK_ID_MAP.outMainLR;
    CHAIN_SIMULATOR_OUT_PAIR[CHAIN_BLOCK_ID_MAP.outSubLR] = CHAIN_BLOCK_ID_MAP.outSubLR;

    window.CHAIN_OUTSIDE_SPEAKER_SIMULATOR = [
        CHAIN_BLOCK_ID_MAP.outSubL,
        CHAIN_BLOCK_ID_MAP.outSubR,
        CHAIN_BLOCK_ID_MAP.outMainL,
        CHAIN_BLOCK_ID_MAP.outMainR,
        CHAIN_BLOCK_ID_MAP.outMainLR,
        CHAIN_BLOCK_ID_MAP.outSubLR,
    ]
})();
