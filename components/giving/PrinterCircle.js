(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PrinterCircle = function PrinterCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-printer-circle" },
  React.createElement(
    "title",
    { id: "title" },
    "printer-circle icon"
  ),
  React.createElement("path", { d: "M11.519 10.175l-.008-2.727a.675.675 0 0 0-.676-.674h-.61V6.12L8.607 4.8H5.772v1.975h-.615a.676.676 0 0 0-.676.677l.008 2.723h1.283V11.2h4.453v-1.025zM6.242 5.257H8.3v1.12h1.489v1.234H6.242V5.257zm3.548 5.466H6.242V9.52h3.547v1.2z", fill: "#010101", role: "presentation" }),
  React.createElement("path", { d: "M8 2.044A5.956 5.956 0 1 1 2.076 8 5.947 5.947 0 0 1 8 2.044M8 .459A7.541 7.541 0 1 0 15.5 8 7.521 7.521 0 0 0 8 .459z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PrinterCircle;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.PrinterCircle = PrinterCircle;
  }
})(this)