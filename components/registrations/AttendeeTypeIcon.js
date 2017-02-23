(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AttendeeTypeIcon = function AttendeeTypeIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-attendee-type" },
  React.createElement(
    "title",
    { id: "title" },
    "attendee-type icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M12.751 9.28a3.227 3.227 0 1 0 3.227 3.227 3.227 3.227 0 0 0-3.227-3.227zm-.007 5.429a.474.474 0 0 1-.455-.44.078.078 0 0 1 0-.022.072.072 0 0 1 0-.023.456.456 0 0 1 .911.023.469.469 0 0 1-.456.462zm.909-2.482c-.2.183-.922.523-.568.865a.075.075 0 0 1-.032.124l-.486.164a.074.074 0 0 1-.072-.019.775.775 0 0 1-.212-.5.071.071 0 0 1 0-.019.079.079 0 0 1 0-.02c.028-.444.375-.613.683-.871.205-.171.306-.519-.057-.6a.876.876 0 0 0-.9.337.074.074 0 0 1-.1 0l-.371-.41a.075.075 0 0 1 0-.1 1.614 1.614 0 0 1 1.4-.556 1.1 1.1 0 0 1 .962.589.925.925 0 0 1-.246 1.015z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M11.155 4.851s.156-.846.218-1.5C11.448 2.544 10.9.449 8 .449s-3.449 2.1-3.372 2.906c.061.651.218 1.5.218 1.5s-.308.142-.308.713c.108 1.434.672.816.788 1.444.281 1.514.919 1.244.919 2.071 0 1.377-.668 2.02-2.761 2.783S.022 13.407.022 13.939v1.513A.548.548 0 0 0 .57 16h9.474a4.794 4.794 0 0 1-1.52-3.493 4.212 4.212 0 0 1 1.259-3 3.326 3.326 0 0 1-.029-.424c0-.827.639-.557.919-2.071.116-.628.681-.01.789-1.444.001-.575-.307-.717-.307-.717zM15.458 16h.52v-.521a4.237 4.237 0 0 1-.52.521z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AttendeeTypeIcon
  } else {
    global.AttendeeTypeIcon = AttendeeTypeIcon
  }
})(this)