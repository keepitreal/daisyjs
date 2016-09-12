import Xml from '../src/scripts/Xml/Xml';

describe("The XML class", function () {
    // Xml.element
    describe("contains a method called element that", function () {
        it("will return a basic XML element when only one argument is passed.", function () {
            expect(Xml.element("name")).toEqual("<name></name>");
        });

        it("will return an XML element with an attribute when two arguments are passed", function () {
            expect(Xml.element("name", { "type": "surname" })).toEqual('<name type="surname"></name>');
        });

        it("will return an XML element with an attribute and a value when three arguments are passed", function () {
            expect(Xml.element("name", { "type": "surname" }, "Smith")).toEqual('<name type="surname">Smith</name>');
        });

        it("will return an XML element with an short attribute and value when three arguments are passed and  allowShortTag param is false", function () {
            expect(Xml.element("name", { "type": "surname" }, "Smith", false)).toEqual('<name type="surname">Smith</name>');
        });
    });

    // Xml.expandAttributes
    describe("contains a method called expandAttributes that", function () {
        it("accepts an object containing key => value pairs and outputs a string of xml attributes", function () {
            expect(Xml.expandAttributes({ "type": "surname", "length": "unlimited" })).toEqual(' type="surname" length="unlimited"');
        });

        it("accepts an object containing a single key => value pair and outputs a string of xml attributes", function () {
            expect(Xml.expandAttributes({ "type": "surname" })).toEqual(' type="surname"');
        });
    });

    // Xml.openElement
    describe("contains a method called openElement that", function () {
        it("returns an opening xml element tag with no attributes when one argument is passed", function () {
            expect(Xml.openElement("name")).toEqual("<name>");
        });

        it("returns an opening xml element tag with attributes when the element and object of attributes is passed", function () {
            expect(Xml.openElement("name", { "type": "surname" })).toEqual('<name type="surname">');
        });
    });

    // Xml.closeElement
    describe("contains a method called closeElement that", function () {
        it("returns an xml closing element tag", function () {
            expect(Xml.closeElement("name")).toEqual("</name>");
        });
    });
});
