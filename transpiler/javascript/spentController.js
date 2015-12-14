define(["exports"], function (exports) {
	"use strict";

	module.exports = function (spent) {
		var _spent = spent,
		    view = require("spentView");

		var print = function print() {
			view(_spent).print();
		};

		return {
			print: print
		};
	};
});
//# sourceMappingURL=spentController.js.map