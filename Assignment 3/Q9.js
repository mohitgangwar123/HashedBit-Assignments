function countWords(paragraph) {

    let para = "This is  a test";
let words = para.trim().split(" ");
console.log(words);

    return words.length;
}

let para = "This is a simple paragraph with several words.";
console.log("Word count:", countWords(para)); // Output: 8
