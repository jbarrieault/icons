(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var StarIcon = function StarIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-star" },
  React.createElement(
    "title",
    { id: "title" },
    "star icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.926 6.165a.686.686 0 0 0-.555-.467l-4.681-.68L8.6.775a.715.715 0 0 0-1.233 0L5.27 5.018.589 5.7a.687.687 0 0 0-.381 1.169l3.388 3.3-.8 4.663a.687.687 0 0 0 1 .724l4.187-2.2 4.187 2.2a.679.679 0 0 0 .32.079.688.688 0 0 0 .678-.8l-.8-4.663 3.388-3.3a.687.687 0 0 0 .17-.707z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StarIcon
  } else {
    global.StarIcon = StarIcon
  }
})(this)