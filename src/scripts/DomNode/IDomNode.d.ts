/// <reference path="../../references.d.ts" />

declare module daisydiff {
	interface IDomNode {
		parent: IDomNode;
		whiteBefore: boolean;
		whiteAfter: boolean;
		getParentTree(): Array<any>;
		getLastCommonParent(other: any): any;
		setParent(parent: any): void;
		inPre(): boolean;
	}
}