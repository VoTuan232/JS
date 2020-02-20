(function () {
    window.NUMPAD_TYPE = {
        basic: 0,     //numpad A
        decimal: 1,   //numpad D
        withText: 2,   //numpad C
        numpadB: 3,     //numpad B
        numpadInputLevel: 5,
    };
    window.NUMPAD_DETAIL_TYPE = {
        a: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 0, texts: ['OFF'] }
            ],
            dialIds: [
                'patch-midi1-setting-midi_ch-dial', 'patch-midi2-setting-midi_ch-dial', 'patch-midi3-setting-midi_ch-dial', 'patch-midi4-setting-midi_ch-dial',
                'patch-midi1-setting-midi_pc_sharp-dial', 'patch-midi2-setting-midi_pc_sharp-dial', 'patch-midi3-setting-midi_pc_sharp-dial', 'patch-midi4-setting-midi_pc_sharp-dial',
                'ctl-guitar-to-midi-pc-dial', 'ctl-guitar-to-midi-str6-pc-dial', 'ctl-guitar-to-midi-str5-pc-dial', 'ctl-guitar-to-midi-str4-pc-dial',
                'ctl-guitar-to-midi-str3-pc-dial', 'ctl-guitar-to-midi-str2-pc-dial', 'ctl-guitar-to-midi-str1-pc-dial',

                'inst-guitar-osc-osc-lowvelocut-dial',
                'inst-guitar-osc-dynamic-lowvelocut-dial',
                'inst-bass-osc-osc-lowvelocut-dial',
                'inst-bass-osc-dynamic-lowvelocut-dial',

                'patch-midi1-bass-setting-midi_pc_sharp-dial', 'patch-midi2-bass-setting-midi_ch-dial', 'patch-midi3-bass-setting-midi_ch-dial', 'patch-midi4-bass-setting-midi_ch-dial',
                'patch-midi1-bass-setting-midi_pc_sharp-dial', 'patch-midi2-bass-setting-midi_pc_sharp-dial', 'patch-midi3-bass-setting-midi_pc_sharp-dial', 'patch-midi4-bass-setting-midi_pc_sharp-dial',
                'ctl-bass-to-midi-pc-dial', 'ctl-bass-to-midi-str6-pc-dial', 'ctl-bass-to-midi-str5-pc-dial', 'ctl-bass-to-midi-str4-pc-dial',
                'ctl-bass-to-midi-str3-pc-dial', 'ctl-bass-to-midi-str2-pc-dial', 'ctl-bass-to-midi-str1-pc-dial',
            ],
            offset: 0
        },
        b: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 0, texts: ['SYSTEM'] }
            ],
            dialIds: [
                'assign-midi-ch-1-dial', 'patch-midi1-setting-midi_ch-dial',
                'patch-midi2-setting-midi_ch-dial', 'patch-midi3-setting-midi_ch-dial', 'patch-midi4-setting-midi_ch-dial',
                'assign-midi-ch-1-bass-dial', 'assign-midi-ch-2-bass-dial', 'patch-midi1-bass-setting-midi_ch-dial',
                'patch-midi2-bass-setting-midi_ch-dial', 'patch-midi3-bass-setting-midi_ch-dial', 'patch-midi4-bass-setting-midi_ch-dial',
            ],
            offset: 0
        },
        c: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 101, texts: ['1/32', '1/16T', '1/32D', '1/16', '1/8T', '1/16D', '1/8', '1/4T', '1/8D', '1/4', '1/2T', '1/4D', '1/2', '1/1T', '1/2D', '1/1', '1/1D', '2/1'] }
            ],
            dialIds: ['assign-wave-rate-dial', 'assign-wave-rate-bass-dial'],
            offset: 0
        },
        d: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 101, texts: ['2/1', '1/1D', '1/1', '1/2D', '1/1T', '1/2', '1/4D', '1/2T', '1/4', '1/8D', '1/4T', '1/8', '1/16D', '1/8T', '1/16', '1/32D', '1/16T', '1/32'] }
            ],
            dialIds: [
                'fx-auto-wah-rate-dial',
                'fx-chorus-rate-dial', 'fx-chorus-3-rate-dial', 'fx-chorus-4-rate-dial',
                'fx-chorus-2-rate_1-dial', 'fx-chorus-2-rate_2-dial',
                'fx-classic-vibe-rate-dial',
                'fx-flanger-rate-dial',
                'fx-humanizer-rate-dial',
                'fx-pan-rate-dial',
                'fx-phaser-2-rate-dial',
                'fx-phaser-rate-dial',
                'fx-ring-mod-freq_mod_rate-dial',
                'fx-rotary-slow_rate-dial', 'fx-rotary-fast_rate-dial',
                'fx-slicer-rate-dial',
                'fx-tremolo-rate-dial',
                'fx-vibrato-rate-dial',
                'inst-guitar-lfo1-osc-rate-dial',
                'chorus-rate-1-dial', 'chorus-rate-2-dial', 'chorus-rate-dial',
                'chorus-bass-rate-1-dial', 'chorus-bass-rate-2-dial', 'chorus-bass-rate-dial',
                'fx-auto-wah-rate-dial',
                'fx-classic-vibe-rate-dial', 'fx-flanger-rate-dial', 'fx-flanger-bass-rate-dial', 'fx-humanizer-rate-dial', 'fx-isolator-rate-dial',
                'fx-pan-rate-dial', 'fx-phaser-rate-dial', 'fx-ring-mod-freq-mod-rate-dial', 'fx-ring-mod-freq-mod-depth-dial',
                'fx-rotary-rateslow-dial', 'fx-rotary-rate-fast-dial', 'fx-slicer-rate-dial', 'fx-tremolo-rate-dial', 'fx-vibrato-rate-dial',

                'fx-bass-auto-wah-rate-dial',
                'fx-bass-chorus-rate-dial', 'fx-bass-chorus-3-rate-dial', 'fx-bass-chorus-4-rate-dial',
                'fx-bass-chorus-2-rate_1-dial', 'fx-bass-chorus-2-rate_2-dial',
                'fx-bass-classic-vibe-rate-dial',
                'fx-bass-flanger-rate-dial',
                'fx-bass-humanizer-rate-dial',
                'fx-bass-pan-rate-dial',
                'fx-bass-phaser-2-rate-dial',
                'fx-bass-phaser-rate-dial',
                'fx-bass-ring-mod-freq_mod_rate-dial',
                'fx-bass-rotary-slow_rate-dial', 'fx-bass-rotary-fast_rate-dial',
                'fx-bass-slicer-rate-dial',
                'fx-bass-tremolo-rate-dial',
                'fx-bass-vibrato-rate-dial',
                'fx-bass-auto-wah-rate-dial',
                'fx-bass-classic-vibe-rate-dial', 'fx-bass-flanger-rate-dial', 'fx-bass-flanger-bass-rate-dial', 'fx-bass-humanizer-rate-dial', 'fx-bass-isolator-rate-dial',
                'fx-bass-pan-rate-dial', 'fx-bass-phaser-rate-dial', 'fx-bass-ring-mod-freq-mod-rate-dial', 'fx-bass-ring-mod-freq-mod-depth-dial',
                'fx-bass-rotary-rateslow-dial', 'fx-bass-rotary-rate-fast-dial', 'fx-bass-slicer-rate-dial', 'fx-bass-tremolo-rate-dial', 'fx-bass-vibrato-rate-dial',


                'inst-guitar-lfo1-dynamic-rate-dial',
                'inst-guitar-lfo2-dynamic-rate-dial',
                'inst-bass-lfo1-dynamic-rate-dial',
                'inst-bass-lfo2-dynamic-rate-dial',
                'fx-bass-slicer-rates-dial',
                'fx-slicer-rates-dial',

                'fx-chorus-rate-1-dial', 'fx-chorus-rate-2-dial', 'fx-bass-chorus-rate-1-dial', 'fx-bass-chorus-rate-2-dial',

                'inst-guitar-lfo1-dynamic-rate-dial', 'inst-guitar-lfo2-dynamic-rate-dial', 'inst-guitar-lfo1-osc-rate-dial', 'inst-guitar-lfo2-osc-rate-dial', 'inst-guitar-seq-seq1-rate-dial', 'inst-guitar-seq-seq2-rate-dial',

                'inst-bass-lfo1-dynamic-rate-dial', 'inst-bass-lfo2-dynamic-rate-dial', 'inst-bass-lfo1-osc-rate-dial', 'inst-bass-lfo2-osc-rate-dial', 'inst-bass-seq-seq1-rate-dial', 'inst-bass-seq-seq2-rate-dial'
            ],
            offset: 0
        },
        e: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 2001, texts: ['1/32', '1/16T', '1/32D', '1/16', '1/8T', '1/16D', '1/8', '1/4T', '1/8D', '1/4', '1/2T', '1/4D', '1/2', '1/1T', '1/2D', '1/1', '1/1D', '2/1'] }
            ],
            dialIds: ['delay-1-time-dial', 'delay-2-time-dial', 'delay-3-time-dial', 'delay-4-time-dial', 'master-delay-time-dial', 'master-delay-dual-d1_time-dial', 'master-delay-dual-d2_time-dial', 'master-delay-warp-time-dial',
                'master-delay-time-dial', 'master-delay-d1-time-dial', 'master-delay-d2-time-dial', 'master-delay-bass-time-dial', 'master-delay-bass-d1-time-dial', 'master-delay-bass-d2-time-dial',
                'fx-delay-time-dial', 'fx-delay-d1-time-dial', 'fx-delay-d2-time-dial', 'fx-bass-delay-time-dial', 'fx-bass-delay-d1-time-dial', 'fx-bass-delay-d2-time-dial',
                'delay-2-bass-time-dial', 'delay-1-bass-time-dial'
            ],
            offset: 0
        },
        f: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 301, texts: ['1/32', '1/16T', '1/32D', '1/16', '1/8T', '1/16D', '1/8', '1/4T', '1/8D', '1/4', '1/2T', '1/4D', '1/2', '1/1T', '1/2D', '1/1', '1/1D', '2/1'] }
            ],
            dialIds: ['fx-harmonist-hr1_pre-delay-dial', 'fx-harmonist-hr2_pre-delay-dial',
                'fx-pitch-shifter-ps1_pre-delay-dial', 'fx-pitch-shifter-ps2_pre-delay-dial',
                'fx-harmonist-hr1-pre-delay-dial', 'fx-harmonist-hr2-pre-delay-dial', 'fx-pitch-shifter-ps1-pre-delay-dial', 'fx-pitch-shifter-ps2-pre-delay-dial',

                'fx-bass-harmonist-hr1-pre-delay-dial', 'fx-bass-harmonist-hr2-pre-delay-dial', 'fx-bass-pitch-shifter-ps1-pre-delay-dial', 'fx-bass-pitch-shifter-ps2-pre-delay-dial',
            ],
            offset: 0
        },
        g: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 0, texts: ['OFF'] },
                { start: 102, texts: ['2/1', '1/1D', '1/1', '1/2D', '1/1T', '1/2', '1/4D', '1/2T', '1/4', '1/8D', '1/4T', '1/8', '1/16D', '1/8T', '1/16', '1/32D', '1/16T', '1/32'] }
            ],
            dialIds: ['fx-phaser-step_rate-dial', 'fx-flanger-step_rate-dial',
                'fx-phaser-step-rate-dial',
                'fx-bass-phaser-step-rate-dial',
            ],
            offset: -1
        },
        h: {
            type: NUMPAD_TYPE.numpadB,
            dialIds: ['inst-guitar-osc-osc-fine1-dial', 'inst-guitar-osc-osc-pitch1-dial', 'inst-guitar-osc-osc-fine2-dial', 'inst-guitar-osc-osc-pitch2-dial', 'inst-guitar-osc-osc-pitchenvdepth1-dial', 'inst-guitar-osc-osc-pitchenvdepth2-dial',
                'inst-guitar-amp-e-gtr-tcomppre-dial', 'inst-guitar-amp-e-gtr-tcomppost-dial', 'inst-guitar-amp-e-bass-tcomppre-dial', 'inst-guitar-amp-e-bass-tcomppost-dial', 'inst-guitar-amp-acoustic-tcomppre-dial', 'inst-guitar-amp-acoustic-tcomppost-dial',
                'inst-guitar-acoustic-tone-dial', 'inst-guitar-harmo-pitch-dial',
                'inst-guitar-osc-dynamic-pitch-dial', 'inst-guitar-osc-dynamic-fine-dial', 'inst-guitar-osc-dynamic-pwmenvattack-dial', 'inst-guitar-osc-dynamic-detune-dial',
                'inst-guitar-osc-dynamic-pwmenvdepth-dial', 'inst-guitar-osc-dynamic-pitchenvattack-dial', 'inst-guitar-osc-dynamic-pitchenvdepth-dial', 'inst-guitar-osc-dynamic-pitchbenddepth-dial',
                'inst-guitar-filter-dynamic-envattack-dial', 'inst-guitar-filter-dynamic-envdepth-dial',
                'inst-guitar-amp-dynamic-envattack-dial',
                'inst-guitar-filter-osc-velosens-dial', 'inst-guitar-filter-osc-envdepth-dial',
                'inst-guitar-gr300-pitch-a-dial', 'inst-guitar-gr300-fine-a-dial', 'inst-guitar-gr300-pitch-b-dial', 'inst-guitar-gr300-fine-b-dial',
                'inst-guitar-poly-fx-gain-balance-dial', 'inst-guitar-poly-fx-tone-dial',
                'inst-guitar-alttune-shift_6-dial', 'inst-guitar-alttune-shift_5-dial', 'inst-guitar-alttune-shift_4-dial', 'inst-guitar-alttune-shift_3-dial', 'inst-guitar-alttune-shift_2-dial', 'inst-guitar-alttune-shift_1-dial',
                'inst-guitar-alttune-fine_6-dial', 'inst-guitar-alttune-fine_5-dial', 'inst-guitar-alttune-fine_4-dial', 'inst-guitar-alttune-fine_3-dial', 'inst-guitar-alttune-fine_2-dial', 'inst-guitar-alttune-fine_1-dial',
                'inst-guitar-alttune-bend-depth_6-dial', 'inst-guitar-alttune-bend-depth_5-dial', 'inst-guitar-alttune-bend-depth_4-dial', 'inst-guitar-alttune-bend-depth_3-dial', 'inst-guitar-alttune-bend-depth_2-dial', 'inst-guitar-alttune-bend-depth_1-dial',
                'inst-guitar-alttune-12str-shift_6-dial', 'inst-guitar-alttune-12str-shift_5-dial', 'inst-guitar-alttune-12str-shift_4-dial', 'inst-guitar-alttune-12str-shift_3-dial', 'inst-guitar-alttune-12str-shift_2-dial', 'inst-guitar-alttune-12str-shift_1-dial',
                'inst-guitar-alttune-12str-fine_1-dial', 'inst-guitar-alttune-12str-fine_2-dial', 'inst-guitar-alttune-12str-fine_3-dial', 'inst-guitar-alttune-12str-fine_4-dial', 'inst-guitar-alttune-12str-fine_5-dial', 'inst-guitar-alttune-12str-fine_6-dial',
                'inst-guitar-eq-e-gtr-level-dial', 'inst-guitar-eq-e-gtr-low-gain-dial', 'inst-guitar-eq-e-gtr-low-mid-gain-dial', 'inst-guitar-eq-e-gtr-high-mid-gain-dial', 'inst-guitar-eq-e-gtr-high-gain-dial',
                'inst-guitar-eq-acoustic-level-dial', 'inst-guitar-eq-acoustic-low-gain-dial', 'inst-guitar-eq-acoustic-low-mid-gain-dial', 'inst-guitar-eq-acoustic-high-mid-gain-dial', 'inst-guitar-eq-acoustic-high-gain-dial',
                'inst-guitar-eq-vio-gtr-level-dial', 'inst-guitar-eq-vio-gtr-low-gain-dial', 'inst-guitar-eq-vio-gtr-low-mid-gain-dial', 'inst-guitar-eq-vio-gtr-high-mid-gain-dial', 'inst-guitar-eq-vio-gtr-high-gain-dial',
                'inst-guitar-eq-e-bass-level-dial', 'inst-guitar-eq-e-bass-low-gain-dial', 'inst-guitar-eq-e-bass-low-mid-gain-dial', 'inst-guitar-eq-e-bass-high-mid-gain-dial', 'inst-guitar-eq-e-bass-high-gain-dial',
                'inst-bass-osc-osc-fine1-dial', 'inst-bass-osc-osc-pitch1-dial', 'inst-bass-osc-osc-fine2-dial', 'inst-bass-osc-osc-pitch2-dial', 'inst-bass-osc-osc-pitchenvdepth1-dial', 'inst-bass-osc-osc-pitchenvdepth2-dial',
                'inst-bass-amp-e-gtr-tcomppre-dial', 'inst-bass-amp-e-gtr-tcomppost-dial', 'inst-bass-amp-e-bass-tcomppre-dial', 'inst-bass-amp-e-bass-tcomppost-dial', 'inst-bass-amp-ac-bass-tcomppre-dial', 'inst-bass-amp-ac-bass-tcomppost-dial',
                'inst-bass-osc-dynamic-pitch-dial', 'inst-bass-osc-dynamic-fine-dial', 'inst-bass-osc-dynamic-pwmenvattack-dial', 'inst-bass-osc-dynamic-detune-dial',
                'inst-bass-osc-dynamic-pwmenvdepth-dial', 'inst-bass-osc-dynamic-pitchenvattack-dial', 'inst-bass-osc-dynamic-pitchenvdepth-dial', 'inst-bass-osc-dynamic-pitchbenddepth-dial',
                'inst-bass-filter-dynamic-envattack-dial', 'inst-bass-filter-dynamic-envdepth-dial',
                'inst-bass-amp-dynamic-envattack-dial',
                'inst-bass-filter-osc-velosens-dial', 'inst-bass-filter-osc-envdepth-dial',
                'inst-bass-poly-fx-gain-balance-dial', 'inst-bass-poly-fx-tone-dial',
                'inst-bass-alttune-shift_6-dial', 'inst-bass-alttune-shift_5-dial', 'inst-bass-alttune-shift_4-dial', 'inst-bass-alttune-shift_3-dial', 'inst-bass-alttune-shift_2-dial', 'inst-bass-alttune-shift_1-dial',
                'inst-bass-alttune-fine_6-dial', 'inst-bass-alttune-fine_5-dial', 'inst-bass-alttune-fine_4-dial', 'inst-bass-alttune-fine_3-dial', 'inst-bass-alttune-fine_2-dial', 'inst-bass-alttune-fine_1-dial',
                'inst-bass-alttune-bend-depth_6-dial', 'inst-bass-alttune-bend-depth_5-dial', 'inst-bass-alttune-bend-depth_4-dial', 'inst-bass-alttune-bend-depth_3-dial', 'inst-bass-alttune-bend-depth_2-dial', 'inst-bass-alttune-bend-depth_1-dial',
                'inst-bass-alttune-12str-shift_6-dial', 'inst-bass-alttune-12str-shift_5-dial', 'inst-bass-alttune-12str-shift_4-dial', 'inst-bass-alttune-12str-shift_3-dial', 'inst-bass-alttune-12str-shift_2-dial', 'inst-bass-alttune-12str-shift_1-dial',
                'inst-bass-alttune-12str-fine_1-dial', 'inst-bass-alttune-12str-fine_2-dial', 'inst-bass-alttune-12str-fine_3-dial', 'inst-bass-alttune-12str-fine_4-dial', 'inst-bass-alttune-12str-fine_5-dial', 'inst-bass-alttune-12str-fine_6-dial',
                'inst-bass-eq-e-gtr-level-dial', 'inst-bass-eq-e-gtr-low-gain-dial', 'inst-bass-eq-e-gtr-low-mid-gain-dial', 'inst-bass-eq-e-gtr-high-mid-gain-dial', 'inst-bass-eq-e-gtr-high-gain-dial',
                'inst-bass-eq-ac-bass-level-dial', 'inst-bass-eq-ac-bass-low-gain-dial', 'inst-bass-eq-ac-bass-low-mid-gain-dial', 'inst-bass-eq-ac-bass-high-mid-gain-dial', 'inst-bass-eq-ac-bass-high-gain-dial',
                'inst-bass-eq-e-bass-level-dial', 'inst-bass-eq-e-bass-low-gain-dial', 'inst-bass-eq-e-bass-low-mid-gain-dial', 'inst-bass-eq-e-bass-high-mid-gain-dial', 'inst-bass-eq-e-bass-high-gain-dial',
                'inst-bass-analog-gr-fine-a-dial',
                'inst-bass-analog-gr-pitch-a-dial',
                'inst-bass-analog-gr-pitch-b-dial',
                'inst-bass-analog-gr-fine-b-dial',
                'inst-bass-ac-bass-size-dial',
                'compressor-tone-dial', 'compressor-bass-tone-dial', 'distortion-tone-dial', 'distortion-bass-tone-dial', 'distortion-bottom-dial', 'distortion-bass-bottom-dial', 'aird-preamp-sags-dial', 'aird-preamp-bass-sags-dial',
                'aird-preamp-resonance-dial', 'aird-preamp-bass-resonance-dial',
                'eq-low-gain-dial', 'eq-low-mid-gain-dial', 'eq-high-mid-gain-dial', 'eq-high-gain-dial', 'eq-high-gain-dial', 'eq-level-dial',
                'eq-bass-low-gain-dial', 'eq-bass-low-mid-gain-dial', 'eq-bass-high-mid-gain-dial', 'eq-bass-high-gain-dial', 'eq-bass-high-gain-dial', 'eq-bass-level-dial',

                'main-out-global-eq-dialog-l-low-gain-dial', 'main-out-global-eq-dialog-l-low-mid-gain-dial', 'main-out-global-eq-dialog-l-high-mid-gain-dial', 'main-out-global-eq-dialog-l-high-gain-dial',
                'main-out-global-eq-dialog-r-low-gain-dial', 'main-out-global-eq-dialog-r-low-mid-gain-dial', 'main-out-global-eq-dialog-r-high-mid-gain-dial', 'main-out-global-eq-dialog-r-high-gain-dial',
                'sub-out-global-eq-dialog-l-low-gain-dial', 'sub-out-global-eq-dialog-l-low-mid-gain-dial', 'sub-out-global-eq-dialog-l-high-mid-gain-dial', 'sub-out-global-eq-dialog-l-high-gain-dial',
                'sub-out-global-eq-dialog-r-low-gain-dial', 'sub-out-global-eq-dialog-r-low-mid-gain-dial', 'sub-out-global-eq-dialog-r-high-mid-gain-dial', 'sub-out-global-eq-dialog-r-high-gain-dial',
                'main-out-bass-global-eq-dialog-l-low-gain-dial', 'main-out-bass-global-eq-dialog-l-low-mid-gain-dial', 'main-out-bass-global-eq-dialog-l-high-mid-gain-dial', 'main-out-bass-global-eq-dialog-l-high-gain-dial',
                'main-out-bass-global-eq-dialog-r-low-gain-dial', 'main-out-bass-global-eq-dialog-r-low-mid-gain-dial', 'main-out-bass-global-eq-dialog-r-high-mid-gain-dial', 'main-out-bass-global-eq-dialog-r-high-gain-dial',
                'sub-out-bass-global-eq-dialog-l-low-gain-dial', 'sub-out-bass-global-eq-dialog-l-low-mid-gain-dial', 'sub-out-bass-global-eq-dialog-l-high-mid-gain-dial', 'sub-out-bass-global-eq-dialog-l-high-gain-dial',
                'sub-out-bass-global-eq-dialog-r-low-gain-dial', 'sub-out-bass-global-eq-dialog-r-low-mid-gain-dial', 'sub-out-bass-global-eq-dialog-r-high-mid-gain-dial', 'sub-out-bass-global-eq-dialog-r-high-gain-dial',

                'menu-main-out-global-eq-dialog-l-low-gain-dial', 'menu-main-out-global-eq-dialog-l-low-mid-gain-dial', 'menu-main-out-global-eq-dialog-l-high-mid-gain-dial', 'menu-main-out-global-eq-dialog-l-high-gain-dial',
                'menu-main-out-global-eq-dialog-r-low-gain-dial', 'menu-main-out-global-eq-dialog-r-low-mid-gain-dial', 'menu-main-out-global-eq-dialog-r-high-mid-gain-dial', 'menu-main-out-global-eq-dialog-r-high-gain-dial',
                'menu-sub-out-global-eq-dialog-l-low-gain-dial', 'menu-sub-out-global-eq-dialog-l-low-mid-gain-dial', 'menu-sub-out-global-eq-dialog-l-high-mid-gain-dial', 'menu-sub-out-global-eq-dialog-l-high-gain-dial',
                'menu-sub-out-global-eq-dialog-r-low-gain-dial', 'menu-sub-out-global-eq-dialog-r-low-mid-gain-dial', 'menu-sub-out-global-eq-dialog-r-high-mid-gain-dial', 'menu-sub-out-global-eq-dialog-r-high-gain-dial',
                'menu-main-out-bass-global-eq-dialog-l-low-gain-dial', 'menu-main-out-bass-global-eq-dialog-l-low-mid-gain-dial', 'menu-main-out-bass-global-eq-dialog-l-high-mid-gain-dial', 'menu-main-out-bass-global-eq-dialog-l-high-gain-dial',
                'menu-main-out-bass-global-eq-dialog-r-low-gain-dial', 'menu-main-out-bass-global-eq-dialog-r-low-mid-gain-dial', 'menu-main-out-bass-global-eq-dialog-r-high-mid-gain-dial', 'menu-main-out-bass-global-eq-dialog-r-high-gain-dial',
                'menu-sub-out-bass-global-eq-dialog-l-low-gain-dial', 'menu-sub-out-bass-global-eq-dialog-l-low-mid-gain-dial', 'menu-sub-out-bass-global-eq-dialog-l-high-mid-gain-dial', 'menu-sub-out-bass-global-eq-dialog-l-high-gain-dial',
                'menu-sub-out-bass-global-eq-dialog-r-low-gain-dial', 'menu-sub-out-bass-global-eq-dialog-r-low-mid-gain-dial', 'menu-sub-out-bass-global-eq-dialog-r-high-mid-gain-dial', 'menu-sub-out-bass-global-eq-dialog-r-high-gain-dial',

                'fx-ac-resonance-tone-dial',
                'fx-compressor-tone-dial',
                'fx-defretter-tone-dial',
                'fx-defretter-bass-tone-dial',
                'fx-graphic-eq-band-100hz-dial',
                'fx-graphic-eq-band-200hz-dial',
                'fx-graphic-eq-band-400hz-dial',
                'fx-graphic-eq-band-800hz-dial',
                'fx-graphic-eq-band-1600hz-dial',
                'fx-graphic-eq-band-3200hz-dial',
                'fx-graphic-eq-band-6400hz-dial',
                'fx-graphic-eq-level-dial',

                'fx-parametric-eq-low-gain-dial', 'fx-parametric-eq-low-mid-gain-dial', 'fx-parametric-eq-high-mid-gain-dial', 'fx-parametric-eq-high-gain-dial', 'fx-parametric-eq-level-dial',
                'fx-pedal-bend-pitch-dial',
                'fx-pitch-shifter-ps1-pitch-dial', 'fx-pitch-shifter-ps1-fine-dial', 'fx-pitch-shifter-ps2-pitch-dial', 'fx-pitch-shifter-ps2-fine-dial',

                'fx-harmonist-hr1-c-dial', 'fx-harmonist-hr1-db-dial', 'fx-harmonist-hr1-d-dial', 'fx-harmonist-hr1-eb-dial', 'fx-harmonist-hr1-e-dial', 'fx-harmonist-hr1-f-dial',
                'fx-harmonist-hr1-g-dial', 'fx-harmonist-hr1-ab-dial', 'fx-harmonist-hr1-a-dial', 'fx-harmonist-hr1-bb-dial', 'fx-harmonist-hr1-b-dial',

                'fx-sitar-sim-tones-dial',

                'fx-bass-ac-resonance-tone-dial',
                'fx-bass-compressor-tone-dial',
                'fx-bass-defretter-tone-dial',
                'fx-bass-defretter-bass-tone-dial',
                'fx-bass-graphic-eq-band-100hz-dial',
                'fx-bass-graphic-eq-band-200hz-dial',
                'fx-bass-graphic-eq-band-400hz-dial',
                'fx-bass-graphic-eq-band-800hz-dial',
                'fx-bass-graphic-eq-band-1600hz-dial',
                'fx-bass-graphic-eq-band-3200hz-dial',
                'fx-bass-graphic-eq-band-6400hz-dial',
                'fx-bass-graphic-eq-level-dial',

                'fx-bass-parametric-eq-low-gain-dial', 'fx-bass-parametric-eq-low-mid-gain-dial', 'fx-bass-parametric-eq-high-mid-gain-dial', 'fx-bass-parametric-eq-high-gain-dial', 'fx-bass-parametric-eq-level-dial',
                'fx-bass-pedal-bend-pitch-dial',
                'fx-bass-pitch-shifter-ps1-pitch-dial', 'fx-bass-pitch-shifter-ps1-fine-dial', 'fx-bass-pitch-shifter-ps2-pitch-dial', 'fx-bass-pitch-shifter-ps2-fine-dial',


                'fx-bass-harmonist-hr1-c-dial', 'fx-bass-harmonist-hr1-db-dial', 'fx-bass-harmonist-hr1-d-dial', 'fx-bass-harmonist-hr1-eb-dial', 'fx-bass-harmonist-hr1-e-dial', 'fx-bass-harmonist-hr1-f-dial',
                'fx-bass-harmonist-hr1-g-dial', 'fx-bass-harmonist-hr1-ab-dial', 'fx-bass-harmonist-hr1-a-dial', 'fx-bass-harmonist-hr1-bb-dial', 'fx-bass-harmonist-hr1-b-dial',

                'fx-bass-sitar-sim-tones-dial',


                'fx-harmonist-hr1-c-dial', 'fx-harmonist-hr1-db-dial', 'fx-harmonist-hr1-d-dial', 'fx-harmonist-hr1-eb-dial', 'fx-harmonist-hr1-e-dial', 'fx-harmonist-hr1-f-dial',
                'fx-harmonist-hr1-fs-dial', 'fx-harmonist-hr1-g-dial', 'fx-harmonist-hr1-ab-dial', 'fx-harmonist-hr1-a-dial', 'fx-harmonist-hr1-bb-dial', 'fx-harmonist-hr1-b-dial',
                'fx-harmonist-hr2-c-dial', 'fx-harmonist-hr2-db-dial', 'fx-harmonist-hr2-d-dial', 'fx-harmonist-hr2-eb-dial', 'fx-harmonist-hr2-e-dial', 'fx-harmonist-hr2-f-dial',
                'fx-harmonist-hr2-fs-dial', 'fx-harmonist-hr2-g-dial', 'fx-harmonist-hr2-ab-dial', 'fx-harmonist-hr2-a-dial', 'fx-harmonist-hr2-bb-dial', 'fx-harmonist-hr2-b-dial',

                'fx-bass-harmonist-hr1-c-dial', 'fx-bass-harmonist-hr1-db-dial', 'fx-bass-harmonist-hr1-d-dial', 'fx-bass-harmonist-hr1-eb-dial', 'fx-bass-harmonist-hr1-e-dial', 'fx-bass-harmonist-hr1-f-dial',
                'fx-bass-harmonist-hr1-fs-dial', 'fx-bass-harmonist-hr1-g-dial', 'fx-bass-harmonist-hr1-ab-dial', 'fx-bass-harmonist-hr1-a-dial', 'fx-bass-harmonist-hr1-bb-dial', 'fx-bass-harmonist-hr1-b-dial',
                'fx-bass-harmonist-hr2-c-dial', 'fx-bass-harmonist-hr2-db-dial', 'fx-bass-harmonist-hr2-d-dial', 'fx-bass-harmonist-hr2-eb-dial', 'fx-bass-harmonist-hr2-e-dial', 'fx-bass-harmonist-hr2-f-dial',
                'fx-bass-harmonist-hr2-fs-dial', 'fx-bass-harmonist-hr2-g-dial', 'fx-bass-harmonist-hr2-ab-dial', 'fx-bass-harmonist-hr2-a-dial', 'fx-bass-harmonist-hr2-bb-dial', 'fx-bass-harmonist-hr2-b-dial',

                'fx-pitch-shifter-ps1-pitch-dial', 'fx-pitch-shifter-ps2-pitch-dial',
                'fx-bass-pitch-shifter-ps1-pitch-dial', 'fx-bass-pitch-shifter-ps2-pitch-dial',
                'fx-pitch-shifter-ps1-fine-dial', 'fx-pitch-shifter-ps2-fine-dial',
                'fx-bass-pitch-shifter-ps1-fine-dial', 'fx-bass-pitch-shifter-ps2-fine-dial',

                'menu-input-setting-normal-sens-dial', 'menu-input-setting-normal-low-dial', 'menu-input-setting-normal-high-dial', 'menu-input-setting-piezo-tone-l-dial', 'menu-input-setting-piezo-tone-h-dial', 'menu-input-setting-normal-pu-gain-dial', 'total-setting-ns-threshold-dial',
                'menu-input-setting-bass-normal-sens-dial', 'menu-input-setting-bass-normal-low-dial', 'menu-input-setting-bass-normal-high-dial', 'menu-input-setting-bass-piezo-tone-l-dial', 'menu-input-setting-bass-piezo-tone-h-dial', 'menu-input-setting-bass-normal-pu-gain-dial', 'total-setting-bass-ns-threshold-dial',
            ]
        },
        i: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 0, texts: ['OFF'] }
            ],
            dialIds: [
                'assign-bank-msb-dial', 'assign-bank-lsb-dial',
                'assign-bank-msb-bass-dial', 'assign-bank-lsb-bass-dial',
                'patch-midi1-setting-bank_msb-dial', 'patch-midi1-setting-bank_lsb-dial', 'patch-midi1-setting-cc1_sharp-dial', 'patch-midi1-setting-cc2_sharp-dial',
                'patch-midi2-setting-bank_msb-dial', 'patch-midi2-setting-bank_lsb-dial', 'patch-midi2-setting-cc1_sharp-dial', 'patch-midi2-setting-cc2_sharp-dial',
                'patch-midi3-setting-bank_msb-dial', 'patch-midi3-setting-bank_lsb-dial', 'patch-midi3-setting-cc1_sharp-dial', 'patch-midi3-setting-cc2_sharp-dial',
                'patch-midi4-setting-bank_msb-dial', 'patch-midi4-setting-bank_lsb-dial', 'patch-midi4-setting-cc1_sharp-dial', 'patch-midi4-setting-cc2_sharp-dial',
                'ctl-guitar-to-midi-bank-msb-dial', 'ctl-guitar-to-midi-str6-bank-msb-dial', 'ctl-guitar-to-midi-str5-bank-msb-dial', 'ctl-guitar-to-midi-str4-bank-msb-dial',
                'ctl-guitar-to-midi-str3-bank-msb-dial', 'ctl-guitar-to-midi-str2-bank-msb-dial', 'ctl-guitar-to-midi-str1-bank-msb-dial',
                'ctl-guitar-to-midi-bank-lsb-dial', 'ctl-guitar-to-midi-str6-bank-lsb-dial', 'ctl-guitar-to-midi-str5-bank-lsb-dial', 'ctl-guitar-to-midi-str4-bank-lsb-dial',
                'ctl-guitar-to-midi-str3-bank-lsb-dial', 'ctl-guitar-to-midi-str2-bank-lsb-dial', 'ctl-guitar-to-midi-str1-bank-lsb-dial',
                'patch-midi1-bass-setting-bank_msb-dial', 'patch-midi1-bass-setting-bank_lsb-dial', 'patch-midi1-bass-setting-cc1_sharp-dial', 'patch-midi1-bass-setting-cc2_sharp-dial',
                'patch-midi2-bass-setting-bank_msb-dial', 'patch-midi2-bass-setting-bank_lsb-dial', 'patch-midi2-bass-setting-cc1_sharp-dial', 'patch-midi2-bass-setting-cc2_sharp-dial',
                'patch-midi3-bass-setting-bank_msb-dial', 'patch-midi3-bass-setting-bank_lsb-dial', 'patch-midi3-bass-setting-cc1_sharp-dial', 'patch-midi3-bass-setting-cc2_sharp-dial',
                'patch-midi4-bass-setting-bank_msb-dial', 'patch-midi4-bass-setting-bank_lsb-dial', 'patch-midi4-bass-setting-cc1_sharp-dial', 'patch-midi4-bass-setting-cc2_sharp-dial',
                'ctl-bass-to-midi-bank-msb-dial', 'ctl-bass-to-midi-str6-bank-msb-dial', 'ctl-bass-to-midi-str5-bank-msb-dial', 'ctl-bass-to-midi-str4-bank-msb-dial',
                'ctl-bass-to-midi-str3-bank-msb-dial', 'ctl-bass-to-midi-str2-bank-msb-dial', 'ctl-bass-to-midi-str1-bank-msb-dial',
                'ctl-bass-to-midi-bank-lsb-dial', 'ctl-bass-to-midi-str6-bank-lsb-dial', 'ctl-bass-to-midi-str5-bank-lsb-dial', 'ctl-bass-to-midi-str4-bank-lsb-dial',
                'ctl-bass-to-midi-str3-bank-lsb-dial', 'ctl-bass-to-midi-str2-bank-lsb-dial', 'ctl-bass-to-midi-str1-bank-lsb-dial',
            ],
            offset: -1
        },
        j: {
            type: NUMPAD_TYPE.withText,
            textInfoArr: [
                { start: 1201, texts: ['1/32', '1/16T', '1/32D', '1/16', '1/8T', '1/16D', '1/8', '1/4T', '1/8D', '1/4', '1/2T', '1/4D', '1/2', '1/1T', '1/2D', '1/1', '1/1D', '2/1'] }
            ],
            dialIds: ['master-delay-analog-time-dial'],
            offset: 0
        },
        k: {
            type: NUMPAD_TYPE.decimal,
            dialIds: ['inst-guitar-eq-e-gtr-low-mid-q-dial', 'reverb-time-dial', 'reverb-bass-time-dial',
                'fx-bass-reverb-time-dial',
                'fx-reverb-time-dial',

                'fx-chorus-pre-delay-dial', 'fx-chorus-pre-delay-2-dial', 'fx-chorus-pre-delay-1-dial',
                'fx-bass-chorus-pre-delay-dial', 'fx-bass-chorus-pre-delay-2-dial', 'fx-bass-chorus-pre-delay-1-dial',
            ],
            offset: 0
        },
    };
})();
