// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

// Use the String.prototype.split to split the sentence by space. Then for loop: traverse the words and check.

const isPrefixOfWord = (sentence, searchWord) => {

    const words = sentence.split(' ');

    for (let i = 0; i < words.length; ++i) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        };
    };

    return -1;
};