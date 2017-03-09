(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FilePdf = function FilePdf() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-pdf" },
  React.createElement(
    "title",
    { id: "title" },
    "file-pdf icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.84,0H2.35a.8.8,0,0,0-.8.8V15.2a.8.8,0,0,0,.8.8h11.3a.8.8,0,0,0,.8-.8v-11Zm2.56,4.16H10A.12.12,0,0,1,9.84,4V1.85Zm.7,10.5H2.9V1.35h5.6V4A1.47,1.47,0,0,0,10,5.51H13.1Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M10.8,10.18a1.07,1.07,0,0,0-1-.46,4,4,0,0,0-.69.06,7.89,7.89,0,0,1-1-1.54c.3-1.31.11-1.73-.06-1.94A.76.76,0,0,0,7.42,6a1,1,0,0,0-.26,0,.79.79,0,0,0-.52.49,2.4,2.4,0,0,0,.27,1.8,16.24,16.24,0,0,1-.84,2.36c-1,.47-1.5.94-1.56,1.47a.93.93,0,0,0,.41.87.71.71,0,0,0,.44.16,1.27,1.27,0,0,0,1-.66,6.8,6.8,0,0,0,.57-1A12.76,12.76,0,0,1,8.71,11a1.78,1.78,0,0,0,1.14.53,1,1,0,0,0,.81-.44A.8.8,0,0,0,10.8,10.18Zm-.74.45a.21.21,0,0,1-.21.11,1,1,0,0,1-.51-.24l.43,0a.68.68,0,0,1,.34.06S10.1,10.6,10.06,10.63ZM5.24,12.3c0-.13.22-.37.75-.67-.39.73-.6.82-.64.84S5.24,12.32,5.24,12.3ZM7.4,7.62a1.24,1.24,0,0,1-.07-.75s0-.06.06-.06h0A1.59,1.59,0,0,1,7.4,7.62Zm.13,1.27a9.72,9.72,0,0,0,.94,1.37,12.09,12.09,0,0,0-1.59.51A17.1,17.1,0,0,0,7.53,8.89Z", style: "fill:#020202", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FilePdf;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FilePdf = FilePdf;
  }
})(this)