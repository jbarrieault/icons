(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Integrations = function Integrations() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-integrations", role: "img", className: "symbol symbol-integrations" },
  React.createElement(
    "title",
    { id: "title-integrations" },
    "integrations icon"
  ),
  React.createElement("path", { d: "M8.784 7.874l-5 5-1.5-1.5L4.78 8.877H0V6.755h4.653l-2.409-2.41 1.5-1.5zM16 8.985v-2.12l-1.85-.53a5.966 5.966 0 0 0-.563-1.364l.931-1.677-1.5-1.5-1.677.931a5.94 5.94 0 0 0-1.363-.563L9.443.308h-2.12l-.53 1.85a6.166 6.166 0 0 0-.675.231l1.6 1.6a3.856 3.856 0 0 1 .666-.068 4.008 4.008 0 1 1 0 8.016 3.893 3.893 0 0 1-.753-.077l-1.578 1.573a6 6 0 0 0 .74.259l.53 1.85h2.12l.531-1.85a5.94 5.94 0 0 0 1.363-.563l1.677.931 1.5-1.5-.931-1.677a5.966 5.966 0 0 0 .563-1.364z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Integrations;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Integrations = Integrations;
  }
})(this)
