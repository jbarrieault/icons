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

  var ReportIcon = function ReportIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-report" },
      React.createElement(
        "title",
        { id: "title" },
        "report icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M14.56.038H1.431A1.421 1.421 0 0 0 .019 1.46v13.153a1.411 1.411 0 0 0 1.412 1.412h13.13a1.411 1.411 0 0 0 1.411-1.412V1.449A1.411 1.411 0 0 0 14.56.038zm-.18 14.106a.155.155 0 0 1-.144.156H1.757a.145.145 0 0 1-.145-.145V1.918a.156.156 0 0 1 .145-.156h12.477a.146.146 0 0 1 .145.146z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M2.759 11.149h2.235v2.048H2.759zm2.746-2.557H7.74v4.604H5.505zm2.746-4.603h2.235v9.208H8.251zm2.747 2.893h2.235v6.314h-2.235z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ReportIcon;
  } else {
    global.ReportIcon = ReportIcon;
  }
})(undefined);