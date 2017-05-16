(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Compass = function Compass() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-compass" },
  React.createElement(
    "title",
    { id: "title" },
    "compass icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8 .132A7.868 7.868 0 1 0 15.887 8 7.886 7.886 0 0 0 8 .132zm0 14.64A6.773 6.773 0 1 1 14.791 8 6.79 6.79 0 0 1 8 14.773zM8 2.3A5.7 5.7 0 1 0 13.708 8 5.708 5.708 0 0 0 8 2.3zm0 10.758A5.058 5.058 0 1 1 13.071 8 5.07 5.07 0 0 1 8 13.058zm2.411-7.891L7.055 6.922a.326.326 0 0 0-.136.136l-1.771 3.365a.323.323 0 0 0 .437.435L8.94 9.074c.018-.01.027-.03.043-.043s.025 0 .034-.014.006-.024.014-.034.033-.024.042-.042L10.846 5.6a.323.323 0 0 0-.435-.438zM7.287 7.746l.964.963L6.208 9.8zm1.421.507l-.964-.963 2.043-1.068z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Compass;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Compass = Compass;
  }
})(this)
