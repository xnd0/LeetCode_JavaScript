// 1160. Find Words That Can Be Formed by Characters

// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

let words = ["cat","bt","hat","tree"];
let chars = "atach";

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {

    let n = 0;

    words.forEach((word) => {
        let contains = true;
        let str = chars;

        if (word.length <= chars.length) {
            for (let w of word) {
                contains = contains && str.includes(w);
                contains ? (str = str.replace(w, "")) : null;
            }
        } else {
            contains = false;
        };

        if (contains) {
            n += word.length;
        };
    });

    return n;
};

console.log(countCharacters(words, chars));

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.