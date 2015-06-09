/// <reference path="../../references.d.ts" />

// Class implementation complete

class LastCommonParentResult implements daisydiff.ILastCommonParentResult {
	parent;
	splittingNeeded = false;
	lastCommonParentDepth = -1;
	indexInLastCommonParent = -1;	
};

export = LastCommonParentResult;
