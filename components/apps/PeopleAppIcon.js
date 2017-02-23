(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PeopleAppIcon = function PeopleAppIcon() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-people-app" },
  React.createElement(
    "title",
    { id: "title" },
    "people-app icon"
  ),
  React.createElement("circle", { "class": "cls-1", cx: "19.861", cy: "14.609", r: "2.145" }),
  React.createElement("circle", { "class": "cls-1", cx: "13.289", cy: "13.613", r: "2.86" }),
  React.createElement("path", { "class": "cls-2", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M15.372 17.892h-4.041a2.52 2.52 0 0 0-2.52 2.52v2.021h9.081v-2.021a2.52 2.52 0 0 0-2.52-2.52zm6.137 0h-2.694a1.664 1.664 0 0 0-1.01.346 3.251 3.251 0 0 1 .844 2.174v.507h4.541v-1.347a1.68 1.68 0 0 0-1.681-1.68z", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PeopleAppIcon
  } else {
    global.PeopleAppIcon = PeopleAppIcon
  }
})(this)