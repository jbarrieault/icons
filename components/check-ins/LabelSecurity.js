(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LabelSecurity = function LabelSecurity() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-label-security", role: "img", className: "symbol symbol-label-security" },
  React.createElement(
    "title",
    { id: "title-label-security" },
    "label-security icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M4.122 9.145h.458v2.29h-.458zm1.145 0h.458v2.29h-.458zm2.061 0h.458v2.29h-.458zm-2.519 0h.229v2.29h-.229zm1.145 0h.229v2.29h-.229zm.458 0h.229v2.29h-.229zm.458 0h.229v2.29H6.87zm1.145 0h.229v2.29h-.229zm.458 0h.229v2.29h-.229zm.458 0h.458v2.29h-.458zm2.061 0h.458v2.29h-.458zm1.603 0h.458v2.29h-.458zm.687 0h.458v2.29h-.458zm-3.664 0h.229v2.29h-.229zm.458 0h.229v2.29h-.229zm.458 0h.229v2.29h-.229zm1.145 0h.229v2.29h-.229zm.458 0h.229v2.29h-.229zm1.181-3.026l-.56.56-.012.014-.011-.013c-.073-.073-.145-.147-.219-.219a.161.161 0 1 0-.223.233l.338.337a.161.161 0 0 0 .23 0l.17-.17.515-.515a.153.153 0 0 0 .038-.168.16.16 0 0 0-.266-.059z", role: "presentation" }),
    React.createElement("path", { d: "M13.74 3.649H1.374A1.374 1.374 0 0 0 0 5.023V9.6a.459.459 0 0 0 .13.319l2.29 2.291a.461.461 0 0 0 .324.134H13.74a1.374 1.374 0 0 0 1.374-1.374V5.023a1.374 1.374 0 0 0-1.374-1.374zm-12.366.458H13.74a.914.914 0 0 1 .788.458H.585a.914.914 0 0 1 .789-.458zM14.2 5.916a2.557 2.557 0 0 1-.249 1.1 2.6 2.6 0 0 1-1.091 1.159.067.067 0 0 1-.071 0 2.835 2.835 0 0 1-.54-.4 2.489 2.489 0 0 1-.649-1.014 2.63 2.63 0 0 1-.117-.456 2.508 2.508 0 0 1-.029-.433 2.573 2.573 0 0 1 .026-.317c0-.028.013-.038.041-.043.13-.024.259-.044.388-.072a2.712 2.712 0 0 0 .606-.2 2.283 2.283 0 0 0 .243-.144.123.123 0 0 1 .074-.028.1.1 0 0 1 .053.016 2.063 2.063 0 0 0 .621.286 4.881 4.881 0 0 0 .547.129c.029.006.059.009.088.014a.036.036 0 0 1 .035.037 2.527 2.527 0 0 1 .026.325zM2.748 11.893L.458 9.6h1.527a.763.763 0 0 1 .763.763zm11.908-.916a.917.917 0 0 1-.916.916H3.206v-1.527a1.222 1.222 0 0 0-1.221-1.221H.458v-.458h14.2z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LabelSecurity;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.LabelSecurity = LabelSecurity;
  }
})(this)
