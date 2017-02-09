"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var IphoneIcon = function IphoneIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-iphone" },
      React.createElement(
        "title",
        { id: "title" },
        "iphone icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M11.175 1.362H5.086a1.727 1.727 0 0 0-1.7 1.754v10.075a1.707 1.707 0 0 0 1.7 1.715h6.089a1.707 1.707 0 0 0 1.7-1.715V3.116a1.727 1.727 0 0 0-1.7-1.754zM7.461 13.229a.677.677 0 1 1 .677.677.677.677 0 0 1-.677-.677zm4.1-1.66H4.7V3.116a.4.4 0 0 1 .391-.4h6.089a.4.4 0 0 1 .391.4z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = IphoneIcon;
  } else {
    global.IphoneIcon = IphoneIcon;
  }
})(undefined);