(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Stamp = function Stamp() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-stamp", role: "img", className: "symbol symbol-stamp" },
  React.createElement(
    "title",
    { id: "title-stamp" },
    "stamp icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.348 3.308h.092a.436.436 0 0 0 .435-.436V1.5a.434.434 0 0 0-.608-.4.519.519 0 0 1-.709-.54.435.435 0 0 0-.435-.435h-1.015a.5.5 0 0 0-.435.507.51.51 0 0 1-.508.509.53.53 0 0 1-.508-.581.435.435 0 0 0-.435-.435h-1.015a.5.5 0 0 0-.435.507.51.51 0 0 1-.508.509.53.53 0 0 1-.509-.581.435.435 0 0 0-.435-.435H7.306a.5.5 0 0 0-.435.507.51.51 0 0 1-.509.509.529.529 0 0 1-.507-.581.436.436 0 0 0-.436-.435H4.4a.5.5 0 0 0-.435.507.509.509 0 0 1-.508.509.53.53 0 0 1-.504-.581.435.435 0 0 0-.435-.435H1.5a.5.5 0 0 0-.436.507.51.51 0 0 1-.508.509.435.435 0 0 0-.435.435V2.93a.436.436 0 0 0 .3.415.489.489 0 0 1 0 .943.434.434 0 0 0-.3.414v1.129a.434.434 0 0 0 .3.414.5.5 0 0 1 .358.472.5.5 0 0 1-.358.472.434.434 0 0 0-.3.414v1.129a.434.434 0 0 0 .3.414.49.49 0 0 1 0 .944.435.435 0 0 0-.3.415v1.128a.435.435 0 0 0 .3.415.49.49 0 0 1 0 .944.434.434 0 0 0-.3.414v1.354a.435.435 0 0 0 .439.44.5.5 0 0 1 .473.369.436.436 0 0 0 .417.311h1.121a.434.434 0 0 0 .417-.312.5.5 0 0 1 .946 0 .435.435 0 0 0 .417.312h1.121a.436.436 0 0 0 .418-.312.5.5 0 0 1 .945 0 .437.437 0 0 0 .418.311h1.12a.437.437 0 0 0 .418-.311.5.5 0 0 1 .946 0 .435.435 0 0 0 .417.311h1.121a.436.436 0 0 0 .417-.312.5.5 0 0 1 .946 0 .434.434 0 0 0 .417.312h1.121a.435.435 0 0 0 .417-.312.5.5 0 0 1 .674-.325.435.435 0 0 0 .608-.4v-1.379a.435.435 0 0 0-.435-.435h-.092a.509.509 0 0 1 0-1.017h.092a.435.435 0 0 0 .435-.435v-1.014a.436.436 0 0 0-.435-.436h-.092a.508.508 0 0 1 0-1.016h.092a.435.435 0 0 0 .435-.435V7.66a.435.435 0 0 0-.435-.435h-.092a.508.508 0 0 1 0-1.016h.092a.435.435 0 0 0 .435-.435V4.759a.435.435 0 0 0-.435-.435h-.092a.508.508 0 0 1 0-1.016zm-.343 1.843v.231a1.378 1.378 0 0 0 0 2.67v.231a1.378 1.378 0 0 0 0 2.67v.231a1.379 1.379 0 0 0 0 2.671v.471a1.353 1.353 0 0 0-1.113.679h-.554a1.353 1.353 0 0 0-2.347 0h-.554a1.353 1.353 0 0 0-2.347 0h-.554a1.353 1.353 0 0 0-2.347 0h-.554a1.353 1.353 0 0 0-2.347 0h-.554A1.363 1.363 0 0 0 1 14.4v-.713a1.355 1.355 0 0 0 0-2.327v-.574a1.355 1.355 0 0 0 0-2.331V7.88a1.354 1.354 0 0 0 0-2.326v-.575a1.355 1.355 0 0 0 0-2.327V1.94A1.385 1.385 0 0 0 1.879 1h.252a1.382 1.382 0 0 0 1.33 1.016A1.37 1.37 0 0 0 4.78 1h.253a1.38 1.38 0 0 0 1.329 1.011A1.369 1.369 0 0 0 7.681 1h.252a1.382 1.382 0 0 0 1.331 1.011A1.369 1.369 0 0 0 10.582 1h.253a1.381 1.381 0 0 0 1.33 1.016A1.369 1.369 0 0 0 13.483 1h.253a1.382 1.382 0 0 0 1.269 1.01v.471a1.378 1.378 0 0 0 0 2.67z", role: "presentation" }),
    React.createElement("path", { d: "M12.591 3.144H3.153a.326.326 0 0 0-.326.326v9.438a.327.327 0 0 0 .326.327h9.438a.327.327 0 0 0 .326-.327V3.47a.326.326 0 0 0-.326-.326zm-.327.653v1.482l-.688-.941a.307.307 0 0 0-.279-.133.327.327 0 0 0-.265.159L7.555 10.2l-1.72-2.3a.33.33 0 0 0-.25-.131.344.344 0 0 0-.259.114l-1.847 2.15V3.8zm-8.785 8.785v-1.56c.01-.009.022-.012.03-.022l2.047-2.38 1.769 2.362a.318.318 0 0 0 .278.131.33.33 0 0 0 .264-.159l3.474-5.832.823 1.125a.325.325 0 0 0 .1.089v6.246z", role: "presentation" }),
    React.createElement("path", { d: "M5.329 6.857a1.4 1.4 0 1 0-1.4-1.4 1.4 1.4 0 0 0 1.4 1.4zm0-2.149a.748.748 0 1 1-.748.748.749.749 0 0 1 .748-.748z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Stamp;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Stamp = Stamp;
  }
})(this)
