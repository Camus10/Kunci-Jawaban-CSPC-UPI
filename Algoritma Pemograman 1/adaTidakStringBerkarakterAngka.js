let arrayOfString = ["4ku", "4d4l4h", "4n4k", "g3mb4l4"];

let checkString = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let counterHead, counterBody, counterCheck;
let statusNumber = 0, statusValid = 0;
for(counterHead = 0; counterHead < arrayOfString.length; counterHead++){
    for(counterBody = 0; counterBody < arrayOfString[counterHead].length; counterBody++){
        for(counterCheck = 0; counterCheck < checkString.length; counterCheck++){
            if(arrayOfString[counterHead][counterBody] == checkString[counterCheck]){
                statusNumber++;
            }
        }
    }
    if(statusNumber >= 2){
        statusValid++;
    }
    statusNumber = 0;
}

console.log((statusValid >= 3) ? "yes" : "no");