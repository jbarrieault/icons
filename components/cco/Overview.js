(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Overview = function Overview() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-overview" },
  React.createElement(
    "title",
    { id: "title" },
    "overview icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,.63A7.87,7.87,0,0,0,.14,8.49a7.63,7.63,0,0,0,4.07,6.79l.17.09h7.25l.17-.09a7.63,7.63,0,0,0,4.07-6.79A7.87,7.87,0,0,0,8,.63ZM8,2.1a6.38,6.38,0,0,1,6.39,6.39,6.11,6.11,0,0,1-3.18,5.4H4.79a6.11,6.11,0,0,1-3.18-5.4A6.38,6.38,0,0,1,8,2.1ZM8,3.58a4.87,4.87,0,0,0-2.38.63l.49.31A4.34,4.34,0,0,1,8,4.07a4.44,4.44,0,0,1,3.12,1.3l0,0a4.37,4.37,0,0,1,0,6.2.25.25,0,1,0,.35.35A4.91,4.91,0,0,0,8,3.58Zm-4.42.49s3.15,5,3.64,5.5a1.35,1.35,0,0,0,1.86,0,1.31,1.31,0,0,0,0-1.86c-.49-.49-5.5-3.64-5.5-3.64Zm.15,2a4.86,4.86,0,0,0-.64,2.39A4.93,4.93,0,0,0,4.53,12a.25.25,0,1,0,.35-.35,4.44,4.44,0,0,1-1.3-3.12A4.36,4.36,0,0,1,4,6.57Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Overview;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Overview = Overview;
  }
})(this)
