(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Ticket = function Ticket() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-ticket" },
  React.createElement(
    "title",
    { id: "title" },
    "ticket icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M14,4.7l-.22,0a2.13,2.13,0,0,1-2.52-2.52l0-.22-2-2L0,9.3l2,2,.22,0a2.13,2.13,0,0,1,2.52,2.52l0,.22,2,2L16,6.7Zm-3.54,6.35L6.69,14.81,5.6,13.71a3,3,0,0,0-3.32-3.32L1.18,9.3,4.93,5.54l.67.67.6-.6-.67-.67L9.28,1.19l1.09,1.09A3,3,0,0,0,13.7,5.61L14.79,6.7,11,10.46l-.67-.67-.6.6ZM7.2,7.81l1,1,.6-.6-1-1Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Ticket;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Ticket = Ticket;
  }
})(this)
