"use strict";
exports.__esModule = true;
var composition_api_1 = require("@vue/composition-api");
var useRender_1 = require("./useRender");
exports["default"] = composition_api_1.defineComponent({
    render: function (h) {
        return useRender_1["default"](h);
    }
});
