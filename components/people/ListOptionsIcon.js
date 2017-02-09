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

  var ListOptionsIcon = function ListOptionsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-list-options" },
      React.createElement(
        "title",
        { id: "title" },
        "list-options icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.707 2.164H6.026a.805.805 0 0 0-.805.805v.851a.805.805 0 0 0 .805.805h8.681a.805.805 0 0 0 .805-.805v-.851a.805.805 0 0 0-.805-.805zm.757 6.587h.012a.771.771 0 0 0 .036-.179v-.018l-.07.145zm.026 3.673l-.012.031.034.066v-.041c0-.021-.01-.038-.012-.059zM6.463 8.751l.016-.04-.686-1.36.432-.432h-.2a.805.805 0 0 0-.805.805v.851a.793.793 0 0 0 .2.518zM2.679 1.945H1.293a.805.805 0 0 0-.805.805v1.281a.805.805 0 0 0 .805.805h1.386a.805.805 0 0 0 .805-.805V2.75a.805.805 0 0 0-.805-.805zm3.784 10.5l-1.121-.368a.783.783 0 0 0-.121.4v.851a.805.805 0 0 0 .805.805h.083l-.275-.275.65-1.359zm-3.784-.994H1.293a.805.805 0 0 0-.805.805v1.281a.805.805 0 0 0 .805.805h1.386a.805.805 0 0 0 .805-.805v-1.276a.805.805 0 0 0-.805-.805zm0-4.755H1.293a.805.805 0 0 0-.805.805v1.285a.805.805 0 0 0 .805.805h1.386a.805.805 0 0 0 .805-.805V7.505a.805.805 0 0 0-.805-.805zm7.67-1.013l-.4 1.229a4.458 4.458 0 0 0-.884.365L7.919 6.7l-.855.855.577 1.145a4.458 4.458 0 0 0-.365.884l-1.229.4v1.229l1.229.4a4.458 4.458 0 0 0 .365.884l-.547 1.143.855.855 1.143-.576a4.56 4.56 0 0 0 .893.365l.394 1.229h1.229l.4-1.229a4.541 4.541 0 0 0 .893-.365l1.133.547.864-.855-.586-1.143a4.56 4.56 0 0 0 .365-.893l1.2-.365V9.986l-1.229-.4a4.458 4.458 0 0 0-.365-.884l.547-1.143-.85-.859-1.143.576a4.541 4.541 0 0 0-.893-.365l-.365-1.229zm.615 2.766A2.151 2.151 0 1 1 8.813 10.6a2.138 2.138 0 0 1 2.151-2.151z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ListOptionsIcon;
  } else {
    global.ListOptionsIcon = ListOptionsIcon;
  }
})(undefined);