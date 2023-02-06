import cartesianProduct from "./index.js";

describe("test", () => {
    test("cartesianProduct", () => {
        const expected = [
            [ 1, 4 ], [ 2, 4 ],
            [ 3, 4 ], [ 1, 5 ],
            [ 2, 5 ], [ 3, 5 ],
            [ 1, 6 ], [ 2, 6 ],
            [ 3, 6 ]
            ]
        const result = cartesianProduct([1,2,3],[4,5,6]);
        expect(result.length).toEqual(9);
        [...result].forEach(([a,b], index) => {
            expect(a).toEqual(expected[index][0]);
            expect(b).toEqual(expected[index][1]);
        })
    })
})