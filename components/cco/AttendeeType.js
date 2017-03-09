(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AttendeeType = function AttendeeType() {
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
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.75,9.28A3.23,3.23,0,1,0,16,12.51,3.23,3.23,0,0,0,12.75,9.28Zm0,5.43a.47.47,0,0,1-.45-.44.08.08,0,0,1,0,0,.07.07,0,0,1,0,0,.46.46,0,0,1,.91,0A.47.47,0,0,1,12.74,14.71Zm.91-2.48c-.2.18-.92.52-.57.86a.07.07,0,0,1,0,.12l-.49.16a.07.07,0,0,1-.07,0,.77.77,0,0,1-.21-.5.07.07,0,0,1,0,0,.08.08,0,0,1,0,0c0-.44.37-.61.68-.87s.31-.52-.06-.6a.88.88,0,0,0-.9.34.07.07,0,0,1-.1,0l-.37-.41a.08.08,0,0,1,0-.1,1.61,1.61,0,0,1,1.4-.56,1.1,1.1,0,0,1,1,.59A.93.93,0,0,1,13.65,12.23Z", role: "presentation" }),
    React.createElement("path", { d: "M11.15,4.85s.16-.85.22-1.5C11.45,2.54,10.9.45,8,.45S4.55,2.54,4.63,3.35c.06.65.22,1.5.22,1.5s-.31.14-.31.71c.11,1.43.67.82.79,1.44.28,1.51.92,1.24.92,2.07,0,1.38-.67,2-2.76,2.78S0,13.41,0,13.94v1.51A.55.55,0,0,0,.57,16H10a4.79,4.79,0,0,1-1.52-3.49,4.21,4.21,0,0,1,1.26-3,3.33,3.33,0,0,1,0-.42c0-.83.64-.56.92-2.07.12-.63.68,0,.79-1.44C11.46,5,11.15,4.85,11.15,4.85ZM15.46,16H16v-.52A4.24,4.24,0,0,1,15.46,16Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AttendeeType;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AttendeeType = AttendeeType;
  }
})(this)
