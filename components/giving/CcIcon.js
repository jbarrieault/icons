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

  var CcIcon = function CcIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-cc" },
      React.createElement(
        "title",
        { id: "title" },
        "cc icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M5.171 10.18H7.22v1.165H5.171zm-2.677 0h2.049v1.165H2.494zM12 8.288a1.516 1.516 0 0 0-1 .386 1.529 1.529 0 1 0 0 2.285 1.526 1.526 0 1 0 1-2.671z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M15.383 1.741H.617a.606.606 0 0 0-.535.332.522.522 0 0 0-.076.262v10.8a.578.578 0 0 0 .045.221v.016a.611.611 0 0 0 .561.37h14.771a.612.612 0 0 0 .612-.612V2.353a.612.612 0 0 0-.612-.612zm-.738 3.632H1.355V3.091h13.29zM1.355 12.4V6.867h13.29V12.4z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CcIcon;
  } else {
    global.CcIcon = CcIcon;
  }
})(undefined);