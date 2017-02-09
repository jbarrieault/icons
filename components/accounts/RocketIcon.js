"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RocketIcon = function RocketIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-rocket" },
      React.createElement(
        "title",
        { id: "title" },
        "rocket icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M13.215 10.451a2.874 2.874 0 0 0-1.789-2.076 7.887 7.887 0 0 0-.126-2.793 6.01 6.01 0 0 0-2.326-3.174L8.826.784a.83.83 0 0 0-1.653 0l-.147 1.624A6.01 6.01 0 0 0 4.7 5.582a7.887 7.887 0 0 0-.126 2.793 2.874 2.874 0 0 0-1.789 2.076 5.749 5.749 0 0 0 .522 3.219 9.839 9.839 0 0 0 1.03 2 .827.827 0 0 0 1.049.19A1.488 1.488 0 0 0 6 15.206a2.044 2.044 0 0 0 .115-.625 3.867 3.867 0 0 1 .158-.969 1.428 1.428 0 0 0 .79.354l.1.678a.845.845 0 0 0 .861.711.833.833 0 0 0 .821-.711l.1-.676a1.343 1.343 0 0 0 .791-.356 3.9 3.9 0 0 1 .158.968 2.045 2.045 0 0 0 .115.626 1.488 1.488 0 0 0 .611.654.826.826 0 0 0 1.049-.189 9.777 9.777 0 0 0 1.031-2 5.749 5.749 0 0 0 .515-3.22zm-2.19 4.69a.7.7 0 0 1-.26-.261 6.526 6.526 0 0 0-.349-1.736 4.306 4.306 0 0 0-.868-.869.19.19 0 0 0-.173.173 3.263 3.263 0 0 1-.173.52.557.557 0 0 1-.341.173h-.016c-.13 0-.414.039-.634.064l-.191 1.32h-.04l-.191-1.319c-.22-.025-.5-.064-.634-.064H7.14a.557.557 0 0 1-.341-.173 3.263 3.263 0 0 1-.173-.52.19.19 0 0 0-.173-.173 4.306 4.306 0 0 0-.868.869 6.526 6.526 0 0 0-.349 1.736.7.7 0 0 1-.26.261c-.216-.26-1.719-2.979-1.38-4.51A2.21 2.21 0 0 1 5.54 8.978a6.714 6.714 0 0 1-.031-3.211 5.534 5.534 0 0 1 2.308-2.905L8 .86l.183 2a5.534 5.534 0 0 1 2.309 2.906 6.714 6.714 0 0 1-.031 3.211 2.21 2.21 0 0 1 1.945 1.652c.339 1.532-1.165 4.252-1.381 4.511z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M8 6.5a1.036 1.036 0 0 0 1.032-1.029A1.031 1.031 0 0 0 8 4.438a1.036 1.036 0 0 0-1.032 1.033A1.031 1.031 0 0 0 8 6.5zm0 .34a.821.821 0 0 0-.581 1.4.813.813 0 0 0 .58.24.821.821 0 0 0 .581-1.4.813.813 0 0 0-.58-.235z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RocketIcon;
  } else {
    global.RocketIcon = RocketIcon;
  }
})(undefined);