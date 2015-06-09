/// <reference path="../../references.d.ts" />

import Utils = require('../Utils/Utils');

class Xml {
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
	public static element(element, attribs, contents, allowShortTag): string {
		attribs = typeof attribs !== "undefined" ? attribs : null;
		contents = typeof contents !== "undefined" ? contents : '';
		allowShortTag = typeof allowShortTag !== "undefined" ? allowShortTag : true;
		
		var out = '<' + element;
	
		if (attribs !== null) {
			out += this.expandAttributes(attribs);
		}
	
		if (contents === null) {
			out += '>';
		} else {
			if (allowShortTag && contents === '') {
				// This line is different from the php version. 
				// No idea how the php version was producing the result it did.
				out += '></'+ element +'>';
			} else {
				out += '>' + Utils.htmlSpecialChars(contents) + "</" + element + ">";
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
	public static expandAttributes = function(attribs) {
		var out = '';
		if (attribs === null) {
			return '';
		} else if (attribs instanceof Object) {
			/// XXX: add has own property
			for (var key in attribs) {
				out += " " + key + "=\"" + attribs[key] + '"' ;
			}
			return out;
		} else {
			throw "Error: expected object containing XML attributes";
		}
	}
	
	public static elementClean = function(element, attribs, contents) {}
	
	/**
	 * This opens an XML element
	 *
	 * @param $element name of the element
	 * @param $attribs array of attributes, see Xml::expandAttributes()
	 * @return string
	 */
	public static openElement = function(element, attribs) {
		attribs = typeof attribs !== "undefined" ? attribs : null;
		return '<' + element + this.expandAttributes(attribs) + '>';
	}
	
	/**
	 * Shortcut to close an XML element
	 *
	 * @param $element element name
	 * @return string
	 */
	public static closeElement = function(element){ 
		return "</" + element + ">" 
	}
}

export = Xml;
