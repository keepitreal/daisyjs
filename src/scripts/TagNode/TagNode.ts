import DomNode from '../DomNode/DomNode';
import Xml from '../Xml/Xml';

export default class TagNode extends DomNode {
	toDiffAttributes = {};
	attributes = {};
	qName: any;
	openingTag: any;
	toDiffTag: any;

	// in the php version uncomparableAttributes is an associative array. Will need to use object instead
	// be mindful of when this class is instantiated, that we are passing in objects and not arrays
	static uncomparableAttributes = {'style': ''};

	constructor(parent, qName, attributes) {
		super(parent);

		this.qName = qName.toLowerCase();

		for (var k in attributes) {
			if (attributes.hasOwnProperty(k)) {

				// console.log("key is " + k + " and value is " + attributes[k]);
				if (!TagNode.uncomparableAttributes.hasOwnProperty(k.toLowerCase())) {
					this.toDiffAttributes[k.toLowerCase()] = attributes[k];
				}
				this.attributes[k.toLowerCase()] = attributes[k];
			}
		}

		this.openingTag = Xml.openElement(this.qName, this.attributes);
		this.toDiffTag = Xml.openElement(this.qName, this.toDiffAttributes);
	}
};
