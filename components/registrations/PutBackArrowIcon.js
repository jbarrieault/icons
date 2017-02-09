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

  var PutBackArrowIcon = function PutBackArrowIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-put-back-arrow" },
      React.createElement(
        "title",
        { id: "title" },
        "put-back-arrow icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M.3 13.468a5.966 5.966 0 0 1 .072-.93l.08-.533.14-.562A9.381 9.381 0 0 1 1 10.249a9.732 9.732 0 0 1 .64-1.206 10.669 10.669 0 0 1 .839-1.155 9.621 9.621 0 0 1 1.033-1.013 10.956 10.956 0 0 1 1.136-.846A10.158 10.158 0 0 1 5.831 5.4l.576-.244.557-.179c.185-.053.341-.115.53-.153l.528-.107.469-.086.109-.01V2.327a.721.721 0 0 1 1.183-.549l5.275 4.368a.712.712 0 0 1 0 1.1l-5.279 4.367a.721.721 0 0 1-1.179-.549V8.852l-.1.007-.24.009a2.665 2.665 0 0 0-.308.044l-.352.054-.365.1c-.259.051-.51.169-.789.255a7.392 7.392 0 0 0-.8.406 9.241 9.241 0 0 0-.79.521 7.517 7.517 0 0 0-.707.649 8.666 8.666 0 0 0-.621.717 8.81 8.81 0 0 0-.479.762l-.205.372-.154.367a4.9 4.9 0 0 0-.243.664l-.093.286-.056.248-.11.48-.028.122a.909.909 0 0 1-1.79-.122l-.054-.611-.025-.326c.009-.122.009-.25.009-.388z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PutBackArrowIcon;
  } else {
    global.PutBackArrowIcon = PutBackArrowIcon;
  }
})(undefined);