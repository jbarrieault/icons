(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HouseholdError = function HouseholdError() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-household-error", role: "img", className: "symbol symbol-household-error" },
  React.createElement(
    "title",
    { id: "title-household-error" },
    "household-error icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.424 7.5L14.4 6.592v-2.9a1.036 1.036 0 0 0-1.038-1.006h-1.3a.979.979 0 0 0-.973 1.006v.018L9.166 2.047a1.74 1.74 0 0 0-2.281 0L.624 7.5a1.018 1.018 0 0 0 .665 1.788h1.084v4.054a1.148 1.148 0 0 0 1.144 1.176h8.993a1.209 1.209 0 0 0 1.209-1.176V9.288h1.019a1.024 1.024 0 0 0 .966-.671 1 1 0 0 0-.28-1.117zm-2.268.764a.494.494 0 0 0-.494.493v4.585a.152.152 0 0 1-.152.151H3.517a.152.152 0 0 1-.152-.151V8.757a.494.494 0 0 0-.494-.493H1.3L7.55 2.82a.7.7 0 0 1 .927 0l3.2 2.792a.241.241 0 0 0 .4-.182V3.712h1.263v2.963a.84.84 0 0 0 .289.634l1.094.954z", role: "presentation" }),
    React.createElement("path", { d: "M6.2 8.67a.274.274 0 0 0-.389 0l-.367.367-.368-.367a.274.274 0 0 0-.389 0 .274.274 0 0 0 0 .389l.367.368-.367.367a.274.274 0 0 0 0 .389.274.274 0 0 0 .389 0l.368-.367.367.367a.274.274 0 0 0 .389 0 .274.274 0 0 0 0-.389l-.367-.367.367-.368a.274.274 0 0 0 0-.389zm5.161 0a.274.274 0 0 0-.389 0l-.368.367-.367-.367a.274.274 0 0 0-.389 0 .274.274 0 0 0 0 .389l.367.368-.367.367a.274.274 0 0 0 0 .389.274.274 0 0 0 .389 0l.363-.363.368.367a.274.274 0 0 0 .389 0 .276.276 0 0 0 0-.389l-.367-.367.367-.368a.276.276 0 0 0 .004-.393zm-1.707 3.321a2.524 2.524 0 0 0-3.266 0 .3.3 0 0 0 0 .458.3.3 0 0 0 .4.008 1.9 1.9 0 0 1 2.464 0 .3.3 0 0 0 .4-.007h.005a.305.305 0 0 0-.003-.459z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HouseholdError;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.HouseholdError = HouseholdError;
  }
})(this)
