/// <reference path="../../references.d.ts" />
var Utils = (function () {
    function Utils() {
    }
    Utils.htmlSpecialChars = function (text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    };
    return Utils;
})();
module.exports = Utils;
