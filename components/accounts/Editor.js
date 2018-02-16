(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Editor = function Editor() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-editor", role: "img", className: "symbol symbol-editor" },
  React.createElement(
    "title",
    { id: "title-editor" },
    "editor icon"
  ),
  React.createElement("path", { d: "M14.107 4.435a1.435 1.435 0 0 0 0-2.029L12.372.671a1.434 1.434 0 0 0-2.028 0l-7 7-.016 3.713 3.817.014zm-9.624 5.8l.009-2.089 6.665-6.664a.282.282 0 0 1 .4 0l1.737 1.738a.276.276 0 0 1 .083.2.279.279 0 0 1-.083.2L6.67 10.246zM.855 13.46h13.749v1.5H.855z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Editor;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Editor = Editor;
  }
})(this)
