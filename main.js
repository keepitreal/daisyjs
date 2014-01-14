requirejs.config({
	baseUrl: 'src'
});

require(["HTMLDiffer"], function(HTMLDiffer) {
	var diff = new HTMLDiffer();

	diff.htmlDiff("darion", "noirad");
});