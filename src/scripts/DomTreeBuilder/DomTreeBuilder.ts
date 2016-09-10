import BodyNode from '../BodyNode/BodyNode';

export default class DomTreeBuilder {
	bodyNode = this.currentParent = new BodyNode();
	bodyStarted = false;
	bodyEnded = false;
	textNodes = [];

	private notInPre = true;
	private newWord = ''
	private whiteSpaceBeforeThis = true
	private currentParent: any;

	// leaving off here to write BodyNode and DummyNode
}
