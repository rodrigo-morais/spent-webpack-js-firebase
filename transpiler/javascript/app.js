define(["exports"], function (exports) {
				"use strict";

				require(["jquery", "firebase", "config"], function ($, firebase, config) {
								var spending = new firebase(config().url);

								spending.orderByChild("date").on("child_added", function (snapshot) {
												var spent = snapshot.val();

												Object.keys(spent).forEach(function (key) {
																var _spent = spent[key];
																console.log("Date: ", _spent.date, " Item: ", _spent.item, " Value: ", _spent.value);
												});
								}, function (errorObject) {
												console.log("The read failed: " + errorObject.code);
								});
				});
});
//# sourceMappingURL=app.js.map