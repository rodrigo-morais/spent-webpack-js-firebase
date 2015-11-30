define(["exports"], function (exports) {
    "use strict";

    require(["jquery", "firebase", "config"], function ($, firebase, config) {
        var spending = new firebase(config().url);
    });
});
//# sourceMappingURL=app.js.map