let code = "000000010000101100010101"
let spoken = [];
let counter, getStart = 0, getEnd = 8;
let wordlist = [
    null, "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
let wordFound = "";

for(counter = 0; counter < code.length / 8; counter++){
    spoken[counter] = code.slice(getStart, getEnd);
    getStart = getStart + 8;
    getEnd = getEnd + 8;

    let wordCode = parseInt((spoken[counter] + '').replace(/[^01]/gi), 2);
    for(let compile = 0; compile < 26; compile++){
        if(wordCode == compile){
           wordFound = wordFound + wordlist[compile]; 
        }
    }
}
console.log(wordFound);