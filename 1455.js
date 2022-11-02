// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

// Split the sentence by space. 
// Then, for loop to check the words return either -1 or (n) first match location.

sentence = "i love eating burger";
searchWord = "burg";

const isPrefixOfWord = (sentence, searchWord) => {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return (i + 1);
        };
    };

    return -1;
};

console.log(isPrefixOfWord(sentence, searchWord));

// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.