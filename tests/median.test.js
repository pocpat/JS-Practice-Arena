const  {sortArr, medianIndex} = require  ('../findMedian.js');
describe("findMedian", () => {
test("not sorted array [165234] to be [123456]", () => {
    expect(sortArr([1,6,5,2,3,4])).toEqual([1,2,3,4,5,6]);
})
test("not sorted array [6,4,8] to be [4,6,8]", () => {
    expect(sortArr([6,4,8])).toEqual([4,6,8]);
})

test("the median from [1,2,3,4,5] to be 3", () => {
    expect(medianIndex([1,2,3,4,5])).toBe(3);
})
test("the median from [1,2,3,4,5,6,7,8,9] not to be 3", () => {
    expect(medianIndex([1,2,3,4,5,6,7,8,9])).not.toBe(3);
})
})