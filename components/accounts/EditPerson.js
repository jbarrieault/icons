(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EditPerson = function EditPerson() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-edit-person", role: "img", className: "symbol symbol-edit-person" },
  React.createElement(
    "title",
    { id: "title-edit-person" },
    "edit-person icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("circle", { cx: "7.109", cy: "3.394", r: "3.379" }),
    React.createElement("path", { d: "M9.237 12.962l3.445-2.38 1.235 1.786-3.446 2.381zm-.174 2.761l-1.673.258A.38.38 0 0 1 7 15.42l.828-1.484.851-.588 1.234 1.787zm5.431-3.754l-1.235-1.787 1.291-.892a.5.5 0 0 1 .695.127l.666.965a.5.5 0 0 1-.127.7zm-2.621-2.442a.238.238 0 0 0 .072-.314C11.315 8.187 10.14 8 8.794 8H5.423A3.424 3.424 0 0 0 2 11.423v.348a.23.23 0 0 0 .229.229h5.93a.229.229 0 0 0 .129-.04z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EditPerson;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.EditPerson = EditPerson;
  }
})(this)
