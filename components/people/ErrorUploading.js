(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ErrorUploading = function ErrorUploading() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-error-uploading" },
  React.createElement(
    "title",
    { id: "title" },
    "error-uploading icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M6.913 10.285a.683.683 0 0 1-.483-1.166l2.634-2.634a.683.683 0 0 1 .966.966L7.4 10.085a.681.681 0 0 1-.487.2z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.547 10.285a.681.681 0 0 1-.483-.2L6.43 7.451a.683.683 0 0 1 .97-.966l2.63 2.634a.683.683 0 0 1-.483 1.166zm4.379-5.024h-3.408A1 1 0 0 1 9.46 4.252V.846A.836.836 0 0 1 10.3 0a.822.822 0 0 1 .591.248l3.637 3.636a.791.791 0 0 1 .183.89.813.813 0 0 1-.785.487zm-3.1-1.366h1.839l-1.839-1.8z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M13.741 15.993H2.564A1.067 1.067 0 0 1 1.5 14.926V1.059A1.067 1.067 0 0 1 2.564-.008h7.716v1.366H2.864v13.269H13.4V4.48h1.366v10.446a1.034 1.034 0 0 1-1.025 1.067z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ErrorUploading;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.ErrorUploading = ErrorUploading;
  }
})(this)