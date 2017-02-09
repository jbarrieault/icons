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

  var PencilIcon = function PencilIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pencil" },
      React.createElement(
        "title",
        { id: "title" },
        "pencil icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.909 2.787L13.17 1.048a1.662 1.662 0 0 0-2.348 0l-9.14 9.14-1.027 3.973A.937.937 0 0 0 1.8 15.3l3.973-1.027 9.14-9.14a1.662 1.662 0 0 0-.004-2.346zM3.026 11.145l1.786 1.786-2.412.622zm10.793-7.1L5.962 11.9 4.055 9.994l7.856-7.856a.12.12 0 0 1 .169 0l1.739 1.739a.119.119 0 0 1 0 .168z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PencilIcon;
  } else {
    global.PencilIcon = PencilIcon;
  }
})(undefined);