(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Permissions = function Permissions() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-permissions", role: "img", className: "symbol symbol-permissions" },
  React.createElement(
    "title",
    { id: "title-permissions" },
    "permissions icon"
  ),
  React.createElement("path", { d: "M15.452 16l-2.4-.052-.207-.207-.415-2.383h-1.968l-.277-.276.035-1.9-2.334.671-1.6-1.6a4.894 4.894 0 1 1 3.385-3.42l6.3 6.3v2.349a.472.472 0 0 1-.519.518zM2.4 3.019a1.734 1.734 0 1 0 2.452 0 1.741 1.741 0 0 0-2.452 0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Permissions;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Permissions = Permissions;
  }
})(this)
