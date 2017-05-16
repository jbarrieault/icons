(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonO = function PersonO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-o" },
  React.createElement(
    "title",
    { id: "title" },
    "person-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.593 9.448L10.05 8.267a4.3 4.3 0 0 0 2.126-3.727A4.237 4.237 0 0 0 8 .256 4.237 4.237 0 0 0 3.818 4.54a4.3 4.3 0 0 0 2.127 3.727L3.4 9.448A2.147 2.147 0 0 0 2.177 11.4v3.521a.816.816 0 0 0 .806.826h10.03a.816.816 0 0 0 .806-.826V11.4a2.147 2.147 0 0 0-1.226-1.952zM8 1.909a2.6 2.6 0 0 1 2.564 2.631 2.568 2.568 0 1 1-5.134 0A2.6 2.6 0 0 1 8 1.909zm4.257 12.279H3.74v-2.622a.488.488 0 0 1 .279-.443L8 9.3l3.979 1.826a.488.488 0 0 1 .279.443z", "data-name": "Layer 30", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.PersonO = PersonO;
  }
})(this)
