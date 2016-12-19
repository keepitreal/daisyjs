import Xml from './Xml/Xml';
import ChangeText from './ChangeText/ChangeText';
import HtmlDiffer from './HtmlDiffer/HtmlDiffer';
import DelegatingContentHandler from './DelegatingContentHandler/DelegatingContentHandler';

export const htmlDiff = (a, b) => {
    let out = new ChangeText();
    let htmlDiffer = new HtmlDiffer(new DelegatingContentHandler(out));

    htmlDiffer.htmlDiff(a, b);
};
