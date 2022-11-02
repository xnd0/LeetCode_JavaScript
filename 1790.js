// 1790. Check if One String Swap Can Make Strings Equal

// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

s1 = "bank"; 
s2 = "kanb";

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

 var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) {
        return true;
    };

    let nonmatch = [];

    for (let i = 0; i < s2.length; i++) {
        if (s2[i] !== s1[i]) {
            nonmatch.push(i);
        }
    };

    if (nonmatch.length !== 0 && nonmatch.length !== 2) {
        return false;
    };

    let x = 
    s1[nonmatch[0]] === s2[nonmatch[1]] && 
    s1[nonmatch[1]] === s2[nonmatch[0]];

    return x;
};

console.log(areAlmostEqual(s1, s2));

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".