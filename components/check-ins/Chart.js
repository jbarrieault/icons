(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Chart = function Chart() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-chart", role: "img", className: "symbol symbol-chart" },
  React.createElement(
    "title",
    { id: "title-chart" },
    "chart icon"
  ),
  React.createElement("path", { d: "M5.7.018a5.451 5.451 0 1 0 5.452 5.45A5.448 5.448 0 0 0 5.7.018zm0 9.525a4.075 4.075 0 0 1 0-8.149v4.083l3.314 2.362A4.068 4.068 0 0 1 5.7 9.543zm7.053 5.931a.506.506 0 0 0 .506.506h1.617a.507.507 0 0 0 .507-.507v-8.7a.506.506 0 0 0-.506-.506H13.26a.507.507 0 0 0-.507.507zm-3.914-3.901v3.9a.506.506 0 0 0 .507.506h1.617a.506.506 0 0 0 .506-.506v-3.9a.51.51 0 0 0-.508-.509H9.349a.511.511 0 0 0-.51.509zm-3.912 1.21v2.692a.506.506 0 0 0 .506.506h1.615a.507.507 0 0 0 .508-.507v-2.687a.513.513 0 0 0-.511-.511H5.434a.507.507 0 0 0-.507.507z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Chart;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Chart = Chart;
  }
})(this)
