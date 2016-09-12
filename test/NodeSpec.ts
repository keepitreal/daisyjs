import DomNode from '../src/scripts/DomNode/DomNode';

describe("The Node class", function() {
	describe("when instantiated", function() {
		it("should instantiate parent, whiteBefore, whiteAfter and parentTree", function() {
			var node = new DomNode("name");
			expect(node.parent).toEqual("name");
			expect(node.whiteBefore).toEqual(false);
			expect(node.whiteAfter).toEqual(false);
		});
	});

	// Node.prototype.getParentTree()
	describe("contains a public method getParentTree() that", function() {
		var node1 = new DomNode();
		var node2 = new DomNode(node1);
		var node3 = new DomNode(node2);

		node3.getParentTree();

		it("sets parentTree to an array with length equal to the number of parents", function() {
			expect(node3.parentTree.length).toEqual(2);
		});
		it("sets the parentTree for parent nodes and has a length equal to number of parents", function() {
			expect(node2.parentTree.length).toEqual(1);
			expect(node1.parentTree.length).toEqual(0);
		});
	});
});
