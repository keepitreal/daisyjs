import Xml from './Xml/Xml';
import ChangeText from './ChangeText/ChangeText';
import HtmlDiffer from './HtmlDiffer/HtmlDiffer';

export const htmlDiff = (a, b) => {
    let out = new ChangeText();
    let htmlDiffer = new HtmlDiffer();

    htmlDiffer.htmlDiff(a, b);
};

const xml = Xml.openElement("another");
console.log(xml);


