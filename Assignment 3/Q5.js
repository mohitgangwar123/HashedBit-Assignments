function correctFn(sentence, wrong, correct) {
    
    let updatedSentence = sentence.replace(wrong, correct);
    console.log(updatedSentence);
}


correctFn("I luv programming in JavaScript", "luv", "love");
