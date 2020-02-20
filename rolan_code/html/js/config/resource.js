//
//	resource.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

function Resource() {

	var _ = [
		{ icon: "images/menu_editor@2x.png, images/menu_librarian@2x.png, images/menu_tonecentral@2x.png, images/menu_tuner@2x.png, images/menu_menu@2x.png" },
		{
			text: "ACOUSTIC, CLEAN, CRUNCH, LEAD, BROWN",
			icon: "images/amp_type_bg5@2x.png, images/amp_type_bg4@2x.png, images/amp_type_bg3@2x.png, images/amp_type_bg2@2x.png, images/amp_type_bg1@2x.png"
		},
		{ text:	"OFF, ON" },
		{ text:	"GENERIC, VENDOR" },
		{ text:	"1 - 10" },
		{ text:	"GUITAR, BASS" },
		{ text:	"0 - 399" },
		{ text:	"MULTI, MONO" },
		{ text:	"WAIT, IMMED" },
		{ text:	"U01, U02, U03, U04, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U17, U18, U19, U20, U21, U22, U23, U24, U25, U26, U27, U28, U29, U30, U31, U32, U33, U34, U35, U36, U37, U38, U39, U40, U41, U42, U43, U44, U45, U46, U47, U48, U49, U50, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31, P32, P33, P34, P35, P36, P37, P38, P39, P40, P41, P42, P43, P44, P45, P46, P47, P48, P49, P50" },
		{ text:	"OFF, TUNER" },
		{ text:	"MAIN, SUB, MAIN+SUB" },
		{ text:	"0 - 1208" },
		{ text:	"SET1, SET2, SET3, SET4, SET5, SET6, SET7, SET8, SET9, SET10" },
		{ text:	"OFF, *, PATCH +1, PATCH -1, LEVEL +10, LEVEL +20, LEVEL -10, LEVEL -20, BPM TAP, DLY1 TAP, DLY2 TAP, MST DLY TAP, FX1 DLY TAP, FX2 DLY TAP, FX3 DLY TAP, TUNER, MANUAL, MANUAL/TUNER, TUNER/MANUAL, INST1, INST2, INST3, INST ALL, INST1 NOR MIX, INST2 NOR MIX, INST3 NOR MIX, NORMAL, 1:ALT TUNE, 2:ALT TUNE, 3:ALT TUNE, ALL:ALT TUNE, 1:12STR, 2:12STR, 3:12STR, ALL:12STR, 1:STR BEND, 2:STR BEND, 3:STR BEND, ALL:STR BEND, INST1 LFO1, INST1 LFO2, INST1 LFO1&2, INST2 LFO1, INST2 LFO2, INST2 LFO1&2, INST3 LFO1, INST3 LFO2, INST3 LFO1&2, INST ALL LFO, INST1 SEQ1, INST1 SEQ2, INST1 SEQ1&2, INST2 SEQ1, INST2 SEQ2, INST2 SEQ1&2, INST3 SEQ1, INST3 SEQ2, INST3 SEQ1&2, INST ALL SEQ, 1:SEQ1 TRIG, 1:SEQ2 TRIG, 1:SEQ1&2 TRIG, 2:SEQ1 TRIG, 2:SEQ2 TRIG, 2:SEQ1&2 TRIG, 3:SEQ1 TRIG, 3:SEQ2 TRIG, 3:SEQ1&2 TRIG, ALL:SEQ TRIG, 1:SEQ1 TURBO, 1:SEQ2 TURBO, 1:SEQ1&2 TURBO, 2:SEQ1 TURBO, 2:SEQ2 TURBO, 2:SEQ1&2 TURBO, 3:SEQ1 TURBO, 3:SEQ2 TURBO, 3:SEQ1&2 TURBO, ALL:SEQ TURBO, INST 1 HOLD, INST 2 HOLD, INST 3 HOLD, INST ALL HOLD, SYNC RETRIG, 1:PU SEL UP, 2:PU SEL UP, 3:PU SEL UP, 1:PU SEL DOWN, 2:PU SEL DOWN, 3:PU SEL DOWN, INST1 AMP, INST2 AMP, INST3 AMP, INST1 AMP SOLO, INST2 AMP SOLO, INST3 AMP SOLO, FX1, FX2, FX3, CMP, DS, DS SOLO, AMP, AMP SOLO, EQ1, EQ2, NS, DLY1, DLY2, MST DLY, CHO, REV, S/R, FX1 TRIGGER, FX2 TRIGGER, FX3 TRIGGER, MST DLY TRIGGER, DIV CH.SELECT, MIDI START, MMC PLAY" },
		{ text:	"TOGGLE, MOMENT" },
		{ text:	"OFF, BANK DOWN, BANK UP, PATCH +1, PATCH -1, LEVEL +10, LEVEL +20, LEVEL -10, LEVEL -20, BPM TAP, DLY1 TAP, DLY2 TAP, MST DLY TAP, FX1 DLY TAP, FX2 DLY TAP, FX3 DLY TAP, TUNER, MANUAL, MANUAL/TUNER, TUNER/MANUAL, INST1, INST2, INST3, INST ALL, INST1 NOR MIX, INST2 NOR MIX, INST3 NOR MIX, NORMAL, 1:ALT TUNE, 2:ALT TUNE, 3:ALT TUNE, ALL:ALT TUNE, 1:12STR, 2:12STR, 3:12STR, ALL:12STR, 1:STR BEND, 2:STR BEND, 3:STR BEND, ALL:STR BEND, INST1 LFO1, INST1 LFO2, INST1 LFO1&2, INST2 LFO1, INST2 LFO2, INST2 LFO1&2, INST3 LFO1, INST3 LFO2, INST3 LFO1&2, INST ALL LFO, INST1 SEQ1, INST1 SEQ2, INST1 SEQ1&2, INST2 SEQ1, INST2 SEQ2, INST2 SEQ1&2, INST3 SEQ1, INST3 SEQ2, INST3 SEQ1&2, INST ALL SEQ, 1:SEQ1 TRIG, 1:SEQ2 TRIG, 1:SEQ1&2 TRIG, 2:SEQ1 TRIG, 2:SEQ2 TRIG, 2:SEQ1&2 TRIG, 3:SEQ1 TRIG, 3:SEQ2 TRIG, 3:SEQ1&2 TRIG, ALL:SEQ TRIG, 1:SEQ1 TURBO, 1:SEQ2 TURBO, 1:SEQ1&2 TURBO, 2:SEQ1 TURBO, 2:SEQ2 TURBO, 2:SEQ1&2 TURBO, 3:SEQ1 TURBO, 3:SEQ2 TURBO, 3:SEQ1&2 TURBO, ALL:SEQ TURBO, INST 1 HOLD, INST 2 HOLD, INST 3 HOLD, INST ALL HOLD, SYNC RETRIG, 1:PU SEL UP, 2:PU SEL UP, 3:PU SEL UP, 1:PU SEL DOWN, 2:PU SEL DOWN, 3:PU SEL DOWN, INST1 AMP, INST2 AMP, INST3 AMP, INST1 AMP SOLO, INST2 AMP SOLO, INST3 AMP SOLO, FX1, FX2, FX3, CMP, DS, DS SOLO, AMP, AMP SOLO, EQ1, EQ2, NS, DLY1, DLY2, MST DLY, CHO, REV, S/R, FX1 TRIGGER, FX2 TRIGGER, FX3 TRIGGER, MST DLY TRIGGER, DIV CH.SELECT, MIDI START, MMC PLAY" },
		{ text:	"OFF, LEVEL +10, LEVEL +20, LEVEL -10, LEVEL -20, BPM TAP, DLY1 TAP, DLY2 TAP, MST DLY TAP, FX1 DLY TAP, FX2 DLY TAP, FX3 DLY TAP, TUNER, MANUAL, MANUAL/TUNER, TUNER/MANUAL, INST1, INST2, INST3, INST ALL, INST1 NOR MIX, INST2 NOR MIX, INST3 NOR MIX, NORMAL, 1:ALT TUNE, 2:ALT TUNE, 3:ALT TUNE, ALL:ALT TUNE, 1:12STR, 2:12STR, 3:12STR, ALL:12STR, 1:STR BEND, 2:STR BEND, 3:STR BEND, ALL:STR BEND, INST1 LFO1, INST1 LFO2, INST1 LFO1&2, INST2 LFO1, INST2 LFO2, INST2 LFO1&2, INST3 LFO1, INST3 LFO2, INST3 LFO1&2, INST ALL LFO, INST1 SEQ1, INST1 SEQ2, INST1 SEQ1&2, INST2 SEQ1, INST2 SEQ2, INST2 SEQ1&2, INST3 SEQ1, INST3 SEQ2, INST3 SEQ1&2, INST ALL SEQ, 1:SEQ1 TRIG, 1:SEQ2 TRIG, 1:SEQ1&2 TRIG, 2:SEQ1 TRIG, 2:SEQ2 TRIG, 2:SEQ1&2 TRIG, 3:SEQ1 TRIG, 3:SEQ2 TRIG, 3:SEQ1&2 TRIG, ALL:SEQ TRIG, 1:SEQ1 TURBO, 1:SEQ2 TURBO, 1:SEQ1&2 TURBO, 2:SEQ1 TURBO, 2:SEQ2 TURBO, 2:SEQ1&2 TURBO, 3:SEQ1 TURBO, 3:SEQ2 TURBO, 3:SEQ1&2 TURBO, ALL:SEQ TURBO, INST 1 HOLD, INST 2 HOLD, INST 3 HOLD, INST ALL HOLD, SYNC RETRIG, 1:PU SEL UP, 2:PU SEL UP, 3:PU SEL UP, 1:PU SEL DOWN, 2:PU SEL DOWN, 3:PU SEL DOWN, INST1 AMP, INST2 AMP, INST3 AMP, INST1 AMP SOLO, INST2 AMP SOLO, INST3 AMP SOLO, FX1, FX2, FX3, CMP, DS, DS SOLO, AMP, AMP SOLO, EQ1, EQ2, NS, DLY1, DLY2, MST DLY, CHO, REV, S/R, FX1 TRIGGER, FX2 TRIGGER, FX3 TRIGGER, MST DLY TRIGGER, DIV CH.SELECT, MIDI START, MMC PLAY" },
		{ text:	"OFF, FV1, FV2, FV1+TUNER, FV2+TUNER, FX1 PEDAL POS., FX2 PEDAL POS., FX3 PEDAL POS., PATCH LEVEL100, PATCH LEVEL200, INST1 LEVEL, INST2 LEVEL, INST3 LEVEL, INST ALL LEVEL, INST1 CUTOFF, INST2 CUTOFF, INST3 CUTOFF, INST ALL CUT OFF, INST1 RESO, INST2 RESO, INST3 RESO, INST ALL RESO, 1:GTR VOL, 2:GTR VOL, 3:GTR VOL, ALL:GTR VOL, 1:NOR MIX 100, 1:NOR MIX 200, 2:NOR MIX 100, 2:NOR MIX 200, 3:NOR MIX 100, 3:NOR MIX 200, ALL:NOR MIX100, ALL:NOR MIX200, 1:STR BEND, 2:STR BEND, 3:STR BEND, ALL:STR BEND, 1:DYNA BEND, 2:DYNA BEND, 3:DYNA BEND, ALL:DYNA BEND, MIXER A/B, BALANCER 1 A/B, BALANCER 2 A/B, BALANCER 3 A/B" },
		{ text:	"PATCH, SYSTEM" },
		{ text:	"MEMORY, MANUAL" },
		{ text:	"OFF, RED, BLUE, LIGHT BLUE, GREEN, YELLOW, WHITE, PURPLE, AUTO, AUTO RED, AUTO BLUE, AUTO LIGHT BLUE, AUTO GREEN, AUTO YELLOW, AUTO WHITE, AUTO PURPLE" },
		{ text:	"Ch.1, Ch.2, Ch.3, Ch.4, Ch.5, Ch.6, Ch.7, Ch.8, Ch.9, Ch.10, Ch.11, Ch.12, Ch.13, Ch.14, Ch.15, Ch.16" },
		{ text:	"Ch.1, Ch.2, Ch.3, Ch.4, Ch.5, Ch.6, Ch.7, Ch.8, Ch.9, Ch.10, Ch.11, Ch.12, Ch.13, Ch.14, Ch.15, Ch.16, RX" },
		{ text:	"AUTO, INTERNAL, MIDI(AUTO), USB(AUTO)" },
		{ text:	"OFF, MIDI OUT, USB OUT, USB/MIDI" },
		{ text:	"FIX, PATCH MIDI" },
		{ text:	"FIX, PROG" },
		{ text:	"OFF, CC# 1, CC# 2, CC# 3, CC# 4, CC# 5, CC# 6, CC# 7, CC# 8, CC# 9, CC#10, CC#11, CC#12, CC#13, CC#14, CC#15, CC#16, CC#17, CC#18, CC#19, CC#20, CC#21, CC#22, CC#23, CC#24, CC#25, CC#26, CC#27, CC#28, CC#29, CC#30, CC#31, CC#64, CC#65, CC#66, CC#67, CC#68, CC#69, CC#70, CC#71, CC#72, CC#73, CC#74, CC#75, CC#76, CC#77, CC#78, CC#79, CC#80, CC#81, CC#82, CC#83, CC#84, CC#85, CC#86, CC#87, CC#88, CC#89, CC#90, CC#91, CC#92, CC#93, CC#94, CC#95" },
		{ text:	"1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32" },
		{ text:	"32 - 126" },
		{ text:	"GK-3, GK-2A, GC-1, PIEZO, PIEZO F, PIEZO G, PIEZO L, PIEZO R" },
		{ text:	"500mm, 501mm, 502mm, 503mm, 504mm, 505mm, 506mm, 507mm, 508mm, 509mm, 510mm, 511mm, 512mm, 513mm, 514mm, 515mm, 516mm, 517mm, 518mm, 519mm, 520mm, 521mm, 522mm, 523mm, 524mm, 525mm, 526mm, 527mm, 528mm, 529mm, 530mm, 531mm, 532mm, 533mm, 534mm, 535mm, 536mm, 537mm, 538mm, 539mm, 540mm, 541mm, 542mm, 543mm, 544mm, 545mm, 546mm, 547mm, 548mm, 549mm, 550mm, 551mm, 552mm, 553mm, 554mm, 555mm, 556mm, 557mm, 558mm, 559mm, 560mm, 561mm, 562mm, 563mm, 564mm, 565mm, 566mm, 567mm, 568mm, 569mm, 570mm, 571mm, 572mm, 573mm, 574mm, 575mm, 576mm, 577mm, 578mm, 579mm, 580mm, 581mm, 582mm, 583mm, 584mm, 585mm, 586mm, 587mm, 588mm, 589mm, 590mm, 591mm, 592mm, 593mm, 594mm, 595mm, 596mm, 597mm, 598mm, 599mm, 600mm, 601mm, 602mm, 603mm, 604mm, 605mm, 606mm, 607mm, 608mm, 609mm, 610mm, 611mm, 612mm, 613mm, 614mm, 615mm, 616mm, 617mm, 618mm, 619mm, 620mm, 621mm, 622mm, 623mm, 624mm, 625mm, 626mm, 627mm, 628mm, 629mm, 630mm, 631mm, 632mm, 633mm, 634mm, 635mm, 636mm, 637mm, 638mm, 639mm, 640mm, 641mm, 642mm, 643mm, 644mm, 645mm, 646mm, 647mm, 648mm, 649mm, 650mm, 651mm, 652mm, 653mm, 654mm, 655mm, 656mm, 657mm, 658mm, 659mm, 660mm, ST, LP" },
		{ text:	"10.0mm, 10.5mm, 11.0mm, 11.5mm, 12.0mm, 12.5mm, 13.0mm, 13.5mm, 14.0mm, 14.5mm, 15.0mm, 15.5mm, 16.0mm, 16.5mm, 17.0mm, 17.5mm, 18.0mm, 18.5mm, 19.0mm, 19.5mm, 20.0mm, 20.5mm, 21.0mm, 21.5mm, 22.0mm, 22.5mm, 23.0mm, 23.5mm, 24.0mm, 24.5mm, 25.0mm, 25.5mm, 26.0mm, 26.5mm, 27.0mm, 27.5mm, 28.0mm, 28.5mm, 29.0mm, 29.5mm, 30.0mm" },
		{ text:	"0 - 100" },
		{ text:	"NORMAL, INVERSE" },
		{ text:	"NORMAL, REVERSE" },
		{ text:	"[dB]" },
		{ text:	"GK-3B, GK-2B, PIEZO, PIEZO G, PIEZO R" },
		{ text:	"710mm, 711mm, 712mm, 713mm, 714mm, 715mm, 716mm, 717mm, 718mm, 719mm, 720mm, 721mm, 722mm, 723mm, 724mm, 725mm, 726mm, 727mm, 728mm, 729mm, 730mm, 731mm, 732mm, 733mm, 734mm, 735mm, 736mm, 737mm, 738mm, 739mm, 740mm, 741mm, 742mm, 743mm, 744mm, 745mm, 746mm, 747mm, 748mm, 749mm, 750mm, 751mm, 752mm, 753mm, 754mm, 755mm, 756mm, 757mm, 758mm, 759mm, 760mm, 761mm, 762mm, 763mm, 764mm, 765mm, 766mm, 767mm, 768mm, 769mm, 770mm, 771mm, 772mm, 773mm, 774mm, 775mm, 776mm, 777mm, 778mm, 779mm, 780mm, 781mm, 782mm, 783mm, 784mm, 785mm, 786mm, 787mm, 788mm, 789mm, 790mm, 791mm, 792mm, 793mm, 794mm, 795mm, 796mm, 797mm, 798mm, 799mm, 800mm, 801mm, 802mm, 803mm, 804mm, 805mm, 806mm, 807mm, 808mm, 809mm, 810mm, 811mm, 812mm, 813mm, 814mm, 815mm, 816mm, 817mm, 818mm, 819mm, 820mm, 821mm, 822mm, 823mm, 824mm, 825mm, 826mm, 827mm, 828mm, 829mm, 830mm, 831mm, 832mm, 833mm, 834mm, 835mm, 836mm, 837mm, 838mm, 839mm, 840mm, 841mm, 842mm, 843mm, 844mm, 845mm, 846mm, 847mm, 848mm, 849mm, 850mm, 851mm, 852mm, 853mm, 854mm, 855mm, 856mm, 857mm, 858mm, 859mm, 860mm, 861mm, 862mm, 863mm, 864mm, 865mm, 866mm, 867mm, 868mm, 869mm, 870mm, 871mm, 872mm, 873mm, 874mm, 875mm, 876mm, 877mm, 878mm, 879mm, 880mm, 881mm, 882mm, 883mm, 884mm, 885mm, 886mm, 887mm, 888mm, 889mm, 890mm, 891mm, 892mm, 893mm, 894mm, 895mm, 896mm, 897mm, 898mm, 899mm, 900mm, 901mm, 902mm, 903mm, 904mm, 905mm, 906mm, 907mm, 908mm, 909mm, 910mm, 911mm, 912mm, 913mm, 914mm, 915mm, 916mm, 917mm, 918mm, 919mm, 920mm, 921mm, 922mm, 923mm, 924mm, 925mm, 926mm, 927mm, 928mm, 929mm, 930mm, 931mm, 932mm, 933mm, 934mm, 935mm, 936mm, 937mm, 938mm, 939mm, 940mm, SHORT, MEDIUM, LONG JB/PB, EXTRA LONG" },
		{ text:	"4STR-1, 4STR-2, 4STR-3, 5STR Lo1, 5STR Lo2, 5STR Hi1, 5STR Hi2, 6STR" },
		{ text:	"5.5mm, 6.0mm, 6.5mm, 7.0mm, 7.5mm, 8.0mm, 8.5mm, 9.0mm, 9.5mm, 10.0mm, 10.5mm, 11.0mm, 11.5mm, 12.0mm, 12.5mm, 13.0mm, 13.5mm, 14.0mm, 14.5mm, 15.0mm, 15.5mm, 16.0mm, 16.5mm, 17.0mm, 17.5mm, 18.0mm, 18.5mm, 19.0mm, 19.5mm, 20.0mm, 20.5mm, 21.0mm, 21.5mm, 22.0mm, 22.5mm, 23.0mm, 23.5mm, 24.0mm, 24.5mm, 25.0mm, 25.5mm, 26.0mm, 26.5mm, 27.0mm, 27.5mm, 28.0mm, 28.5mm, 29.0mm, 29.5mm, 30.0mm, 30.5mm, 31.0mm, 31.5mm, 32.0mm, 32.5mm, 33.0mm, 33.5mm, 34.0mm, 34.5mm, 35.0mm, 35.5mm, 36.0mm, 36.5mm, 37.0mm, 37.5mm, 38.0mm, 38.5mm, 39.0mm, 39.5mm, 40.0mm, 40.5mm, 41.0mm, 41.5mm, 42.0mm, 42.5mm, 43.0mm, 43.5mm, 44.0mm, 44.5mm, 45.0mm, 45.5mm, 46.0mm, 46.5mm, 47.0mm, 47.5mm, 48.0mm, 48.5mm, 49.0mm, 49.5mm, 50.0mm, 50.5mm, 51.0mm, 51.5mm, 52.0mm, 52.5mm, 53.0mm, 53.5mm, 54.0mm, 54.5mm, 55.0mm, 55.5mm" },
		{ text:	"-50 - 50" },
		{ text:	"PATCH, ---, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50" },
		{ text:	"PATCH, ---, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10" },
		{ text:	"0 - 1" },
		{ text:	"0 - 99" },
		{ text:	"ALL OFF, ONLY OUTPUT LEVEL, ALL ON, DISABLE NUMBER, CALIBRATION, ONLY OUTPUT LEVEL(enable RQ1)" },
		{ text:	"STOP, PLAY" },
		{ text:	"STOP, START" },
		{ text:	"COMPRESSOR, DISTORTION, AMP, NOISE SUPPRESSOR, FX1, FX2, FX3, EQUALIZER1, EQUALIZER2, CHORUS, DELAY1, DELAY2, MASTER DELAY, REVERB, FOOT VOLUME1, FOOT VOLUME2, SEND/RETURN, DIVIDER, BRANCH_AB, MIXER, SUB OUT L, SUB OUT R, MAIN OUT L, MAIN OUT R, MASTER, INST1, INST2, INST3, NORMAL INPUT, DUMMY_INPUT, BALANCER1, BALANCER2, BALANCER3, DUMMY DIVIDER1, DUMMY DIVIDER2, DUMMY DIVIDER3, DUMMY BRANCH_AB1, DUMMY BRANCH_AB2, DUMMY BRANCH_AB3" },
		{ text:	"400 - 2500" },
		{ text:	"INTERNAL, MIDI, USB" },
		{ text:	"0 - 255" },
		{ text:	"NONE, 1" },
		{ text:	"PLAY, TUNER POLY, TUNER MONO, GK SENS, NORMAL IN SENS" },
		{ text:	"OFF, GK SENS, NORMAL IN SENS" },
		{ text:	"OFF, GK SETTING, NORMAL IN SETTING" },
		{ text:	"OFF, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128" },
		{ text:	"OFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127" },
		{ text:	"0 - 127" },
		{ text:	"GK VOL, GK SW1, GK SW2, CTL1, CTL2, CTL3, CTL4, CTL5, CTL6, EXP1, EXP2" },
		{ text:	"SYSTEM, SET1, SET2, SET3, SET4, SET5, SET6, SET7, SET8, SET9, SET10" },
		{ text:	"0 - 2147483647" },
		{ text:	"0 - 2047" },
		{ text:	"-32768 - 32767" },
		{ text:	"NUM1, NUM2, NUM3, NUM4, CUR NUM, BANKDOWN, BANKUP, CTL1, CTL2, CTL3, CTL4, CTL5, CTL6, EXP1, EXP2, GK SW1, GK SW2, GK VOL, WAVE PEDAL, STRING1, STRING2, STRING3, STRING4, STRING5, STRING6, STRING ALL, NORMAL IN, CC# 1, CC# 2, CC# 3, CC# 4, CC# 5, CC# 6, CC# 7, CC# 8, CC# 9, CC#10, CC#11, CC#12, CC#13, CC#14, CC#15, CC#16, CC#17, CC#18, CC#19, CC#20, CC#21, CC#22, CC#23, CC#24, CC#25, CC#26, CC#27, CC#28, CC#29, CC#30, CC#31, CC#64, CC#65, CC#66, CC#67, CC#68, CC#69, CC#70, CC#71, CC#72, CC#73, CC#74, CC#75, CC#76, CC#77, CC#78, CC#79, CC#80, CC#81, CC#82, CC#83, CC#84, CC#85, CC#86, CC#87, CC#88, CC#89, CC#90, CC#91, CC#92, CC#93, CC#94, CC#95" },
		{ text:	"0 - 16382" },
		{ text:	"1 - 16383" },
		{ text:	"0 - 100, 2/1, 1/1D, 1/1, 1/2D, 1/1T, 1/2, 1/4D, 1/2T, 1/4, 1/8D, 1/4T, 1/8, 1/16D, 1/8T, 1/16, 1/32D, 1/16T, 1/32" },
		{ text:	"SAW, TRI, SINE" },
		{ text:	"SYSTEM, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16" },
		{ text:	"0 - 16383" },
		{ text:	"1 - 128" },
		{ text:	"SIN, SAW UP, SAW DOWN, TRI, SQR, RANDOM, S&H" },
		{ text:	"OFF, SEQ1, SEQ2" },
		{ text:	"-24 - 24" },
		{ text:	"1 - 16" },
		{ text:	"0 - 12" },
		{ text:	"LINE/PHONES, JC-120 RETURN, JC-120 INPUT, COMBO AMP 1 RETURN, COMBO AMP 1 INPUT, COMBO AMP 2 RETURN, COMBO AMP 2 INPUT, STACK AMP RETURN, STACK AMP INPUT, BASS AMP WITH TWEETER, BASS AMP NO TWEETER" },
		{ text:	"20.0Hz, 25.0Hz, 31.5Hz, 40.0Hz, 50.0Hz, 63.0Hz, 80.0Hz, 100Hz, 125Hz, 160Hz, 200Hz, 250Hz, 315Hz, 400Hz, 500Hz, 630Hz, 800Hz, 1.00kHz, 1.25kHz, 1.60kHz, 2.00kHz, 2.50kHz, 3.15kHz, 4.00kHz, 5.00kHz, 6.30kHz, 8.00kHz, 10.0kHz, 12.5kHz, 16.0kHz" },
		{ text:	"0.5, 1, 2, 4, 8, 16" },
		{ text:	"FLAT, 20.0Hz, 25.0Hz, 31.5Hz, 40.0Hz, 50.0Hz, 63.0Hz, 80.0Hz, 100Hz, 125Hz, 160Hz, 200Hz, 250Hz, 315Hz, 400Hz, 500Hz, 630Hz, 800Hz, 1.00kHz, 1.25kHz, 1.60kHz, 2.00kHz, 2.50kHz, 3.15kHz, 4.00kHz, 5.00kHz, 6.30kHz, 8.00kHz, 10.0kHz, 12.5kHz, 16.0kHz" },
		{ text:	"20.0Hz, 25.0Hz, 31.5Hz, 40.0Hz, 50.0Hz, 63.0Hz, 80.0Hz, 100Hz, 125Hz, 160Hz, 200Hz, 250Hz, 315Hz, 400Hz, 500Hz, 630Hz, 800Hz, 1.00kHz, 1.25kHz, 1.60kHz, 2.00kHz, 2.50kHz, 3.15kHz, 4.00kHz, 5.00kHz, 6.30kHz, 8.00kHz, 10.0kHz, 12.5kHz, 16.0kHz, FLAT" },
		{ text:	"0 - 200" },
		{ text:	"[%]" },
		{ text:	"STANDARD, MIX, RE-SYNTH1, RE-SYNTH2, DIRECT OFF" },
		{ text:	"INST1, INST2, INST3, NORMAL IN, BALANCER1, BALANCER2, BALANCER3, MAIN OUT, SUB OUT, MAIN & SUB" },
		{ text:	"INST1, INST2, INST3, NORMAL IN, BALANCER1, BALANCER2, BALANCER3, MAIN OUT, SUB OUT" },
		{ text:	"0 - 1000" },
		{ text:	"OFF, ON, ON(w/POLY)" },
		{ text:	"1 - 2000" },
		{ text:	"[Hz]" },
		{ text:	"6-REGULAR, 6-DROP D, 7-REGULAR, 7-DROP A, 4-B REGULAR, 5-B REGULAR" },
		{ text:	"-5, -4, -3, -2, -1, ----" },
		{ text:	"MUTE, BYPASS, THRU" },
		{ text:	"GK SW1, GK SW2, CTL1, CTL2, CTL3, CTL4, CTL5, CTL6" },
		{ text:	"Ch.1, Ch.2, Ch.3, Ch.4, Ch.5, Ch.6, Ch.7, Ch.8, Ch.9, Ch.10, Ch.11" },
		{ text:	"GK, NORMAL" },
		{ text:	"OFF, 1m/3ft, 3m/10ft, 5m/16ft, 7m/23ft, 9m/30ft, 12m/40ft" },
		{ text:	"NORMAL, INVERT" },
		{ text:	"SLOW1, SLOW2, NORMAL, FAST" },
		{ text:	"SINGLE, DUAL" },
		{ text:	"A, B" },
		{ text:	"100:0, 100:2, 100:4, 100:6, 100:8, 100:10, 100:12, 100:14, 100:16, 100:18, 100:20, 100:22, 100:24, 100:26, 100:28, 100:30, 100:32, 100:34, 100:36, 100:38, 100:40, 100:42, 100:44, 100:46, 100:48, 100:50, 100:52, 100:54, 100:56, 100:58, 100:60, 100:62, 100:64, 100:66, 100:68, 100:70, 100:72, 100:74, 100:76, 100:78, 100:80, 100:82, 100:84, 100:86, 100:88, 100:90, 100:92, 100:94, 100:96, 100:98, 100:100, 98:100, 96:100, 94:100, 92:100, 90:100, 88:100, 86:100, 84:100, 82:100, 80:100, 78:100, 76:100, 74:100, 72:100, 70:100, 68:100, 66:100, 64:100, 62:100, 60:100, 58:100, 56:100, 54:100, 52:100, 50:100, 48:100, 46:100, 44:100, 42:100, 40:100, 38:100, 36:100, 34:100, 32:100, 30:100, 28:100, 26:100, 24:100, 22:100, 20:100, 18:100, 16:100, 14:100, 12:100, 10:100, 8:100, 6:100, 4:100, 2:100, 0:100" },
		{ text:	"L50, L49, L48, L47, L46, L45, L44, L43, L42, L41, L40, L39, L38, L37, L36, L35, L34, L33, L32, L31, L30, L29, L28, L27, L26, L25, L24, L23, L22, L21, L20, L19, L18, L17, L16, L15, L14, L13, L12, L11, L10, L09, L08, L07, L06, L05, L04, L03, L02, L01, CENTER, R01, R02, R03, R04, R05, R06, R07, R08, R09, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, R26, R27, R28, R29, R30, R31, R32, R33, R34, R35, R36, R37, R38, R39, R40, R41, R42, R43, R44, R45, R46, R47, R48, R49, R50" },
		{ text:	"NORMAL, DIRECT MIX, BRANCH OUT" },
		{ text:	"C(Am), Db(Bbm), D(Bm), Eb(Cm), E(C#m), F(Dm), F#(D#m), G(Em), Ab(Fm), A(F#m), Bb(Gm), B(G#m)" },
		{ text:	"INST1, INST2, INST3, NORMAL" },
		{ text:	"COMPRESSOR, DISTORTION, AMP, NOISE SUPPRESSOR, FX1, FX2, FX3, EQUALIZER1, EQUALIZER2, CHORUS, DELAY1, DELAY2, MASTER DELAY, REVERB, FOOT VOLUME1, FOOT VOLUME2, SEND/RETURN, DIVIDER, BRANCH_AB, MIXER, SUB OUT L, SUB OUT R, MAIN OUT L, MAIN OUT R, SPLIT" },
		{ text:	"MONO, POLY" },
		{ text:	"OFF, INST1, INST2, INST3" },
		{ text:	"FEEL1, FEEL2, FEEL3, FEEL4, NO DYNA" },
		{ text:	"OFF, TYPE1, TYPE2, TYPE3" },
		{ text:	"HOLD1, HOLD2, HOLD3" },
		{ text:	"DYNAMIC SYNTH, OSC SYNTH, GR-300, E.GUITAR, ACOUSTIC, E.BASS, VIO GUITAR, POLY FX" },
		{ text:	"DYNAMIC SYNTH, OSC SYNTH, ANALOG GR, E.BASS, AC BASS, E.GTR, POLY FX" },
		{ text:	"MODE1, MODE2" },
		{ text:	"SIN, SAW, TRI, SQR, PWM, DETUNE SAW, NOISE, FEEDBACK OSC, SUPER SAW, INPUT" },
		{ text:	"0 - 0" },
		{ text:	"OFF, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10" },
		{ text:	"LPF, HPF, BPF, PKG, LADDER LPF, LADDER HPF" },
		{ text:	"-12dB, -24dB" },
		{ text:	"1 - 60" },
		{ text:	"A0, Bb0, B0, C1, Db1, D1, Eb1, E1, F1, F#1, G1, Ab1, A1, Bb1, B1, C2, Db2, D2, Eb2, E2, F2, F#2, G2, Ab2, A2, Bb2, B2, C3, Db3, D3, Eb3, E3, F3, F#3, G3, Ab3, A3, Bb3, B3, C4, Db4, D4, Eb4, E4, F4, F#4, G4, Ab4, A4, Bb4, B4, C5, Db5, D5, Eb5, E5, F5, F#5, G5, Ab5, A5, Bb5, B5, C6, Db6, D6, Eb6, E6" },
		{ text:	"SINGLE, DUAL, SYNC, RING" },
		{ text:	"SIN, SAW, TRI, SQR, PWM, NOISE" },
		{ text:	"-12 - 12" },
		{ text:	"MODE1, MODE2, MODE3" },
		{ text:	"VCO, V+D, DIST" },
		{ text:	"OFF, ON, INV" },
		{ text:	"OFF, A, B" },
		{ text:	"CLA-ST, MOD-ST, TE, LP, P-90, 335, L4, RICK, LIPS, WIDE RANGE, BRIGHT HUM, FRETLESS" },
		{ text:	"REAR, R+C, CENTER, C+F, R+F, FRONT, ALL" },
		{ text:	"MILD, STANDARD, BRIGHT1, BRIGHT2" },
		{ text:	"TRANSPARENT, NATURAL, BOUTIQUE, SUPREME, MAXIMUM, JUGGERNAUT, X-CRUNCH, X-HI GAIN, X-MODDED, JC-120, TWIN COMBO, DELUXE COMBO, TWEED COMBO, DIAMOND AMP, BRIT STACK, RECTI STACK, MATCH COMBO, BG COMBO, ORNG STACK, BGNR UB METAL, NATURAL BASS, X-DRIVE BASS, CONCERT, SUPER FLAT, FLIP TOP, B MAN, BASS 360, SW-TOUR, AC BASS, GK BASS, MARK" },
		{ text:	"0 - 120" },
		{ text:	"-10 - 10" },
		{ text:	"LOW, MIDDLE, HIGH" },
		{ text:	"OFF, ORIGINAL, 1x8\", 1x10\", 1x12\", 2x12\", 4x10\", 4x12\", 8x12\", B1x15\", B1x18\", B2x15\", B4x10\", B8x10\"" },
		{ text:	"DYN57, DYN421, CND451, CND87, FLAT" },
		{ text:	"SHORT, MEDIUM, LONG" },
		{ text:	"CENTER, 1cm, 2cm, 3cm, 4cm, 5cm, 6cm, 7cm, 8cm, 9cm, 10cm" },
		{ text:	"0 - 3" },
		{ text:	"0 - 63" },
		{ text:	"0 - 126" },
		{ text:	"VINT JB, JB, VINT PB, PB, M-MAN, RICK, T-BIRD, ACTIVE, VIOLIN, FRETLESS" },
		{ text:	"REAR, R+F, FRONT" },
		{ text:	"RHYTHM, SOLO" },
		{ text:	"JB(REAR), JB(REAR+FRONT), JB(FRONT), PB" },
		{ text:	"0 - 2" },
		{ text:	"0 - 89" },
		{ text:	"0 - 178" },
		{ text:	"MA28, TRP-0, GB45, GB SML, GLD 40, NYLON, RESO, BANJO, SITAR" },
		{ text:	"FRONT, R+F, REAR, PIEZO" },
		{ text:	"0 - 4" },
		{ text:	"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10" },
		{ text:	"JB, PB, FRETLESS" },
		{ text:	"ST, LP, FRETLESS" },
		{ text:	"REAR, R+C, CENTER, C+F, R+F, FRONT" },
		{ text:	"-1, 0, +1" },
		{ text:	"DISTORTION, CRYSTAL, RICH MOD, SLOW PAD, TOUCH WAH" },
		{ text:	"LPF, BPF" },
		{ text:	"DOWN, UP" },
		{ text:	"MILD, STANDARD, BRIGHT" },
		{ text:	"OPEN D, OPEN E, OPEN G, OPEN A, DROP D, DROP Db, DROP C, DROP B, DROP Bb, DROP A, D-MODAL, NASHVL, -12STEP, -11STEP, -10STEP, -9STEP, -8STEP, -7STEP, -6STEP, -5STEP, -4STEP, -3STEP, -2STEP, -1STEP, +1STEP, +2STEP, +3STEP, +4STEP, +5STEP, +6STEP, +7STEP, +8STEP, +9STEP, +10STEP, +11STEP, +12STEP, USER" },
		{ text:	"NORMAL, USER" },
		{ text:	"[ms]" },
		{ text:	"-12STEP, -11STEP, -10STEP, -9STEP, -8STEP, -7STEP, -6STEP, -5STEP, -4STEP, -3STEP, -2STEP, -1STEP, +1STEP, +2STEP, +3STEP, +4STEP, +5STEP, +6STEP, +7STEP, +8STEP, +9STEP, +10STEP, +11STEP, +12STEP, USER" },
		{ text:	"BOSS COMP, Hi-BAND, LIGHT, D-COMP, ORANGE, FAT, MILD" },
		{ text:	"MID BOOST, CLEAN BOOST, TREBLE BOOST, CRUNCH, NATURAL OD, WARM OD, FAT DS, LEAD DS, METAL DS, OCT FUZZ, A-DIST, X-OD, X-DIST, BLUES OD, OD-1, T-SCREAM, TURBO OD, DIST, CENTA OD, RAT, GUV DS, DIST+, METAL ZONE, HM-2, METAL CORE, '60S FUZZ, MUFF FUZZ, BASS OD, BASS DS, BASS MT, BASS FUZZ, HI BAND DRIVE, X-BASS OD, BASS DRV, BASS DI" },
		{ text:	"GK INPUT, NORMAL INPUT, NS INPUT, INST1 OUT, INST2 OUT, INST3 OUT" },
		{ text:	"0ms, 1ms, 2ms, 3ms, 4ms, 5ms, 6ms, 7ms, 8ms, 9ms, 10ms, 11ms, 12ms, 13ms, 14ms, 15ms, 16ms, 17ms, 18ms, 19ms, 20ms, 21ms, 22ms, 23ms, 24ms, 25ms, 26ms, 27ms, 28ms, 29ms, 30ms, 31ms, 32ms, 33ms, 34ms, 35ms, 36ms, 37ms, 38ms, 39ms, 40ms, 41ms, 42ms, 43ms, 44ms, 45ms, 46ms, 47ms, 48ms, 49ms, 50ms, 51ms, 52ms, 53ms, 54ms, 55ms, 56ms, 57ms, 58ms, 59ms, 60ms, 61ms, 62ms, 63ms, 64ms, 65ms, 66ms, 67ms, 68ms, 69ms, 70ms, 71ms, 72ms, 73ms, 74ms, 75ms, 76ms, 77ms, 78ms, 79ms, 80ms, 81ms, 82ms, 83ms, 84ms, 85ms, 86ms, 87ms, 88ms, 89ms, 90ms, 91ms, 92ms, 93ms, 94ms, 95ms, 96ms, 97ms, 98ms, 99ms, 100ms, 101ms, 102ms, 103ms, 104ms, 105ms, 106ms, 107ms, 108ms, 109ms, 110ms, 111ms, 112ms, 113ms, 114ms, 115ms, 116ms, 117ms, 118ms, 119ms, 120ms, 121ms, 122ms, 123ms, 124ms, 125ms, 126ms, 127ms, 128ms, 129ms, 130ms, 131ms, 132ms, 133ms, 134ms, 135ms, 136ms, 137ms, 138ms, 139ms, 140ms, 141ms, 142ms, 143ms, 144ms, 145ms, 146ms, 147ms, 148ms, 149ms, 150ms, 151ms, 152ms, 153ms, 154ms, 155ms, 156ms, 157ms, 158ms, 159ms, 160ms, 161ms, 162ms, 163ms, 164ms, 165ms, 166ms, 167ms, 168ms, 169ms, 170ms, 171ms, 172ms, 173ms, 174ms, 175ms, 176ms, 177ms, 178ms, 179ms, 180ms, 181ms, 182ms, 183ms, 184ms, 185ms, 186ms, 187ms, 188ms, 189ms, 190ms, 191ms, 192ms, 193ms, 194ms, 195ms, 196ms, 197ms, 198ms, 199ms, 200ms, 201ms, 202ms, 203ms, 204ms, 205ms, 206ms, 207ms, 208ms, 209ms, 210ms, 211ms, 212ms, 213ms, 214ms, 215ms, 216ms, 217ms, 218ms, 219ms, 220ms, 221ms, 222ms, 223ms, 224ms, 225ms, 226ms, 227ms, 228ms, 229ms, 230ms, 231ms, 232ms, 233ms, 234ms, 235ms, 236ms, 237ms, 238ms, 239ms, 240ms, 241ms, 242ms, 243ms, 244ms, 245ms, 246ms, 247ms, 248ms, 249ms, 250ms, 251ms, 252ms, 253ms, 254ms, 255ms, 256ms, 257ms, 258ms, 259ms, 260ms, 261ms, 262ms, 263ms, 264ms, 265ms, 266ms, 267ms, 268ms, 269ms, 270ms, 271ms, 272ms, 273ms, 274ms, 275ms, 276ms, 277ms, 278ms, 279ms, 280ms, 281ms, 282ms, 283ms, 284ms, 285ms, 286ms, 287ms, 288ms, 289ms, 290ms, 291ms, 292ms, 293ms, 294ms, 295ms, 296ms, 297ms, 298ms, 299ms, 300ms, 301ms, 302ms, 303ms, 304ms, 305ms, 306ms, 307ms, 308ms, 309ms, 310ms, 311ms, 312ms, 313ms, 314ms, 315ms, 316ms, 317ms, 318ms, 319ms, 320ms, 321ms, 322ms, 323ms, 324ms, 325ms, 326ms, 327ms, 328ms, 329ms, 330ms, 331ms, 332ms, 333ms, 334ms, 335ms, 336ms, 337ms, 338ms, 339ms, 340ms, 341ms, 342ms, 343ms, 344ms, 345ms, 346ms, 347ms, 348ms, 349ms, 350ms, 351ms, 352ms, 353ms, 354ms, 355ms, 356ms, 357ms, 358ms, 359ms, 360ms, 361ms, 362ms, 363ms, 364ms, 365ms, 366ms, 367ms, 368ms, 369ms, 370ms, 371ms, 372ms, 373ms, 374ms, 375ms, 376ms, 377ms, 378ms, 379ms, 380ms, 381ms, 382ms, 383ms, 384ms, 385ms, 386ms, 387ms, 388ms, 389ms, 390ms, 391ms, 392ms, 393ms, 394ms, 395ms, 396ms, 397ms, 398ms, 399ms, 400ms, 401ms, 402ms, 403ms, 404ms, 405ms, 406ms, 407ms, 408ms, 409ms, 410ms, 411ms, 412ms, 413ms, 414ms, 415ms, 416ms, 417ms, 418ms, 419ms, 420ms, 421ms, 422ms, 423ms, 424ms, 425ms, 426ms, 427ms, 428ms, 429ms, 430ms, 431ms, 432ms, 433ms, 434ms, 435ms, 436ms, 437ms, 438ms, 439ms, 440ms, 441ms, 442ms, 443ms, 444ms, 445ms, 446ms, 447ms, 448ms, 449ms, 450ms, 451ms, 452ms, 453ms, 454ms, 455ms, 456ms, 457ms, 458ms, 459ms, 460ms, 461ms, 462ms, 463ms, 464ms, 465ms, 466ms, 467ms, 468ms, 469ms, 470ms, 471ms, 472ms, 473ms, 474ms, 475ms, 476ms, 477ms, 478ms, 479ms, 480ms, 481ms, 482ms, 483ms, 484ms, 485ms, 486ms, 487ms, 488ms, 489ms, 490ms, 491ms, 492ms, 493ms, 494ms, 495ms, 496ms, 497ms, 498ms, 499ms, 500ms, 501ms, 502ms, 503ms, 504ms, 505ms, 506ms, 507ms, 508ms, 509ms, 510ms, 511ms, 512ms, 513ms, 514ms, 515ms, 516ms, 517ms, 518ms, 519ms, 520ms, 521ms, 522ms, 523ms, 524ms, 525ms, 526ms, 527ms, 528ms, 529ms, 530ms, 531ms, 532ms, 533ms, 534ms, 535ms, 536ms, 537ms, 538ms, 539ms, 540ms, 541ms, 542ms, 543ms, 544ms, 545ms, 546ms, 547ms, 548ms, 549ms, 550ms, 551ms, 552ms, 553ms, 554ms, 555ms, 556ms, 557ms, 558ms, 559ms, 560ms, 561ms, 562ms, 563ms, 564ms, 565ms, 566ms, 567ms, 568ms, 569ms, 570ms, 571ms, 572ms, 573ms, 574ms, 575ms, 576ms, 577ms, 578ms, 579ms, 580ms, 581ms, 582ms, 583ms, 584ms, 585ms, 586ms, 587ms, 588ms, 589ms, 590ms, 591ms, 592ms, 593ms, 594ms, 595ms, 596ms, 597ms, 598ms, 599ms, 600ms, 601ms, 602ms, 603ms, 604ms, 605ms, 606ms, 607ms, 608ms, 609ms, 610ms, 611ms, 612ms, 613ms, 614ms, 615ms, 616ms, 617ms, 618ms, 619ms, 620ms, 621ms, 622ms, 623ms, 624ms, 625ms, 626ms, 627ms, 628ms, 629ms, 630ms, 631ms, 632ms, 633ms, 634ms, 635ms, 636ms, 637ms, 638ms, 639ms, 640ms, 641ms, 642ms, 643ms, 644ms, 645ms, 646ms, 647ms, 648ms, 649ms, 650ms, 651ms, 652ms, 653ms, 654ms, 655ms, 656ms, 657ms, 658ms, 659ms, 660ms, 661ms, 662ms, 663ms, 664ms, 665ms, 666ms, 667ms, 668ms, 669ms, 670ms, 671ms, 672ms, 673ms, 674ms, 675ms, 676ms, 677ms, 678ms, 679ms, 680ms, 681ms, 682ms, 683ms, 684ms, 685ms, 686ms, 687ms, 688ms, 689ms, 690ms, 691ms, 692ms, 693ms, 694ms, 695ms, 696ms, 697ms, 698ms, 699ms, 700ms, 701ms, 702ms, 703ms, 704ms, 705ms, 706ms, 707ms, 708ms, 709ms, 710ms, 711ms, 712ms, 713ms, 714ms, 715ms, 716ms, 717ms, 718ms, 719ms, 720ms, 721ms, 722ms, 723ms, 724ms, 725ms, 726ms, 727ms, 728ms, 729ms, 730ms, 731ms, 732ms, 733ms, 734ms, 735ms, 736ms, 737ms, 738ms, 739ms, 740ms, 741ms, 742ms, 743ms, 744ms, 745ms, 746ms, 747ms, 748ms, 749ms, 750ms, 751ms, 752ms, 753ms, 754ms, 755ms, 756ms, 757ms, 758ms, 759ms, 760ms, 761ms, 762ms, 763ms, 764ms, 765ms, 766ms, 767ms, 768ms, 769ms, 770ms, 771ms, 772ms, 773ms, 774ms, 775ms, 776ms, 777ms, 778ms, 779ms, 780ms, 781ms, 782ms, 783ms, 784ms, 785ms, 786ms, 787ms, 788ms, 789ms, 790ms, 791ms, 792ms, 793ms, 794ms, 795ms, 796ms, 797ms, 798ms, 799ms, 800ms, 801ms, 802ms, 803ms, 804ms, 805ms, 806ms, 807ms, 808ms, 809ms, 810ms, 811ms, 812ms, 813ms, 814ms, 815ms, 816ms, 817ms, 818ms, 819ms, 820ms, 821ms, 822ms, 823ms, 824ms, 825ms, 826ms, 827ms, 828ms, 829ms, 830ms, 831ms, 832ms, 833ms, 834ms, 835ms, 836ms, 837ms, 838ms, 839ms, 840ms, 841ms, 842ms, 843ms, 844ms, 845ms, 846ms, 847ms, 848ms, 849ms, 850ms, 851ms, 852ms, 853ms, 854ms, 855ms, 856ms, 857ms, 858ms, 859ms, 860ms, 861ms, 862ms, 863ms, 864ms, 865ms, 866ms, 867ms, 868ms, 869ms, 870ms, 871ms, 872ms, 873ms, 874ms, 875ms, 876ms, 877ms, 878ms, 879ms, 880ms, 881ms, 882ms, 883ms, 884ms, 885ms, 886ms, 887ms, 888ms, 889ms, 890ms, 891ms, 892ms, 893ms, 894ms, 895ms, 896ms, 897ms, 898ms, 899ms, 900ms, 901ms, 902ms, 903ms, 904ms, 905ms, 906ms, 907ms, 908ms, 909ms, 910ms, 911ms, 912ms, 913ms, 914ms, 915ms, 916ms, 917ms, 918ms, 919ms, 920ms, 921ms, 922ms, 923ms, 924ms, 925ms, 926ms, 927ms, 928ms, 929ms, 930ms, 931ms, 932ms, 933ms, 934ms, 935ms, 936ms, 937ms, 938ms, 939ms, 940ms, 941ms, 942ms, 943ms, 944ms, 945ms, 946ms, 947ms, 948ms, 949ms, 950ms, 951ms, 952ms, 953ms, 954ms, 955ms, 956ms, 957ms, 958ms, 959ms, 960ms, 961ms, 962ms, 963ms, 964ms, 965ms, 966ms, 967ms, 968ms, 969ms, 970ms, 971ms, 972ms, 973ms, 974ms, 975ms, 976ms, 977ms, 978ms, 979ms, 980ms, 981ms, 982ms, 983ms, 984ms, 985ms, 986ms, 987ms, 988ms, 989ms, 990ms, 991ms, 992ms, 993ms, 994ms, 995ms, 996ms, 997ms, 998ms, 999ms, 1000ms, 1001ms, 1002ms, 1003ms, 1004ms, 1005ms, 1006ms, 1007ms, 1008ms, 1009ms, 1010ms, 1011ms, 1012ms, 1013ms, 1014ms, 1015ms, 1016ms, 1017ms, 1018ms, 1019ms, 1020ms, 1021ms, 1022ms, 1023ms, 1024ms, 1025ms, 1026ms, 1027ms, 1028ms, 1029ms, 1030ms, 1031ms, 1032ms, 1033ms, 1034ms, 1035ms, 1036ms, 1037ms, 1038ms, 1039ms, 1040ms, 1041ms, 1042ms, 1043ms, 1044ms, 1045ms, 1046ms, 1047ms, 1048ms, 1049ms, 1050ms, 1051ms, 1052ms, 1053ms, 1054ms, 1055ms, 1056ms, 1057ms, 1058ms, 1059ms, 1060ms, 1061ms, 1062ms, 1063ms, 1064ms, 1065ms, 1066ms, 1067ms, 1068ms, 1069ms, 1070ms, 1071ms, 1072ms, 1073ms, 1074ms, 1075ms, 1076ms, 1077ms, 1078ms, 1079ms, 1080ms, 1081ms, 1082ms, 1083ms, 1084ms, 1085ms, 1086ms, 1087ms, 1088ms, 1089ms, 1090ms, 1091ms, 1092ms, 1093ms, 1094ms, 1095ms, 1096ms, 1097ms, 1098ms, 1099ms, 1100ms, 1101ms, 1102ms, 1103ms, 1104ms, 1105ms, 1106ms, 1107ms, 1108ms, 1109ms, 1110ms, 1111ms, 1112ms, 1113ms, 1114ms, 1115ms, 1116ms, 1117ms, 1118ms, 1119ms, 1120ms, 1121ms, 1122ms, 1123ms, 1124ms, 1125ms, 1126ms, 1127ms, 1128ms, 1129ms, 1130ms, 1131ms, 1132ms, 1133ms, 1134ms, 1135ms, 1136ms, 1137ms, 1138ms, 1139ms, 1140ms, 1141ms, 1142ms, 1143ms, 1144ms, 1145ms, 1146ms, 1147ms, 1148ms, 1149ms, 1150ms, 1151ms, 1152ms, 1153ms, 1154ms, 1155ms, 1156ms, 1157ms, 1158ms, 1159ms, 1160ms, 1161ms, 1162ms, 1163ms, 1164ms, 1165ms, 1166ms, 1167ms, 1168ms, 1169ms, 1170ms, 1171ms, 1172ms, 1173ms, 1174ms, 1175ms, 1176ms, 1177ms, 1178ms, 1179ms, 1180ms, 1181ms, 1182ms, 1183ms, 1184ms, 1185ms, 1186ms, 1187ms, 1188ms, 1189ms, 1190ms, 1191ms, 1192ms, 1193ms, 1194ms, 1195ms, 1196ms, 1197ms, 1198ms, 1199ms, 1200ms, 1201ms, 1202ms, 1203ms, 1204ms, 1205ms, 1206ms, 1207ms, 1208ms, 1209ms, 1210ms, 1211ms, 1212ms, 1213ms, 1214ms, 1215ms, 1216ms, 1217ms, 1218ms, 1219ms, 1220ms, 1221ms, 1222ms, 1223ms, 1224ms, 1225ms, 1226ms, 1227ms, 1228ms, 1229ms, 1230ms, 1231ms, 1232ms, 1233ms, 1234ms, 1235ms, 1236ms, 1237ms, 1238ms, 1239ms, 1240ms, 1241ms, 1242ms, 1243ms, 1244ms, 1245ms, 1246ms, 1247ms, 1248ms, 1249ms, 1250ms, 1251ms, 1252ms, 1253ms, 1254ms, 1255ms, 1256ms, 1257ms, 1258ms, 1259ms, 1260ms, 1261ms, 1262ms, 1263ms, 1264ms, 1265ms, 1266ms, 1267ms, 1268ms, 1269ms, 1270ms, 1271ms, 1272ms, 1273ms, 1274ms, 1275ms, 1276ms, 1277ms, 1278ms, 1279ms, 1280ms, 1281ms, 1282ms, 1283ms, 1284ms, 1285ms, 1286ms, 1287ms, 1288ms, 1289ms, 1290ms, 1291ms, 1292ms, 1293ms, 1294ms, 1295ms, 1296ms, 1297ms, 1298ms, 1299ms, 1300ms, 1301ms, 1302ms, 1303ms, 1304ms, 1305ms, 1306ms, 1307ms, 1308ms, 1309ms, 1310ms, 1311ms, 1312ms, 1313ms, 1314ms, 1315ms, 1316ms, 1317ms, 1318ms, 1319ms, 1320ms, 1321ms, 1322ms, 1323ms, 1324ms, 1325ms, 1326ms, 1327ms, 1328ms, 1329ms, 1330ms, 1331ms, 1332ms, 1333ms, 1334ms, 1335ms, 1336ms, 1337ms, 1338ms, 1339ms, 1340ms, 1341ms, 1342ms, 1343ms, 1344ms, 1345ms, 1346ms, 1347ms, 1348ms, 1349ms, 1350ms, 1351ms, 1352ms, 1353ms, 1354ms, 1355ms, 1356ms, 1357ms, 1358ms, 1359ms, 1360ms, 1361ms, 1362ms, 1363ms, 1364ms, 1365ms, 1366ms, 1367ms, 1368ms, 1369ms, 1370ms, 1371ms, 1372ms, 1373ms, 1374ms, 1375ms, 1376ms, 1377ms, 1378ms, 1379ms, 1380ms, 1381ms, 1382ms, 1383ms, 1384ms, 1385ms, 1386ms, 1387ms, 1388ms, 1389ms, 1390ms, 1391ms, 1392ms, 1393ms, 1394ms, 1395ms, 1396ms, 1397ms, 1398ms, 1399ms, 1400ms, 1401ms, 1402ms, 1403ms, 1404ms, 1405ms, 1406ms, 1407ms, 1408ms, 1409ms, 1410ms, 1411ms, 1412ms, 1413ms, 1414ms, 1415ms, 1416ms, 1417ms, 1418ms, 1419ms, 1420ms, 1421ms, 1422ms, 1423ms, 1424ms, 1425ms, 1426ms, 1427ms, 1428ms, 1429ms, 1430ms, 1431ms, 1432ms, 1433ms, 1434ms, 1435ms, 1436ms, 1437ms, 1438ms, 1439ms, 1440ms, 1441ms, 1442ms, 1443ms, 1444ms, 1445ms, 1446ms, 1447ms, 1448ms, 1449ms, 1450ms, 1451ms, 1452ms, 1453ms, 1454ms, 1455ms, 1456ms, 1457ms, 1458ms, 1459ms, 1460ms, 1461ms, 1462ms, 1463ms, 1464ms, 1465ms, 1466ms, 1467ms, 1468ms, 1469ms, 1470ms, 1471ms, 1472ms, 1473ms, 1474ms, 1475ms, 1476ms, 1477ms, 1478ms, 1479ms, 1480ms, 1481ms, 1482ms, 1483ms, 1484ms, 1485ms, 1486ms, 1487ms, 1488ms, 1489ms, 1490ms, 1491ms, 1492ms, 1493ms, 1494ms, 1495ms, 1496ms, 1497ms, 1498ms, 1499ms, 1500ms, 1501ms, 1502ms, 1503ms, 1504ms, 1505ms, 1506ms, 1507ms, 1508ms, 1509ms, 1510ms, 1511ms, 1512ms, 1513ms, 1514ms, 1515ms, 1516ms, 1517ms, 1518ms, 1519ms, 1520ms, 1521ms, 1522ms, 1523ms, 1524ms, 1525ms, 1526ms, 1527ms, 1528ms, 1529ms, 1530ms, 1531ms, 1532ms, 1533ms, 1534ms, 1535ms, 1536ms, 1537ms, 1538ms, 1539ms, 1540ms, 1541ms, 1542ms, 1543ms, 1544ms, 1545ms, 1546ms, 1547ms, 1548ms, 1549ms, 1550ms, 1551ms, 1552ms, 1553ms, 1554ms, 1555ms, 1556ms, 1557ms, 1558ms, 1559ms, 1560ms, 1561ms, 1562ms, 1563ms, 1564ms, 1565ms, 1566ms, 1567ms, 1568ms, 1569ms, 1570ms, 1571ms, 1572ms, 1573ms, 1574ms, 1575ms, 1576ms, 1577ms, 1578ms, 1579ms, 1580ms, 1581ms, 1582ms, 1583ms, 1584ms, 1585ms, 1586ms, 1587ms, 1588ms, 1589ms, 1590ms, 1591ms, 1592ms, 1593ms, 1594ms, 1595ms, 1596ms, 1597ms, 1598ms, 1599ms, 1600ms, 1601ms, 1602ms, 1603ms, 1604ms, 1605ms, 1606ms, 1607ms, 1608ms, 1609ms, 1610ms, 1611ms, 1612ms, 1613ms, 1614ms, 1615ms, 1616ms, 1617ms, 1618ms, 1619ms, 1620ms, 1621ms, 1622ms, 1623ms, 1624ms, 1625ms, 1626ms, 1627ms, 1628ms, 1629ms, 1630ms, 1631ms, 1632ms, 1633ms, 1634ms, 1635ms, 1636ms, 1637ms, 1638ms, 1639ms, 1640ms, 1641ms, 1642ms, 1643ms, 1644ms, 1645ms, 1646ms, 1647ms, 1648ms, 1649ms, 1650ms, 1651ms, 1652ms, 1653ms, 1654ms, 1655ms, 1656ms, 1657ms, 1658ms, 1659ms, 1660ms, 1661ms, 1662ms, 1663ms, 1664ms, 1665ms, 1666ms, 1667ms, 1668ms, 1669ms, 1670ms, 1671ms, 1672ms, 1673ms, 1674ms, 1675ms, 1676ms, 1677ms, 1678ms, 1679ms, 1680ms, 1681ms, 1682ms, 1683ms, 1684ms, 1685ms, 1686ms, 1687ms, 1688ms, 1689ms, 1690ms, 1691ms, 1692ms, 1693ms, 1694ms, 1695ms, 1696ms, 1697ms, 1698ms, 1699ms, 1700ms, 1701ms, 1702ms, 1703ms, 1704ms, 1705ms, 1706ms, 1707ms, 1708ms, 1709ms, 1710ms, 1711ms, 1712ms, 1713ms, 1714ms, 1715ms, 1716ms, 1717ms, 1718ms, 1719ms, 1720ms, 1721ms, 1722ms, 1723ms, 1724ms, 1725ms, 1726ms, 1727ms, 1728ms, 1729ms, 1730ms, 1731ms, 1732ms, 1733ms, 1734ms, 1735ms, 1736ms, 1737ms, 1738ms, 1739ms, 1740ms, 1741ms, 1742ms, 1743ms, 1744ms, 1745ms, 1746ms, 1747ms, 1748ms, 1749ms, 1750ms, 1751ms, 1752ms, 1753ms, 1754ms, 1755ms, 1756ms, 1757ms, 1758ms, 1759ms, 1760ms, 1761ms, 1762ms, 1763ms, 1764ms, 1765ms, 1766ms, 1767ms, 1768ms, 1769ms, 1770ms, 1771ms, 1772ms, 1773ms, 1774ms, 1775ms, 1776ms, 1777ms, 1778ms, 1779ms, 1780ms, 1781ms, 1782ms, 1783ms, 1784ms, 1785ms, 1786ms, 1787ms, 1788ms, 1789ms, 1790ms, 1791ms, 1792ms, 1793ms, 1794ms, 1795ms, 1796ms, 1797ms, 1798ms, 1799ms, 1800ms, 1801ms, 1802ms, 1803ms, 1804ms, 1805ms, 1806ms, 1807ms, 1808ms, 1809ms, 1810ms, 1811ms, 1812ms, 1813ms, 1814ms, 1815ms, 1816ms, 1817ms, 1818ms, 1819ms, 1820ms, 1821ms, 1822ms, 1823ms, 1824ms, 1825ms, 1826ms, 1827ms, 1828ms, 1829ms, 1830ms, 1831ms, 1832ms, 1833ms, 1834ms, 1835ms, 1836ms, 1837ms, 1838ms, 1839ms, 1840ms, 1841ms, 1842ms, 1843ms, 1844ms, 1845ms, 1846ms, 1847ms, 1848ms, 1849ms, 1850ms, 1851ms, 1852ms, 1853ms, 1854ms, 1855ms, 1856ms, 1857ms, 1858ms, 1859ms, 1860ms, 1861ms, 1862ms, 1863ms, 1864ms, 1865ms, 1866ms, 1867ms, 1868ms, 1869ms, 1870ms, 1871ms, 1872ms, 1873ms, 1874ms, 1875ms, 1876ms, 1877ms, 1878ms, 1879ms, 1880ms, 1881ms, 1882ms, 1883ms, 1884ms, 1885ms, 1886ms, 1887ms, 1888ms, 1889ms, 1890ms, 1891ms, 1892ms, 1893ms, 1894ms, 1895ms, 1896ms, 1897ms, 1898ms, 1899ms, 1900ms, 1901ms, 1902ms, 1903ms, 1904ms, 1905ms, 1906ms, 1907ms, 1908ms, 1909ms, 1910ms, 1911ms, 1912ms, 1913ms, 1914ms, 1915ms, 1916ms, 1917ms, 1918ms, 1919ms, 1920ms, 1921ms, 1922ms, 1923ms, 1924ms, 1925ms, 1926ms, 1927ms, 1928ms, 1929ms, 1930ms, 1931ms, 1932ms, 1933ms, 1934ms, 1935ms, 1936ms, 1937ms, 1938ms, 1939ms, 1940ms, 1941ms, 1942ms, 1943ms, 1944ms, 1945ms, 1946ms, 1947ms, 1948ms, 1949ms, 1950ms, 1951ms, 1952ms, 1953ms, 1954ms, 1955ms, 1956ms, 1957ms, 1958ms, 1959ms, 1960ms, 1961ms, 1962ms, 1963ms, 1964ms, 1965ms, 1966ms, 1967ms, 1968ms, 1969ms, 1970ms, 1971ms, 1972ms, 1973ms, 1974ms, 1975ms, 1976ms, 1977ms, 1978ms, 1979ms, 1980ms, 1981ms, 1982ms, 1983ms, 1984ms, 1985ms, 1986ms, 1987ms, 1988ms, 1989ms, 1990ms, 1991ms, 1992ms, 1993ms, 1994ms, 1995ms, 1996ms, 1997ms, 1998ms, 1999ms, 2000ms, 1/32, 1/16T, 1/32D, 1/16, 1/8T, 1/16D, 1/8, 1/4T, 1/8D, 1/4, 1/2T, 1/4D, 1/2, 1/1T, 1/2D, 1/1, 1/1D, 2/1" },
		{ text:	"STEREO1, STEREO2, PAN, DUAL-S, DUAL-P, DUAL L/R, REVERSE, ANALOG, TAPE, MOD, WARP, TWIST" },
		{ text:	"RISE->FALL, RISE->FADE" },
		{ text:	"MONO, STEREO1, STEREO2, DUAL" },
		{ text:	"0.0ms, 0.5ms, 1.0ms, 1.5ms, 2.0ms, 2.5ms, 3.0ms, 3.5ms, 4.0ms, 4.5ms, 5.0ms, 5.5ms, 6.0ms, 6.5ms, 7.0ms, 7.5ms, 8.0ms, 8.5ms, 9.0ms, 9.5ms, 10.0ms, 10.5ms, 11.0ms, 11.5ms, 12.0ms, 12.5ms, 13.0ms, 13.5ms, 14.0ms, 14.5ms, 15.0ms, 15.5ms, 16.0ms, 16.5ms, 17.0ms, 17.5ms, 18.0ms, 18.5ms, 19.0ms, 19.5ms, 20.0ms, 20.5ms, 21.0ms, 21.5ms, 22.0ms, 22.5ms, 23.0ms, 23.5ms, 24.0ms, 24.5ms, 25.0ms, 25.5ms, 26.0ms, 26.5ms, 27.0ms, 27.5ms, 28.0ms, 28.5ms, 29.0ms, 29.5ms, 30.0ms, 30.5ms, 31.0ms, 31.5ms, 32.0ms, 32.5ms, 33.0ms, 33.5ms, 34.0ms, 34.5ms, 35.0ms, 35.5ms, 36.0ms, 36.5ms, 37.0ms, 37.5ms, 38.0ms, 38.5ms, 39.0ms, 39.5ms, 40.0ms" },
		{ text:	"TRI, SINE" },
		{ text:	"MONO, STEREO" },
		{ text:	"AMBIENCE, ROOM, HALL1, HALL2, PLATE, SPRING, MOD" },
		{ text:	"0.1s, 0.2s, 0.3s, 0.4s, 0.5s, 0.6s, 0.7s, 0.8s, 0.9s, 1.0s, 1.1s, 1.2s, 1.3s, 1.4s, 1.5s, 1.6s, 1.7s, 1.8s, 1.9s, 2.0s, 2.1s, 2.2s, 2.3s, 2.4s, 2.5s, 2.6s, 2.7s, 2.8s, 2.9s, 3.0s, 3.1s, 3.2s, 3.3s, 3.4s, 3.5s, 3.6s, 3.7s, 3.8s, 3.9s, 4.0s, 4.1s, 4.2s, 4.3s, 4.4s, 4.5s, 4.6s, 4.7s, 4.8s, 4.9s, 5.0s, 5.1s, 5.2s, 5.3s, 5.4s, 5.5s, 5.6s, 5.7s, 5.8s, 5.9s, 6.0s, 6.1s, 6.2s, 6.3s, 6.4s, 6.5s, 6.6s, 6.7s, 6.8s, 6.9s, 7.0s, 7.1s, 7.2s, 7.3s, 7.4s, 7.5s, 7.6s, 7.7s, 7.8s, 7.9s, 8.0s, 8.1s, 8.2s, 8.3s, 8.4s, 8.5s, 8.6s, 8.7s, 8.8s, 8.9s, 9.0s, 9.1s, 9.2s, 9.3s, 9.4s, 9.5s, 9.6s, 9.7s, 9.8s, 9.9s, 10.0s" },
		{ text:	"AC RESONANCE, AUTO WAH, CHORUS, CLASSIC-VIBE, COMPRESSOR, DEFRETTER, DEFRETTER BASS, DELAY, FLANGER, FLANGER BASS, FOOT VOLUME, GRAPHIC EQ, HARMONIST, HUMANIZER, ISOLATOR, LIMITER, LO-FI, OCTAVE, OCTAVE BASS, PAN, PARAMETRIC EQ, PEDAL BEND, PHASER, PITCH SHIFTER, REVERB, RING MOD, ROTARY, SITAR SIM, SLICER, SLOW GEAR, SLOW GEAR BASS, SOUND HOLD, TOUCH WAH, TOUCH WAH BASS, TREMOLO, VIBRATO, WAH" },
		{ text:	"NATURAL, WIDE, BRIGHT" },
		{ text:	"LPF, BPF, HPF" },
		{ text:	"1VOICE, 2MONO, 2STEREO" },
		{ text:	"-2oct, -14th, -13th, -12th, -11th, -10th, -9th, -1oct, -7th, -6th, -5th, -4th, -3rd, -2nd, UNISON, +2nd, +3rd, +4th, +5th, +6th, +7th, +1oct, +9th, +10th, +11th, +12th, +13th, +14th, +2oct, USER" },
		{ text:	"0ms, 1ms, 2ms, 3ms, 4ms, 5ms, 6ms, 7ms, 8ms, 9ms, 10ms, 11ms, 12ms, 13ms, 14ms, 15ms, 16ms, 17ms, 18ms, 19ms, 20ms, 21ms, 22ms, 23ms, 24ms, 25ms, 26ms, 27ms, 28ms, 29ms, 30ms, 31ms, 32ms, 33ms, 34ms, 35ms, 36ms, 37ms, 38ms, 39ms, 40ms, 41ms, 42ms, 43ms, 44ms, 45ms, 46ms, 47ms, 48ms, 49ms, 50ms, 51ms, 52ms, 53ms, 54ms, 55ms, 56ms, 57ms, 58ms, 59ms, 60ms, 61ms, 62ms, 63ms, 64ms, 65ms, 66ms, 67ms, 68ms, 69ms, 70ms, 71ms, 72ms, 73ms, 74ms, 75ms, 76ms, 77ms, 78ms, 79ms, 80ms, 81ms, 82ms, 83ms, 84ms, 85ms, 86ms, 87ms, 88ms, 89ms, 90ms, 91ms, 92ms, 93ms, 94ms, 95ms, 96ms, 97ms, 98ms, 99ms, 100ms, 101ms, 102ms, 103ms, 104ms, 105ms, 106ms, 107ms, 108ms, 109ms, 110ms, 111ms, 112ms, 113ms, 114ms, 115ms, 116ms, 117ms, 118ms, 119ms, 120ms, 121ms, 122ms, 123ms, 124ms, 125ms, 126ms, 127ms, 128ms, 129ms, 130ms, 131ms, 132ms, 133ms, 134ms, 135ms, 136ms, 137ms, 138ms, 139ms, 140ms, 141ms, 142ms, 143ms, 144ms, 145ms, 146ms, 147ms, 148ms, 149ms, 150ms, 151ms, 152ms, 153ms, 154ms, 155ms, 156ms, 157ms, 158ms, 159ms, 160ms, 161ms, 162ms, 163ms, 164ms, 165ms, 166ms, 167ms, 168ms, 169ms, 170ms, 171ms, 172ms, 173ms, 174ms, 175ms, 176ms, 177ms, 178ms, 179ms, 180ms, 181ms, 182ms, 183ms, 184ms, 185ms, 186ms, 187ms, 188ms, 189ms, 190ms, 191ms, 192ms, 193ms, 194ms, 195ms, 196ms, 197ms, 198ms, 199ms, 200ms, 201ms, 202ms, 203ms, 204ms, 205ms, 206ms, 207ms, 208ms, 209ms, 210ms, 211ms, 212ms, 213ms, 214ms, 215ms, 216ms, 217ms, 218ms, 219ms, 220ms, 221ms, 222ms, 223ms, 224ms, 225ms, 226ms, 227ms, 228ms, 229ms, 230ms, 231ms, 232ms, 233ms, 234ms, 235ms, 236ms, 237ms, 238ms, 239ms, 240ms, 241ms, 242ms, 243ms, 244ms, 245ms, 246ms, 247ms, 248ms, 249ms, 250ms, 251ms, 252ms, 253ms, 254ms, 255ms, 256ms, 257ms, 258ms, 259ms, 260ms, 261ms, 262ms, 263ms, 264ms, 265ms, 266ms, 267ms, 268ms, 269ms, 270ms, 271ms, 272ms, 273ms, 274ms, 275ms, 276ms, 277ms, 278ms, 279ms, 280ms, 281ms, 282ms, 283ms, 284ms, 285ms, 286ms, 287ms, 288ms, 289ms, 290ms, 291ms, 292ms, 293ms, 294ms, 295ms, 296ms, 297ms, 298ms, 299ms, 300ms, 1/32, 1/16T, 1/32D, 1/16, 1/8T, 1/16D, 1/8, 1/4T, 1/8D, 1/4, 1/2T, 1/4D, 1/2, 1/1T, 1/2D, 1/1, 1/1D, 2/1" },
		{ text:	"0 - 48" },
		{ text:	"PICKING, AUTO" },
		{ text:	"a, e, i, o, u" },
		{ text:	"BOSS LIMITER, RACK160D, VTG RACK U" },
		{ text:	"1:1, 1.2:1, 1.4:1, 1.6:1, 1.8:1, 2:1, 2.3:1, 2.6:1, 3:1, 3.5:1, 4:1, 5:1, 6:1, 8:1, 10:1, 12:1, 20:1, INF:1" },
		{ text:	"OFF, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1" },
		{ text:	"OFF, 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8, 1/9, 1/10, 1/11, 1/12, 1/13, 1/14, 1/15, 1/16, 1/17, 1/18, 1/19, 1/20, 1/21, 1/22, 1/23, 1/24, 1/25, 1/26, 1/27, 1/28, 1/29, 1/30, 1/31, 1/32" },
		{ text:	"D100:E0, D100:E2, D100:E4, D100:E6, D100:E8, D100:E10, D100:E12, D100:E14, D100:E16, D100:E18, D100:E20, D100:E22, D100:E24, D100:E26, D100:E28, D100:E30, D100:E32, D100:E34, D100:E36, D100:E38, D100:E40, D100:E42, D100:E44, D100:E46, D100:E48, D100:E50, D100:E52, D100:E54, D100:E56, D100:E58, D100:E60, D100:E62, D100:E64, D100:E66, D100:E68, D100:E70, D100:E72, D100:E74, D100:E76, D100:E78, D100:E80, D100:E82, D100:E84, D100:E86, D100:E88, D100:E90, D100:E92, D100:E94, D100:E96, D100:E98, D100:E100, D98:E100, D96:E100, D94:E100, D92:E100, D90:E100, D88:E100, D86:E100, D84:E100, D82:E100, D80:E100, D78:E100, D76:E100, D74:E100, D72:E100, D70:E100, D68:E100, D66:E100, D64:E100, D62:E100, D60:E100, D58:E100, D56:E100, D54:E100, D52:E100, D50:E100, D48:E100, D46:E100, D44:E100, D42:E100, D40:E100, D38:E100, D36:E100, D34:E100, D32:E100, D30:E100, D28:E100, D26:E100, D24:E100, D22:E100, D20:E100, D18:E100, D16:E100, D14:E100, D12:E100, D10:E100, D8:E100, D6:E100, D4:E100, D2:E100, D0:E100" },
		{ text:	"AUTO, MANUAL" },
		{ text:	"4STAGE, 8STAGE, 12STAGE, BiPHASE" },
		{ text:	"OFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 2/1, 1/1D, 1/1, 1/2D, 1/1T, 1/2, 1/4D, 1/2T, 1/4, 1/8D, 1/4T, 1/8, 1/16D, 1/8T, 1/16, 1/32D, 1/16T, 1/32" },
		{ text:	"FAST, MEDIUM, SLOW, MONO" },
		{ text:	"SLOW, FAST" },
		{ text:	"P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20" },
		{ text:	"1 - 99" },
		{ text:	"CRY WAH, VO WAH, FAT WAH, LIGHT WAH, 7STRING WAH, RESO WAH, BASS WAH" },
		{ text:	"SHARP, SLOW, SHORT-SHARP, SHORT-SLOW" },
		{ text:	"OFF, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20" },
		{ text:	"1, 2, 3, 4" },
		{ text:	"AFAD, LOW, HIGH" },
		{ text:	"SIN, SQR, TRI, SAW, SWEEP" },
		{ text:	"80, 200, 1000, 2000, 4000, 10000" },
		{ text:	"-100 - 0" },
		{ text:	"-100 - 40" },
		{ text:	"MUTE, OSC, INPUT, RETURN, GK_STR1, GK_STR2, GK_STR3, GK_STR4, GK_STR5, GK_STR6, USB1, USB2, USB3, USB4, USB5, USB6, USB7, USB8" },
		{ text:	"SHARP, SLOW, SHORT-SHARP, SHORT-SLOW, SUPER-SLOW" },
		{ text:	"MODE0, MODE1, MODE2, MODE3, MODE4, MODE5, MODE6, MODE7" },
		{ text:	"OFF, LIFT" },
		{ text:	"270 - 500" },
		{ text: "COMMON, ALT TUNE, GUITAR, AMP, EQ, ACOUSTIC, NS, BASS, HARMO, FILTER"},
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-blue_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-cyan_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-green_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-orange_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-pink_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-red_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-skyblue_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-white_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_theme_on@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-yellow_on@2x.png" },
		{ text:	"PRESET, USER" },
		{ text: "MONO, POLY" },
		{ text: "CONTROL FUNCTION, MANUAL FUNCTION, ASSIGN, PATCH MIDI, CONTROL LED COLOR, GUITAR TO MIDI" },
		{ icon: "images/menu_editor@2x.png, images/menu_librarian@2x.png, images/menu_tonecentral@2x.png" },
		{ icon: "images/switch_effects_off@2x.png, images/switch_effects_bg-purple_on@2x.png" },
		{ text: "PAGE1, PAGE2, PAGE3"},
		{ text: "OFF, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16"},
		{ text:	"NUM1, NUM2, NUM3, NUM4, CUR NUM, BANKDOWN, BANKUP, CTL1, CTL2, CTL3, CTL4, CTL5, CTL6, EXP1, EXP2, GK SW1, GK SW2, GK VOL, WAVE PEDAL, STRING HiC, STRING1, STRING2, STRING3, STRING4, STRING LowB, STRING ALL, NORMAL IN, CC# 1, CC# 2, CC# 3, CC# 4, CC# 5, CC# 6, CC# 7, CC# 8, CC# 9, CC#10, CC#11, CC#12, CC#13, CC#14, CC#15, CC#16, CC#17, CC#18, CC#19, CC#20, CC#21, CC#22, CC#23, CC#24, CC#25, CC#26, CC#27, CC#28, CC#29, CC#30, CC#31, CC#64, CC#65, CC#66, CC#67, CC#68, CC#69, CC#70, CC#71, CC#72, CC#73, CC#74, CC#75, CC#76, CC#77, CC#78, CC#79, CC#80, CC#81, CC#82, CC#83, CC#84, CC#85, CC#86, CC#87, CC#88, CC#89, CC#90, CC#91, CC#92, CC#93, CC#94, CC#95" },
		{ text:	"0 - 100, 2/1, 1/1D, 1/1, 1/2D, 1/1T, 1/2, 1/4D, 1/2T, 1/4, 1/8D, 1/4T, 1/8, 1/16D, 1/8T, 1/16, 1/32D, 1/16T, 1/32" },
		{ text: "0ms - 100ms" },
		{ text:	"20.0<br>Hz, 25.0<br>Hz, 31.5<br>Hz, 40.0<br>Hz, 50.0<br>Hz, 63.0<br>Hz, 80.0<br>Hz, 100<br>Hz, 125<br>Hz, 160<br>Hz, 200<br>Hz, 250<br>Hz, 315<br>Hz, 400<br>Hz, 500<br>Hz, 630<br>Hz, 800<br>Hz, 1.00<br>kHz, 1.25<br>kHz, 1.60<br>kHz, 2.00<br>kHz, 2.50<br>kHz, 3.15<br>kHz, 4.00<br>kHz, 5.00<br>kHz, 6.30<br>kHz, 8.00<br>kHz, 10.0<br>kHz, 12.5<br>kHz, 16.0<br>kHz" },
		{ text: "COMMON, ALT TUNE, OSC, FILTER, AMP, LFO1, LFO2, SEQ, LAYER" },
		{ text: "COMMON, ALT TUNE, OSC, FILTER, AMP, LFO1, LFO2" },
		{ text: "COMMON, ALT TUNE, GR-300" },
		{ text: "COMMON, ALT TUNE, ANALOG GR" },
		{ text: "COMMON, ALT TUNE, GUITAR, AMP, NS, EQ" },
		{ text: "COMMON, ALT TUNE, ACOUSTIC, AMP, NS, EQ" },
		{ text: "COMMON, ALT TUNE, ACBASS, AMP, NS, EQ" },
		{ text: "COMMON, ALT TUNE, BASS, AMP, NS, EQ" },
		{ text: "COMMON, ALT TUNE, GUITAR, HARMO, FILTER, NS, EQ" },
		{ text: "COMMON, ALT TUNE, POLY FX, NS" },
		{ text:	"FLAT, 20.0<br>Hz, 25.0<br>Hz, 31.5<br>Hz, 40.0<br>Hz, 50.0<br>Hz, 63.0<br>Hz, 80.0<br>Hz, 100<br>Hz, 125<br>Hz, 160<br>Hz, 200<br>Hz, 250<br>Hz, 315<br>Hz, 400<br>Hz, 500<br>Hz, 630<br>Hz, 800<br>Hz, 1.00<br>kHz, 1.25<br>kHz, 1.60<br>kHz, 2.00<br>kHz, 2.50<br>kHz, 3.15<br>kHz, 4.00<br>kHz, 5.00<br>kHz, 6.30<br>kHz, 8.00<br>kHz, 10.0<br>kHz, 12.5<br>kHz, 16.0<br>kHz" },
		{ text:	"20.0<br>Hz, 25.0<br>Hz, 31.5<br>Hz, 40.0<br>Hz, 50.0<br>Hz, 63.0<br>Hz, 80.0<br>Hz, 100<br>Hz, 125<br>Hz, 160<br>Hz, 200<br>Hz, 250<br>Hz, 315<br>Hz, 400<br>Hz, 500<br>Hz, 630<br>Hz, 800<br>Hz, 1.00<br>kHz, 1.25<br>kHz, 1.60<br>kHz, 2.00<br>kHz, 2.50<br>kHz, 3.15<br>kHz, 4.00<br>kHz, 5.00<br>kHz, 6.30<br>kHz, 8.00<br>kHz, 10.0<br>kHz, 12.5<br>kHz, 16.0<br>kHz,FLAT" },
		{ text: "SELECT, WRITE TO VARIATION"},
		{ text: "U01-1, U01-2, U01-3, U01-4, U02-1, U02-2, U02-3, U02-4, U03-1, U03-2, U03-3, U03-4, U04-1, U04-2, U04-3, U04-4, U05-1, U05-2, U05-3, U05-4, U06-1, U06-2, U06-3, U06-4, U07-1, U07-2, U07-3, U07-4, U08-1, U08-2, U08-3, U08-4, U09-1, U09-2, U09-3, U09-4, U10-1, U10-2, U10-3, U10-4, U11-1, U11-2, U11-3, U11-4, U12-1, U12-2, U12-3, U12-4, U13-1, U13-2, U13-3, U13-4, U14-1, U14-2, U14-3, U14-4, U15-1, U15-2, U15-3, U15-4, U16-1, U16-2, U16-3, U16-4, U17-1, U17-2, U17-3, U17-4, U18-1, U18-2, U18-3, U18-4, U19-1, U19-2, U19-3, U19-4, U20-1, U20-2, U20-3, U20-4, U21-1, U21-2, U21-3, U21-4, U22-1, U22-2, U22-3, U22-4, U23-1, U23-2, U23-3, U23-4, U24-1, U24-2, U24-3, U24-4, U25-1, U25-2, U25-3, U25-4, U26-1, U26-2, U26-3, U26-4, U27-1, U27-2, U27-3, U27-4, U28-1, U28-2, U28-3, U28-4, U29-1, U29-2, U29-3, U29-4, U30-1, U30-2, U30-3, U30-4, U31-1, U31-2, U31-3, U31-4, U32-1, U32-2, U32-3, U32-4, U33-1, U33-2, U33-3, U33-4, U34-1, U34-2, U34-3, U34-4, U35-1, U35-2, U35-3, U35-4, U36-1, U36-2, U36-3, U36-4, U37-1, U37-2, U37-3, U37-4, U38-1, U38-2, U38-3, U38-4, U39-1, U39-2, U39-3, U39-4, U40-1, U40-2, U40-3, U40-4, U41-1, U41-2, U41-3, U41-4, U42-1, U42-2, U42-3, U42-4, U43-1, U43-2, U43-3, U43-4, U44-1, U44-2, U44-3, U44-4, U45-1, U45-2, U45-3, U45-4, U46-1, U46-2, U46-3, U46-4, U47-1, U47-2, U47-3, U47-4, U48-1, U48-2, U48-3, U48-4, U49-1, U49-2, U49-3, U49-4, U50-1, U50-2, U50-3, U50-4" },
		{ text: "WRITE, CLEAR" },
		{ text:	"-,-" },
		{ text: "PATCH DATA, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10" },
		{ text:	"OFF, RED, BLUE, LIGHT BLUE, GREEN, YELLOW, WHITE, PURPLE" },
		{ text: "0 - 120" },
		{ text: "1 - 100" },
		{ text: "0 - 30" },
		{ text: "0 - 29" },
		{ text: ", 1 - 10" },
		{ text:	", 0.1s, 0.2s, 0.3s, 0.4s, 0.5s, 0.6s, 0.7s, 0.8s, 0.9s, 1.0s, 1.1s, 1.2s, 1.3s, 1.4s, 1.5s, 1.6s, 1.7s, 1.8s, 1.9s, 2.0s, 2.1s, 2.2s, 2.3s, 2.4s, 2.5s, 2.6s, 2.7s, 2.8s, 2.9s, 3.0s, 3.1s, 3.2s, 3.3s, 3.4s, 3.5s, 3.6s, 3.7s, 3.8s, 3.9s, 4.0s, 4.1s, 4.2s, 4.3s, 4.4s, 4.5s, 4.6s, 4.7s, 4.8s, 4.9s, 5.0s, 5.1s, 5.2s, 5.3s, 5.4s, 5.5s, 5.6s, 5.7s, 5.8s, 5.9s, 6.0s, 6.1s, 6.2s, 6.3s, 6.4s, 6.5s, 6.6s, 6.7s, 6.8s, 6.9s, 7.0s, 7.1s, 7.2s, 7.3s, 7.4s, 7.5s, 7.6s, 7.7s, 7.8s, 7.9s, 8.0s, 8.1s, 8.2s, 8.3s, 8.4s, 8.5s, 8.6s, 8.7s, 8.8s, 8.9s, 9.0s, 9.1s, 9.2s, 9.3s, 9.4s, 9.5s, 9.6s, 9.7s, 9.8s, 9.9s, 10.0s" },
		{ text: "01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50"},
		{ text: "01, 02, 03, 04, 05, 06, 07, 08, 09, 10"},
		{ text:	"KNOB SETTING, INPUT SETTING, OUTPUT SETTING, TOTAL SETTING, PLAY OPTION, HARDWARE SETTING, USB SETTING, MIDI SETTING, MIDI PROGRAM MAP, VARIATION DATA BACKUP, OWNER'S MANUAL, DEVICE SETTING, VERSION, SYSTEM DATA BACKUP" },
		{ text:	"GK, NORMAL IN" },
		{ text:	"SETTING1, SETTING2, GUITAR TO MIDI" },
		{ text:	"MAIN OUT, SUB OUT" },
		{ text:	"1, 2, 3, 4, 5 , 6" },
		{ text:	"PATCH, TUNER, MASTER, CONTROL MODE, INPUT SETTING, OUTPUT SETTING, TOTAL, MAIN GLOBAL EQ L/S, MAIN GLOBAL EQ R, SUB GLOBAL EQ L/S, SUB GLOBAL EQ R, USB AUDIO, GUITAR TO MIDI" },
		{ text: "BANK1, BANK2, BANK3, BANK4" },
		{ text: 'U01-1, U01-2, U01-3, U01-4, U02-1, U02-2, U02-3, U02-4, U03-1, U03-2, U03-3, U03-4, U04-1, U04-2, U04-3, U04-4, U05-1, U05-2, U05-3, U05-4, U06-1, U06-2, U06-3, U06-4, U07-1, U07-2, U07-3, U07-4, U08-1, U08-2, U08-3, U08-4, U09-1, U09-2, U09-3, U09-4, U10-1, U10-2, U10-3, U10-4, U11-1, U11-2, U11-3, U11-4, U12-1, U12-2, U12-3, U12-4, U13-1, U13-2, U13-3, U13-4, U14-1, U14-2, U14-3, U14-4, U15-1, U15-2, U15-3, U15-4, U16-1, U16-2, U16-3, U16-4, U17-1, U17-2, U17-3, U17-4, U18-1, U18-2, U18-3, U18-4, U19-1, U19-2, U19-3, U19-4, U20-1, U20-2, U20-3, U20-4, U21-1, U21-2, U21-3, U21-4, U22-1, U22-2, U22-3, U22-4, U23-1, U23-2, U23-3, U23-4, U24-1, U24-2, U24-3, U24-4, U25-1, U25-2, U25-3, U25-4, U26-1, U26-2, U26-3, U26-4, U27-1, U27-2, U27-3, U27-4, U28-1, U28-2, U28-3, U28-4, U29-1, U29-2, U29-3, U29-4, U30-1, U30-2, U30-3, U30-4, U31-1, U31-2, U31-3, U31-4, U32-1, U32-2, U32-3, U32-4, U33-1, U33-2, U33-3, U33-4, U34-1, U34-2, U34-3, U34-4, U35-1, U35-2, U35-3, U35-4, U36-1, U36-2, U36-3, U36-4, U37-1, U37-2, U37-3, U37-4, U38-1, U38-2, U38-3, U38-4, U39-1, U39-2, U39-3, U39-4, U40-1, U40-2, U40-3, U40-4, U41-1, U41-2, U41-3, U41-4, U42-1, U42-2, U42-3, U42-4, U43-1, U43-2, U43-3, U43-4, U44-1, U44-2, U44-3, U44-4, U45-1, U45-2, U45-3, U45-4, U46-1, U46-2, U46-3, U46-4, U47-1, U47-2, U47-3, U47-4, U48-1, U48-2, U48-3, U48-4, U49-1, U49-2, U49-3, U49-4, U50-1, U50-2, U50-3, U50-4, P01-1, P01-2, P01-3, P01-4, P02-1, P02-2, P02-3, P02-4, P03-1, P03-2, P03-3, P03-4, P04-1, P04-2, P04-3, P04-4, P05-1, P05-2, P05-3, P05-4, P06-1, P06-2, P06-3, P06-4, P07-1, P07-2, P07-3, P07-4, P08-1, P08-2, P08-3, P08-4, P09-1, P09-2, P09-3, P09-4, P10-1, P10-2, P10-3, P10-4, P11-1, P11-2, P11-3, P11-4, P12-1, P12-2, P12-3, P12-4, P13-1, P13-2, P13-3, P13-4, P14-1, P14-2, P14-3, P14-4, P15-1, P15-2, P15-3, P15-4, P16-1, P16-2, P16-3, P16-4, P17-1, P17-2, P17-3, P17-4, P18-1, P18-2, P18-3, P18-4, P19-1, P19-2, P19-3, P19-4, P20-1, P20-2, P20-3, P20-4, P21-1, P21-2, P21-3, P21-4, P22-1, P22-2, P22-3, P22-4, P23-1, P23-2, P23-3, P23-4, P24-1, P24-2, P24-3, P24-4, P25-1, P25-2, P25-3, P25-4, P26-1, P26-2, P26-3, P26-4, P27-1, P27-2, P27-3, P27-4, P28-1, P28-2, P28-3, P28-4, P29-1, P29-2, P29-3, P29-4, P30-1, P30-2, P30-3, P30-4, P31-1, P31-2, P31-3, P31-4, P32-1, P32-2, P32-3, P32-4, P33-1, P33-2, P33-3, P33-4, P34-1, P34-2, P34-3, P34-4, P35-1, P35-2, P35-3, P35-4, P36-1, P36-2, P36-3, P36-4, P37-1, P37-2, P37-3, P37-4, P38-1, P38-2, P38-3, P38-4, P39-1, P39-2, P39-3, P39-4, P40-1, P40-2, P40-3, P40-4, P41-1, P41-2, P41-3, P41-4, P42-1, P42-2, P42-3, P42-4, P43-1, P43-2, P43-3, P43-4, P44-1, P44-2, P44-3, P44-4, P45-1, P45-2, P45-3, P45-4, P46-1, P46-2, P46-3, P46-4, P47-1, P47-2, P47-3, P47-4, P48-1, P48-2, P48-3, P48-4, P49-1, P49-2, P49-3, P49-4, P50-1, P50-2, P50-3, P50-4'},
		{ icon: "images/seq_curve_value00.png, images/seq_curve_value01.png, images/seq_curve_value02.png, images/seq_curve_value03.png, images/seq_curve_value04.png, images/seq_curve_value05.png, images/seq_curve_value06.png, images/seq_curve_value07.png, images/seq_curve_value08.png, images/seq_curve_value09.png, images/seq_curve_value10.png, images/seq_curve_value11.png, images/seq_curve_value12.png" },
		{ text:	"PITCH, CUTOFF, LEVEL" },
		{ text:	"SEQ1, SEQ2" },
		{ text: "CONTROL FUNCTION, MANUAL FUNCTION, ASSIGN, PATCH MIDI, CONTROL LED COLOR, BASS TO MIDI" },
		{ text:	"SETTING1, SETTING2, BASS TO MIDI" },
		{ text:	"[ 1 ] INIT SET, [ 2 ] INIT SET, [ 3 ] INIT SET, [ 4 ] INIT SET, [ 5 ] INIT SET, [ 6 ] INIT SET, [ 7 ] INIT SET, [ 8 ] INIT SET, [ 9 ] INIT SET, [ 10 ] INIT SET" },
		{ text: "435Hz, 436Hz, 437Hz, 438Hz, 439Hz, 440Hz, 441Hz, 442Hz, 443Hz, 444Hz, 445Hz" },
		{ text:	"MUTE, BYPASS"},
		{ text:	" , NORMAL INPUT, NS INPUT, INST1 OUT, INST2 OUT, INST3 OUT" }
	];

	(function () {

		for (var n = 0, max = _.length; n < max; n++) {

			if (_[n].text !== undefined) {

				_[n].text = _[n].text.replace(/1 - 50/g,
					'  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50'
				);
				_[n].text = _[n].text.replace(/0 - 50/g,
					'  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50'
				);

				_[n].text = _[n].text.replace(/1 - 127/g,
					'  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50,' +
					' 51,  52,  53,  54,  55,  56,  57,  58,  59,  60,' +
					' 61,  62,  63,  64,  65,  66,  67,  68,  69,  70,' +
					' 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,' +
					' 81,  82,  83,  84,  85,  86,  87,  88,  89,  90,' +
					' 91,  92,  93,  94,  95,  96,  97,  98,  99, 100,' +
					'101, 102, 103, 104, 105, 106, 107, 108, 109, 110,' +
					'111, 112, 113, 114, 115, 116, 117, 118, 119, 120,' +
					'121, 122, 123, 124, 125, 126, 127'
				);
				_[n].text = _[n].text.replace(/0 - 127/g,
					' 0 ,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50,' +
					' 51,  52,  53,  54,  55,  56,  57,  58,  59,  60,' +
					' 61,  62,  63,  64,  65,  66,  67,  68,  69,  70,' +
					' 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,' +
					' 81,  82,  83,  84,  85,  86,  87,  88,  89,  90,' +
					' 91,  92,  93,  94,  95,  96,  97,  98,  99, 100,' +
					'101, 102, 103, 104, 105, 106, 107, 108, 109, 110,' +
					'111, 112, 113, 114, 115, 116, 117, 118, 119, 120,' +
					'121, 122, 123, 124, 125, 126, 127'
				);
				_[n].text = _[n].text.replace(/1 - 128/g,
					'  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50,' +
					' 51,  52,  53,  54,  55,  56,  57,  58,  59,  60,' +
					' 61,  62,  63,  64,  65,  66,  67,  68,  69,  70,' +
					' 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,' +
					' 81,  82,  83,  84,  85,  86,  87,  88,  89,  90,' +
					' 91,  92,  93,  94,  95,  96,  97,  98,  99, 100,' +
					'101, 102, 103, 104, 105, 106, 107, 108, 109, 110,' +
					'111, 112, 113, 114, 115, 116, 117, 118, 119, 120,' +
					'121, 122, 123, 124, 125, 126, 127, 128'
				);

				_[n].text = _[n].text.replace(/L64 - 63R/g,
					'L64, L63, L62, L61, L60, L59, L58, L57, L56, L55, L54, L53, L52, L51, L50, L49,' +
					'L48, L47, L46, L45, L44, L43, L42, L41, L40, L39, L38, L37, L36, L35, L34, L33,' +
					'L32, L31, L30, L29, L28, L27, L26, L25, L24, L23, L22, L21, L20, L19, L18, L17,' +
					'L16, L15, L14, L13, L12, L11, L10, L09, L08, L07, L06, L05, L04, L03, L02, L01,' +
					'  0,' +
					'01R, 02R, 03R, 04R, 05R, 06R, 07R, 08R, 09R, 10R, 11R, 12R, 13R, 14R, 15R, 16R,' +
					'17R, 18R, 19R, 20R, 21R, 22R, 23R, 24R, 25R, 26R, 27R, 28R, 29R, 30R, 31R, 32R,' +
					'33R, 34R, 35R, 36R, 37R, 38R, 39R, 40R, 41R, 42R, 43R, 44R, 45R, 46R, 47R, 48R,' +
					'49R, 50R, 51R, 52R, 53R, 54R, 55R, 56R, 57R, 58R, 59R, 60R, 61R, 62R, 63R'
				);

				_[n].text = _[n].text.replace(/0 - 40.0ms/g,
					'0.0<br>ms, 0.5<br>ms, 1.0<br>ms, 1.5<br>ms, 2.0<br>ms, 2.5<br>ms, 3.0<br>ms, 3.5<br>ms, 4.0<br>ms, 4.5<br>ms, 5.0<br>ms, 5.5<br>ms, 6.0<br>ms, 6.5<br>ms, 7.0<br>ms, 7.5<br>ms, 8.0<br>ms, 8.5<br>ms, 9.0<br>ms, 9.5<br>ms,' +
					'10.0<br>ms, 10.5<br>ms, 11.0<br>ms, 11.5<br>ms, 12.0<br>ms, 12.5<br>ms, 13.0<br>ms, 13.5<br>ms, 14.0<br>ms, 14.5<br>ms, 15.0<br>ms, 15.5<br>ms, 16.0<br>ms, 16.5<br>ms, 17.0<br>ms, 17.5<br>ms, 18.0<br>ms, 18.5<br>ms, 19.0<br>ms, 19.5<br>ms,' +
					'20.0<br>ms, 20.5<br>ms, 21.0<br>ms, 21.5<br>ms, 22.0<br>ms, 22.5<br>ms, 23.0<br>ms, 23.5<br>ms, 24.0<br>ms, 24.5<br>ms, 25.0<br>ms, 25.5<br>ms, 26.0<br>ms, 26.5<br>ms, 27.0<br>ms, 27.5<br>ms, 28.0<br>ms, 28.5<br>ms, 29.0<br>ms, 29.5<br>ms,' +
					'30.0<br>ms, 30.5<br>ms, 31.0<br>ms, 31.5<br>ms, 32.0<br>ms, 32.5<br>ms, 33.0<br>ms, 33.5<br>ms, 34.0<br>ms, 34.5<br>ms, 35.0<br>ms, 35.5<br>ms, 36.0<br>ms, 36.5<br>ms, 37.0<br>ms, 37.5<br>ms, 38.0<br>ms, 38.5<br>ms, 39.0<br>ms, 39.5<br>ms, 40.0<br>ms'
				);

				_[n].text = _[n].text.replace(/-24 - 24/g,
					'  -24,   -23,   -22,   -21,   -20,   -19,   -18,   -17,   -16,  -15,' +
					' -14,  -13,  -12,  -11,  -10,  -9,  -8,  -7,  -6,  -5,' +
					' -4,  -3,  -2,  -1,  0,  1,  2,  3,  4,  5,' +
					' 6,  7,  8,  9,  10,  11,  12,  13,  14,  15,' +
					' 16,  17,  18,  19,  20,  21,  22,  23,  24'
				);

				_[n].text = _[n].text.replace(/0 - 120/g,
					' 0, 1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50,' +
					' 51,  52,  53,  54,  55,  56,  57,  58,  59,  60,' +
					' 61,  62,  63,  64,  65,  66,  67,  68,  69,  70,' +
					' 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,' +
					' 81,  82,  83,  84,  85,  86,  87,  88,  89,  90,' +
					' 91,  92,  93,  94,  95,  96,  97,  98,  99, 100,' +
					'101, 102, 103, 104, 105, 106, 107, 108, 109, 110,' +
					'111, 112, 113, 114, 115, 116, 117, 118, 119, 120'
				);

				_[n].text = _[n].text.replace(/1 - 100/g,
					' 1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' +
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50,' +
					' 51,  52,  53,  54,  55,  56,  57,  58,  59,  60,' +
					' 61,  62,  63,  64,  65,  66,  67,  68,  69,  70,' +
					' 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,' +
					' 81,  82,  83,  84,  85,  86,  87,  88,  89,  90,' +
					' 91,  92,  93,  94,  95,  96,  97,  98,  99, 100'
				);

				_[n].text = _[n].text.replace(/0 - 30/g,
					' 0, 1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30'
				);

				_[n].text = _[n].text.replace(/0 - 29/g,
					' 0, 1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29'
				);

				_[n].text = _[n].text.replace(/1 - 10/g,
					' 1,   2,   3,   4,   5,   6,   7,   8,   9,  10'
				);

				// _[n].text = _[n].text.replace(/0ms - 100ms/g,
				// 	'0<br>ms, 1<br>ms, 2<br>ms, 3<br>ms, 4<br>ms, 5<br>ms, 6<br>ms, 7<br>ms, 8<br>ms, 9<br>ms, 10<br>ms, 11<br>ms, 12<br>ms, 13<br>ms, 14<br>ms, 15<br>ms, 16<br>ms, 17<br>ms, 18<br>ms, 19<br>ms,' +
				// 	'20<br>ms, 21<br>ms, 22<br>ms, 23<br>ms, 24<br>ms, 25<br>ms, 26<br>ms, 27<br>ms, 28<br>ms, 29<br>ms, 30<br>ms, 31<br>ms, 32<br>ms, 33<br>ms, 34<br>ms, 35<br>ms, 36<br>ms, 37<br>ms, 38<br>ms, 39<br>ms,' +
				// 	'40<br>ms, 41<br>ms, 42<br>ms, 43<br>ms, 44<br>ms, 45<br>ms, 46<br>ms, 47<br>ms, 48<br>ms, 49<br>ms, 50<br>ms, 51<br>ms, 52<br>ms, 53<br>ms, 54<br>ms, 55<br>ms, 56<br>ms, 57<br>ms, 58<br>ms, 59<br>ms,' +
				// 	'60<br>ms, 61<br>ms, 62<br>ms, 63<br>ms, 64<br>ms, 65<br>ms, 66<br>ms, 67<br>ms, 68<br>ms, 69<br>ms, 70<br>ms, 71<br>ms, 72<br>ms, 73<br>ms, 74<br>ms, 75<br>ms, 76<br>ms, 77<br>ms, 78<br>ms, 79<br>ms, 80<br>ms' +
				// 	'80<br>ms, 81<br>ms, 82<br>ms, 83<br>ms, 84<br>ms, 85<br>ms, 86<br>ms, 87<br>ms, 88<br>ms, 89<br>ms, 90<br>ms, 91<br>ms, 92<br>ms, 93<br>ms, 94<br>ms, 95<br>ms, 96<br>ms, 97<br>ms, 98<br>ms, 99<br>ms, 100<br>ms'
				// 	);

				_[n].text = (function () {
					var text = '';
					for (var i = -50; i <= 50; i++) {
						text += i;
						if (i !== 50) {
							text += ','
						}
					}
					return _[n].text.replace(/-50 - 50/g, text);
				})();

				//BG
				_[n].text = (function () {
					var text = '';
					for (var i = 0; i <= 2000; i++) {
						text += i + 'ms';
						if (i !== 2000) {
							text += ','
						}
					}
					return _[n].text.replace(/0ms - 2000ms/g, text);
				})();

				_[n].text = (function () {
					var text = '';
					for (var i = 0; i <= 300; i++) {
						text += i + 'ms';
						if (i !== 300) {
							text += ','
						}
					}
					return _[n].text.replace(/0ms - 300ms/g, text);
				})();

				_[n].text = (function () {
					var text = '';
					for (var i = 0; i <= 100; i++) {
						text += i;
						if (i !== 100) {
							text += ','
						}
					}
					return _[n].text.replace(/0 - 100/g, text);
				})();
				_[n].text = (function () {
					var text = '';
					for (var i = 0; i <= 100; i++) {
						text += i + 'ms';
						if (i !== 100) {
							text += ','
						}
					}
					return _[n].text.replace(/0ms - 100ms/g, text);
				})();
				_[n].text = (function () {
					var text = '';
					for (var i = 0; i <= 249; i++) {
						text += i;
						if (i !== 249) {
							text += ','
						}
					}
					return _[n].text.replace(/0 - 249/g, text);
				})();
				_[n].text = (function () {
					var text = '';
					for (var i = 0; i <= 1200; i++) {
						text += i + 'ms';
						if (i !== 1200) {
							text += ','
						}
					}
					return _[n].text.replace(/0ms - 1200ms/g, text);
				})();

				var text = _[n].text.split(",");
				for (var i = 0; i < text.length; i++) { text[i] = text[i].trim(); }
				_[n].text = text;

			}

			if (_[n].icon !== undefined) {
				var icon = _[n].icon.split(",");
				for (var i = 0; i < icon.length; i++) { icon[i] = icon[i].trim(); }
				_[n].icon = icon;
			}

		}

	})();

	return _;
}
