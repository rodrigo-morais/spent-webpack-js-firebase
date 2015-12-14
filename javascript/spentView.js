'use strict';

module.exports = function (spent) {
	var _spent = spent;

	var print = function() {
		console.log('Date: ', _spent.date, ' Item: ', _spent.item, ' Value: ', _spent.value);
	}

    return{
        print: print
    };
};