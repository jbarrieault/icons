(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LArr = function LArr() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-l-arr", role: "img", className: "symbol symbol-l-arr" },
  React.createElement(
    "title",
    { id: "title-l-arr" },
    "l-arr icon"
  ),
  React.createElement("path", { d: "M8.676.292a.908.908 0 0 0-.661-.275 1.009 1.009 0 0 0-.691.275l-6.75 6.99a.962.962 0 0 0 0 1.349l6.75 7.049a.912.912 0 0 0 .669.278.954.954 0 0 0 .683-.278L9.7 14.659A.9.9 0 0 0 9.971 14a1 1 0 0 0-.275-.688L6.307 9.921h8.431a.955.955 0 0 0 .68-.267.878.878 0 0 0 .284-.668V7.015a.965.965 0 0 0-.964-.964H6.307L9.7 2.661a.905.905 0 0 0 .275-.668.951.951 0 0 0-.275-.68L8.676.292z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LArr;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.LArr = LArr;
  }
})(this)
