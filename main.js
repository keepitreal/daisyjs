requirejs.config({
	baseUrl: 'src'
});

require(["HTMLDiffer", "Xml"], function(HTMLDiffer, Xml) {
	var xml = Xml.element("name", {"type":"last", "length": "unlimited"}, "Smith");
	console.log(xml);
});