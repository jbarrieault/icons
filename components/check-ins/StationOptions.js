(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StationOptions = function StationOptions() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-station-options", role: "img", className: "symbol symbol-station-options" },
  React.createElement(
    "title",
    { id: "title-station-options" },
    "station-options icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.812 3.826h-6.2a1.03 1.03 0 0 1-1.007-1.052 1.03 1.03 0 0 1 1.006-1.051h6.2a1.029 1.029 0 0 1 1.007 1.051 1.03 1.03 0 0 1-1.006 1.052zm-10.091.319H2.187a1.03 1.03 0 0 1-1.006-1.052v-.687a1.029 1.029 0 0 1 1.006-1.051h1.534a1.029 1.029 0 0 1 1.006 1.051v.687a1.03 1.03 0 0 1-1.006 1.052zm10.091 4.906h-6.2a1.052 1.052 0 0 1 0-2.1h6.2a1.052 1.052 0 0 1 0 2.1zM3.721 9.4H2.187a1.03 1.03 0 0 1-1.006-1.056v-.688a1.03 1.03 0 0 1 1.006-1.051h1.534a1.03 1.03 0 0 1 1.006 1.051v.688A1.03 1.03 0 0 1 3.721 9.4zm10.091 4.9h-6.2a1.053 1.053 0 0 1 0-2.1h6.2a1.052 1.052 0 0 1 0 2.1zm-10.091.345H2.187a1.03 1.03 0 0 1-1.006-1.051v-.687a1.03 1.03 0 0 1 1.006-1.051h1.534a1.03 1.03 0 0 1 1.006 1.051v.687a1.03 1.03 0 0 1-1.006 1.051z", "data-name": "Your Icon", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StationOptions;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.StationOptions = StationOptions;
  }
})(this)
