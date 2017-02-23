(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var CheckoutIcon = function CheckoutIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-checkout" },
  React.createElement(
    "title",
    { id: "title" },
    "checkout icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("circle", { "class": "cls-1", cx: "12.904", cy: "5.046", r: "2.047" }),
    React.createElement("path", { "class": "cls-1", d: "M12.879 8.072a2.589 2.589 0 0 0-2.589 2.589v1.669a.68.68 0 0 0 .721.671h3.736a.68.68 0 0 0 .721-.671v-1.669a2.589 2.589 0 0 0-2.589-2.589z", role: "presentation" }),
    React.createElement("path", { "class": "cls-2", d: "M8.769 14.422H3.6a.216.216 0 0 1-.216-.215V1.793a.216.216 0 0 1 .216-.215h5.077l1-1.578H2.983A1.173 1.173 0 0 0 1.81 1.173v13.654A1.173 1.173 0 0 0 2.983 16h6.694z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M7.828 5.929a.681.681 0 0 0-.963.963l.427.427H4.931a.681.681 0 0 0 0 1.362h2.361l-.427.427a.681.681 0 1 0 .963.963l1.54-1.54a.751.751 0 0 0 0-1.063z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckoutIcon
  } else {
    global.CheckoutIcon = CheckoutIcon
  }
})(this)