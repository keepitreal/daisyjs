/// <reference path="../../references.d.ts" />
var DomTreeBuilder = require('../DomTreeBuilder/DomTreeBuilder');
var HTMLDiffer = (function () {
    function HTMLDiffer() {
    }
    HTMLDiffer.prototype.htmlDiff = function (from, to) {
        var domfrom;
        // need some way to parse xml
        domfrom = new DomTreeBuilder();
        // left off here to define DomTreeBuilder
        alert(domfrom.greeting);
    };
    return HTMLDiffer;
})();
module.exports = HTMLDiffer;
