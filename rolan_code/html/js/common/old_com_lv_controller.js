//
//	handle_olad_level_controller.js
//
//

$(function() {
	window.SELECT_TYPE_ENUM = {
		BTS_SMALL: 0,
		BTS_XSMALL: 1,		
	};
	/**
	 * Array store item with limit Length
	 * each communication level 
	 */
	window.COM_LV_SELECT_MAPPING = [
		// AIRD PREAMP 1 
		// {communicationLevel: 1, selectListID: '#aird-preamp-1-select', limitLength: 16, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#aird-preamp-1-select', limitLength: 16, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#aird-preamp-1-select', limitLength: 20, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#aird-preamp-1-select', limitLength: 23, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#aird-preamp-1-select', limitLength: 23, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 6, selectListID: '#aird-preamp-1-select', limitLength: 24, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// AIRD PREAMP 2
		// {communicationLevel: 1, selectListID: '#aird-preamp-2-select', limitLength: 16, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#aird-preamp-2-select', limitLength: 16, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#aird-preamp-2-select', limitLength: 20, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#aird-preamp-2-select', limitLength: 23, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#aird-preamp-2-select', limitLength: 23, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 6, selectListID: '#aird-preamp-2-select', limitLength: 24, selectType:SELECT_TYPE_ENUM.BTS_SMALL},
		// // EXP1-3 SYSTEM 
		// {communicationLevel: 1, selectListID: '#ctl-function-exp1-system-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-exp2-system-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-exp3-system-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp1-system-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp2-system-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp3-system-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},		
		// // EXP1-3 PATCH
		// {communicationLevel: 1, selectListID: '#ctl-function-exp1-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-exp2-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-exp3-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp3-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp1-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp2-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp3-patch-function-select-list', limitLength: 4, selectType:SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - BANKDOWN
		// {communicationLevel: 1, selectListID: '#ctl-function-bankdown-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-bankdown-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-bankdown-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-bankdown-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-bankdown-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-bankdown-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - BANKUP
		// {communicationLevel: 1, selectListID: '#ctl-function-bankup-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-bankup-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-bankup-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-bankup-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-bankup-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-bankup-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - NUM1
		// {communicationLevel: 1, selectListID: '#ctl-function-num1-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num1-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num1-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num1-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num1-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num1-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - NUM2
		// {communicationLevel: 1, selectListID: '#ctl-function-num2-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num2-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num2-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num2-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num2-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num2-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - NUM3
		// {communicationLevel: 1, selectListID: '#ctl-function-num3-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num3-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num3-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num3-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num3-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num3-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - NUM4
		// {communicationLevel: 1, selectListID: '#ctl-function-num4-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num4-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num4-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num4-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num4-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num4-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - NUM5
		// {communicationLevel: 1, selectListID: '#ctl-function-num5-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num5-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num5-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num5-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num5-patch-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num5-system-function-select-list', limitLength: 58, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL1
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl1-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl1-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl1-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl1-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl1-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl1-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL2
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl2-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl2-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl2-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl2-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl2-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl2-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL3
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl3-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl3-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl3-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl3-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl3-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl3-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL4
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl4-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl4-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl4-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl4-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl4-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl4-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL5
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl5-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl5-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl5-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl5-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl5-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl5-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL6
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl6-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl6-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl6-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl6-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl6-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl6-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - CTL7
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl7-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-ctl7-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl7-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-ctl7-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl7-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-ctl7-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// // CONTROL FUNCTION - EXP1 SW
		// {communicationLevel: 1, selectListID: '#ctl-function-exp1-sw-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-exp1-sw-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp1-sw-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-exp1-sw-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-exp1-sw-patch-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-exp1-sw-system-function-select-list', limitLength: 59, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},

		// // CONTROL FUNCTION - CURNUM
		// {communicationLevel: 1, selectListID: '#ctl-function-curnum-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-curnum-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-curnum-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-curnum-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-curnum-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-curnum-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},

		// // MANUAL NUM1
		// {communicationLevel: 1, selectListID: '#ctl-function-num1-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num1-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num1-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num1-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num1-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num1-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},

		// // MANUAL NUM2
		// {communicationLevel: 1, selectListID: '#ctl-function-num2-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num2-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num2-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num2-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num2-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num2-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},

		// // MANUAL NUM3
		// {communicationLevel: 1, selectListID: '#ctl-function-num3-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num3-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num3-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num3-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num3-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num3-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},

		// // MANUAL NUM4
		// {communicationLevel: 1, selectListID: '#ctl-function-num4-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num4-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num4-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num4-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num4-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num4-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},

		// // MANUAL NUM5
		// {communicationLevel: 1, selectListID: '#ctl-function-num5-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 1, selectListID: '#ctl-function-num5-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num5-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 2, selectListID: '#ctl-function-num5-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num5-manual-patch-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		// {communicationLevel: 3, selectListID: '#ctl-function-num5-manual-system-function-select-list', limitLength: 55, selectType: SELECT_TYPE_ENUM.BTS_XSMALL},
		
		// WAH TYPE
		// {communicationLevel: 1, selectListID: '#id_jfdptzyy_0sn313yi8', limitLength: 6, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#id_jfdptzyy_0sn313yi8', limitLength: 6, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#id_jfdptzyy_0sn313yi8', limitLength: 6, selectType: SELECT_TYPE_ENUM.BTS_SMALL},

		// FX1-FX3 COMPRESSOR TYPE
		// {communicationLevel: 1, selectListID: '#fx-1-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx-1-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx-1-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 1, selectListID: '#fx-2-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx-2-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx-2-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 1, selectListID: '#fx-3-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx-3-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx-3-compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// COMPRESSOR TYPE
		// {communicationLevel: 1, selectListID: '#compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#compressor-type-select', limitLength: 5, selectType: SELECT_TYPE_ENUM.BTS_SMALL},

		// FX1-FX3 CHORUS TYPE
		// {communicationLevel: 1, selectListID: '#fx-1-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx-1-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx-1-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#fx-1-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#fx-1-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 1, selectListID: '#fx-2-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx-2-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx-2-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#fx-2-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#fx-2-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 1, selectListID: '#fx-3-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx-3-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx-3-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#fx-3-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#fx-3-chorus-type-select', limitLength: 7, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// REVERB TYPE
		// {communicationLevel: 1, selectListID: '#reverb-type-select', limitLength: 10, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#reverb-type-select', limitLength: 10, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#reverb-type-select', limitLength: 10, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#reverb-type-select', limitLength: 10, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#reverb-type-select', limitLength: 10, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// TURNER TYPE 
		// {communicationLevel: 1, selectListID: '#poly-tuner-type-select-list', limitLength: 4, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#poly-tuner-type-select-list', limitLength: 4, selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#poly-tuner-type-select-list', limitLength: 4, selectType: SELECT_TYPE_ENUM.BTS_SMALL}
	];
	/**
	 * Array store item with index element will hide
	 * each communication level 
	 */
	window.COM_LV_SELECT_MAPPING_WITH_INDEX = [
		// DISTORTION TYPE 1 
		// {communicationLevel: 1, selectListID: '#distortion_1-type-select', arrIndex: [18,23,24,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#distortion_1-type-select', arrIndex: [18,23,24,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#distortion_1-type-select', arrIndex: [27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// DISTORTION TYPE 2 
		// {communicationLevel: 1, selectListID: '#distortion_2-type-select', arrIndex: [18,23,24,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#distortion_2-type-select', arrIndex: [18,23,24,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#distortion_2-type-select', arrIndex: [27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// KNOB Setting
		// {communicationLevel: 1, selectListID: '#knob-target-category-select-list', arrIndex: [1,29,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#knob-target-category-select-list', arrIndex: [1,29,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#knob-target-category-select-list', arrIndex: [1,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#knob-target-category-select-list', arrIndex: [1,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#knob-target-category-select-list', arrIndex: [40,47,79,86,118,125,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},	
		// Assign Setting
		// {communicationLevel: 1, selectListID: '#assign-target-category-select-list', arrIndex: [1,29,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#assign-target-category-select-list', arrIndex: [1,29,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#assign-target-category-select-list', arrIndex: [1,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#assign-target-category-select-list', arrIndex: [1,40,41,44,46,47,50,54,64,68,79,80,83,85,86,89,93,103,107,118,119,122,124,125,128,132,142,146,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#assign-target-category-select-list', arrIndex: [40,47,79,86,118,125,153], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		
		//FX1 TYPE  
		// {communicationLevel: 1, selectListID: '#fx1-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx1-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx1-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#fx1-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#fx1-type', arrIndex: [9], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		//FX2 TYPE  
		// {communicationLevel: 1, selectListID: '#fx2-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx2-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx2-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#fx2-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#fx2-type', arrIndex: [9], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		//FX3 TYPE  
		// {communicationLevel: 1, selectListID: '#fx3-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#fx3-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#fx3-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 4, selectListID: '#fx3-type', arrIndex: [4,8,9,12,16,26,30], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 5, selectListID: '#fx3-type', arrIndex: [9], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// MAIN-OUTPUT SELECT TYPE    
		// {communicationLevel: 1, selectListID: '#aird-output-select-main-out-select-list', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#aird-output-select-main-out-select-list', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#aird-output-select-main-out-select-list', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// SUB-OUTPUT SELECT TYPE
		// {communicationLevel: 1, selectListID: '#aird-output-select-sub-out-select-list', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#aird-output-select-sub-out-select-list', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#aird-output-select-sub-out-select-list', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// MENU-MAIN OUT 
		// {communicationLevel: 1, selectListID: '#main-out-main-output-select', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#main-out-main-output-select', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#main-out-main-output-select', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// MENU-SUB OUT 
		// {communicationLevel: 1, selectListID: '#sub-out-sub-output-select', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#sub-out-sub-output-select', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#sub-out-sub-output-select', arrIndex: [22,23,24,25,26,27,28,29,30,31,32,33,34], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// MAIN-OUTPUT L SP TYPE    
		// {communicationLevel: 1, selectListID: '#effect-setting-main-out-l-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#effect-setting-main-out-l-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#effect-setting-main-out-l-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// MAIN-OUTPUT R SP TYPE    
		// {communicationLevel: 1, selectListID: '#effect-setting-main-out-r-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#effect-setting-main-out-r-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#effect-setting-main-out-r-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// SUB-OUTPUT L SP TYPE    
		// {communicationLevel: 1, selectListID: '#effect-setting-sub-out-l-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#effect-setting-sub-out-l-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#effect-setting-sub-out-l-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// SUB-OUTPUT R SP TYPE    
		// {communicationLevel: 1, selectListID: '#effect-setting-sub-out-r-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 2, selectListID: '#effect-setting-sub-out-r-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
		// {communicationLevel: 3, selectListID: '#effect-setting-sub-out-r-sp-type-select-list', arrIndex: [9,10,11,12,13], selectType: SELECT_TYPE_ENUM.BTS_SMALL},
	];
	/**
	 * Array store select item with value
	 * Note : 'communicationLevel' value decreases
	 */
	window.COM_LV_ELEMENT_WITH_VALUE = [
		// //CONTROL FUNCTION - BANKDOWN
		// {
		// 	selectListID: '#ctl-function-bankdown-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-bankdown-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - BANKUP
		// {
		// 	selectListID: '#ctl-function-bankup-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-bankup-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - NUM 1
		// {
		// 	selectListID: '#ctl-function-num1-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num1-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - NUM 2
		// {
		// 	selectListID: '#ctl-function-num2-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num2-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - NUM 3
		// {
		// 	selectListID: '#ctl-function-num3-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num3-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - NUM 4
		// {
		// 	selectListID: '#ctl-function-num4-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num4-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - NUM 5
		// {
		// 	selectListID: '#ctl-function-num5-patch-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num5-system-function-select-list',
		// 	elementChangeIndex: 14,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL1
		// {
		// 	selectListID: '#ctl-function-ctl1-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl1-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL2
		// {
		// 	selectListID: '#ctl-function-ctl2-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl2-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL3
		// {
		// 	selectListID: '#ctl-function-ctl3-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl3-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL4
		// {
		// 	selectListID: '#ctl-function-ctl4-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl4-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL5
		// {
		// 	selectListID: '#ctl-function-ctl5-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl5-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL6
		// {
		// 	selectListID: '#ctl-function-ctl6-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl6-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CTL7
		// {
		// 	selectListID: '#ctl-function-ctl7-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-ctl7-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - EXP1 SW
		// {
		// 	selectListID: '#ctl-function-exp1-sw-patch-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-exp1-sw-system-function-select-list',
		// 	elementChangeIndex: 15,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //CONTROL FUNCTION - CURNUM
		// {
		// 	selectListID: '#ctl-function-curnum-patch-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-curnum-system-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //MANUAL NUM1
		// {
		// 	selectListID: '#ctl-function-num1-manual-patch-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num1-manual-system-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //MANUAL NUM2
		// {
		// 	selectListID: '#ctl-function-num2-manual-patch-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num2-manual-system-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //MANUAL NUM3
		// {
		// 	selectListID: '#ctl-function-num3-manual-patch-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num3-manual-system-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //MANUAL NUM4
		// {
		// 	selectListID: '#ctl-function-num4-manual-patch-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num4-manual-system-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// },
		// //MANUAL NUM5
		// {
		// 	selectListID: '#ctl-function-num5-manual-patch-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }, {
		// 	selectListID: '#ctl-function-num5-manual-system-function-select-list',
		// 	elementChangeIndex: 11,
		// 	arrMapping: [{
		// 		communicationLevel: 5,
		// 		textValue: "TUNER/MANUAL"
		// 	}, {
		// 		communicationLevel: 3,
		// 		textValue: "TUNER"
		// 	}],
		// 	selectType: SELECT_TYPE_ENUM.BTS_XSMALL
		// }
	];
	/**
	 * This function is used to hide items in select-list based on version information from COM_LV_SELECT_MAPPING object.
	 * Do not modify this method if unnecessary.
	 */
	COM_LV_SELECT_MAPPING.forEach(function(element) {
		
		if (element.communicationLevel >=  window.ProductSetting.communicationLevel) {			
			// Get select list option with type			
			var btsOption = null;
			switch(element.selectType) {
				case SELECT_TYPE_ENUM.BTS_SMALL:
					btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-small-font-style-option');
				break;
				case SELECT_TYPE_ENUM.BTS_XSMALL:
					btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-xsmall-font-style-option');
				break;
				default:
					btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-small-font-style-option');
				break;
			}
			
			// Get length of list data
			var currLength = btsOption !== undefined ? btsOption.children().length : 0;
			if (currLength === 0 || currLength <= element.limitLength) {
				return;
			}
			// Hide item unnecessary from limitLength to currLength
			for (var i = element.limitLength; i < currLength; i++) {
				btsOption.children().eq(i).hide();
			}
		}
	});
	COM_LV_SELECT_MAPPING_WITH_INDEX.forEach(function(element) {
		if (element.communicationLevel >=  window.ProductSetting.communicationLevel) {
			// Get select list option with type			
			var btsOption = null;
			switch(element.selectType) {
				case SELECT_TYPE_ENUM.BTS_SMALL:
					btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-small-font-style-option');
				break;
				case SELECT_TYPE_ENUM.BTS_XSMALL:
					btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-xsmall-font-style-option');
				break;
				default:
					btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-small-font-style-option');
				break;
			}
			// Hide item unnecessary from limitLength to currLength
			element.arrIndex.forEach(function(i) {
				if(btsOption.children().eq(i) !== undefined) {
					btsOption.children().eq(i).hide();
				}			
			});
		}
	});
	/**
	 * This function is used to update display element for each comunication level.
	 * Do not modify this method if unnecessary.
	 */
	COM_LV_ELEMENT_WITH_VALUE.forEach(function(element) {
		element.arrMapping.forEach(function(item) {
			if (window.ProductSetting.communicationLevel <= item.communicationLevel) {
				// Get select list option with type			
				var btsOption = null;
				switch(element.selectType) {
					case SELECT_TYPE_ENUM.BTS_SMALL:
						btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-small-font-style-option');
					break;
					case SELECT_TYPE_ENUM.BTS_XSMALL:
						btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-xsmall-font-style-option');
					break;
					default:
						btsOption = $(element.selectListID + "-list").find('.bts-small-select-list-small-font-style-option');
					break;
				}
				// Hide item unnecessary from limitLength to currLength
				if(btsOption.children().eq(element.elementChangeIndex) !== undefined) {
					btsOption.children().eq(element.elementChangeIndex).text(item.textValue);
				}
			}
		})	
	});
	// hide pedal board for com.level <= 3
	// function hideAllPedalBoard() {
	// 	if (window.ProductSetting.communicationLevel <= 3) {
	// 		// hide MANUAL FUNCTION
	// 		$('#ctl-exp-select-btn-1').next().hide();

	// 		// hide PEDAL BOARD MENU in PATCH List
	// 		// $('#patch-list-tab').find('div').children().eq(2).hide();

	// 		// hide MANUAL FUNCTION in CTL/EXP
  //     var tabs = $('#ctl-exp-select-btn').find('label');
  //     var manualFunctionIndex = 1;
  //     for (var i = 0; i<tabs.length; i++) {
  //       if (i == manualFunctionIndex) {
  //         $(tabs[i]).hide();
  //       } else {
  //         $(tabs[i]).css('width', (100 / (tabs.length - 1)) + '%');
  //       }
  //     }
  //     // hide MANUAL FUNCTION in PATCH SELECT Tab
  //     tabs = $('#patch-list-tab').find('div').children();
  //     var manualIndex = 2;
  //     for (i = 0; i<tabs.length; i++) {
  //       if (i == manualIndex) {
  //         $(tabs[i]).hide();
  //       } else {
  //         $(tabs[i]).css('width', (100 / (tabs.length - 1)) + '%');
  //       }
  //     }
  //   } else {
  //       tabs = $('#patch-list-tab').find('div').children();
  //       $(tabs[0]).css('width', '30%');
  //       $(tabs[1]).css('width', '20%');
  //       $(tabs[2]).css('width', '50%');
  //   }
  // }
	// hideAllPedalBoard();

	// hide BASS MODE parameter at MASTER block and TUNER
	// function hideBassMode() {
	// 	if (window.ProductSetting.communicationLevel <= 3) {
	// 		// MASTER block
	// 		// hide BASS MODE
	// 		$('#master-bass_mode-label').hide();
	// 		$('#master-bass_mode-patch-stringer').hide();
	// 		$('#master-bass_mode-patch-dial').hide();
	// 		$('#master-bass_mode-system-stringer').hide();
	// 		$('#master-bass_mode-system-dial').hide();
	// 		// move TEMPO HOLD to left
	// 		$('#master-tempo_hold-stringer').css('left','610');
	// 		$('#master-tempo_hold-label').css('left','610');
	// 		$('#master-tempo_hold-dial').css('left','610');					

	// 		// TUNER block
	// 		// hide BASS MODE
	// 		$('#mono-tuner-bass_mode-label').hide();
	// 		$('#mono-tuner-bass_mode-patch-btn').hide();
	// 		$('#mono-tuner-bass_mode-system-btn').hide();
	// 		// move PITCH and OUTPUT to left
	// 		$('#mono-tuner-pitch-label').css('left','198');
	// 		$('#mono-output-label').css('left','198');					
	// 		$('#mono-tuner-pitch-select').css('left','250');
	// 		$('#mono-output-select').css('left','250');					
	// 	}
	// 	if (window.ProductSetting.communicationLevel <= 4) {
	// 		// TOTAL SETTING
	// 		$('#total-setting-bass_mode_preference-btn').hide();
	// 		$('#total-setting-bass_mode_preference-label').hide();
	// 	}
	// }
	// hideBassMode();
});


