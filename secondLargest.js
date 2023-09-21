function getSecondLargest(nums) {
    nums.sort(function(a, b) { return a - b; });
    var max = nums[nums.length - 1];
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < max) {
            return nums[i];
        }
    }
}
