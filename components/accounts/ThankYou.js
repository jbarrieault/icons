(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ThankYou = function ThankYou() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-thank-you" },
  React.createElement(
    "title",
    { id: "title" },
    "thank-you icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M3.183 8.013c-.006.016-.01.026 0 .011z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.292 9.376c-.284.326-.69.7-.47.025.078-.239.494-.452.348-.764a.319.319 0 0 0-.517-.1 3.057 3.057 0 0 0-.527.655l-.041-.026.2-.3c.2-.342.921-1.646.4-1.948-.633-.368-.952 1.087-1.006 1.41a6.07 6.07 0 0 0-.142 1.227l-.037.024a.675.675 0 0 1-.114.068.549.549 0 0 0-.076.053.239.239 0 0 1-.072.035c-.15.066-.049-1.933-.524-1.125-.111.194-.189.4-.3.6h-.03c0-.14.1-.35.062-.481-.051-.169-.279-.488-.376-.091a5.014 5.014 0 0 0-.116.735c-.047.062-.1.122-.142.173-.6.653-.2-.516-.261-.717-.088-.3-.03-.151-.278-.263-.48-.215-.98.294-1.072.827v.039c-.034.038-.068.079-.1.112-.778.75-.061-.831-.118-.975-.2-.508-.779.3-.95.528l-.034-.024c.207-.384 1.072-1.735.6-2.141-.3-.254-.573.037-.754.353-.655-.1-2.7-.391-2.7.578 0-.021 0-.063 0 0 0 .011 0 .009 0 0a.227.227 0 0 0 .031.107c.21.346.346-.018.484-.119a1.26 1.26 0 0 1 .8-.3 48.854 48.854 0 0 0-.7 2.419c-.095.365.4.3.478 0 .213-.806.517-1.618.681-2.4.15.009.4.078.743.1l-.019.054a4.78 4.78 0 0 0-.22 2.056c.1.366.193.464.393.064A2.218 2.218 0 0 1 3.417 9l.036.005a.9.9 0 0 0-.128.96c.273.327.641.076.92-.124.145.33.542.413.883.023.179.45.562.25.808 0 .022.162.105.374.3.25a.216.216 0 0 0 .077-.1l.446-.886h.027c-.039.262-.177 1.143.353.979a1.625 1.625 0 0 0 .166-.068 5.1 5.1 0 0 0 .271-.14l.024-.008c.061.185.173.406.355.132l.5-.874c.162-.288.286-.116.085.085-.609.808.277 1.211.855.568.478-.533.119-.682-.103-.426zm-6.5-.449c.014-.129.033-.261.057-.4A5.241 5.241 0 0 1 3 7.757c.022-.051.218-.565.335-.565.142 0-.116.728-.151.822.014-.038.043-.111 0 .011-.126.303-.26.602-.39.902zm2.235.4c-.027.253-.427.75-.427.254 0-.267.217-.806.553-.806zm2.918-.35q.016-.207.041-.422a9.8 9.8 0 0 1 .15-.8c.051-.124.13-.484.321-.484.116 0-.18.711-.194.754-.102.319-.211.636-.317.954zm4.623-1.854c-.209.384-.512.972-.723 1.355-.156-.354-.795-1.6-1.377-1.384-.134.12-.089.744.051.681.033-.015.007-.145.013-.175.123-.478 1.012 1.135 1.059 1.252-.189.333-.6 1.224-1.128.871-.208-.083.081.282.094.292.408.337.772.037 1.054-.367.206-.3 1.109-1.791 1.312-2.253.113-.262-.198-.559-.355-.272zm3.071 2.243c-.059.077-.548.516-.674.378-.2-.2.114-.939.114-1.2 0-.156-.353-.144-.382-.012l-.187.928c-.052.252-.2.338-.349.19-.122-.12.158-.967.18-1.124a.137.137 0 0 0-.168-.091c-.213.009-.278.3-.307.462v.01a1.007 1.007 0 0 0-1.166-.374.971.971 0 0 0-.442 1.128c.341 1.084 1.543.025 1.124-.838l.014-.019a3.015 3.015 0 0 1 .435.358 2.481 2.481 0 0 1-.056.257c-.2.733.366.9.794.355.123.591.784.261 1.077-.032s.254-.473-.007-.376zm-2.787.443c-.441 0-.265-1.007.1-1.018s.223 1.018-.1 1.018z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ThankYou;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.ThankYou = ThankYou;
  }
})(this)