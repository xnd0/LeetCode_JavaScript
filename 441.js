// 441. Arranging Coins

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {

    let rows = 0;
    let i = n;

    while (i > 0) {
        rows++;
        i = (i - rows);
        i--;
    };
    
    return rows;
};

console.log(arrangeCoins(n));

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.