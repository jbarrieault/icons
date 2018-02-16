(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RArrEnclosed = function RArrEnclosed() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-r-arr-enclosed", role: "img", className: "symbol symbol-r-arr-enclosed" },
  React.createElement(
    "title",
    { id: "title-r-arr-enclosed" },
    "r-arr-enclosed icon"
  ),
  React.createElement("path", { d: "M12.617 7.5l-.017-.015-.018-.021a.706.706 0 0 0-.046-.051L8.989 3.862a.8.8 0 1 0-1.13 1.131l2.186 2.186H3.982a.8.8 0 1 0 0 1.6h6.063l-2.186 2.185a.8.8 0 1 0 1.13 1.136l3.551-3.556a.639.639 0 0 0 .044-.048l.022-.027.01-.014a.8.8 0 0 0 0-.95zM7.978-.015a7.994 7.994 0 1 0 7.994 7.993A7.994 7.994 0 0 0 7.978-.015zm0 14.388a6.395 6.395 0 1 1 6.4-6.394 6.4 6.4 0 0 1-6.4 6.394z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RArrEnclosed;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.RArrEnclosed = RArrEnclosed;
  }
})(this)
