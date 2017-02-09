"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PicoIcon = function PicoIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pico" },
      React.createElement(
        "title",
        { id: "title" },
        "pico icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M13.551 7.481l-.114-.1a2.262 2.262 0 0 0-1.311-1.571l-.049-.021-.042-.017a9.51 9.51 0 0 0-2.616-.577 1.938 1.938 0 0 0-1.1-.492v-.516a.992.992 0 1 0-.81 0V4.7a1.945 1.945 0 0 0-1.119.511l-.017.02A10.055 10.055 0 0 0 4 5.769l-.057.023-.038.014h-.007a2.3 2.3 0 0 0-1.32 1.551l-.113.094a1.754 1.754 0 0 0-.562 1.352 1.438 1.438 0 0 0 .587 1.253l.066.044a1.419 1.419 0 0 0 1.117 1.5h.021l.032.008a21.082 21.082 0 0 0 4.134.439h.242a19.5 19.5 0 0 0 4.144-.441l.022-.006h.021a1.439 1.439 0 0 0 1.129-1.508l.069-.046a1.451 1.451 0 0 0 .587-1.246 1.777 1.777 0 0 0-.523-1.319zm-.86 2.692c-.01.538-.168.616-.427.683a14.892 14.892 0 0 1-4.149.474h-.248a12.1 12.1 0 0 1-4.07-.44.62.62 0 0 1-.5-.639L3.271 7.92a1.339 1.339 0 0 1 .852-1.273l.118-.038a14.65 14.65 0 0 1 3.816-.428 13.7 13.7 0 0 1 3.707.419l.134.044a1.322 1.322 0 0 1 .841 1.271zm-3.71-.781a.013.013 0 0 0-.013.011 1.029 1.029 0 0 1-1.028.651A1.03 1.03 0 0 1 6.911 9.4s0-.014-.011-.014-.014.014-.014.014a1.062 1.062 0 0 0 1.083.925A1 1 0 0 0 8.993 9.4a.011.011 0 0 0-.012-.008zM7.987 0a7.951 7.951 0 1 0 7.979 7.947A7.977 7.977 0 0 0 7.987 0zm4.876 12.809a6.923 6.923 0 0 1-9.764 0 6.856 6.856 0 0 1 0-9.72 6.924 6.924 0 0 1 9.764 0 6.85 6.85 0 0 1 0 9.72zM5.084 7.423c-.458 0-.831.588-.831 1.313s.371 1.313.829 1.312.831-.588.832-1.312-.371-1.313-.83-1.313zm5.768 0c-.458 0-.83.588-.83 1.314s.371 1.312.829 1.312.831-.589.831-1.314-.372-1.315-.83-1.315z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PicoIcon;
  } else {
    global.PicoIcon = PicoIcon;
  }
})(undefined);