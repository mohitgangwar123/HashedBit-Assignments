let str = "I like to earn money!";

str = str.toLowerCase();

let vowels = 0;
let consonants = 0;


for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (/[a-z]/.test(ch)) { // Check if it's a letter
        if ("aeiou".includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
