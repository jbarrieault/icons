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

  var InstagramIcon = function InstagramIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-instagram" },
      React.createElement(
        "title",
        { id: "title" },
        "instagram icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("circle", { "class": "cls-1", cx: "7.987", cy: "8.195", r: "2.107" }),
        React.createElement("path", { "class": "cls-1", d: "M12.16 8.078v.039a4.254 4.254 0 0 1-8.508 0v-.039H.182v5.386A2.537 2.537 0 0 0 2.718 16h10.537a2.537 2.537 0 0 0 2.537-2.537V8.078zM13.255.39H2.718A2.537 2.537 0 0 0 .182 2.926v3.59h3.787a4.252 4.252 0 0 1 7.88 0h3.943v-3.59A2.537 2.537 0 0 0 13.255.39zm.891 3.092a.723.723 0 0 1-.723.723h-.506a.723.723 0 0 1-.723-.723v-.506a.723.723 0 0 1 .723-.723h.506a.723.723 0 0 1 .723.723z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = InstagramIcon;
  } else {
    global.InstagramIcon = InstagramIcon;
  }
})(undefined);