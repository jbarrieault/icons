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

  var EmailIcon = function EmailIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email" },
      React.createElement(
        "title",
        { id: "title" },
        "email icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M14.36 3.049l-.037.037a.615.615 0 0 0 .035-.039z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M14.36 3.049l-.037.037a.615.615 0 0 0 .035-.039z", role: "presentation" }),
        React.createElement("path", { "class": "cls-2", d: "M.339 4.679L7.287 8.05a1.157 1.157 0 0 0 .882 0l7.494-3.7a.386.386 0 0 0 .215-.35A1.082 1.082 0 0 0 14.8 2.917H1.212a1.1 1.1 0 0 0-1.091 1.1v.319a.386.386 0 0 0 .218.343zm14.842 1.615l-6.328 3.13a2.669 2.669 0 0 1-2.209.006L.815 6.612a.484.484 0 0 0-.693.438v5.023a1.055 1.055 0 0 0 1.05 1.054H14.71a1.174 1.174 0 0 0 1.168-1.173V6.73a.484.484 0 0 0-.697-.436z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EmailIcon;
  } else {
    global.EmailIcon = EmailIcon;
  }
})(undefined);