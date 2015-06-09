/// <reference path="../../references.d.ts" />
var BodyNode = require('../BodyNode/BodyNode');
var DomTreeBuilder = (function () {
    function DomTreeBuilder() {
        this.bodyNode = this.currentParent = new BodyNode();
        this.bodyStarted = false;
        this.bodyEnded = false;
        this.textNodes = [];
        this.notInPre = true;
        this.newWord = '';
        this.whiteSpaceBeforeThis = true;
    }
    return DomTreeBuilder;
})();
module.exports = DomTreeBuilder;
