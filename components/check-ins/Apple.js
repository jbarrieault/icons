(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Apple = function Apple() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-apple", role: "img", className: "symbol symbol-apple" },
  React.createElement(
    "title",
    { id: "title-apple" },
    "apple icon"
  ),
  React.createElement("path", { d: "M8.675 1.392A3.426 3.426 0 0 1 11.188 0a3.419 3.419 0 0 1-.827 2.558 2.7 2.7 0 0 1-2.383 1.12 2.971 2.971 0 0 1 .697-2.286zm-.563 3.2c.541 0 1.544-.744 2.851-.744a3.572 3.572 0 0 1 3.134 1.6 3.473 3.473 0 0 0-1.731 3.031 3.562 3.562 0 0 0 2.156 3.256s-1.507 4.242-3.542 4.242c-.935 0-1.662-.63-2.647-.63-1 0-2 .653-2.648.653-1.859 0-4.207-4.023-4.207-7.257 0-3.182 1.988-4.851 3.852-4.851 1.211 0 2.152.7 2.782.7z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Apple;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Apple = Apple;
  }
})(this)
