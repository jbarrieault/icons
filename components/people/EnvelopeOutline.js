(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EnvelopeOutline = function EnvelopeOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-envelope-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "envelope-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.947 1.445H2.061A2.026 2.026 0 0 0 .044 3.479V11.8a2.026 2.026 0 0 0 2.017 2.035h11.886a2.026 2.026 0 0 0 2.017-2.035V3.479a2.026 2.026 0 0 0-2.017-2.034zm-3.182 6.9l4-3.421v5.783zm-8.7-5.689h11.882a.809.809 0 0 1 .777.622L8.135 9.161a.163.163 0 0 1-.2 0L1.291 3.238a.811.811 0 0 1 .77-.584zm3.31 5.766l-4.132 2.35V4.877zm8.572 4.2H2.061a.817.817 0 0 1-.746-.493l4.9-2.785 1.012.916a1.347 1.347 0 0 0 1.615 0l1.076-.994 4.788 2.806a.813.813 0 0 1-.759.55z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EnvelopeOutline;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.EnvelopeOutline = EnvelopeOutline;
  }
})(this)