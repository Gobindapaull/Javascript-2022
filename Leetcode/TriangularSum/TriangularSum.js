/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    let n = nums.length;
    let coeffs = new Array(n).fill(0);
    coeffs[0] = 1;

    for (let row = 1; row < n; row++) {
        for (let j = row; j > 0; j--) {
            coeffs[j] = (coeffs[j] + coeffs[j - 1]) % 10;
        }
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res = (res + coeffs[i] * nums[i]) % 10;
    }
    return res;
};

// https://leetcode.com/problems/find-triangular-sum-of-an-array/
