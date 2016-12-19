import DomTreeBuilder from '../DomTreeBuilder/DomTreeBuilder';

export default class HTMLDiffer {
    debug: any;
    output: any;

    constructor(output) {
        this.output = output;
    }

    htmlDiff(from: string, to: string) {
        var domfrom;
        // need some way to parse xml

        domfrom = new DomTreeBuilder();

        // left off here to define DomTreeBuilder
        alert(domfrom.greeting);
    }
}
