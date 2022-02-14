const palindromes = function (str) {
    let forwardPhrase = Array.from(str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, ''));
    // console.log(forwardPhrase);
    // console.log(forwardPhrase[forwardPhrase.length-1]);

    for (let i = 0; i< forwardPhrase.length / 2; i++) {
        if (forwardPhrase[i] !== forwardPhrase[forwardPhrase.length-1-i]) {
            // console.log("doesn't work");
            return false;
        }
    }
    return true;
};

// console.log(palindromes("RACECAR"));

// Do not edit below this line
module.exports = palindromes;
