(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PieChartO = function PieChartO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pie-chart-o" },
  React.createElement(
    "title",
    { id: "title" },
    "pie-chart-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm6.21,4.79L8.5,7.24V1A7,7,0,0,1,14.21,4.79ZM1,8A7,7,0,0,1,7.5,1V8.64h0v.1l.05,0,3.89,5.35A7,7,0,0,1,1,8Zm11.28,5.53L8.5,8.33l6.11-2.62a6.95,6.95,0,0,1-2.33,7.82Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PieChartO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PieChartO = PieChartO;
  }
})(this)
