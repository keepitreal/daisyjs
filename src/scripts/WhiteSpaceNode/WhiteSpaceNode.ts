import Utils from '../Utils/Utils';
import TextNode from '../TextNode/TextNode';
import DomNode from '../DomNode/DomNode';

export default class WhiteSpaceNode extends TextNode {
    constructor(parent, s, like: DomNode = null) {
        super(parent, s);

        if (!Utils.isNull(like) && like instanceof TextNode) {
            // figure out clone in PHP
        }
    }
}
