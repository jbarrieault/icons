(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bill = function Bill() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bill", role: "img", className: "symbol symbol-bill" },
  React.createElement(
    "title",
    { id: "title-bill" },
    "bill icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.825 1.4v12.409l-.893-.463-.7-.361-.644.448-1.372.954-1.552-.987-.675-.428-.686.409-1.677 1-1.217-.92-.654-.494-.727.376-.9.467V1.4h11.7m1.3-1.3H.826v15.847l2.8-1.447 1.914 1.447L7.968 14.5l2.285 1.447 2.08-1.447 2.792 1.447V.1z", role: "presentation" }),
    React.createElement("path", { d: "M5.911 6.69c-.7-.289-.818-.438-.818-.662 0-.2.153-.425.582-.425a1.648 1.648 0 0 1 .863.234l.254.145.375-.988-.183-.108a2.164 2.164 0 0 0-.729-.26v-.809H4.961v.89a1.468 1.468 0 0 0-1.043 1.415c0 .9.734 1.308 1.45 1.589.607.246.731.458.731.7 0 .31-.275.518-.684.518a1.845 1.845 0 0 1-.99-.295l-.266-.177-.36 1 .153.11a2.356 2.356 0 0 0 1.009.362v.822h1.294v-.94a1.563 1.563 0 0 0 1.026-1.454 1.809 1.809 0 0 0-1.37-1.667zm2.373-2.485h3.883v1.4H8.284zm0 2.574h3.883v1.4H8.284zm0 2.574h1.969v1.4H8.284z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bill;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Bill = Bill;
  }
})(this)
