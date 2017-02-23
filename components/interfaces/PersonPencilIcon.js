(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PersonPencilIcon = function PersonPencilIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-pencil" },
  React.createElement(
    "title",
    { id: "title" },
    "person-pencil icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M9.781 8.866c0-.827.639-.557.919-2.071.116-.628.681-.01.789-1.444 0-.572-.308-.714-.308-.714s.156-.846.218-1.5c.076-.806-.469-2.901-3.373-2.901s-3.449 2.1-3.372 2.906c.061.651.218 1.5.218 1.5s-.308.142-.308.714c.108 1.434.672.816.788 1.444.281 1.514.919 1.244.919 2.071 0 1.377-.668 2.02-2.761 2.783S.048 13.194.048 13.726v1.787h7.191l.509-2.4 2.625-2.624a2.112 2.112 0 0 1-.592-1.623zm5.035 3.776l-2.871 2.871H16v-1.787c0-.299-.437-.676-1.184-1.084zm1.178-2.592s.109-.544-.617-1.27-1.27-.617-1.27-.617l-2.54 2.54-2.9 2.9L8.158 16l2.394-.508 2.9-2.9zm-5.585 5.15l-.816.176a1.988 1.988 0 0 0-.816-.816l.176-.816.236-.236a1.528 1.528 0 0 1 .945.51 1.529 1.529 0 0 1 .511.946z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonPencilIcon
  } else {
    global.PersonPencilIcon = PersonPencilIcon
  }
})(this)