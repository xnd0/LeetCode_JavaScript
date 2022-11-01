// 2185. Counting Words With a Given Prefix

// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

// traverse the list, then check each word is with a given prefix (pref)

words = ["pay","attention","practice","attend"];
pref = "at";

const prefixCount = (words, pref) => {

    let count = 0;

    for (const word of words) {
        word.startsWith(pref) && ++count;
    };

    return count;
};

console.log(prefixCount(words, pref))

