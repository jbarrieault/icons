(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title" },
    "check icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.774 4.475l-2.646-2.713a.243.243 0 0 0-.349 0l-6.51 6.674a.243.243 0 0 1-.349 0L3.127 5.573a.243.243 0 0 0-.349 0L.229 8.185a.256.256 0 0 0 0 .357l5.81 5.911a.244.244 0 0 0 .35 0l9.385-9.621a.258.258 0 0 0 0-.357z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Check = Check;
  }
})(this)