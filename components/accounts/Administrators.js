(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Administrators = function Administrators() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-administrators", role: "img", className: "symbol symbol-administrators" },
  React.createElement(
    "title",
    { id: "title-administrators" },
    "administrators icon"
  ),
  React.createElement("path", { d: "M8 0L.026.8v2.99a13.371 13.371 0 0 0 7.451 12.031l.523.261.523-.261a13.372 13.372 0 0 0 7.45-12.035V.8zm0 14.4A11.952 11.952 0 0 1 3.952 11 5.348 5.348 0 0 1 6.54 9.322a2.806 2.806 0 0 0 1.648.578 2.687 2.687 0 0 0 1.188-.29 7.238 7.238 0 0 1 2.469 1.667A11.966 11.966 0 0 1 8 14.405zm.188-6c-.888 0-1.734-1.1-1.734-2.269a1.882 1.882 0 0 1 1.734-2 1.882 1.882 0 0 1 1.733 2C9.921 7.3 9.078 8.4 8.188 8.4zm6.286-4.613a11.921 11.921 0 0 1-1.753 6.249 9.228 9.228 0 0 0-2.094-1.516 4.068 4.068 0 0 0 .794-2.389 3.378 3.378 0 0 0-3.233-3.5 3.378 3.378 0 0 0-3.234 3.5A4.085 4.085 0 0 0 5.472 8.1a6.856 6.856 0 0 0-2.367 1.63 11.921 11.921 0 0 1-1.579-5.944V2.155L8 1.51l6.474.645z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Administrators;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Administrators = Administrators;
  }
})(this)
