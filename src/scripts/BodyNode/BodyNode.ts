import IDomNode from '../DomNode/DomNode';
import TagNode from '../TagNode/TagNode';

export default class BodyNode extends TagNode {
    constructor() {
        super(null, 'body', {});
    }

    public copyTree() {
        let newThis = new BodyNode();

        this.children.forEach((child: TagNode) => {
            let newChild = child.copyTree();

            newChild.setParent(newThis);
            newChild.children.push(newChild);
        });

        return newThis;
    }
}
