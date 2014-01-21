define(["js/Node"], function(Node) {
	describe("The Node class", function() {
		describe("when instantiated", function() {
			it("should instantiate parent, whiteBefore, whiteAfter and parentTree", function() {
				var node = new Node("name");
				expect(node.parent).toEqual("name");
				expect(node.whiteBefore).toEqual(false);
				expect(node.whiteAfter).toEqual(false);
			});
		});
	});
});