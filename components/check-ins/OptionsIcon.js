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

  var OptionsIcon = function OptionsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-options" },
      React.createElement(
        "title",
        { id: "title" },
        "options icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M13.984.872H2.059a.872.872 0 0 0-.852.891v12.474a.872.872 0 0 0 .852.891h11.925a.872.872 0 0 0 .852-.891V1.763a.872.872 0 0 0-.852-.891zm-.852 12.474H2.911V2.654h10.221z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M11.21 5.71h-3.4a.577.577 0 0 1 0-1.154h3.4a.577.577 0 0 1 0 1.154zm-5.536.175h-.841a.565.565 0 0 1-.552-.577v-.377a.565.565 0 0 1 .552-.577h.841a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.552.577zm5.536 2.692h-3.4a.577.577 0 0 1 0-1.153h3.4a.577.577 0 0 1 0 1.153zm-5.536.188h-.841a.565.565 0 0 1-.552-.577v-.376a.565.565 0 0 1 .552-.577h.841a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.552.576zm5.536 2.692h-3.4a.577.577 0 0 1 0-1.153h3.4a.577.577 0 0 1 0 1.153zm-5.536.188h-.841a.565.565 0 0 1-.552-.577v-.377a.565.565 0 0 1 .552-.577h.841a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.552.577z", "data-name": "Your Icon", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = OptionsIcon;
  } else {
    global.OptionsIcon = OptionsIcon;
  }
})(undefined);