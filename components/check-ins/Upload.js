(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Upload = function Upload() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-upload", role: "img", className: "symbol symbol-upload" },
  React.createElement(
    "title",
    { id: "title-upload" },
    "upload icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.607 5a3.091 3.091 0 0 0-2.638-1.532h-.12a4.223 4.223 0 0 0-7.37 1.8 4.223 4.223 0 0 0 1.789 8.05h1.985v-1.68H4.268a2.542 2.542 0 0 1-.654-5l.432-.116.019-.448a2.541 2.541 0 0 1 4.758-1.141l.243.431.471-.149a1.268 1.268 0 0 1 .388-.059 1.43 1.43 0 0 1 1.354.976l.119.391.407.038a2.544 2.544 0 0 1-.238 5.077h-1.478v1.681h1.477A4.225 4.225 0 0 0 12.607 5z", role: "presentation" }),
    React.createElement("path", { d: "M6.907 10.079l.357-.347v3.61h1.85v-3.6l.322.332a.919.919 0 1 0 1.291-1.304L8.811 6.852a.946.946 0 0 0-1.31 0L5.584 8.769a.928.928 0 0 0 0 1.309.972.972 0 0 0 1.323.001z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Upload;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Upload = Upload;
  }
})(this)
