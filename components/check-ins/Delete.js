(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Delete = function Delete() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-delete", role: "img", className: "symbol symbol-delete" },
  React.createElement(
    "title",
    { id: "title-delete" },
    "delete icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M14.579 2.371H5.585a2.737 2.737 0 0 0-1.9.889L.343 7.236a1.659 1.659 0 0 0 0 2.062l3.344 3.975a2.732 2.732 0 0 0 1.9.89h8.994a1.426 1.426 0 0 0 1.415-1.434V3.805a1.426 1.426 0 0 0-1.417-1.434zm.2 10.358a.214.214 0 0 1-.2.22H5.586a1.565 1.565 0 0 1-.97-.457L1.271 8.517a.44.44 0 0 1 0-.5l3.345-3.975a1.565 1.565 0 0 1 .97-.457h8.993a.214.214 0 0 1 .2.22z", role: "presentation" }),
    React.createElement("path", { d: "M11.259 5.017l-1.58 1.58L8.1 5.017l-1.67 1.67 1.58 1.58-1.58 1.58 1.67 1.669 1.579-1.58 1.58 1.58 1.67-1.669-1.58-1.58 1.58-1.58-1.67-1.67z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Delete;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Delete = Delete;
  }
})(this)
