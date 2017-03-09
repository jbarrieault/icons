(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LogoutO = function LogoutO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-logout-o" },
  React.createElement(
    "title",
    { id: "title" },
    "logout-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("polygon", { points: "12.63 4.46 11.95 5.16 14.09 7.26 6.41 7.26 6.41 8.23 14.19 8.23 11.98 10.47 12.67 11.16 16.01 7.78 12.63 4.46", style: "fill:#010101" }),
    React.createElement("path", { d: "M9.92,12.41l-.08.07,0,0-.18.12a6.07,6.07,0,0,1-.68.38,5.16,5.16,0,0,1-2.26.55A5.63,5.63,0,0,1,1,7.88,5.45,5.45,0,0,1,2.95,3.51,6.06,6.06,0,0,1,6.69,2.15a5.06,5.06,0,0,1,2.22.57,6.69,6.69,0,0,1,.7.4l.19.13.06,0,.08.06.6-.77-.08-.06-.31-.22h0a7.77,7.77,0,0,0-.81-.46,6,6,0,0,0-2.64-.67A7.06,7.06,0,0,0,2.33,2.76,6.39,6.39,0,0,0,0,7.88a6.59,6.59,0,0,0,6.65,6.67,6.12,6.12,0,0,0,2.68-.65,7,7,0,0,0,.79-.45l.3-.22.08-.06L10,12.49Z", style: "fill:#010101", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LogoutO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.LogoutO = LogoutO;
  }
})(this)
