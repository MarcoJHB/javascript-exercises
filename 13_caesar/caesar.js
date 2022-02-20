// test if upperCase
function isUpperCase(str) {
    return str === str.toUpperCase();
}


const caesar = function(str,shift) {

let decipher = "";

// wrap the shift
if (shift < 0) {
    return caesar(str, shift + 26)
}

for (let i = 0; i < str.length; i++) {

    if (!str[i].match(/[a-zA-Z]/)) {
        decipher += str[i];
    }
    else if(isUpperCase(str[i])) {
        decipher += String.fromCharCode((str.charCodeAt(i) + shift - 65) % 26 + 65);

    } else {
        decipher += String.fromCharCode((str.charCodeAt(i) + shift - 97) % 26 + 97);
    }

}

return decipher;

};


console.log(caesar("Hello My Name is Marco!", -20));


// Do not edit below this line
module.exports = caesar;
