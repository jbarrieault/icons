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

  var CalendarIcon = function CalendarIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-calendar" },
      React.createElement(
        "title",
        { id: "title" },
        "calendar icon"
      ),
      React.createElement("path", { d: "M14.8 1.6h-2V0h-1.6v1.6H4.8V0H3.2v1.6h-2A1.2 1.2 0 0 0 0 2.8v12A1.2 1.2 0 0 0 1.2 16h13.6a1.2 1.2 0 0 0 1.2-1.2v-12a1.2 1.2 0 0 0-1.2-1.2zm-.4 12.8H1.6V8h12.8zm0-8H1.6V3.2h1.6v1.6h1.6V3.2h6.4v1.6h1.6V3.2h1.6z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CalendarIcon;
  } else {
    global.CalendarIcon = CalendarIcon;
  }
})(undefined);