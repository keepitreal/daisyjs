define([], function() {
	function Node(parent) {
		this.parent = parent;
		this.whiteBefore = false;
		this.whiteAfter = false;
	}

	Node.prototype.getParentTree = function() {
		if(typeof this.parentTree === "undefined") {
			if (this.parent !== null) {
				this.parentTree = this.parent.getParentTree();
				this.parentTree.push(this.parent);
			} else {
				this.parentTree = [];
			}
		}
		return this.parentTree;
	}

	// exiting the stack here. will define next Node method tomorrow.

	return Node;
});