// 2427. Number of Common Factors

// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

let a = 12;
let b = 6;

const commonFactors = (a, b) => {

    let n = 1;
    let limit = (Math.min(a, b) + 1);

    for (let i = 2; i < limit; i++)
        if (a % i === 0 && b % i === 0) {
            n++
        };

    return n;
};

console.log(commonFactors(a, b));

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.