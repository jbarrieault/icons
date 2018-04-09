(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var History = function History() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-history", role: "img", className: "symbol symbol-history" },
  React.createElement(
    "title",
    { id: "title-history" },
    "history icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1", fill: "#231f20" },
    React.createElement("path", { d: "M7.933 2.551a.923.923 0 0 0-.923.923v4.62a.925.925 0 0 0 .465.8l3.232 1.848a.9.9 0 0 0 .456.122.924.924 0 0 0 .458-1.726L8.856 7.557V3.474a.923.923 0 0 0-.923-.923z", role: "presentation" }),
    React.createElement("path", { d: "M8 0a7.967 7.967 0 0 0-6.857 3.931L0 3.424l.72 2.99 2.7-1.474-1.02-.452A6.621 6.621 0 1 1 12.684 12.7 6.6 6.6 0 0 1 2.32 11.408H.766A8 8 0 1 0 8 0z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = History;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.History = History;
  }
})(this)
