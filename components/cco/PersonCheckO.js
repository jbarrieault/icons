(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonCheckO = function PersonCheckO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-check-o" },
  React.createElement(
    "title",
    { id: "title" },
    "person-check-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.75,14.61l-.52-.45L9.86,12.79a.66.66,0,0,1,.93-.93l.92.92,2.45-2.45a.66.66,0,0,1,.93.93Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("path", { d: "M6.71,7.94A3.91,3.91,0,1,1,10.63,4,3.92,3.92,0,0,1,6.71,7.94Zm0-6.51A2.6,2.6,0,1,0,9.31,4,2.6,2.6,0,0,0,6.71,1.42Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("path", { d: "M8.63,15.89H2.88A2.06,2.06,0,0,1,.82,13.83V10.66A2.48,2.48,0,0,1,2.41,8.35l4.3-1.63L11.15,8.4a.66.66,0,1,1-.47,1.23l-4-1.51L2.88,9.57a1.16,1.16,0,0,0-.75,1.08v3.17a.75.75,0,0,0,.75.75H8.63a.66.66,0,1,1,0,1.31Z", style: "fill:#010101", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonCheckO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PersonCheckO = PersonCheckO;
  }
})(this)
