define(["DomTreeBuilder"], function(DomTreeBuilder) {
	function HTMLDiffer() {
		var debug, output;
	}

	HTMLDiffer.prototype.htmlDiff = function(from, to) {
		var domfrom;
		// need some way to parse xml

		domfrom = new DomTreeBuilder();
		// left off here to define DomTreeBuilder
		alert(domfrom.greeting);
	}

	return HTMLDiffer;
});