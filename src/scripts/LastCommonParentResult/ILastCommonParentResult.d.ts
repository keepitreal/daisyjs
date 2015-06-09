/// <reference path="../../references.d.ts" />

declare module daisydiff {
	interface ILastCommonParentResult {
		parent: daisydiff.IDomNode;
		splittingNeeded: boolean;
		lastCommonParentDepth: number;
		indexInLastCommonParent: number;
	}
}
