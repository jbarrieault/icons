(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var House = function House() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-house", role: "img", className: "symbol symbol-house" },
  React.createElement(
    "title",
    { id: "title-house" },
    "house icon"
  ),
  React.createElement("path", { d: "M15.806 8.287L13.93 6.4V2.622a.31.31 0 0 0-.309-.309h-1.713a.309.309 0 0 0-.309.309v1.432L8.285.719a.437.437 0 0 0-.633 0L.2 8.289a.438.438 0 0 0 .318.739h2.265v5.943a.308.308 0 0 0 .308.309h2.8a.309.309 0 0 0 .309-.309v-3.94a1.625 1.625 0 0 1 1.638-1.364h.405a1.6 1.6 0 0 1 1.609 1.364v3.94a.308.308 0 0 0 .308.309h2.8a.308.308 0 0 0 .308-.309V9.028h2.222a.438.438 0 0 0 .316-.741z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = House;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.House = House;
  }
})(this)
