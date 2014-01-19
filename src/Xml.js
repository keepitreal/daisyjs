define(["Helpers"], function(Helpers) {
	function Xml() {}
	
	/**
	 * Format an XML element with given attributes and, optionally, text content.
     * Element and attribute names are assumed to be ready for literal inclusion.
     * Strings are assumed to not contain XML-illegal characters; special
     * characters (<, >, &) are escaped but illegals are not touched.
     *
     * @param element String: element name
     * @param attribs Object: Name=>value pairs. Values will be escaped.
     * @param contents String: NULL to make an open tag only; '' for a contentless closed tag (default)
     * @param allowShortTag Bool: whether '' in $contents will result in a contentless closed tag
     * @return string
	 */

	// I just realized that I defined this function out of my recursive order. Oh well!
	Xml.element = function(element, attribs, contents, allowShortTag) {
		attribs = typeof attribs !== "undefined" ? attribs : null;
		contents = typeof contents !== "undefined" ? contents : '';
		allowShortTag = typeof allowShortTag !== "undefined" ? allowShortTag : true;

		var out = '<' + element;

		if (attribs !== null) {
			out += Xml.expandAttributes(attribs);
		}

		if (contents === null) {
			out += '>';
		} else {
			if (allowShortTag && contents === '') {
				out += ' />';
			} else {
				out += '>' + Helpers.htmlSpecialChars(contents) + "</" + element + ">";
			}
		}
		return out;
	}

	/**
     * Given an array of ('attributename' => 'value'), it generates the code
     * to set the XML attributes : attributename="value".
     * The values are passed to Sanitizer::encodeAttribute.
     * Return null if no attributes given.
     * @param attribs Object of attributes for an XML element
     */
	
	// This one is out of order too. Oh well!!! I think I need it for the one I actually needed to define.
	Xml.expandAttributes = function(attribs) {
		var out = '';
		if (attribs === null) {
			return null;
		} else if (attribs instanceof Object) {
			for (var key in attribs) {
				out += " " + key + "=\"" + attribs[key] + '"' ;
			}
			return out;
		} else {
			throw "Error: expected object containing XML attributes";
		}
	}

	return Xml;
});