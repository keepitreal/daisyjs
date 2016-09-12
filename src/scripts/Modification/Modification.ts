export default class Modification {
    public static NONE = 1;
    public static REMOVED = 2;
    public static ADDED = 4;
    public static CHANGED = 8;
    public type;
    public id = -1;
    public firstOfID = false;
    public changes;

    constructor(type) {
        this.type = type;
    }

    public static typeToString(type) {
        switch(type) {
            case this.NONE:
                return 'none';
            case this.REMOVED:
                return 'removed';
            case this.ADDED:
                return 'added';
            case this.CHANGED:
                return 'changed';
        }
    }
}
