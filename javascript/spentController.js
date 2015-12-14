'use strict';

module.exports = function (spent) {
	var _spent = spent,
		view = require('spentView');

	var print = function() {
		view(_spent).print();
	}

    return{
        print: print
    };
};