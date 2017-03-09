(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Trash = function Trash() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-trash" },
  React.createElement(
    "title",
    { id: "title" },
    "trash icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement(
      "g",
      { id: "Layer_1-2", "data-name": "Layer 1" },
      React.createElement("path", { d: "M3.26,14.8A1.14,1.14,0,0,0,4.39,16H12a1.14,1.14,0,0,0,1.13-1.17l.44-10.05H2.84Zm7.21-7.63a.51.51,0,1,1,1,0v6.38a.51.51,0,1,1-1,0Zm-2.79,0a.51.51,0,1,1,1,0v6.38a.51.51,0,1,1-1,0Zm-2.76,0a.51.51,0,1,1,1,0v6.38a.51.51,0,1,1-1,0Zm8.85-5.25H10.51V.58C10.51.26,10.36,0,10,0H6.34a.5.5,0,0,0-.51.55V1.92H2.64a.53.53,0,0,0-.52.58v.61c0,.34.2.69.52.69H13.79c.32,0,.49-.37.49-.69V2.5C14.26,2.17,14.09,1.92,13.77,1.92Zm-4.18,0H6.78V1h2.8Z", style: "fill:#010101", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Trash;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Trash = Trash;
  }
})(this)
