export default class Utils {
    public static htmlSpecialChars(text: string): string {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    public static isUndefined(val: any): boolean {
        return typeof val === "undefined";
    }

    public static isNull(val: any): boolean {
        return val === null;
    }

    public static isEmpty(val: any): boolean {
        return this.isUndefined(val) || this.isNull(val);
    }

    // TODO: see if there are more accepted ways to do this
    public static isArray(val: any): boolean {
        return typeof val.length === "number" && typeof val !== "string";
    }

    public static arraysEqual(arr1: Array<any>, arr2: Array<any>): boolean {
        if (arr1 == null || arr2 == null) return false;
        if (arr1.length != arr2.length) return false;

        return arr1.reduce((prev, current, index) => {
            let a = arr1[index];
            let b = arr2[index];

            if (this.isArray(a) && this.isArray(b)) {
                return this.arraysEqual(a, b);
            }

            return a === b;
        }, true);
    }
}
