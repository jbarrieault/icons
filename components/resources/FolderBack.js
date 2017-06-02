(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FolderBack = function FolderBack() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-folder-back" },
  React.createElement(
    "title",
    { id: "title" },
    "folder-back icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.715 3.273a.591.591 0 0 0-.591-.591H8.261V2.4a.855.855 0 0 0-.855-.855H2.061a.855.855 0 0 0-.855.855v.283H.671a.591.591 0 0 0-.591.591v2.114h14.635zM5.95 13.557a1.147 1.147 0 0 1 0-1.965l5.688-3.459.337-.017a1.113 1.113 0 0 1 1.112 1.111v.893h2.23l.6-3.4H.08v7.175a.808.808 0 0 0 .808.808H7.85z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M15.953 13.884a.146.146 0 0 1-.146.146h-3.722v1.859a.111.111 0 0 1-.168.1L6.466 12.7a.148.148 0 0 1 0-.253l5.451-3.314a.111.111 0 0 1 .169.095v1.892h3.722a.146.146 0 0 1 .146.146z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FolderBack;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.FolderBack = FolderBack;
  }
})(this)