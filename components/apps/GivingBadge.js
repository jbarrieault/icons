(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GivingBadge = function GivingBadge() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 104 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-giving-badge" },
  React.createElement(
    "title",
    { id: "title" },
    "giving-badge icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M16.422 12.856l-.422.422-.422-.422a3.284 3.284 0 0 0-4.354-.347 3.161 3.161 0 0 0-.242 4.688l.55.55 4.114 4.115a.5.5 0 0 0 .709 0l4.664-4.662a3.161 3.161 0 0 0-.242-4.688 3.285 3.285 0 0 0-4.355.344z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { "class": "cls-1", d: "M44.264 23.264a7.709 7.709 0 0 1-8.1-7.921V15.3a7.906 7.906 0 0 1 8.075-7.965 8.457 8.457 0 0 1 6.051 2.112l-2.134 2.575a5.671 5.671 0 0 0-4.026-1.562 4.626 4.626 0 0 0-4.423 4.8v.04a4.615 4.615 0 0 0 4.665 4.885 5.408 5.408 0 0 0 3.19-.924v-2.2h-3.409v-2.928h6.689v6.689a10 10 0 0 1-6.578 2.442zm9.007-13.356v-2.97h3.521v2.97zM53.359 23V11.207H56.7V23zm12.204.088h-3.037l-4.642-11.881h3.543l2.641 7.9 2.662-7.9h3.477zm5.767-13.18v-2.97h3.521v2.97zM71.419 23V11.207h3.344V23zm13.267 0v-6.579c0-1.584-.748-2.4-2.024-2.4s-2.09.814-2.09 2.4V23h-3.345V11.207h3.345v1.672a4.17 4.17 0 0 1 3.454-1.892c2.53 0 4 1.672 4 4.378V23zm10.844 3.564a11.2 11.2 0 0 1-5.215-1.232l1.145-2.509a7.7 7.7 0 0 0 3.982 1.077c2.288 0 3.367-1.1 3.367-3.213v-.572a4.613 4.613 0 0 1-3.851 1.914 5.179 5.179 0 0 1-5.237-5.5v-.044a5.191 5.191 0 0 1 5.237-5.5 4.771 4.771 0 0 1 3.806 1.76v-1.54h3.345v9.131c0 4.446-2.2 6.228-6.579 6.228zm3.28-10.077a2.875 2.875 0 0 0-5.743 0v.044a2.694 2.694 0 0 0 2.86 2.728 2.726 2.726 0 0 0 2.883-2.728z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GivingBadge;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.GivingBadge = GivingBadge;
  }
})(this)