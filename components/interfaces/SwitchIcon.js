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

  var SwitchIcon = function SwitchIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-switch" },
      React.createElement(
        "title",
        { id: "title" },
        "switch icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M2.721 4.678a.261.261 0 0 1 .263-.258h8.675l.019 2.071a.222.222 0 0 0 .378.152l3.092-3.037a.215.215 0 0 0 0-.308L12 .206a.222.222 0 0 0-.378.156l.019 2.069H2.984A2.268 2.268 0 0 0 .7 4.678v2.331h2.021zm10.558 4.335v2.357a.261.261 0 0 1-.263.258H4.361l-.006-2.092a.222.222 0 0 0-.378-.153l-3.1 3.043a.215.215 0 0 0 0 .308l3.116 3.061a.222.222 0 0 0 .378-.154l-.006-2.023h8.65A2.268 2.268 0 0 0 15.3 11.37V9.013z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = SwitchIcon;
  } else {
    global.SwitchIcon = SwitchIcon;
  }
})(undefined);