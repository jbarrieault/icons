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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-compass", role: "img", className: "symbol symbol-compass" },
  React.createElement(
    "title",
    { id: "title-compass" },
    "compass icon"
  ),
  React.createElement("path", { d: "M8 .132A7.868 7.868 0 1 0 15.887 8 7.887 7.887 0 0 0 8 .132zm0 14.641A6.773 6.773 0 1 1 14.791 8 6.79 6.79 0 0 1 8 14.773zM8 2.305A5.7 5.7 0 1 0 13.708 8 5.707 5.707 0 0 0 8 2.305zm0 10.753A5.058 5.058 0 1 1 13.071 8 5.07 5.07 0 0 1 8 13.058zm2.411-7.891L7.055 6.922a.324.324 0 0 0-.136.136l-1.771 3.365a.323.323 0 0 0 .286.473.317.317 0 0 0 .152-.038L8.94 9.074c.018-.01.026-.03.042-.043s.025 0 .035-.014.006-.024.014-.034.033-.024.042-.042l1.773-3.336a.323.323 0 0 0-.435-.438zM7.287 7.746l.964.963L6.208 9.8zm1.421.507l-.964-.963 2.043-1.068z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Compass;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Compass = Compass;
  }
})(this)
