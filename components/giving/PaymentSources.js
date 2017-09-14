(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PaymentSources = function PaymentSources() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-payment-sources", role: "img", className: "symbol symbol-payment-sources" },
  React.createElement(
    "title",
    { id: "title-payment-sources" },
    "payment-sources icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.367 2.094a.525.525 0 0 1 .525.525v10.762a.525.525 0 0 1-.525.525H5.094a.525.525 0 0 1-.525-.525V2.619a.525.525 0 0 1 .525-.525h8.273m0-1.094H5.094a1.618 1.618 0 0 0-1.618 1.619v10.762A1.618 1.618 0 0 0 5.094 15h8.273a1.618 1.618 0 0 0 1.618-1.618V2.619A1.618 1.618 0 0 0 13.367 1z", role: "presentation" }),
  React.createElement("path", { className: "cls-2", d: "M6.66 11.086l.773-.955c.046-.056.1-.068.149-.023a2.648 2.648 0 0 0 1.364.6V8.766a2.234 2.234 0 0 1-2.138-2.24 2.342 2.342 0 0 1 2.138-2.389v-.671a.108.108 0 0 1 .114-.114h.524a.108.108 0 0 1 .114.114v.671a3.877 3.877 0 0 1 1.808.614.114.114 0 0 1 .023.171l-.66.955a.114.114 0 0 1-.16.034 2.845 2.845 0 0 0-1.012-.4v1.834a2.2 2.2 0 0 1 2.15 2.264A2.354 2.354 0 0 1 9.7 12.054v.694a.108.108 0 0 1-.114.114H9.06a.107.107 0 0 1-.114-.114v-.66a3.969 3.969 0 0 1-2.263-.83.115.115 0 0 1-.023-.172zM8.946 5.57a.862.862 0 0 0-.569.83.764.764 0 0 0 .569.8zm1.331 4.118a.762.762 0 0 0-.58-.762v1.706a.931.931 0 0 0 .58-.944z", role: "presentation" }),
  React.createElement("path", { className: "cls-3", d: "M2.108 3.495v9.011a.525.525 0 0 0 .525.525h.279V2.97h-.279a.525.525 0 0 0-.525.525z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M2.633 13.03a.525.525 0 0 1-.525-.525v-9.01a.525.525 0 0 1 .525-.525h.279V1.876h-.279a1.618 1.618 0 0 0-1.618 1.619v9.011a1.618 1.618 0 0 0 1.618 1.618h.279V13.03z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PaymentSources;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.PaymentSources = PaymentSources;
  }
})(this)