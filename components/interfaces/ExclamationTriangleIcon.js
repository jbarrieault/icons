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

  var ExclamationTriangleIcon = function ExclamationTriangleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-exclamation-triangle" },
      React.createElement(
        "title",
        { id: "title" },
        "exclamation-triangle icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.01.818a.726.726 0 0 1 .506.192 1.878 1.878 0 0 1 .355.435l6.9 11.927a1.49 1.49 0 0 1 .148.307 1.038 1.038 0 0 1 .058.355.67.67 0 0 1-.34.632 1.456 1.456 0 0 1-.726.192H1.128a1.462 1.462 0 0 1-.728-.192.67.67 0 0 1-.34-.632 1.151 1.151 0 0 1 .206-.662L7.151 1.445A1.872 1.872 0 0 1 7.5 1.01a.725.725 0 0 1 .51-.192zm.662 9.288a.341.341 0 0 0 .334-.334L9.151 5.3a.344.344 0 0 0-.336-.334H7.223a.316.316 0 0 0-.244.1.336.336 0 0 0-.09.235L7 9.772a.328.328 0 0 0 .1.235.321.321 0 0 0 .235.1zm.411 1.255A.375.375 0 0 0 9 11.107a.3.3 0 0 0-.238-.1h-1.48a.325.325 0 0 0-.235.1.337.337 0 0 0-.1.258v1.41a.31.31 0 0 0 .1.244.336.336 0 0 0 .235.09h1.476a.286.286 0 0 0 .325-.334z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ExclamationTriangleIcon;
  } else {
    global.ExclamationTriangleIcon = ExclamationTriangleIcon;
  }
})(undefined);