(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AddOns = function AddOns() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-add-ons" },
  React.createElement(
    "title",
    { id: "title" },
    "add-ons icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.32,4.27H13.14v-2a.41.41,0,0,0-.41-.41H9.89a.41.41,0,0,0-.41.41v2H6.66v-2a.41.41,0,0,0-.41-.41H3.41A.41.41,0,0,0,3,2.24v2H.68a.59.59,0,0,0-.59.59v9.52A.59.59,0,0,0,.68,15H15.32a.59.59,0,0,0,.59-.59V4.86A.59.59,0,0,0,15.32,4.27Zm-5,5.92a.1.1,0,0,1-.1.1H8.86v1.37a.1.1,0,0,1-.1.1H7.24a.1.1,0,0,1-.1-.1V10.29H5.77a.1.1,0,0,1-.1-.1V8.67a.1.1,0,0,1,.1-.1H7.14V7.2a.1.1,0,0,1,.1-.1H8.76a.1.1,0,0,1,.1.1V8.57h1.37a.1.1,0,0,1,.1.1Z", style: "fill-rule:evenodd", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AddOns;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AddOns = AddOns;
  }
})(this)
