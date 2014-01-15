define([], function() {
	function LastCommonParentResult() {
		this.parent;
		this.splittingNeeded = false;
		this.lastCommonParentDepth = -1;
		this.indexInLastCommonParent = -1;	
	};

	return LastCommonParentResult;
});

// Class implementation complete