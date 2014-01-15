requirejs.config({
	baseUrl: 'src'
});

require(["HTMLDiffer", "TagNode"], function(HTMLDiffer, TagNode) {
	var tagNode = new TagNode("chris", "Bill", {"fruit":"apply","color":"orangey","flavor":"grapey", "style":"modern"});

	console.log(tagNode.parent);
});