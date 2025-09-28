/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a); // Descending order 

    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        let b = nums[i + 1];
        let c = nums[i + 2];

        if (b + c > a) {
            return a + b + c;
        }
    }
    return 0;
};

// https://leetcode.com/problems/largest-perimeter-triangle/
