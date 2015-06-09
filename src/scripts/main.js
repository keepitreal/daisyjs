requirejs.config({
	//baseUrl: './',
	paths: {
		'js' 	: 'src'
	}
});

require(["js/HTMLDiffer", "js/Xml"], function(HTMLDiffer, Xml) {
	var xml = Xml.openElement("name");
	console.log(xml);
});