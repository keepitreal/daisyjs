import DomNode from '../DomNode/DomNode';
import Modification from '../Modification/Modification';

export default class TextNode extends DomNode {
    public text;
    public modification;

    constructor(parent, text) {
        super(parent);

        this.modification = new Modification(Modification.NONE);
        this.text = text;
    }

    public copyTree() {
        // need to see what php's clone does
    }
}
