(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AccountsLogo = function AccountsLogo() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-accounts-logo", role: "img", className: "symbol symbol-accounts-logo" },
  React.createElement(
    "title",
    { id: "title-accounts-logo" },
    "accounts-logo icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M2.437 8.211a.03.03 0 0 0-.021-.026l-.1-.011a.149.149 0 0 1-.095-.229l.061-.077a.027.027 0 0 0-.006-.026l-.1-.1a.032.032 0 0 0-.033 0l-.076.062a.151.151 0 0 1-.23-.095l-.01-.1v-.022a.034.034 0 0 0-.023-.015h-.156a.03.03 0 0 0-.025.021l-.01.1a.151.151 0 0 1-.23.095l-.076-.061a.03.03 0 0 0-.026 0l-.1.1a.029.029 0 0 0 0 .033l.061.077a.149.149 0 0 1-.1.229l-.1.011h-.017a.031.031 0 0 0-.015.023v.144a.028.028 0 0 0 .021.025h.006l.1.011a.15.15 0 0 1 .1.23l-.073.09a.033.033 0 0 0 .006.027l.1.1a.029.029 0 0 0 .033 0l.076-.061a.15.15 0 0 1 .23.1l.01.1A.031.031 0 0 0 1.648 9h.146a.028.028 0 0 0 .025-.021v-.007l.01-.1a.149.149 0 0 1 .23-.1l.076.061a.03.03 0 0 0 .026-.006l.1-.1a.03.03 0 0 0 0-.033L2.2 8.617a.149.149 0 0 1 .095-.229l.1-.011h.011a.027.027 0 0 0 .015-.022v-.144zm-.716.316a.244.244 0 1 1 .244-.244.244.244 0 0 1-.244.244z", role: "presentation" }),
    React.createElement("path", { d: "M3.006 6.539H.414a.354.354 0 0 0-.345.361v2.587a.357.357 0 0 0 .356.356h2.592a.356.356 0 0 0 .356-.356V6.9a.358.358 0 0 0-.367-.361zm0 2.755a.157.157 0 0 1-.157.157H.59a.157.157 0 0 1-.157-.157V7.059A.157.157 0 0 1 .59 6.9H1v.167a.111.111 0 0 0 .111.111h1.196a.111.111 0 0 0 .111-.111V6.9h.434a.157.157 0 0 1 .157.157z", "fill-rule": "evenodd", role: "presentation" }),
    React.createElement("path", { d: "M5.17 9.466l-.14-.342h-.644l-.139.342h-.342l.653-1.534h.309l.653 1.534zm-.462-1.131l-.2.494h.4zM6.22 9.492a.6.6 0 0 1-.607-.6.6.6 0 0 1 .611-.607.574.574 0 0 1 .466.2l-.2.217a.342.342 0 0 0-.266-.128.3.3 0 0 0-.283.318.3.3 0 0 0 .3.322.372.372 0 0 0 .259-.131l.193.2a.586.586 0 0 1-.473.209zm1.198 0a.6.6 0 0 1-.607-.6.6.6 0 0 1 .612-.607.573.573 0 0 1 .465.2l-.2.217a.341.341 0 0 0-.265-.128.3.3 0 0 0-.283.318.3.3 0 0 0 .3.322.368.368 0 0 0 .26-.131l.194.2a.588.588 0 0 1-.476.209zm1.22 0a.606.606 0 0 1-.628-.6.632.632 0 0 1 1.262 0 .613.613 0 0 1-.634.6zm.307-.607a.31.31 0 0 0-.307-.322.3.3 0 0 0-.3.318.31.31 0 0 0 .307.322.3.3 0 0 0 .3-.318zm1.286.581V9.3a.413.413 0 0 1-.342.188.383.383 0 0 1-.4-.433V8.3h.331v.65c0 .157.074.237.2.237s.207-.08.207-.237V8.3h.331v1.166zm1.369 0v-.651c0-.156-.074-.237-.2-.237s-.207.081-.207.237v.651h-.331V8.3h.331v.165a.412.412 0 0 1 .341-.187.382.382 0 0 1 .4.433v.755zm1 .019c-.2 0-.339-.08-.339-.35v-.552h-.141V8.3h.139V8h.33v.3h.275v.283h-.275v.5c0 .076.033.113.107.113a.337.337 0 0 0 .163-.041v.265a.489.489 0 0 1-.259.065zm.915.003a.815.815 0 0 1-.5-.177l.141-.217a.664.664 0 0 0 .368.139c.1 0 .139-.035.139-.087 0-.072-.113-.1-.241-.135-.163-.048-.348-.124-.348-.35v-.009a.381.381 0 0 1 .426-.37.8.8 0 0 1 .435.135l-.126.229a.681.681 0 0 0-.316-.109c-.08 0-.121.035-.121.08 0 .065.111.1.237.139.163.054.352.133.352.346 0 .268-.193.386-.446.386zM4.046 7.559a.009.009 0 0 1-.01-.01V6.9a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.037a.145.145 0 0 1 .129-.058.164.164 0 0 1 .17.121.561.561 0 0 1 0 .274.164.164 0 0 1-.169.117.147.147 0 0 1-.129-.057v.218a.009.009 0 0 1-.01.01zm.294-.334a.287.287 0 0 0 .01-.091.3.3 0 0 0-.01-.091.1.1 0 0 0-.181 0 .3.3 0 0 0-.01.091.287.287 0 0 0 .01.091.1.1 0 0 0 .181 0zm.366.158c-.1 0-.133-.045-.133-.139V6.7a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.537c0 .033.013.045.042.045h.023a.009.009 0 0 1 .01.01v.08a.009.009 0 0 1-.01.01zm.442-.006a.009.009 0 0 1-.01-.01v-.035A.162.162 0 0 1 5 7.388a.145.145 0 0 1-.163-.148c0-.106.075-.154.195-.154h.1a.005.005 0 0 0 .006-.006v-.023c0-.056-.027-.081-.108-.081a.17.17 0 0 0-.111.033.009.009 0 0 1-.014 0l-.038-.066a.01.01 0 0 1 0-.014.288.288 0 0 1 .173-.049c.148 0 .2.05.2.169v.318a.009.009 0 0 1-.01.01zm-.012-.163v-.037a.005.005 0 0 0-.006-.006h-.081c-.073 0-.105.02-.105.065s.029.061.084.061.108-.028.108-.083zm.547.163a.009.009 0 0 1-.01-.01v-.28c0-.063-.031-.106-.092-.106a.094.094 0 0 0-.093.106v.28a.009.009 0 0 1-.01.01h-.092a.01.01 0 0 1-.011-.01V6.9a.01.01 0 0 1 .011-.01h.092a.009.009 0 0 1 .01.01v.035a.153.153 0 0 1 .129-.056.166.166 0 0 1 .168.181v.306a.009.009 0 0 1-.01.01zm.542 0a.009.009 0 0 1-.01-.01v-.28c0-.063-.031-.106-.092-.106s-.092.043-.092.106v.28a.01.01 0 0 1-.011.01h-.092a.009.009 0 0 1-.01-.01V6.9a.009.009 0 0 1 .01-.01h.092a.01.01 0 0 1 .011.01v.035a.15.15 0 0 1 .129-.055.166.166 0 0 1 .168.181v.306a.009.009 0 0 1-.01.01zM6.47 6.8a.009.009 0 0 1-.01-.01V6.7a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.088a.009.009 0 0 1-.01.01zm0 .578a.009.009 0 0 1-.01-.01V6.9a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.466a.009.009 0 0 1-.01.01zm.547-.001a.009.009 0 0 1-.01-.01v-.28c0-.063-.031-.106-.092-.106s-.092.043-.092.106v.28a.01.01 0 0 1-.011.01H6.72a.009.009 0 0 1-.01-.01V6.9a.009.009 0 0 1 .01-.01h.092a.01.01 0 0 1 .011.01v.035a.15.15 0 0 1 .128-.056.166.166 0 0 1 .168.181v.306a.009.009 0 0 1-.01.01zm.225.123a.009.009 0 0 1 0-.014l.058-.062a.009.009 0 0 1 .015 0 .152.152 0 0 0 .106.045c.075 0 .109-.04.109-.116v-.045a.14.14 0 0 1-.126.056.161.161 0 0 1-.165-.118A.457.457 0 0 1 7.24 7a.161.161 0 0 1 .165-.119.136.136 0 0 1 .126.058V6.9a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.446a.2.2 0 0 1-.227.223.238.238 0 0 1-.175-.069zm.279-.3a.231.231 0 0 0 .011-.08.242.242 0 0 0-.011-.08.091.091 0 0 0-.172 0 .217.217 0 0 0-.012.08.207.207 0 0 0 .012.08.091.091 0 0 0 .172 0zm.391.054a.381.381 0 0 1-.015-.12.386.386 0 0 1 .015-.12.2.2 0 0 1 .2-.134.21.21 0 0 1 .168.076.01.01 0 0 1 0 .014l-.063.055a.01.01 0 0 1-.015 0 .109.109 0 0 0-.089-.042.089.089 0 0 0-.091.063.415.415 0 0 0 0 .181.09.09 0 0 0 .091.063.11.11 0 0 0 .087-.045h.015l.065.055c.005 0 0 .009 0 .014a.214.214 0 0 1-.168.074.2.2 0 0 1-.2-.134zm.45-.001a.376.376 0 0 1-.017-.119.391.391 0 0 1 .016-.12.216.216 0 0 1 .4 0 .439.439 0 0 1 .016.146.01.01 0 0 1-.011.011h-.3a.005.005 0 0 0-.006.006.106.106 0 0 0 .007.037.108.108 0 0 0 .109.074.146.146 0 0 0 .114-.047.011.011 0 0 1 .016 0l.059.053a.009.009 0 0 1 0 .014.257.257 0 0 1-.2.082.2.2 0 0 1-.203-.137zm.294-.215a.094.094 0 0 0-.1-.062.1.1 0 0 0-.1.062.133.133 0 0 0-.006.042.005.005 0 0 0 .006.006h.191a.005.005 0 0 0 .006-.006.133.133 0 0 0 .003-.042zm.538.339a.009.009 0 0 1-.01-.01v-.28c0-.063-.031-.106-.092-.106A.094.094 0 0 0 9 7.087v.28a.009.009 0 0 1-.01.01H8.9a.01.01 0 0 1-.011-.01V6.9a.01.01 0 0 1 .011-.01h.092A.009.009 0 0 1 9 6.9v.035a.153.153 0 0 1 .129-.056.166.166 0 0 1 .168.181v.306a.009.009 0 0 1-.01.01zm.377.006c-.1 0-.135-.047-.135-.142v-.256a.005.005 0 0 0-.006-.006H9.4a.009.009 0 0 1-.01-.01V6.9a.009.009 0 0 1 .01-.01h.03a.005.005 0 0 0 .006-.006v-.132a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.133a.005.005 0 0 0 .006.006h.064a.009.009 0 0 1 .01.01v.068a.009.009 0 0 1-.01.01h-.064a.005.005 0 0 0-.006.006v.252c0 .034.014.046.045.046h.025a.009.009 0 0 1 .01.01v.08a.009.009 0 0 1-.01.01zm.162-.13a.376.376 0 0 1-.017-.119.391.391 0 0 1 .016-.12.215.215 0 0 1 .4 0 .407.407 0 0 1 .017.146c0 .007 0 .011-.012.011h-.3a.005.005 0 0 0-.006.006.113.113 0 0 0 .116.111.148.148 0 0 0 .114-.047.01.01 0 0 1 .015 0l.059.053c.006 0 .006.009 0 .014a.256.256 0 0 1-.2.082.2.2 0 0 1-.202-.137zm.294-.215a.1.1 0 0 0-.095-.062.094.094 0 0 0-.1.062.133.133 0 0 0-.006.042.005.005 0 0 0 .006.006h.191a.005.005 0 0 0 .006-.006.133.133 0 0 0-.002-.042zm.24.339a.009.009 0 0 1-.01-.01V6.9a.009.009 0 0 1 .01-.01h.093a.009.009 0 0 1 .01.01v.042a.137.137 0 0 1 .13-.062.148.148 0 0 1 .1.04s.006.009 0 .014L10.547 7a.009.009 0 0 1-.014 0 .13.13 0 0 0-.071-.023c-.064 0-.092.045-.092.123v.263a.009.009 0 0 1-.01.01z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AccountsLogo;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.AccountsLogo = AccountsLogo;
  }
})(this)
