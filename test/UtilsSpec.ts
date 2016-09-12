import Utils from '../src/scripts/Utils/Utils';

describe("The Utils class", () => {
    // isUndefined
    describe("has an isUndefined method that", () => {
        const foo = undefined;
        const bar = null;
        const baz = 'bing';
        it("returns true if a value is undefined", () => {
            expect(Utils.isUndefined(foo)).toEqual(true);
            expect(Utils.isUndefined(bar)).toEqual(false);
            expect(Utils.isUndefined(baz)).toEqual(false);
        });
    });

    // isNull
    describe("has an isNull method that", () => {
        const foo = undefined;
        const bar = null;
        const baz = 'bing';
        it("returns true if a value is null", () => {
            expect(Utils.isNull(foo)).toEqual(false);
            expect(Utils.isNull(bar)).toEqual(true);
            expect(Utils.isNull(baz)).toEqual(false);
        });
    });

    // isEmpty
    describe("has an isEmpty method that", () => {
        const foo = undefined;
        const bar = null;
        const baz = 'bing';
        it("returns true if a value is null or undefined", () => {
            expect(Utils.isEmpty(foo)).toEqual(true);
            expect(Utils.isEmpty(bar)).toEqual(true);
            expect(Utils.isEmpty(baz)).toEqual(false);
        });
    });

    // arraysEqual
    describe("has an arraysEqual method that", () => {
        it("returns true if two single dimension arrays have identical values and false if they do not", () => {
            const arr1 = [1,2,3];
            const arr2 = [1,2,3];
            const arr3 = ['a', 'b', 'c'];
            const arr4 = ['a', 'b', 'c'];
            const arr5 = ['b', 'c', 'a'];

            expect(Utils.arraysEqual(arr1, arr2)).toEqual(true);
            expect(Utils.arraysEqual(arr3, arr4)).toEqual(true);
            expect(Utils.arraysEqual(arr1, arr3)).toEqual(false);
            expect(Utils.arraysEqual(arr4, arr5)).toEqual(false);
        });

        it("returns true if two multidimensional arrays have identical values and false if they do not", () => {
            const arr6 = [[1], [2], [3]];
            const arr7 = [[1], [2], [3]];
            const arr8 = [[1], [2], [4]];
            const arr9 = [[[1], [2]], [[2]], [[3]]];
            const arr10 = [[[1], [2]], [[2]], [[3]]];
            const arr11 = [[[1], [3]], [[2]], [[3]]];
            expect(Utils.arraysEqual(arr6, arr7)).toEqual(true);
            expect(Utils.arraysEqual(arr6, arr8)).toEqual(false);
        });
    })
});
