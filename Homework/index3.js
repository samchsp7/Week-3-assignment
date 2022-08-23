let repeatedWord = (word, n) => {
    let result ="";
    for (let i= 0; i < n; i++){
        result += word;
    }
    return result;
};

console.log(repeatedWord("word", 3));