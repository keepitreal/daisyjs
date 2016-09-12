import IDomNode from '../DomNode/DomNode';
import TagNode from '../TagNode/TagNode';

export default class BodyNode extends TagNode {
    constructor() {
        super(null, 'body', {});
    }
}

export interface IBodyNode extends IDomNode {

}
