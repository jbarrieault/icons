(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Projector = function Projector() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-projector" },
  React.createElement(
    "title",
    { id: "title" },
    "projector icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M7.945 4.7a3.757 3.757 0 1 0 3.8 3.758 3.781 3.781 0 0 0-3.8-3.758zm1.41 3.835c-.12.087-1.7 1.451-1.84 1.544-.1.069-.239-.008-.239-.165v-3.09c0-.145.122-.251.244-.167.1.067 1.668 1.424 1.835 1.54a.213.213 0 0 1 .001.334z", role: "presentation" }),
    React.createElement("path", { "class": "cls-2", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 14H2V2h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Projector;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Projector = Projector;
  }
})(this)