(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bill = function Bill() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bill" },
  React.createElement(
    "title",
    { id: "title" },
    "bill icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.06,6.22A4.15,4.15,0,0,0,10.34,5a3.39,3.39,0,0,0-1.05-.83A2.83,2.83,0,0,0,8,3.84a2.86,2.86,0,0,0-1.3.3A3.37,3.37,0,0,0,5.63,5a3.91,3.91,0,0,0-.71,1.24,4.68,4.68,0,0,0,0,3.06,3.92,3.92,0,0,0,.71,1.24,3.39,3.39,0,0,0,1.06.83,2.91,2.91,0,0,0,2.59,0,3.39,3.39,0,0,0,1.06-.83,4.16,4.16,0,0,0,.72-1.24,4.48,4.48,0,0,0,0-3.06ZM10,10H6.18V9h1.2V6.4s-.57.55-.57.55L6,6.17l1.54-1.3H8.75V9H10Z", role: "presentation" }),
    React.createElement("path", { d: "M15.79,1.92a.67.67,0,0,0-.46-.18H.69a.69.69,0,0,0-.48.18A.54.54,0,0,0,0,2.34v10.8a.56.56,0,0,0,.19.43.69.69,0,0,0,.48.18H15.33a.67.67,0,0,0,.46-.18.56.56,0,0,0,.19-.43V2.34A.54.54,0,0,0,15.79,1.92ZM1.57,10.15a1.8,1.8,0,0,0-.36,0V5.31a1.8,1.8,0,0,0,.36,0A2.48,2.48,0,0,0,4,2.94H12a2.48,2.48,0,0,0,2.47,2.4,1.79,1.79,0,0,0,.34,0v4.87a1.79,1.79,0,0,0-.34,0A2.48,2.48,0,0,0,12,12.55H4A2.48,2.48,0,0,0,1.57,10.15Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bill;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Bill = Bill;
  }
})(this)
