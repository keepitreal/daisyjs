import Xml from '../Xml/Xml';
import Utils from '../Utils/Utils';

// Class implementation complete

export default class DelegatingContentHandler {
    private delegate;

    constructor(delegate) {
        this.delegate = delegate;
    }

    public startElement(qname: string, attribs: {}): void {
        this.delegate.addHtml(Xml.openElement(qname, attribs));
    }

    public endElement(qname: string): void {
        this.delegate.addHtml(Xml.closeElement(qname));
    }

    public characters(chars): void {
        this.delegate.addHtml(Utils.htmlSpecialChars(chars));
    }

    public html(html): void {
        this.delegate.addHtml(html);
    }
}