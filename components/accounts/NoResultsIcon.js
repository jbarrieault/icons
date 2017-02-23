(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var NoResultsIcon = function NoResultsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-no-results" },
  React.createElement(
    "title",
    { id: "title" },
    "no-results icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.5 12.6l-4.153-2.63a5.542 5.542 0 0 0-9.692-5.336 5.546 5.546 0 0 0 4.67 8.513 5.587 5.587 0 0 0 1.222-.136 5.5 5.5 0 0 0 2.854-1.64l4.194 2.66zM4.273 10.856A3.855 3.855 0 1 1 9.7 9.471l-.235.37a3.854 3.854 0 0 1-5.192 1.015z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M7.576 5.212L6.398 6.389 5.22 5.212 4.024 6.407l1.178 1.178-1.178 1.178L5.22 9.959l1.178-1.178 1.178 1.178 1.195-1.196-1.177-1.178 1.177-1.178-1.195-1.195z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = NoResultsIcon
  } else {
    global.NoResultsIcon = NoResultsIcon
  }
})(this)