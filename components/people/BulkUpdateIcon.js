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

  var BulkUpdateIcon = function BulkUpdateIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bulk-update" },
      React.createElement(
        "title",
        { id: "title" },
        "bulk-update icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M.387 1.938A.387.387 0 0 0 0 2.324v1.688a.387.387 0 0 0 .387.388h8.054l.806-.949 1.284-1.512zM0 6.665v1.688a.387.387 0 0 0 .387.387h4.366l2.091-2.462H.387A.387.387 0 0 0 0 6.665zM13.151 10.7h-.629l-2.091 2.461h2.72a.387.387 0 0 0 .387-.387v-1.685a.387.387 0 0 0-.387-.389zM0 11.089v1.688a.387.387 0 0 0 .387.387h2.005l.039-1.579a.32.32 0 0 1 .076-.2l.58-.683h-2.7a.387.387 0 0 0-.387.387zm13.02-9.107l-1.307 1.537 2.813 2.389 1.306-1.538a.4.4 0 0 0-.046-.563l-2.2-1.873a.4.4 0 0 0-.566.048zM4.458 15.42l2.367-.446-2.781-2.363-.059 2.406a.4.4 0 0 0 .473.403zm.153-3.508L7.424 14.3l6.514-7.7-2.813-2.388z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = BulkUpdateIcon;
  } else {
    global.BulkUpdateIcon = BulkUpdateIcon;
  }
})(undefined);