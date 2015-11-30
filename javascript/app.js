'use strict';

require(['jquery', 'firebase', 'config'], function($, firebase, config) {
    var spending = new firebase(config().url);

    spending.orderByChild("date").on("child_added", (snapshot) => {
    	let spent = snapshot.val();

    	Object.keys(spent).forEach(function(key) {
			var _spent = spent[key];
  			console.log('Date: ', _spent.date, ' Item: ', _spent.item, ' Value: ', _spent.value); 
		});
	},
	(errorObject) => {
	    console.log("The read failed: " + errorObject.code);
	});
});