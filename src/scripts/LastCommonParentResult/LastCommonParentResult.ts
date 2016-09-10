import { IDomNode } from '../DomNode/DomNode';

// Class implementation complete
export default class LastCommonParentResult implements ILastCommonParentResult {
	parent;
	splittingNeeded = false;
	lastCommonParentDepth = -1;
	indexInLastCommonParent = -1;
};

export interface ILastCommonParentResult {
	parent: IDomNode;
	splittingNeeded: boolean;
	lastCommonParentDepth: number;
	indexInLastCommonParent: number;
}
