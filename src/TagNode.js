define(["Node"], function(Node) {
	
	function TagNode(parent, qName, attributes){
		var toDiffAttributes = {};

		// set the constructor value declared by Node 
		Node.call(this, parent);

		this.qName = qName.toLowerCase();
		this.attributes = {};

		// in the php version uncomparableAttributes is an associative array. Will need to use object instead
		// be mindful of when this class is instantiated, that we are passing in objects and not arrays
		TagNode.uncomparableAttributes = {'style': ''};

		for (var k in attributes) {
			if (attributes.hasOwnProperty(k)) {
				// console.log("key is " + k + " and value is " + attributes[k]);
				if (!TagNode.uncomparableAttributes.hasOwnProperty(k.toLowerCase())) {
					toDiffAttributes[k.toLowerCase()] = attributes[k];
				}
				this.attributes[k.toLowerCase()] = attributes[k];
			}
		}

		this.openingTag = Xml.openElement(this.qName, this.attributes);
		this.toDiffTag = Xml.openElement(this.qName, toDiffAttributes);
		// end of constructor. pause here to define Xml.openElement
		// exiting stack here for 1/14/14
	};

	TagNode.prototype = new Node();

	return TagNode;
});