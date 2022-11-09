// 944. Delete Columns to Make Sorted

// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

/**
 * @param {string[]} strs
 * @return {number}
 */

let strs = ["cba", "daf", "ghi"];

var minDeletionSize = function (strs) {

    // number of columns to be deleted to make sorted
    var n = 0;

    // iterate through first word in strs array
    for (var index = 0; index < strs[0].length; index++) {

        // iterate through full strs array
        for (var i = 0; i < strs.length - 1; i++) {

            // check if the character at the index in this word is greater than the next
            if (strs[i].charAt(index) > strs[i + 1].charAt(index)) {
                n++;
                break;
            };
        };
    };

    return n;
};

console.log(minDeletionSize(strs));

// Input: strs = ["cba","daf","ghi"]
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.