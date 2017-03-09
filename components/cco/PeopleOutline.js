(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PeopleOutline = function PeopleOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-people-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "people-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.8,9.65a3.6,3.6,0,0,0-2-1.62l.05-.15a2.29,2.29,0,0,0,.46-1.34V6.43a2.25,2.25,0,0,0-.08-.6c0-.11,0-.24,0-.35a3,3,0,0,0-.77-2.2,2.94,2.94,0,0,0-2.24-.93,2.93,2.93,0,0,0-2.16.85,3.37,3.37,0,0,0-.74-1.3A3.41,3.41,0,0,0,5.73.84a3.41,3.41,0,0,0-2.6,1.07,3.49,3.49,0,0,0-.88,2.53c0,.18,0,.37.06.55a2.44,2.44,0,0,0-.12.76v.11a2.49,2.49,0,0,0,.57,1.57,3.34,3.34,0,0,0,.19.51c-.22.11-.56.27-1,.46A2.67,2.67,0,0,0,0,10.77v2.37a2,2,0,0,0,2,2h8a2,2,0,0,0,1.59-.79H14a2,2,0,0,0,2-2.1c0-.12,0-.41,0-.66A3.31,3.31,0,0,0,15.8,9.65ZM1.63,13.14V10.77c0-.56.65-.79,1-.95C3.82,9.33,4.79,8.92,4.79,8c0-.54-.36-.36-.52-1.34-.07-.41-.38,0-.45-.94,0-.37.17-.46.17-.46s-.09-.55-.12-1A1.77,1.77,0,0,1,5.78,2.43,1.77,1.77,0,0,1,7.69,4.31c0,.42-.12,1-.12,1s.17.09.17.46c-.06.93-.38.53-.45.94-.16,1-.52.81-.52,1.34a1.85,1.85,0,0,0,.1.6h0a1.27,1.27,0,0,0,.06.12A1.27,1.27,0,0,0,7,8.92a1.39,1.39,0,0,0,.14.17l.13.14.23.17.11.08h0a5.39,5.39,0,0,0,.71.35c1.19.5,2.19,1,2.19,1.49v1.82a.43.43,0,0,1-.43.43h-8A.43.43,0,0,1,1.63,13.14Zm12.83-.81a.43.43,0,0,1-.43.45H11.61V11.32c0-1-.86-1.57-1.85-2.05.17-.22.79-.55.78-1.13,0-.4-.27-.27-.39-1,0-.3-.29,0-.33-.7,0-.28.13-.35.13-.35s-.07-.41-.09-.73a1.33,1.33,0,0,1,1.43-1.41,1.33,1.33,0,0,1,1.43,1.41c0,.32-.09.73-.09.73s.13.07.13.35c0,.7-.28.4-.33.7-.12.74-.39.6-.39,1,0,.67.28,1,1.17,1.35s1.07.61,1.28,1A17.2,17.2,0,0,1,14.46,12.33Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PeopleOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PeopleOutline = PeopleOutline;
  }
})(this)
