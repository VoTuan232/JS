/* global
btsDOMController
*/

(function () {
	var nextIndex = 0;
	var pool = [];

	window.processingController = {
		start: function (callback) {
			if (pool.length === 0) {
				this._popupOpen();
			}
			pool[nextIndex] = callback(nextIndex);
			nextIndex += 1;
		},
		finish: function (index) {
			pool[index] = null;
			if (pool.every(function (value) {
				return value === null;
			})) {
				nextIndex = 0;
				pool = [];
				this._popupClose();
			}
		},
		allClear: function () {
			pool.forEach(function (value) {
				if (typeof value === 'function') {
					value();
				}
			});
			nextIndex = 0;
			pool = [];
			this._popupClose();
		},
		_popupOpen: function () {
			btsDOMController.openLoading();
		},
		_popupClose: function () {
			btsDOMController.closeLoading();
		}
	};
})();
