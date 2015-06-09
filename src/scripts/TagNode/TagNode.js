/// <reference path="../../references.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DomNode = require('../DomNode/DomNode');
var Xml = require('../Xml/Xml');
var TagNode = (function (_super) {
    __extends(TagNode, _super);
    function TagNode(parent, qName, attributes) {
        _super.call(this, parent);
        this.toDiffAttributes = {};
        this.attributes = {};
        this.qName = qName.toLowerCase();
        for (var k in attributes) {
            if (attributes.hasOwnProperty(k)) {
                // console.log("key is " + k + " and value is " + attributes[k]);
                if (!TagNode.uncomparableAttributes.hasOwnProperty(k.toLowerCase())) {
                    this.toDiffAttributes[k.toLowerCase()] = attributes[k];
                }
                this.attributes[k.toLowerCase()] = attributes[k];
            }
        }
        this.openingTag = Xml.openElement(this.qName, this.attributes);
        this.toDiffTag = Xml.openElement(this.qName, this.toDiffAttributes);
    }
    // in the php version uncomparableAttributes is an associative array. Will need to use object instead
    // be mindful of when this class is instantiated, that we are passing in objects and not arrays
    TagNode.uncomparableAttributes = { 'style': '' };
    return TagNode;
})(DomNode);
;
module.exports = TagNode;
