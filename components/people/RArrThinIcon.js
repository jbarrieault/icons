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

  var RArrThinIcon = function RArrThinIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-r-arr-thin" },
      React.createElement(
        "title",
        { id: "title" },
        "r-arr-thin icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M1.625 6.736h9.553L6.967 2.8a1.236 1.236 0 0 1 0-1.828 1.446 1.446 0 0 1 1.951 0L15.149 6.8a1.663 1.663 0 0 1 0 2.456l-6.178 5.785a1.447 1.447 0 0 1-1.951 0 1.236 1.236 0 0 1 0-1.828l4.159-3.891H1.625A1.338 1.338 0 0 1 .246 8.03a1.338 1.338 0 0 1 1.379-1.294z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RArrThinIcon;
  } else {
    global.RArrThinIcon = RArrThinIcon;
  }
})(undefined);