// 1800. Maximum Ascending Subarray Sum

// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [10, 20, 30, 5, 10, 50];
// nums = [12, 17, 15, 13, 10, 11, 12];

var maxAscendingSum = function (nums) {
    let sum = 0;
    let maxSum = 0;
    let maxList = [];

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        maxSum = Math.max(maxSum, sum);
        maxList.push(maxSum);

        if (nums[i + 1] <= nums[i]) {
            sum = 0;
            maxSum = 0;
        };
    };

    return Math.max(...maxList);
};

console.log(maxAscendingSum(nums));

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.