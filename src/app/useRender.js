"use strict";
exports.__esModule = true;
var CompositionCmp_1 = require("@/components/CompositionCmp/CompositionCmp");
var HelloWorld_vue_1 = require("@/components/HelloWorld/HelloWorld.vue");
var logo_png_1 = require("@/assets/logo.png");
var style_scss_1 = require("./style.scss");
function default_1(h) {
    return React.createElement("div", { "class": style_scss_1["default"].app },
        React.createElement("img", { src: logo_png_1["default"] }),
        React.createElement(HelloWorld_vue_1["default"], { msg: "Welcome to Your Vue.js App" }),
        React.createElement(CompositionCmp_1["default"], null));
}
exports["default"] = default_1;
