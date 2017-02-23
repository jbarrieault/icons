(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EnvelopeOpenOutlineIcon = function EnvelopeOpenOutlineIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-envelope-open-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "envelope-open-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.955 7.511v-.017a.5.5 0 0 0-.029-.173 1 1 0 0 0-.166-.4l-.014-.021a1 1 0 0 0-.178-.179L9.072.445a1.531 1.531 0 0 0-2.114 0L.463 6.676a1.345 1.345 0 0 0-.45.831v7.465a1 1 0 0 0 1 1h13.946a1 1 0 0 0 1-1V7.523s-.004-.008-.004-.012zm-11.74 3.82l-3.2 2.951V8.5zm1.086.353c.011-.011.026-.015.037-.027l.008-.015 2.2-2.03a.611.611 0 0 1 .387-.139.645.645 0 0 1 .387.127l5.972 5.372H1.732zm6.505-.288l3.152-2.8v5.633zM1.63 6.918l6.033-5.769a.5.5 0 0 1 .705 0l5.626 5.361h-.015l.854.869-3.772 3.348-2.105-1.894a1.639 1.639 0 0 0-2.05.021l-1.954 1.8-3.765-3.322.42-.414z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EnvelopeOpenOutlineIcon
  } else {
    global.EnvelopeOpenOutlineIcon = EnvelopeOpenOutlineIcon
  }
})(this)