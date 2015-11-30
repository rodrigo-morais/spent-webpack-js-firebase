define(["exports"], function (exports) {
    "use strict";

    require(["jquery", "firebase", "config"], function ($, firebase, config) {
        console.log(config().url);
        console.log($);
        console.log(firebase);
    });
});
//# sourceMappingURL=app.js.map