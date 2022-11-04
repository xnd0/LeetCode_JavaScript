// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const n = 2;

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let step = [];
    step[0] = 1;
    step[1] = 1;

    for (let index = 2; index <= n; index++) {
        step[index] = step[index - 1] + step[index - 2]
    };

    return step[n];
};

console.log((climbStairs(n)));

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
