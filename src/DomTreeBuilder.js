define(["BodyNode"], function(BodyNode) {
	function DomTreeBuilder() {
		// public properties
		this.textNodes = [];
		this.bodyNode = this.currentParent = new BodyNode();
		this.bodyStarted = false;
		this.bodyEnded = false;

		// private properties
		var lastSibling = new DummyNode();
		var notInPre = true, whiteSpaceBeforeThis = true, newWord = '', currentParent;

		// leaving off here to write BodyNode and DummyNode
	}



	return DomTreeBuilder;
});