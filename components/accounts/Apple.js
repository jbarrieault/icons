(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Apple = function Apple() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-apple", role: "img", className: "symbol symbol-apple" },
  React.createElement(
    "title",
    { id: "title-apple" },
    "apple icon"
  ),
  React.createElement("path", { d: "M12.478 5.665a3.255 3.255 0 0 0-1.075 1.1 2.593 2.593 0 0 0-.284 1.2 2.5 2.5 0 0 0 .169.935 3.068 3.068 0 0 0 .477.8 3.255 3.255 0 0 0 1.031.756 6.952 6.952 0 0 1-.867 1.672 5.209 5.209 0 0 1-1.065 1.209 1.541 1.541 0 0 1-.911.357 2.839 2.839 0 0 1-.935-.222l-.183-.067-.3-.125a2.4 2.4 0 0 0-.7-.1 2.683 2.683 0 0 0-.886.174l-.232.086-.289.116a1.9 1.9 0 0 1-.693.135 2.236 2.236 0 0 1-1.571-1.026A7.56 7.56 0 0 1 2.9 10.469a6.937 6.937 0 0 1-.429-2.385A3.832 3.832 0 0 1 3.348 5.5a2.983 2.983 0 0 1 2.394-1.029 2.633 2.633 0 0 1 1.031.2L7 4.76l.231.1a1.411 1.411 0 0 0 .492.125 1.46 1.46 0 0 0 .539-.106l.309-.115.221-.087a3.379 3.379 0 0 1 1.195-.2 3.027 3.027 0 0 1 2.491 1.188zM10.03 1.724c.013.142.019.251.019.328A2.572 2.572 0 0 1 9.7 3.285a2.636 2.636 0 0 1-.906.988 2.276 2.276 0 0 1-1.234.352 3.131 3.131 0 0 1-.029-.338 2.277 2.277 0 0 1 .3-1.074 2.947 2.947 0 0 1 .824-.959 2.611 2.611 0 0 1 1.175-.5z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Apple;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Apple = Apple;
  }
})(this)
