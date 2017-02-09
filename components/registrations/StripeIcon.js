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

  var StripeIcon = function StripeIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-stripe" },
      React.createElement(
        "title",
        { id: "title" },
        "stripe icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M1.011 9.891a3.145 3.145 0 0 1-.981-.152v-.968a5.96 5.96 0 0 0 .835.146c.285 0 .464-.08.464-.385 0-.172-.139-.312-.325-.458l-.317-.258A1.536 1.536 0 0 1 0 6.516a1.344 1.344 0 0 1 1.512-1.4 2.9 2.9 0 0 1 .962.153v.941a3.594 3.594 0 0 0-.829-.139c-.245 0-.4.119-.4.371s.173.358.385.517l.312.232a1.464 1.464 0 0 1 .643 1.3c.004 1.221-.825 1.4-1.574 1.4zm3.204 0a.891.891 0 0 1-1.027-1.014V7.113h-.464v-.8h.464l.159-.8 1.1-.265v1.063h.663l-.166.8h-.5v1.54c0 .239.073.285.212.285.093 0 .451-.053.451-.053v.9a5.079 5.079 0 0 1-.892.108zM7.054 7.3a.824.824 0 0 0-.417.119v2.406H5.376V6.311h1l.186.338a.581.581 0 0 1 .563-.4.745.745 0 0 1 .391.073v1.043a2.017 2.017 0 0 0-.462-.065zm.764 2.525V6.311h1.26v3.514zm.63-3.945a.63.63 0 1 1 .623-.63.624.624 0 0 1-.623.63zm2.865 4.011a1.949 1.949 0 0 1-.444-.073v1.267h-1.26V6.311h1.021l.185.219a1.128 1.128 0 0 1 .749-.285c.517 0 1.127.146 1.127 1.8.001 1.82-.914 1.846-1.378 1.846zm-.146-2.719a.838.838 0 0 0-.3.106v1.7a.964.964 0 0 0 .212.033c.219 0 .351-.186.351-.962s-.057-.876-.263-.876zm3.111 1.314c0 .378.186.451.5.451A6.561 6.561 0 0 0 15.8 8.8v.915a3.5 3.5 0 0 1-1.028.179c-.789 0-1.75-.126-1.75-1.81 0-1.485.756-1.837 1.552-1.837.815 0 1.405.418 1.405 1.823v.418zm.3-1.492c-.319 0-.285.391-.3.809h.531c0-.411.02-.809-.232-.809z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = StripeIcon;
  } else {
    global.StripeIcon = StripeIcon;
  }
})(undefined);