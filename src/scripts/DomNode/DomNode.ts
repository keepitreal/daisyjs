/// <reference path="../../references.d.ts" />

import LastCommonParentResult = require('../LastCommonParentResult/LastCommonParentResult');

// Class implementation complete
	
/**
 * Any element in the DOM tree of an HTML document.
 * @ingroup DifferenceEngine
 */
class DomNode implements daisydiff.IDomNode {
	public parent: daisydiff.IDomNode;
	protected parentTree: any = undefined;
	public whiteBefore = false;
	public whiteAfter = false;
	
	constructor(parent) {
		this.parent = typeof parent !== 'undefined' ? parent : null;	
	}
	
	getParentTree() {
		if(typeof this.parentTree === "undefined") {
			if (this.parent !== null) {
				this.parentTree = this.parent.getParentTree();
				this.parentTree.push(this.parent);
			} else {
				this.parentTree = [];
			}
		}
		return this.parentTree.slice();	
	}
	
	getLastCommonParent(other) {
		var result, myParents, otherParents, i, isSame, nbMyParents, nbOtherParents;
	
		result = new LastCommonParentResult();
		myParents = this.getParentTree();
		otherParents = other.getParentTree();
	
		i = 1;
		isSame = true;
		nbMyParents = myParents.length;
		nbOtherParents = otherParents.length;
		
		while (isSame && i < nbMyParents && i < nbOtherParents) {
			if (myParents[i].toDiffTag !== otherParents[i].toDiffTag || 
				myParents[i-1].getIndexOf(myParents[i]) !== otherParents[i-1].getIndexOf(otherParents[i])) {
				isSame = false;
			} else {
				// After a while, the index i-1 must be the last common parent
				i++;
			}
		}
	
		result.lastCommonParentDepth = i -1;
		result.parent = myParents[i-1];
	
		if (!isSame || (nbMyParents > nbOtherParents)) {
			// Not all tags matched, or all tags matched, but
			// there are tags left in this tree
			result.indexInLastCommonParent = myParents[i-1].getIndexOf(myParents[i]);
			result.splittingNeeded = true;
		} else if (nbMyParents <= nbOtherParents) {
			result.indexInLastCommonParent = myParents[i-1].getIndexOf(this);
		}
	
		return result;
	}
	
	setParent(parent) {
		this.parent = parent;
		delete this.parentTree;
	}
	
	inPre() {
		var tree = this.getParentTree();
		for (var i = 0; i < tree.length; i++) {
			if (tree[i].isPre()) {
				return true;
			}
		}
		return false;
	}
}

export = DomNode;
