define(["exports"], function (exports) {
	"use strict";

	require(["jquery", "firebase", "config", "spentController"], function ($, firebase, config, spentController) {
		var spending = new firebase(config().url);

		spending.orderByChild("date").on("child_added", function (snapshot) {
			var spent = snapshot.val();

			Object.keys(spent).forEach(function (key) {
				var _spent = spent[key],
				    controller = spentController(_spent);

				controller.print();
			});
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
	});
});
//# sourceMappingURL=app.js.map