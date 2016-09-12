import TagNode from '../src/scripts/TagNode/TagNode';

describe("The TagNode class", function () {
    describe("when instantiated", function () {
        it("should create parent, qName, attributes and openingTag properties", () => {
            var tagNode = new TagNode('div', 'h1', { 'style': 'color: green;' });
            expect(tagNode.parent).toEqual('div');
            expect(tagNode.qName).toEqual('h1');
            expect(tagNode.attributes).toEqual({ 'style': 'color: green;' });
            expect(tagNode.openingTag).toEqual('<h1 style="color: green;">');
        });
    });
});
