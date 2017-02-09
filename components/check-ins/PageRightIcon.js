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

  var PageRightIcon = function PageRightIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-page-right" },
      React.createElement(
        "title",
        { id: "title" },
        "page-right icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M6.169 1.637L3.467 4.339 7.129 8l-3.662 3.661 2.702 2.702L12.533 8 6.169 1.637z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PageRightIcon;
  } else {
    global.PageRightIcon = PageRightIcon;
  }
})(undefined);