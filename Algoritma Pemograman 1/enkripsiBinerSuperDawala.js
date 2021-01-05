let enkripsi = "aku";
let decimalList = {
    "a" : 1,
    "b" : 2,
    "c" : 3,
    "d" : 4,
    "e" : 5,
    "f" : 6,
    "g" : 7,
    "h" : 8,
    "i" : 9,
    "j" : 10,
    "k" : 11,
    "l" : 12,
    "m" : 13,
    "n" : 14,
    "o" : 15,
    "p" : 16,
    "q" : 17,
    "r" : 18,
    "s" : 19,
    "t" : 20,
    "u" : 21,
    "v" : 22,
    "w" : 23,
    "x" : 24,
    "y" : 25,
    "z" : 26,
};

let a = "a";
console.log(enkripsi.split(""))
console.log(enkripsi[0], enkripsi[1], enkripsi[2])
console.log(decimalList[enkripsi[0]], decimalList[enkripsi[1]], decimalList[enkripsi[2]])

let counter;
let wordToBinary, codeFound, compiling = "";
for(counter = 0; counter < enkripsi.split("").length; counter++){
    wordToBinary = decimalList[enkripsi[counter]];
    codeFound = wordToBinary.toString(2);

    while(codeFound.length < 8) {
        codeFound = "0" + codeFound;    
    }
    compiling = compiling + codeFound;
}
console.log(compiling);