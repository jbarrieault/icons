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

  var MobilePassIcon = function MobilePassIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-mobile-pass" },
      React.createElement(
        "title",
        { id: "title" },
        "mobile-pass icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { d: "M12.654 14.3a1.7 1.7 0 0 1-1.7 1.7h-5.9a1.7 1.7 0 0 1-1.7-1.7V1.7A1.7 1.7 0 0 1 5.049 0h5.9a1.7 1.7 0 0 1 1.7 1.7v12.6zm-.771-10.951H4.1v9.175h7.787zM9.556 1.7a.189.189 0 0 0-.188-.188H6.633a.188.188 0 0 0-.189.188.189.189 0 0 0 .189.189h2.734a.189.189 0 0 0 .189-.189zM5.918 13.883a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4zm2.082 0a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4zm2.081 0a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4z", role: "presentation" }),
        React.createElement("path", { d: "M10.387 10.387h.682v.682h-.682zM9.023 9.023h.682v.682h-.682zm1.364 0h.682v.682h-.682zm-.682-.682h.682v.682h-.682zm-.682 2.046h.682v.682h-.682zm.682-.682h.682v.682h-.682zm-1.364 0h.682v.682h-.682zm0-1.364h.682v.682h-.682zm-3.41 0v2.728h2.728V8.341zm2.046 2.046H5.613V9.023h1.364zM4.931 4.931v2.728h2.728V4.931zm2.046 2.046H5.613V5.613h1.364zm1.364-2.046v2.728h2.728V4.931zm2.046 2.046H9.023V5.613h1.364z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = MobilePassIcon;
  } else {
    global.MobilePassIcon = MobilePassIcon;
  }
})(undefined);