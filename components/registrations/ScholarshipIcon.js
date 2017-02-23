(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ScholarshipIcon = function ScholarshipIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-scholarship" },
  React.createElement(
    "title",
    { id: "title" },
    "scholarship icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M7.944 11.178A5.564 5.564 0 1 1 13.5 5.6a5.556 5.556 0 0 1-5.556 5.578zm0-9.58a4.017 4.017 0 1 0 4.007 4.026A4.013 4.013 0 0 0 7.944 1.6z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M6.415 15.949l-1.826-1.882-2.61-.019 2.33-5.424 1.417.615-1.417 3.281.932.019.653.671 1.342-3.132 1.416.615-2.237 5.256z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.472 15.949l-2.236-5.256 1.416-.615 1.342 3.132.652-.671.932-.019-1.416-3.299 1.416-.597 2.33 5.424-2.609.019-1.827 1.882zM7.944 3.208a2.406 2.406 0 1 0 2.4 2.411 2.4 2.4 0 0 0-2.4-2.411z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ScholarshipIcon
  } else {
    global.ScholarshipIcon = ScholarshipIcon
  }
})(this)