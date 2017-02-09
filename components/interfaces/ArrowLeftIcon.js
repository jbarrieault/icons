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

  var ArrowLeftIcon = function ArrowLeftIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrow-left" },
      React.createElement(
        "title",
        { id: "title" },
        "arrow-left icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M1.83 9.1l4.185 4.143a.872.872 0 0 0 1.225 0 .851.851 0 0 0 0-1.212L4.533 9.35H13.7a.857.857 0 1 0 0-1.715H4.533l2.706-2.68a.851.851 0 0 0 0-1.212.872.872 0 0 0-1.225 0L1.83 7.886a.851.851 0 0 0 0 1.214z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ArrowLeftIcon;
  } else {
    global.ArrowLeftIcon = ArrowLeftIcon;
  }
})(undefined);