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

  var CheckCircleIcon = function CheckCircleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-circle" },
      React.createElement(
        "title",
        { id: "title" },
        "check-circle icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8 .029A7.971 7.971 0 1 0 15.971 8 7.971 7.971 0 0 0 8 .029zM12.892 6.1l-5.424 5.6a.153.153 0 0 1-.22 0l-3.8-3.909a.153.153 0 0 1 0-.214l1.5-1.542a.153.153 0 0 1 .22 0l2.071 2.139a.1.1 0 0 0 .143 0L11.126 4.3a.153.153 0 0 1 .22 0l1.546 1.591a.153.153 0 0 1 0 .209z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CheckCircleIcon;
  } else {
    global.CheckCircleIcon = CheckCircleIcon;
  }
})(undefined);