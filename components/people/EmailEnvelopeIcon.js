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

  var EmailEnvelopeIcon = function EmailEnvelopeIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email-envelope" },
      React.createElement(
        "title",
        { id: "title" },
        "email-envelope icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M.987 5.8L7.43 8.926a1.072 1.072 0 0 0 .818 0L15.2 5.491a.358.358 0 0 0 .2-.321 1 1 0 0 0-1-1H1.8A1.016 1.016 0 0 0 .786 5.183v.3a.358.358 0 0 0 .201.317zm13.761 1.5l-5.867 2.9a2.474 2.474 0 0 1-2.048.006l-5.4-2.613A.448.448 0 0 0 .786 8v4.657a.978.978 0 0 0 .973.977h12.553a1.089 1.089 0 0 0 1.083-1.088V7.7a.448.448 0 0 0-.647-.4z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EmailEnvelopeIcon;
  } else {
    global.EmailEnvelopeIcon = EmailEnvelopeIcon;
  }
})(undefined);