// 1047. Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

let s = "aabbccddxeeygffffgz";
// let s = "abbaca";

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {

    // Result array to be returned. Must convert back to string to pass test.
    let result = [];

    // Check for duplicate, then push or pop accordingly.
    for (let i = 0; i < s.length; i++) {
        if (result.length > 0 && result[result.length - 1] === s[i]) {
            result.pop();
        } else {
            result.push(s[i]);
        }
    };

    return result.join('');
};

console.log(removeDuplicates(s));

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".