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

  var CaretOutlineIcon = function CaretOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "caret-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M7.926 13.4L.342 4.754l1.845-1.787 5.739 6.542 5.864-6.665 1.841 1.792z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CaretOutlineIcon;
  } else {
    global.CaretOutlineIcon = CaretOutlineIcon;
  }
})(undefined);