/**
 * @param {string} s
 * @return {boolean}
 */

let s = "adab"

var repeatedSubstringPattern = function (s) {

    let max = (s.length / 2);
    let pattern = '';

    if (s.length < 2) return false;

    for (let i = 0; i < max; i++) {
        pattern += s[i];

        if (!s.split(pattern).join('')) {
            return true
        };
    };

    return false;
};

console.log(repeatedSubstringPattern(s));

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.