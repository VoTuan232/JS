//  
//	product_setting.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

(function(window) {

	var _ = {

		name:					'SY-1000',	/* If the name was changed, BTC data would be unsupported. */
		guitarMode:				'guitarmode',	/* If the name was changed, BTC data would be unsupported. */
		bassMode:				'bassmode',	/* If the name was changed, BTC data would be unsupported. */
		version:				'1.0.1',
		build:					'0',
		copyright:				'Copyright 2020 Roland Corporation.\nAll rights reserved.',

		modelId:				'00000069',
		deviceId:				'10',
		lengthOfAddr:			4,		/* length of dt1/rq1 address size */
		lengthOfSize:			4,		/* length of rq1 size */
		interval:				10, 	/* to adjust interval for midi transmition before (msec) */
		timeout:				15,		/* RQ1 timeout (seconds) */
		waitStart:				0,		/* wait for DT1 start (msec) */
		waitStop:				0,		/* wait for DT1 end (msec) */
		waitVariable:			0,		/* wait for valiable length DT1(msec) */
		waitVariable0:			0,		/* wait for clearing valiable length DT1 (msec) */
		communicationLevel:		0,
		communicationRevision:	0,
	  	platform: 				1,		/* 0 -> SP, 1 -> PC */
		appName:				'BTS for SY-1000',

		extension:				'tsl',
		
		releaseMode:			1,		/* 0 -> Develop, 1 -> Production */

		numOfPatchAtBank:		4,
		numOfUserBank:    		50,
		numOfUserPatch:   		200,  	/* = numOfPatchAtBank * numOfUserBank  */

		editor: [
			{ name: 'Temp_patch1',                     config: new EditorSetting1                },
			{ name: 'Temp_patch2',                     config: new EditorSetting2                },
			{ name: 'System',                          config: new SystemSetting                 },
			{ name: 'PatchName',                       config: new PatchName                     },
			{ name: 'InstVari_DynaSynthName',          config: new InstVari_DynaSynthName        },
			{ name: 'InstVari_OscSynthName',           config: new InstVari_OscSynthName         },
			{ name: 'InstVari_Gr300Name',              config: new InstVari_Gr300Name            },
			{ name: 'InstVari_EGtrName',               config: new InstVari_EGtrName             },
			{ name: 'InstVari_AcousticName',           config: new InstVari_AcousticName         },
			{ name: 'InstVari_EBassName',              config: new InstVari_EBassName            },
			{ name: 'InstVari_VioGtrName',             config: new InstVari_VioGtrName           },
			{ name: 'InstVari_PolyFxName',             config: new InstVari_PolyFxName           },
			{ name: 'InstLfoVari_DynaSynthName',       config: new InstLfoVari_DynaSynthName     },
			{ name: 'InstLfoVari_OscSynthName',        config: new InstLfoVari_OscSynthName      },
			{ name: 'InstSeqVari_DynaSynthName',       config: new InstSeqVari_DynaSynthName     },
			{ name: 'EfctVari_EfctName',               config: new EfctVari_EfctName             },
		],
		editorBass: [
			{ name: 'EditorSettingBass1',              config: new EditorSettingBass1            },
			{ name: 'EditorSettingBass2',              config: new EditorSettingBass2            },
			{ name: 'SystemSettingBass',               config: new SystemSettingBass             },
			{ name: 'PatchNameBass',                   config: new PatchNameBass                 },
			{ name: 'InstVariBass_DynaSynthName',      config: new InstVariBass_DynaSynthName    },
			{ name: 'InstVariBass_OscSynthName',       config: new InstVariBass_OscSynthName     },
			{ name: 'InstVariBass_AnalogGrName',       config: new InstVariBass_AnalogGrName     },
			{ name: 'InstVariBass_EBassName',          config: new InstVariBass_EBassName        },
			{ name: 'InstVariBass_AcBassName',         config: new InstVariBass_AcBassName       },
			{ name: 'InstVariBass_EGtrName',           config: new InstVariBass_EGtrName         },
			{ name: 'InstVariBass_PolyFxName',         config: new InstVariBass_PolyFxName       },
			{ name: 'InstLfoVariBass_DynaSynthName',   config: new InstLfoVariBass_DynaSynthName },
			{ name: 'InstLfoVariBass_OscSynthName',    config: new InstLfoVariBass_OscSynthName  },
			{ name: 'InstSeqVariBass_DynaSynthName',   config: new InstSeqVariBass_DynaSynthName },
			{ name: 'EfctVariBass_EfctName',           config: new EfctVariBass_EfctName         },
		],

		librarian: [
			{name: 'User_patch',     config: new LibrarianSetting},
		],
		librarianBass: [
			{name: 'UserBass_patch', config: new LibrarianSettingBass},
		],

		manual: {
			en: 'manual_en.pdf',
			ja: 'manual_jp.pdf'
		},

	};
	
	window.ProductSetting = _; /* export window object */
	window.COM_LEV_00H = 0;	
	window.COM_LEV_01H = 1;	
	window.COM_LEV_02H = 2;
	window.COM_LEV_03H = 3;
	window.COM_LEV_04H = 4;
	window.COM_LEV_05H = 5;
	window.COM_LEV_06H = 6;
	
	window.offLineModeFlg = false;

	window.initStartUp = false;

	var lang = (navigator.userLanguage || navigator.language).substr(0, 2);
	if (lang != 'ja') lang = 'en';

	window.readme = function() {
		var url = ProductSetting.manual[lang];
		if (url.lastIndexOf('http') < 0) {
			var path = decodeURIComponent(window.location.href.replace('file://', ''));
			if (path.match(/^\/[a-zA-Z]:\//)) {
				path = path.substr(1);
			}
			var str = path.substring(0, path.lastIndexOf('/') + 1) + url;
			url = str.replace(/\//g, $native.fs.separator());
		}
		if (url !== '') {
			$native.fs.exec(url);
		}
	};

})(window);
