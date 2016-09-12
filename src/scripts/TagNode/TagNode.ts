import DomNode from '../DomNode/DomNode';
import Utils from '../Utils/Utils';
import Xml from '../Xml/Xml';

export default class TagNode extends DomNode {
    public children = [];
    public qName = null;
    public attributes = {};
    public openingTag = null;
    public static blocks = ['html', 'body', 'p', 'blockquote', 'h1',
        'h2', 'h3', 'h4', 'h5', 'pre', 'div', 'span', 'ul', 'ol', 'li', 
        'table', 'tbody', 'tr', 'td', 'th', 'br'];

    constructor(parent, qName, attributes) {
        super(parent);

        this.qName = qName.toLowerCase();

        for (var key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                this.attributes[key.toLowerCase()] = attributes[key];
            }
        }

        this.openingTag = Xml.openElement(this.qName, this.attributes);
    }

    public addChildAbsolute(node: DomNode, index: number) {
        this.children.splice(index, 0, node);
    }

    public getIndexOf(search: DomNode) {
        var index = this.children.indexOf(search);
        return index > -1 ? index : null;
    }

    public getNbChildren() {
        return this.children.length;
    }

    public getMinimalDeletedSet(id, allDeleted, somethingDeleted) {
        let nodes = [];
        let hasNonDeletedDescendant = false;
        allDeleted = false;
        somethingDeleted = false;

        if (this.children.length === 0) {
            return nodes;
        }

        this.children.forEach((child) => {
            let allDeleted_local = false;
            let somethingDeleted_local = false;
            let childrenChildren = child.getMinimalDeletedSet(id, allDeleted_local, somethingDeleted_local);
            // TODO: need to figure out how to replicate this since we can't pass primitives by reference
        });
    }

    public splitUntil(parent: TagNode, split: DomNode, includeLeft: boolean) {
        let splitOccured = false;

        if (parent !== this) {
            let part1 = new TagNode(null, this.qName, this.attributes);
            let part2 = new TagNode(null, this.qName, this.attributes);

            part1.setParent(this.parent);
            part2.setParent(this.parent);

            let onSplit = false;
            let pastSplit = false;

            this.children.forEach((child) => {
                if (child === split) {
                    onSplit = true;
                }

                if (!pastSplit || (onSplit && includeLeft)) {
                    child.setParent(part1);
                    part1.children = child;
                } else {
                    child.setParent(part2);
                    part2.children = child;
                }

                if (onSplit) {
                    onSplit = false;
                    pastSplit = true;
                }
            });

            // Replace the existing child with $part1 (left) and $part2 (right).
            // Insertions shift existing content right, so insert part2 before
            // inserting part1.

            // TODO: finish getIndexOf before completing
            // let myindexparent = this.parent.getIndexOf(this);
        }
    }

    private removeChild(index: number) {
        this.children.splice(index, 1);
    }

    public copyTree() {
        let newThis = new TagNode(null, this.qName, this.attributes);
        newThis.whiteBefore = this.whiteBefore;
        newThis.whiteAfter = this.whiteAfter;

        this.children.forEach((child) => {
            let newChild = child.copyTree;
            newChild.setParent(newThis);
            newThis.children = newChild;
        });

        return newThis;
    }

    public expandWhiteSpace() {
        let shift = 0;
        let spaceAdded = false;
        let nbOriginalChildren = this.getNbChildren();

        for (let i = 0; i < nbOriginalChildren; ++i) {
            let child = this.children[i + shift];

            if (child instanceof TagNode) {
                if (!child.isPre()) {
                    child.expandWhiteSpace();
                }
            }

            if (!spaceAdded && child.whiteBefore) {
                // TODO: leaving here to write WhiteSpaceNode
                // let ws = new WhiteSpaceNode(null, ' ', child.getLeftMostChild());
            }
        }
    }

    public isPre() {
        return this.qName.toLowerCase() === 'pre';
    }
};
