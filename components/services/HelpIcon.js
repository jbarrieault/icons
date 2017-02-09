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

  var HelpIcon = function HelpIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-help" },
      React.createElement(
        "title",
        { id: "title" },
        "help icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8 .012a7.772 7.772 0 0 1 3.108.624 8.157 8.157 0 0 1 2.541 1.711A7.918 7.918 0 0 1 15.977 8a7.871 7.871 0 0 1-.62 3.112 7.953 7.953 0 0 1-1.709 2.541 8.151 8.151 0 0 1-2.541 1.709A7.772 7.772 0 0 1 8 15.988a7.808 7.808 0 0 1-3.114-.624 7.977 7.977 0 0 1-4.248-4.25A7.771 7.771 0 0 1 .009 8a7.791 7.791 0 0 1 .626-3.115A8 8 0 0 1 4.884.636 7.808 7.808 0 0 1 8 .012zM9.838 8.66a5.107 5.107 0 0 0 .5-.459 4.947 4.947 0 0 0 .459-.571 2.724 2.724 0 0 0 .345-.694 2.808 2.808 0 0 0 .131-.906 2.6 2.6 0 0 0-.275-1.211 2.548 2.548 0 0 0-.734-.873 3.478 3.478 0 0 0-1.036-.53 3.749 3.749 0 0 0-1.144-.186 3.634 3.634 0 0 0-1.14.17 5.205 5.205 0 0 0-.855.355 2.683 2.683 0 0 0-.53.355c-.12.11-.188.171-.2.185a.3.3 0 0 0-.03.39l.95 1.15a.276.276 0 0 0 .2.118.468.468 0 0 0 .23-.059l.1-.08a1.835 1.835 0 0 1 .273-.175 2.369 2.369 0 0 1 .392-.165 1.48 1.48 0 0 1 .465-.074 1.091 1.091 0 0 1 .693.224.706.706 0 0 1 .286.575.934.934 0 0 1-.245.645 7.579 7.579 0 0 1-.616.606q-.229.18-.465.4a3.138 3.138 0 0 0-.428.516A2.748 2.748 0 0 0 6.848 9a2.432 2.432 0 0 0-.12.8v.641a.31.31 0 0 0 .3.3h1.64a.267.267 0 0 0 .206-.09.289.289 0 0 0 .086-.208V9.93a.935.935 0 0 1 .255-.665q.253-.275.623-.605zm-.879 2.94a.3.3 0 0 0-.082-.208.263.263 0 0 0-.21-.092h-1.64a.314.314 0 0 0-.3.3v1.56a.3.3 0 0 0 .092.214.271.271 0 0 0 .208.1h1.64a.261.261 0 0 0 .206-.1.307.307 0 0 0 .086-.214z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = HelpIcon;
  } else {
    global.HelpIcon = HelpIcon;
  }
})(undefined);