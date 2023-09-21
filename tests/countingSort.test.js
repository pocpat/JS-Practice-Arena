const { arrayZirrows, countPlace} = require('../countingSort.js');

test("arrayZirrows([1, 1, 3, 2, 1]) to be [0, 0, 0,0, 0]", () => {
    expect(arrayZirrows([1, 1, 3, 2, 1])).toEqual([0, 0, 0,0, 0]);
})

test("arrayZirrows([6, -10, 3]) not to be [0, 0, 0]", () => {
    expect(arrayZirrows([6, -10, 3])).toEqual([0, 0, 0]);
})

test("in arr [4, 35, 1], the number 1 should have a count of 1", () => {
    const result = countPlace([4, 35, 1]);
    expect(result[1]).toBe(1);
  });
  