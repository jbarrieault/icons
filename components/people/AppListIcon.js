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

  var AppListIcon = function AppListIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-app-list" },
      React.createElement(
        "title",
        { id: "title" },
        "app-list icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("rect", { "class": "cls-1", x: ".42", y: "1.696", width: "2.811", height: "2.811", rx: ".43", ry: ".43" }),
        React.createElement("path", { "class": "cls-1", d: "M14.688 3.906H5.41a.843.843 0 0 1 0-1.687h9.278a.843.843 0 1 1 0 1.687z", role: "presentation" }),
        React.createElement("rect", { "class": "cls-1", x: ".42", y: "6.754", width: "2.811", height: "2.811", rx: ".43", ry: ".43" }),
        React.createElement("path", { "class": "cls-1", d: "M14.688 9H5.41a.843.843 0 0 1 0-1.687h9.278a.843.843 0 1 1 0 1.687z", role: "presentation" }),
        React.createElement("rect", { "class": "cls-1", x: ".42", y: "11.811", width: "2.811", height: "2.811", rx: ".43", ry: ".43" }),
        React.createElement("path", { "class": "cls-1", d: "M14.688 14.06H5.41a.843.843 0 1 1 0-1.687h9.278a.843.843 0 1 1 0 1.687z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AppListIcon;
  } else {
    global.AppListIcon = AppListIcon;
  }
})(undefined);