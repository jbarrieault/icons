(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormDropdown = function FormDropdown() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-dropdown", role: "img", className: "symbol symbol-form-dropdown" },
  React.createElement("path", { d: "M14 .9H2c-.5 0-.9.4-.9.9v12.5c0 .5.4.9.9.9h12c.5 0 .9-.4.9-.9V1.8c-.1-.5-.5-.9-.9-.9zm-.9 12.4H2.9V2.7h10.2v10.6z", role: "presentation" }),
  React.createElement("path", { className: "st0", d: "M11.1 6.5L8.4 10c-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1L4.9 6.5c-.1-.1-.1-.3 0-.4.1-.2.2-.3.4-.3h5.5c.2 0 .3.1.4.3 0 .1 0 .3-.1.4z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormDropdown;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.FormDropdown = FormDropdown;
  }
})(this)
