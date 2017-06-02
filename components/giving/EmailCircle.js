(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailCircle = function EmailCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email-circle" },
  React.createElement(
    "title",
    { id: "title" },
    "email-circle icon"
  ),
  React.createElement("path", { d: "M8 2.044A5.956 5.956 0 1 1 2.076 8 5.947 5.947 0 0 1 8 2.044M8 .459A7.541 7.541 0 1 0 15.5 8 7.521 7.521 0 0 0 8 .459z", role: "presentation" }),
  React.createElement("path", { d: "M7.682 8.012a.516.516 0 0 0 .394 0l3.347-1.654a.172.172 0 0 0 .1-.155.483.483 0 0 0-.481-.483H4.968a.49.49 0 0 0-.487.489v.142a.172.172 0 0 0 .1.155zm3.526-.784l-2.826 1.4a1.192 1.192 0 0 1-.986 0L4.791 7.37a.216.216 0 0 0-.31.2v2.239a.471.471 0 0 0 .469.471H11a.524.524 0 0 0 .522-.524V7.423a.216.216 0 0 0-.315-.195z", fill: "#231f20", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailCircle;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.EmailCircle = EmailCircle;
  }
})(this)