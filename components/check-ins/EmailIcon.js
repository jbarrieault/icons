(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EmailIcon = function EmailIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email" },
  React.createElement(
    "title",
    { id: "title" },
    "email icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M7.979 8.17l7.646-5.615a.963.963 0 0 0-.639-.245H.973a.964.964 0 0 0-.639.245zm-3.262-.693L0 4.013v6.928l4.717-3.464zm6.523 0l4.718 3.464V4.013L11.24 7.477zm-1.159.851l-2.1 1.544-2.1-1.544L0 12.644v.413a.973.973 0 0 0 .973.973h14.012a.973.973 0 0 0 .973-.973v-.413z", "data-name": "Your Icon", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailIcon
  } else {
    global.EmailIcon = EmailIcon
  }
})(this)