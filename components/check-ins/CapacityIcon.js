(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var CapacityIcon = function CapacityIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-capacity" },
  React.createElement(
    "title",
    { id: "title" },
    "capacity icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M.949 8.6h5.49a.948.948 0 0 1 .948.948v5.5a.949.949 0 0 1-.949.952H.949A.949.949 0 0 1 0 15.051v-5.5A.949.949 0 0 1 .949 8.6z", role: "presentation" }),
    React.createElement("path", { "class": "cls-2", d: "M6.439 0H.948A.949.949 0 0 0 0 .949v5.476a.949.949 0 0 0 .948.949h5.491a.949.949 0 0 0 .948-.949V.949A.949.949 0 0 0 6.439 0zm0 6.141L1.231.949h5.208zM15.052 0H9.561a.949.949 0 0 0-.948.949v5.476a.949.949 0 0 0 .948.949h5.491A.949.949 0 0 0 16 6.425V.949A.949.949 0 0 0 15.052 0zm.031 6.269a.188.188 0 0 1-.187.188H9.717a.188.188 0 0 1-.187-.188V1.1a.188.188 0 0 1 .187-.183H14.9a.188.188 0 0 1 .187.188zM15.052 8.6H9.561a.949.949 0 0 0-.948.949v5.5a.949.949 0 0 0 .948.951h5.491a.949.949 0 0 0 .948-.949v-5.5a.949.949 0 0 0-.948-.951zm0 6.147L9.829 9.553h5.223z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CapacityIcon
  } else {
    global.CapacityIcon = CapacityIcon
  }
})(this)