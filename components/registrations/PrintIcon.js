(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PrintIcon = function PrintIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-print" },
  React.createElement(
    "title",
    { id: "title" },
    "print icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M14.541 11.827l-.015-4.965a1.245 1.245 0 0 0-1.259-1.226h-1.136V4.443L9.114 2.032H3.831v3.6H2.684a1.244 1.244 0 0 0-1.259 1.237l.015 4.958h2.391V13.7h8.3v-1.873zM4.706 2.872h3.842v2.04h2.77v2.246H4.706V2.872zm6.612 9.951H4.706v-2.19h6.612v2.19z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PrintIcon
  } else {
    global.PrintIcon = PrintIcon
  }
})(this)