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

  var EventIcon = function EventIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-event" },
      React.createElement(
        "title",
        { id: "title" },
        "event icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M15.223 2.527H13.86V.5a.5.5 0 0 0-.5-.5H9.594a.5.5 0 0 0-.5.5v2.027H6.83V.5a.5.5 0 0 0-.5-.5H2.588a.5.5 0 0 0-.5.5v2.027H.82a.5.5 0 0 0-.5.5V15.5a.5.5 0 0 0 .5.5h14.4a.5.5 0 0 0 .5-.5V3.029a.5.5 0 0 0-.497-.502zM10.633 1.4h1.682v1.712h-1.682zm-7.011 0h1.654v1.712H3.622zm10.413 12.953H2.012V4.235h12.023z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M11.966 8.144L9.3 7.931a.155.155 0 0 1-.131-.095l-1.026-2.47a.155.155 0 0 0-.286 0L6.83 7.836a.155.155 0 0 1-.131.095l-2.666.214a.155.155 0 0 0-.088.272l2.031 1.74a.155.155 0 0 1 .05.153l-.621 2.6a.155.155 0 0 0 .231.168l2.282-1.394a.155.155 0 0 1 .161 0l2.282 1.394a.155.155 0 0 0 .231-.168l-.621-2.6a.155.155 0 0 1 .05-.153l2.031-1.74a.155.155 0 0 0-.086-.273z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EventIcon;
  } else {
    global.EventIcon = EventIcon;
  }
})(undefined);