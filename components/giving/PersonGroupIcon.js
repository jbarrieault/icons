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

  var PersonGroupIcon = function PersonGroupIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-group" },
      React.createElement(
        "title",
        { id: "title" },
        "person-group icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M16.025 14.92a22.683 22.683 0 0 0-.217-3.343c-.275-.468-.917-.789-2.107-1.287s-1.566-.915-1.566-1.811c0-.538.362-.362.522-1.347.066-.409.386-.007.447-.939 0-.372-.175-.464-.175-.464s.089-.55.123-.973a1.78 1.78 0 0 0-1.913-1.89 1.78 1.78 0 0 0-1.913 1.89c.035.424.123.973.123.973s-.173.092-.173.464c.061.933.381.531.447.939.159.985.522.809.522 1.347a1.448 1.448 0 0 1-.662 1.34c2.593 1.3 2.94 1.562 2.94 2.722v2.379zM8.2 10.74c-1.582-.661-2.088-1.219-2.088-2.414 0-.717.483-.483.7-1.8.088-.545.515-.009.6-1.253 0-.5-.233-.619-.233-.619s.118-.733.165-1.3A2.373 2.373 0 0 0 4.788.84a2.373 2.373 0 0 0-2.55 2.521c.046.565.164 1.3.164 1.3s-.232.123-.232.619c.082 1.243.508.707.6 1.252.212 1.313.695 1.079.695 1.8 0 1.194-.506 1.752-2.088 2.414C.891 10.942.025 11.254.025 12v2.92H11.14v-2.185c0-.686-1.349-1.335-2.94-1.995z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PersonGroupIcon;
  } else {
    global.PersonGroupIcon = PersonGroupIcon;
  }
})(undefined);