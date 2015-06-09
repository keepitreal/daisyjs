/// <reference path="../../references.d.ts" />

var DomTreeBuilder = require('../DomTreeBuilder/DomTreeBuilder');

class HTMLDiffer {
	debug: any;
	output: any;

	htmlDiff(from: string, to: string) {
		var domfrom;
		// need some way to parse xml
	
		domfrom = new DomTreeBuilder();
		// left off here to define DomTreeBuilder
		alert(domfrom.greeting);
	}
}

export = HTMLDiffer;
